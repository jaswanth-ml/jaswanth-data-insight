const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-glow-secondary/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Data Analyst &bull; SQL &bull; Power BI &bull; Python
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="gradient-text">Jaswanth</span>
        </h1>

        <p className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          Transforming Raw Data into Strategic Business Decisions
        </p>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          I help businesses uncover hidden insights, optimize revenue strategies, and make data-backed decisions that drive measurable growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.65s" }}>
          <a href="#projects" className="btn-primary-glow">
            View My Work
          </a>
          <a href="#contact" className="btn-outline-glow">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
