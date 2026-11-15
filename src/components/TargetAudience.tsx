'use client';

import React from 'react';
import { 
  Rocket, 
  Code2, 
  Cpu,
  ArrowRight
} from 'lucide-react';

const AUDIENCES = [
  {
    icon: Rocket,
    title: 'SaaS Startups & Early Founders',
    tag: 'Cost & Velocity',
    painPoint: 'High AWS bills and slow, manual releases draining seed runway.',
    solution: 'Right-sized AWS architecture, automated CI/CD pipelines, and immediate 30-40% cloud savings.'
  },
  {
    icon: Code2,
    title: 'Software & Web Agencies',
    tag: 'Hands-off DevOps',
    painPoint: 'Devs wasting billable hours fighting Docker bugs and staging server outages.',
    solution: 'Standardized container workflows and repeatable deployments for your client deliverables.'
  },
  {
    icon: Cpu,
    title: 'CTOs & Engineering Managers',
    tag: 'Hardened Security',
    painPoint: 'Need specialized contract expertise for Kubernetes tuning, FinOps audits, or DevSecOps.',
    solution: 'Reliable, high-agency engineering support with clean documentation and zero hand-holding.'
  }
];

export default function TargetAudience() {
  return (
    <section className="py-20 bg-[#04140d] relative border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider mb-3">
            <span>WHO I WORK WITH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Built for Fast-Moving Teams Who Need Scalable, Secure Cloud
          </h2>
          <p className="mt-2 text-sm text-emerald-100/70">
            Direct freelance engineering collaboration focused on concrete business ROI.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIENCES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div 
                key={idx}
                className="rounded-2xl bg-[#072217] border border-emerald-900/80 hover:border-emerald-500/50 p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <div className="space-y-2 text-xs">
                    <p className="text-emerald-300/80">
                      <strong className="text-red-400/90 font-medium">Problem: </strong>
                      {item.painPoint}
                    </p>
                    <p className="text-emerald-100/90 pt-1">
                      <strong className="text-emerald-400 font-medium">Outcome: </strong>
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-emerald-900/60 flex items-center justify-between text-xs font-mono text-emerald-400 group-hover:text-emerald-300">
                  <span>Explore Collab</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
