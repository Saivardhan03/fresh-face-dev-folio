import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar } from "lucide-react";

const certs = [
  {
    title: "AI and ML Powered by Google Developers",
    issuer: "SmartInternz",
    period: "Aug 2023 – Nov 2023",
  },
  {
    title: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    period: "Jan 2024 – Mar 2024",
  },
  {
    title: "Java Fullstack",
    issuer: "Jsiders",
    period: "Mar 2024 – Oct 2024",
  },
  {
    title: "OCI 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    period: "Jun 2025 – Aug 2025",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{cert.title}</h3>
                    <p className="text-xs text-primary font-medium mt-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar size={10} /> {cert.period}
                    </p>
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

export default CertificationsSection;
