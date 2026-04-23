import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body = await request.json()

    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    // If the handle is already claimed then you cannot create a BitTree
    const doc = await collection.findOne({ handle: body.handle })
    if (doc) {
        return Response.json({ success: false, message: 'Handle already claimed. Please choose another one.', error: true, result: null })
    }

    const result = await collection.insertOne(body)
    
    return Response.json({ success: true, message: 'Your Bittree has been generated. Enjoy!', result: result, error: false })
}