import { FileText } from "lucide-react"

const projects = [
  {
    title: "DocMentor: Smart Q&A System",
    description:
      "Designed a RAG-based analysis tool that improved query accuracy by 35% and achieved a 4.5/5 user satisfaction rating through rigorous scenario testing.",
    tags: ["RAG", "Data Analysis", "Testing"],
    liveUrl: "#",
    githubUrl: "https://github.com/Harzh139",
    prdUrl: "/prd/docmentor",
    image: "/proj_doc_1772354529508.png",
  },
  {
    title: "AI Automated Agent (ALEX)",
    description:
      "Identified developer productivity bottlenecks via workflow analysis and built an automation agent that significantly reduced manual effort and improved team efficiency.",
    tags: ["Process Automation", "Workflow Analysis", "AI Agent"],
    liveUrl: "#",
    githubUrl: "https://github.com/Harzh139",
    prdUrl: "/prd/alex",
    image: "/proj_agent_1772354545148.png",
  },
  {
    title: "Voice Assistant for Grammar",
    description:
      "Defined evaluation metrics and conducted 20+ user testing sessions to iterate on accuracy, achieving an 85% accuracy benchmark.",
    tags: ["Product Analysis", "User Testing", "Metrics"],
    liveUrl: "#",
    githubUrl: "https://github.com/Harzh139",
    prdUrl: "/prd/voice-assistant",
    image: "/proj_voice_1772354513844.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase">
            Projects
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col border border-border bg-card overflow-hidden glow-hover"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"></div>

              <div className="relative h-48 w-full border-b border-border overflow-hidden">
                <div className="absolute inset-0 bg-accent/20 mix-blend-multiply z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="flex flex-col gap-4 p-8 flex-1 relative z-10 bg-card">
                <h3 className="text-xl font-bold text-foreground leading-snug tracking-tight">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-mono text-background bg-accent font-bold uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* PRD Link */}
                <div className="pt-4 mt-2 border-t border-border/50">
                  <a
                    href={project.prdUrl}
                    className="inline-flex items-center gap-2 text-xs font-mono text-accent/80 hover:text-accent transition-colors group/prd font-bold uppercase tracking-wider"
                    aria-label={`Read PRD for ${project.title}`}
                  >
                    <FileText size={14} />
                    <span className="group-hover/prd:translate-x-1 transition-transform">Read PRD ↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
