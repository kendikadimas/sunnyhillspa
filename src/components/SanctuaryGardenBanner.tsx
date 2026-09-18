import Image from "next/image";
import { otherPaths, waLinkJakarta, waLinkSurabaya } from "@/lib/site";
import { ArrowUpRightIcon, WhatsAppIcon } from "./icons";

export default function SanctuaryGardenBanner() {
  return (
    <section id="wellness" className="w-full px-3 py-12 sm:px-6 sm:py-20">
      {/* Arched Sanctuary Garden Container */}
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] sm:rounded-[44px] border border-[#d6dec9]/60 shadow-[0_24px_60px_rgba(41,56,34,0.14)] bg-[#1e2b19]">
        
        {/* Background Image: Luxury Spa Oasis */}
        <div className="relative min-h-[620px] sm:min-h-[680px] w-full flex flex-col justify-between p-6 sm:p-12 text-white">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&auto=format&fit=crop&q=95"
            alt="Lush spa wellness sanctuary treatment"
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover object-center brightness-[0.85]"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b2716]/95 via-[#293822]/60 to-black/40" />

          {/* Top Header Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto pt-4 sm:pt-6">
            <span className="inline-block rounded-full border border-white/30 bg-black/40 px-3.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#dce7ce] backdrop-blur-md">
              Ketenangan &amp; Peremajaan Jiwa
            </span>
            <h3 className="mt-3 font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Kembalikan Kebugaran Tubuh &amp; Ketenangan Jiwa
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-[#e4ebe0]/90 max-w-xl mx-auto font-sans font-medium leading-relaxed">
              Nikmati sensasi perawatan spa premium langsung di kamar tempat Anda beristirahat.
            </p>
          </div>

          {/* Bottom Content: Cards in Natural Flow (No Absolute Overlap) */}
          <div className="relative z-10 mt-10 pt-6 border-t border-white/20">
            <h4 className="text-center font-serif text-lg sm:text-2xl font-bold text-white mb-5 tracking-wide">
              Pilihan Perawatan Spa Tambahan
            </h4>

            <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
              {otherPaths.map((path) => (
                <div
                  key={path.title}
                  className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/30 bg-[#fdfbf7]/95 p-5 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:-translate-y-1 text-[#293822]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h5 className="font-serif text-base sm:text-lg font-bold text-[#293822]">
                        {path.title}
                      </h5>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4e6c3c]/15 text-[#4e6c3c] group-hover:bg-[#4e6c3c] group-hover:text-white transition-colors">
                        <ArrowUpRightIcon className="h-3.5 w-3.5" />
                      </span>
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-[#293822]/80 font-sans font-medium">
                      {path.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
