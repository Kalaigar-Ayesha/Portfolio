import React from 'react';
import { TrendingDown, ShieldCheck, Workflow, Boxes, CheckCircle2 } from 'lucide-react';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: TrendingDown,
      title: "Cloud Cost Optimization (FinOps)",
      description: "Systematic auditing and elimination of cloud waste across AWS, Azure, and Google Cloud without sacrificing performance or reliability.",
      points: [
        "Audit unattached storage, idle VMs, and overprovisioned instances",
        "Implement auto-scaling, Spot instance fleets, and right-sizing",
        "Multi-cloud telemetry scraping & cost anomaly detection",
        "Resource tagging and automated off-peak scheduling"
      ],
      tools: ["FinOps", "AWS Cost Explorer", "CloudWatch", "Terraform", "Python"]
    },
    {
      icon: ShieldCheck,
      title: "Secure Infrastructure (DevSecOps)",
      description: "Shift-left security embedded directly into your software delivery pipelines to catch vulnerabilities before they reach production.",
      points: [
        "Container vulnerability scanning with Trivy in CI pipelines",
        "Static Application Security Testing (SAST) with SonarQube",
        "Secret scanning & pre-commit hooks to prevent credential leakage",
        "Least-privilege cloud IAM roles and Kubernetes RBAC hardening"
      ],
      tools: ["Trivy", "SonarQube", "IAM Hardening", "Vault", "Docker Security"]
    },
    {
      icon: Workflow,
      title: "Multi-Cloud CI/CD Automation",
      description: "Zero-touch, resilient continuous delivery pipelines built for rapid deployments and instant rollbacks.",
      points: [
        "GitHub Actions & GitLab CI workflows for multi-environment deployments",
        "Multi-stage Docker builds with layer caching for sub-3-minute builds",
        "Automated unit, integration, and security test gates",
        "Zero-downtime releases with automated rollbacks on health check failures"
      ],
      tools: ["GitHub Actions", "Docker Hub", "ArgoCD", "Linux", "Bash"]
    },
    {
      icon: Boxes,
      title: "Kubernetes & Container Orchestration",
      description: "Production Kubernetes cluster setup and configuration engineered for high availability and self-healing.",
      points: [
        "Cluster configuration across EKS, AKS, GKE, or self-hosted",
        "Helm chart templating and standardization across microservices",
        "Ingress routing, automated TLS certificates, and network policies",
        "Horizontal Pod Autoscalers (HPA) and node resource limits"
      ],
      tools: ["Kubernetes", "Docker", "Helm", "kubectl", "ArgoCD"]
    }
  ];

  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-[#244b3a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#34d399] mb-2">
            Engineering Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How I Help Engineering Teams
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-emerald-100/70 max-w-xl">
            Pragmatic infrastructure engineering focused on reducing cloud bills, securing container pipelines, and eliminating manual release stress.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#132b20] border border-[#244b3a] hover:border-[#2f604b] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#19382b] border border-[#2f604b] flex items-center justify-center text-[#34d399] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs text-emerald-100/85 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-[#244b3a]/70 flex flex-wrap gap-1.5">
                  {item.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#19382b] border border-[#2f604b] text-[11px] font-mono text-emerald-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
