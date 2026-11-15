'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { LinkedInIcon } from '@/components/SocialIcons';
import { Terminal, Mail, Phone, ArrowUp, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03140c] border-t border-emerald-950 text-emerald-200/70 py-12 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-emerald-950">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono text-base font-bold text-white tracking-tight">
                K. Ayesha
              </span>
            </div>

            <p className="text-xs text-emerald-100/70 max-w-sm leading-relaxed">
              Freelance DevOps & Cloud Engineer in Bengaluru. Specializing in AWS Cloud Cost Optimization (FinOps) and Secure Infrastructure (DevSecOps).
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Bengaluru, India • Available for Global Contracts</span>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-white block mb-2 font-bold">
              Engineering Services
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <Link href="/services/aws-cloud-infrastructure" className="hover:text-emerald-300 transition-colors">
                Cloud Cost Optimization
              </Link>
              <Link href="/services/devsecops" className="hover:text-emerald-300 transition-colors">
                DevSecOps Hardening
              </Link>
              <Link href="/services/ci-cd-pipeline-automation" className="hover:text-emerald-300 transition-colors">
                CI/CD Automation
              </Link>
              <Link href="/services/docker-and-kubernetes" className="hover:text-emerald-300 transition-colors">
                Kubernetes & Docker
              </Link>
            </div>
          </div>

          {/* Direct Collab Info */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-white block mb-2 font-bold">
              Direct Contact
            </span>
            <div className="space-y-1.5 text-xs font-mono">
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-2 text-emerald-300 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 text-emerald-300 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-300 hover:text-white transition-colors">
                <LinkedInIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>linkedin.com/in/kalaigarayesha</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Status */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-emerald-400/80">
          <div>
            © 2026 K. Ayesha. Built with Next.js, React & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <Link href="/sitemap.xml" className="hover:text-emerald-300">
              Sitemap
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-emerald-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
