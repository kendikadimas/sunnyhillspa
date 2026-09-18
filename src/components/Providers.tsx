import Image from "next/image";
import { providers, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export default function Providers() {
  return (
    <section id="terapis" className="bg-sand-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
            Terapis Kami
          </span>
          <h2 className="mt-3 text-3xl tracking-tight text-brand-950 sm:text-4xl">
            Terapis Profesional &amp; Bersertifikat
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-900/70">
            Setiap terapis telah terlatih, ramah, dan mengutamakan kenyamanan
            serta privasi Anda selama sesi berlangsung.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {providers.map((provider) => (
            <article
              key={provider.name}
              className="card-soft group flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white transition-all hover:-translate-y-1 hover:border-brand-300"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={provider.photo}
                  alt={provider.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-700 backdrop-blur">
                  {provider.city}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-brand-900">
                  {provider.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-500">
                  {provider.role}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-900/65">
                  {provider.bio}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-brand-100 pt-4">
                  <span className="text-xs font-semibold text-brand-600">
                    Pengalaman {provider.experience}
                  </span>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-700 transition-colors hover:text-brand-500"
                  >
                    Booking &rarr;
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition-all hover:-translate-y-0.5 hover:bg-brand-700"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Tanya Ketersediaan Terapis
          </a>
        </div>
      </div>
    </section>
  );
}
