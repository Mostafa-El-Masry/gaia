"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Log", href: "/log" },
    { name: "Wealth", href: "/wealth" },
    { name: "Gallery", href: "/gallery" },
    { name: "Videos", href: "/videos" },
    { name: "Apollo", href: "/apollo"},
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo */}
        <div className="text-2xl font-bold tracking-wide">GAIA</div>

        {/* Right side: Links */}
        <div className="space-x-6 hidden md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                href={link.href}
                className={`hover:text-emerald-400 transition ${
                  isActive
                    ? "underline font-bold cursor:pointer text-emerald-300"
                    : ""
                }`}
                key={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <ThemeToggle />
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white hover:text-emerald-400">☰</button>
        </div>
      </div>
    </nav>
  );
}
