'use client';

import React from 'react';
import { PROFESSIONAL_EXPERIENCE } from '@/data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Info, 
  Building2
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#080d1a] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRACK RECORD & ENGAGEMENTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Professional Experience & Engineering Impact
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Hands-on technical engineering engagements focusing on cloud infrastructure provisioning, CI/CD pipeline modernization, container orchestration, and team enablement.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12">
          {PROFESSIONAL_EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500/50 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-110 transition-all shadow-md shadow-cyan-950/40">
                <Building2 className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-[#0b1222] border border-slate-800/80 hover:border-cyan-500/30 p-6 sm:p-8 transition-all hover:shadow-xl hover:shadow-cyan-950/20">
                
                {/* Header: Role, Org, Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 flex items-center gap-2 mt-0.5">
                      <span>{exp.organization}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 text-xs font-normal flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Dates & Verification Pill */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{exp.verifiedStatus}</span>
                    </span>
                  </div>
                </div>

                {/* Scope Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Core Responsibilities & Impact */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Key Responsibilities & Deliverables:
                  </span>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <span className="text-cyan-400 font-mono mt-0.5">▸</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 mr-1">STACK:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Note on Transparency & Veracity */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-300">Engineering Transparency: </strong>
            In accordance with consulting best practices, dates and specific internal client metrics are presented with editable placeholders to protect confidential client data while preserving technical veracity.
          </p>
        </div>

      </div>
    </section>
  );
}
