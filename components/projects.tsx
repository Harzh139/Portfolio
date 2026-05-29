"use client"

import { Zap, Bot, FileText, Database, Brain, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const liveProducts = [
  {
    title: "CodeMiles: AI-Native Agentic Coding",
    icon: Zap,
    tags: [
      { name: "AI Agent", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
      { name: "Dev Tools", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
      { name: "GitHub API", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
    ],
    description: "Autonomous AI coding agent that executes tasks directly in your repository. Features multi-step reasoning, real-time tool use, and seamless GitHub integration for end-to-end dev workflows.",
    link: "https://code-miles-i5cj.vercel.app/repo",
    image: "/codemiles_preview.png",
  },
  {
    title: "DocMentor: Smart Q&A System",
    icon: Bot,
    tags: [
      { name: "RAG", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
      { name: "Product Scope", color: "bg-green-500/10 text-green-500 border-green-500/20" },
      { name: "MVP", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    ],
    description: "Advanced RAG system for intelligent document querying. Leverages vector embeddings and context-aware retrieval to provide precise answers from complex technical documentation and PDFs.",
    link: "https://docchatbot-6.onrender.com/",
    image: "/proj_doc_1772354529508.png",
  },
  {
    title: "ATS Resume Tailor",
    icon: FileText,
    description: "AI-powered resume optimizer that rewrites content to match job descriptions. Compiles recruiter-ready PDFs using Gemini AI and LaTeX for high-fidelity, ATS-compliant formatting.",
    tags: [
      { name: "AI TOOL", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
      { name: "GEMINI AI", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
      { name: "LATEX", color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" },
    ],
    link: "https://resume-magic-wand-66.lovable.app/",
    image: "/proj_agent_1772354545148.png",
  },
  {
    title: "Proof-of-Work Hiring",
    icon: Database,
    description: "Solving the signal-to-noise crisis in recruiting. A reverse-marketplace where discovery is driven by observable 'Proof-of-Work' metrics rather than static, AI-generated resume keywords.",
    featured: "Featured Strategy",
    darkOverlay: true,
    tags: [
      { name: "Marketplace Design", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
      { name: "Product Strategy", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
      { name: "AI Ethics", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
    ],
    link: "/proof-of-work-prd",
    image: "/proof_of_work_hiring_thumbnail_1778666161704.png",
    isCaseStudy: true
  },
  {
    title: "Second Brain for Creators",
    icon: Brain,
    description: "An AI-native retrieval layer for content creators. Uses multimodal LLMs to parse visual style and 'vibe', transforming passive warehouses into active discovery tools. \"Platforms have solved saving, but not finding.\"",
    tags: [
      { name: "Product Design", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
      { name: "Generative AI", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
      { name: "Multimodal LLMs", color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" },
    ],
    link: "/second-brain-prd",
    image: "/second_brain_creators_thumbnail_1778666184293.png",
    isCaseStudy: true,
    metrics: "↓ Time-to-Retrieve | ↑ Content Output"
  },
  {
    title: "Pulse by PhonePe",
    subtitle: "The 3-Second Window",
    icon: Brain,
    description: "Solving PhonePe's retention crisis by transforming the post-payment success screen into a habit-forming discovery layer — powered by real transaction data no competitor can replicate.",
    featured: "Featured Strategy",
    darkOverlay: true,
    tags: [
      { name: "Retention Strategy", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
      { name: "Fintech", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
      { name: "Product Design", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" },
      { name: "UPI", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
    ],
    link: "/phonepe-pulse-prd",
    image: "https://www.google.com/s2/favicons?domain=phonepe.com&sz=128",
    isCaseStudy: true
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xs font-mono text-accent tracking-[0.3em] uppercase whitespace-nowrap">
              My Live Products & Strategies
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
  const Icon = project.icon;
  
  return (
    <div className="group relative flex flex-col h-full bg-card/20 border border-white/10 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgba(var(--color-accent),0.1)]">
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xl shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        {project.darkOverlay && <div className="absolute inset-0 bg-black/40 z-10" />}
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-accent text-background rounded-sm shadow-lg">
              {project.featured}
            </span>
          </div>
        )}

        {/* Floating Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 z-20">
          {project.isCaseStudy ? <FileText size={18} className="text-accent" /> : <ExternalLink size={18} className="text-accent" />}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-7 flex-1 bg-card/30 backdrop-blur-sm group-hover:bg-card/50 transition-colors duration-500 rounded-b-xl border-t border-white/5 relative z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {Icon && <Icon size={18} className="text-accent shrink-0" />}
            <h3 className="text-lg font-bold text-foreground leading-tight tracking-tight group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          {project.subtitle && (
            <div className="text-[11px] font-mono text-muted-foreground font-semibold tracking-wide">
              {project.subtitle}
            </div>
          )}
          {project.metrics && (
            <div className="text-[10px] font-mono text-accent/80 font-bold tracking-wider uppercase">
              {project.metrics}
            </div>
          )}
        </div>

        {project.description && (
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed min-h-[4.5rem]">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-auto pb-4">
          {project.tags.map((tag: any) => (
            <span
              key={tag.name}
              className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full backdrop-blur-md ${tag.color} border-white/5 shadow-sm`}
            >
              {tag.name}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2"
        >
          <Button 
            variant={project.isCaseStudy ? "outline" : "default"} 
            size="sm" 
            className={`w-full group/btn transition-all duration-300 ${project.isCaseStudy ? 'hover:bg-accent hover:text-background border-accent/20' : ''}`}
          >
            {project.isCaseStudy ? "View Case Study" : "Visit Project"}
            <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
      
      {/* Bottom Glow */}
      <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}
