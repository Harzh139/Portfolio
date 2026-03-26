const experiences = [
  {
    period: "Feb 2026 — Present",
    role: "Business & Product Associate",
    company: "Dharmshil Group of Companies",
    companyUrl: "#",
    description:
      "• Led requirement engineering for a corporate website redesign, translating business requirements into functional specifications, improving development clarity by ~45%\n• Coordinated between stakeholders and technical teams to ensure project alignment, reducing communication gaps by ~45%\n• Defined user personas, feature scope, and content structures, improving development efficiency by ~40%.",
    tags: ["Product Management", "Requirements Gathering", "User Flows", "Stakeholder Management"],
  },
  {
    period: "Nov 2025 — Feb 2026",
    role: "Data & GenAI Analyst Intern",
    company: "FrankMax India",
    companyUrl: "#",
    description:
      "• Analyzed model outputs and user interactions to identify product trends, improving decision-making efficiency by ~50%\n• Converted business requirements into technical specifications, improving KPI alignment by ~45%\n• Presented technical trade-offs to cross-functional teams, reducing solution risk by ~40%",
    tags: ["GenAI", "LLMs", "Product Specifications", "AI Solutions"],
  },
  {
    period: "Mar 2025 — Jun 2025",
    role: "Data Analyst Intern (AIML)",
    company: "WebMobi 360",
    companyUrl: "#",
    description:
      "• Defined success metrics and data quality benchmarks for ML projects, improving model evaluation clarity by ~50%\n• Documented trade-offs between accuracy, latency, and resource cost, enabling better decision-making by ~45%",
    tags: ["Machine Learning", "Data Quality", "Model Evaluation", "Python"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase">
            Experience
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-col gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.role + exp.company}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 p-6 border-l-4 border-transparent hover:border-accent bg-background hover:bg-secondary/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <span className="text-sm font-bold font-mono text-accent pt-1 whitespace-nowrap uppercase tracking-widest relative z-10">
                {exp.period}
              </span>

              <div className="flex flex-col gap-3 relative z-10">
                <h3 className="text-xl text-foreground font-black flex items-center gap-2 flex-wrap uppercase tracking-tight">
                  {exp.role}
                  <span className="text-muted-foreground">{"//"}</span>
                  <span className="text-foreground border-b-2 border-accent/30 group-hover:border-accent transition-colors">
                    {exp.company}
                  </span>
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed font-medium whitespace-pre-line">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 mt-auto">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-mono text-background bg-accent font-bold uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="flex items-center gap-4 mb-12 mt-20">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase">
            Education
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border-t-4 border-t-accent bg-card hover:bg-secondary/20 transition-colors shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full group-hover:scale-150 transition-transform"></div>
            <p className="text-xs font-mono font-bold text-accent mb-2 tracking-widest uppercase">2023 — 2025</p>
            <h3 className="text-xl font-black text-foreground mb-1 uppercase tracking-tight">MSc. Data Science</h3>
            <p className="text-sm text-muted-foreground font-medium">Alliance University, Bengaluru</p>
          </div>
          <div className="p-8 border-t-4 border-t-accent bg-card hover:bg-secondary/20 transition-colors shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full group-hover:scale-150 transition-transform"></div>
            <p className="text-xs font-mono font-bold text-accent mb-2 tracking-widest uppercase">2020 — 2023</p>
            <h3 className="text-xl font-black text-foreground mb-1 uppercase tracking-tight">Bachelor{"'"}s in Computer Applications</h3>
            <p className="text-sm text-muted-foreground font-medium">LJ University, Ahmedabad</p>
          </div>
        </div>
      </div>
    </section>
  )
}
