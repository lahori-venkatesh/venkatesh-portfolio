import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tools: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "/projects/ecommerce"
  },
  {
    title: "AI-Powered Analytics",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tools: ["Python", "TensorFlow", "React", "AWS"],
    link: "/projects/analytics"
  },
  {
    title: "Healthcare Dashboard",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    tools: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    link: "/projects/healthcare"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center font-poppins">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background/50 backdrop-blur-sm rounded-lg overflow-hidden border border-primary/10 hover:border-primary/20 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-medium font-poppins">{project.title}</h3>
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
                  <Button variant="ghost" className="w-full mt-2 text-sm">
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