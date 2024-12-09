import { Code2, Palette, Database } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code2 className="w-8 h-8 text-primary" />,
      items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
      bgColor: "bg-background/40"
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="w-8 h-8 text-primary" />,
      items: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      bgColor: "bg-background/40"
    },
    {
      category: "Full Stack",
      icon: <Database className="w-8 h-8 text-primary" />,
      items: ["Node.js", "MongoDB", "Express.js", "REST APIs"],
      bgColor: "bg-background/40"
    }
  ];

  return (
    <section id="skills" className="py-8 md:py-16">
      <div className="max-w-[92%] md:max-w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-8 md:mb-12">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((domain) => (
            domain.items.map((skill, idx) => (
              <div
                key={`${domain.category}-${idx}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-background/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
              >
                {idx === 0 && domain.icon}
                <span className="text-sm md:text-base">{skill}</span>
              </div>
            ))
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;