'use client';

import React from 'react';
import { BUSINESS_PROBLEMS } from '@/data/portfolioData';
import { 
  GitMerge, 
  TrendingDown, 
  ShieldCheck, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Zap
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  GitMerge,
  TrendingDown,
  ShieldCheck,
  Activity
};

export default function ProblemsSolved() {
  return (
    <section id="problems" className="py-24 bg-[#080d1a] relative border-t border-slate-900">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>BUSINESS IMPACT & ROI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            High-Cost Infrastructure Problems I Solve For Growing Teams
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Hiring a full-time senior DevOps engineer costs \$180,000+ per year and months of recruiting. As a specialized freelance consultant, I step in to solve critical infrastructure bottlenecks, modernize pipelines, and eliminate production risk without the overhead.
          </p>
        </div>

        {/* 4 Problem-Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUSINESS_PROBLEMS.map((problem) => {
            const Icon = ICON_MAP[problem.iconName] || Activity;

            return (
              <div 
                key={problem.id}
                className="rounded-2xl bg-[#0b1222] border border-slate-800/80 hover:border-cyan-500/30 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                      Problem // Solution
                    </span>
                  </div>

                  {/* Pain Point */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {problem.painPoint}
                  </h3>

                  {/* Cost of Inaction Callout */}
                  <div className="mt-3 p-3 rounded-lg bg-rose-950/20 border border-rose-900/30 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-rose-300 leading-relaxed">
                      <strong className="text-rose-200">The Risk: </strong>
                      {problem.costOfInaction}
                    </p>
                  </div>

                  {/* The Solution */}
                  <div className="mt-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400 mb-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>{problem.solution}</span>
                    </div>

                    {/* How It's Engineered */}
                    <ul className="space-y-2 mt-3">
                      {problem.engineeringExecution.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                          <span className="text-cyan-400 font-mono mt-0.5">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom link to discuss */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Immediate ROI on Day 1</span>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold group/link"
                  >
                    <span>Fix this in your stack</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Founder / CTO reassurance banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900/40 border border-cyan-500/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-semibold text-white">
              Not sure which bottleneck is slowing your engineering down?
            </h4>
            <p className="text-xs text-slate-300">
              I provide a no-obligation 30-minute cloud & deployment architecture review for founders and CTOs.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md shadow-cyan-500/20"
          >
            Request Architecture Review
          </a>
        </div>

      </div>
    </section>
  );
}
