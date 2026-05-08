"use client"

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t-2 border-border py-12 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30"></div>
      
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
            {"Designed & built by Harsh Sharma"}
          </p>
          <p className="text-[10px] font-mono font-black text-accent uppercase tracking-[0.2em] border border-accent/30 px-3 py-1 bg-accent/5">
            {"Zero Complacency. Pure Momentum."}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Harzh139" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/harsh-sharma-406044299/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:sharmaharshu385@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
            <Mail size={20} />
          </a>
          
          <div className="h-6 w-px bg-border mx-2"></div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center p-2 rounded-full border border-border hover:border-accent text-muted-foreground hover:text-accent transition-all hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  )
}
