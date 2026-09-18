import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";
import { faqs, site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://sunnyhillspa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sunny Hill Spa & Wellness 24 Jam | Pijat Panggilan Jakarta & Surabaya",
    template: "%s | Sunny Hill Spa & Wellness",
  },
  description:
    "Jasa spa & pijat panggilan 24 jam ke hotel, rumah, apartemen & villa di Jakarta dan Surabaya. Terapis profesional bersertifikat, higienis, free biaya transportasi. Hubungi WhatsApp 0858-8224-2818.",
  keywords: [
    "spa panggilan 24 jam",
    "pijat panggilan Jakarta",
    "pijat panggilan Surabaya",
    "massage home service Jakarta",
    "massage home service Surabaya",
    "spa hotel 24 jam Jakarta",
    "spa hotel 24 jam Surabaya",
    "Sunny Hill Spa",
    "Sunny Hill Spa & Wellness",
    "pijat tradisional panggilan",
    "balinese massage panggilan",
    "body scrub panggilan",
    "totok wajah panggilan",
  ],
  authors: [{ name: "Sunny Hill Spa & Wellness", url: siteUrl }],
  creator: "Sunny Hill Spa & Wellness",
  publisher: "Sunny Hill Spa & Wellness",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Sunny Hill Spa & Wellness 24 Jam | Pijat & Spa Panggilan Jakarta & Surabaya",
    description:
      "Terapis profesional bersertifikat datang langsung ke rumah, hotel, atau villa Anda 24 jam non-stop. Free transportasi terapis di Jakarta & Surabaya.",
    url: siteUrl,
    siteName: "Sunny Hill Spa & Wellness",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Sunny Hill Spa & Wellness - Pijat & Spa Panggilan 24 Jam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Hill Spa & Wellness 24 Jam | Pijat & Spa Panggilan",
    description:
      "Layanan spa & pijat panggilan 24 jam di Jakarta & Surabaya. Terapis wanita profesional, free transport.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#3a5336",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": site.name,
    "image": `${siteUrl}/og-image.jpg`,
    "url": siteUrl,
    "telephone": "+6285882242818",
    "priceRange": "$$",
    "description": site.description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Jakarta",
        "containedInPlace": { "@type": "State", "name": "DKI Jakarta" }
      },
      {
        "@type": "City",
        "name": "Surabaya",
        "containedInPlace": { "@type": "State", "name": "Jawa Timur" }
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      `https://wa.me/${site.waNumber}`
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-sand-50 text-brand-950"
      >
        {children}
      </body>
    </html>
  );
}
