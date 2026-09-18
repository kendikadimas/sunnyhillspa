import { benefits } from "@/lib/site";
import { CheckIcon, StarFourIcon } from "./icons";

export default function Benefits() {
  return (
    <section id="benefits" className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#4e6c3c]/30 bg-[#f6f3eb] px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#3f5532]">
            Keunggulan Layanan
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#293822] sm:text-4xl">
            Kenyamanan &amp; Standar Layanan Tertinggi
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-[#293822]/75 font-sans font-medium">
            Pengalaman spa eksklusif 24 jam dengan terapis bersertifikasi dan protokol kebersihan higienis di lokasi Anda.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between rounded-[28px] border border-[#d6dec9] bg-[#f6f3eb] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#4e6c3c]/50 hover:bg-white hover:shadow-lg"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4e6c3c] text-white shadow-2xs">
                  <StarFourIcon className="h-4 w-4 text-[#f4e6c1]" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#293822]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#293822]/75 font-sans font-medium">
                  {item.text}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-[#4e6c3c]">
                <CheckIcon className="h-3.5 w-3.5" />
                <span>Standar Bintang Lima</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick assurance pill bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-full border border-[#d6dec9] bg-white/70 px-6 py-3.5 text-xs font-semibold text-[#293822] shadow-xs backdrop-blur-xs">
          <span className="flex items-center gap-1.5 text-[#3f5532]">
            <CheckIcon className="h-4 w-4 text-[#4e6c3c]" /> Lisensi Resmi
          </span>
          <span className="hidden h-3 w-px bg-[#d6dec9] sm:inline-block" />
          <span className="flex items-center gap-1.5 text-[#3f5532]">
            <CheckIcon className="h-4 w-4 text-[#4e6c3c]" /> 100% Minyak Alami
          </span>
          <span className="hidden h-3 w-px bg-[#d6dec9] sm:inline-block" />
          <span className="flex items-center gap-1.5 text-[#3f5532]">
            <CheckIcon className="h-4 w-4 text-[#4e6c3c]" /> Bebas Biaya Transportasi
          </span>
          <span className="hidden h-3 w-px bg-[#d6dec9] sm:inline-block" />
          <span className="flex items-center gap-1.5 text-[#3f5532]">
            <CheckIcon className="h-4 w-4 text-[#4e6c3c]" /> Respon WhatsApp 24 Jam
          </span>
        </div>
      </div>
    </section>
  );
}
