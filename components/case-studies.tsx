"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const CASE_STUDIES = [
  {
    id: 'zomato',
    brand: 'Zomato',
    domain: 'zomato.com',
    title: "Investigating the Drop in Zomato's Restaurant Ratings",
    description: "A comprehensive root cause analysis to uncover why average restaurant ratings on the Zomato platform experienced a sudden decline, and the strategic decisions required to fix it.",
    context: {
      metric: 'Avg Rating',
      impact: '-10%',
      geography: 'Pune',
      segment: 'Non-Gold'
    },
    slicingData: [
      "Initial analysis revealed a sharp, sudden 10% decline in the average visible restaurant rating across the app over the past month. Crucially, the calculation method had not changed. Every restaurant's rating remained a historical average of all customer ratings submitted since onboarding.",
      "When we sliced the data across different dimensions, a distinct pattern emerged. The drop was not a systemic failure across India—it was entirely isolated to the Pune market. Furthermore, it spanned across all restaurant types and pertained exclusively to food delivery. Most revealing of all, the decline was almost entirely attributed to users without Zomato Gold memberships."
    ],
    hypothesis: {
      external: [
        { title: 'Increased Competition', desc: 'A new local tiffin delivery app has entered the Pune market, altering user expectations and providing an alternative.', status: 'neutral' },
        { title: 'Macro Events', desc: 'No major festivals, natural disasters, or economic downturns occurred in Pune during this period.', status: 'success' },
        { title: 'Public Sentiment', desc: 'No negative media coverage or regulatory changes affecting operations.', status: 'success' }
      ],
      internal: {
        product: [
          { title: 'User Journey', desc: 'No UI elements broken; rating prompt workflow is functional.', status: 'success' },
          { title: 'Promotions & Discounts', desc: 'Retraction of a major discount code for non-Gold users delivery orders.', status: 'error' }
        ],
        tech: [
          { title: 'Bugs/Crashes', desc: 'Zero significant anomalies reported across Android, iOS, or web.', status: 'success' },
          { title: 'Backend', desc: 'No database migrations or server outages impacting data integrity.', status: 'success' }
        ],
        operations: [
          { title: 'Fulfillment', desc: 'Delivery times, fleet supply, and customer support metrics remained stable.', status: 'success' }
        ]
      }
    },
    pullQuote: '"A popular discount code applicable across major restaurants in Pune was abruptly retracted for all non-Gold users."',
    executiveSummary: [
      { 
        title: 'Strategic Discount Reintroduction', 
        desc: 'Develop a calculated strategy to reintroduce targeted incentives for non-Gold users. Communication of these new offers must be clear and immediate to rebuild user trust and mitigate churn to the new local competitor.' 
      },
      { 
        title: 'Competitive Market Defense', 
        desc: 'Execute a localized promotional campaign in Pune highlighting Zomato\'s unique advantages (e.g., higher reliability, larger selection) to defend market share against the new tiffin service.' 
      },
      { 
        title: 'Continuous Monitoring Framework', 
        list: [
          { label: 'Redemption Rate Tracking', desc: 'Monitor how effectively the new discount codes are being claimed to gauge market appeal.' },
          { label: 'Conversion Analytics', desc: 'Measure the percentage of users viewing the discount who successfully checkout.' },
          { label: 'CSAT Benchmarking', desc: 'Deploy targeted post-delivery satisfaction surveys in Pune to capture qualitative sentiment alongside quantitative ratings.' }
        ] 
      }
    ]
  },
  {
    id: 'urban-company',
    brand: 'Urban Company',
    domain: 'urbancompany.com',
    title: "Investigating the 18% Drop in Service Completion Rate",
    description: "A root cause analysis to uncover why the service completion rate for repair orders on Urban Company decreased significantly and the operational strategies needed to resolve it.",
    context: {
      metric: 'Completion Rate',
      impact: '-18%',
      geography: 'Multiple Regions',
      segment: 'Repair Services'
    },
    slicingData: [
      "The service completion rate (completed / booked) decreased suddenly by 18% over the past month compared to the previous month. The metric calculation and analytics tools were functioning normally.",
      "Segmenting the data revealed the drop was consistent across all user demographics and platforms (web and app). However, it was distinctly isolated to orders involving repair services (e.g., household and kitchen appliances) and affected multiple regions. Canceled services—specifically those canceled 2-3 hours before the scheduled time slot—were the primary driver of the uncompleted bookings."
    ],
    hypothesis: {
      external: [
        { title: 'Increased Competition', desc: 'No drastic increase in competition with other service apps like NoBroker.', status: 'success' },
        { title: 'Macro Events', desc: 'No major festivals, natural disasters, or economic downturns occurred.', status: 'success' },
        { title: 'Public Sentiment', desc: 'No negative media coverage or regulatory changes affecting operations.', status: 'success' }
      ],
      internal: {
        product: [
          { title: 'User Journey', desc: 'Confirmed normal. No bypass or guest checkout issues; standard flow is unchanged.', status: 'success' },
          { title: 'App Updates', desc: 'Recent minor updates did not affect the service completion workflow.', status: 'success' }
        ],
        tech: [
          { title: 'Bugs/Crashes', desc: 'Zero significant anomalies reported across Android, iOS, or web platforms.', status: 'success' },
          { title: 'Backend', desc: 'No server migrations or database updates impacting data integrity.', status: 'success' }
        ],
        operations: [
          { title: 'Expert Availability', desc: 'Significant decrease in available electricians/service experts over the past month causing scheduling delays.', status: 'error' },
          { title: 'Quality & Training', desc: 'Extensive new gadgets require specific training, leaving some experts lacking the required expertise to fulfill orders.', status: 'error' }
        ]
      }
    },
    pullQuote: '"A sudden decrease in available service experts and a lack of specific gadget training caused a massive spike in cancellations just 2-3 hours before scheduled slots."',
    executiveSummary: [
      { 
        title: 'Address Provider Issues', 
        desc: 'Improve recruitment and specific training programs for new gadgets. Increase incentives to retain high-quality, specialized providers.' 
      },
      { 
        title: 'Fix Technology & Logistics', 
        desc: 'Work with the tech team to resolve backend resource allocation algorithms. Streamline logistical support to prevent delays.' 
      },
      { 
        title: 'Optimize Operations & Monitoring', 
        list: [
          { label: 'Real-time Tracking', desc: 'Set up real-time monitoring of service completion rates alongside expert availability metrics.' },
          { label: 'Proactive Notifications', desc: 'Provide immediate updates and notifications to keep users informed about their order status well before the 2-3 hour window.' },
          { label: 'Training Completion Rates', desc: 'Monitor the effectiveness of training programs by tracking expert certification on new appliance models.' }
        ] 
      }
    ]
  },
  {
    id: 'tata-cliq',
    brand: 'Tata CLiQ',
    domain: 'tatacliq.com',
    title: "Investigating the 25% Bounce Rate Spike Across the Website",
    description: "A root cause analysis to identify why the website bounce rate surged by 25% and how to fix a critical mobile UX flaw.",
    context: {
      metric: 'Bounce Rate',
      impact: '+25%',
      geography: 'Multiple Regions',
      segment: 'Mobile Web'
    },
    slicingData: [
      "The bounce rate—visitors who navigate away after viewing only one page—surged suddenly by 25% over the past week. Total page visits remained constant, meaning the absolute number of one-page visits increased significantly. The calculation method was unchanged.",
      "The increase was consistent across all user segments, traffic sources, and regions. However, analyzing platform data revealed that the spike was entirely isolated to mobile web users. Desktop users did not experience this increase."
    ],
    hypothesis: {
      external: [
        { title: 'Increased Competition', desc: 'Competitors are running end-of-year sales, but this alone wouldn\'t cause an immediate spike in bounce rate for existing traffic.', status: 'neutral' },
        { title: 'Macro Events', desc: 'No other major festivals or economic downturns occurred recently.', status: 'success' },
        { title: 'Public Sentiment', desc: 'No negative media coverage or regulatory changes affecting operations.', status: 'success' }
      ],
      internal: {
        product: [
          { title: 'Website Redesign', desc: 'Introduced a new promotional pop-up on landing pages for an upcoming sale a week ago.', status: 'error' },
          { title: 'Mobile Usability', desc: 'The positioning of the new pop-up on mobile devices completely hides the close button, making it impossible to dismiss.', status: 'error' }
        ],
        tech: [
          { title: 'Bugs/Crashes', desc: 'No significant functionality bugs or load-time issues reported.', status: 'success' },
          { title: 'Backend', desc: 'No backend infrastructure changes or server outages.', status: 'success' }
        ],
        operations: [
          { title: 'Marketing', desc: 'Upcoming sale campaigns are driving standard traffic, ruling out bad traffic sources.', status: 'success' }
        ]
      }
    },
    pullQuote: '"The positioning of a newly introduced promotional pop-up hid the \'Close\' button exclusively on mobile devices, forcing users to abandon the site."',
    executiveSummary: [
      { 
        title: 'Improve Pop-up Functionality', 
        desc: 'Redesign the pop-up immediately to ensure the close button is easily accessible and visible on all mobile viewports. A/B test different versions to identify the most user-friendly design without disrupting the core UX.' 
      },
      { 
        title: 'Enhance Mobile Optimization Audits', 
        desc: 'Implement mandatory cross-device QA testing for any new UI overlays or promotional banners. Regularly perform audits to check for viewport optimization issues.' 
      },
      { 
        title: 'Continuous Monitoring Framework', 
        list: [
          { label: 'Mobile Bounce Rate', desc: 'Compare the mobile bounce rate before and after implementing the hotfix to confirm a return to the baseline.' },
          { label: 'CTR on Pop-Up', desc: 'Measure how many users are actively interacting with the pop-up. A higher CTR indicates improved accessibility.' },
          { label: 'Session Duration', desc: 'Analyze the time spent on key landing pages after the pop-up issue is resolved to gauge restored engagement.' }
        ] 
      }
    ]
  }
]

export function CaseStudies() {
  const [selectedStudyId, setSelectedStudyId] = useState<string | null>(null)
  
  const activeStudy = CASE_STUDIES.find(study => study.id === selectedStudyId)

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

          {!activeStudy ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {CASE_STUDIES.map((study) => (
                <Card 
                  key={study.id}
                  className="bg-card/50 border-border backdrop-blur-sm hover:bg-accent/50 transition-colors cursor-pointer flex flex-col p-2 group relative overflow-hidden h-full"
                  onClick={() => setSelectedStudyId(study.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors" />
                  <CardHeader className="pb-3 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center p-[2px] border border-border shrink-0">
                        <img 
                          src={`https://www.google.com/s2/favicons?domain=${study.domain}&sz=128`} 
                          alt={`${study.brand} logo`}
                          className="w-full h-full object-contain rounded-full bg-white"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <h3 className="text-foreground font-semibold text-xl leading-tight group-hover:text-primary transition-colors">
                        {study.brand} RCA
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-grow justify-end relative z-10">
                    <div className="mb-4 text-sm text-muted-foreground line-clamp-2">
                      {study.title}
                    </div>
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
              ))}
            </div>
          ) : (
            <div className="bg-card/20 border border-white/10 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="p-8 md:p-12 lg:p-16">
                <div className="mb-10 flex items-center justify-between">
                  <Button 
                    onClick={() => setSelectedStudyId(null)}
                    variant="outline"
                    className="hover:bg-accent/10"
                  >
                    ← Back to Gallery
                  </Button>
                </div>
                <div className="mb-16">
                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full backdrop-blur-md bg-red-500/10 text-red-500 border-red-500/20 shadow-sm">
                      {activeStudy.brand}
                    </span>
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full backdrop-blur-md bg-blue-500/10 text-blue-500 border-blue-500/20 shadow-sm">
                      Product Teardown
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-foreground leading-tight tracking-tight mb-6">
                    {activeStudy.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-[700px]">
                    {activeStudy.description}
                  </p>
                </div>

                <div className="space-y-20">
                  
                  {/* 2x2 Grid Context */}
                  <section>
                    <h4 className="text-sm font-mono text-accent tracking-widest uppercase mb-6">Problem Context</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="p-6 bg-card/40 border border-white/5 rounded-xl flex flex-col justify-center transition-colors hover:bg-card/60">
                        <span className="text-muted-foreground text-sm mb-1 font-medium tracking-wide">Metric</span>
                        <span className="text-foreground font-black text-2xl">{activeStudy.context.metric}</span>
                      </div>
                      <div className="p-6 bg-card/40 border border-white/5 rounded-xl flex flex-col justify-center transition-colors hover:bg-card/60">
                        <span className="text-muted-foreground text-sm mb-1 font-medium tracking-wide">Impact</span>
                        <span className="text-red-500 font-black text-2xl">{activeStudy.context.impact}</span>
                      </div>
                      <div className="p-6 bg-card/40 border border-white/5 rounded-xl flex flex-col justify-center transition-colors hover:bg-card/60">
                        <span className="text-muted-foreground text-sm mb-1 font-medium tracking-wide">Geography</span>
                        <span className="text-foreground font-black text-2xl">{activeStudy.context.geography}</span>
                      </div>
                      <div className="p-6 bg-card/40 border border-white/5 rounded-xl flex flex-col justify-center transition-colors hover:bg-card/60">
                        <span className="text-muted-foreground text-sm mb-1 font-medium tracking-wide">Segment</span>
                        <span className="text-foreground font-black text-2xl">{activeStudy.context.segment}</span>
                      </div>
                    </div>
                  </section>

                  {/* Narrative Context */}
                  <section className="max-w-[700px] mx-auto md:mx-0">
                    <h4 className="text-2xl font-bold text-foreground mb-6">Slicing the Data</h4>
                    {activeStudy.slicingData.map((paragraph, idx) => (
                      <p key={idx} className="text-muted-foreground text-[17px] leading-[1.8] mb-6 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
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
                          {activeStudy.hypothesis.external.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0"></span>
                              <div>
                                <strong className="text-foreground/90 block mb-1">{item.title}</strong> 
                                {item.status === 'success' && <span className="text-green-500/80 mr-1">✓ Ruled out.</span>}
                                {item.desc}
                              </div>
                            </li>
                          ))}
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
                              {activeStudy.hypothesis.internal.product.map((item, idx) => (
                                <li key={idx} className="relative">
                                  <span className={`absolute -left-[27px] top-2.5 w-2 h-2 rounded-full bg-background border-2 ${item.status === 'error' ? 'border-red-500/50' : 'border-white/10'}`}></span>
                                  <strong className={`${item.status === 'error' ? 'text-red-400' : 'text-foreground/90'} block`}>{item.title}</strong> 
                                  {item.status === 'success' && <span className="text-green-500/80 mr-1">✓ Confirmed normal.</span>}
                                  {item.desc}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h6 className="text-xs font-bold text-foreground/60 uppercase tracking-[0.2em] mb-4">Tech Infrastructure</h6>
                            <ul className="space-y-4 text-muted-foreground leading-[1.7] text-[15px] pl-5 border-l-2 border-white/5">
                              {activeStudy.hypothesis.internal.tech.map((item, idx) => (
                                <li key={idx} className="relative">
                                  <span className={`absolute -left-[27px] top-2.5 w-2 h-2 rounded-full bg-background border-2 ${item.status === 'error' ? 'border-red-500/50' : 'border-white/10'}`}></span>
                                  <strong className={`${item.status === 'error' ? 'text-red-400' : 'text-foreground/90'} block`}>{item.title}</strong> 
                                  {item.status === 'success' && <span className="text-green-500/80 mr-1">✓ Stable.</span>}
                                  {item.desc}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h6 className="text-xs font-bold text-foreground/60 uppercase tracking-[0.2em] mb-4">Operations</h6>
                            <ul className="space-y-4 text-muted-foreground leading-[1.7] text-[15px] pl-5 border-l-2 border-white/5">
                              {activeStudy.hypothesis.internal.operations.map((item, idx) => (
                                <li key={idx} className="relative">
                                  <span className={`absolute -left-[27px] top-2.5 w-2 h-2 rounded-full bg-background border-2 ${item.status === 'error' ? 'border-red-500/50' : 'border-white/10'}`}></span>
                                  <strong className={`${item.status === 'error' ? 'text-red-400' : 'text-foreground/90'} block`}>{item.title}</strong> 
                                  {item.status === 'success' && <span className="text-green-500/80 mr-1">✓ Stable.</span>}
                                  {item.desc}
                                </li>
                              ))}
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
                        {/* We use dangerouslySetInnerHTML to allow HTML tags like <span className="text-red-500"> in strings, but since it's a simple string, let's just render it. Wait, the previous quote had a red span. I will just render it as is, and use regex to highlight key terms if necessary, or just render it plainly since it looks great already. Actually, I can just use raw string. */}
                        {activeStudy.pullQuote}
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
                      {activeStudy.executiveSummary.map((item, idx) => (
                        <div key={idx} className="relative pl-8">
                          <span className="absolute left-0 top-1 text-accent font-mono font-bold text-lg">0{idx + 1}</span>
                          <h5 className="text-xl font-bold text-foreground mb-3">{item.title}</h5>
                          {item.desc && (
                            <p className="text-muted-foreground text-[17px] leading-[1.8]">
                              {item.desc}
                            </p>
                          )}
                          {item.list && (
                            <ul className="space-y-4 text-muted-foreground text-[17px] leading-[1.8]">
                              {item.list.map((listItem, lIdx) => (
                                <li key={lIdx} className="flex items-start gap-3">
                                  <svg className="w-6 h-6 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span><strong className="text-foreground/90 font-semibold">{listItem.label}:</strong> {listItem.desc}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
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
