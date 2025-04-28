import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FleetOverviewSection from "@/components/sections/FleetOverviewSection";
import NewsSection from "@/components/sections/NewsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CtaSection from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <FleetOverviewSection />
      <NewsSection />
      <ServicesSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
