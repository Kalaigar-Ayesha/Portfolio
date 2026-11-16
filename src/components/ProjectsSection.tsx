import React, { useState } from 'react';
import { ExternalLink, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import { CASE_STUDIES, CaseStudy } from '../data/caseStudiesData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#244b3a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#34d399] mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Code & Implementations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100/70 max-w-md">
            Inspected and verified repositories with production manifests, Dockerfiles, CI/CD automation, and multi-cloud architectures.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#132b20] border border-[#244b3a] hover:border-[#2f604b] transition-all group"
            >
              <div>
                {/* Meta info */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#19382b] border border-[#2f604b] text-[11px] font-mono text-[#34d399]">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-200/70">
                    {project.status}
                  </span>
                </div>

                {/* Title & subtitle */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#34d399] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-[#a7f3d0] font-mono mt-1">
                  {project.subtitle}
                </p>

                {/* Problem & Solution summary */}
                <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Architecture Highlights */}
                <div className="mt-4 pt-4 border-t border-[#244b3a]/70">
                  <div className="text-[11px] font-mono text-[#34d399] mb-2 uppercase tracking-wider">
                    Architecture Highlights
                  </div>
                  <ul className="space-y-1.5">
                    {project.architecture.components.slice(0, 3).map((comp, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-1.5 shrink-0" />
                        <span>
                          <strong className="text-slate-100">{comp.name}:</strong> {comp.purpose}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.flatMap(t => t.tools).slice(0, 6).map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#19382b] border border-[#2f604b] text-[11px] font-mono text-emerald-100/90"
                    >
                      {tool.name}
                    </span>
                  ))}
                  {project.technologies.flatMap(t => t.tools).length > 6 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                      +{project.technologies.flatMap(t => t.tools).length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#244b3a] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#34d399] hover:text-white transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#10b981] hover:bg-[#34d399] text-[#062316] text-xs font-semibold transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href={project.verifiedRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] text-xs font-mono text-emerald-200 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <GitHubIcon className="w-3.5 h-3.5 text-[#34d399]" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
