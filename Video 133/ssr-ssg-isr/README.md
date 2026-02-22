This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## SSR - Server Side Rendering
This is default behaviour - In this pages are rendered as server components so when we initiate calls or funtions they interact with the server unless we specifically declare that they are client components.

## SSG - Static Site Generation
Any content that does not have network calls is a static page by default - in this during the final build of our app pages without network calls are generated as static pages which can be served without needing the help of a server everytime. (It almost becomes a normal HTML page instead of a complicated react component)

## ISG or ISR - 
Fetch in Next.js caches the response
To opt out use :
```
export const dynamic = 'force-dynamic';
```
However, there are exceptions, fetch requests are not cached when:

- Used inside a Server Action
- Used inside a Route handler that uses the POST method
