"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow">
            V
          </div>
          <span className="font-semibold text-white text-[17px] tracking-[-0.02em]">
            Vibe Labs
          </span>
          <span className="text-gray-600 text-sm hidden sm:inline">by Hashed</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-gray-400">
          {["About", "Portfolio", "Team", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-violet-400 after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="btn-primary px-5 py-2 rounded-full text-sm font-semibold text-white"
        >
          Apply Now →
        </a>
      </div>
    </nav>
  );
}
