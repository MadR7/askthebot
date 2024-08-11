import React from 'react'
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";

export default async function Header() {
  return (
    <div className='h-full w-full'>
        <nav className="flex fixed items-center justify-between w-full bg-[#06060f] px-4 sm:px-6 py-4">
          <Link href="/" className="font-extrabold tracking-tight text-white">   
            Ask the <span className="text-[hsl(52,77%,65%)]">Bot</span>
          </Link>
          <CgProfile className='text-[hsl(52,77%,65%)] text-3xl'/>
        </nav>
    </div>
  )
}