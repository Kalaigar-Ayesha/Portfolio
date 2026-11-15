'use client';

import React from 'react';
import Link from 'next/link';
import { 
  TrendingDown, 
  ShieldCheck, 
  Cloud, 
  Workflow, 
  Boxes, 
  Activity, 
  ArrowRight,
  Wrench
} from 'lucide-react';

const SERVICES = [
  {
    slug: 'aws-cloud-infrastructure',
    title: 'Cloud Cost Optimization & AWS FinOps',
    icon: TrendingDown,
    tag: 'Core Focus',
    description: 'Infrastructure spend audits, EC2/RDS right-sizing, Karpenter autoscaling, and idle resource elimination to cut cloud bills by 30-40%.',
    deliverables: ['AWS Cost Audit Report', 'Right-sizing & Spot Automation', 'Idle Resource Cleanup']
  },
  {
    slug: 'devsecops',
    title: 'Secure Cloud & DevSecOps Hardening',
    icon: ShieldCheck,
    tag: 'Core Focus',
    description: 'Container vulnerability scanning, secret detection, IAM least-privilege policies, and automated security guardrails in CI/CD.',
    deliverables: ['Trivy Container CVE Scans', 'Automated Secret Detection', 'Least-Privilege IAM Hardening']
  },
  {
    slug: 'ci-cd-pipeline-automation',
    title: 'Automated CI/CD Pipelines',
    icon: Workflow,
    tag: 'Release Velocity',
    description: 'Multi-stage GitHub Actions workflows for automated testing, Docker container builds, linting, and zero-downtime releases.',
    deliverables: ['GitHub Actions Workflows', 'Zero-Downtime Rollouts', 'Automated Testing Gates']
  },
  {
    slug: 'docker-and-kubernetes',
    title: 'Docker & Kubernetes Deployment',
    icon: Boxes,
    tag: 'Orchestration',
    description: 'Production containerization, multi-stage Dockerfiles, Helm charts, self-healing pod clusters, and deployment troubleshooting.',
    deliverables: ['Optimized Dockerfiles', 'Kubernetes Helm Manifests', 'Self-Healing Pod Policies']
  },
  {
    slug: 'infrastructure-as-code',
    title: 'Terraform Infrastructure as Code',
    icon: Cloud,
    tag: 'Automation',
    description: 'Modular, version-controlled cloud infrastructure. Eliminate manual AWS console clicks with repeatable, drift-free Terraform.',
    deliverables: ['Modular Terraform Code', 'Remote S3/DynamoDB State', 'Drift Detection Guardrails']
  },
  {
    slug: 'monitoring-and-reliability',
    title: 'Monitoring, Metrics & Observability',
    icon: Activity,
    tag: 'SRE & Uptime',
    description: 'Real-time Prometheus and Grafana telemetry dashboards, proactive Slack/PagerDuty alerts, and uptime observability.',
    deliverables: ['Grafana Health Dashboards', 'Proactive Slack Alerts', 'SLI/SLO Uptime Metrics']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#04140d] relative border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>FREELANCE & CONTRACT SERVICES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Cloud Infrastructure Services Built for Real ROI
            </h2>
            <p className="mt-2 text-sm text-emerald-100/70">
              Specialized engineering engagements to reduce cloud waste and secure production environments.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#072217] border border-emerald-900/80 hover:border-emerald-500/60 text-xs font-mono text-emerald-300 hover:text-white transition-all self-start md:self-auto"
          >
            <span>View All Detailed Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.slug}
                className="rounded-2xl bg-[#072217] border border-emerald-900/80 hover:border-emerald-500/50 p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-emerald-100/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-emerald-900/60">
                    {service.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-emerald-200/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-emerald-900/60 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-mono text-emerald-400 hover:text-emerald-200 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/#contact"
                    className="text-xs font-bold text-slate-950 px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 transition-all"
                  >
                    Collab
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
