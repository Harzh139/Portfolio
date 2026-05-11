"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null)

  return (
    <section id="case-studies" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-6">
            <h2 className="text-xs font-mono text-accent tracking-[0.3em] uppercase whitespace-nowrap">
              Case Studies
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-border/60 to-transparent" />
          </div>

          {!selectedStudy ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <Card 
                className="bg-card/50 border-border backdrop-blur-sm hover:bg-accent/50 transition-colors cursor-pointer flex flex-col p-2 group relative overflow-hidden h-full"
                onClick={() => setSelectedStudy('zomato')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors" />
                <CardHeader className="pb-3 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center p-[2px] border border-border shrink-0">
                      <img 
                        src={`https://www.google.com/s2/favicons?domain=zomato.com&sz=128`} 
                        alt="Zomato logo"
                        className="w-full h-full object-contain rounded-full bg-white"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <h3 className="text-foreground font-semibold text-xl leading-tight group-hover:text-primary transition-colors">
                      Zomato Ratings Drop
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col flex-grow justify-end relative z-10">
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-4 text-sm text-muted-foreground font-medium">
                        <span>📝 1 Case Study</span>
                        <span className="text-blue-500 dark:text-blue-400">🔍 RCA</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full pointer-events-none"
                    >
                      View Full Case Study →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="bg-card/20 border border-white/10 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="p-8 md:p-12 lg:p-16">
                <div className="mb-10 flex items-center justify-between">
                  <Button 
                    onClick={() => setSelectedStudy(null)}
                    variant="outline"
                    className="hover:bg-accent/10"
                  >
                    ← Back to Gallery
                  </Button>
                </div>
                <div className="mb-16">
                <div className="flex gap-2 mb-6">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full backdrop-blur-md bg-red-500/10 text-red-500 border-red-500/20 shadow-sm">
                    Zomato
                  </span>
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full backdrop-blur-md bg-blue-500/10 text-blue-500 border-blue-500/20 shadow-sm">
                    Product Teardown
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-foreground leading-tight tracking-tight mb-6">
                  Investigating the Drop in Zomato's Restaurant Ratings
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-[700px]">
                  A comprehensive root cause analysis to uncover why average restaurant ratings on the Zomato platform experienced a sudden decline, and the strategic decisions required to fix it.
                </p>
              </div>

              <div className="space-y-20">
                
                {/* 2x2 Grid Context */}
                <section>
                  <h4 className="text-sm font-mono text-accent tracking-widest uppercase mb-6">Problem Context</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-6 bg-card/40 border border-white/5 rounded-xl flex flex-col justify-center transition-colors hover:bg-card/60">
                      <span className="text-muted-foreground text-sm mb-1 font-medium tracking-wide">Metric</span>
                      <span className="text-foreground font-black text-2xl">Avg Rating</span>
                    </div>
                    <div className="p-6 bg-card/40 border border-white/5 rounded-xl flex flex-col justify-center transition-colors hover:bg-card/60">
                      <span className="text-muted-foreground text-sm mb-1 font-medium tracking-wide">Impact</span>
                      <span className="text-red-500 font-black text-2xl">-10%</span>
                    </div>
                    <div className="p-6 bg-card/40 border border-white/5 rounded-xl flex flex-col justify-center transition-colors hover:bg-card/60">
                      <span className="text-muted-foreground text-sm mb-1 font-medium tracking-wide">Geography</span>
                      <span className="text-foreground font-black text-2xl">Pune</span>
                    </div>
                    <div className="p-6 bg-card/40 border border-white/5 rounded-xl flex flex-col justify-center transition-colors hover:bg-card/60">
                      <span className="text-muted-foreground text-sm mb-1 font-medium tracking-wide">Segment</span>
                      <span className="text-foreground font-black text-2xl">Non-Gold</span>
                    </div>
                  </div>
                </section>

                {/* Narrative Context */}
                <section className="max-w-[700px] mx-auto md:mx-0">
                  <h4 className="text-2xl font-bold text-foreground mb-6">Slicing the Data</h4>
                  <p className="text-muted-foreground text-[17px] leading-[1.8] mb-6">
                    Initial analysis revealed a sharp, sudden 10% decline in the average visible restaurant rating across the app over the past month. Crucially, the calculation method had not changed. Every restaurant's rating remained a historical average of all customer ratings submitted since onboarding.
                  </p>
                  <p className="text-muted-foreground text-[17px] leading-[1.8]">
                    When we sliced the data across different dimensions, a distinct pattern emerged. The drop was not a systemic failure across India—it was entirely isolated to the Pune market. Furthermore, it spanned across all restaurant types and pertained exclusively to food delivery. Most revealing of all, the decline was almost entirely attributed to users without Zomato Gold memberships.
                  </p>
                </section>

                {/* Hypothesis Tree */}
                <section>
                  <h4 className="text-2xl font-bold text-foreground mb-8">Hypothesis Tree: Tracing the Root Cause</h4>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* External Factors Card */}
                    <div className="bg-card/30 border border-white/5 p-8 rounded-2xl shadow-sm">
                      <h5 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                        External Factors
                      </h5>
                      <ul className="space-y-6 text-muted-foreground leading-[1.7] text-[15px]">
                        <li className="flex items-start gap-4">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0"></span>
                          <div>
                            <strong className="text-foreground/90 block mb-1">Increased Competition</strong> 
                            A new local tiffin delivery app has entered the Pune market, altering user expectations and providing an alternative.
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0"></span>
                          <div>
                            <strong className="text-foreground/90 block mb-1">Macro Events</strong> 
                            <span className="text-green-500/80 mr-1">✓ Ruled out.</span> No major festivals, natural disasters, or economic downturns occurred in Pune during this period.
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0"></span>
                          <div>
                            <strong className="text-foreground/90 block mb-1">Public Sentiment</strong> 
                            <span className="text-green-500/80 mr-1">✓ Ruled out.</span> No negative media coverage or regulatory changes affecting operations.
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Internal Factors Card */}
                    <div className="bg-card/30 border border-white/5 p-8 rounded-2xl shadow-sm">
                      <h5 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                        Internal Factors
                      </h5>
                      
                      <div className="space-y-8">
                        <div>
                          <h6 className="text-xs font-bold text-foreground/60 uppercase tracking-[0.2em] mb-4">Product</h6>
                          <ul className="space-y-4 text-muted-foreground leading-[1.7] text-[15px] pl-5 border-l-2 border-white/5">
                            <li className="relative">
                              <span className="absolute -left-[27px] top-2.5 w-2 h-2 rounded-full bg-background border-2 border-white/10"></span>
                              <strong className="text-foreground/90 block">User Journey</strong> 
                              <span className="text-green-500/80 mr-1">✓ Confirmed normal.</span> No UI elements broken; rating prompt workflow is functional.
                            </li>
                            <li className="relative">
                              <span className="absolute -left-[27px] top-2.5 w-2 h-2 rounded-full bg-background border-2 border-red-500/50"></span>
                              <strong className="text-red-400 block">Promotions & Discounts</strong> 
                              Retraction of a major discount code for non-Gold users delivery orders.
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h6 className="text-xs font-bold text-foreground/60 uppercase tracking-[0.2em] mb-4">Tech Infrastructure</h6>
                          <ul className="space-y-4 text-muted-foreground leading-[1.7] text-[15px] pl-5 border-l-2 border-white/5">
                            <li className="relative">
                              <span className="absolute -left-[27px] top-2.5 w-2 h-2 rounded-full bg-background border-2 border-white/10"></span>
                              <strong className="text-foreground/90 block">Bugs/Crashes</strong> 
                              <span className="text-green-500/80 mr-1">✓ Stable.</span> Zero significant anomalies reported across Android, iOS, or web.
                            </li>
                            <li className="relative">
                              <span className="absolute -left-[27px] top-2.5 w-2 h-2 rounded-full bg-background border-2 border-white/10"></span>
                              <strong className="text-foreground/90 block">Backend</strong> 
                              <span className="text-green-500/80 mr-1">✓ Stable.</span> No database migrations or server outages impacting data integrity.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h6 className="text-xs font-bold text-foreground/60 uppercase tracking-[0.2em] mb-4">Operations</h6>
                          <ul className="space-y-4 text-muted-foreground leading-[1.7] text-[15px] pl-5 border-l-2 border-white/5">
                            <li className="relative">
                              <span className="absolute -left-[27px] top-2.5 w-2 h-2 rounded-full bg-background border-2 border-white/10"></span>
                              <strong className="text-foreground/90 block">Fulfillment</strong> 
                              <span className="text-green-500/80 mr-1">✓ Stable.</span> Delivery times, fleet supply, and customer support metrics remained stable.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Pull Quote */}
                <section className="py-20 relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/10 rounded-full blur-[50px] pointer-events-none"></div>
                  <blockquote className="max-w-[800px] mx-auto text-center relative z-10">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.2] tracking-tight mb-8">
                      "A popular discount code applicable across major restaurants in Pune was abruptly <span className="text-red-500">retracted</span> for all non-Gold users."
                    </p>
                    <footer className="text-accent font-mono text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4">
                      <span className="w-8 h-px bg-accent/50"></span>
                      The 'Aha!' Moment
                      <span className="w-8 h-px bg-accent/50"></span>
                    </footer>
                  </blockquote>
                </section>

                {/* Executive Summary */}
                <section className="max-w-[700px] mx-auto md:mx-0">
                  <div className="flex items-center gap-4 mb-8">
                    <h4 className="text-2xl font-bold text-foreground">Executive Summary: Plan & Implement</h4>
                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent"></div>
                  </div>
                  
                  <div className="space-y-10">
                    <div className="relative pl-8">
                      <span className="absolute left-0 top-1 text-accent font-mono font-bold text-lg">01</span>
                      <h5 className="text-xl font-bold text-foreground mb-3">Strategic Discount Reintroduction</h5>
                      <p className="text-muted-foreground text-[17px] leading-[1.8]">
                        Develop a calculated strategy to reintroduce targeted incentives for non-Gold users. Communication of these new offers must be clear and immediate to rebuild user trust and mitigate churn to the new local competitor.
                      </p>
                    </div>

                    <div className="relative pl-8">
                      <span className="absolute left-0 top-1 text-accent font-mono font-bold text-lg">02</span>
                      <h5 className="text-xl font-bold text-foreground mb-3">Competitive Market Defense</h5>
                      <p className="text-muted-foreground text-[17px] leading-[1.8]">
                        Execute a localized promotional campaign in Pune highlighting Zomato's unique advantages (e.g., higher reliability, larger selection) to defend market share against the new tiffin service.
                      </p>
                    </div>

                    <div className="relative pl-8">
                      <span className="absolute left-0 top-1 text-accent font-mono font-bold text-lg">03</span>
                      <h5 className="text-xl font-bold text-foreground mb-4">Continuous Monitoring Framework</h5>
                      <ul className="space-y-4 text-muted-foreground text-[17px] leading-[1.8]">
                        <li className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span><strong className="text-foreground/90 font-semibold">Redemption Rate Tracking:</strong> Monitor how effectively the new discount codes are being claimed to gauge market appeal.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <span><strong className="text-foreground/90 font-semibold">Conversion Analytics:</strong> Measure the percentage of users viewing the discount who successfully checkout.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span><strong className="text-foreground/90 font-semibold">CSAT Benchmarking:</strong> Deploy targeted post-delivery satisfaction surveys in Pune to capture qualitative sentiment alongside quantitative ratings.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  )
}
