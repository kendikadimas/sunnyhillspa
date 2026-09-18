import { testimonials, statsMetrics } from "@/lib/site";
import { StarIcon, MapPinIcon } from "./icons";

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#4e6c3c]/30 bg-[#f6f3eb] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#3f5532]">
            Stories of Healing
          </span>
          <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#293822] sm:text-4xl">
            Kisah Pemulihan Klien Kami
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-[#293822]/75">
            Pengalaman nyata mereka yang telah menemukan kembali ketenangan batin, keseimbangan mental, dan harmoni hidup bersama Soul.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-[32px] border border-[#d6dec9] bg-[#f6f3eb] p-7 shadow-[0_8px_30px_rgb(41,56,34,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-[#b58b38]">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>

                  <span className="rounded-full bg-[#ede8dc] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#3f5532]">
                    {item.tag}
                  </span>
                </div>

                <blockquote className="mt-4 text-xs sm:text-sm leading-relaxed text-[#293822]/85 italic font-serif">
                  &ldquo;{item.text}&rdquo;
                </blockquote>
              </div>

              {/* Author info */}
              <div className="mt-6 flex items-center gap-3 border-t border-[#e4ebe0] pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4e6c3c] text-sm font-serif font-bold text-white shadow-xs">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#293822]">
                    {item.name}
                  </h4>
                  <p className="flex items-center gap-1 text-[11px] text-[#293822]/60">
                    <MapPinIcon className="h-3 w-3 text-[#4e6c3c]" />
                    {item.area}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Metrics Strip (Olive Dark Container) */}
        <div className="mt-12 grid grid-cols-2 gap-4 rounded-[32px] bg-[#4e6c3c] p-8 text-center text-white sm:grid-cols-4 sm:p-10 shadow-lg">
          {statsMetrics.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center">
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#f4f6f0]">
                {stat.value}
              </span>
              <span className="mt-1 text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#c2d6af]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
