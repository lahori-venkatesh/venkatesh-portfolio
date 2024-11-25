import { Button } from "@/components/ui/button";

const HeroSection = ({ activeImage, handleMouseMove, images }: { 
  activeImage: number;
  handleMouseMove: (e: React.MouseEvent) => void;
  images: string[];
}) => (
  <section id="home" className="pt-32 pb-16 px-6 lg:px-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
        <div className="space-y-6 max-w-xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins">
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
        <div className="relative flex justify-center">
          <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
            <img
              src={images[activeImage]}
              alt="Profile"
              className="rounded-full object-cover w-full h-full shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;