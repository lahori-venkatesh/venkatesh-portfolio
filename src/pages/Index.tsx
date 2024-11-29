import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import StorySection from "@/components/sections/StorySection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/10 font-poppins">
      <Navbar scrolled={scrolled} />
      <div className="container mx-auto px-6 sm:px-4 lg:px-12">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <StorySection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;