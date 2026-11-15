'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { LinkedInIcon, GitHubIcon } from '@/components/SocialIcons';
import { trackEvent } from '@/lib/analytics';
import { 
  Terminal, 
  Mail, 
  ArrowUp, 
  ExternalLink,
  MapPin
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSocialClick = (platform: 'github' | 'linkedin' | 'email') => {
    if (platform === 'github') trackEvent('github_click', { source: 'footer' });
    if (platform === 'linkedin') trackEvent('linkedin_click', { source: 'footer' });
    if (platform === 'email') trackEvent('email_click', { source: 'footer' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-slate-900/90 text-slate-400 py-16 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono text-base font-bold text-white tracking-tight">
                K. Ayesha
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Freelance DevOps & AWS Cloud Engineer in Bengaluru. Specializing in CI/CD pipeline automation, Docker & Kubernetes deployments, Terraform infrastructure as code, and DevSecOps security hardening.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Bengaluru, Karnataka, India • Serving Global Remote Clients</span>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Contract & Freelance Projects</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white block">
              Core Services & Links
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link href="/services/ci-cd-pipeline-automation" className="hover:text-cyan-300 transition-colors">
                CI/CD Automation
              </Link>
              <Link href="/services/aws-cloud-infrastructure" className="hover:text-cyan-300 transition-colors">
                AWS Infrastructure
              </Link>
              <Link href="/services/docker-and-kubernetes" className="hover:text-cyan-300 transition-colors">
                Kubernetes Deploy
              </Link>
              <Link href="/services/infrastructure-as-code" className="hover:text-cyan-300 transition-colors">
                Terraform IaC
              </Link>
              <Link href="/services/devsecops" className="hover:text-cyan-300 transition-colors">
                DevSecOps Hardening
              </Link>
              <Link href="/services/monitoring-and-reliability" className="hover:text-cyan-300 transition-colors">
                Monitoring & SRE
              </Link>
              <Link href="/#pricing" className="hover:text-cyan-300 transition-colors text-cyan-400">
                Engagement Packages
              </Link>
              <Link href="/services" className="hover:text-cyan-300 transition-colors text-cyan-400">
                All Services
              </Link>
            </div>
          </div>

          {/* Verified Profiles & Actions */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white block">
              Direct Contact
            </span>
            
            <div className="flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('github')}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors text-xs"
              >
                <GitHubIcon className="w-4 h-4 text-cyan-400" />
                <span>github.com/Kalaigar-Ayesha</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick('linkedin')}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors text-xs"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>linkedin.com/in/kalaigarayesha</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => handleSocialClick('email')}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors text-xs"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <Link
                href="/sitemap.xml"
                className="text-slate-500 hover:text-slate-400 text-[11px] font-mono pt-1"
              >
                XML Sitemap
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 K. Ayesha. All rights reserved.</span>
            <span>•</span>
            <span>Production-Grade Cloud Architecture</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-600">Built with Next.js & Tailwind</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px] font-mono">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
