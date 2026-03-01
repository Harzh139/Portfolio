import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase">
            Contact
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">
              {"Let's work together"}
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {"I'm always open to discussing new opportunities, AI product roles, or interesting projects. Feel free to reach out!"}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href="mailto:sharmaharshu385@gmail.com"
              className="group flex items-center justify-between p-4 border border-border bg-card/50 hover:bg-background glow-hover transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-2 bg-accent/10 group-hover:bg-accent/20 transition-colors rounded-none">
                  <Mail size={18} className="text-accent" />
                </div>
                <span className="text-sm font-bold text-foreground tracking-tight group-hover:translate-x-1 transition-transform">sharmaharshu385@gmail.com</span>
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors relative z-10 hidden sm:block">
                Email
              </span>
            </a>

            <a
              href="tel:+919016752230"
              className="group flex items-center justify-between p-4 border border-border bg-card/50 hover:bg-background glow-hover transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-2 bg-accent/10 group-hover:bg-accent/20 transition-colors rounded-none">
                  <Phone size={18} className="text-accent" />
                </div>
                <span className="text-sm font-bold text-foreground tracking-tight group-hover:translate-x-1 transition-transform">+91-9016752230</span>
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors relative z-10 hidden sm:block">
                Phone
              </span>
            </a>

            <a
              href="https://github.com/Harzh139"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 border border-border bg-card/50 hover:bg-background glow-hover transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-2 bg-accent/10 group-hover:bg-accent/20 transition-colors rounded-none">
                  <Github size={18} className="text-accent" />
                </div>
                <span className="text-sm font-bold text-foreground tracking-tight group-hover:translate-x-1 transition-transform">github.com/Harzh139</span>
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors relative z-10 hidden sm:block">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 border border-border bg-card/50 hover:bg-background glow-hover transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-2 bg-accent/10 group-hover:bg-accent/20 transition-colors rounded-none">
                  <Linkedin size={18} className="text-accent" />
                </div>
                <span className="text-sm font-bold text-foreground tracking-tight group-hover:translate-x-1 transition-transform">Harsh Sharma</span>
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors relative z-10 hidden sm:block">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
