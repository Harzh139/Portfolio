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

          {/* Section: User Stories (Checklist) */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              User Stories
            </h2>
            <div className="space-y-4">
              {[
                { story: "As a creator, I want to filter my saved clips by 'color palette' (e.g., 'warm/sunset' vs. 'cool/teal') to match my project's visual theme.", checked: true },
                { story: "As a creator, I want to search for 'high-energy transitions' or 'cinematic slow-mo' to quickly find b-roll that fits a specific edit style.", checked: true },
                { story: "As a creator, I want to search for content based on 'audio tone' (e.g., 'lo-fi beats' vs. 'aggressive narration') to sync with my soundtrack.", checked: true }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <div className="mt-1 w-5 h-5 rounded border border-accent flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 bg-accent rounded-sm"></div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.story}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Technical Constraints (Terminal Style) */}
          <section>
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-white/20"></span>
              Technical Constraints
            </h2>
            <div className="bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden font-mono text-xs">
              <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                <span className="ml-2 text-gray-500">architecture_v1.sh</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-gray-500"># Hybrid Model Architecture</div>
                <div className="flex gap-4">
                  <span className="text-accent">PRIVACY:</span>
                  <span className="text-gray-300">Run lightweight on-device VLMs (MobileCLIP) for local frame analysis.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-accent">PERFORMANCE:</span>
                  <span className="text-gray-300">Push vectorized embeddings to Cloud Vector DBs (Pinecone/Milvus) for sub-100ms search latency.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-accent">COST:</span>
                  <span className="text-gray-300">Trigger multimodal re-indexing only on 'New Save' events to minimize API token burn.</span>
                </div>
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
                <Scale size={20} className="text-accent" />
                The Semantic Failure Fallback
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                What happens when natural language queries yield zero high-confidence matches?
              </p>
              <div className="pl-6 border-l-2 border-accent">
                <h5 className="text-white font-bold mb-2 text-sm">Solution: Manual Discovery Loop</h5>
                <p className="text-gray-400 text-sm">
                  Implement a "Similar to this" recommendation engine. If the user selects a low-confidence match, the system triggers a k-nearest neighbor (k-NN) search to surfaced visually similar assets that might have been indexed incorrectly.
                </p>
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
