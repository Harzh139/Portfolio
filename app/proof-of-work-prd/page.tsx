"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText, Target, Users, Zap, BarChart3, Scale, Database } from 'lucide-react'

export default function ProofOfWorkPRD() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-accent/30">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
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
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/5 border border-white/10 rounded-lg">
              <FileText size={20} className="text-white" />
            </div>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">Product Requirements Document</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-[0.05em] uppercase mb-6 leading-tight">
            High-Signal Recruitment Marketplace
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            A reverse-marketplace where talent discovery is driven by verifiable 'Proof-of-Work' artifacts rather than static, keyword-optimized resumes.
          </p>
        </header>

        <div className="space-y-24">
          {/* Section: The Problem */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              The Problem
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">AI-Resume Spam & Signal Collapse</h3>
                <p className="text-gray-400 leading-relaxed">
                  The rise of 'Easy Apply' and generative AI has made it trivial to flood job boards with 1000s of perfectly keyword-optimized but low-signal applications.
                </p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-sm font-mono text-gray-500 mb-4 italic">Core Conflict</div>
                <p className="text-white text-lg font-medium leading-relaxed">
                  Recruiters are drowning in noise, while high-intent talent is lost in the stack. static claims no longer equal trust.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Target Audience */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Target Audience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4">
                <Users className="text-gray-400" size={24} />
                <h4 className="font-bold text-lg">Early-stage Startups</h4>
                <p className="text-sm text-gray-400">Founders hiring for 'Zero-to-One' roles who need high-agency builders, not corporate managers.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4">
                <Zap className="text-gray-400" size={24} />
                <h4 className="font-bold text-lg">Technical Builders</h4>
                <p className="text-sm text-gray-400">Engineers and designers whose value is best demonstrated through commits, apps, and shipping velocity.</p>
              </div>
            </div>
          </section>

          {/* Section: Core Features */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Core Features
            </h2>
            <div className="space-y-6">
              {[
                { title: "Verifiable GitHub Identity", desc: "Real-time sync of commit history, PR quality, and deployment frequency used as the primary discovery index." },
                { title: "Identity Masking (Partial Anonymity)", desc: "Masking names/demographics initially to force focus on artifacts, eliminating top-of-funnel bias." },
                { title: "Recruiter 'Unlock' Mechanism", desc: "A credit-based system where recruiters 'unlock' candidate identity only after confirming technical fit." }
              ].map((feature, idx) => (
                <div key={idx} className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                  <h4 className="font-bold text-lg mb-2">0{idx + 1}. {feature.title}</h4>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Success Metrics */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Success Metrics
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-white">
                <h4 className="text-sm font-mono text-gray-500 uppercase mb-4">North Star</h4>
                <div className="text-3xl font-black mb-2">Recruiter TTR</div>
                <p className="text-sm text-gray-400">Average Time-to-Shortlist for a single technical opening.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <h4 className="text-sm font-mono text-gray-500 uppercase mb-4">L1 Metric</h4>
                <div className="text-3xl font-black mb-2">Unlock-to-Interview</div>
                <p className="text-sm text-gray-400">% of 'unlocked' identities that convert to a scheduled interview.</p>
              </div>
            </div>
          </section>

          {/* Section: Edge Cases */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Edge Cases
            </h2>
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Database size={20} className="text-accent" />
                The 'Private Repo' Visibility Gap
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                How do we verify Proof-of-Work for candidates whose best contributions are locked in private enterprise repositories?
              </p>
              <div className="pl-6 border-l-2 border-accent">
                <h5 className="text-white font-bold mb-2 text-sm">Solution: Secure OAuth Metadata Scraper</h5>
                <p className="text-gray-400 text-sm">
                  Implement a one-time secure sync that fetches aggregate metadata (commit frequency, languages used, line-count deltas) without cloning or exposing the underlying source code. This allows for 'Contribution Volume' verification while maintaining strict IP security for the candidate's employer.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Technical Trade-offs */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Technical Trade-offs
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Strategy</th>
                    <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Implementation</th>
                    <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Trade-off</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-6 px-6 font-bold">Identity Masking</td>
                    <td className="py-6 px-6 text-gray-400 text-sm">Force focus on work artifacts at top-of-funnel.</td>
                    <td className="py-6 px-6 text-gray-400 text-sm italic">High friction in recruiter outreach/cold-email.</td>
                  </tr>
                  <tr>
                    <td className="py-6 px-6 font-bold">Behavioral Ranking</td>
                    <td className="py-6 px-6 text-gray-400 text-sm">Real-time learning velocity via API.</td>
                    <td className="py-6 px-6 text-gray-400 text-sm italic">Privacy concerns re: monitoring dev habits.</td>
                  </tr>
                  <tr>
                    <td className="py-6 px-6 font-bold">Credit Unlock</td>
                    <td className="py-6 px-6 text-gray-400 text-sm">Pay-per-reveal monetization model.</td>
                    <td className="py-6 px-6 text-gray-400 text-sm italic">Slower initial liquidity in the marketplace.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 p-6 bg-white/5 border-l-2 border-white italic text-gray-300">
              "In a high-noise environment, trust is built through observable behavior, not static claims."
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-white/10 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            All Projects
          </Link>
          <Link href="/#contact" className="text-sm font-bold hover:text-gray-300 transition-colors">
            Get in touch →
          </Link>
        </footer>
      </main>
    </div>
  )
}
