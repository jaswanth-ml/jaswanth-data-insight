import { useInView } from "../hooks/useInView";
import { Database, BarChart3, Code, FileSpreadsheet, TrendingUp } from "lucide-react";

const technicalSkills = [
  { name: "SQL", icon: Database },
  { name: "Python", icon: Code },
  { name: "MySQL", icon: Database },
  { name: "Power BI", icon: BarChart3 },
  { name: "Advanced Excel", icon: FileSpreadsheet },
];

const dataExpertise = [
  "Data Cleaning & Validation",
  "Exploratory Data Analysis (EDA)",
  "Regression Modeling",
  "R², MAE, RMSE Metrics",
  "Dashboard Development",
  "Revenue & Retention Analysis",
  "Credit Risk Segmentation",
];

const SkillsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="section-label">Expertise</span>
        <h2 className="section-title gradient-text inline-block">Skills & Tools</h2>
        <div className="section-divider" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Stack */}
          <div className="glass-card p-8 md:p-10">
            <h3 className="font-display text-lg font-semibold text-foreground mb-8 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Code className="w-4 h-4 text-primary" />
              </div>
              Technical Stack
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technicalSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/25 transition-all duration-400 hover:-translate-y-1 cursor-default"
                  >
                    <Icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data Expertise */}
          <div className="glass-card p-8 md:p-10">
            <h3 className="font-display text-lg font-semibold text-foreground mb-8 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              Data Expertise
            </h3>
            <div className="space-y-2.5">
              {dataExpertise.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 p-3.5 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/25 transition-all duration-400 hover:-translate-y-0.5 cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
