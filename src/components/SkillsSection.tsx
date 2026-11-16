import React from 'react';
import { Cpu, Cloud, Boxes, Workflow, Shield, Activity, Terminal } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Cloud Platforms & FinOps",
      icon: Cloud,
      skills: ["AWS (EC2, VPC, S3, IAM, EKS, CloudWatch)", "Microsoft Azure Fundamentals", "Google Cloud (GCP)", "FinOps Cost Governance", "Resource Right-Sizing"]
    },
    {
      title: "Containers & Orchestration",
      icon: Boxes,
      skills: ["Kubernetes", "Docker & Docker Compose", "Helm Charts", "kubectl CLI", "Pod Lifecycle & HPA", "Multi-stage Docker Builds"]
    },
    {
      title: "CI/CD & DevSecOps",
      icon: Shield,
      skills: ["GitHub Actions", "Trivy Container Scanning", "SonarQube SAST", "ArgoCD (GitOps)", "Secret Scanning & Gitleaks", "IAM Hardening"]
    },
    {
      title: "Infrastructure as Code",
      icon: Workflow,
      skills: ["Terraform (IaC)", "HCL Modular Configs", "State Management", "CloudFormation", "Ansible Basics", "Linux Administration"]
    },
    {
      title: "Observability & SRE",
      icon: Activity,
      skills: ["Prometheus", "Grafana Dashboards", "AWS CloudWatch", "Log Aggregation", "Health Probes & Alerts", "SLO / SLA Monitoring"]
    },
    {
      title: "Scripting & Backend",
      icon: Terminal,
      skills: ["Python (Automation & APIs)", "Bash / Linux Shell Scripting", "FastAPI", "Node.js", "REST APIs", "Git & GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#244b3a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#34d399] mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Tooling & Technology Stack
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-emerald-100/70 max-w-xl">
            Hands-on experience configuring, securing, and automating modern cloud and container tooling.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#132b20] border border-[#244b3a] hover:border-[#2f604b] transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="p-1.5 rounded-md bg-[#19382b] border border-[#2f604b] text-[#34d399]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-[#19382b] border border-[#2f604b] text-xs font-mono text-emerald-100/90"
                    >
                      {skill}
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
