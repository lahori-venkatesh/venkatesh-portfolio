import { Button } from "@/components/ui/button";

const HeroSection = ({ activeImage, handleMouseMove, images }: { 
  activeImage: number;
  handleMouseMove: (e: React.MouseEvent) => void;
  images: string[];
}) => (
  <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-16 px-6 lg:px-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hello, I am <span className="text-primary">Venkatesh</span>
          </h1>
          <p className="text-xl text-muted-foreground font-poppins">
            UI/UX Designer, Frontend Developer & Full Stack Developer
          </p>
          <p className="text-lg text-muted-foreground font-poppins">
            Passionate about creating beautiful and functional web applications with a focus on user experience and modern technologies.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button size="lg" className="font-poppins">View Resume</Button>
            <Button size="lg" variant="outline" className="font-poppins">Contact Me</Button>
          </div>
        </div>
        <div className="relative flex justify-center" onMouseMove={handleMouseMove}>
          <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-r from-primary/20 to-accent/20 p-1">
            <img
              src={images[activeImage]}
              alt="Profile"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;