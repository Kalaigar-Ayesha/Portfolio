'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import TerminalWidget from './TerminalWidget';
import CloudInfrastructureVisual from './CloudInfrastructureVisual';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import { trackEvent } from '@/lib/analytics';
import { 
  ArrowRight, 
  Cloud, 
  ShieldCheck, 
  Boxes, 
  Layers, 
  CheckCircle2, 
  MapPin,
  Workflow,
  FileCode2
} from 'lucide-react';

export default function Hero() {
  const [visualMode, setVisualMode] = useState<'topology' | 'terminal'>('topology');

  const handleCtaClick = (ctaName: string) => {
    trackEvent('project_cta_click', { cta: ctaName, source: 'hero' });
  };

  const handleSocialClick = (platform: 'github' | 'linkedin' | 'email') => {
    if (platform === 'github') trackEvent('github_click', { source: 'hero' });
    if (platform === 'linkedin') trackEvent('linkedin_click', { source: 'hero' });
    if (platform === 'email') trackEvent('email_click', { source: 'hero' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glows and atmospheric effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-600/10 blur-[110px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Consultant Positioning & Location Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>FREELANCE DEVOPS & AWS CLOUD ENGINEER</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>DevOps Engineer in Bengaluru</span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Available for Global Contracts</span>
            </span>
          </div>
        </div>

        {/* Hero Grid: Copy & Visual Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-Converting Copy & Search Phrases */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.15]">
              Building Reliable Cloud Infrastructure.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Automating Deployments.
              </span>{' '}
              Securing Production Systems.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              I help early-stage startups, SaaS founders, and software agencies launch dependable <strong>AWS Cloud Infrastructure</strong>, eliminate manual deployment friction through <strong>CI/CD Pipeline Setup</strong>, orchestrate <strong>Docker & Kubernetes Deployment</strong>, and harden cloud security as a pragmatic <strong>DevSecOps Consultant</strong>.
            </p>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <Cloud className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>AWS Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <Boxes className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Kubernetes & Docker</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <Workflow className="w-4 h-4 text-teal-400 shrink-0" />
                <span>CI/CD Pipeline Setup</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <FileCode2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Terraform Automation</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>DevSecOps & Scanning</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                <span>FinOps Cost Control</span>
              </div>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#contact"
                onClick={() => handleCtaClick('discuss_project_primary')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-cyan-600/20 active:scale-[0.98]"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#pricing"
                onClick={() => handleCtaClick('view_packages_pricing')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 text-slate-200 font-semibold text-xs tracking-wide transition-all"
              >
                <span>View Engagement Options</span>
              </a>

              {/* Direct Profile Icons */}
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick('github')}
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all"
                  title="View GitHub Repositories"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick('linkedin')}
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all"
                  title="Connect on LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Target Client Alignment Statement */}
            <div className="pt-2 text-xs text-slate-400">
              <span className="text-slate-500 font-mono">ENGAGEMENT TYPES: </span>
              Fixed-Scope Projects • Cloud Deployments • Ongoing Fractional DevOps Retainers
            </div>

          </div>

          {/* Right Column: Interactive Custom Cloud Visual & Terminal Switcher */}
          <div className="lg:col-span-5">
            <div className="space-y-3">
              {/* Switcher Tabs */}
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Interactive Showcase
                </span>
                <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setVisualMode('topology')}
                    className={`px-3 py-1 rounded transition-all ${
                      visualMode === 'topology'
                        ? 'bg-blue-600/30 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Cloud Topology
                  </button>
                  <button
                    onClick={() => setVisualMode('terminal')}
                    className={`px-3 py-1 rounded transition-all ${
                      visualMode === 'terminal'
                        ? 'bg-blue-600/30 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Live Terminal
                  </button>
                </div>
              </div>

              {/* Render Selected View */}
              {visualMode === 'topology' ? (
                <CloudInfrastructureVisual />
              ) : (
                <TerminalWidget />
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
