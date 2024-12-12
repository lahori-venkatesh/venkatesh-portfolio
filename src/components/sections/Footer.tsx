import { Instagram, Linkedin, Globe, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="relative bg-background py-12">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
    <div className="container mx-auto px-6 lg:px-12 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border border-primary/20 rounded-lg p-8">
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Venkatesh
          </h3>
          <p className="text-muted-foreground">
            Creating beautiful and functional web experiences with passion and precision.
          </p>
        </div>
        
        <div className="space-y-4 text-center md:text-left">
          <h4 className="font-semibold">Quick Links</h4>
          <div className="space-y-2">
            <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="/design-folio" className="block text-muted-foreground hover:text-primary transition-colors">Design Folio</a>
            <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="space-y-4 text-center md:text-left">
          <h4 className="font-semibold">Contact Info</h4>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Mail className="w-4 h-4" />
              <span>contact@venkatesh.dev</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 text-center md:text-left">
          <h4 className="font-semibold">Follow Me</h4>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#" className="p-2 rounded-full border border-primary/20 hover:border-primary/40 transition-colors">
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <a href="#" className="p-2 rounded-full border border-primary/20 hover:border-primary/40 transition-colors">
              <Instagram className="h-5 w-5 text-primary" />
            </a>
            <a href="#" className="p-2 rounded-full border border-primary/20 hover:border-primary/40 transition-colors">
              <Globe className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-muted-foreground border-t border-primary/20 pt-8">
        <p>© {new Date().getFullYear()} Venkatesh. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;