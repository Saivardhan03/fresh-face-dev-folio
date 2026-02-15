import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Database, Wrench, BookOpen, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "Bootstrap", level: 70 },
    ],
  },
  {
    icon: Wrench,
    title: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", level: 75 },
      { name: "Hibernate", level: 70 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "SQL Queries", level: 85 },
    ],
  },
  {
    icon: BookOpen,
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 85 },
      { name: "Eclipse", level: 75 },
      { name: "Google Colab", level: 70 },
      { name: "Linux", level: 65 },
    ],
  },
  {
    icon: Brain,
    title: "Core Concepts",
    skills: [
      { name: "DSA", level: 75 },
      { name: "OOP", level: 85 },
      { name: "Machine Learning", level: 70 },
      { name: "REST API", level: 75 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-skill-bar-bg rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full gradient-primary rounded-full"
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <cat.icon size={18} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                </div>
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={ci * 0.1 + si * 0.1}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
