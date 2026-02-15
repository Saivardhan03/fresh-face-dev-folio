import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero py-10 border-t border-hero-foreground/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-hero-muted text-sm">
            © {new Date().getFullYear()} Sai Vardhan Revure. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Saivardhan03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-hero-foreground/20 flex items-center justify-center text-hero-muted hover:text-hero-foreground hover:border-primary transition-all"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/Saivardhan-Revure"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-hero-foreground/20 flex items-center justify-center text-hero-muted hover:text-hero-foreground hover:border-primary transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:saivardhan0506@gmail.com"
              className="w-9 h-9 rounded-lg border border-hero-foreground/20 flex items-center justify-center text-hero-muted hover:text-hero-foreground hover:border-primary transition-all"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
