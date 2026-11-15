'use client';

import React from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Database, 
  Cloud, 
  Workflow, 
  Boxes, 
  CheckCircle2, 
  Terminal,
  Layers,
  Lock,
  TrendingDown
} from 'lucide-react';

interface ArchitectureDiagramProps {
  type: 'k8s-agent' | 'cloudpilot' | 'devsecops' | 'digital-library';
}

export default function ArchitectureDiagram({ type }: ArchitectureDiagramProps) {

  if (type === 'k8s-agent') {
    return (
      <div className="w-full rounded-2xl bg-[#04140d] border border-emerald-500/30 p-6 sm:p-8 font-sans">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-900">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
              Architecture: AI Kubernetes Diagnostics Engine
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400/80">Decoupled Clean Pipeline</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border bg-[#072217] border-emerald-900 hover:border-emerald-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">01. UI LAYER</span>
              <Terminal className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Next.js Dashboard</h4>
            <p className="text-[11px] text-emerald-100/70 leading-relaxed">
              Realtime streaming of cluster investigation steps and pod triage logs.
            </p>
          </div>

          <div className="p-4 rounded-xl border bg-[#072217] border-emerald-900 hover:border-emerald-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">02. ENGINE</span>
              <Cpu className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">FastAPI Backend</h4>
            <p className="text-[11px] text-emerald-100/70 leading-relaxed">
              Parallel execution of kubectl sub-inspectors and token-bounded JSON synthesis.
            </p>
          </div>

          <div className="p-4 rounded-xl border bg-[#072217] border-emerald-900 hover:border-emerald-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">03. INSPECTOR</span>
              <Boxes className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">K8s Sub-Inspectors</h4>
            <p className="text-[11px] text-emerald-100/70 leading-relaxed">
              Pod failure parser (OOMKilled, CrashLoop), log tailer & warning event analyzer.
            </p>
          </div>

          <div className="p-4 rounded-xl border bg-[#072217] border-emerald-900 hover:border-emerald-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">04. AI AGENT</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">OpenRouter LLM</h4>
            <p className="text-[11px] text-emerald-100/70 leading-relaxed">
              Root-cause analysis synthesis and generated kubectl remediation patch commands.
            </p>
          </div>
        </div>

        <div className="mt-5 p-3.5 rounded-xl bg-[#072217] border border-emerald-900 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-emerald-300">Design Advantage:</span>
            <span>Zero custom in-cluster daemon required; operates securely through standard authenticated kubectl context.</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'cloudpilot') {
    return (
      <div className="w-full rounded-2xl bg-[#04140d] border border-emerald-500/30 p-6 sm:p-8 font-sans">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-900">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
              Architecture: CloudPilot-AI Multi-Cloud FinOps Engine
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400/80">Clean Architecture / SOLID</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#072217] border border-emerald-900">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">01. INGESTION</span>
              <Cloud className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Cloud Providers</h4>
            <p className="text-[11px] text-emerald-100/70 leading-relaxed">
              AWS Boto3, Azure SDK, and GCP APIs extracting compute, storage, and billing telemetry.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#072217] border border-emerald-900">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">02. ADAPTERS</span>
              <Layers className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Clean Domain Core</h4>
            <p className="text-[11px] text-emerald-100/70 leading-relaxed">
              Decoupled adapter interfaces standardizing billing schemas across accounts.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#072217] border border-emerald-900">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">03. FINOPS</span>
              <TrendingDown className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Rightsizing Engine</h4>
            <p className="text-[11px] text-emerald-100/70 leading-relaxed">
              Evaluates idle instances, unattached disks, and GP2-to-GP3 storage migrations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#072217] border border-emerald-900">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">04. COPILOT</span>
              <Cpu className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Tool-Calling AI</h4>
            <p className="text-[11px] text-emerald-100/70 leading-relaxed">
              Structured tool execution answering natural language infrastructure spending queries.
            </p>
          </div>
        </div>

        <div className="mt-5 p-3.5 rounded-xl bg-[#072217] border border-emerald-900 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-emerald-300">Security Guarantee:</span>
            <span>Operates strictly with read-only IAM audit roles; credentials never leak to LLMs.</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'devsecops') {
    return (
      <div className="w-full rounded-2xl bg-[#04140d] border border-emerald-500/30 p-6 sm:p-8 font-sans">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-900">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
              Architecture: Automated DevSecOps & GitOps Pipeline
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400/80">Shift-Left Security</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#072217] border border-emerald-900">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">01. SOURCE</span>
              <Workflow className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">GitHub Actions</h4>
            <p className="text-[11px] text-emerald-100/70 leading-relaxed">
              Automated linting, unit tests, and multi-stage Docker build with zero root user.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#072217] border border-emerald-900">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">02. SECURITY</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Trivy Vulnerability Scan</h4>
            <p className="text-[11px] text-emerald-100/70 leading-relaxed">
              Container scanning blocking HIGH/CRITICAL CVEs and exporting SARIF reports.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#072217] border border-emerald-900">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">03. REGISTRY</span>
              <Boxes className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Signed Image Push</h4>
            <p className="text-[11px] text-emerald-100/70 leading-relaxed">
              Immutable SHA-256 tagged images pushed to Docker Hub upon security clearance.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#072217] border border-emerald-900">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">04. GITOPS</span>
              <Lock className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Helm & ArgoCD</h4>
            <p className="text-[11px] text-emerald-100/70 leading-relaxed">
              Continuous deployment reconciles desired Git state into Kubernetes cluster.
            </p>
          </div>
        </div>

        <div className="mt-5 p-3.5 rounded-xl bg-[#072217] border border-emerald-900 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-emerald-300">Security Gate:</span>
            <span>Zero untested or un-scanned image ever reaches the Kubernetes production cluster.</span>
          </div>
        </div>
      </div>
    );
  }

  // Digital library
  return (
    <div className="w-full rounded-2xl bg-[#04140d] border border-emerald-500/30 p-6 sm:p-8 font-sans">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-900">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
            Architecture: Digital Library 6,000+ PDF Storage Engine
          </span>
        </div>
        <span className="text-[11px] font-mono text-emerald-400/80">Supabase & Object Storage</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-[#072217] border border-emerald-900">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">CLIENT</span>
            <Terminal className="w-4 h-4 text-emerald-400" />
          </div>
          <h4 className="text-xs font-bold text-white mb-1">React / Vite SPA</h4>
          <p className="text-[11px] text-emerald-100/70 leading-relaxed">
            Instant search and filtering for students across 6,000+ indexed books and papers.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#072217] border border-emerald-900">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">AUTH</span>
            <Lock className="w-4 h-4 text-emerald-400" />
          </div>
          <h4 className="text-xs font-bold text-white mb-1">Supabase Auth & RLS</h4>
          <p className="text-[11px] text-emerald-100/70 leading-relaxed">
            Row Level Security isolating student readers from administrative catalog editors.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#072217] border border-emerald-900">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">METADATA</span>
            <Database className="w-4 h-4 text-emerald-400" />
          </div>
          <h4 className="text-xs font-bold text-white mb-1">PostgreSQL Database</h4>
          <p className="text-[11px] text-emerald-100/70 leading-relaxed">
            GIN indexed full-text search across book titles, authors, and ISBNs.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#072217] border border-emerald-900">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">STORAGE</span>
            <Cloud className="w-4 h-4 text-emerald-400" />
          </div>
          <h4 className="text-xs font-bold text-white mb-1">Object Cloud Storage</h4>
          <p className="text-[11px] text-emerald-100/70 leading-relaxed">
            Direct time-limited signed URLs serving 6,000+ PDFs without server bottleneck.
          </p>
        </div>
      </div>

      <div className="mt-5 p-3.5 rounded-xl bg-[#072217] border border-emerald-900 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-emerald-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-emerald-300">Scale Verified:</span>
          <span>Successfully tested with 6,000+ PDF uploads with zero connection pool starvation.</span>
        </div>
      </div>
    </div>
  );
}
