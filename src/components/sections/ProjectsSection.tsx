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
    <section className="py-16 md:py-24 bg-[#0A192F]">
      <div className="w-full max-w-[92%] md:max-w-full mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#64FFDA] to-[#00B4D8] bg-clip-text text-transparent">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#112240] rounded-lg overflow-hidden border border-[#64FFDA]/10 hover:border-[#64FFDA]/30 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0A192F]/60 group-hover:bg-[#0A192F]/40 transition-colors duration-300"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-medium font-poppins text-[#E6F1FF]">{project.title}</h3>
                <p className="text-sm text-[#8892B0] line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 text-xs rounded-full bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA]/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Link to={project.link}>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 text-sm border border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
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