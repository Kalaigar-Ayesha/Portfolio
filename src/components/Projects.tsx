'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CASE_STUDIES } from '@/data/caseStudiesData';
import { GitHubIcon } from '@/components/SocialIcons';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  BookOpen
} from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cost Optimization & Cloud', 'DevSecOps & CI/CD', 'Kubernetes & AI'];

  const filteredCaseStudies = selectedCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(p => {
        if (selectedCategory === 'Cost Optimization & Cloud') return p.category.includes('FinOps') || p.category.includes('Cloud');
        if (selectedCategory === 'DevSecOps & CI/CD') return p.category.includes('DevSecOps') || p.category.includes('CI/CD');
        if (selectedCategory === 'Kubernetes & AI') return p.category.includes('Kubernetes') || p.category.includes('AI');
        return true;
      });

  return (
    <section id="projects" className="py-20 bg-[#03140c] relative border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>VERIFIED ENGINEERING CASE STUDIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Production Architectures & Verified Repositories
            </h2>
            <p className="mt-2 text-sm text-emerald-100/70">
              Technical case studies backed by real GitHub repositories, Dockerfiles, and CI/CD pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                    : 'bg-[#072217] text-emerald-300/80 border border-emerald-900 hover:border-emerald-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCaseStudies.map((project) => {
            const allTools = project.technologies.flatMap(t => t.tools).map(tool => tool.name);

            return (
              <div
                key={project.slug}
                className="rounded-2xl bg-[#072217] border border-emerald-900/80 hover:border-emerald-500/50 p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-300">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono mt-0.5 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Problem vs Implementation (Minimal) */}
                  <div className="space-y-2 text-xs mb-4">
                    <div className="p-2.5 rounded-lg bg-[#04140d] border border-emerald-950 text-emerald-200/80">
                      <strong className="text-emerald-400 font-semibold">Problem: </strong>
                      {project.problem.statement}
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#04140d] border border-emerald-950 text-emerald-100">
                      <strong className="text-emerald-300 font-semibold">Architecture: </strong>
                      {project.architecture.description}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {allTools.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#04140d] text-emerald-300 border border-emerald-900/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {allTools.length > 5 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-emerald-400/80">
                        +{allTools.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-emerald-900/60 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-200"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Full 12-Pt Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.verifiedRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#04140d] border border-emerald-900/80 hover:border-emerald-500 text-emerald-400 hover:text-white transition-all"
                      title="View GitHub Repository"
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                    </a>
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#04140d] border border-emerald-900/80 hover:border-emerald-500 text-emerald-400 hover:text-white transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
