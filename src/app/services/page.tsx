import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { DETAILED_SERVICES } from '@/data/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ShieldCheck, 
  Workflow, 
  Cloud, 
  Boxes, 
  Activity, 
  ArrowRight,
  CheckCircle2,
  Wrench
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'DevOps & Cloud Engineering Services | K. Ayesha',
  description: 'Specialized Cloud Cost Optimization (FinOps), DevSecOps Security Hardening, CI/CD, and Kubernetes services across any cloud.',
};

const ICON_MAP: Record<string, React.ElementType> = {
  Workflow,
  Cloud,
  Boxes,
  FileCode2: Cloud,
  ShieldCheck,
  Activity
};

export default function ServicesDirectoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0e2a1d] text-emerald-50 selection:bg-emerald-500/30 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143d2b] border border-emerald-600/50 text-emerald-200 text-xs font-mono tracking-wider mb-4">
              <Wrench className="w-3.5 h-3.5" />
              <span>FREELANCE CONSULTING & CONTRACT SERVICES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Cloud Infrastructure Services Built for Real ROI
            </h1>
            <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed">
              Specialized engineering engagements focused on cloud cost reduction, DevSecOps security hardening, and automated software delivery across AWS, Azure, GCP, or any provider.
            </p>

            {/* Target Client Alignment Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {['SaaS Startups', 'Early-Stage Founders', 'Web & Mobile Agencies', 'CTOs & Engineering Managers'].map((client) => (
                <span key={client} className="px-3 py-1 rounded-lg bg-[#143d2b] border border-emerald-700/70 text-xs font-mono text-emerald-200 font-medium">
                  {client}
                </span>
              ))}
            </div>
          </div>

          {/* 6 Services Detailed Catalog */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {DETAILED_SERVICES.map((service) => {
              const Icon = ICON_MAP[service.iconName] || Cloud;

              return (
                <div
                  key={service.slug}
                  className="rounded-2xl bg-[#143d2b] border border-emerald-700/70 hover:border-emerald-400 p-7 flex flex-col justify-between transition-all group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0e2a1d] border border-emerald-500/40 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0e2a1d] border border-emerald-600/50 text-emerald-200 font-medium">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-xs text-emerald-100/80 mb-5 leading-relaxed">
                      {service.subtitle}
                    </p>

                    {/* Problem Statement */}
                    <div className="p-3.5 rounded-xl bg-[#0e2a1d] border border-emerald-700/60 mb-5 text-xs">
                      <span className="text-red-300 font-mono font-semibold block mb-1">
                        COMMON PROBLEM:
                      </span>
                      <p className="text-emerald-100/90 leading-relaxed">
                        {service.problem.description}
                      </p>
                    </div>

                    {/* Key Deliverables */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 block font-semibold">
                        Core Deliverables:
                      </span>
                      {service.deliverables.slice(0, 3).map((del, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-emerald-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-emerald-700/60 mb-6">
                      {service.technologies.slice(0, 4).map((tech) => (
                        <span key={tech.name} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0e2a1d] text-emerald-200 border border-emerald-700/70 font-medium">
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-emerald-700/60">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-mono font-bold text-emerald-300 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <span>Full Service Specification</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/#contact"
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold transition-all shadow-sm"
                    >
                      Collab
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
