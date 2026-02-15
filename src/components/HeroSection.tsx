import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base font-mono text-primary tracking-widest uppercase mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-hero-foreground mb-4 tracking-tight"
        >
          Sai Vardhan <span className="gradient-text">Revure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-hero-muted mb-2 font-medium"
        >
          Software Developer | Java Developer | Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-sm md:text-base text-hero-muted/70 max-w-xl mx-auto mb-8"
        >
          Passionate fresher software developer eager to build scalable and efficient applications using Java, Spring Boot, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/Sai_Vardhan_Revure_Resume.pdf"
            download
            className="gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
          >
            <Download size={18} /> Download Resume
          </a>
          <a
            href="#contact"
            className="border border-hero-foreground/20 text-hero-foreground px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-hero-foreground/10 transition-colors"
          >
            <Mail size={18} /> Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-hero-foreground/30 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
