import { useInView } from "../hooks/useInView";
import { Database, BarChart3, Code, FileSpreadsheet, TrendingUp, Shield } from "lucide-react";

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
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">Skills</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Stack */}
          <div className="glass-card p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              Technical Stack
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data Expertise */}
          <div className="glass-card p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Data Expertise
            </h3>
            <div className="space-y-3">
              {dataExpertise.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
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
