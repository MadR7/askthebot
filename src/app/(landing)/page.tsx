"use client"

import React, { FormEvent } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

export default function Landing() {
  const router = useRouter()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const url = new FormData(form).get('url') as string
    if (url) {
      router.push(`/${url}`)
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center pt-[25rem] bg-gradient-to-b from-[#11112c] to-[#15162c] text-white">
        <div className="flex flex-col items-center justify-center sm:px-5 lg:px-[20rem] text-center font-extrabold tracking-tight">
          <h1 className="text-5xl sm:text-[3rem]">
            Your very own <span className="text-[hsl(52,77%,65%)]">AI-Powered</span> helper to answer your questions about any article
          </h1>
          <p className="mt-6 text-lg text-center text-gray-400">
          Capture Every Word, Understand Every Concept
          </p>
        </div>
        <div className='flex flex-col items-center justify-center sm:px-5 lg:px-[20rem] text-center font-extrabold tracking-tight pt-10'>
        <form onSubmit={handleSubmit}>
        <input
          className='border-2 border-[hsl(52,77%,65%)] px-5 py-2  text-white'
          type="url"
          name="url"
          placeholder="https://example.com/"
          required
        />
        <button className= "pl-5 text-[hsl(52,77%,65%)]" type="submit">
            <FaPaperPlane />
        </button>
      </form>
        </div>
      </div>
  )
}
