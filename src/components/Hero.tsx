import Image from "next/image";
import { site, waLinkJakarta, waLinkSurabaya } from "@/lib/site";
import { WhatsAppIcon, StarFourIcon, CheckIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] w-full overflow-hidden px-3 pt-20 pb-10 sm:px-6 sm:pt-24"
    >
      {/* Outer arched sanctuary container */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-between overflow-hidden rounded-[28px] sm:rounded-[42px] border border-[#e5dec9] shadow-[0_20px_50px_rgba(41,56,34,0.08)] bg-[#faf8f5]">
        
        {/* Serene Sanctuary Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/premium_photo-1723867490491-10519f8ed969.avif"
            alt="Perawatan terapi salon spa Sunny Hill Spa"
            fill
            priority
            unoptimized
            sizes="(max-width: 1200px) 100vw, 1400px"
            className="object-cover object-center"
          />
          {/* Base Dark/Green Overlay for guaranteed contrast on text (Mobile & Desktop) */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/25" />
          {/* Green gradient overlay: from dark green/olive at bottom to transparent at top */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b2716]/98 via-[#293822]/85 via-50% to-[#1b2716]/30 sm:to-transparent" />
        </div>

        {/* Top Header Block: Badge, Serif Title, Description & Action CTAs */}
        <div className="relative z-10 mx-auto max-w-4xl pt-8 sm:pt-10 text-center px-3 sm:px-4 rounded-3xl sm:rounded-none bg-black/20 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none p-4 sm:p-0 my-2 sm:my-0">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-black/30 px-3.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-widest text-[#e4ebe0] shadow-sm backdrop-blur-sm uppercase">
            <StarFourIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#c2d6af]" />
            <span>{site.tagline}</span>
          </div>

          <h1 className="mt-3.5 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] leading-[1.08]">
            {site.name}
          </h1>

          <p className="font-serif italic text-base sm:text-xl md:text-2xl text-[#dce7ce] mt-1.5 sm:mt-2 tracking-wide font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            Place of Supreme Relaxation &amp; Holistic Healing
          </p>

          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-white font-sans font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
            {site.description}
          </p>

          {/* Quick Highlight Badges */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-white font-semibold">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-3 py-0.5 sm:py-1 backdrop-blur-sm border border-white/25 shadow-xs">
              <CheckIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#c2d6af]" /> 24 Jam Panggilan Non-Stop
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-3 py-0.5 sm:py-1 backdrop-blur-sm border border-white/25 shadow-xs">
              <CheckIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#c2d6af]" /> Hotel, Rumah, Villa &amp; Apartemen
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-3 py-0.5 sm:py-1 backdrop-blur-sm border border-white/25 shadow-xs">
              <CheckIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#c2d6af]" /> Free Transport Jakarta &amp; Surabaya
            </span>
          </div>

          {/* Action WhatsApp Buttons */}
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href="#services"
              className="w-full sm:w-auto text-center rounded-full bg-[#4e6c3c] px-6 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#3f5532] hover:shadow-lg hover:-translate-y-0.5"
            >
              Lihat Daftar Harga &amp; Menu
            </a>
            <a
              href={waLinkJakarta}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full border border-[#4e6c3c]/50 bg-white/90 px-4 sm:px-5 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-wider text-[#293822] shadow-sm transition-all hover:bg-white hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#4e6c3c]" />
              Admin Jakarta (24 Jam)
            </a>
            <a
              href={waLinkSurabaya}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-[#293822] px-4 sm:px-5 py-2.5 sm:py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#1a2516] hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#c2d6af]" />
              Admin Surabaya (24 Jam)
            </a>
          </div>
        </div>

        {/* 4 Pillars Section: Clean Description Cards & Supporting Spa Visual Side Card */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-6 sm:py-8 mt-4 sm:mt-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-stretch">
            
            {/* 4 Pillars Grid (7 cols on md) - Pure Elegant Clean Cards */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              
              {/* 1. Massage */}
              <div className="group rounded-2xl border border-[#e5dec9] bg-white/90 p-3.5 sm:p-4 backdrop-blur-md shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#4e6c3c]/60 hover:shadow-md">
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#293822]">Massage Tradisional</h4>
                <p className="mt-1.5 sm:mt-2 text-xs text-[#293822]/80 leading-relaxed font-sans font-medium">
                  Pijatan relaksasi mendalam khas Nusantara untuk meredakan kram, pegal otot, dan memulihkan vitalitas tubuh.
                </p>
              </div>

              {/* 2. Aroma Therapy */}
              <div className="group rounded-2xl border border-[#e5dec9] bg-white/90 p-3.5 sm:p-4 backdrop-blur-md shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#4e6c3c]/60 hover:shadow-md">
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#293822]">Aromaterapi Organik</h4>
                <p className="mt-1.5 sm:mt-2 text-xs text-[#293822]/80 leading-relaxed font-sans font-medium">
                  Racikan minyak herbal esensial 100% murni alami untuk menenangkan sistem saraf dan mengatasi kelelahan mental.
                </p>
              </div>

              {/* 3. Facials & Acupressure */}
              <div className="group rounded-2xl border border-[#e5dec9] bg-white/90 p-3.5 sm:p-4 backdrop-blur-md shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#4e6c3c]/60 hover:shadow-md">
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#293822]">Totok Wajah &amp; Kepala</h4>
                <p className="mt-1.5 sm:mt-2 text-xs text-[#293822]/80 leading-relaxed font-sans font-medium">
                  Akupresur halus peredaan migrain &amp; pusing, meredakan ketegangan area kepala, serta mencerahkan aura wajah.
                </p>
              </div>

              {/* 4. Body Scrub & Lulur */}
              <div className="group rounded-2xl border border-[#e5dec9] bg-white/90 p-3.5 sm:p-4 backdrop-blur-md shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#4e6c3c]/60 hover:shadow-md">
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#293822]">Body Scrub Lulur</h4>
                <p className="mt-1.5 sm:mt-2 text-xs text-[#293822]/80 leading-relaxed font-sans font-medium">
                  Ritual eksfoliasi lulur rempah tradisional Jawa untuk mengelupas sel kulit mati agar kulit halus, bersih &amp; harum.
                </p>
              </div>

            </div>

            {/* Supporting Spa Ambience Card (5 cols on md) */}
            <div className="md:col-span-5 relative overflow-hidden rounded-2xl border border-[#e5dec9] bg-white p-3 sm:p-3.5 shadow-xs transition-all duration-300 hover:shadow-md min-h-[180px] sm:min-h-[220px]">
              <div className="relative h-full min-h-[160px] sm:min-h-[200px] w-full overflow-hidden rounded-xl bg-[#e4ebe0]">
                  <Image
                    src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&auto=format&fit=crop&q=90"
                    alt="Spa candles and essential oils"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-[#293822]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="inline-block rounded-md bg-[#4e6c3c]/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-xs mb-1">
                    Authentic Spa Experience
                  </span>
                  <h5 className="font-serif text-xs sm:text-sm font-bold">Atmosphere of Sanctuary</h5>
                  <p className="text-[10px] text-white/90 leading-tight">Lilin aromaterapi &amp; nuansa botanical menenangkan.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Explainer Callout Card */}
        <div className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-8 sm:pb-10">
          <div className="rounded-3xl border border-[#e5dec9] bg-white/90 p-5 sm:p-6 shadow-sm backdrop-blur-md transition hover:bg-white">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-block rounded-full border border-[#4e6c3c]/20 bg-[#f4f6f0] px-3 py-0.5 text-[10px] font-bold tracking-wide text-[#3f5532] uppercase">
                Mengapa Memilih Sunny Hill Spa?
              </span>
              <span className="text-[11px] font-semibold text-[#4e6c3c]">
                Standar Bintang Lima
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#293822]/90 sm:text-sm font-sans">
              <strong>Sunny Hill Spa &amp; Wellness</strong> menghadirkan terapis bersertifikasi profesional langsung ke kamar Anda dengan protokol kebersihan higienis, linen steril, serta racikan minyak aromaterapi murni. Solusi sempurna untuk relaksasi tubuh dan pikiran tanpa perlu keluar dari kenyamanan tempat Anda.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
