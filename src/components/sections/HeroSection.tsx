import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const profileImage = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7";

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 px-4 sm:px-6 md:pt-0 md:px-8 bg-[#0A192F]">
      {/* Animated background */}
      <div className="fixed inset-0 w-full -z-10">
        <div className="absolute inset-0 w-full bg-gradient-to-r from-[#0A192F] via-[#112240] to-[#0A192F] opacity-80"></div>
        <div className="absolute inset-0 w-full bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        
        {/* Stars */}
        <div className="stars-container w-full">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="star animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="space-y-3">
              <p className="text-white text-xl md:text-2xl font-bold font-poppins">
                Hello <span className="inline-block animate-wave origin-[70%_70%] text-yellow-400">👋</span>
              </p>
              <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-2">
                I am <span className="bg-gradient-to-r from-[#64FFDA] to-[#00B4D8] bg-clip-text text-transparent">Venkatesh</span>
              </h1>
            </div>
            <div className="h-16">
              <TypeAnimation
                sequence={[
                  'a ',
                  1,
                  'a UI/UX Designer',
                  2000,
                  'a ',
                  1,
                  'a Frontend Developer',
                  2000,
                  'a ',
                  1,
                  'a Full Stack Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-lg md:text-xl font-poppins text-[#64FFDA]"
                repeat={Infinity}
                style={{
                  display: 'inline-block'
                }}
                cursor={true}
              />
            </div>
            <p className="text-sm md:text-base text-[#8892B0] font-poppins -mt-2">
              Passionate about creating beautiful and functional web applications with a focus on user experience and modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 mt-6">
              <Button 
                size="lg" 
                className="w-full sm:w-auto font-poppins px-8 bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/90 transition-all duration-300"
              >
                View Resume
              </Button>
              <div className="flex items-center gap-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#64FFDA] hover:text-[#00B4D8] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#64FFDA] hover:text-[#00B4D8] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#64FFDA] hover:text-[#00B4D8] transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#64FFDA] via-[#00B4D8] to-[#64FFDA] animate-spin-slow"></div>
              <div className="absolute inset-[3px] rounded-full bg-[#0A192F]"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="absolute inset-[3px] rounded-full object-cover w-[calc(100%-6px)] h-[calc(100%-6px)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient text styles */}
      <style>
        {`
          .TypeAnimation-module_type-animation__cursor__iDLYk {
            display: none !important;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;