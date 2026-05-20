"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Phone, Shield, AlertTriangle, Cpu, Layers, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'

const PARTS = [
  {
    id: 1,
    icon: <Shield size={20} className="text-blue-400" />,
    title: "Part 1: Crowdsourced Identity — The Invisible Data Moat",
    tagline: "You cannot replicate a time barrier with capital.",
    problem: "To build a caller ID system, you need a directory. But you can't buy an accurate, real-time database of 1.4 billion people's personal address books. Building this manually is a multi-decade operational nightmare.",
    solution: "Truecaller used a viral crowdsourced loop. By uploading user address books to a centralized directory, they created value for non-users. Over 16 years, this created an un-replicable database of 500M+ MAU (350M+ in India) with a 41% EBITDA margin.",
    verdict: "A competitor with $10B in capital cannot copy a 16-year time barrier. The data network effect is absolute.",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_nobody-uses-it-heres-how-id-fix-it-in-ugcPost-7462134297987112960-BTyx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI"
  },
  {
    id: 2,
    icon: <AlertTriangle size={20} className="text-amber-400" />,
    title: "Part 2: The Dependency Trap — The Algorithm Shift",
    tagline: "Zero protection against infrastructure dependencies.",
    problem: "In August 2025, Google executed a programmatic ad algorithm shift. Within 24 hours, Truecaller's ad traffic dropped by one-third. Margins evaporated because they had no control over the distribution layer.",
    solution: "Truecaller built the ultimate data moat against competitors, but left themselves entirely dependent on Google/Apple infrastructure. Over 30% of their revenue was wiped out because they did not own their ad engine.",
    verdict: "If your monetization is dependent on a platform partner's algorithm, you do not own a platform — you own a feature.",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_can-truecaller-survive-when-its-core-feature-becomes-free-ugcPost-7462024845887766528-hIdU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI"
  },
  {
    id: 3,
    icon: <Cpu size={20} className="text-emerald-400" />,
    title: "Part 3: Ecosystem Absorption — Default OS Threats",
    tagline: "Surviving the rise of native CNAP, Apple iOS, and Google Caller ID.",
    problem: "By 2026, the core utility of Truecaller is becoming free and native. India's CNAP (KYC-backed telecom caller ID), Apple iOS native spam screening, and Google Android's built-in dialer are absorbing the caller ID layer.",
    solution: "Truecaller is forced to pivot from 'Utility App' to 'Trust Infrastructure'. They are shipping AI call screening (assistant answers calls for you), B2B verified caller identities, and advanced fraud/family protection.",
    verdict: "When your core feature is absorbed by the operating system, you must move up the value chain to intelligence.",
    url: "https://www.linkedin.com/posts/harsh-sharma-406044299_can-truecaller-survive-when-its-core-feature-becomes-free-ugcPost-7462024845887766528-hIdU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI"
  }
]

const TRADEOFF_MATRIX = [
  {
    strategy: "Crowdsourced Data",
    benefit: "Un-replicable network moat",
    risk: "High regulatory/privacy backlash",
    tradeoff: "Extreme network growth vs. strict compliance"
  },
  {
    strategy: "B2B Verified Identity",
    benefit: "Predictable, high-margin revenue",
    risk: "Enterprise sales cycle complexity",
    tradeoff: "Self-serve scaling vs. custom high-touch sales"
  },
  {
    strategy: "AI Call Screening",
    benefit: "Deep subscription expansion (LTV)",
    risk: "High GPU inference and latency costs",
    tradeoff: "High gross margins vs. advanced features"
  }
]

function PartCard({ part }: { part: typeof PARTS[0] }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-8 flex items-start gap-6 cursor-pointer"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all shrink-0 mt-1">
          {part.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">Part {part.id}</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-1 group-hover:text-gray-100 transition-colors">{part.title}</h4>
          <p className="text-gray-400 text-sm">{part.tagline}</p>
        </div>
        <div className="text-gray-500 shrink-0 mt-2">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      {isExpanded && (
        <div className="px-8 pb-8 pt-0 space-y-6 animate-fade-in-up" style={{ animation: 'fadeInUp 0.3s ease-out forwards' }}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* The Analysis */}
            <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-xl">
              <div className="text-xs font-mono text-red-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                The Threat / Reality
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{part.problem}</p>
            </div>

            {/* PM Playbook */}
            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Product Response
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{part.solution}</p>
            </div>
          </div>

          {/* Verdict */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pl-6 border-l-2 border-white/20">
            <p className="text-white font-medium italic text-sm flex-1">{part.verdict}</p>
            <a
              href={part.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors self-start sm:self-auto"
            >
              View Post on LinkedIn <ExternalLink size={12} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default function TruecallerTeardown() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link href="/#pm-teardowns" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">
            PM Moat Deep Dive
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-20">
        {/* Hero Header */}
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-white/5 border border-white/10 rounded-lg">
              <Phone size={20} className="text-blue-400" />
            </div>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">Truecaller Teardown · 3-Part Series</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
            The Truecaller Paradox:<br />
            <span className="text-gray-500">Moats vs. Ecosystem Threat</span>
          </h1>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.07] transition-all">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-2">Global Scale</div>
              <div className="text-2xl font-black text-white">500M+</div>
              <div className="text-xs text-gray-400 mt-1">Active Users (MAU)</div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.07] transition-all">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-2">Core India Market</div>
              <div className="text-2xl font-black text-white">350M+</div>
              <div className="text-xs text-gray-400 mt-1">India MAU</div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.07] transition-all">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-2">EBITDA Margin</div>
              <div className="text-2xl font-black text-emerald-400">41%</div>
              <div className="text-xs text-gray-400 mt-1">High Profitability</div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.07] transition-all">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-2">Time Moat</div>
              <div className="text-2xl font-black text-blue-400">16 Yrs</div>
              <div className="text-xs text-gray-400 mt-1">Crowdsourcing Age</div>
            </div>
          </div>

          {/* The Core Question */}
          <div className="p-6 bg-white/5 border-l-4 border-blue-500 rounded-r-xl">
            <p className="text-white text-lg font-medium leading-relaxed">
              Truecaller built an unbeatable moat against competitors via crowdsourced identity data.<br />
              <span className="text-gray-400">Yet, they remain exposed to platform dependencies and OS level absorption.</span><br />
              <span className="font-black text-white mt-2 inline-block">"You cannot replicate a time barrier with capital, but you can build over it with infrastructure."</span>
            </p>
          </div>
        </header>

        <div className="space-y-24">
          {/* The 3-Part Deep Dive */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              The 3-Part Analysis
            </h2>
            <div className="space-y-4">
              {PARTS.map((part) => (
                <PartCard key={part.id} part={part} />
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
              Analyzing Truecaller's strategic choices as they transition from a utility shortcut to a trust network.
            </p>

            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-5 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Strategy Layer</th>
                    <th className="py-5 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Primary Benefit</th>
                    <th className="py-5 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Implementation Risk</th>
                    <th className="py-5 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest bg-white/[0.03]">Strategic Trade-off</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {TRADEOFF_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-6 px-6 font-bold text-white text-sm">{row.strategy}</td>
                      <td className="py-6 px-6 text-emerald-400 text-sm">{row.benefit}</td>
                      <td className="py-6 px-6 text-amber-400/80 text-sm">{row.risk}</td>
                      <td className="py-6 px-6 text-gray-300 text-sm italic font-medium bg-white/[0.03]">{row.tradeoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-white/5 border-l-2 border-blue-500 italic text-gray-300 text-sm">
              "When an algorithm shift can drop your traffic by 33% overnight, the strength of your moat is only as strong as the platform host allows it to be."
            </div>
          </section>

          {/* The Verdict Section */}
          <section className="py-16 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
            <blockquote className="max-w-[700px] mx-auto text-center relative z-10">
              <p className="text-3xl md:text-4xl font-black text-white leading-[1.2] tracking-tight mb-6 italic">
                "The shift from utility app to trust infrastructure isn't just a pivot — it's a fight for ecosystem survival."
              </p>
              <p className="text-xl text-gray-400 mb-8">
                In 2026 and beyond, caller ID is table stakes. Truecaller's survival depends on verified identity APIs and AI-driven trust tools.
              </p>
              <footer className="text-gray-500 font-mono text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4">
                <span className="w-8 h-px bg-white/20"></span>
                The Infrastructure Trap
                <span className="w-8 h-px bg-white/20"></span>
              </footer>
            </blockquote>
          </section>

          {/* CTA Panel */}
          <section className="text-center py-12 border border-white/10 rounded-2xl bg-white/[0.02]">
            <p className="text-gray-400 mb-6 text-sm font-mono uppercase tracking-widest">Full Threads on LinkedIn</p>
            <h3 className="text-2xl font-bold mb-8">Read the Full 3-Part Series</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6">
              <a
                href="https://www.linkedin.com/posts/harsh-sharma-406044299_nobody-uses-it-heres-how-id-fix-it-in-ugcPost-7462134297987112960-BTyx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-sm"
              >
                Part 1: Invisible Moat
                <ExternalLink size={14} />
              </a>
              <a
                href="https://www.linkedin.com/posts/harsh-sharma-406044299_can-truecaller-survive-when-its-core-feature-becomes-free-ugcPost-7462024845887766528-hIdU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors text-sm border border-white/20"
              >
                Part 2: Dependency Trap
                <ExternalLink size={14} />
              </a>
              <a
                href="https://www.linkedin.com/posts/harsh-sharma-406044299_can-truecaller-survive-when-its-core-feature-becomes-free-ugcPost-7462024845887766528-hIdU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgWMUYBWkAMYPJiYpYOoUm1z68nl2r5MUI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-colors text-sm border border-white/20"
              >
                Part 3: OS Absorption
                <ExternalLink size={14} />
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-white/10 flex items-center justify-between">
          <Link href="/#pm-teardowns" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            All Teardowns
          </Link>
          <Link href="/#contact" className="text-sm font-bold hover:text-gray-300 transition-colors">
            Get in touch →
          </Link>
        </footer>
      </main>
    </div>
  )
}
