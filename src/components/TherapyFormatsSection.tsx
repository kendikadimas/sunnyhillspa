import { therapyFormats, waLink } from "@/lib/site";
import { ArrowUpRightIcon, TotemSculptIcon, CapsuleStackIcon } from "./icons";

export default function TherapyFormatsSection() {
  return (
    <section id="formats" className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#4e6c3c]/30 bg-[#f6f3eb] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#3f5532]">
            Format Service
          </span>
          <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#293822] sm:text-4xl">
            Pilihan Format Spa &amp; Wellness
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-[#293822]/75 sm:text-sm">
            Fleksibilitas layanan sesuai kebutuhan kenyamanan Anda — baik kunjungan langsung ke lokasi Anda maupun sesi sanctuary privat.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {therapyFormats.map((format) => {
            const isDark = format.theme === "dark";

            return (
              <div
                key={format.title}
                className={`relative flex min-h-[380px] flex-col justify-between rounded-[36px] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isDark
                    ? "bg-[#4e6c3c] text-[#f4f6f0]"
                    : "bg-[#f6f3eb] text-[#293822] border border-[#d6dec9]"
                }`}
              >
                {/* Top Sculptural Art Placeholder */}
                <div className="flex justify-end">
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-2xl transition-transform duration-500 hover:scale-105 ${
                      isDark ? "text-[#c2d6af]" : "text-[#4e6c3c]"
                    }`}
                  >
                    {format.art === "totem" ? (
                      <TotemSculptIcon className="h-20 w-20" />
                    ) : (
                      <CapsuleStackIcon className="h-20 w-20" />
                    )}
                  </div>
                </div>

                {/* Bottom Details */}
                <div>
                  <h3 className="font-serif text-3xl font-normal tracking-tight">
                    {format.title}
                  </h3>
                  <span
                    className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide uppercase ${
                      isDark
                        ? "bg-white/15 text-[#e4ebe0]"
                        : "bg-[#ede8dc] text-[#3f5532]"
                    }`}
                  >
                    {format.badge}
                  </span>

                  <div className="mt-6 flex items-end justify-between gap-4 border-t pt-4 border-current/15">
                    <p className="text-xs leading-relaxed opacity-80 max-w-xs">
                      {format.desc}
                    </p>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-110 ${
                        isDark
                          ? "bg-white text-[#4e6c3c]"
                          : "bg-[#4e6c3c] text-white"
                      }`}
                      aria-label={`Book ${format.title} therapy`}
                    >
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
