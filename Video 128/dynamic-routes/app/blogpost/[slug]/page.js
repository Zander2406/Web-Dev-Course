export default async function Page({ params }) {
    // throw new Error("Error hai")
    // Fetch your blog post by its slug
    let languages = ["python", "javascript", "java", "cpp", "cs"]
    const { slug } = await params
    if (languages.includes(slug)) {
        return <div>My Post: {slug}</div>
    }
    else {
        return <div>Post not found</div>
    }
}