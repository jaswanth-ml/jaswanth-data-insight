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
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">What I Bring to the Table</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="glass-card-hover p-6 flex items-center gap-4"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
