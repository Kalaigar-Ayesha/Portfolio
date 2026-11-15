'use client';

import React from 'react';
import { 
  TrendingDown, 
  ShieldCheck, 
  Cloud, 
  Boxes, 
  Workflow, 
  Activity,
  Cpu
} from 'lucide-react';

const SKILL_CLUSTERS = [
  {
    title: 'Cloud Cost Optimization (FinOps)',
    icon: TrendingDown,
    tag: 'ROI Focus',
    skills: ['AWS Cost Explorer', 'GCP / Azure Billing', 'Karpenter Autoscaling', 'Compute & DB Right-Sizing', 'Spot Instance Automation', 'Idle Resource Reclamation']
  },
  {
    title: 'Secure Cloud & DevSecOps',
    icon: ShieldCheck,
    tag: 'Zero-Trust',
    skills: ['Trivy Container Scanning', 'Gitleaks Secret Detection', 'IAM Least-Privilege', 'KMS Encryption', 'VPC Private Subnets', 'Cloud WAF Mitigation']
  },
  {
    title: 'Multi-Cloud Infrastructure',
    icon: Cloud,
    tag: 'Any Provider',
    skills: ['AWS (EC2, VPC, EKS, RDS, S3)', 'Google Cloud Platform (GCP)', 'Microsoft Azure', 'Networking & Private Subnets', 'DNS & Load Balancers', 'Cloud Architecture']
  },
  {
    title: 'Docker & Kubernetes',
    icon: Boxes,
    tag: 'Orchestration',
    skills: ['Docker & Multi-Stage Builds', 'Docker Compose', 'Kubernetes (EKS, GKE, AKS)', 'Helm Charts', 'PodDisruptionBudgets', 'ConfigMaps & Secrets']
  },
  {
    title: 'CI/CD & Infrastructure as Code',
    icon: Workflow,
    tag: 'Automation',
    skills: ['GitHub Actions', 'Terraform Modules', 'Remote State Management', 'ArgoCD GitOps', 'Automated Testing Gates', 'Zero-Downtime Rollouts']
  },
  {
    title: 'Monitoring & Reliability (SRE)',
    icon: Activity,
    tag: 'Observability',
    skills: ['Prometheus Metrics', 'Grafana Dashboards', 'Alertmanager & PagerDuty', 'Health Checks & Probes', 'Log Aggregation', 'SLI / SLO Tracking']
  }
];

export default function Skills() {
  return (
    <section id="capabilities" className="py-20 bg-[#0e2a1d] relative border-t border-emerald-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143d2b] border border-emerald-600/50 text-emerald-200 text-xs font-mono tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            DevOps & Multi-Cloud Engineering Stack
          </h2>
          <p className="mt-2 text-sm text-emerald-100/80">
            Battle-tested technologies across AWS, Azure, GCP, and Kubernetes for optimizing cloud cost and security.
          </p>
        </div>

        {/* 6 Capabilities Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CLUSTERS.map((cluster) => {
            const Icon = cluster.icon;

            return (
              <div 
                key={cluster.title}
                className="rounded-2xl bg-[#143d2b] border border-emerald-700/70 hover:border-emerald-400 p-6 flex flex-col justify-between transition-all group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0e2a1d] border border-emerald-500/40 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0e2a1d] text-emerald-200 border border-emerald-600/50 font-medium">
                      {cluster.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-3">
                    {cluster.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {cluster.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 rounded-md text-[11px] font-mono bg-[#0e2a1d] text-emerald-200 border border-emerald-700/70 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
