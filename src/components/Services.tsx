'use client';

import React from 'react';
import Link from 'next/link';
import { DETAILED_SERVICES } from '@/data/servicesData';
import { 
  Cloud, 
  Boxes, 
  Workflow, 
  FileCode2, 
  ShieldCheck, 
  Activity, 
  Check, 
  ArrowRight,
  Wrench
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Workflow,
  Cloud,
  Boxes,
  FileCode2,
  ShieldCheck,
  Activity
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-4">
              <Wrench className="w-3.5 h-3.5" />
              <span>FREELANCE & CONTRACT SERVICES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              DevOps Services Engineered For Real Business Outcomes
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Targeted, high-ROI engineering engagements designed to get your software shipping faster, reduce AWS waste, and protect production systems.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-cyan-400 hover:text-white transition-all self-start md:self-auto"
          >
            <span>View All Services & Pricing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_SERVICES.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Cloud;

            return (
              <div
                key={service.slug}
                className="rounded-2xl bg-[#0b1120] border border-slate-800/80 hover:border-cyan-500/40 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Service Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-blue-950/80 text-cyan-300 border border-blue-500/30">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    <Link href={`/services/${service.slug}`} className="hover:underline">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-xs font-medium text-cyan-400/90 mt-1 mb-3">
                    {service.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase block mb-1">
                      Key Deliverables:
                    </span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Outcome & Action */}
                <div className="pt-5 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{service.startingEstimate}</span>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-all group/link"
                  >
                    <span>View Scope & Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
