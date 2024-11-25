import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import StorySection from "@/components/sections/StorySection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX } = e;
    const width = window.innerWidth;
    const imageIndex = Math.floor((clientX / width) * images.length);
    setActiveImage(imageIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/10 font-poppins">
      <Navbar scrolled={scrolled} />
      <HeroSection 
        activeImage={activeImage}
        handleMouseMove={handleMouseMove}
        images={images}
      />
      <SkillsSection />
      <CertificatesSection />
      <StorySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;