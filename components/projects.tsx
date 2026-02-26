import { FileText } from "lucide-react"

const projects = [
  {
    title: "Voice Assistant for Real-time Grammar Feedback",
    description:
      "Built real-time AI voice assistant for grammar feedback, achieving 40% improvement in communication accuracy through user testing. Defined evaluation metrics (accuracy, latency) and iterated across 20+ test sessions to reach 85% accuracy benchmark.",
    tags: ["AI", "Voice Processing", "NLP", "Evaluation Metrics"],
    liveUrl: "#",
    githubUrl: "https://github.com/Harzh139",
    prdUrl: "/prd/voice-assistant",
  },
  {
    title: "Smart Document Q&A Chatbot (DocMentor)",
    description:
      "Built hybrid RAG-based chatbot improving query accuracy by 35% over static FAQ systems. Designed and tested 10+ real-world scenarios, achieving 4.5/5 user satisfaction score.",
    tags: ["RAG", "LangChain", "LLM", "Vector DB"],
    liveUrl: "#",
    githubUrl: "https://github.com/Harzh139",
    prdUrl: "/prd/docmentor",
  },
  {
    title: "AI Automated Agent (ALEX)",
    description:
      "Identified developer productivity bottleneck and built 'ALEX', an AI automation agent that streamlined code change and git commit workflows, reducing manual development effort and improving team efficiency. Designed command-based interaction model based on developer workflow analysis.",
    tags: ["AI Agent", "Automation", "Python", "Git"],
    liveUrl: "#",
    githubUrl: "https://github.com/Harzh139",
    prdUrl: "/prd/alex",
  },
  {
    title: "Resume ATS Reviewer",
    description:
      "Built a Discord-based AI ATS Reviewer where users upload their resume and job description, triggering an automated workflow that evaluates alignment across multiple dimensions using LLM-based analysis. Generates structured JSON feedback with scores and improvement gaps, and sends the updated evaluation report via email.",
    tags: ["LLM", "Discord Bot", "Automation", "JSON"],
    liveUrl: "#",
    githubUrl: "https://github.com/Harzh139",
    prdUrl: "/prd/resume-ats-reviewer",
  },
  {
    title: "Multi-Agent AI Productivity System",
    description:
      "Built a multi-agent productivity system that breaks goals into subtasks (Planner Agent), auto-schedules Google Calendar events & sends emails (Executor Agent), tracks deadlines (Monitor Agent), and generates a weekly productivity score (Reflection Agent). Reduces missed deadlines and manual scheduling overhead.",
    tags: ["FastAPI", "LangGraph", "Groq", "Google Calendar API", "Gmail API", "FAISS", "Vanilla JS"],
    liveUrl: "#",
    githubUrl: "https://github.com/Harzh139",
    prdUrl: "/prd/multi-agent-productivity",
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col rounded-lg border border-border bg-card overflow-hidden hover:border-accent/40 hover:shadow-sm transition-all"
            >
              <div className="flex flex-col gap-3 p-6 flex-1">
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* PRD Link */}
                <div className="pt-3 mt-1 border-t border-border">
                  <a
                    href={project.prdUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-accent/70 hover:text-accent transition-colors group/prd"
                    aria-label={`Read PRD for ${project.title}`}
                  >
                    <FileText size={13} />
                    <span className="group-hover/prd:underline underline-offset-2">Read PRD →</span>
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
