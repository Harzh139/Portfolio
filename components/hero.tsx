import { ArrowDown, Github, Linkedin, Mail, Phone, FileText } from "lucide-react"

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="mx-auto max-w-6xl w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex items-center gap-3 animate-pulse text-accent">
            <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
            <p className="text-sm font-mono tracking-widest uppercase font-bold">
              AI Product Manager
            </p>
          </div>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-none uppercase glitch-text"
            data-text="Harsh Sharma"
          >
            Harsh Sharma
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-lg font-medium border-l-2 border-accent pl-4">
            Zero complacency. Pure momentum. I am an <strong className="text-foreground">AI Product Manager</strong> bridging the gap between ruthless business requirements and cutting-edge AI/ML solutions. I build, I measure, and I relentlessly iterate.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/Harzh139"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-background hover:bg-accent border border-muted-foreground/30 hover:border-accent transition-all duration-300 transform hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-sharma-406044299/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-background hover:bg-accent border border-muted-foreground/30 hover:border-accent transition-all duration-300 transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sharmaharshu385@gmail.com"
              className="p-3 text-muted-foreground hover:text-background hover:bg-accent border border-muted-foreground/30 hover:border-accent transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+919016752230"
              className="p-3 text-muted-foreground hover:text-background hover:bg-accent border border-muted-foreground/30 hover:border-accent transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://drive.google.com/file/d/1EH9fK33xhuB7yyttPkB7KDMxwHTcIIqf/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-background hover:bg-accent border border-muted-foreground/30 hover:border-accent transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Resume"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end gap-8 relative z-0">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-1 bg-accent blur-xl opacity-20 group-hover:opacity-100 transition duration-700 animate-pulse"></div>
            <div className="relative w-80 h-96 border-2 border-accent flex flex-col items-center justify-center bg-background transform transition-all duration-700 group-hover:scale-105 group-hover:-rotate-3 group-hover:bg-accent/5 overflow-hidden shadow-[0_0_40px_-10px_var(--color-accent)]">
              {/* Animated scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none z-10"></div>
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* HS Initial Block */}
              <div className="relative z-20 flex flex-col items-center justify-center -mt-8">
                <span
                  className="text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 tracking-tighter uppercase relative select-none glitch-text transition-all duration-500 group-hover:scale-110 group-hover:to-foreground"
                  data-text="HS"
                >
                  HS
                </span>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 border-l-2 border-t-2 border-accent w-8 h-8 opacity-50"></div>
              <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-accent w-8 h-8 opacity-50"></div>

              <div className="absolute bottom-12 left-0 w-full flex flex-col items-center z-20">
                <div className="w-1/2 h-px bg-accent/50 mb-4"></div>
                <span className="text-sm font-mono text-accent font-black tracking-[0.3em] uppercase group-hover:animate-bounce">Execute.</span>
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
