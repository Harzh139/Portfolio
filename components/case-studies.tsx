"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const CASE_STUDIES = [
  {
    id: 'irctc',
    brand: 'IRCTC',
    domain: 'irctc.co.in',
    customLogo: '/irctc_logo.png',
    title: "The IRCTC Paradox: Scaling vs. Monopoly",
    description: "India built UPI (18B txns/month, 99.9% uptime), Aadhaar (1.4B biometric records), and CoWIN (2B vaccine doses). Yet IRCTC crashes every Tatkal morning. A monopoly has no reason to fix itself.",
    tags: ['Product Strategy', 'Scalability', 'UX RCA'],
    context: {
      metric: 'Server Uptime',
      impact: 'Crash @ 10:01 AM',
      geography: 'Pan-India',
      segment: 'Tatkal Bookings'
    },
    slicingData: [
      "On April 17, 2026 — Downdetector complaints started at 9:48 AM, 12 minutes before Tatkal even opened. By 10:01 AM, servers showed 'currently unreachable.' By 10:09 AM, all tickets showed REGRET. Thousands of users had money deducted with no ticket.",
      "IRCTC's official response: 'Please try logging out and force closing the application.' The same response. Every time. For 15 years. SwaRail, launched in May 2025 as a 'SuperApp,' consolidated 4-5 railway apps into one — but didn't touch the server infrastructure, didn't fix the bot problem, and didn't fix the queue-less stampede model."
    ],
    hypothesis: {
      external: [
        { title: 'India\'s Tech Capability', desc: 'UPI processes 18 billion transactions/month at 99.9% uptime. Aadhaar handles 1.4 billion biometric authentications. CoWIN tracked 2 billion vaccine doses. The engineering talent and infrastructure exist.', status: 'success' },
        { title: 'Competitive Pressure', desc: 'IRCTC operates as a government-backed monopoly with zero competition in the railway booking space. No market force compels infrastructure investment.', status: 'error' },
        { title: 'Bot & Tout Ecosystem', desc: 'Automated bots solve CAPTCHAs in milliseconds while legitimate users fail them. The CAPTCHA protects IRCTC from building something better, not users from bots.', status: 'error' }
      ],
      internal: {
        product: [
          { title: 'Queue-less Stampede Model', desc: 'Everyone hits at 10:00 AM. Fastest connection wins. Bots win. No virtual queue, no random position assignment, no per-user booking window. Ticketmaster, BookMyShow, and Supreme all solved this.', status: 'error' },
          { title: 'Dead-End UX', desc: '"No tickets available" is a full stop. No connecting routes, no alternate class suggestions, no next-available-date recommendations. Every "no" is a dead end instead of a "here\'s what you can do instead."', status: 'error' }
        ],
        tech: [
          { title: 'Server Infrastructure', desc: 'SwaRail gave a new coat of paint to a building with a broken foundation. UI improvements on top of infrastructure problems are not product improvements — they\'re UX debt accumulating on technical debt.', status: 'error' },
          { title: 'Payment Resolution', desc: 'Money deducted, no ticket, refund in 5-7 working days. UPI already supports hold-and-release technically. This is an accountability problem, not a technical one.', status: 'error' }
        ],
        operations: [
          { title: 'CAPTCHA System', desc: 'Humans fail it. Bots solve it in milliseconds. Behavioral biometrics (typing speed, mouse movement, scroll behavior) would flag inhuman patterns. Banks already do this.', status: 'error' },
          { title: '24 Years of Unused Data', desc: 'IRCTC has 24 years of booking data — more training data than most AI companies dream of. A waitlist prediction model ("WL 45 → 73% chance of confirmation") is not a research problem. It\'s a product decision.', status: 'error' }
        ]
      }
    },
    aiMLHypothesis: {
      title: "AI/ML Hypothesis: Waitlist Prediction & Demand Forecasting",
      content: "With 24 years of historical booking data, IRCTC could deploy a time-series forecasting model to predict cancellation probability per route per date. A gradient-boosted model using features like route popularity, season, day-of-week, and historical cancellation rates could give users real-time confirmation probability (e.g., 'WL 45 → 73% chance'). Combined with an AI alternative routing engine, every 'no tickets' dead-end becomes a multi-modal suggestion system — connecting routes, alternate classes, and next-available dates."
    },
    contrarianTake: {
      title: "Contrarian Take: The Monopoly Paradox",
      content: "The question was never 'can IRCTC be fixed?' India proved with UPI, Aadhaar, and CoWIN that it can build world-class digital infrastructure at population scale. The question is: does a monopoly have any reason to fix itself? Honest answer — not until it has to. IRCTC's failures are not technical limitations; they're organizational incentive misalignment. Every Tatkal crash is a feature of monopoly, not a bug of engineering."
    },
    pullQuote: '"UI improvements on top of infrastructure problems are not product improvements. They\'re user experience debt accumulating on top of technical debt."',
    executiveSummary: [
      { 
        title: 'Virtual Queue System', 
        desc: 'Kill the stampede. Random position assigned at 10:00 AM. 3-minute booking window per user. Ticketmaster, BookMyShow, and Supreme already do this. This is not a hard problem — it\'s a political one.' 
      },
      { 
        title: 'Behavioral Biometrics', 
        desc: 'Kill the CAPTCHA. Track typing speed, mouse movement, scroll behavior. Flag inhuman booking patterns. Banks already do this. The CAPTCHA isn\'t protecting users — it\'s protecting IRCTC from building something better.' 
      },
      { 
        title: 'Infrastructure & Intelligence Layer', 
        list: [
          { label: '60-Min Payment Resolution', desc: 'Payment gateway holds funds until ticket confirms. If it fails — release in 60 minutes automatically. UPI already supports this technically.' },
          { label: 'AI Alternative Routing', desc: 'No direct train? Show connecting routes. No AC? Show Sleeper + upgrade waitlist. No tickets today? Show next 3 available dates.' },
          { label: 'ML Waitlist Prediction', desc: '"WL 45 → 73% chance of confirmation based on historical cancellations." 24 years of booking data. A product decision, not a research problem.' }
        ] 
      }
    ]
  },
  {
    id: 'zomato',
    brand: 'Zomato',
    domain: 'zomato.com',
    title: "Zomato: Sentiment Decay and Value Perception Drift",
    description: "A data-first deep dive into why Pune's non-Gold segment experienced a 10% rating collapse following targeted promotional retractions.",
    context: {
      metric: 'Avg Rating',
      impact: '-10%',
      geography: 'Pune',
      segment: 'Non-Gold'
    },
    slicingData: [
      "Exploratory Data Analysis (EDA) confirmed a sharp 10% delta in average visible ratings within the Pune cluster. Feature engineering revealed that calculation constants remained static; the variance was purely driven by user-generated feedback cycles.",
      "High-granularity slicing across the cohort matrix isolated the friction to food delivery services. Sentiment analysis of app reviews indicated a significant shift in value perception, specifically among price-sensitive cohorts excluded from recent Zomato Gold retention loops."
    ],
    hypothesis: {
      external: [
        { title: 'Competitor Market Share', desc: 'New local entrants are aggressively acquiring users via high-burn acquisition strategies, recalibrating the baseline for value.', status: 'neutral' },
        { title: 'Macro Variance', desc: 'No significant correlation found between external events and rating volatility during this window.', status: 'success' },
        { title: 'Sentiment Analysis', desc: 'No systemic negative PR or regulatory friction detected in sentiment monitoring.', status: 'success' }
      ],
      internal: {
        product: [
          { title: 'Funnel Integrity', desc: 'UX benchmarks for the rating workflow show zero regression in completion rates.', status: 'success' },
          { title: 'Retention Pricing', desc: 'Strategic retraction of discount codes for non-Gold cohorts created a critical gap in the perceived ROI of the transaction.', status: 'error' }
        ],
        tech: [
          { title: 'Feature Stability', desc: 'Uptime and latency metrics for the feedback module remained within p99 thresholds.', status: 'success' },
          { title: 'Data Integrity', desc: 'Audit of the rating aggregation pipeline confirmed zero data leakage or calculation errors.', status: 'success' }
        ],
        operations: [
          { title: 'Fulfillment Velocity', desc: 'Last-mile delivery metrics (p50/p90) remained stable across the Pune logistics network.', status: 'success' }
        ]
      }
    },
    aiMLHypothesis: {
      title: "AI/ML Hypothesis: Predictive Retention",
      content: "A Churn Prediction model using SHAP values would have identified 'Price Sensitivity' as a high-impact feature for the Pune segment. By monitoring real-time feature drift in non-Gold user behavior post-discount retraction, the system could have triggered a defensive retention loop before the sentiment decayed into permanent rating loss."
    },
    contrarianTake: {
      title: "Contrarian Take: The Entitlement Gap",
      content: "The rating drop isn't just a response to price; it's a symptom of the 'Entitlement Gap.' By removing a recurring discount without providing a 'surprise and delight' UX counterweight, Zomato inadvertently shifted the user's perception of the platform from a 'partner in savings' to a 'utility tollgate,' which is significantly harder to reverse than a simple metric drop."
    },
    pullQuote: '"Sentiment analysis indicated that the rating drop was a lagging indicator of a broken value perception loop among non-loyalty segments."',
    executiveSummary: [
      { 
        title: 'Dynamic Incentive Rebalancing', 
        desc: 'Implement a ML-driven dynamic discounting engine to bridge the value gap for high-churn-risk segments without returning to flat-burn subsidies.' 
      },
      { 
        title: 'Competitive Defense & Value Anchoring', 
        desc: 'Execute a localized narrative shift in Pune, anchoring Zomato’s value to reliability and selection density rather than purely on price acquisition.' 
      },
      { 
        title: 'Real-time Sentiment Monitoring', 
        list: [
          { label: 'Feature Drift Alerts', desc: 'Set up automated alerts for when user interaction patterns diverge from the p90 baseline for specific geo-segments.' },
          { label: 'LTV/CAC Variance', desc: 'Monitor the delta between CAC and projected LTV for non-Gold users to identify unsustainable churn thresholds.' },
          { label: 'Sentiment Entropy', desc: 'Track the rate of change in review polarity to predict rating drops 72 hours before they crystallize.' }
        ] 
      }
    ]
  },
  {
    id: 'urban-company',
    brand: 'Urban Company',
    domain: 'urbancompany.com',
    title: "Urban Company: Fulfillment Entropy & Supply-Side Friction",
    description: "Analyzing the 18% fulfillment collapse through the lens of supply-chain bottlenecks and the widening 'Skill-Gap' in emerging appliance categories.",
    context: {
      metric: 'Completion Rate',
      impact: '-18%',
      geography: 'Multiple Regions',
      segment: 'Repair Services'
    },
    slicingData: [
      "Fulfillment rates experienced an 18% p90 drop. Data diagnostic tools ruled out calculation errors; the bottleneck was identified as a critical mismatch between intent-to-book and service-ready capacity.",
      "Time-series analysis showed that cancellations were peaking 120-180 minutes prior to the slot. Cross-referencing with supply metrics confirmed a severe shortage in 'Expert' certified partners for high-complexity household appliance repairs."
    ],
    hypothesis: {
      external: [
        { title: 'Aggregator Competition', desc: 'No significant churn detected towards third-party service aggregators like NoBroker.', status: 'success' },
        { title: 'Seasonal Demand', desc: 'Demand volatility remained within ±5% of historical seasonal benchmarks.', status: 'success' },
        { title: 'Regulatory Supply', desc: 'No external policy changes affecting partner onboarding or labor mobility.', status: 'success' }
      ],
      internal: {
        product: [
          { title: 'Conversion Funnel', desc: 'Booking flow completion rates remained high, indicating the friction is post-checkout.', status: 'success' },
          { title: 'UX Friction', desc: 'No significant UI regressions in the service selection or payment modules.', status: 'success' }
        ],
        tech: [
          { title: 'Matching Algorithm', desc: 'The partner-matching engine p90 latency was stable, but assignment success plummeted.', status: 'error' },
          { title: 'System Availability', desc: 'No infrastructure outages during peak booking windows.', status: 'success' }
        ],
        operations: [
          { title: 'Supply Density', desc: 'Massive decline in active expert-level electricians during peak weekend windows.', status: 'error' },
          { title: 'Training Cycle Time', desc: 'The latency between new gadget release and partner certification has widened by 40%.', status: 'error' }
        ]
      }
    },
    aiMLHypothesis: {
      title: "AI/ML Hypothesis: Demand-Forecasting & Capacity Balancing",
      content: "A Demand-Forecasting Regressor with high-granularity temporal features would have flagged a 22% supply-demand gap 72 hours prior. Integrating this with a dynamic capacity-balancing agent could have automatically deprioritized low-margin bookings to protect the fulfillment rate of high-intent cohorts during supply crunches."
    },
    contrarianTake: {
      title: "Contrarian Take: The Cognitive Load Crisis",
      content: "Training isn't the primary bottleneck; it's 'Cognitive Load.' Expecting service partners to master the exponentially evolving SKU list of IoT-enabled gadgets without an AR-assisted debugging tool is a failure of product enablement. The completion rate drop is a lagging proxy for the 'Usability Gap' in the technician's internal interface."
    },
    pullQuote: '"The fulfillment drop was a structural failure to synchronize supply-side skill evolution with demand-side gadget complexity."',
    executiveSummary: [
      { 
        title: 'Algorithmic Supply Balancing', 
        desc: 'Rewrite the matching algorithm to prioritize certified experts for high-complexity tickets while utilizing junior partners for high-volume, low-risk services.' 
      },
      { 
        title: 'Partner Enablement Stack', 
        desc: 'Invest in real-time diagnostic tools for partners to reduce p50 repair times and lower the barrier for technical mastery.' 
      },
      { 
        title: 'Proactive Demand Shaping', 
        list: [
          { label: 'Supply-Aware Booking', desc: 'Dynamically restrict slots for high-complexity services when supply forecasts indicate a p75 risk of cancellation.' },
          { label: 'churn-Risk Alerting', desc: 'Automate customer recovery workflows (coupons/rescheduling) the moment an assignment latency exceeds 30 minutes.' },
          { label: 'Skill-Drift Monitoring', desc: 'Audit the delta between service failure rates and appliance generation to identify the next training bottleneck.' }
        ] 
      }
    ]
  },
  {
    id: 'tata-cliq',
    brand: 'Tata CLiQ',
    domain: 'tatacliq.com',
    title: "Tata CLiQ: Mobile Web Friction and Conversion Funnel Leakage",
    description: "Investigating the 25% bounce rate surge triggered by a critical misalignment between promotional UI overlays and mobile viewport constraints.",
    context: {
      metric: 'Bounce Rate',
      impact: '+25%',
      geography: 'Multiple Regions',
      segment: 'Mobile Web'
    },
    slicingData: [
      "Funnel analytics showed a catastrophic 25% increase in top-of-funnel drop-off. Session recordings isolated the friction to mobile web users, while desktop conversion metrics remained flat.",
      "The bounce was entirely correlated with the 'Pre-Sale' pop-up trigger. Users were not leaving due to lack of interest, but due to a complete 'Exit Friction' where the primary CTA and close buttons were rendered outside the mobile viewport."
    ],
    hypothesis: {
      external: [
        { title: 'Competitor Sale Events', desc: 'Competitor acquisition spend increased, but the bounce is isolated to internal UI triggers, not traffic source quality.', status: 'neutral' },
        { title: 'Macro Variance', desc: 'No external events explaining the sudden 25% delta in user behavior.', status: 'success' },
        { title: 'Traffic Quality', desc: "Audit of referral sources showed no increase in bot traffic or low-intent 'MIS-clicks'.", status: 'success' }
      ],
      internal: {
        product: [
          { title: 'Promotional Overlays', desc: 'Newly introduced sale banners created a non-dismissible friction point for 60% of mobile sessions.', status: 'error' },
          { title: 'Responsive Architecture', desc: 'The viewport-scaling logic failed to account for varied mobile aspect ratios for the new modal.', status: 'error' }
        ],
        tech: [
          { title: 'DOM Load Times', desc: 'The heavy promotional assets did not significantly impact page load p90 metrics.', status: 'success' },
          { title: 'Error Monitoring', desc: 'No critical JS errors reported; the issue was purely logic-based UI rendering.', status: 'success' }
        ],
        operations: [
          { title: 'Campaign Execution', desc: 'Marketing campaigns effectively drove traffic, but the product landing experience failed to convert.', status: 'success' }
        ]
      }
    },
    contrarianTake: {
      title: "Contrarian Take: The Accessibility Tax",
      content: "This isn't just a UI bug; it's an 'Accessibility Tax.' Power users, who navigate with high-velocity gestures, are 3x more likely to bounce when a friction point disrupts their flow. This incident likely wiped out the LTV of the 'high-intent explorer' segment for the upcoming sale, as their trust in the mobile web performance was systemically compromised."
    },
    pullQuote: '"Conversion is a proxy for trust. A non-dismissible pop-up is a digital barrier that signals poor platform reliability to the user."',
    executiveSummary: [
      { 
        title: 'Viewport-Aware UI Deployment', 
        desc: 'Implement mandatory aspect-ratio testing for all promotional overlays. Ensure the \'Close\' CTA is a fixed-position element independent of content scaling.' 
      },
      { 
        title: 'Friction-First QA Protocol', 
        desc: 'Shift from functionality-based QA to friction-based QA, specifically testing for gesture-based interactions and dismissal accessibility.' 
      },
      { 
        title: 'Engagement Recovery Metrics', 
        list: [
          { label: 'Scroll Depth Analysis', desc: 'Monitor the delta in scroll depth pre/post hotfix to measure restored intent.' },
          { label: 'Return User Delta', desc: 'Track the return rate of users who experienced the bounce friction vs a control group to measure trust decay.' },
          { label: 'CTR-to-Bounce Ratio', desc: 'Monitor the health of promotional overlays by tracking the ratio of modal closes vs immediate session exits.' }
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
                          src={(study as any).customLogo || `https://www.google.com/s2/favicons?domain=${study.domain}&sz=128`} 
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
                    {(study as any).tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(study as any).tags.map((tag: string, tIdx: number) => (
                          <span key={tIdx} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-accent/10 text-accent border border-accent/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full backdrop-blur-md bg-red-500/10 text-red-500 border-red-500/20 shadow-sm">
                      {activeStudy.brand}
                    </span>
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full backdrop-blur-md bg-blue-500/10 text-blue-500 border-blue-500/20 shadow-sm">
                      AI & Data Strategy
                    </span>
                    {(activeStudy as any).tags && (activeStudy as any).tags.map((tag: string, tIdx: number) => (
                      <span key={tIdx} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border rounded-full backdrop-blur-md bg-accent/10 text-accent border-accent/20 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-foreground leading-tight tracking-tight mb-6">
                    {activeStudy.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-[700px]">
                    {activeStudy.description}
                  </p>
                  {activeStudy.id === 'irctc' && (
                    <Link 
                      href="/irctc-teardown" 
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-accent text-accent-foreground font-bold rounded-full hover:opacity-90 transition-opacity text-sm"
                    >
                      View Product Deep Dive →
                    </Link>
                  )}
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

                  {/* AI/ML Hypothesis Section */}
                  {activeStudy.aiMLHypothesis && (
                    <section className="max-w-[700px] mx-auto md:mx-0 p-8 bg-accent/5 border border-accent/20 rounded-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg className="w-16 h-16 text-accent" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                      </div>
                      <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        {activeStudy.aiMLHypothesis.title}
                      </h4>
                      <p className="text-muted-foreground text-[17px] leading-[1.8] italic">
                        {activeStudy.aiMLHypothesis.content}
                      </p>
                    </section>
                  )}

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
                                  {item.status === 'success' && <span className="text-green-500/80 mr-1">✓ Confirmed.</span>}
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

                  {/* Contrarian Take Section */}
                  {activeStudy.contrarianTake && (
                    <section className="max-w-[700px] mx-auto md:mx-0 border-l-4 border-accent pl-8 py-4">
                      <h4 className="text-xl font-bold text-foreground mb-4">
                        {activeStudy.contrarianTake.title}
                      </h4>
                      <p className="text-muted-foreground text-[17px] leading-[1.8]">
                        {activeStudy.contrarianTake.content}
                      </p>
                    </section>
                  )}

                  {/* Pull Quote */}
                  <section className="py-20 relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/10 rounded-full blur-[50px] pointer-events-none"></div>
                    <blockquote className="max-w-[800px] mx-auto text-center relative z-10">
                      <p className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.2] tracking-tight mb-8 italic">
                        {activeStudy.pullQuote}
                      </p>
                      <footer className="text-accent font-mono text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4">
                        <span className="w-8 h-px bg-accent/50"></span>
                        Executive Insight
                        <span className="w-8 h-px bg-accent/50"></span>
                      </footer>
                    </blockquote>
                  </section>

                  {/* Executive Summary */}
                  <section className="max-w-[700px] mx-auto md:mx-0">
                    <div className="flex items-center gap-4 mb-8">
                      <h4 className="text-2xl font-bold text-foreground">Strategic Roadmap</h4>
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
