import { faqs, site, waLinkJakarta, waLinkSurabaya } from "@/lib/site";
import { ChevronDownIcon, WhatsAppIcon, PhoneIcon, CheckIcon } from "./icons";

export default function Faq() {
  return (
    <section id="faq" className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">

        {/* Dedicated Admin Contact Section (Admin Jakarta & Admin Surabaya) */}
        <div className="mb-16 rounded-[36px] border border-[#d6dec9] bg-[#f6f3eb] p-6 sm:p-10 shadow-lg">
          <div className="text-center">
            <span className="inline-block rounded-full border border-[#4e6c3c]/30 bg-[#e4ebe0] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#3f5532]">
              Layanan 24 Jam Non-Stop
            </span>
            <h2 className="mt-3 font-serif text-2xl sm:text-4xl font-normal text-[#293822]">
              Hubungi Admin Terdekat Dari Lokasi Anda
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-[#293822]/75">
              Pilih kota lokasi Anda untuk terhubung langsung via WhatsApp dengan Care Coordinator kami. Terapis bersertifikat siap diberangkatkan 24 jam.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
            {/* Admin Jakarta Card */}
            <div className="group flex flex-col justify-between rounded-3xl border border-[#d6dec9] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#4e6c3c] hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e4ebe0] text-[#4e6c3c]">
                    <WhatsAppIcon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-[#4e6c3c]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4e6c3c]">
                    Jakarta Area
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#293822]">
                  Hubungi Admin Jakarta
                </h3>
                <p className="mt-1 text-xs text-[#293822]/75">
                  Layanan spa panggilan 24 jam wilayah Jakarta Pusat, Selatan, Barat, Timur, dan Utara.
                </p>
              </div>

              <a
                href={waLinkJakarta}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#4e6c3c] py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-[#3f5532]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat WhatsApp Admin Jakarta
              </a>
            </div>

            {/* Admin Surabaya Card */}
            <div className="group flex flex-col justify-between rounded-3xl border border-[#d6dec9] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#4e6c3c] hover:shadow-md">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e4ebe0] text-[#4e6c3c]">
                    <WhatsAppIcon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-[#4e6c3c]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4e6c3c]">
                    Surabaya Area
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#293822]">
                  Hubungi Admin Surabaya
                </h3>
                <p className="mt-1 text-xs text-[#293822]/75">
                  Layanan spa panggilan 24 jam wilayah Surabaya Pusat, Selatan, Barat, Timur, dan Utara.
                </p>
              </div>

              <a
                href={waLinkSurabaya}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#293822] py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1a2516]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#c2d6af]" />
                Chat WhatsApp Admin Surabaya
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Heading & Booking Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-full border border-[#4e6c3c]/30 bg-[#f6f3eb] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#3f5532]">
                Support &amp; FAQ
              </span>
              <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#293822] sm:text-4xl">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#293822]/75">
                Punya pertanyaan mengenai sesi konsultasi, ketersediaan terapis, atau kunjungan ke rumah? Care Coordinator kami siap membantu 24 jam.
              </p>
            </div>

            {/* Quick Contact CTA Card */}
            <div className="mt-8 rounded-[32px] bg-[#4e6c3c] p-6 sm:p-7 text-white shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c2d6af]">
                Ready to begin?
              </span>
              <h3 className="mt-1 font-serif text-xl sm:text-2xl font-normal">
                Mulai Perjalanan Pemulihan Anda
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#e4ebe0]/90">
                Pesan sesi online atau home visit ke lokasi Anda sekarang. Terapis bersertifikat siap mendampingi.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={waLinkJakarta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#f6f3eb] px-5 py-2.5 text-xs font-semibold text-[#293822] shadow-sm transition hover:bg-white hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#4e6c3c]" />
                  Chat Admin Jakarta
                </a>
                <a
                  href={waLinkSurabaya}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-white/20"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#c2d6af]" />
                  Chat Admin Surabaya
                </a>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-2 text-xs font-semibold text-[#c2d6af] transition hover:bg-white/10"
                >
                  <PhoneIcon className="h-3.5 w-3.5 text-[#c2d6af]" />
                  Telepon Langsung ({site.phoneDisplay})
                </a>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[#c2d6af]">
                <CheckIcon className="h-3 w-3" />
                <span>Melayani Jakarta &amp; Surabaya (24 Jam)</span>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {faqs.map((item, idx) => (
              <details
                key={item.q}
                open={idx === 0}
                className="group rounded-3xl border border-[#d6dec9] bg-[#f6f3eb] p-6 transition-all open:bg-white open:shadow-md hover:border-[#4e6c3c]/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base font-medium text-[#293822] sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ede8dc] text-[#3f5532] transition-transform duration-300 group-open:rotate-180 group-open:bg-[#4e6c3c] group-open:text-white">
                    <ChevronDownIcon className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#293822]/80 border-t border-[#e4ebe0] pt-3 font-sans">
                  {item.a}
                </p>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
