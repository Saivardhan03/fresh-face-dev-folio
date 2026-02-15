import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Brain Tumor Detection",
    description:
      "Developed a CNN to accurately detect brain tumors from MRI images, achieving up to 98.67% validation accuracy. Explored ResNet and EfficientNet architectures.",
    tech: ["Python", "Deep Learning", "CNN", "ResNet"],
    features: [
      "98.67% validation accuracy",
      "Binary classification (tumor/no tumor)",
      "Performance evaluation with confusion matrix",
    ],
    github: "https://github.com/Saivardhan03",
    date: "May 2025",
  },
  {
    title: "Online Train Ticket Reservation System",
    description:
      "Full-stack web-based Train Ticket Reservation System enabling users to search 100+ trains, check seat availability, and book tickets with 99% data accuracy.",
    tech: ["Java", "SQL", "HTML", "CSS", "Bootstrap", "Servlets"],
    features: [
      "100% authentication success rate",
      "500+ user profile management",
      "Simulated payment gateway",
    ],
    github: "https://github.com/Saivardhan03",
    date: "Dec 2024",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio website showcasing skills, projects, and professional experience with smooth animations and clean design.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Fully responsive design",
      "Smooth scroll animations",
      "Contact form integration",
    ],
    github: "https://github.com/Saivardhan03",
    date: "2025",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col"
              >
                <div className="gradient-primary h-1 w-full" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground font-mono">{project.date}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-accent text-accent-foreground px-2.5 py-1 rounded-md font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="text-xs text-muted-foreground space-y-1 mb-4 flex-1">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-1.5">
                        <span className="text-primary">✓</span> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} /> GitHub
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
