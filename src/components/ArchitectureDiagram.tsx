'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Database, 
  Cloud, 
  Workflow, 
  Boxes, 
  GitBranch, 
  CheckCircle2, 
  Terminal,
  Activity,
  Layers,
  Lock,
  FileText
} from 'lucide-react';

interface ArchitectureDiagramProps {
  type: 'k8s-agent' | 'cloudpilot' | 'devsecops' | 'digital-library';
}

export default function ArchitectureDiagram({ type }: ArchitectureDiagramProps) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  if (type === 'k8s-agent') {
    return (
      <div className="w-full rounded-2xl bg-[#090e1a] border border-cyan-500/30 p-6 sm:p-8 font-sans">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
              System Architecture Diagram: AI Kubernetes Diagnostics Engine
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">Decoupled Clean Pipeline</span>
        </div>

        {/* Visual Workflow Flowchart */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          
          {/* Step 1: Frontend */}
          <div 
            onMouseEnter={() => setActiveNode('frontend')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeNode === 'frontend' 
                ? 'bg-blue-950/60 border-cyan-400 shadow-lg shadow-cyan-950/40' 
                : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-cyan-300">01. UI LAYER</span>
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Next.js Dashboard</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Cluster context selector, realtime streaming of investigation steps & run logs.
            </p>
          </div>

          {/* Step 2: Backend Orchestrator */}
          <div 
            onMouseEnter={() => setActiveNode('orchestrator')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeNode === 'orchestrator' 
                ? 'bg-blue-950/60 border-cyan-400 shadow-lg shadow-cyan-950/40' 
                : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-300">02. ORCHESTRATION</span>
              <Cpu className="w-4 h-4 text-cyan-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">FastAPI Engine</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Parallel execution of kubectl sub-inspectors and token-bounded JSON evidence compilation.
            </p>
          </div>

          {/* Step 3: Investigation Modules */}
          <div 
            onMouseEnter={() => setActiveNode('inspectors')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeNode === 'inspectors' 
                ? 'bg-blue-950/60 border-cyan-400 shadow-lg shadow-cyan-950/40' 
                : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-300">03. K8S INSPECTORS</span>
              <Boxes className="w-4 h-4 text-indigo-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Modular Sub-Inspectors</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Pod failure parser (OOMKilled, CrashLoop), log tailer, warning event & network validator.
            </p>
          </div>

          {/* Step 4: AI Reasoning & Output */}
          <div 
            onMouseEnter={() => setActiveNode('ai')}
            className={`p-4 rounded-xl border transition-all cursor-pointer ${
              activeNode === 'ai' 
                ? 'bg-blue-950/60 border-cyan-400 shadow-lg shadow-cyan-950/40' 
                : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300">04. REASONING</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">OpenRouter LLM Synthesis</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Root-cause analysis synthesis and generated kubectl remediation patch commands.
            </p>
          </div>

        </div>

        {/* Dynamic Detail Callout */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-cyan-300">Design Advantage:</span>
            <span>Zero custom in-cluster daemon required; operates securely through authenticated kubectl context.</span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-slate-500">Verified Architecture</span>
        </div>
      </div>
    );
  }

  if (type === 'cloudpilot') {
    return (
      <div className="w-full rounded-2xl bg-[#090e1a] border border-cyan-500/30 p-6 sm:p-8 font-sans">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
              System Architecture Diagram: CloudPilot-AI Multi-Cloud FinOps Engine
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">Clean Architecture / SOLID</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-cyan-300">INPUT LAYER</span>
              <Cloud className="w-4 h-4 text-cyan-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Cloud Providers</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              AWS Boto3, Azure SDK, and GCP APIs extracting compute, memory, and billing metrics.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-300">ADAPTERS</span>
              <Layers className="w-4 h-4 text-cyan-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Clean Architecture Core</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Decoupled adapter interfaces standardizing billing schemas across multi-cloud accounts.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-900/60 text-amber-300">ANALYTICS</span>
              <Activity className="w-4 h-4 text-amber-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Rightsizing Engine</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Evaluates idle instances, unattached disks, and GP2-to-GP3 storage migrations with confidence scores.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300">AI & COPILOT</span>
              <Cpu className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Tool-Calling Copilot</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Structured tool execution answering natural language infrastructure spending queries.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-cyan-300">Security Guarantee:</span>
            <span>Operates strictly with read-only IAM audit roles; credentials never leak to LLMs.</span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-slate-500">Verified Architecture</span>
        </div>
      </div>
    );
  }

  if (type === 'devsecops') {
    return (
      <div className="w-full rounded-2xl bg-[#090e1a] border border-cyan-500/30 p-6 sm:p-8 font-sans">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
              System Architecture Diagram: Production DevSecOps GitOps Pipeline
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">Automated Shift-Left CI/CD</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-cyan-300">STAGE 1</span>
              <GitBranch className="w-4 h-4 text-cyan-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">GitHub Actions CI</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Code commit triggers automated unit tests, linting, and CodeQL / SonarQube SAST analysis.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-900/60 text-rose-300">STAGE 2</span>
              <ShieldCheck className="w-4 h-4 text-rose-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Trivy Security Gate</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Container images scanned for CVEs. Hard exit code 1 on CRITICAL/HIGH severity; SARIF uploaded.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-300">STAGE 3</span>
              <Workflow className="w-4 h-4 text-cyan-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">ArgoCD & Helm GitOps</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Declarative cluster synchronization. Automatic reconciliation for dev, staging, and prod Helm values.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300">STAGE 4</span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-xs font-bold text-white mb-1">Kubernetes & SRE</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Deployments protected with HPAs, PodDisruptionBudgets, and Prometheus/Grafana telemetry.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-cyan-300">Resilience:</span>
            <span>PodDisruptionBudgets ensure zero connection drops for WebSockets during rolling updates.</span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[11px] text-slate-500">Verified Architecture</span>
        </div>
      </div>
    );
  }

  // Digital Library
  return (
    <div className="w-full rounded-2xl bg-[#090e1a] border border-cyan-500/30 p-6 sm:p-8 font-sans">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
            System Architecture Diagram: High-Capacity Digital Document Archive (6,000+ PDFs)
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-500">Decoupled Object Storage & RLS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-cyan-300">CLIENT</span>
            <Terminal className="w-4 h-4 text-cyan-400" />
          </div>
          <h4 className="text-xs font-bold text-white mb-1">React & Vite Portals</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Role-tailored dashboards for Admin, Scholar (Aalim), and Student researcher personas.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-300">SECURITY</span>
            <Lock className="w-4 h-4 text-cyan-400" />
          </div>
          <h4 className="text-xs font-bold text-white mb-1">Supabase Auth & RLS</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Row-Level Security protecting private archives, role governance, and session persistence.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-900/60 text-indigo-300">DATABASE</span>
            <Database className="w-4 h-4 text-indigo-400" />
          </div>
          <h4 className="text-xs font-bold text-white mb-1">PostgreSQL Metadata Index</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Fast relational indexing of titles, authors, categories, and storage bucket references.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300">STORAGE</span>
            <FileText className="w-4 h-4 text-emerald-400" />
          </div>
          <h4 className="text-xs font-bold text-white mb-1">Cloud Object Storage</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            High-throughput bucket storage hosting 6,000+ PDF files with secure pre-signed delivery.
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-cyan-300">Scaling Strategy:</span>
          <span>Decoupling binary PDF assets from application database ensures instant sub-second search queries.</span>
        </div>
        <span className="hidden sm:inline-block font-mono text-[11px] text-slate-500">Verified Architecture</span>
      </div>
    </div>
  );
}
