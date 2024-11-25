import { Instagram, Linkedin, Globe } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-white py-8">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex flex-col items-center gap-4">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-accent transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <Globe className="h-6 w-6" />
          </a>
        </div>
        <p className="font-poppins">Designed with ❤️ by Venkatesh</p>
      </div>
    </div>
  </footer>
);

export default Footer;