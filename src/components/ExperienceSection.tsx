import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { PROFESSIONAL_EXPERIENCE } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#244b3a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#34d399] mb-2 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Professional Experience & Contributions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-emerald-100/70 max-w-xl">
            Real engineering contributions spanning cloud infrastructure, CI/CD pipeline automation, and community mentorship.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {PROFESSIONAL_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-2xl bg-[#132b20] border border-[#244b3a] hover:border-[#2f604b] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-mono text-[#34d399] mt-0.5">
                    {exp.organization}
                  </div>
                </div>

                <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-[#19382b] border border-[#2f604b] text-[11px] font-mono text-emerald-200">
                  {exp.verifiedStatus}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-xs text-emerald-100/85 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-[#244b3a]/70 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-[#19382b] border border-[#2f604b] text-[11px] font-mono text-emerald-200/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
