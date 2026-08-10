import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-900 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold text-slate-200 transition hover:text-sky-400">
            jrKitt
          </Link>
          <div className="hidden md:flex gap-4 text-sm font-medium text-slate-400">
            <Link href="/" className="transition hover:text-slate-100">Home</Link>
            <Link href="/#blog" className="transition hover:text-slate-100">Blog</Link>
            <Link href="/projects" className="transition hover:text-slate-100">Projects</Link>
            <a href="/cv.html" target="_blank" className="transition hover:text-slate-100">Resume</a>
            <Link href="mailto:kittichdev@gmail.com" className="transition hover:text-slate-100">Contact</Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://webring.wonderful.software#jrkitt.com"
            title="Webring"
            className="ring-rotate inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-400 text-black transition hover:scale-110 hover:bg-sky-300"
          >
            <img
              alt="Webring"
              width="14"
              height="14"
              src="https://webring.wonderful.software/webring.white.svg"
              className="brightness-0"
            />
          </a>
          <a
            href="https://ssm.jrkitt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:bg-slate-800 hover:text-sky-400"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
