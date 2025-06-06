import Link from "next/link";
import React from 'react'


function Header() {
  return (
    <>
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h1 className="text-xl font-bold">My Website</h1>
            <nav>
            <ul className="flex space-x-4">
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/users">Users</Link>
            </ul>
            </nav>
          </header>
         <main className="p-4">
        </main>
    </>
  )
}

export default Header
