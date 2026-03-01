export function Footer() {
  return (
    <footer className="border-t-2 border-border py-8 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzMzMyIvPjwvc3ZnPg==')] opacity-10"></div>
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
          {"Designed & built by Harsh Sharma"}
        </p>
        <p className="text-[10px] font-mono font-black text-accent uppercase tracking-[0.2em] border border-accent/30 px-3 py-1 bg-accent/5">
          {"Zero Complacency. Pure Momentum."}
        </p>
      </div>
    </footer>
  )
}
