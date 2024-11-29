import { Code2, Palette, Database } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code2 className="w-8 h-8 text-primary" />,
      items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
      bgColor: "bg-blue-50/5"
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="w-8 h-8 text-primary" />,
      items: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      bgColor: "bg-purple-50/5"
    },
    {
      category: "Full Stack",
      icon: <Database className="w-8 h-8 text-primary" />,
      items: ["Node.js", "MongoDB", "Express.js", "REST APIs"],
      bgColor: "bg-green-50/5"
    }
  ];

  return (
    <section id="skills" className="py-8 md:py-16">
      <div className="max-w-[92%] md:max-w-full mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-4 md:p-6 rounded-lg border border-primary/20 ${skill.bgColor} backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-lg md:text-xl font-bold text-primary">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;