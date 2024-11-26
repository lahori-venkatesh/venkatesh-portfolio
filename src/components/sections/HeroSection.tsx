import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const profileImage = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7";

  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center py-8 px-4 md:px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 max-w-xl mx-auto md:mx-0 text-center md:text-left order-2 md:order-1">
            <div className="space-y-2">
              <p className="text-white text-xl md:text-2xl font-bold font-poppins">
                Hello <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
              </p>
              <h1 className="text-3xl md:text-5xl font-bold font-poppins">
                I am <span className="text-primary">Venkatesh</span>
              </h1>
            </div>
            <div className="space-y-2">
              <p className="text-lg bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text animate-fade-in font-poppins">
                UI/UX Designer
              </p>
              <p className="text-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text animate-slide-in-right delay-200 font-poppins">
                Frontend Developer
              </p>
              <p className="text-lg bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text animate-scale-in delay-400 font-poppins">
                Full Stack Developer
              </p>
            </div>
            <p className="text-base text-secondary font-poppins">
              Passionate about creating beautiful and functional web applications with a focus on user experience and modern technologies.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button size="default" className="font-poppins">View Resume</Button>
              <Button size="default" variant="outline" className="font-poppins">Contact Me</Button>
            </div>
          </div>
          <div className="relative flex justify-center order-1 md:order-2">
            <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow"></div>
              <div className="absolute inset-[3px] rounded-full bg-background"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="absolute inset-[3px] rounded-full object-cover w-[calc(100%-6px)] h-[calc(100%-6px)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;