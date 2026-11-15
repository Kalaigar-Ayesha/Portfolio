'use client';

import React, { useState } from 'react';
import { 
  Cloud, 
  ShieldCheck, 
  Database, 
  CheckCircle2,
  Boxes
} from 'lucide-react';

interface TopologyNode {
  id: string;
  name: string;
  category: 'Edge & Network' | 'Compute & Cluster' | 'Data & Persistence' | 'DevSecOps & SRE';
  status: 'ONLINE' | 'ACTIVE' | 'ENFORCED' | 'HEALTHY';
  metrics: string;
  spec: string;
  icon: React.ElementType;
}

const NODES: TopologyNode[] = [
  {
    id: 'edge',
    name: 'Route 53 & ALB Ingress',
    category: 'Edge & Network',
    status: 'ONLINE',
    metrics: 'TLS 1.3 // Multi-AZ',
    spec: 'AWS Application Load Balancer with ACM automated SSL termination and WAF DDoS mitigation.',
    icon: Cloud
  },
  {
    id: 'compute',
    name: 'Kubernetes EKS / EC2 Fleet',
    category: 'Compute & Cluster',
    status: 'ACTIVE',
    metrics: 'HPA Autoscaling // Karpenter',
    spec: 'Multi-node container cluster with PodDisruptionBudgets, zero-downtime rolling updates, and self-healing.',
    icon: Boxes
  },
  {
    id: 'data',
    name: 'RDS Multi-AZ & S3 Tiering',
    category: 'Data & Persistence',
    status: 'HEALTHY',
    metrics: 'Encrypted KMS // 99.99%',
    spec: 'Isolated private subnets, automated daily snapshots, read replicas, and S3 lifecycle retention rules.',
    icon: Database
  },
  {
    id: 'security',
    name: 'Trivy Scan & DevSecOps Gate',
    category: 'DevSecOps & SRE',
    status: 'ENFORCED',
    metrics: '0 Critical CVEs Allowed',
    spec: 'Shift-left security blocking builds on exit-code 1 for CRITICAL vulnerabilities before Docker Hub publishing.',
    icon: ShieldCheck
  }
];

export default function CloudInfrastructureVisual() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('compute');

  const selectedNode = NODES.find(n => n.id === selectedNodeId) || NODES[1];
  const Icon = selectedNode.icon;

  return (
    <div className="w-full rounded-2xl bg-[#090e1a] border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 p-5 sm:p-6 font-sans relative overflow-hidden">
      
      {/* Visual Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            Production Cloud Architecture Topology
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-300">
          AWS Multi-AZ Baseline
        </span>
      </div>

      {/* Interactive Node Grid */}
      <div className="grid grid-cols-2 gap-3 my-4">
        {NODES.map((node) => {
          const NodeIcon = node.icon;
          const isSelected = selectedNodeId === node.id;

          return (
            <button
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              className={`p-3.5 rounded-xl border text-left transition-all relative ${
                isSelected
                  ? 'bg-blue-950/60 border-cyan-400 shadow-md shadow-cyan-950/50'
                  : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <NodeIcon className={`w-4 h-4 ${isSelected ? 'text-cyan-300' : 'text-slate-400'}`} />
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-emerald-400 font-semibold">
                  {node.status}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white tracking-tight">{node.name}</h4>
              <p className="text-[10px] font-mono text-cyan-400/90 mt-0.5 truncate">{node.metrics}</p>
            </button>
          );
        })}
      </div>

      {/* Active Node Deep-Dive Drawer */}
      <div className="p-4 rounded-xl bg-[#0d1424] border border-cyan-500/20 space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold">
            <Icon className="w-4 h-4 text-cyan-400" />
            <span>{selectedNode.name}</span>
          </div>
          <span className="text-[10px] font-mono text-slate-400 uppercase">{selectedNode.category}</span>
        </div>
        <p className="text-slate-300 text-[11px] leading-relaxed">
          {selectedNode.spec}
        </p>
      </div>

      {/* Live System Telemetry Strip */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            99.99% Uptime Target
          </span>
          <span className="text-slate-700">|</span>
          <span>Terraform State Locked</span>
        </div>
        <span className="text-cyan-400/80">Interactive Architecture Illustration</span>
      </div>

    </div>
  );
}
