'use client';

import React from 'react';
import { TECHNICAL_SKILLS } from '@/data/portfolioData';
import { 
  Cloud, 
  Boxes, 
  FileCode2, 
  Activity, 
  Terminal, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';

export default function Skills() {
  return (
    <section id="capabilities" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES MATRIX</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Battle-Tested Tooling & Engineering Competencies
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            A comprehensive overview of my core technical competencies across cloud providers, container orchestration, automated release pipelines, security tooling, and infrastructure automation.
          </p>
        </div>

        {/* 6 Capabilities Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Cluster 1: Cloud & AWS */}
          <div className="rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Cloud Infrastructure</h3>
                  <span className="text-xs font-mono text-cyan-400">AWS & Multi-Cloud</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                VPC networking, compute clusters, serverless architectures, storage lifecycles, and identity access control.
              </p>
              <div className="space-y-3">
                {TECHNICAL_SKILLS.cloud.map((skill) => (
                  <div key={skill.name} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-200">{skill.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-blue-500/30">
                        {skill.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((it) => (
                        <span key={it} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cluster 2: Containers & Kubernetes */}
          <div className="rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Boxes className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Containers & Orchestration</h3>
                  <span className="text-xs font-mono text-blue-400">Docker & Kubernetes</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Production-grade container packaging, Helm charts, self-healing deployments, and cluster diagnostics.
              </p>
              <div className="space-y-3">
                {TECHNICAL_SKILLS.containers.map((skill) => (
                  <div key={skill.name} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-200">{skill.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-blue-500/30">
                        {skill.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((it) => (
                        <span key={it} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cluster 3: CI/CD & DevSecOps */}
          <div className="rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">CI/CD & DevSecOps</h3>
                  <span className="text-xs font-mono text-emerald-400">Security & GitOps</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Automated release pipelines with integrated vulnerability scanning, code quality checks, and GitOps sync.
              </p>
              <div className="space-y-3">
                {TECHNICAL_SKILLS.cicdDevSecOps.map((skill) => (
                  <div key={skill.name} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-200">{skill.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-blue-500/30">
                        {skill.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((it) => (
                        <span key={it} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cluster 4: Infrastructure as Code */}
          <div className="rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-indigo-400">
                  <FileCode2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">IaC & Automation</h3>
                  <span className="text-xs font-mono text-indigo-400">Terraform & Configuration</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Declarative cloud provisioning, state management, modular architectures, and configuration standardization.
              </p>
              <div className="space-y-3">
                {TECHNICAL_SKILLS.iacConfig.map((skill) => (
                  <div key={skill.name} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-200">{skill.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-blue-500/30">
                        {skill.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((it) => (
                        <span key={it} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cluster 5: Monitoring & SRE */}
          <div className="rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-teal-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Observability & SRE</h3>
                  <span className="text-xs font-mono text-teal-400">Prometheus & Grafana</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Real-time metrics collection, dashboard visualization, SLO/SLA monitoring, and proactive alerts.
              </p>
              <div className="space-y-3">
                {TECHNICAL_SKILLS.monitoring.map((skill) => (
                  <div key={skill.name} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-200">{skill.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-blue-500/30">
                        {skill.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((it) => (
                        <span key={it} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cluster 6: Scripting & Web */}
          <div className="rounded-2xl bg-[#0b1120] border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-amber-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Scripting & Web Stack</h3>
                  <span className="text-xs font-mono text-amber-400">Python, Bash & Node</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Automation scripting, CLI tool creation, RESTful APIs, and full-stack integration capability.
              </p>
              <div className="space-y-3">
                {TECHNICAL_SKILLS.scriptingAndWeb.map((skill) => (
                  <div key={skill.name} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-200">{skill.name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-blue-500/30">
                        {skill.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((it) => (
                        <span key={it} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
