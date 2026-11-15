'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CASE_STUDIES } from '@/data/caseStudiesData';
import { FEATURED_PROJECTS } from '@/data/portfolioData';
import { ProjectItem } from '@/data/types';
import ProjectModal from './ProjectModal';
import { GitHubIcon } from '@/components/SocialIcons';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen
} from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Kubernetes & AI', 'FinOps & Cloud', 'DevSecOps & CI/CD', 'Data & Storage'];

  const filteredCaseStudies = selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(p => p.category === selectedCategory);

  const handleOpenModal = (caseStudySlug: string) => {
    // Map case study slug to project item in portfolio data
    const slugMap: Record<string, string> = {
      'ai-kubernetes-troubleshooting-agent': 'k8s-troubleshooter',
      'cloudpilot-ai': 'cloudpilot-ai',
      'devsecops-chat-application': 'devsecops-chat',
      'digital-library-platform': 'digital-library'
    };
    const targetId = slugMap[caseStudySlug] || 'k8s-troubleshooter';
    const proj = FEATURED_PROJECTS.find(p => p.id === targetId) || FEATURED_PROJECTS[0];
    setActiveModalProject(proj);
  };

  return (
    <section id="projects" className="py-24 bg-[#080d1a] relative border-t border-slate-900">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>ENGINEERING CASE STUDIES & ARCHITECTURES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              DevOps, Cloud & AI Infrastructure Case Studies
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Explore production architectures, automated CI/CD pipelines, FinOps right-sizing engines, and diagnostic agents. Every case study below is backed by verified repositories and clean architecture blueprints.
            </p>
          </div>

          {/* GitHub Profile Callout */}
          <a
            href="https://github.com/Kalaigar-Ayesha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white text-xs font-mono transition-all shrink-0 self-start md:self-auto"
          >
            <GitHubIcon className="w-4 h-4 text-cyan-400" />
            <span>github.com/Kalaigar-Ayesha</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.slug}
              className="rounded-2xl bg-[#0b1222] border border-slate-800/90 hover:border-cyan-500/40 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                
                {/* Header Pills */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-300">
                    {study.category}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                    {study.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  <Link href={`/projects/${study.slug}`} className="hover:underline">
                    {study.title}
                  </Link>
                </h3>
                <p className="text-xs font-medium text-cyan-400/90 mt-1 mb-3">
                  {study.subtitle}
                </p>

                {/* Role */}
                <div className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-2">
                  <span className="text-slate-500">ROLE:</span>
                  <span className="text-slate-300 font-semibold">{study.role}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Work
                  </span>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {study.summary}
                </p>

                {/* Problem Statement Box */}
                <div className="mb-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 block font-semibold">
                    Core Technical Challenge Solved:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {study.problem.statement}
                  </p>
                </div>

              </div>

              {/* Bottom: Tech Stack & Actions */}
              <div className="pt-5 border-t border-slate-800/80 space-y-4">
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {study.technologies.flatMap(g => g.tools.slice(0, 3)).map((tool) => (
                    <span
                      key={tool.name}
                      className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono"
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                  <Link
                    href={`/projects/${study.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-blue-600/20"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenModal(study.slug)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all"
                      title="Quick Architecture Preview"
                    >
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Preview</span>
                    </button>

                    <a
                      href={study.verifiedRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all"
                      title="View GitHub Repository"
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Modal for quick preview */}
        <ProjectModal 
          project={activeModalProject} 
          onClose={() => setActiveModalProject(null)} 
        />

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900/50 border border-cyan-500/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Looking for tailored DevOps or Cloud Engineering support?
            </h4>
            <p className="text-xs text-slate-300">
              I can help architect, containerize, automate, and secure your cloud applications.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md shadow-cyan-500/20"
          >
            Discuss Your Stack
          </a>
        </div>

      </div>
    </section>
  );
}
