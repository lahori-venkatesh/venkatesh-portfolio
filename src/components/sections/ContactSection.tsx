import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="py-8 sm:py-24">
    <div className="container mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Contact Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        <form className="space-y-4 md:space-y-8 p-3 md:p-8 rounded-lg border border-primary/20">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-background border border-primary/20 focus:border-primary/40 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-background border border-primary/20 focus:border-primary/40 transition-colors"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full p-3 rounded-lg bg-background border border-primary/20 focus:border-primary/40 transition-colors"
              rows={4}
              placeholder="Your message"
            ></textarea>
          </div>
          <Button className="w-full">Send Message</Button>
        </form>
        <div className="h-[250px] md:h-[400px] rounded-lg overflow-hidden border border-primary/20">
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
);

export default ContactSection;