import { BookOpen, Star, Trophy, Heart } from "lucide-react";

const StorySection = () => {
  const stories = [
    {
      title: "The Beginning",
      icon: <BookOpen className="w-6 h-6" />,
      content: "Started my journey in tech with a curiosity about how websites work. Spent countless nights coding and learning new technologies."
    },
    {
      title: "First Achievement",
      icon: <Trophy className="w-6 h-6" />,
      content: "Won first place in a national hackathon, which boosted my confidence and opened new opportunities."
    },
    {
      title: "Growing Passion",
      icon: <Heart className="w-6 h-6" />,
      content: "Beyond coding, I discovered my love for design and user experience, leading me to explore UI/UX design."
    },
    {
      title: "Current Goals",
      icon: <Star className="w-6 h-6" />,
      content: "Working on innovative projects while continuing to learn and grow in both development and design."
    }
  ];

  return (
    <section id="story" className="w-full bg-accent/10">
      <div className="py-16 md:py-20">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 text-primary">My Story</h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative space-y-6 md:space-y-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-primary/30 pb-8 last:pb-0"
              >
                <div className="absolute -left-3 top-0 bg-background p-1 rounded-full border-2 border-primary">
                  {story.icon}
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold mb-2 text-primary">{story.title}</h3>
                  <p className="text-muted-foreground">{story.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;