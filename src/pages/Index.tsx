import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/10">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : ""}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-primary">Venkatesh</span>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#certificates" className="text-foreground hover:text-primary transition-colors">Certificates</a>
              <a href="#story" className="text-foreground hover:text-primary transition-colors">My Story</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hello, I am <span className="text-primary">Venkatesh</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                UI/UX Designer, Frontend Developer & Full Stack Developer
              </p>
              <div className="flex gap-4">
                <Button size="lg">View Resume</Button>
                <Button size="lg" variant="outline">Contact Me</Button>
              </div>
            </div>
            <div className="relative" onMouseMove={handleMouseMove}>
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto relative animate-image-rotate">
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

      {/* About Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full p-3 border rounded-lg"
                  rows={4}
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5997798838537!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1645451234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>Designed with ❤️ by Venkatesh</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;