import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-12" />

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              I'm a recent B.Tech Computer Science graduate from VIT-AP University with a strong foundation 
              in Java, Python, and full-stack web development. With hands-on experience in building real-world 
              projects like train ticket reservation systems and AI-powered applications, I bring both technical 
              skills and a passion for solving complex problems. I'm eager to contribute to innovative teams 
              and continuously grow as a software developer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: User,
                title: "Who I Am",
                text: "A dedicated CSE graduate with 8.01 CGPA from VIT-AP, with internship experience in ML and NLP at SmartInternz.",
              },
              {
                icon: Target,
                title: "My Goal",
                text: "To leverage my skills in Java full-stack development and AI/ML to build impactful, scalable software solutions.",
              },
              {
                icon: Lightbulb,
                title: "My Approach",
                text: "I believe in continuous learning, clean code practices, and collaborative problem-solving to deliver quality results.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
