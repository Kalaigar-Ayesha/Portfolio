import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { DETAILED_SERVICES } from '@/data/servicesData';
import { ENGAGEMENT_PACKAGES } from '@/data/engagementOptions';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Workflow, 
  Cloud, 
  Boxes, 
  FileCode2, 
  ShieldCheck, 
  Activity, 
  ArrowRight,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'DevOps & Cloud Engineering Consulting Services | K. Ayesha',
  description: 'Specialized DevOps, AWS Cloud Infrastructure, Kubernetes, Terraform IaC, DevSecOps, and SRE services for startups and software engineering teams.',
};

const ICON_MAP: Record<string, React.ElementType> = {
  Workflow,
  Cloud,
  Boxes,
  FileCode2,
  ShieldCheck,
  Activity
};

export default function ServicesDirectoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>FREELANCE CONSULTING & CONTRACT SERVICES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Production-Grade DevOps Services Built For Business Growth
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              I partner with early-stage startups, SaaS founders, software development agencies, and CTOs to build reliable cloud infrastructure, automate release pipelines, and secure production systems.
            </p>

            {/* Target Client Alignment Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {['SaaS Startups', 'Early-Stage Founders', 'Web & Mobile Agencies', 'E-commerce Platforms', 'CTOs & Engineering Managers'].map((client) => (
                <span key={client} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
                  {client}
                </span>
              ))}
            </div>
          </div>

          {/* 6 Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {DETAILED_SERVICES.map((service) => {
              const Icon = ICON_MAP[service.iconName] || Cloud;

              return (
                <div
                  key={service.slug}
                  className="rounded-2xl bg-[#0b1222] border border-slate-800/80 hover:border-cyan-500/40 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/40 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-blue-500/30">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      <Link href={`/services/${service.slug}`} className="hover:underline">
                        {service.title}
                      </Link>
                    </h2>
                    <p className="text-xs font-medium text-cyan-400/90 mt-1 mb-3">
                      {service.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {service.summary}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                        Key Deliverables:
                      </span>
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Pricing Estimate & Link */}
                  <div className="pt-5 border-t border-slate-800/80 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>{service.startingEstimate}</span>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-all group/link"
                    >
                      <span>Explore Scope & Deliverables</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Three Engagement Packages Section */}
          <div className="mb-24">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Flexible Collaboration Models
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Three Transparent Engagement Options
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Choose the collaboration structure that fits your project stage and timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {ENGAGEMENT_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-2xl p-7 flex flex-col justify-between transition-all relative ${
                    pkg.popular
                      ? 'bg-[#0c1427] border-2 border-cyan-500/50 shadow-2xl shadow-cyan-950/40'
                      : 'bg-[#0b1222] border border-slate-800/80 hover:border-cyan-500/30'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 font-bold text-[10px] tracking-wider uppercase">
                      Recommended
                    </div>
                  )}

                  <div>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-300 mb-4 inline-block">
                      {pkg.badge}
                    </span>

                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 mb-4 leading-relaxed">{pkg.tagline}</p>

                    {/* Price */}
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
                      <span className="text-xs text-slate-500 block font-mono">INDICATIVE ESTIMATE:</span>
                      <span className="text-2xl font-black text-white block mt-0.5">{pkg.startingPriceEstimate}</span>
                      <span className="text-[10px] text-slate-400 block mt-1 font-mono">{pkg.priceNote}</span>
                    </div>

                    {/* Scope details */}
                    <div className="space-y-3 mb-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                        Included in this package:
                      </span>
                      {pkg.whatsIncluded.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`/#contact?package=${encodeURIComponent(pkg.name)}`}
                    className={`w-full py-3 rounded-xl font-semibold text-xs tracking-wide text-center transition-all shadow-md ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-400 text-white shadow-blue-600/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    Select {pkg.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
