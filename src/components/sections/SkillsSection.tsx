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
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border border-primary/20 ${skill.bgColor} backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg`}
            >
              <div className="flex items-center gap-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-bold text-primary">{skill.category}</h3>
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