import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const profileImage = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-4 pb-4 px-4 md:px-6 lg:px-12 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        
        {/* Stars */}
        <div className="stars-container">
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
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 max-w-xl mx-auto md:mx-0 text-center md:text-left order-2 md:order-1">
            <div className="space-y-2">
              <p className="text-white text-2xl md:text-3xl font-bold font-poppins">
                Hello <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
              </p>
              <h1 className="text-4xl md:text-6xl font-bold font-poppins">
                I am <span className="text-primary">Venkatesh</span>
              </h1>
            </div>
            <div className="space-y-3">
              <p className="text-xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text animate-fade-in font-poppins">
                UI/UX Designer
              </p>
              <p className="text-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text animate-slide-in-right delay-200 font-poppins">
                Frontend Developer
              </p>
              <p className="text-xl bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text animate-scale-in delay-400 font-poppins">
                Full Stack Developer
              </p>
            </div>
            <p className="text-lg text-secondary font-poppins">
              Passionate about creating beautiful and functional web applications with a focus on user experience and modern technologies.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button size="lg" className="font-poppins">View Resume</Button>
              <Button size="lg" variant="outline" className="font-poppins">Contact Me</Button>
            </div>
          </div>
          <div className="relative flex justify-center order-1 md:order-2 pt-8">
            <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
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