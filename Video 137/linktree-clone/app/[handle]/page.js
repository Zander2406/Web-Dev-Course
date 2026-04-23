import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const myhandle = (await params).handle
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")
    const item = await collection.findOne({ handle : myhandle })
    if (!item) {
        return notFound()
    }

    const item2 = {
        "_id": {
            "$oid": "69e8a423d182ec07b5b6a284"
        },
        "links": [
            {
                "link": "fb.com",
                "linktext": "facebook"
            },
            {
                "link": "instagram.com",
                "linktext": "insta"
            },
            {
                "link": "x.com",
                "linktext": "twitter"
            }
        ],
        "handle": "zander",
        "pic": "https://avatars.githubusercontent.com/u/71953957"
    }

    return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
        <div className="photo flex justify-center flex-col items-center gap-4">
            <img src={item.pic} alt="" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="desc w-80 text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index)=> {
                    return <Link href={item.link} key={index}><div className="min-w-96 flex justify-center py-4 shadow-lg px-2 bg-white rounded-md my-3">
                        {item.linktext}
                    </div></Link>
                })}
            </div>
        </div>
    </div>
}