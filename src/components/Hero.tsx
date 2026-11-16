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
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#244b3a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Availability status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132b20] border border-[#244b3a] text-xs font-mono text-[#a7f3d0] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#34d399]" />
          <span>Available for Projects & Contracts</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.2]">
            DevOps & Multi-Cloud Engineer focused on{' '}
            <span className="text-[#34d399]">Infrastructure Cost Optimization</span> & Secure Systems.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-emerald-100/80 leading-relaxed font-normal max-w-2xl">
            I help startups and engineering teams slash cloud spend across <strong>AWS, Azure, and GCP</strong>, eliminate infrastructure waste, and build hardened, automated Kubernetes deployments.
          </p>
        </div>

        {/* Quick Action & Contact Row */}
        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#10b981] hover:bg-[#34d399] text-[#062316] font-semibold text-xs sm:text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call {PERSONAL_INFO.phoneRaw}</span>
          </a>

          <button
            onClick={handleCopyPhone}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] text-xs font-mono text-emerald-200 transition-colors"
            title="Copy phone number"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#34d399]" /> : <Copy className="w-3.5 h-3.5 text-[#a7f3d0]" />}
            <span>{copied ? 'Copied' : 'Copy Number'}</span>
          </button>

          <a
            href={`https://wa.me/91${PERSONAL_INFO.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] text-xs font-semibold text-emerald-200 hover:text-white transition-colors"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#34d399]" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] text-xs font-semibold text-emerald-200 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#34d399]" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] text-xs font-semibold text-emerald-200 hover:text-white transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#34d399]" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] text-xs font-semibold text-emerald-200 hover:text-white transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#34d399]" />
          </a>
        </div>

        {/* 3 Core Engineering Pillars - High Signal, Minimal Text */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-5 rounded-xl bg-[#132b20] border border-[#244b3a] hover:border-[#2f604b] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#19382b] border border-[#2f604b] flex items-center justify-center text-[#34d399] mb-3">
              <TrendingDown className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-semibold text-white">Cloud Cost Optimization</h2>
            <p className="mt-1.5 text-xs text-emerald-100/75 leading-relaxed">
              Multi-cloud FinOps audits, right-sizing overprovisioned instances, spot strategies, and eliminating unused storage across AWS, Azure, and GCP.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#132b20] border border-[#244b3a] hover:border-[#2f604b] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#19382b] border border-[#2f604b] flex items-center justify-center text-[#34d399] mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-semibold text-white">Secure Infrastructure (DevSecOps)</h2>
            <p className="mt-1.5 text-xs text-emerald-100/75 leading-relaxed">
              Automated container vulnerability scanning with Trivy, SAST with SonarQube, secret scanning, and least-privilege IAM policies.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#132b20] border border-[#244b3a] hover:border-[#2f604b] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#19382b] border border-[#2f604b] flex items-center justify-center text-[#34d399] mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-semibold text-white">Kubernetes & Multi-Cloud CI/CD</h2>
            <p className="mt-1.5 text-xs text-emerald-100/75 leading-relaxed">
              Production cluster orchestration, Helm charts, self-healing deployments, and automated GitHub Actions pipelines with zero-downtime releases.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
