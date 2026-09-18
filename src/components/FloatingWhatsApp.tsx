"use client";

import { useState } from "react";
import { site, waLinkJakarta, waLinkSurabaya } from "@/lib/site";
import { WhatsAppIcon, CloseIcon } from "./icons";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7 flex flex-col items-end gap-2.5">
      {/* Popover options when clicked */}
      {open && (
        <div className="flex flex-col gap-2 rounded-2xl border border-[#d6dec9] bg-[#f6f3eb] p-3.5 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 w-56">
          <div className="flex items-center justify-between pb-2 border-b border-[#e4ebe0]">
            <span className="text-[11px] font-bold text-[#293822] uppercase tracking-wider">
              Pilih Admin Terdekat
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-[#293822]/60 hover:text-[#293822]"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <a
            href={waLinkJakarta}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-xl bg-[#4e6c3c] p-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#3f5532]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <div className="flex flex-col text-left">
              <span>Admin Jakarta</span>
              <span className="text-[10px] font-normal text-[#c2d6af]">Fast response 24 jam</span>
            </div>
          </a>

          <a
            href={waLinkSurabaya}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-xl bg-[#293822] p-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#1a2516]"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#c2d6af] shrink-0" />
            <div className="flex flex-col text-left">
              <span>Admin Surabaya</span>
              <span className="text-[10px] font-normal text-[#c2d6af]">Fast response 24 jam</span>
            </div>
          </a>
        </div>
      )}

      {/* Main floating trigger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={`Chat WhatsApp ${site.phoneDisplay}`}
        className="group flex items-center gap-2.5 rounded-full bg-[#4e6c3c] py-2.5 pl-3 pr-4 text-xs font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#3f5532] border border-white/30 backdrop-blur-sm"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20">
          <WhatsAppIcon className="h-4 w-4" />
        </span>
        <span className="font-medium tracking-wide">Hubungi Admin 24/7</span>
      </button>
    </div>
  );
}
