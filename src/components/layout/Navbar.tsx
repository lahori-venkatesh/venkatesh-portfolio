import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = ({ scrolled }: { scrolled: boolean }) => (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : ""}`}>
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex items-center justify-between h-16">
        <span className="text-xl font-bold text-primary font-poppins">Venkatesh</span>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors font-poppins">Home</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-poppins">About</a>
          <a href="#skills" className="text-foreground hover:text-primary transition-colors font-poppins">Skills</a>
          <a href="#projects" className="text-foreground hover:text-primary transition-colors font-poppins">Projects</a>
          <a href="#certificates" className="text-foreground hover:text-primary transition-colors font-poppins">Certificates</a>
          <a href="#story" className="text-foreground hover:text-primary transition-colors font-poppins">My Story</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-poppins">Contact</a>
        </div>
        <Button variant="outline" className="gap-2">
          <Github className="h-4 w-4" />
          GitHub
        </Button>
      </div>
    </div>
  </nav>
);

export default Navbar;