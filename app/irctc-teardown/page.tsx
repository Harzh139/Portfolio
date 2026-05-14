"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText, AlertTriangle, Shield, Clock, Route, Brain, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

const FIXES = [
  {
    id: 1,
    icon: <AlertTriangle size={20} />,
    title: "Virtual Queuing",
    tagline: "Kill the stampede. Build a queue.",
    problem: "Everyone hits at 10:00 AM. Fastest connection wins. Bots win. 1,500+ Downdetector reports. Tickets showing REGRET at 10:01 AM.",
    solution: "Virtual queue. Random position assigned. 3-minute booking window per user. Ticketmaster does it. BookMyShow does it. Supreme does it.",
    verdict: "This is not a hard problem. It's a political one."
  },
  {
    id: 2,
    icon: <Shield size={20} />,
    title: "Behavioral Biometrics",
    tagline: "Kill the CAPTCHA.",
    problem: "Humans fail it. Bots solve it in milliseconds. The CAPTCHA is actively helping bots and hurting real users.",
    solution: "Track typing speed, mouse movement, scroll behavior. Flag inhuman booking patterns. Banks already do this.",
    verdict: "The CAPTCHA isn't protecting users. It's protecting IRCTC from building something better."
  },
  {
    id: 3,
    icon: <Clock size={20} />,
    title: "60-Minute Payment Resolution",
    tagline: "Not 7 days.",
    problem: "Money deducted. No ticket. Refund in 5-7 working days. Users stuck in limbo with deducted funds and no confirmation.",
    solution: "Payment gateway holds funds until ticket confirms. If it fails — release in 60 minutes automatically. UPI already supports this technically.",
    verdict: "It's an accountability problem, not a technical one."
  },
  {
    id: 4,
    icon: <Route size={20} />,
    title: "AI Alternative Routing",
    tagline: "Never show a dead end.",
    problem: "\"No tickets available.\" Full stop. No alternatives, no suggestions, no next steps. The user journey ends at a wall.",
    solution: "No direct train? Show connecting routes. No AC? Show Sleeper + upgrade waitlist. No tickets today? Show next 3 available dates.",
    verdict: "IndiGo does this for flights. Every \"no\" becomes a \"here's what you can do instead.\""
  },
  {
    id: 5,
    icon: <Brain size={20} />,
    title: "ML Waitlist Prediction",
    tagline: "Turn uncertainty into intelligence.",
    problem: "WL 45. User has no idea what this means. No context. No probability. No historical reference. Just a number and anxiety.",
    solution: "\"Based on historical cancellations — 73% chance of confirmation.\" IRCTC has 24 years of booking data. That's more training data than most AI companies dream of.",
    verdict: "A waitlist prediction model is not a research problem. It's a product decision."
  }
]

const TRADEOFF_MATRIX = [
  {
    feature: "Virtual Queue",
    benefit: "Prevents Server Crash",
    risk: "High latency for first-time users",
    tradeoff: "Replaces 'Speed' with 'Patience'"
  },
  {
    feature: "Behavioral Biometrics",
    benefit: "Kills Bot Advantage",
    risk: "False positives (human flagging)",
    tradeoff: "Privacy vs. Convenience"
  },
  {
    feature: "Fast Refund",
    benefit: "Increases Trust/DAU",
    risk: "High API dependency (NPCI)",
    tradeoff: "Higher ops cost for reconciliation"
  },
  {
    feature: "AI Routing",
    benefit: "Reduces 'Zero-Result' pages",
    risk: "Complex logic for multi-leg booking",
    tradeoff: "Longer search processing time"
  },
  {
    feature: "Waitlist Prediction",
    benefit: "Reduces booking anxiety",
    risk: "Model accuracy liability",
    tradeoff: "User expectations vs. stochastic outcomes"
  }
]

function FixCard({ fix }: { fix: typeof FIXES[0] }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-8 flex items-start gap-6 cursor-pointer"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all shrink-0 mt-1">
          {fix.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">Fix {fix.id}</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-1 group-hover:text-gray-100 transition-colors">{fix.title}</h4>
          <p className="text-gray-400 text-sm">{fix.tagline}</p>
        </div>
        <div className="text-gray-500 shrink-0 mt-2">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {isExpanded && (
        <div className="px-8 pb-8 pt-0 space-y-6 animate-fade-in-up" style={{ animation: 'fadeInUp 0.3s ease-out forwards' }}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Current Problem */}
            <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-xl">
              <div className="text-xs font-mono text-red-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Current Problem
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{fix.problem}</p>
            </div>

            {/* PM Solution */}
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                PM Solution
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{fix.solution}</p>
            </div>
          </div>

          {/* Verdict */}
          <div className="pl-6 border-l-2 border-white/20">
            <p className="text-white font-medium italic text-sm">{fix.verdict}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function IRCTCTeardown() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link href="/#case-studies" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">
            Product Deep Dive
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-20">
        {/* Hero Header */}
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-white/5 border border-white/10 rounded-lg">
              <FileText size={20} className="text-white" />
            </div>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">IRCTC Product Teardown · 3 Part Series</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
            The IRCTC Paradox:<br />
            <span className="text-gray-500">Scaling vs. Monopoly</span>
          </h1>

          {/* The Contrast */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                What India Built
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-lg mt-0.5">✓</span>
                  <div>
                    <div className="font-bold text-white">UPI</div>
                    <div className="text-gray-400 text-sm">18 billion transactions/month · 99.9% uptime</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-lg mt-0.5">✓</span>
                  <div>
                    <div className="font-bold text-white">Aadhaar</div>
                    <div className="text-gray-400 text-sm">1.4 billion biometric records · Real-time authentication</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-lg mt-0.5">✓</span>
                  <div>
                    <div className="font-bold text-white">CoWIN</div>
                    <div className="text-gray-400 text-sm">2 billion vaccine doses tracked at national scale</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-red-500/5 border border-red-500/10 rounded-2xl">
              <div className="text-xs font-mono text-red-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                What IRCTC Does
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-lg mt-0.5">✗</span>
                  <div>
                    <div className="font-bold text-white">April 17, 2026</div>
                    <div className="text-gray-400 text-sm">9:48 AM — Downdetector complaints start. Tatkal hasn't opened yet.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-lg mt-0.5">✗</span>
                  <div>
                    <div className="font-bold text-white">10:01 AM</div>
                    <div className="text-gray-400 text-sm">Servers showing "currently unreachable" · 1,500+ reports</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold text-lg mt-0.5">✗</span>
                  <div>
                    <div className="font-bold text-white">10:09 AM</div>
                    <div className="text-gray-400 text-sm">All tickets showing REGRET · Money deducted, no ticket</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Question */}
          <div className="p-6 bg-white/5 border-l-4 border-white rounded-r-xl">
            <p className="text-white text-lg font-medium leading-relaxed">
              We have the engineers. We have the infrastructure. We have the data.<br />
              <span className="text-gray-400">So why does IRCTC still crash every Tatkal morning?</span><br />
              <span className="font-black text-white mt-2 inline-block">Because a monopoly has no reason to fix itself.</span>
            </p>
          </div>
        </header>

        <div className="space-y-24">
          {/* SwaRail Analysis */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              The SwaRail Diagnosis
            </h2>
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-bold tracking-tight mb-4">A New Coat of Paint on a Broken Foundation</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                In May 2025, IRCTC launched SwaRail — called it a "SuperApp." Ministry of Railways called it a landmark move. And honestly? The intent was right. Before SwaRail, you needed 4-5 different apps for one train journey. SwaRail fixed that. One app. One login. Biometric login. Modern UI.
              </p>
              <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-xl">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-red-400">But here's what SwaRail didn't fix:</strong> The Tatkal crash of April 17, 2026 happened AFTER SwaRail launched. SwaRail didn't touch the server infrastructure. Didn't fix the bot problem. Didn't fix the payment failure loop. Didn't fix the queue-less stampede model.
                </p>
              </div>
              <div className="mt-6 pl-6 border-l-2 border-white/20">
                <p className="text-white font-medium italic">
                  "UI improvements on top of infrastructure problems are not product improvements. They're user experience debt accumulating on top of technical debt."
                </p>
              </div>
            </div>
          </section>

          {/* 5 Fixes Section */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              The PM Playbook
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl">
              5 fixes a PM would ship if IRCTC had to compete tomorrow. None of these are technically impossible.
            </p>
            <div className="space-y-4">
              {FIXES.map((fix) => (
                <FixCard key={fix.id} fix={fix} />
              ))}
            </div>
          </section>

          {/* Strategic Trade-off Matrix */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Strategic Trade-off Matrix
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl">
              Every solution has a cost. Here's the honest assessment.
            </p>

            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-5 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Feature</th>
                    <th className="py-5 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Primary Benefit</th>
                    <th className="py-5 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Implementation Risk</th>
                    <th className="py-5 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest bg-white/[0.03]">User Trade-off</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {TRADEOFF_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-6 px-6 font-bold text-white text-sm">{row.feature}</td>
                      <td className="py-6 px-6 text-emerald-400 text-sm">{row.benefit}</td>
                      <td className="py-6 px-6 text-amber-400/80 text-sm">{row.risk}</td>
                      <td className="py-6 px-6 text-gray-300 text-sm italic font-medium bg-white/[0.03]">{row.tradeoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-white/5 border-l-2 border-white italic text-gray-300 text-sm">
              "The question was never 'can IRCTC be fixed?' The question is: does a monopoly have any reason to fix itself?"
            </div>
          </section>

          {/* The Verdict */}
          <section className="py-16 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
            <blockquote className="max-w-[700px] mx-auto text-center relative z-10">
              <p className="text-3xl md:text-4xl font-black text-white leading-[1.2] tracking-tight mb-6 italic">
                "None of these are technically impossible. The question was never 'can IRCTC be fixed?'"
              </p>
              <p className="text-xl text-gray-400 mb-8">
                Honest answer — not until it has to.
              </p>
              <footer className="text-gray-500 font-mono text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4">
                <span className="w-8 h-px bg-white/20"></span>
                The Monopoly Paradox
                <span className="w-8 h-px bg-white/20"></span>
              </footer>
            </blockquote>
          </section>

          {/* CTA */}
          <section className="text-center py-12 border border-white/10 rounded-2xl bg-white/[0.02]">
            <p className="text-gray-400 mb-6 text-sm font-mono uppercase tracking-widest">Full Breakdown on LinkedIn</p>
            <h3 className="text-2xl font-bold mb-8">Read the Complete 3-Part Thread</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/posts/harsh-sharma-406044299_irctc-indias-most-profitable-broken-product-ugcPost-7460555099682045952-_RzR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-sm"
              >
                Part 1: The Broken Product
                <ExternalLink size={14} />
              </a>
              <a
                href="https://www.linkedin.com/posts/harsh-sharma-406044299_broken-by-design-the-tatkal-problem-and-swarail-ugcPost-7460559736195751937-6ZrG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors text-sm border border-white/20"
              >
                Part 2: SwaRail
                <ExternalLink size={14} />
              </a>
              <a
                href="https://www.linkedin.com/posts/harsh-sharma-406044299_what-if-irctc-woke-up-tomorrow-and-found-a-competitor-ugcPost-7460560691712942080-CSjU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors text-sm border border-white/20"
              >
                Part 3: The 5 Fixes
                <ExternalLink size={14} />
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-white/10 flex items-center justify-between">
          <Link href="/#case-studies" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            All Case Studies
          </Link>
          <Link href="/#contact" className="text-sm font-bold hover:text-gray-300 transition-colors">
            Get in touch →
          </Link>
        </footer>
      </main>
    </div>
  )
}
