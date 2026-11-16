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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d1f17] border border-[#2f604b] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#244b3a] bg-[#132b20] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#19382b] border border-[#2f604b] text-[11px] font-mono text-[#34d399]">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#a7f3d0]">
                {project.status}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200/80 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#19382b] border border-[#2f604b] text-slate-300 hover:text-white hover:border-[#34d399] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 text-sm text-slate-200">
          
          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-xl bg-[#132b20] border border-[#244b3a]">
            <a
              href={project.verifiedRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] hover:border-[#34d399] text-xs font-semibold text-white transition-colors"
            >
              <GitHubIcon className="w-4 h-4 text-[#34d399]" />
              <span>Inspect Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#10b981] hover:bg-[#34d399] text-[#062316] text-xs font-semibold transition-colors"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Overview */}
          <section>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#34d399] mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Project Overview</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm bg-[#132b20]/60 p-4 rounded-xl border border-[#244b3a]/70">
              {project.overview}
            </p>
          </section>

          {/* Problem & Impact */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#34d399] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>The Engineering Problem</span>
            </h3>
            <div className="p-4 rounded-xl bg-[#132b20] border border-[#244b3a] space-y-2">
              <p className="font-semibold text-white text-sm">{project.problem.statement}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{project.problem.whyItMatters}</p>
              <div className="pt-2 flex flex-wrap gap-2">
                {project.problem.impactAreas.map((area, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-[#19382b] border border-[#2f604b] text-[11px] font-mono text-emerald-200">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Architecture Components */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#34d399] flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Architecture Components</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.architecture.components.map((comp, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#132b20] border border-[#244b3a]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white text-xs">{comp.name}</span>
                    <span className="text-[10px] font-mono text-[#34d399] bg-[#19382b] px-2 py-0.5 rounded">
                      {comp.tech}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{comp.purpose}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Technical Decisions */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#34d399]">
              Important Technical Decisions
            </h3>
            <div className="space-y-3">
              {project.technicalDecisions.map((dec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#132b20] border border-[#244b3a] space-y-1.5">
                  <div className="font-semibold text-white text-xs">{dec.decision}</div>
                  <div className="text-xs text-emerald-100/90 leading-relaxed">
                    <span className="font-mono text-[#34d399] mr-1">Rationale:</span> {dec.rationale}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-relaxed">
                    <span className="font-mono text-slate-300 mr-1">Tradeoffs:</span> {dec.tradeoffs}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Security & Reliability Considerations */}
          <section className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#34d399] flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Security & Reliability Considerations</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.securityAndReliability.map((sec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#132b20] border border-[#244b3a]">
                  <h4 className="font-semibold text-white text-xs mb-2">{sec.category}</h4>
                  <ul className="space-y-1.5">
                    {sec.measures.map((m, mIdx) => (
                      <li key={mIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#34d399] shrink-0 mt-0.5" />
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
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#34d399]">
                Verified Outcomes
              </h3>
              <div className="p-4 rounded-xl bg-[#132b20] border border-[#244b3a]">
                <ul className="space-y-2">
                  {project.results.verifiedOutcomes.map((outcome, idx) => (
                    <li key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-1.5 shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#244b3a] bg-[#132b20] flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            Repo: <span className="text-slate-200">{project.verifiedRepo.replace('https://github.com/', '')}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] text-xs font-medium text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
