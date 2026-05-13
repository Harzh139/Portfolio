"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Brain, Search, Database, BarChart3, Scale, Layers } from 'lucide-react'

export default function SecondBrainPRD() {
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
              <Brain size={20} className="text-white" />
            </div>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">Product Requirements Document</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-[0.05em] uppercase mb-6 leading-tight">
            Multimodal Content Retrieval Layer
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            An AI-native 'Second Brain' that transforms passive clip warehouses into active creative tools through multimodal indexing and semantic discovery.
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
                <h3 className="text-2xl font-bold tracking-tight">The Passive Warehouse Paradox</h3>
                <p className="text-gray-400 leading-relaxed">
                  Saving is solved. Finding is broken. Creators save 1000s of reels/clips but waste hours scrolling back to find a specific 'vibe' or audio transition.
                </p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-sm font-mono text-gray-500 mb-4 italic">Core Friction</div>
                <p className="text-white text-lg font-medium leading-relaxed">
                  Folder-based organization fails at scale. Modern memory is multimodal; retrieval should be too.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Key Features */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <Layers className="text-accent mb-4" size={24} />
                <h4 className="font-bold text-lg mb-2">Multimodal Indexing</h4>
                <p className="text-gray-400 text-sm">Automated parsing of visual style, audio tone, and emotional content using small-form vision-language models.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <Search className="text-accent mb-4" size={24} />
                <h4 className="font-bold text-lg mb-2">Zero-Folder Architecture</h4>
                <p className="text-gray-400 text-sm">Dynamic 'vibe' search via natural language (e.g., "Finding high-energy clips with blue grading and fast cuts").</p>
              </div>
            </div>
          </section>

          {/* Section: Success Metrics */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Success Metrics
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <h4 className="text-sm font-mono text-gray-500 uppercase mb-4">L1 Metric</h4>
                <div className="text-3xl font-black mb-2">Search-to-Reuse</div>
                <p className="text-sm text-gray-400">Ratio of items retrieved vs. items actually used in a final project.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-white">
                <h4 className="text-sm font-mono text-gray-500 uppercase mb-4">Technical KPI</h4>
                <div className="text-3xl font-black mb-2">Latency/Cost Delta</div>
                <p className="text-sm text-gray-400">Balancing real-time semantic indexing vs. token processing costs.</p>
              </div>
            </div>
          </section>

          {/* Section: The Trade-off Matrix */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              The Trade-off Matrix
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Decision</th>
                    <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Logic</th>
                    <th className="py-4 px-6 text-xs font-mono text-gray-500 uppercase tracking-widest">Paradox</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-6 px-6 font-bold">Semantic Search</td>
                    <td className="py-6 px-6 text-gray-400 text-sm">Replacing folders with embeddings.</td>
                    <td className="py-6 px-6 text-gray-400 text-sm italic">Lower precision initially vs high intent tagging.</td>
                  </tr>
                  <tr>
                    <td className="py-6 px-6 font-bold">Auto-Indexing</td>
                    <td className="py-6 px-6 text-gray-400 text-sm">Background multimodal parsing.</td>
                    <td className="py-6 px-6 text-gray-400 text-sm italic">High initial processing delay post-save.</td>
                  </tr>
                  <tr>
                    <td className="py-6 px-6 font-bold">Search vs. Feed</td>
                    <td className="py-6 px-6 text-gray-400 text-sm">Optimizing for intent-driven retrieval.</td>
                    <td className="py-6 px-6 text-gray-400 text-sm italic">The Engagement Paradox: High utility vs. lower ad-inventory exposure.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 p-6 bg-white/5 border-l-2 border-white italic text-gray-300">
              "Platforms have solved saving, but they haven't solved finding."
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
