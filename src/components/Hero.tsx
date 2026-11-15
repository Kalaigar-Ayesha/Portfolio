'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import TerminalWidget from './TerminalWidget';
import CloudInfrastructureVisual from './CloudInfrastructureVisual';
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import {
  ArrowRight,
  TrendingDown,
  ShieldCheck,
  Phone,
  Mail,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [visualMode, setVisualMode] = useState<'topology' | 'terminal'>('topology');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0e2a1d]">
      {/* Background radial glows and atmospheric effects in rich vibrant green */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-emerald-500/20 via-green-400/15 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-green-500/15 blur-[110px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Consultant Positioning (No location, No world wide collaboration) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#143d2b] border border-emerald-600/50 text-emerald-200 text-xs font-mono tracking-wider shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>FREELANCE DEVOPS & MULTI-CLOUD ENGINEER</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Open for Contract & Freelance Projects</span>
          </div>
        </div>

        {/* Hero Grid: Copy & Visual Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Minimal, High-Converting Multi-Cloud Copy */}
          <div className="lg:col-span-7 space-y-6">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.15]">
              Cloud Infrastructure{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-teal-200 bg-clip-text text-transparent">
                Cost Optimization
              </span>{' '}
              & Secure Systems.
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
              I help startups, SaaS founders, and engineering teams slash cloud spend across <strong>AWS, Azure, GCP, or any provider</strong>, eliminate infrastructure waste, and build hardened, automated systems with Kubernetes and DevSecOps.
            </p>

            {/* Core Focus Cards - Minimal & High Signal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#143d2b] border border-emerald-700/70 shadow-sm">
                <div className="p-2 rounded-lg bg-[#0e2a1d] border border-emerald-500/40 text-emerald-300 shrink-0">
                  <TrendingDown className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Cloud Cost Optimization</h3>
                  <p className="text-[11px] text-emerald-200/90 mt-0.5">FinOps audits, multi-cloud right-sizing, auto-scaling & idle resource elimination.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#143d2b] border border-emerald-700/70 shadow-sm">
                <div className="p-2 rounded-lg bg-[#0e2a1d] border border-emerald-500/40 text-emerald-300 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Secure Infrastructure</h3>
                  <p className="text-[11px] text-emerald-200/90 mt-0.5">Container vulnerability scanning, secret detection, IAM hardening & CI/CD security.</p>
                </div>
              </div>
            </div>

            {/* CTAs & Direct Contact */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-950/40 hover:shadow-emerald-400/30 active:scale-95"
              >
                <span>Contact for Project Collab</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#143d2b] border border-emerald-600/70 hover:border-emerald-400 text-emerald-100 hover:text-white text-sm font-semibold transition-all hover:bg-emerald-800/50"
              >
                <span>View Case Studies</span>
              </Link>

              {/* Direct Quick Channels with user's verified phone 7676389922 */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={`tel:${PERSONAL_INFO.phoneRaw}`}
                  className="p-2.5 rounded-lg bg-[#143d2b] border border-emerald-700/80 hover:border-emerald-400 text-emerald-300 hover:text-white transition-all shadow-sm"
                  title={`Call Phone: ${PERSONAL_INFO.phone}`}
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg bg-[#143d2b] border border-emerald-700/80 hover:border-emerald-400 text-emerald-300 hover:text-white transition-all shadow-sm"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#143d2b] border border-emerald-700/80 hover:border-emerald-400 text-emerald-300 hover:text-white transition-all shadow-sm"
                  title="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#143d2b] border border-emerald-700/80 hover:border-emerald-400 text-emerald-300 hover:text-white transition-all shadow-sm"
                  title="GitHub Profile"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Visual Toggle */}
          <div className="lg:col-span-5 space-y-3">
            {/* View Mode Switcher */}
            <div className="flex items-center justify-between p-1 bg-[#143d2b] border border-emerald-700/70 rounded-xl">
              <button
                type="button"
                onClick={() => setVisualMode('topology')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${visualMode === 'topology'
                  ? 'bg-emerald-400 text-slate-950 font-bold shadow'
                  : 'text-emerald-200 hover:text-white'
                  }`}
              >
                Cost & Sec Architecture
              </button>
              <button
                type="button"
                onClick={() => setVisualMode('terminal')}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${visualMode === 'terminal'
                  ? 'bg-emerald-400 text-slate-950 font-bold shadow'
                  : 'text-emerald-200 hover:text-white'
                  }`}
              >
                DevOps Terminal
              </button>
            </div>

            {/* Container */}
            <div className="rounded-2xl border border-emerald-700/70 bg-[#143d2b]/80 shadow-2xl overflow-hidden backdrop-blur-sm">
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
