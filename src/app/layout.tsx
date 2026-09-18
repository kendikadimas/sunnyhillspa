import type { Metadata, Viewport } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunnyhillspa.example.com"),
  title: "Sunny Hill Spa & Wellness 24 Jam | Pijat Panggilan ke Hotel, Rumah & Villa",
  description:
    "Sunny Hill Spa & Wellness - massage home service 24 jam dengan terapis profesional bersertifikat. Free transportasi terapis. Melayani Jakarta & Surabaya. Booking via WhatsApp 0858-8224-2818.",
  keywords: [
    "spa panggilan 24 jam",
    "massage home service",
    "spa panggilan Jakarta",
    "pijat panggilan Surabaya",
    "Sunny Hill Spa",
    "wellness massage",
    "aromatherapy massage",
  ],
  openGraph: {
    title: "Sunny Hill Spa & Wellness 24 Jam | Pijat & Spa Panggilan",
    description:
      "Terapis profesional bersertifikat datang langsung ke rumah, hotel, atau villa Anda. Buka 24 jam, free transportasi terapis.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#3a5336",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-sand-50 text-brand-950"
      >
        {children}
      </body>
    </html>
  );
}
