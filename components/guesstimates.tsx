"use client"

import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const GUESSTIMATES = [
  {
    id: 'blinkit-daily-tonnage',
    title: "Blinkit: Daily Tonnage",
    problem: "What is the total weight of groceries delivered by Blinkit in a day across India?",
    framework: [
      { label: "Total Orders", value: "200k / day" },
      { label: "Avg Weight", value: "4kg / order" }
    ],
    logic: [
      "Assumed average household order includes staples (flour/rice), vegetables, and dairy.",
      "200,000 active daily orders across major Indian metros.",
      "4kg serves as a conservative mean for quick-commerce baskets."
    ],
    result: "800 Tons / Day",
    labels: ["🔍 Guesstimate", "📊 Market Sizing"]
  }
]

export function Guesstimates() {
  return (
    <section id="guesstimates" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xs font-mono text-accent tracking-[0.3em] uppercase whitespace-nowrap">
              Guesstimates
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border/60 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GUESSTIMATES.map((item) => (
              <Card 
                key={item.id}
                className="group relative bg-card/20 border border-white/10 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors" />
                
                <CardHeader className="p-8 pb-3 relative z-10">
                  <div className="flex gap-2 mb-6">
                    {item.labels.map(label => (
                      <span key={label} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full backdrop-blur-md bg-accent/10 text-accent border-accent/20 shadow-sm">
                        {label}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </CardHeader>

                <CardContent className="px-8 pb-8 pt-0 relative z-10 flex flex-col gap-8">
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase opacity-70">Problem</h4>
                    <p className="text-lg text-foreground font-medium leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase opacity-70">Framework & Logic</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {item.framework.map((f, idx) => (
                        <div key={idx} className="p-4 bg-card/40 border border-white/5 rounded-xl transition-colors group-hover:bg-card/60">
                          <div className="text-muted-foreground text-[10px] mb-1 font-bold tracking-wider uppercase">{f.label}</div>
                          <div className="text-foreground font-black text-lg">{f.value}</div>
                        </div>
                      ))}
                    </div>
                    <ul className="space-y-2.5 pt-2">
                      {item.logic.map((line, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/5">
                    <h4 className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-3 opacity-70">The Result</h4>
                    <div className="text-4xl font-black text-foreground tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent/70 transition-all duration-500">
                      {item.result}
                    </div>
                  </div>
                </CardContent>

                {/* Bottom Glow */}
                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
