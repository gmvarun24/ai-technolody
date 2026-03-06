import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import LogoCloud from "./components/sections/LogoCloud";
import ServicesSection from "./components/sections/ServicesSection";
import UseCasesSection from "./components/sections/UseCasesSection";
import ProcessSection from "./components/sections/ProcessSection";
import IntegrationsSection from "./components/sections/IntegrationsSection";
import FaqSection from "./components/sections/FaqSection";
import ContactSection from "./components/sections/ContactSection";
import AboutSection from "./components/sections/AboutSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-surface-page text-content-primary overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <LogoCloud />
        <ServicesSection />
        <UseCasesSection />
        <ProcessSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <AboutSection />
      <Footer />
    </div>
  );
}
