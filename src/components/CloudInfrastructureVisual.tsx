'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Database,
  TrendingDown,
  Boxes
} from 'lucide-react';

interface TopologyNode {
  id: string;
  name: string;
  category: 'Cost Optimization' | 'Compute & Cluster' | 'Secure Persistence' | 'DevSecOps & SRE';
  status: 'ONLINE' | 'ACTIVE' | 'ENFORCED' | 'SAVING 38%';
  metrics: string;
  spec: string;
  icon: React.ElementType;
}

const NODES: TopologyNode[] = [
  {
    id: 'finops',
    name: 'FinOps Multi-Cloud Right-Sizing',
    category: 'Cost Optimization',
    status: 'SAVING 38%',
    metrics: 'AWS / GCP / Azure',
    spec: 'Automated cluster scaling, eliminating idle over-provisioned VMs and reducing monthly cloud compute bills.',
    icon: TrendingDown
  },
  {
    id: 'secure-edge',
    name: 'Cloud WAF & TLS Ingress',
    category: 'DevSecOps & SRE',
    status: 'ENFORCED',
    metrics: 'WAF Rule Sets // DDoS Shield',
    spec: 'Application Load Balancer protected by WAF rate-limiting, geo-blocking, and automated SSL/TLS renewal.',
    icon: ShieldCheck
  },
  {
    id: 'compute',
    name: 'Hardened Kubernetes (EKS, GKE, AKS, Docker)',
    category: 'Compute & Cluster',
    status: 'ACTIVE',
    metrics: 'Zero-Root // Trivy Scanned',
    spec: 'Containerized microservices running with read-only root filesystems, resource limits, and automated health checks.',
    icon: Boxes
  },
  {
    id: 'data',
    name: 'Encrypted Persistence & Cloud Storage',
    category: 'Secure Persistence',
    status: 'ONLINE',
    metrics: 'KMS Key // Private Subnets',
    spec: 'Isolated inside non-routable private subnets. Encrypted at rest via KMS with automated lifecycle retention.',
    icon: Database
  }
];

export default function CloudInfrastructureVisual() {
  const [activeNode, setActiveNode] = useState<TopologyNode>(NODES[0]);

  return (
    <div className="p-5 font-mono text-xs text-emerald-100 flex flex-col justify-between h-[450px] bg-[#143d2b]">

      {/* Visual Header */}
      <div className="flex items-center justify-between pb-3 border-b border-emerald-700/70">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold tracking-wider text-emerald-200">MULTI-CLOUD TOPOLOGY</span>
        </div>
        <span className="text-[10px] text-emerald-300 bg-[#0e2a1d] px-2 py-0.5 rounded border border-emerald-600/50">
          AWS // GCP // AZURE
        </span>
      </div>

      {/* Interactive Architecture SVG Diagram */}
      <div className="relative my-3 flex-1 flex items-center justify-center bg-[#0e2a1d] rounded-xl p-3 border border-emerald-700/60 shadow-inner">

        {/* SVG Flow Connections in Green */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="greenPulse" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#4ade80" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M 50 70 L 160 70 L 160 135 L 270 135" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.8" />
          <path d="M 160 135 L 160 200 L 270 200" fill="none" stroke="#4ade80" strokeWidth="1.8" strokeDasharray="4 3" opacity="0.8" />
        </svg>

        {/* 4 Interactive Nodes */}
        <div className="grid grid-cols-2 gap-3 w-full z-10">
          {NODES.map((node) => {
            const Icon = node.icon;
            const isSelected = activeNode.id === node.id;

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveNode(node)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${isSelected
                  ? 'bg-[#1a4732] border-emerald-400 shadow-md shadow-emerald-950/40'
                  : 'bg-[#143d2b] border-emerald-700/80 hover:border-emerald-500'
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-emerald-400 text-slate-950' : 'bg-[#0e2a1d] text-emerald-300'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${node.status.includes('SAVING')
                    ? 'bg-emerald-400 text-slate-950 font-bold'
                    : 'bg-[#0e2a1d] text-emerald-200 border border-emerald-600/50'
                    }`}>
                    {node.status}
                  </span>
                </div>
                <div className="font-bold text-xs text-white truncate">{node.name}</div>
                <div className="text-[10px] text-emerald-300/90 truncate mt-0.5">{node.metrics}</div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Selected Node Inspector Detail */}
      <div className="p-3.5 rounded-xl bg-[#0e2a1d] border border-emerald-700/60 space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">
            {activeNode.category}
          </span>
          <span className="text-[10px] text-emerald-200 font-mono">
            {activeNode.metrics}
          </span>
        </div>
        <div className="text-xs text-white font-bold">{activeNode.name}</div>
        <p className="text-[11px] text-emerald-100/80 font-sans leading-relaxed line-clamp-2">
          {activeNode.spec}
        </p>
      </div>

    </div>
  );
}
