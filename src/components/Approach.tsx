'use client';

import React from 'react';
import { ENGINEERING_APPROACH } from '@/data/portfolioData';
import { 
  Compass, 
  Search, 
  FileCode2, 
  ShieldCheck, 
  Activity, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const STEP_ICONS = [Search, FileCode2, ShieldCheck, Activity];

export default function Approach() {
  return (
    <section id="approach" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>HOW I WORK WITH CLIENTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            A Pragmatic, Reliability-First Engineering Methodology
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            I don&apos;t apply one-size-fits-all templates or introduce unnecessary complexity. Every engagement follows a disciplined, 4-phase delivery framework designed to produce durable, secure, and maintainable systems.
          </p>
        </div>

        {/* 4 Methodology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGINEERING_APPROACH.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || Search;

            return (
              <div
                key={step.step}
                className="rounded-2xl bg-[#0b1120] border border-slate-800/80 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group relative overflow-hidden"
              >
                {/* Big Step Number in background */}
                <div className="absolute -top-3 -right-2 text-6xl font-black font-mono text-slate-800/20 group-hover:text-cyan-500/10 transition-colors pointer-events-none select-none">
                  {step.step}
                </div>

                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/30 text-cyan-300">
                      Phase {step.step}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 mb-3">
                    {step.summary}
                  </p>

                  {/* Details */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.details}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>MILESTONE {step.step}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/70" />
                </div>

              </div>
            );
          })}
        </div>

        {/* Consulting Guarantee */}
        <div className="mt-12 rounded-2xl bg-[#0b1222] border border-slate-800 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Full Documentation & Clean Knowledge Transfer Included
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl">
              I never leave clients with cryptic black-box scripts. Every deployment is accompanied by modular IaC, interactive runbooks, troubleshooting checklists, and developer walkthroughs.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs tracking-wide transition-all border border-slate-700 shrink-0"
          >
            <span>Start an Engagement</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
