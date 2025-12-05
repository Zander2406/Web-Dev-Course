// import { NextResponse } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//     return NextResponse.json({ message: 'Hello from the about page' })
//     return NextResponse.redirect(new URL('/', request.url))
// }

// // Alternatively, you can use a default export:
// // export default function proxy(request) { ... }

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/about/:path*',
// }

import { NextResponse } from "next/server";

export function proxy(request) {
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.rewrite(new URL('/', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}