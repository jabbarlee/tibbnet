import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { DoctorFeaturesSection } from "@/components/sections/DoctorFeaturesSection";
import { AppAvailabilitySection } from "@/components/sections/AppAvailabilitySection";
import { PatientJourneySection } from "@/components/sections/PatientJourneySection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";
import { PlatformBenefitsSection } from "@/components/sections/PlatformBenefitsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactCTASection } from "@/components/sections/ContactCTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <DoctorFeaturesSection />
        <AppAvailabilitySection />
        <PatientJourneySection />
        <CTABannerSection />
        <PlatformBenefitsSection />
        <FAQSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
}
