'use client';

import React from 'react';
import { ProjectItem } from '@/data/types';
import { GitHubIcon } from '@/components/SocialIcons';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-[#0b1222] border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Status */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-950/60 border border-blue-500/30 text-cyan-300">
            {project.category}
          </span>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
            {project.status}
          </span>
        </div>

        {/* Project Title & Tagline */}
        <h2 className="text-2xl font-bold text-white tracking-tight">
          {project.title}
        </h2>
        <p className="text-sm font-medium text-cyan-400 mt-1 mb-4">
          {project.tagline}
        </p>

        {/* Verified Role */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 pb-4 border-b border-slate-800">
          <span className="font-semibold text-slate-300">Engineering Role:</span>
          <span>{project.role}</span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified Repository
          </span>
        </div>

        {/* Project Overview */}
        <div className="space-y-4 mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            System Overview & Engineering Scope
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Architecture Highlights */}
        <div className="space-y-3 mb-6 bg-slate-900/60 border border-slate-800/80 rounded-xl p-5">
          <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Architecture & Technical Highlights</span>
          </h3>
          <ul className="space-y-2 mt-3">
            {project.architectureHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Matrix */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Technology Stack & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold tracking-wide transition-all border border-slate-700"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>Inspect Source on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href="#contact"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold tracking-wide shadow-md shadow-blue-600/20 transition-all"
          >
            <span>Discuss Similar Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
