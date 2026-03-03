import { useInView } from "../hooks/useInView";
import { Brain, Target, Puzzle, FileText, Zap, Lightbulb } from "lucide-react";

const impacts = [
  { icon: Brain, label: "Data-driven decision making" },
  { icon: Target, label: "Business-focused analytics mindset" },
  { icon: Puzzle, label: "Structured problem solving" },
  { icon: FileText, label: "Clear and efficient reporting" },
  { icon: Zap, label: "Adaptability and fast learning" },
  { icon: Lightbulb, label: "Strong analytical thinking" },
];

const ImpactSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="impact" className="section-padding" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="section-label">Value</span>
        <h2 className="section-title gradient-text inline-block">What I Bring to the Table</h2>
        <div className="section-divider" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {impacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="glass-card-hover p-6 flex items-center gap-4 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="p-2.5 rounded-xl bg-primary/8 border border-primary/15 flex-shrink-0 group-hover:bg-primary/12 group-hover:border-primary/25 group-hover:shadow-[0_0_16px_hsl(var(--primary)/0.15)] transition-all duration-400">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
