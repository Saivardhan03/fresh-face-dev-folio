import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-12" />

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 gradient-primary rounded-full flex items-center justify-center">
                <Briefcase size={12} className="text-primary-foreground" />
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">Smart Internz</h3>
                  <span className="text-sm text-muted-foreground flex items-center gap-1 mt-1 sm:mt-0">
                    <Calendar size={14} /> Jul 2024 – Dec 2024
                  </span>
                </div>
                <p className="text-primary font-medium text-sm mb-3">Intern — NLP & Machine Learning</p>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">▸</span>
                    Worked on Gold Market Sentiment Analysis using NLP and ML, developing SVM & RNN models for real-time financial sentiment analysis.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">▸</span>
                    Implemented tokenization, stop-word removal, and TF-IDF to improve model accuracy.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">▸</span>
                    Automated data collection and prediction, improving workflow efficiency by 30%.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">▸</span>
                    Built interactive data-visualization dashboards for actionable stakeholder insights.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
