'use client';

import React from 'react';
import { ENGINEERING_APPROACH } from '@/data/portfolioData';
import { Compass, Search, FileCode2, ShieldCheck, Activity } from 'lucide-react';

const STEP_ICONS = [Search, FileCode2, ShieldCheck, Activity];

export default function Approach() {
  return (
    <section id="approach" className="py-20 bg-[#04140d] relative border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>HOW I WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Engineering Methodology
          </h2>
          <p className="mt-2 text-sm text-emerald-100/70">
            A disciplined, 4-phase framework focused on cost efficiency and security hardening.
          </p>
        </div>

        {/* 4 Methodology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGINEERING_APPROACH.map((step, idx) => {
            const Icon = STEP_ICONS[idx] || Search;

            return (
              <div
                key={step.step}
                className="rounded-2xl bg-[#072217] border border-emerald-900/80 hover:border-emerald-500/50 p-6 flex flex-col justify-between transition-all group relative overflow-hidden"
              >
                {/* Step Number in background */}
                <div className="absolute -top-3 -right-2 text-6xl font-black font-mono text-emerald-900/20 group-hover:text-emerald-500/10 transition-colors pointer-events-none select-none">
                  {step.step}
                </div>

                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono text-emerald-400 font-bold block mb-1">
                    PHASE {step.step}
                  </span>

                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-emerald-100/70 mb-4 leading-relaxed">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-emerald-900/60 text-xs text-emerald-200/80">
                  {step.details}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
