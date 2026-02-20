"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-sm font-bold">
            V
          </div>
          <span className="font-semibold text-white text-lg tracking-tight">
            Vibe Labs
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="px-4 py-2 rounded-full text-sm font-medium border border-violet-500/50 text-violet-300 hover:bg-violet-500/10 transition-all"
        >
          Apply Now →
        </a>
      </div>
    </nav>
  );
}
