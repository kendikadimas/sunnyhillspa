import { site, waLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export default function Cta() {
  return (
    <section id="booking" className="relative overflow-hidden bg-brand-900 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Siap Relaksasi? Booking Sekarang, Kami Buka 24 Jam
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75">
          Hubungi kami kapan saja. Terapis bersertifikat akan datang ke lokasi
          Anda dengan gratis transportasi dan peralatan yang bersih.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-800 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-brand-50 sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5 text-brand-600" />
            Chat WhatsApp Sekarang
          </a>
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            <PhoneIcon className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
        </div>

        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
          Melayani Jakarta & Surabaya
        </p>
      </div>
    </section>
  );
}
