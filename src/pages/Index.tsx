import Hero from "@/components/Hero";
import Features from "@/components/Features";
import OrganizationSection from "@/components/OrganizationSection";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <OrganizationSection />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
