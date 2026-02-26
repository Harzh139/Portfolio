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
              className="group flex items-center justify-between p-4 rounded-lg border border-border hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span className="text-sm text-foreground">sharmaharshu385@gmail.com</span>
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">
                Email
              </span>
            </a>

            <a
              href="tel:+919016752230"
              className="group flex items-center justify-between p-4 rounded-lg border border-border hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span className="text-sm text-foreground">+91-9016752230</span>
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">
                Phone
              </span>
            </a>

            <a
              href="https://github.com/Harzh139"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-lg border border-border hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Github size={18} className="text-accent" />
                <span className="text-sm text-foreground">github.com/Harzh139</span>
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-lg border border-border hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Linkedin size={18} className="text-accent" />
                <span className="text-sm text-foreground">Harsh Sharma</span>
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
