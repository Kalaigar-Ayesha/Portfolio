'use client';

import React from 'react';
import { 
  TrendingDown, 
  ShieldCheck, 
  GitMerge, 
  Activity, 
  ArrowRight,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const PROBLEMS = [
  {
    id: 'cloud-waste',
    icon: TrendingDown,
    title: 'Runaway Cloud Spend & AWS Waste',
    pain: 'Over-provisioned EC2 instances, unattached disks, and idle clusters burning budget.',
    solution: 'FinOps audits, intelligent right-sizing, auto-scaling, and spot fleet automation to cut bills by 30-40%.'
  },
  {
    id: 'security-exposure',
    icon: ShieldCheck,
    title: 'Security Vulnerabilities & Secrets Leakage',
    pain: 'Shipping unchecked Docker images and overly permissive IAM roles creates breach risk.',
    solution: 'Automated Trivy container scanning, secret detection in CI/CD, and least-privilege IAM hardening.'
  },
  {
    id: 'deployment-downtime',
    icon: GitMerge,
    title: 'Fragile Deployments & Release Downtime',
    pain: 'Manual scripts breaking production during releases, delaying client feature delivery.',
    solution: 'Automated GitHub Actions CI/CD pipelines, Docker containerization, and zero-downtime releases.'
  },
  {
    id: 'blind-spots',
    icon: Activity,
    title: 'Blind Spots & Slow Incident Triage',
    pain: 'Discovering outages from angry users instead of real-time alerts.',
    solution: 'Prometheus & Grafana dashboards, Slack/PagerDuty alerts, and proactive health checks.'
  }
];

export default function ProblemsSolved() {
  return (
    <section id="problems" className="py-20 bg-[#03140c] relative border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>BUSINESS IMPACT & ROI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            High-Cost Infrastructure Problems I Solve
          </h2>
          <p className="mt-2 text-sm text-emerald-100/70">
            Pragmatic DevOps solutions that protect your runway and secure your applications.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEMS.map((item) => {
            const Icon = item.icon;

            return (
              <div 
                key={item.id}
                className="rounded-2xl bg-[#072217] border border-emerald-900/80 hover:border-emerald-500/50 p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs">
                    <p className="text-red-300/80 bg-red-950/20 p-2.5 rounded-lg border border-red-900/30">
                      <strong>The Problem: </strong>{item.pain}
                    </p>
                    <p className="text-emerald-200 bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-800/40">
                      <strong>The Fix: </strong>{item.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-emerald-900/60 flex items-center justify-between text-xs font-mono text-emerald-400 group-hover:text-emerald-300">
                  <Link href="/#contact" className="hover:underline flex items-center gap-1.5">
                    <span>Discuss this problem</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
