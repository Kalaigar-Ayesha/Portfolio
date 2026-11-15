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
    name: 'FinOps Right-Sizing & Autoscaling',
    category: 'Cost Optimization',
    status: 'SAVING 38%',
    metrics: 'Karpenter // Spot EC2',
    spec: 'Automated cluster scaling, eliminating idle over-provisioned nodes and reducing monthly cloud compute bills.',
    icon: TrendingDown
  },
  {
    id: 'secure-edge',
    name: 'AWS WAF & TLS Ingress',
    category: 'DevSecOps & SRE',
    status: 'ENFORCED',
    metrics: 'WAF Rule Sets // DDoS Shield',
    spec: 'Application Load Balancer protected by AWS WAF rate-limiting, geo-blocking, and automated SSL/TLS renewal.',
    icon: ShieldCheck
  },
  {
    id: 'compute',
    name: 'Hardened Kubernetes (EKS / Docker)',
    category: 'Compute & Cluster',
    status: 'ACTIVE',
    metrics: 'Zero-Root // Trivy Scanned',
    spec: 'Containerized microservices running with read-only root filesystems, resource limits, and automated health checks.',
    icon: Boxes
  },
  {
    id: 'data',
    name: 'Encrypted Multi-AZ RDS & S3',
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
    <div className="p-5 font-mono text-xs text-emerald-100 flex flex-col justify-between h-[450px] bg-[#072217]/80">
      
      {/* Visual Header */}
      <div className="flex items-center justify-between pb-3 border-b border-emerald-900/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold tracking-wider text-emerald-300">SECURE & COST-OPTIMIZED TOPOLOGY</span>
        </div>
        <span className="text-[10px] text-emerald-400/80 bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-500/30">
          AWS // ZERO-TRUST
        </span>
      </div>

      {/* Interactive Architecture SVG Diagram */}
      <div className="relative my-3 flex-1 flex items-center justify-center bg-[#04140d]/60 rounded-xl p-3 border border-emerald-950">
        
        {/* SVG Flow Connections in Green */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="greenPulse" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M 50 70 L 160 70 L 160 135 L 270 135" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
          <path d="M 160 135 L 160 200 L 270 200" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
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
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0a2e1f] border-emerald-400 shadow-lg shadow-emerald-950/60'
                    : 'bg-[#072217]/70 border-emerald-900/80 hover:border-emerald-600/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-emerald-950 text-emerald-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                    node.status.includes('SAVING') 
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {node.status}
                  </span>
                </div>
                <div className="font-bold text-xs text-white truncate">{node.name}</div>
                <div className="text-[10px] text-emerald-400/80 truncate mt-0.5">{node.metrics}</div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Selected Node Inspector Detail */}
      <div className="p-3.5 rounded-xl bg-[#04140d]/90 border border-emerald-900/90 space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
            {activeNode.category}
          </span>
          <span className="text-[10px] text-emerald-300 font-mono">
            {activeNode.metrics}
          </span>
        </div>
        <div className="text-xs text-white font-bold">{activeNode.name}</div>
        <p className="text-[11px] text-emerald-100/70 font-sans leading-relaxed line-clamp-2">
          {activeNode.spec}
        </p>
      </div>

    </div>
  );
}
