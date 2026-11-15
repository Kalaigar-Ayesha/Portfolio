'use client';

import React, { useState } from 'react';
import { Copy, Check, TrendingDown, ShieldCheck, Cpu } from 'lucide-react';

interface TerminalTab {
  id: 'finops' | 'security' | 'k8s';
  title: string;
  badge: string;
  icon: React.ElementType;
  lines: { type: 'cmd' | 'output' | 'success' | 'warn' | 'info'; text: string }[];
}

const TERMINAL_TABS: TerminalTab[] = [
  {
    id: 'finops',
    title: 'cloud-finops-audit.py',
    badge: 'Multi-Cloud FinOps',
    icon: TrendingDown,
    lines: [
      { type: 'cmd', text: '$ python finops_advisor.py --audit-multi-cloud --providers aws,gcp,azure' },
      { type: 'info', text: '⠋ Connecting to Cloud Billing APIs & Resource Telemetry...' },
      { type: 'info', text: '✔ Scanned 32 Compute VMs, 8 Managed DBs, 42 Storage Disks' },
      { type: 'warn', text: '⚠ Warning: 8 unattached persistent volumes detected (idle waste: $240/mo)' },
      { type: 'warn', text: '⚠ Warning: 6 over-provisioned nodes running at <14% CPU average' },
      { type: 'success', text: '✔ Recommendation: Apply automated right-sizing + spot instance scaling' },
      { type: 'success', text: '✔ Projected Cost Reduction: 36.8% (~$3,200/month multi-cloud savings)' },
      { type: 'success', text: '✔ Auto-generated Terraform right-sizing patch: tf-finops-patch.json' }
    ]
  },
  {
    id: 'security',
    title: 'devsecops-audit.sh',
    badge: 'Security Hardening',
    icon: ShieldCheck,
    lines: [
      { type: 'cmd', text: '$ trivy image --severity HIGH,CRITICAL backend-api:latest' },
      { type: 'info', text: '⠋ Scanning container layers for CVEs and secret exposures...' },
      { type: 'info', text: '✔ Base Image: distroless/static:nonroot (minimal attack surface)' },
      { type: 'info', text: '✔ Secret scanning: 0 API keys, 0 plaintext passwords found in repo' },
      { type: 'info', text: '✔ Cloud IAM Audit: Least-privilege role boundaries verified' },
      { type: 'success', text: '✔ Total Vulnerabilities: 0 CRITICAL, 0 HIGH' },
      { type: 'success', text: '✔ Security Policy: PASSED. Automated build promoted to production' }
    ]
  },
  {
    id: 'k8s',
    title: 'k8s-agent.sh',
    badge: 'AI Diagnostic',
    icon: Cpu,
    lines: [
      { type: 'cmd', text: '$ k8s-agent inspect --namespace production --llm openrouter' },
      { type: 'info', text: '⠋ Inspecting cluster context: production-kubernetes-cluster...' },
      { type: 'info', text: '✔ Clustered nodes: 8 ready (Autoscaler active)' },
      { type: 'warn', text: '⚠ Warning: Pod worker-batch-5b9c state: CrashLoopBackOff (exit 137)' },
      { type: 'info', text: '⠋ Memory ceiling reached: limit 512Mi, peak allocation 520Mi' },
      { type: 'success', text: '✔ Root-Cause Identified: Batch ingestion buffer exhaustion' },
      { type: 'success', text: '✔ Remediation: kubectl set resources deployment worker --limits=memory=1Gi' }
    ]
  }
];

export default function TerminalWidget() {
  const [activeTabId, setActiveTabId] = useState<'finops' | 'security' | 'k8s'>('finops');
  const [copied, setCopied] = useState(false);

  const activeTab = TERMINAL_TABS.find(t => t.id === activeTabId) || TERMINAL_TABS[0];

  const handleCopy = () => {
    const textToCopy = activeTab.lines.map(l => l.text).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-[450px] bg-[#0e2a1d] text-emerald-100 font-mono text-xs select-text">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#143d2b] border-b border-emerald-700/60">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
          </div>
          <span className="text-[11px] font-bold text-emerald-300 pl-2">
            ayesha@cloud-devops: ~
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#0e2a1d] hover:bg-[#1a4732] text-[10px] text-emerald-200 transition-all border border-emerald-600/50 cursor-pointer"
          title="Copy output"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-emerald-400" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center bg-[#113324] border-b border-emerald-700/60 px-2 pt-1 gap-1 overflow-x-auto">
        {TERMINAL_TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTabId;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-t-lg text-xs font-mono transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#0e2a1d] text-emerald-300 border-t-2 border-emerald-400 font-bold shadow-sm'
                  : 'text-emerald-300/70 hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-emerald-400" />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Terminal Screen Body */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-[#0e2a1d]">
        {activeTab.lines.map((line, idx) => {
          if (line.type === 'cmd') {
            return (
              <div key={idx} className="flex items-start gap-2 text-white font-bold pb-1">
                <span className="text-emerald-400 select-none">➜</span>
                <span className="text-emerald-100">{line.text}</span>
              </div>
            );
          }
          if (line.type === 'success') {
            return (
              <div key={idx} className="text-emerald-300 font-medium flex items-start gap-2 pl-4">
                <span>{line.text}</span>
              </div>
            );
          }
          if (line.type === 'warn') {
            return (
              <div key={idx} className="text-amber-300 flex items-start gap-2 pl-4">
                <span>{line.text}</span>
              </div>
            );
          }
          return (
            <div key={idx} className="text-emerald-200/70 pl-4">
              {line.text}
            </div>
          );
        })}
        
        {/* Blinking cursor */}
        <div className="flex items-center gap-1 text-emerald-400 pt-2">
          <span>ayesha@cloud-devops:~$</span>
          <span className="w-2 h-4 bg-emerald-400 animate-pulse"></span>
        </div>
      </div>

      {/* Terminal Footer Status */}
      <div className="px-4 py-2 bg-[#143d2b] border-t border-emerald-700/60 flex items-center justify-between text-[10px] text-emerald-300">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span>TELEMETRY: ONLINE</span>
        </div>
        <span>MULTI-CLOUD: AWS // AZURE // GCP</span>
      </div>

    </div>
  );
}
