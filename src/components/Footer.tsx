import Image from "next/image";
import { navLinks, site, waLinkJakarta, waLinkSurabaya } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="w-full bg-[#293822] text-[#e4ebe0] pt-16 pb-12 px-4 border-t border-[#3f5532]">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-12 border-b border-white/15">
          {/* Brand Col */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white/10 p-1 shadow-sm">
                <Image
                  src="/sunnyhillspa.png"
                  alt="Sunny Hill Spa Logo"
                  fill
                  unoptimized
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-normal text-white block">
                  {site.shortName}
                </span>
                <span className="text-[9px] font-sans font-semibold tracking-wider text-[#c2d6af] uppercase">
                  Spa &amp; Wellness
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[#c2d6af]/80">
              {site.subheadline}
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={waLinkJakarta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#4e6c3c] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#5f8456]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Admin Jakarta (24 Hours)
              </a>
              <a
                href={waLinkSurabaya}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-white/20"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#c2d6af]" />
                Admin Surabaya (24 Hours)
              </a>
            </div>
          </div>

          {/* Nav Links Col */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#c2d6af] mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs font-sans">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Col */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#c2d6af] mb-4">
              Locations &amp; Availability
            </h4>
            <p className="text-xs leading-relaxed text-[#e4ebe0]/80">
              Jakarta &amp; Surabaya — Home, Hotel, Villa &amp; Apartment visits.
            </p>
            <p className="mt-2 text-xs text-[#c2d6af]">
              Open 24/7 non-stop for booking appointments.
            </p>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#c2d6af]/60">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
