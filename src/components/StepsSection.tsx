import Image from "next/image";
import { stepsToBegin } from "@/lib/site";

export default function StepsSection() {
  const stepVisuals = [
    {
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&auto=format&fit=crop&q=90",
      badge: "Langkah 1",
    },
    {
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&auto=format&fit=crop&q=90",
      badge: "Langkah 2",
    },
    {
      img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&auto=format&fit=crop&q=90",
      badge: "Langkah 3",
    },
  ];

  return (
    <section id="steps" className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#4e6c3c]/30 bg-[#f4f6f0] px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#3f5532]">
            Mudah &amp; Praktis
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#293822] sm:text-5xl">
            3 Langkah Mudah Memulai Sesi Spa
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-xs sm:text-sm leading-relaxed text-[#293822]/80 font-sans font-medium">
            Reservasi kilat via WhatsApp tanpa prosedur rumit. Terapis profesional kami segera menuju lokasi Anda.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stepsToBegin.map((step, idx) => {
            const visual = stepVisuals[idx];

            return (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-[#e5dec9] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#4e6c3c]/60"
              >
                <div>
                  {/* Top Image Preview & Step Badge */}
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-[#e4ebe0] mb-5">
                    <Image
                      src={visual.img}
                      alt={step.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                    {/* Step Number Circle */}
                    <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#4e6c3c] font-serif text-sm font-bold text-white shadow-md">
                      {step.step}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl font-bold text-[#293822] group-hover:text-[#4e6c3c] transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#293822]/75 font-sans font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-6 pt-4 border-t border-[#e4ebe0] flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#4e6c3c]">
                  <span>{visual.badge}</span>
                  <span className="h-1.5 w-12 rounded-full bg-[#e4ebe0] overflow-hidden">
                    <span
                      className="block h-full bg-[#4e6c3c] transition-all duration-500"
                      style={{ width: `${(idx + 1) * 33.3}%` }}
                    />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
