import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech - Computer Science and Engineering",
    school: "Vellore Institute of Technology (VIT-AP)",
    location: "Amaravati, Andhra Pradesh",
    year: "Dec 2021 – Nov 2025",
    score: "CGPA: 8.01",
  },
  {
    degree: "Class XII - AP Board of Intermediate Education",
    school: "Sri Chaithanya Junior College",
    location: "Tirupati, Andhra Pradesh",
    year: "Apr 2019 – Jul 2021",
    score: "Percentage: 90.2%",
  },
  {
    degree: "Class X - Board of Secondary Education of AP",
    school: "B.C.M High School",
    location: "Tirupati, Andhra Pradesh",
    year: "Jun 2018 – Mar 2019",
    score: "CGPA: 9.7",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-12" />

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={22} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-medium text-sm">{edu.school}</p>
                    <p className="text-xs text-muted-foreground mt-1">{edu.location}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar size={12} /> {edu.year}
                      </span>
                      <span className="text-xs font-semibold gradient-text">{edu.score}</span>
                    </div>
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

export default EducationSection;
