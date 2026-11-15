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
    skills: ['AWS Cost Explorer', 'CloudWatch Telemetry', 'Karpenter Autoscaling', 'EC2 & RDS Right-Sizing', 'Spot Instance Automation', 'Idle Resource Reclamation']
  },
  {
    title: 'Secure Cloud & DevSecOps',
    icon: ShieldCheck,
    tag: 'Zero-Trust',
    skills: ['Trivy Container Scanning', 'Gitleaks Secret Detection', 'AWS IAM Least-Privilege', 'KMS Encryption', 'VPC Private Subnets', 'AWS WAF Mitigation']
  },
  {
    title: 'AWS Cloud Infrastructure',
    icon: Cloud,
    tag: 'Cloud Native',
    skills: ['AWS VPC & Subnets', 'EC2 Fleets', 'RDS Multi-AZ', 'S3 Lifecycle Policies', 'Route 53 & ALB', 'IAM Roles & Policies']
  },
  {
    title: 'Docker & Kubernetes',
    icon: Boxes,
    tag: 'Orchestration',
    skills: ['Docker & Multi-Stage Builds', 'Docker Compose', 'Kubernetes EKS', 'Helm Charts', 'PodDisruptionBudgets', 'ConfigMaps & Secrets']
  },
  {
    title: 'CI/CD & Infrastructure as Code',
    icon: Workflow,
    tag: 'Automation',
    skills: ['GitHub Actions', 'Terraform Modules', 'Remote S3/DynamoDB State', 'ArgoCD GitOps', 'Automated Testing Gates', 'Zero-Downtime Rollouts']
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
    <section id="capabilities" className="py-20 bg-[#04140d] relative border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Core DevOps & Cloud Engineering Stack
          </h2>
          <p className="mt-2 text-sm text-emerald-100/70">
            Battle-tested technologies for optimizing infrastructure cost, security, and release velocity.
          </p>
        </div>

        {/* 6 Capabilities Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CLUSTERS.map((cluster) => {
            const Icon = cluster.icon;

            return (
              <div 
                key={cluster.title}
                className="rounded-2xl bg-[#072217] border border-emerald-900/80 hover:border-emerald-500/50 p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
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
                        className="px-2 py-1 rounded-md text-[11px] font-mono bg-[#04140d] text-emerald-200 border border-emerald-900/80"
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
