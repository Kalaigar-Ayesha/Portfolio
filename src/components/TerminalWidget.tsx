'use client';

import React, { useState } from 'react';
import { Copy, Check, RefreshCw, Cpu, Shield, Server } from 'lucide-react';

interface TerminalTab {
  id: 'k8s' | 'terraform' | 'cicd';
  title: string;
  badge: string;
  icon: React.ElementType;
  lines: { type: 'cmd' | 'output' | 'success' | 'warn' | 'info'; text: string }[];
}

const TERMINAL_TABS: TerminalTab[] = [
  {
    id: 'k8s',
    title: 'k8s-agent.sh',
    badge: 'AI Diagnostic',
    icon: Cpu,
    lines: [
      { type: 'cmd', text: '$ k8s-agent inspect --namespace production --llm openrouter' },
      { type: 'info', text: '⠋ Connecting to cluster context: eks-us-east-1-prod...' },
      { type: 'info', text: '✔ Clustered nodes: 12 ready (0 cordoned, Karpenter active)' },
      { type: 'warn', text: '⚠ Warning: Pod backend-api-7b89f-2z9ql state: CrashLoopBackOff (exit 137: OOMKilled)' },
      { type: 'info', text: '⠋ Inspecting memory ceiling: current limit 512Mi, peak usage 518Mi' },
      { type: 'info', text: '⠋ Running OpenRouter LLM root cause synthesis...' },
      { type: 'success', text: '✔ RCA: Memory leak in worker pool batch processor. Recommendation generated.' },
      { type: 'success', text: '✔ Auto-patch generated: kubectl set resources deployment backend-api --limits=memory=1Gi' }
    ]
  },
  {
    id: 'terraform',
    title: 'aws-infrastructure.tf',
    badge: 'Terraform IaC',
    icon: Server,
    lines: [
      { type: 'cmd', text: '$ terraform plan -out=tfplan -compact-warnings' },
      { type: 'info', text: 'Acquiring state lock from DynamoDB: tf-remote-state-lock...' },
      { type: 'info', text: 'Refreshing state: module.vpc.aws_vpc.main [id=vpc-0824fae9]' },
      { type: 'info', text: 'Refreshing state: module.eks.aws_eks_cluster.prod [id=prod-core]' },
      { type: 'info', text: 'Plan: 3 to add, 1 to change, 0 to destroy.' },
      { type: 'success', text: '+ module.security.aws_security_group_rule.ingress_tls' },
      { type: 'success', text: '+ module.finops.aws_autoscaling_policy.karpenter_spot_fleet' },
      { type: 'output', text: '~ module.s3_assets.aws_s3_bucket_lifecycle_configuration.glacier_tiering' },
      { type: 'success', text: '✔ Status: No configuration drift detected. Ready for apply.' }
    ]
  },
  {
    id: 'cicd',
    title: 'devsecops-pipeline.yml',
    badge: 'GitHub Actions',
    icon: Shield,
    lines: [
      { type: 'cmd', text: '$ gh run view --workflow=devsecops.yml --live' },
      { type: 'info', text: '✓ Stage 1: Static Code Analysis (SonarQube) ............ PASSED (0 bugs)' },
      { type: 'info', text: '✓ Stage 2: Container Image Build (Docker Multi-stage) .... PASSED (142MB)' },
      { type: 'info', text: '✓ Stage 3: Vulnerability Scan (Trivy Scan) .............. PASSED (0 Critical)' },
      { type: 'info', text: '✓ Stage 4: Helm Chart Lint & Packaging ................. PASSED' },
      { type: 'info', text: '✓ Stage 5: ArgoCD GitOps Sync to K8s Cluster ............ SYNCHRONIZED' },
      { type: 'success', text: '✔ Deployment: Zero-downtime rolling update deployed to production.' }
    ]
  }
];

export default function TerminalWidget() {
  const [activeTab, setActiveTab] = useState<'k8s' | 'terraform' | 'cicd'>('k8s');
  const [copied, setCopied] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);

  const currentTabData = TERMINAL_TABS.find(t => t.id === activeTab) || TERMINAL_TABS[0];

  const handleCopy = () => {
    const textToCopy = currentTabData.lines.map(l => l.text).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRerun = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 800);
  };

  return (
    <div className="w-full rounded-2xl bg-[#090e1a] border border-slate-800 shadow-2xl shadow-cyan-950/20 overflow-hidden font-mono text-xs text-slate-300">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="hidden sm:inline-block text-slate-400 text-[11px] font-sans font-medium">
            ayesha@cloud-node-01: ~
          </span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1 bg-[#090e1a] p-1 rounded-lg border border-slate-800">
          {TERMINAL_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] transition-all ${
                  isActive 
                    ? 'bg-blue-600/20 text-cyan-300 border border-cyan-500/30' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span className="hidden md:inline">{tab.title}</span>
                <span className="md:hidden">{tab.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleRerun}
            disabled={isSimulating}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
            title="Re-run Simulation"
            aria-label="Re-run terminal execution"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin text-cyan-400' : ''}`} />
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
            title="Copy Output"
            aria-label="Copy terminal text"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Content Area */}
      <div className="p-4 sm:p-5 min-h-[260px] sm:min-h-[290px] flex flex-col justify-between overflow-x-auto space-y-2 bg-[#080d19]/90">
        <div className={`space-y-2 transition-opacity duration-200 ${isSimulating ? 'opacity-40' : 'opacity-100'}`}>
          {currentTabData.lines.map((line, idx) => {
            let textColor = 'text-slate-300';
            if (line.type === 'cmd') textColor = 'text-cyan-300 font-bold';
            if (line.type === 'success') textColor = 'text-emerald-400 font-medium';
            if (line.type === 'warn') textColor = 'text-amber-300 font-medium';
            if (line.type === 'info') textColor = 'text-slate-400';

            return (
              <div key={idx} className="flex items-start gap-2 leading-relaxed font-mono">
                <span className="text-slate-600 select-none text-[11px] pt-0.5">{(idx + 1).toString().padStart(2, '0')}</span>
                <p className={`${textColor} break-all sm:break-normal`}>
                  {line.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Status Line */}
        <div className="pt-3 mt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>SYSTEM HEALTH: OPTIMAL</span>
            <span className="text-slate-700">|</span>
            <span>UPTIME: 99.99%</span>
          </div>
          <span className="text-cyan-400/80">K. Ayesha // Production Grade Architecture</span>
        </div>
      </div>

    </div>
  );
}
