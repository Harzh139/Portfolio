import Link from "next/link"

const caseStudies = [
  {
    title: "🍃 Swiggy Instamart — Competitive Analysis",
    tags: [
      { name: "Competitor Analysis", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
      { name: "Secondary research", color: "bg-pink-500/10 text-pink-500 border-pink-500/20" },
      { name: "Product Analysis", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    ],
    prdUrl: "/prd/swiggy-case-study",
    image: "/swiggy_blinkit_case.png",
  },
  {
    title: "💳 Kuvera x CRED — Conversion Problem",
    tags: [
      { name: "Product Strategy", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
      { name: "Fintech", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
      { name: "Growth", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
    ],
    prdUrl: "/prd/kuvera-case-study",
    image: "/kuvera_case.png",
  },
]

const technicalProjects = [
  {
    title: "🤖 DocMentor: Smart Q&A System",
    tags: [
      { name: "RAG", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
      { name: "Product Scope", color: "bg-green-500/10 text-green-500 border-green-500/20" },
      { name: "MVP", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    ],
    prdUrl: "/prd/docmentor",
    image: "/proj_doc_1772354529508.png",
  },
  {
    title: "📄 Resume ATS Reviewer",
    tags: [
      { name: "AI Tool", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
      { name: "User Flow", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
      { name: "Discord", color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" },
    ],
    prdUrl: "/prd/resume-ats-reviewer-prd",
    image: "/proj_agent_1772354545148.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Case Studies Column */}
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-mono text-accent tracking-wider uppercase whitespace-nowrap">
                Case Studies
              </h2>
              <div className="flex-1 h-px bg-border/40" />
            </div>
            <div className="flex flex-col gap-6">
              {caseStudies.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

          {/* Technical Projects Column */}
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-mono text-accent tracking-wider uppercase whitespace-nowrap">
                Technical Projects
              </h2>
              <div className="flex-1 h-px bg-border/40" />
            </div>
            <div className="flex flex-col gap-6">
              {technicalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <Link
      href={project.prdUrl}
      className="group relative flex flex-col bg-[#111111] border border-white/5 rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col gap-4 p-5 flex-1 bg-[#161616]">
        <h3 className="text-sm font-semibold text-white/90 leading-snug group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag: any) => (
            <span
              key={tag.name}
              className={`px-2.5 py-0.5 text-[10px] font-medium border rounded-full ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
