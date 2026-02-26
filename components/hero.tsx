import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-mono text-accent tracking-wider uppercase">
            AI Product Manager
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
            Harsh Sharma
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-lg">
            AI Product Manager with hands-on experience bridging the gap between business requirements and AI/ML solutions. Passionate about translating complex technical capabilities into impactful product decisions.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/Harzh139"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-sharma-linkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sharmaharshu385@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919016752230"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end gap-8">
          <div className="relative">
            <div className="w-64 h-64 rounded-full border border-border flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-accent/30 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent font-mono">HS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-bounce hidden md:block"
        aria-label="Scroll to experience"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
