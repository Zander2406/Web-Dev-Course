// 'use client'
// import { use } from 'react'
// import { useParams } from 'next/navigation'

// export default async function BlogPostPage({ params }) {
// //   const { slug } = use(params)
// const { val } = await params
// //   const p = useParams()
//   console.log(val)
// //   console.log(p)

//   return (
//     <div>I am an about page look at console</div>
//   )
// }

export default async function Page({ params }) {

    const { val } = await params
    console.log(val)
    return <div>I am an about page look at console</div>

}