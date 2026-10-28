"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FiHome, 
  FiUser, 
  FiCode, 
  FiFolder, 
  FiBriefcase, 
  FiMail, 
  FiArrowUpRight, 
  FiMenu, 
  FiX, 
  FiFileText 
} from "react-icons/fi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home", icon: FiHome },
    { name: "About", href: "/#about", icon: FiUser },
    { name: "Skills", href: "/#skills", icon: FiCode },
    { name: "Projects", href: "/#projects", icon: FiFolder },
    { name: "Experience", href: "/#experience", icon: FiBriefcase },
    { name: "Contact", href: "/#contact", icon: FiMail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        
        {/* Monogram Brand */}
        <Link 
          href="/" 
          className="group flex items-center gap-2.5"
          aria-label="Kittichai Raksawong home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a2233] bg-[#0d1017] text-sm font-black tracking-tight text-white transition group-hover:border-[#00f0ff] group-hover:text-[#00f0ff]">
            JR
          </div>
          <span className="hidden font-mono text-xs font-semibold tracking-wider text-slate-300 sm:inline-block group-hover:text-white transition">
            jrkitt<span className="text-[#00f0ff]">.dev</span>
          </span>
        </Link>

        {/* Center Floating Pill Navigation (Worachat Style) */}
        <nav 
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-[#1a2233] bg-[#0d1017] px-3 py-1.5 shadow-xl"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-xs font-medium text-slate-400 transition hover:bg-[#151b28] hover:text-[#00f0ff]"
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#1a2233] bg-[#0d1017] px-3.5 py-1.5 font-mono text-xs font-medium text-slate-300 transition hover:border-[#00f0ff] hover:text-[#00f0ff]"
          >
            <FiFileText className="h-3.5 w-3.5 text-[#00f0ff]" />
            <span>Resume</span>
          </a>

          <a
            href="mailto:kittichdev@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#00f0ff] bg-[#00f0ff] px-4 py-1.5 font-mono text-xs font-bold text-black transition hover:bg-[#38bdf8] hover:border-[#38bdf8]"
          >
            <span>Let&apos;s talk</span>
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a2233] bg-[#0d1017] text-slate-300 md:hidden hover:border-[#00f0ff] hover:text-[#00f0ff]"
            aria-label="Open navigation"
          >
            {mobileMenuOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[#1a2233] bg-[#0d1017] p-4 shadow-2xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 font-mono text-sm text-slate-300 transition hover:bg-[#151b28] hover:text-[#00f0ff]"
                >
                  <Icon className="h-4 w-4 text-[#00f0ff]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="mt-2 flex items-center justify-between border-t border-[#1a2233] pt-3">
              <a
                href="/cv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-[#00f0ff]"
              >
                <FiFileText className="h-3.5 w-3.5 text-[#00f0ff]" />
                <span>View Resume</span>
              </a>
              <a
                href="https://github.com/jrKitt"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-slate-400 hover:text-white"
              >
                github.com/jrKitt
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
