import { notFound } from "next/navigation"
import { promises as fs } from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import type { Metadata } from "next"

const prdFiles: Record<string, { file: string; title: string; project: string }> = {
    "alex": {
        file: "alex-prd.md",
        title: "ALEX – AI Developer Workflow Agent",
        project: "AI Automated Agent (ALEX)",
    },
    "docmentor": {
        file: "docmentor-prd.md",
        title: "DocMentor – Smart Document Q&A Chatbot",
        project: "Smart Document Q&A Chatbot (DocMentor)",
    },
    "resume-ats-reviewer": {
        file: "resume-ats-reviewer-prd.md",
        title: "Resume ATS Reviewer – AI Resume Alignment Analyzer",
        project: "Resume ATS Reviewer",
    },
    "voice-assistant": {
        file: "voice-assistant-prd.md",
        title: "AI Communication Skill Enhancer",
        project: "Voice Assistant for Real-time Grammar Feedback",
    },
    "multi-agent-productivity": {
        file: "Multi-Agent AI Productivity System _ PRD _V1_.md",
        title: "Multi-Agent AI Productivity System",
        project: "Multi-Agent AI Productivity System",
    },
}

export async function generateStaticParams() {
    return Object.keys(prdFiles).map((slug) => ({ slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const prd = prdFiles[slug]
    if (!prd) return { title: "PRD Not Found" }
    return {
        title: `${prd.title} — PRD | Harsh Sharma`,
        description: `Product Requirements Document for ${prd.project} by Harsh Sharma`,
    }
}

export default async function PRDPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const prd = prdFiles[slug]

    if (!prd) notFound()

    const filePath = path.join(process.cwd(), "public", "prd", prd.file)
    let content: string

    try {
        content = await fs.readFile(filePath, "utf-8")
    } catch {
        notFound()
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Top nav bar */}
            <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between gap-4">
                    <Link
                        href="/#projects"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Portfolio
                    </Link>
                    <div className="flex items-center gap-2 text-xs font-mono text-accent">
                        <FileText size={14} />
                        PRD Document
                    </div>
                </div>
            </div>

            {/* Content */}
            <main className="mx-auto max-w-4xl px-6 py-12">
                {/* Project badge */}
                <div className="mb-8">
                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full">
                        <FileText size={12} />
                        {prd.project}
                    </span>
                </div>

                {/* Markdown rendered content */}
                <article className="prose prose-neutral dark:prose-invert max-w-none
          prose-headings:font-semibold prose-headings:tracking-tight
          prose-h1:text-3xl prose-h1:mb-8 prose-h1:text-foreground
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-foreground prose-h2:border-b prose-h2:border-border prose-h2:pb-2
          prose-h3:text-base prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-accent prose-h3:font-mono prose-h3:uppercase prose-h3:tracking-wider prose-h3:text-sm
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-li:text-muted-foreground prose-li:leading-relaxed
          prose-strong:text-foreground prose-strong:font-semibold
          prose-hr:border-border prose-hr:my-8
          prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        ">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </article>

                {/* Footer CTA */}
                <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to all projects
                    </Link>
                    <Link
                        href="/#contact"
                        className="text-sm text-accent hover:text-accent/80 transition-colors"
                    >
                        Get in touch →
                    </Link>
                </div>
            </main>
        </div>
    )
}
