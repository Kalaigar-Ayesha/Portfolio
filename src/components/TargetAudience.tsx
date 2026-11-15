'use client';

import React from 'react';
import { 
  Rocket, 
  Code2, 
  ShoppingBag, 
  Briefcase, 
  Cpu, 
  ArrowRight
} from 'lucide-react';

const AUDIENCES = [
  {
    icon: Rocket,
    title: 'SaaS Startups & Early-Stage Founders',
    painPoint: 'Need reliable cloud infrastructure and automated deployments without the expense of a $180k+ full-time DevOps engineer.',
    solution: 'Fast, secure AWS and CI/CD foundations set up in days so you can focus 100% on product-market fit.'
  },
  {
    icon: Code2,
    title: 'Web & Mobile Development Agencies',
    painPoint: 'Developers spend billable hours fighting server configs and deployment errors instead of building client apps.',
    solution: 'Standardized Docker and automated staging/prod pipelines so your team ships client projects effortlessly.'
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce Platforms & SMBs',
    painPoint: 'Traffic surges cause downtime or high bounce rates, while monthly cloud bills spike unpredictably.',
    solution: 'Resilient auto-scaling compute, database connection pooling, and FinOps audits to eliminate cloud waste.'
  },
  {
    icon: Cpu,
    title: 'CTOs & Engineering Managers',
    painPoint: 'Need specialized contract expertise for Kubernetes troubleshooting, container security audits, or Terraform IaC migration.',
    solution: 'Independent, high-agency engineering support with clean documentation, zero-BS communication, and rapid turnaround.'
  }
];

export default function TargetAudience() {
  return (
    <section className="py-20 bg-[#070b14] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WHO I WORK WITH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Specialized DevOps Support For Fast-Moving Engineering Teams
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            I don&apos;t just deliver scripts—I solve specific operational bottlenecks so your business can move faster with less risk.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-[#0b1222] border border-slate-800/80 hover:border-cyan-500/30 p-6 flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-cyan-950/20 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/40 transition-all mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-3 pt-1 text-xs">
                    <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/30 text-rose-200 leading-relaxed">
                      <strong className="text-rose-100 block font-mono text-[10px] uppercase mb-0.5">The Bottleneck:</strong>
                      {item.painPoint}
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-emerald-200 leading-relaxed">
                      <strong className="text-emerald-100 block font-mono text-[10px] uppercase mb-0.5">The Outcome:</strong>
                      {item.solution}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Discuss Your Team&apos;s Needs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
