import { useInView } from "../hooks/useInView";
import { TrendingUp, ShoppingCart, Shield } from "lucide-react";

const projects = [
  {
    icon: TrendingUp,
    title: "Housing Price Prediction Model",
    description: "Developed a predictive regression model to estimate housing prices using structured datasets.",
    contributions: [
      "Implemented Linear Regression model",
      "Evaluated performance using R² score",
      "Reduced prediction error using MAE and RMSE",
      "Focused on improving model reliability and accuracy",
    ],
    technologies: ["Python", "Regression", "Data Preprocessing"],
    impact: "Improved price prediction accuracy and enhanced decision-making confidence in real estate analysis.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Customer & Revenue Intelligence Dashboard",
    description: "Built a comprehensive analytics dashboard to analyze customer behavior and revenue trends.",
    contributions: [
      "Cleaned and validated 100K+ transaction records",
      "Wrote optimized SQL queries for revenue and retention analysis",
      "Identified customer segmentation patterns",
      "Developed interactive Power BI dashboard",
    ],
    technologies: ["SQL", "MySQL", "Power BI", "Excel"],
    impact: "Provided actionable insights to improve revenue strategy and customer retention planning.",
  },
  {
    icon: Shield,
    title: "Loan Portfolio Risk & Exposure Dashboard",
    description: "Designed an interactive risk analytics dashboard to evaluate loan portfolio performance and default exposure.",
    contributions: [
      "Analyzed 4.5K+ loan records",
      "Identified 22.2% overall default rate",
      "Calculated Exposure at Risk (25.17%)",
      "Segmented borrowers by credit score, income, risk level, and purpose",
      "Identified high default segments (Debt Consolidation – 30.3%)",
    ],
    technologies: ["SQL", "Power BI", "Data Segmentation", "Risk Analysis"],
    impact: "Enabled proactive credit risk assessment and improved strategic lending decisions by identifying high-risk borrower categories.",
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">Featured Projects</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />

        <div className="space-y-8">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="glass-card-hover p-8 md:p-10"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mt-1">{project.description}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 ml-1">
                  {project.contributions.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-primary">Business Impact:</span>{" "}
                    {project.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
