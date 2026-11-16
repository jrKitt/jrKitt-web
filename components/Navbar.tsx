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
import ThemeToggle from "./ThemeToggle";

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
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-black tracking-tight text-slate-800 shadow-sm transition group-hover:border-sky-500 group-hover:text-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:group-hover:border-sky-400 dark:group-hover:text-sky-400">
            JR
          </div>
          <span className="hidden font-mono text-xs font-semibold tracking-wider text-slate-700 transition sm:inline-block dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-white">
            jrkitt<span className="text-sky-600 dark:text-sky-400">.dev</span>
          </span>
        </Link>

        {/* Center Floating Pill Navigation */}
        <nav 
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/80 dark:shadow-black/20"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <Icon className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          <ThemeToggle />

          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 font-mono text-xs font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-white"
          >
            <FiFileText className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
            <span>Resume</span>
          </a>

          <a
            href="mailto:kittichdev@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-900 bg-slate-900 px-3.5 py-1.5 font-mono text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:border-sky-400 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
          >
            <span>Let&apos;s talk</span>
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition md:hidden hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-md md:hidden dark:border-slate-800 dark:bg-slate-900/95">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 font-mono text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  <Icon className="h-4 w-4 text-sky-600 dark:text-sky-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-800">
              <a
                href="/cv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
              >
                <FiFileText className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
                <span>View Resume</span>
              </a>
              <ThemeToggle showLabel />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
