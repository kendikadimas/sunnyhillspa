import Image from "next/image";
import { services, waLinkJakarta, waLinkSurabaya } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#4e6c3c]/30 bg-[#f6f3eb] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#3f5532]">
            Daftar Harga &amp; Treatment Menu
          </span>
          <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#293822] sm:text-5xl">
            DAFTAR HARGA MASSAGE
          </h2>
          <p className="mx-auto mt-2.5 max-w-md text-xs sm:text-sm italic text-[#4e6c3c] font-serif">
            Relaksasi tubuh, kesegaran jiwa
          </p>
        </div>

        {/* Services / Pricelist List in Menu Style */}
        <div className="mt-12 flex flex-col gap-5">
          {services.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[28px] border border-[#d6dec9] bg-[#f6f3eb] p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#4e6c3c]/60 hover:bg-white hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left: Number, Title, Subtitle, Desc & Photo Preview */}
                <div className="flex items-start gap-4 flex-1">
                  {/* Circular Number Badge */}
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#4e6c3c] text-base sm:text-lg font-serif font-bold text-white shadow-sm">
                    {item.no}
                  </div>

                  {/* Service Photo Thumbnail */}
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl border border-[#d6dec9]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Title & Desc */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#293822] group-hover:text-[#4e6c3c] transition-colors">
                        {item.title}
                      </h3>
                      <span className="rounded-full bg-[#ede8dc] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#3f5532]">
                        {item.badge}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3f5532]/75">
                      {item.subTitle}
                    </span>
                    <p className="mt-1 text-xs text-[#293822]/75 leading-relaxed max-w-xl font-sans font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Right: 3 Duration Price Blocks (60, 90, 120 Menit) */}
                <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#e4ebe0]">
                  {item.prices.map((p) => (
                    <div
                      key={p.duration}
                      className="flex flex-col items-center justify-center rounded-2xl border border-[#d6dec9] bg-[#5a7848] px-3.5 py-2.5 sm:px-5 sm:py-3 text-white shadow-xs transition-transform group-hover:scale-[1.03]"
                    >
                      <span className="text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-[#dce7ce]">
                        {p.duration}
                      </span>
                      <span className="font-serif text-sm sm:text-base font-bold tracking-wide text-white">
                        Rp {p.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Info */}
        <div className="mt-12 rounded-[32px] border border-[#d6dec9] bg-[#e4ebe0]/70 p-6 sm:p-8 text-center text-[#293822] shadow-sm">
          <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#293822]">
            Siap Untuk Relaksasi Terbaik Hari Ini?
          </h4>
          <p className="mx-auto mt-1.5 max-w-xl text-xs sm:text-sm text-[#293822]/80 font-sans font-medium">
            Pesan sekarang juga. Terapis profesional kami akan segera meluncur ke kamar hotel, apartemen, atau rumah Anda.
          </p>
        </div>
      </div>
    </section>
  );
}
