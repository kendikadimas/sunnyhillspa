"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { navLinks, site, waLinkJakarta, waLinkSurabaya } from "@/lib/site";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-2 sm:px-4 pt-2.5 sm:pt-4 transition-all duration-300">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-3 sm:px-6 py-2 transition-all duration-300 ${
          scrolled
            ? "bg-[#fdfbf7]/95 backdrop-blur-md shadow-[0_10px_35px_rgba(41,56,34,0.12)] border border-[#e5dec9]"
            : "bg-[#fdfbf7]/90 backdrop-blur-md border border-white/80 shadow-sm"
        }`}
      >
        {/* Brand Logo & Title */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group shrink-0 min-w-0"
        >
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-105 shadow-2xs">
            <Image
              src="/sunnyhillspa.png"
              alt="Sunny Hill Spa Logo"
              fill
              unoptimized
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-xs sm:text-base font-bold tracking-wide text-[#293822]">
              SUNNY HILL <span className="font-light text-[#4e6c3c]">SPA</span>
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] font-sans font-semibold tracking-wider text-[#4e6c3c] uppercase mt-0.5">
              Sanctuary 24 Jam
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <ul className="hidden lg:flex items-center gap-5 text-[11px] tracking-wider uppercase font-bold text-[#3f5532]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-[#1c2715] hover:underline underline-offset-4 decoration-[#4e6c3c]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Admin WhatsApp CTAs (Hidden on mobile, visible on tablet & desktop) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href={waLinkJakarta}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 rounded-full border border-[#4e6c3c]/30 bg-[#f4f6f0] px-3 py-1.5 text-[11px] font-bold text-[#3f5532] transition hover:border-[#4e6c3c] hover:bg-white shadow-2xs"
            title="Chat Admin Jakarta"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 text-[#4e6c3c] shrink-0" />
            <span>Jakarta</span>
          </a>
          <a
            href={waLinkSurabaya}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 rounded-full bg-[#3f5532] px-3.5 py-1.5 text-[11px] font-bold text-white shadow-xs transition hover:bg-[#293822]"
            title="Chat Admin Surabaya"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 text-[#dce7ce] shrink-0" />
            <span>Surabaya</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-1.5 text-[#3f5532] hover:text-[#1c2715] rounded-full hover:bg-black/5"
            aria-label="Toggle Navigation"
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-x-3 top-16 z-50 rounded-3xl border border-[#e5dec9] bg-[#fdfbf7] p-5 text-center text-[#293822] shadow-2xl lg:hidden animate-in fade-in zoom-in-95">
          <ul className="flex flex-col gap-3.5 py-2 text-sm font-serif">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#4e6c3c] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 pt-3 border-t border-[#e8e2d5]">
            <a
              href={waLinkJakarta}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#4e6c3c] py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Admin Jakarta (24 Jam)
            </a>
            <a
              href={waLinkSurabaya}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#293822] py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#c2d6af]" />
              Admin Surabaya (24 Jam)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
