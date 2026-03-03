import { useInView } from "../hooks/useInView";

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="section-label">About</span>
        <h2 className="section-title gradient-text inline-block">Who I Am</h2>
        <div className="section-divider" />

        <div className="glass-card p-8 md:p-12">
          <p className="text-muted-foreground text-base md:text-lg leading-[1.8]">
            Analytical ECE graduate with hands on experience in{" "}
            <span className="text-foreground font-medium">SQL, Python, Excel, and Power BI</span>. 
            Skilled in cleaning large datasets, performing exploratory data analysis, building basic machine learning predictive models 
            and developing business dashboards. Strong understanding of{" "}
            <span className="text-foreground font-medium">revenue metrics, customer behavior, 
            and credit risk analysis</span>. Passionate about solving real-world business problems using data-driven strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
