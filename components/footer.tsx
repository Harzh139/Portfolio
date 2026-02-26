export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          {"Designed & built by Harsh Sharma"}
        </p>
        <p className="text-xs text-muted-foreground">
          {"Built with Next.js & Tailwind CSS"}
        </p>
      </div>
    </footer>
  )
}
