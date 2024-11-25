import { Button } from "@/components/ui/button";

const HeroSection = ({ activeImage, handleMouseMove, images }: { 
  activeImage: number;
  handleMouseMove: (e: React.MouseEvent) => void;
  images: string[];
}) => (
  <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-16 px-4 md:px-6 lg:px-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 max-w-xl mx-auto md:mx-0 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins">
            <span className="text-white">Hello</span>, I am <span className="text-primary">Venkatesh</span>
          </h1>
          <p className="text-xl text-secondary font-poppins">
            UI/UX Designer, Frontend Developer & Full Stack Developer
          </p>
          <p className="text-lg text-secondary font-poppins">
            Passionate about creating beautiful and functional web applications with a focus on user experience and modern technologies.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button size="lg" className="font-poppins">View Resume</Button>
            <Button size="lg" variant="outline" className="font-poppins">Contact Me</Button>
          </div>
        </div>
        <div className="relative flex justify-center order-1 md:order-2 pt-8" onMouseMove={handleMouseMove}>
          <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow"></div>
            <div className="absolute inset-[3px] rounded-full bg-background"></div>
            <img
              src={images[activeImage]}
              alt="Profile"
              className="absolute inset-[3px] rounded-full object-cover w-[calc(100%-6px)] h-[calc(100%-6px)]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;