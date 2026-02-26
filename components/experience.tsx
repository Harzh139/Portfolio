const experiences = [
  {
    period: "Feb 2026 — Present",
    role: "Associate Product Manager",
    company: "Dharmshil Group of Companies",
    companyUrl: "#",
    description:
      "Led requirement gathering with leadership for company website redesign aligned with business growth goals. Defined feature scope, user flow, and content structure for multi-page clinic website. Coordinated between business stakeholders and developer to translate requirements into execution tasks. Contributed to branding and launch strategy for new clinic expansion.",
    tags: ["Product Management", "Requirements Gathering", "User Flows", "Stakeholder Management"],
  },
  {
    period: "Nov 2025 — Feb 2026",
    role: "GenAI Developer Intern",
    company: "FrankMax. India",
    companyUrl: "#",
    description:
      "Collaborated with domain experts to translate business requirements into technical specifications for AI solutions, ensuring alignment between user needs and model capabilities. Analyzed model performance metrics and user feedback to drive iterative improvements and inform product enhancement decisions. Communicated technical trade-offs and AI limitations to cross-functional stakeholders.",
    tags: ["GenAI", "LLMs", "Product Specifications", "AI Solutions"],
  },
  {
    period: "Mar 2025 — Jun 2025",
    role: "AIML Engineer Intern",
    company: "WebMobi 360",
    companyUrl: "#",
    description:
      "Defined data quality requirements and success metrics for ML projects, ensuring datasets aligned with business objectives. Evaluated ML model performance through experimentation and testing, documenting trade-offs between accuracy, speed, and resource costs. Collaborated with cross-functional teams to document technical workflows and translate AI/ML capabilities into actionable product features.",
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

        <div className="flex flex-col gap-2">
          {experiences.map((exp) => (
            <div
              key={exp.role + exp.company}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 p-6 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <span className="text-sm font-mono text-muted-foreground pt-1 whitespace-nowrap">
                {exp.period}
              </span>

              <div className="flex flex-col gap-3">
                <h3 className="text-foreground font-medium flex items-center gap-2 flex-wrap">
                  {exp.role}
                  <span className="text-muted-foreground">{"·"}</span>
                  <span className="text-accent">
                    {exp.company}
                  </span>
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full"
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

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border hover:border-accent/40 transition-colors">
            <p className="text-sm font-mono text-muted-foreground mb-1">2023 — 2025</p>
            <h3 className="font-semibold text-foreground mb-1">MSc. Data Science</h3>
            <p className="text-sm text-accent">Alliance University, Bengaluru</p>
          </div>
          <div className="p-6 rounded-lg border border-border hover:border-accent/40 transition-colors">
            <p className="text-sm font-mono text-muted-foreground mb-1">2020 — 2023</p>
            <h3 className="font-semibold text-foreground mb-1">Bachelor{"'"}s in Computer Applications</h3>
            <p className="text-sm text-accent">LJ University, Ahmedabad</p>
          </div>
        </div>
      </div>
    </section>
  )
}
