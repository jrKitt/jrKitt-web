import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/80 px-6 py-4 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          jrKitt
        </Link>
        <div className="hidden md:flex gap-4 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/#blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="mailto:contact@jrkitt.dev" className="hover:text-blue-600 transition-colors">Contact</Link>
          <a
            href="https://webring.wonderful.software#jrkitt.com"
            title="Webring"
            className="ring-rotate inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-300 text-white transition hover:scale-110 ml-2"
          >
            <img
              alt="Webring"
              width="14"
              height="14"
              src="https://webring.wonderful.software/webring.white.svg"
              className="brightness-0 invert"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
