import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClasses = "w-full bg-secondary/30 border border-border/40 rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/40 focus:bg-secondary/50 focus:shadow-[0_0_16px_hsl(var(--primary)/0.08)] transition-all duration-300";

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="section-label">Connect</span>
        <h2 className="section-title gradient-text inline-block">Get In Touch</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info - 2 cols */}
          <div className="md:col-span-2 space-y-8">
            <p className="text-muted-foreground text-sm leading-relaxed">
              I'm always open to discussing data analytics opportunities, collaborations, or just connecting with fellow data enthusiasts.
            </p>
            <div className="space-y-3">
              {[
                { href: "mailto:jaswanth@example.com", icon: Mail, label: "jaswanth@example.com" },
                { href: "#", icon: Linkedin, label: "LinkedIn" },
                { href: "#", icon: Github, label: "GitHub" },
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-3 p-3.5 rounded-xl bg-secondary/20 border border-border/30 hover:border-primary/25 hover:bg-secondary/40 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1">{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form - 3 cols */}
          <form onSubmit={handleSubmit} className="md:col-span-3 glass-card p-8 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClasses}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClasses}
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClasses} resize-none`}
            />
            <button type="submit" className="btn-primary-glow w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
