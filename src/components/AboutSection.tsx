import { useInView } from "../hooks/useInView";

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 gradient-text inline-block">About Me</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />

        <div className="glass-card p-8 md:p-10">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Analytical ECE graduate with hands-on experience in SQL, Python, Excel, and Power BI. 
            Skilled in cleaning large datasets, performing exploratory data analysis, building predictive models, 
            and developing business dashboards. Strong understanding of revenue metrics, customer behavior, 
            and credit risk analysis. Passionate about solving real-world business problems using data-driven strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
