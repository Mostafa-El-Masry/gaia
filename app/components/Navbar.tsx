import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo */}
        <div className="text-2xl font-bold tracking-wide">
          GAIA
        </div>

        {/* Right side: Links */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-emerald-400 transition">
            Home
          </Link>
          <Link href="/log" className="hover:text-emerald-400 transition">
            Log
          </Link>
          <Link href="/wealth" className="hover:text-emerald-400 transition">
            Wealth
          </Link>
          <Link href="/gallery" className="hover:text-emerald-400 transition">
            Gallery
          </Link>
          <Link href="/videos" className="hover:text-emerald-400 transition">
            Videos
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white hover:text-emerald-400">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
