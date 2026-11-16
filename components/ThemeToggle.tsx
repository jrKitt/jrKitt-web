"use client";

import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div 
        className={`h-9 w-9 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 ${className}`} 
        aria-hidden="true" 
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
      title={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm transition-all hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white dark:hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/30 ${className}`}
    >
      {isDark ? (
        <FiSun className="h-4 w-4 text-amber-400 transition-transform hover:rotate-45" />
      ) : (
        <FiMoon className="h-4 w-4 text-slate-700 transition-transform hover:-rotate-12" />
      )}
      {showLabel && (
        <span className="font-mono text-xs">
          {isDark ? "Light mode" : "Dark mode"}
        </span>
      )}
    </button>
  );
}
