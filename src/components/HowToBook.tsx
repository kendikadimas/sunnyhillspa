import { steps } from "@/lib/site";

export default function HowToBook() {
  return (
    <section id="cara-booking" className="bg-sand-100 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
            Cara Booking
          </span>
          <h2 className="mt-3 text-3xl tracking-tight text-brand-950 sm:text-4xl">
            Reservasi Mudah dalam 4 Langkah
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-900/70">
            Cukup lewat WhatsApp, terapis siap berangkat sesuai waktu yang Anda
            pilih.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-sand-200 via-brand-300 to-sand-200 lg:block"
            aria-hidden="true"
          />
          {steps.map((item) => (
            <li key={item.step} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-sm font-extrabold text-white shadow-lg shadow-brand-600/25 ring-4 ring-sand-100">
                {item.step}
              </span>
              <h3 className="mt-5 text-base font-bold text-brand-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/65">
                {item.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
