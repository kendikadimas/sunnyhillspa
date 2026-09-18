import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StepsSection from "@/components/StepsSection";
import Services from "@/components/Services";
import ProvidersSection from "@/components/ProvidersSection";
import TherapyFormatsSection from "@/components/TherapyFormatsSection";
import SanctuaryGardenBanner from "@/components/SanctuaryGardenBanner";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#ede8dc] overflow-x-hidden">
        {/* Section 1: Hero Banner */}
        <Hero />

        {/* Section 2: Steps to Begin */}
        <StepsSection />

        {/* Section 3: Services & Treatments */}
        <Services />

        {/* Section 4: Providers Directory */}
        <ProvidersSection />

        {/* Section 5: Therapy Formats */}
        <TherapyFormatsSection />

        {/* Section 6: Sanctuary Garden Banner */}
        <SanctuaryGardenBanner />

        {/* Section 7: Benefits & Standards */}
        <Benefits />

        {/* Section 8: Testimonials & Metrics */}
        <Testimonials />

        {/* Support & FAQ Section */}
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
