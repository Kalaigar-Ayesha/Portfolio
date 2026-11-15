'use client';

import React from 'react';
import { PROFESSIONAL_EXPERIENCE } from '@/data/portfolioData';
import { Briefcase, Building2, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0e2a1d] relative border-t border-emerald-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143d2b] border border-emerald-600/50 text-emerald-200 text-xs font-mono tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRACK RECORD</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Professional Experience & Engineering Impact
          </h2>
          <p className="mt-2 text-sm text-emerald-100/80">
            Hands-on technical engagements in infrastructure automation, cloud setup, and developer enablement.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-emerald-600/60 ml-4 sm:ml-8 space-y-10">
          {PROFESSIONAL_EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0e2a1d] border-2 border-emerald-400 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform shadow-md shadow-emerald-950">
                <Building2 className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-[#143d2b] border border-emerald-700/70 hover:border-emerald-400 p-6 transition-all shadow-sm">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 mt-0.5">
                      <span className="font-semibold">{exp.organization}</span>
                      {exp.period && (
                        <>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0e2a1d] border border-emerald-600/50 text-emerald-200 self-start sm:self-auto font-medium">
                    {exp.verifiedStatus}
                  </span>
                </div>

                <p className="text-xs text-emerald-100/90 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-1.5 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-emerald-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-emerald-700/60">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0e2a1d] text-emerald-200 border border-emerald-700/70 font-medium"
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
