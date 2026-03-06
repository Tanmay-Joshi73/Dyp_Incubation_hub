"use client";

import React, { useEffect, useState } from "react";

const NAV_LINKS = ["About Us", "Our Team", "Companies", "Resources", "News"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          sticky top-0 z-50 flex items-center justify-between
          px-8 py-7 md:px-12 lg:px-20 xl:px-24
          bg-transparent backdrop-blur-sm transition-all duration-300
          ${scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.05)]" : ""}
        `}
      >
        {/* Logo */}
        <a href="/" className="text-3xl font-bold tracking-tight text-black flex items-center gap-[1px] shrink-0">
          Balderton<span className="text-[#e23e3e]">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-bold tracking-widest uppercase text-black/70">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="relative py-1.5 hover:text-black transition-colors duration-150 group"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e23e3e] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}

          {/* Search toggle */}
          <button
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className={`ml-3 p-2 rounded-full transition-colors duration-150 ${
              searchOpen ? "bg-black text-white" : "hover:bg-black/10 text-black/70 hover:text-black"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[6px] p-1.5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] w-6 bg-black transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`block h-[2px] w-6 bg-black transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-black transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </nav>

      {/* Expanding search bar */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-300 bg-white/90 backdrop-blur-sm border-b border-black/8 ${
          searchOpen ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 md:px-12 lg:px-20 xl:px-24 py-4 flex items-center gap-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/50 shrink-0">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            autoFocus={searchOpen}
            type="text"
            placeholder="Search…"
            className="w-full text-base text-black placeholder:text-black/40 bg-transparent outline-none"
          />
          <button onClick={() => setSearchOpen(false)} className="text-[12px] tracking-widest uppercase text-black/40 hover:text-black transition-colors">
            Esc
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/90 backdrop-blur-sm border-b border-black/8 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-8 py-6 gap-5">
          {NAV_LINKS.map((label) => (
            <a key={label} href="#" className="text-[14px] font-bold tracking-widest uppercase text-black/70 hover:text-black transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}