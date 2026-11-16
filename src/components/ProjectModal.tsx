import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Shield, AlertTriangle, Cpu, Layers } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import { CaseStudy } from '../data/caseStudiesData';

interface ProjectModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#D1FFBD] border border-emerald-300 text-[11px] font-mono font-medium text-emerald-950">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">
                {project.status}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-emerald-400 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7 text-sm text-slate-700">
          
          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <a
              href={project.verifiedRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 hover:border-emerald-400 text-xs font-semibold text-slate-900 transition-colors shadow-xs"
            >
              <GitHubIcon className="w-4 h-4 text-emerald-700" />
              <span>Inspect Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#D1FFBD] hover:bg-[#bbf7d0] border border-emerald-300 text-emerald-950 text-xs font-semibold transition-colors shadow-xs"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Overview */}
          <section>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-600" />
              <span>Project Overview</span>
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm bg-slate-50 p-4 rounded-xl border border-slate-200">
              {project.overview}
            </p>
          </section>

          {/* Problem & Impact */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>The Engineering Problem</span>
            </h3>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <p className="font-semibold text-slate-900 text-sm">{project.problem.statement}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{project.problem.whyItMatters}</p>
              <div className="pt-2 flex flex-wrap gap-2">
                {project.problem.impactAreas.map((area, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-700">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Architecture Components */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>Architecture Components</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.architecture.components.map((comp, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-slate-900 text-xs">{comp.name}</span>
                    <span className="text-[10px] font-mono text-emerald-900 bg-[#D1FFBD] px-2 py-0.5 rounded font-medium border border-emerald-200">
                      {comp.tech}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{comp.purpose}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Technical Decisions */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
              Important Technical Decisions
            </h3>
            <div className="space-y-3">
              {project.technicalDecisions.map((dec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <div className="font-semibold text-slate-900 text-xs">{dec.decision}</div>
                  <div className="text-xs text-slate-700 leading-relaxed">
                    <span className="font-mono text-emerald-800 font-medium mr-1">Rationale:</span> {dec.rationale}
                  </div>
                  <div className="text-[11px] text-slate-500 leading-relaxed">
                    <span className="font-mono text-slate-600 mr-1">Tradeoffs:</span> {dec.tradeoffs}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Security & Reliability Considerations */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Security & Reliability Considerations</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.securityAndReliability.map((sec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 text-xs mb-2">{sec.category}</h4>
                  <ul className="space-y-1.5">
                    {sec.measures.map((m, mIdx) => (
                      <li key={mIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Verified Outcomes */}
          {project.results.verifiedOutcomes.length > 0 && (
            <section className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold">
                Verified Outcomes
              </h3>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <ul className="space-y-2">
                  {project.results.verifiedOutcomes.map((outcome, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-mono">
            Repo: <span className="text-slate-800 font-medium">{project.verifiedRepo.replace('https://github.com/', '')}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 border border-slate-300 text-xs font-medium text-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
