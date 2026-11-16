import React from 'react';
import { Briefcase, CheckCircle2, Calendar } from 'lucide-react';
import { PROFESSIONAL_EXPERIENCE } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold mb-2 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
            <span>Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Professional Experience & Career History
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl">
            Verified engineering contributions across cloud solution architecture, containerization, CI/CD automation, and full-stack development.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {PROFESSIONAL_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="p-6 md:p-7 rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-emerald-300 transition-colors shadow-xs"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-slate-900">
                      {exp.organization}
                    </h3>
                    {exp.employmentType && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-200/80 text-slate-700">
                        {exp.employmentType}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-emerald-800 mt-0.5 font-semibold">
                    {exp.role}
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
                  {exp.period && (
                    <div className="flex items-center gap-1 text-xs font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  )}
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D1FFBD] border border-emerald-300 text-[11px] font-mono text-emerald-950 font-medium">
                    {exp.verifiedStatus}
                  </span>
                </div>
              </div>

              {/* Main Summary Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* If experience has nested sub-roles (like Mentor Me) */}
              {exp.subRoles && exp.subRoles.length > 0 ? (
                <div className="space-y-4 pt-2 border-t border-slate-200/80">
                  {exp.subRoles.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-white border border-slate-200 space-y-2.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-sm font-bold text-slate-900">
                          {sub.role}
                        </h4>
                        <span className="text-xs font-mono text-slate-500">
                          {sub.period}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600">
                        {sub.description}
                      </p>

                      <ul className="space-y-1.5 pt-1">
                        {sub.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="text-xs text-slate-700 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {sub.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Standard single-role responsibilities list */
                <>
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-mono text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
