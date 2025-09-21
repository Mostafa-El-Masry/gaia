'use client'
import { useState } from 'react';


import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>

    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <button className='md:hidden block text-gray-800' onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          GAIA
        </Link>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} `}>
        {/* Links */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/log" className="hover:text-blue-400">Log</Link>

          <Link href="/money" className="hover:text-blue-400">Money</Link>
          <Link href="/photos" className="hover:text-blue-400">Photos</Link>
          <Link href="/videos" className="hover:text-blue-400">Videos</Link>
        </div>
        </div>
      </div>
    </nav>
    
  </>
  )
}

export default Navbar