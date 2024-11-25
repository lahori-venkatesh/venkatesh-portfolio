import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DesignFolio = () => {
  const caseStudies = [
    {
      title: "E-commerce App Redesign",
      description: "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      dribbbleLink: "https://dribbble.com/shots/your-shot-1",
      mediumLink: "https://medium.com/your-article-1"
    },
    {
      title: "Healthcare Dashboard",
      description: "A comprehensive dashboard design for healthcare professionals to monitor patient data.",
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      dribbbleLink: "https://dribbble.com/shots/your-shot-2",
      mediumLink: "https://medium.com/your-article-2"
    }
  ];

  const myDesigns = [
    {
      title: "Mobile App Design",
      description: "Modern and intuitive mobile application interface design.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      dribbbleLink: "https://dribbble.com/shots/your-shot-3"
    },
    {
      title: "Web Dashboard",
      description: "Clean and functional web dashboard interface.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      dribbbleLink: "https://dribbble.com/shots/your-shot-4"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="icon" className="hover:bg-primary/10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Design Portfolio
          </h1>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="aspect-video relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <div className="flex gap-4">
                    <a href={study.dribbbleLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2">
                        Dribbble <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href={study.mediumLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2">
                        Medium <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">My Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {myDesigns.map((design, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="aspect-video relative">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{design.title}</h3>
                  <p className="text-muted-foreground mb-4">{design.description}</p>
                  <a href={design.dribbbleLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2">
                      View on Dribbble <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignFolio;