const experiences = [
  {
    period: "Feb 2026 — Present",
    role: "Product & AI Associate",
    company: "Dharmshil",
    companyUrl: "#",
    description:
      "• Built a real-time AI voice assistant for grammar feedback achieving 91% accuracy, driving a 20% improvement in communication accuracy across 15 beta users.\n• Led requirement gathering sessions, authoring PRDs and 3 EPICs broken into 12 features and 40+ user stories for a clinic website redesign.\n• Translated business requirements into clear feature definitions and tasks, reducing back-and-forth and improving execution.\n• Maintained a sprint backlog of 20+ items in JIRA, grooming tickets weekly cross-functionally.",
    tags: ["Product Management", "AI Assitant", "PRDs", "JIRA", "Agile"],
  },
  {
    period: "Nov 2025 — Feb 2026",
    role: "Gen AI Developer Intern",
    company: "FrankMax",
    companyUrl: "#",
    description:
      "• Identified workflow inefficiencies and defined requirements for ALEX, an agentic automation system, improving efficiency by 25%.\n• Partnered with stakeholders to translate business needs into scalable AI-driven solutions, documenting acceptance criteria.\n• Tracked model performance metrics and synthesized user feedback to support backlog refinement.\n• Communicated AI trade-offs and limitations to business and engineering stakeholders.",
    tags: ["GenAI", "LLMs", "Requirements definition", "Cross-Functional"],
  },
  {
    period: "Mar 2025 — Jun 2025",
    role: "AI ML Engineer Intern",
    company: "WebMobi 360",
    companyUrl: "#",
    description:
      "• Defined data quality standards and success metrics to ensure alignment with ML model outputs.\n• Evaluated ML model performance documenting accuracy-speed-cost trade-offs for product decisions.\n• Collaborated closely with cross-functional teams to translate AI/ML capabilities into user-facing solutions.",
    tags: ["Machine Learning", "Success Metrics", "Python", "Trade-offs"],
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
        <div className="flex items-center gap-4 mb-12 mt-12">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase">
            Education
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border-t-4 border-t-accent bg-card hover:bg-secondary/20 transition-colors shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full group-hover:scale-150 transition-transform"></div>
            <p className="text-xs font-mono font-bold text-accent mb-2 tracking-widest uppercase">Sept 2023 — Dec 2025</p>
            <h3 className="text-xl font-black text-foreground mb-1 uppercase tracking-tight">M.Sc. in Data Science</h3>
            <p className="text-sm text-muted-foreground font-medium">Alliance University, Bengaluru</p>
          </div>
          <div className="p-8 border-t-4 border-t-accent bg-card hover:bg-secondary/20 transition-colors shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full group-hover:scale-150 transition-transform"></div>
            <p className="text-xs font-mono font-bold text-accent mb-2 tracking-widest uppercase">March 2020 — April 2023</p>
            <h3 className="text-xl font-black text-foreground mb-1 uppercase tracking-tight">Bachelor{"'"}s in Computer Applications</h3>
            <p className="text-sm text-muted-foreground font-medium">Lok Jagruti Kendra University</p>
          </div>
        </div>
      </div>
    </section>
  )
}
