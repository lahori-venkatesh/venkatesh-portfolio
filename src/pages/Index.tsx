import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/sections/Footer";
import ContactSection from "@/components/sections/ContactSection";

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
      
      <section id="about" className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Venkatesh"
              className="rounded-lg shadow-xl"
            />
            <div className="space-y-4">
              <p className="text-lg">
                I am a passionate UI/UX designer and full-stack developer with a keen eye for detail
                and a love for creating beautiful, functional web applications.
              </p>
              <p className="text-lg">
                With expertise in both frontend and backend technologies, I bring a comprehensive
                approach to web development that ensures seamless user experiences and robust
                functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-primary">Frontend Development</h3>
              <ul className="space-y-2">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-primary">UI/UX Design</h3>
              <ul className="space-y-2">
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Prototyping</li>
                <li>User Research</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-primary">Full Stack</h3>
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="group relative overflow-hidden rounded-lg">
                <img
                  src={`https://images.unsplash.com/photo-148${project}312338219-ce68d2c6f44d`}
                  alt={`Project ${project}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-primary/90 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Project Title {project}</h3>
                  <p className="text-white/90 mb-4">A brief description of the project and its key features.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">React</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">TypeScript</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">Tailwind</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((cert) => (
              <div key={cert} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2">Certificate Title {cert}</h3>
                <p className="text-muted-foreground mb-4">Issuing Organization</p>
                <p className="text-sm">Completed in 2023</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section id="story" className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Story</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">The Beginning</h3>
              <p className="text-muted-foreground">
                My journey in tech started with a curiosity about how websites work...
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Hobbies & Interests</h3>
              <p className="text-muted-foreground">
                Beyond coding, I'm passionate about photography and playing guitar...
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Achievements</h3>
              <p className="text-muted-foreground">
                Won first place in a national hackathon, Published research paper...
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
