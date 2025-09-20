'use client'
import Link from 'next/link'

const Navbar = () => {
  
  return (
    <>

    <nav className="bg-gray-900 text-white px-6 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          GAIA
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/log" className="hover:text-blue-400">Log</Link>

          <Link href="/money" className="hover:text-blue-400">Money</Link>
          <Link href="/photos" className="hover:text-blue-400">Photos</Link>
          <Link href="/videos" className="hover:text-blue-400">Videos</Link>
        </div>
      </div>
    </nav>
    
  </>
  )
}

export default Navbar