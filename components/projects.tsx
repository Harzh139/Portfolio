const liveProducts = [
  {
    title: "⚡ CodeMiles: AI-Native Agentic Coding",
    tags: [
      { name: "AI Agent", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
      { name: "Dev Tools", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
      { name: "GitHub API", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
    ],
    link: "https://code-miles-i5cj.vercel.app/repo",
    image: "/codemiles_preview.png",
  },
  {
    title: "🤖 DocMentor: Smart Q&A System",
    tags: [
      { name: "RAG", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
      { name: "Product Scope", color: "bg-green-500/10 text-green-500 border-green-500/20" },
      { name: "MVP", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    ],
    link: "https://docchatbot-6.onrender.com/",
    image: "/proj_doc_1772354529508.png",
  },
  {
    title: "📄 ATS Resume Tailor",
    description: "AI-powered resume optimizer that rewrites your resume to match any job description and compiles it into a recruiter-ready PDF using Gemini AI + LaTeX",
    tags: [
      { name: "AI TOOL", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
      { name: "GEMINI AI", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
      { name: "LATEX", color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" },
    ],
    link: "https://resume-magic-wand-66.lovable.app/",
    image: "/proj_agent_1772354545148.png",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xs font-mono text-accent tracking-[0.3em] uppercase whitespace-nowrap">
              My Live Products
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border/60 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveProducts.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full bg-card/20 border border-white/10 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(var(--color-accent),0.1)]"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xl shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Arrow */}
        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-7 flex-1 bg-card/30 backdrop-blur-sm group-hover:bg-card/50 transition-colors duration-500 rounded-b-xl border-t border-white/5">
        <h3 className="text-lg font-bold text-foreground leading-tight tracking-tight group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {project.description && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-2.5 mt-auto">
          {project.tags.map((tag: any) => (
            <span
              key={tag.name}
              className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full backdrop-blur-md ${tag.color} border-white/5 shadow-sm`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
      
      {/* Bottom Glow */}
      <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </a>
  )
}
