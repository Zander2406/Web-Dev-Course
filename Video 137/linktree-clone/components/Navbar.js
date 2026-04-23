"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
    const showNavbar = ["/", "/generate"].includes(pathname)
    return (
        <>{showNavbar && <nav className='bg-white w-[80vw] flex justify-between fixed top-10 right-[10vw] rounded-full px-7 py-5'>
            <div className="logo flex gap-20 items-center">
                <Link href={"/"}>
                    <img className='h-8' loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" class="nav-desktop-logo"></img>
                </Link>

                <ul className='flex gap-10'>
                    <Link href="/"><li>Templates</li></Link>
                    <Link href="/"><li>Marketplace</li></Link>
                    <Link href="/"><li>Discover</li></Link>
                    <Link href="/"><li>Pricing</li></Link>
                    <Link href="/"><li>Learn</li></Link>
                </ul>

                <div className='flex gap-2'>
                    <button className="login bg-gray-400 font-bold p-4 rounded-lg">Login</button>
                    <button className="signup bg-gray-900 font-bold text-white p-4 rounded-full">Signup Free</button>
                </div>
            </div>
        </nav>}</>
    )
}

export default Navbar
