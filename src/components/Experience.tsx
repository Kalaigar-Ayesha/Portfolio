'use client';

import React from 'react';
import { PROFESSIONAL_EXPERIENCE } from '@/data/portfolioData';
import { Briefcase, Building2, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#03140c] relative border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRACK RECORD</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Professional Experience & Engineering Impact
          </h2>
          <p className="mt-2 text-sm text-emerald-100/70">
            Hands-on technical engagements in infrastructure automation, cloud setup, and developer enablement.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-emerald-900 ml-4 sm:ml-8 space-y-10">
          {PROFESSIONAL_EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#04140d] border-2 border-emerald-500 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-md shadow-emerald-950">
                <Building2 className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-[#072217] border border-emerald-900/80 hover:border-emerald-500/50 p-6 transition-all">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mt-0.5">
                      <span className="font-semibold">{exp.organization}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-300 self-start sm:self-auto">
                    {exp.verifiedStatus}
                  </span>
                </div>

                <p className="text-xs text-emerald-100/70 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-1.5 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-emerald-900/60">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#04140d] text-emerald-300 border border-emerald-900/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
