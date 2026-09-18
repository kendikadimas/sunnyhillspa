"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { waLinkJakarta, waLinkSurabaya } from "@/lib/site";
import { WhatsAppIcon, CheckIcon, ChevronRightIcon } from "./icons";

const therapistImages = [
  "/3cd961d1-d40f-4c73-8f0c-9d2741b92d61.jpg",
  "/7e18472d-740b-42c0-a74a-94da3e7a1791.jpg",
  "/67b62277-1672-4776-a481-e0a3c01746bd.jpg",
  "/665824fb-1f1e-46ce-b29e-c1ae454b310d.jpg",
  "/73591800-84e1-4533-b3fa-8757b426936a.jpg",
];

export default function ProvidersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % therapistImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + therapistImages.length) % therapistImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % therapistImages.length);
  };

  return (
    <section id="providers" className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#d6dec9] bg-[#f6f3eb] shadow-[0_12px_40px_rgba(41,56,34,0.08)]">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* Left Content (Text & Information) */}
            <div className="p-8 sm:p-12 lg:col-span-7 lg:pr-6">
              <span className="inline-block rounded-full border border-[#4e6c3c]/30 bg-[#ede8dc] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#3f5532]">
                Certified Therapists
              </span>

              <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-[#293822] sm:text-4xl lg:text-[40px] leading-[1.15]">
                Terapis Profesional &amp; Bersertifikat
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#293822]/80 sm:text-base">
                Tim terapis terampil dan bersertifikat kami berpengalaman dalam berbagai teknik pijat tradisional, balinese massage, aromaterapi, refleksiologi, dan spa wellness dengan standar etika &amp; keramahan bintang lima.
              </p>

              {/* Therapist Guarantees / Highlights */}
              <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-[#293822]/85">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4e6c3c] text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>Sertifikasi resmi spa &amp; pelatihan massage holistik</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4e6c3c] text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>Sopan, ramah, beretika tinggi &amp; menjaga privasi tamu</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4e6c3c] text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>Membawa perlengkapan steril, linen bersih &amp; minyak organik murni</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={waLinkJakarta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4e6c3c] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white shadow-md transition hover:bg-[#3f5532]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Hubungi Admin Jakarta
                </a>
                <a
                  href={waLinkSurabaya}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#4e6c3c]/40 bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#3f5532] shadow-sm transition hover:bg-[#ede8dc]"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#4e6c3c]" />
                  Hubungi Admin Surabaya
                </a>
              </div>
            </div>

            {/* Right Content (Image Auto Carousel) */}
            <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] w-full lg:col-span-5 h-full">
              <div className="relative h-full w-full overflow-hidden">
                {therapistImages.map((src, index) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    <Image
                      src={src}
                      alt="Terapis Profesional & Bersertifikat Sunny Hill Spa"
                      fill
                      unoptimized
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover object-center"
                    />
                  </div>
                ))}
                <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#f6f3eb]/20 lg:to-transparent" />

                {/* Slider Controls & Dots */}
                <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous image"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
                  >
                    <ChevronRightIcon className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next image"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/60"
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-30 flex flex-col gap-3 rounded-2xl bg-black/40 p-3.5 backdrop-blur-md border border-white/20 text-white sm:bottom-6 sm:left-6 sm:right-6">
                  <p className="text-xs font-medium text-white/90">
                    Layanan terapis panggilan 24 jam ke Hotel, Rumah, Apartemen, dan Villa.
                  </p>
                  {/* Indicators */}
                  <div className="flex items-center gap-1.5">
                    {therapistImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to image ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
