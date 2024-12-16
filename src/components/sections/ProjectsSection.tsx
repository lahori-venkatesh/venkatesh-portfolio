import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and a responsive design for optimal user experience.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tools: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "/projects/ecommerce"
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced analytics platform leveraging artificial intelligence to provide actionable insights from complex datasets, featuring interactive visualizations and predictive modeling capabilities.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tools: ["Python", "TensorFlow", "React", "AWS"],
      link: "/projects/analytics"
    },
    {
      title: "Healthcare Dashboard",
      description: "Comprehensive healthcare management dashboard enabling medical professionals to monitor patient data, track treatments, and analyze health trends in real-time.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tools: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      link: "/projects/healthcare"
    },
    {
      title: "Social Media Platform",
      description: "A feature-rich social media platform with real-time messaging, post sharing, and user engagement analytics. Built with modern technologies for optimal performance and scalability.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      tools: ["Next.js", "Firebase", "TypeScript", "Redux"],
      link: "/projects/social-media"
    }
  ];

  return (
    <section className="my-10">
      <div className="w-full max-w-[92%] md:max-w-full mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          My Work
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[352px] group bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden border border-[#0FA0CE]/80 hover:border-primary/20 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-medium font-poppins">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-0.5 text-xs rounded-full bg-primary/5 text-primary/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Link to={project.link}>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-2 text-sm rounded-[6px] bg-[#0FA0CE]/80 text-white hover:bg-[#0FA0CE]/90"
                  >
                    View Project
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;