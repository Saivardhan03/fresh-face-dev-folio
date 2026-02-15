import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "saivardhan0506@gmail.com", href: "mailto:saivardhan0506@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6300416252", href: "tel:+916300416252" },
    { icon: Linkedin, label: "LinkedIn", value: "Saivardhan-Revure", href: "https://linkedin.com/in/Saivardhan-Revure" },
    { icon: Github, label: "GitHub", value: "Saivardhan03", href: "https://github.com/Saivardhan03" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Let's Connect</h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                I'm actively looking for software developer opportunities. Feel free to reach out 
                if you'd like to collaborate or discuss potential roles!
              </p>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon size={18} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full gradient-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                {submitted ? "Message Sent! ✓" : (<><Send size={16} /> Send Message</>)}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
