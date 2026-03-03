const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-28 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] animate-pulse-glow" style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.12), transparent 70%)" }} />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: "2s", background: "radial-gradient(circle, hsl(199 89% 48% / 0.08), transparent 70%)" }} />
      <div className="absolute top-1/2 -left-40 w-[300px] h-[300px] rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "3.5s", background: "radial-gradient(circle, hsl(217 91% 60% / 0.06), transparent 70%)" }} />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(142 71% 45%)" }} />
          <span className="text-xs font-display font-medium tracking-wider uppercase text-muted-foreground">
            Open to Opportunities
          </span>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-[0.9] animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="gradient-text">Jaswanth Chodimalla</span>
        </h1>

        <p className="font-display text-lg md:text-xl lg:text-2xl font-medium text-foreground/80 mb-5 animate-fade-up max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "0.35s" }}>
          Transforming Data into
          <span className="text-primary font-semibold"> Actionable Business Decisions</span>
        </p>

        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Data Analyst skilled in SQL, Python, and Power BI, focused on revenue optimization and risk analytics.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.65s" }}>
          <a href="#projects" className="btn-primary-glow">
            View My Work
          </a>
          <a href="#contact" className="btn-outline-glow">
            Let's Connect
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up" style={{ animationDelay: "1s" }}>
          <div className="w-5 h-9 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-muted-foreground/40 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
