import React from 'react';
import { Phone, Mail, ArrowUpRight, ShieldCheck, TrendingDown, Layers, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phoneRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Availability status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D1FFBD] border border-emerald-300 text-xs font-mono font-medium text-emerald-950 mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Available for Projects & Contracts</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
            DevOps & Multi-Cloud Engineer focused on{' '}
            <span className="bg-[#D1FFBD] px-2 py-0.5 rounded text-emerald-950 inline-block font-black border border-emerald-200">
              Cost Optimization
            </span>{' '}
            & Secure Infrastructure.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
            I help startups and engineering teams slash cloud spend across <strong>AWS, Azure, and GCP</strong>, eliminate infrastructure waste, and build hardened, automated Kubernetes deployments.
          </p>
        </div>

        {/* Quick Action & Contact Row */}
        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#D1FFBD]" />
            <span>Call {PERSONAL_INFO.phoneRaw}</span>
          </a>

          <button
            onClick={handleCopyPhone}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#D1FFBD] hover:bg-[#bbf7d0] border border-emerald-300 text-xs font-mono font-medium text-emerald-950 transition-colors shadow-xs"
            title="Copy phone number"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-800" /> : <Copy className="w-3.5 h-3.5 text-emerald-800" />}
            <span>{copied ? 'Copied' : 'Copy Number'}</span>
          </button>

          <a
            href={`https://wa.me/91${PERSONAL_INFO.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-emerald-300 transition-colors shadow-xs"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-emerald-300 transition-colors shadow-xs"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-emerald-300 transition-colors shadow-xs"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:border-emerald-300 transition-colors shadow-xs"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
          </a>
        </div>

        {/* 3 Core Engineering Pillars - Clean White Cards with #D1FFBD Accents */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <div className="p-5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-xs hover:shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#D1FFBD] border border-emerald-300 flex items-center justify-center text-emerald-950 mb-3.5">
              <TrendingDown className="w-4 h-4 text-emerald-900" />
            </div>
            <h2 className="text-sm font-bold text-slate-900">Cloud Cost Optimization</h2>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Multi-cloud FinOps audits, right-sizing overprovisioned instances, spot strategies, and eliminating unused storage across AWS, Azure, and GCP.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-xs hover:shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#D1FFBD] border border-emerald-300 flex items-center justify-center text-emerald-950 mb-3.5">
              <ShieldCheck className="w-4 h-4 text-emerald-900" />
            </div>
            <h2 className="text-sm font-bold text-slate-900">Secure Infrastructure (DevSecOps)</h2>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Automated container vulnerability scanning with Trivy, SAST with SonarQube, secret scanning, and least-privilege IAM policies.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-xs hover:shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-[#D1FFBD] border border-emerald-300 flex items-center justify-center text-emerald-950 mb-3.5">
              <Layers className="w-4 h-4 text-emerald-900" />
            </div>
            <h2 className="text-sm font-bold text-slate-900">Kubernetes & Multi-Cloud CI/CD</h2>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Production cluster orchestration, Helm charts, self-healing deployments, and automated GitHub Actions pipelines with zero-downtime releases.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
