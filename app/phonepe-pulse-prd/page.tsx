"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft, BarChart3, ShieldCheck, Target, TriangleAlert } from "lucide-react"

export default function PhonePePulsePRD() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-accent/30">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">
            PRD v1.0
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-20">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/5 border border-white/10 rounded-lg">
              <BarChart3 size={20} className="text-white" />
            </div>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">
              Product Case Study · PRD
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-[0.05em] uppercase mb-4 leading-tight">
            Pulse by PhonePe
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Transforming the Post-Payment Moment into a Habit Loop
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-gray-400 uppercase tracking-widest">
              {["Fintech", "Retention", "Product Strategy", "UPI", "India"].map((t) => (
                <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="text-sm text-gray-400">
              <span className="font-semibold text-white">Harsh Sharma</span> — Product Case Study
              <span className="mx-2 text-gray-600">·</span>
              May 2026
            </div>
          </div>
        </header>

        <div className="space-y-24">
          {/* SECTION 1 — EXECUTIVE SUMMARY */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Executive Summary
            </h2>
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                PhonePe commands 45.3% of India's UPI market — yet its market share declined for 7 consecutive
                months between April and December 2025. This case study diagnoses the root cause of that decline
                and proposes Pulse: a post-payment discovery layer that transforms PhonePe's most underutilized
                product moment into a habit-forming experience — powered by real transaction data no competitor
                can replicate.
              </p>
            </div>
          </section>

          {/* SECTION 2 — MARKET CONTEXT & THE PARADOX */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Market Context & The Paradox
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-7 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-4xl font-black mb-2">45.3%</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">UPI Market Share (Dec 2025, NPCI)</div>
              </div>
              <div className="p-7 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-4xl font-black mb-2">65.7 Cr</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Registered Users (Largest in India)</div>
              </div>
              <div className="p-7 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-4xl font-black mb-2">7 Months</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">Consecutive Market Share Decline (Apr–Dec 2025)</div>
              </div>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-white">
              <div className="text-sm font-mono text-gray-500 mb-4 italic">The Core Tension</div>
              <p className="text-white text-lg font-medium leading-relaxed">
                "PhonePe commands 1 in every 2 UPI rupees — yet its market share has declined for 7 consecutive
                months. More users, less loyalty. That is the retention problem."
              </p>
            </div>
          </section>

          {/* SECTION 3 — DIAGNOSING THE DROP-OFF */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Diagnosing the Drop-Off
            </h2>

            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">3.1 The Job-To-Be-Done Mismatch</h3>
                <p className="text-gray-400 leading-relaxed">
                  When users download PhonePe, their primary job is simple and singular:
                </p>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-white text-lg font-semibold">"Send money quickly and reliably."</p>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Once that job is done — the user has no reason to return until they need to pay again. Unlike
                  Instagram (entertainment) or Spotify (daily habit), PhonePe's core use case is transactional,
                  not habitual. Every open is driven by intent, never by curiosity or pull.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">3.2 The Super App Strategy Is Failing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                    <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">What PhonePe Built</div>
                    <ul className="space-y-2 text-gray-300">
                      <li>Pincode (grocery delivery)</li>
                      <li>Indus Appstore (app downloads)</li>
                      <li>Share.Market (stock broking)</li>
                      <li>Insurance distribution</li>
                    </ul>
                  </div>
                  <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                    <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">What Users Think</div>
                    <p className="text-gray-300 leading-relaxed">
                      Mental model mismatch — users see a payments app. Financial services = only 12% of revenue.
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-6 bg-white/5 border-l-2 border-white italic text-gray-300">
                  "You cannot change what users think your app is for. That is the hardest product problem to solve — and the data proves it is not working."
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">3.3 The Cashback Trap</h3>
                <p className="text-gray-400 leading-relaxed">
                  Cashbacks and rewards seem like the obvious retention lever. But every competitor — Google Pay,
                  Paytm, CRED — offers identical rewards. When all apps offer the same mechanic, it stops being
                  an advantage and becomes a cost. This is the race to the bottom.
                </p>
                <div className="p-6 bg-white/5 border-l-2 border-white italic text-gray-300">
                  "PhonePe's UPI share declined for 7 months despite having the most resources to offer rewards. Cashback alone cannot create loyalty — it creates transactions, not habits."
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">3.4 The QR Code Battleground</h3>
                <p className="text-gray-400 leading-relaxed">
                  At the moment of payment, the user scans a QR code that works with every UPI app. The choice of
                  which app to open is made in 2 seconds. Since all UPI apps run on the same NPCI rails — same
                  speed, same reliability — the differentiator is not the transaction itself.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The real question: what happens in the 3 seconds after a successful payment? That post-payment
                  moment is completely underutilized by every UPI app today. That is the product opportunity.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 — THE DATA INSIGHT */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              The Data Insight
            </h2>

            <div className="space-y-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-bold tracking-tight mb-2">"Gold Hidden in Plain Sight"</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every PhonePe transaction is a data point. But the combination of data points is where the real
                  intelligence lives.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">User</th>
                      <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Merchant</th>
                      <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Location</th>
                      <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Time</th>
                      <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-6 px-6 font-bold">You</td>
                      <td className="py-6 px-6 text-gray-300">Restaurant</td>
                      <td className="py-6 px-6 text-gray-300">Vastrapur, Ahmedabad</td>
                      <td className="py-6 px-6 text-gray-300">9 PM Friday</td>
                      <td className="py-6 px-6 text-gray-300">₹500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-400 leading-relaxed">
                "Multiply this across 65.7 crore users and 4.72 crore merchants. PhonePe does not just have
                individual behavior data — it has a city-level spending intelligence graph."
              </p>

              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-white">
                <div className="text-sm font-mono text-gray-500 mb-4 italic">Unique Moat</div>
                <p className="text-white text-lg font-medium leading-relaxed">
                  "No other app — not Zomato, not Swiggy, not Google Maps — has real transaction signals at this scale. PhonePe's data is not review-based or sponsored. It is actual spending behavior. That is the competitive advantage no one is using."
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5 — THE SOLUTION: PULSE BY PHONEPE */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              The Solution: Pulse by PhonePe
            </h2>

            <div className="space-y-10">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold tracking-tight">5.1 The Core Idea</h3>
                <p className="text-gray-400 leading-relaxed">
                  Pulse is a post-payment discovery layer that transforms the transaction success screen into a
                  habit-forming discovery moment — powered entirely by real spending behavior, not ads or reviews.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">5.2 Before vs After</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-8 border border-white/10 rounded-2xl">
                    <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Before Pulse</div>
                    <ul className="space-y-2 text-gray-300">
                      <li>- User opens app only to pay</li>
                      <li>- No reason to return without intent</li>
                      <li>- PhonePe = utility tool</li>
                      <li>- Engagement ends at success screen</li>
                    </ul>
                  </div>
                  <div className="p-8 border border-white/10 rounded-2xl">
                    <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">After Pulse</div>
                    <ul className="space-y-2 text-gray-300">
                      <li>- User opens app to explore + pay</li>
                      <li>- Discovery creates unprompted opens</li>
                      <li>- PhonePe = behavior platform</li>
                      <li>- Success screen becomes the start</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">5.3 What the User Experiences</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Swipeable merchant cards showing trending places nearby",
                    "\"People who paid here also visited...\" — cross-merchant discovery",
                    "Hidden gems — high repeat-visit merchants not yet widely known",
                    "Time-based trends — what's hot right now in your area",
                  ].map((f) => (
                    <div key={f} className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                      <Target size={22} className="text-accent mb-4" />
                      <p className="text-gray-300 leading-relaxed">{f}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight">5.4 Sample Pulse Card</h3>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-accent text-background rounded-sm shadow-lg">
                      🔥 Pulse Nearby
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-white text-xl font-bold">"47 people paid at this café this week"</div>
                    <div className="text-gray-300 font-medium">"Trending among people like you"</div>
                    <div className="text-gray-400">"☕ Most visited on Friday nights near Vastrapur"</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6 — PRIORITISATION */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Prioritisation: What Ships First
            </h2>

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-white mb-8">
              <div className="text-sm font-mono text-gray-500 mb-3 italic">Sprint 1 — Ship This First</div>
              <p className="text-white text-lg font-medium leading-relaxed">
                "Post-payment Pulse card: a single card on the transaction success screen showing trending activity near the merchant where the user just paid."
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-white/5">
                  {[
                    {
                      reason: "Reason 1 — Lowest friction",
                      detail:
                        "User is already on the success screen. No new navigation, no new habit required.",
                    },
                    {
                      reason: "Reason 2 — Fastest learning loop",
                      detail:
                        "Validates whether transactional social proof creates curiosity before building a full feed.",
                    },
                    {
                      reason: "Reason 3 — Cheapest engineering effort",
                      detail:
                        "No feed ranking engine, no recommendation system. Just a data-powered card on an existing screen.",
                    },
                    {
                      reason: "Reason 4 — Why NOT feed first",
                      detail:
                        "A discovery feed assumes users already open the app without payment intent. That behavior does not exist yet.",
                    },
                  ].map((r) => (
                    <tr key={r.reason}>
                      <td className="py-6 px-6 font-bold w-72 align-top">{r.reason}</td>
                      <td className="py-6 px-6 text-gray-400 text-sm">{r.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-white/5 border-l-2 border-white italic text-gray-300">
              "Maximize learning per engineering effort. Ship the smallest thing that validates the biggest assumption."
            </div>
          </section>

          {/* SECTION 7 — METRICS */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Metrics
            </h2>

            <div className="space-y-10">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-white">
                <div className="text-sm font-mono text-gray-500 uppercase mb-4">7.1 North Star Metric — WDER</div>
                <div className="text-3xl font-black mb-2">Weekly Discovery Engagement Rate (WDER)</div>
                <p className="text-sm text-gray-400 mb-4">
                  Definition: % of users who interact with a Pulse recommendation and transact at a discovered
                  merchant within 7 days
                </p>
                <p className="text-gray-300 italic">
                  "Why WDER and not just clicks? Because Pulse is not optimizing for engagement theater. Its job is: create discovery → drive repeat economic participation. WDER measures behavior change, not just attention."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="text-sm font-mono text-gray-500 uppercase mb-4">7.2 Supporting Metrics — Engagement</div>
                  <ul className="space-y-2 text-gray-300">
                    <li>- CTR on Pulse cards</li>
                    <li>- Swipe rate on merchant discovery</li>
                    <li>- Time spent on discovery feed</li>
                    <li>- Repeat visits to Pulse tab</li>
                  </ul>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="text-sm font-mono text-gray-500 uppercase mb-4">7.2 Supporting Metrics — Behavioral</div>
                  <ul className="space-y-2 text-gray-300">
                    <li>- Transactions at Pulse-discovered merchants</li>
                    <li>- New merchant exploration rate</li>
                    <li>- Increase in non-intent app opens</li>
                    <li>- D7 retention uplift for Pulse users vs control</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-sm font-mono text-gray-500 uppercase mb-4">7.3 Company-Level North Star — MTU</div>
                <div className="text-2xl font-bold mb-2">Monthly Transacting Users (MTU) — The Leadership Metric</div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  "If Pulse works, users start opening PhonePe before paying — to explore, to check trends, to validate choices. That shift from utility to habit shows up as more people transacting consistently every month."
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">
                          Metric
                        </th>
                        <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">
                          Why not
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-6 px-6 font-bold">D7 Retention</td>
                        <td className="py-6 px-6 text-gray-400 text-sm">
                          Too narrow — Pulse is long-term behavior change, not onboarding
                        </td>
                      </tr>
                      <tr>
                        <td className="py-6 px-6 font-bold">WAU</td>
                        <td className="py-6 px-6 text-gray-400 text-sm">
                          Users may browse without meaningful economic behavior
                        </td>
                      </tr>
                      <tr>
                        <td className="py-6 px-6 font-bold">Financial Services Revenue</td>
                        <td className="py-6 px-6 text-gray-400 text-sm">
                          Too downstream — monetization comes after habit is formed
                        </td>
                      </tr>
                      <tr>
                        <td className="py-6 px-6 font-bold">MTU ✓</td>
                        <td className="py-6 px-6 text-gray-400 text-sm">
                          Measures active economic participation — the real goal
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8 — RISKS & MITIGATIONS */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Risks & Mitigations
            </h2>

            <div className="space-y-10">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <TriangleAlert size={18} className="text-accent" />
                  <h3 className="text-xl font-bold">Risk 1 — The Creepiness Threshold</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border border-white/10 rounded-2xl">
                    <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Never Do This</div>
                    <ul className="space-y-2 text-gray-300">
                      <li>"You spent ₹2,400 on cafés this month"</li>
                      <li>"You usually eat out at 11 PM on Fridays"</li>
                      <li>Hyper-personal inference displayed publicly</li>
                    </ul>
                  </div>
                  <div className="p-6 border border-white/10 rounded-2xl">
                    <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Always Do This</div>
                    <ul className="space-y-2 text-gray-300">
                      <li>"Cafés trending near you this weekend"</li>
                      <li>"47 people paid here this week"</li>
                      <li>Aggregation — community signal, not individual tracking</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-white/5 border-l-2 border-white italic text-gray-300">
                  "Give users full control — opt-out toggle, 'Why am I seeing this?', personalization settings. Trust is a product strategy. PhonePe cannot afford to lose it."
                </div>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={18} className="text-accent" />
                  <h3 className="text-xl font-bold">Risk 2 — Feed Pollution</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  "If sponsored merchants dominate Pulse rankings, users will stop trusting it. Pulse becomes ad inventory instead of discovery — and the core value proposition collapses."
                </p>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-white">
                  <div className="text-sm font-mono text-gray-500 mb-3 italic">Mitigation</div>
                  <p className="text-white leading-relaxed font-medium">
                    "Ranking must prioritize authentic signals: repeat visit frequency, real transaction spikes, new merchant exploration. Paid boosts must never dominate organic results. Editorial integrity = user trust = long-term retention."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 9 — MONETISATION SEQUENCING */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Monetisation Sequencing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { phase: "Phase 1", text: "Increase habit frequency — Pulse drives unprompted opens" },
                { phase: "Phase 2", text: "Build trust — Discovery feels genuinely useful" },
                { phase: "Phase 3", text: "Deepen engagement — Users explore merchants, categories" },
                { phase: "Phase 4", text: "Monetise — Insurance, credit, merchant ads" },
              ].map((p, idx) => (
                <div key={p.phase} className="p-6 border border-white/10 rounded-2xl bg-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">{p.phase}</div>
                    <div className="text-xs font-mono text-gray-600">0{idx + 1}</div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 10 — THE CORE THESIS */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              The Core Thesis
            </h2>

            <div className="text-center py-8">
              <div className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                "PhonePe does not have a features problem. It has a habit problem."
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                "Pulse does not add a new feature. It transforms an existing high-attention moment into a reason
                to come back — powered by the data PhonePe already owns and no competitor can replicate."
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-28 pt-12 border-t border-white/10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <Link href="/#projects" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              ← Back to Portfolio
            </Link>
            <div className="text-sm text-gray-400">
              Author: <span className="text-white font-semibold">Harsh Sharma</span>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Disclaimer: <span className="text-gray-300">Independent product case study. Not affiliated with PhonePe.</span>
          </div>

          <a
            href="https://www.linkedin.com/in/harsh-sharma-406044299/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold hover:text-gray-300 transition-colors inline-block"
          >
            LinkedIn →
          </a>
        </footer>
      </main>
    </div>
  )
}

