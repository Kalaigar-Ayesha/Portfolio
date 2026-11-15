'use client';

import React from 'react';
import { ENGAGEMENT_PACKAGES } from '@/data/engagementOptions';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Info,
  DollarSign
} from 'lucide-react';

export default function EngagementOptions() {
  return (
    <section id="pricing" className="py-24 bg-[#080d1a] relative border-t border-slate-900">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            <span>TRANSPARENT COLLABORATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Three Clear Ways We Can Work Together
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Whether you need a quick 5-day pipeline fix, a full cloud migration, or a standing fractional DevOps engineer, I offer transparent collaboration models tailored to your stage.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {ENGAGEMENT_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-[#0c1427] border-2 border-cyan-500/50 shadow-2xl shadow-cyan-950/40 ring-1 ring-cyan-500/30'
                  : 'bg-[#0b1222] border border-slate-800/80 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-950/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-slate-950 font-bold text-[10px] tracking-wider uppercase shadow-md shadow-cyan-500/20">
                  Most Popular
                </div>
              )}

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-300">
                    {pkg.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{pkg.timeline}</span>
                  </div>
                </div>

                {/* Package Name & Tagline */}
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">{pkg.tagline}</p>

                {/* Price Display */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
                  <span className="text-[10px] text-slate-500 block font-mono uppercase tracking-wider">
                    Starting Investment Estimate:
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white block mt-1 tracking-tight">
                    {pkg.startingPriceEstimate}
                  </span>
                  <span className="text-[10px] text-cyan-400/90 block mt-1 font-mono">
                    {pkg.priceNote}
                  </span>
                </div>

                {/* Ideal For */}
                <div className="mb-6 p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300">
                  <strong className="text-white block font-mono text-[11px] mb-0.5">IDEAL FOR:</strong>
                  {pkg.idealFor}
                </div>

                {/* Scope Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    What&apos;s Included:
                  </span>
                  {pkg.whatsIncluded.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={`/#contact?package=${encodeURIComponent(pkg.name)}`}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all shadow-md active:scale-[0.99] ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-cyan-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Transparency & Veracity Callout */}
        <div className="mt-12 p-5 rounded-2xl bg-[#0b1222] border border-slate-800 flex items-start gap-3.5 text-xs text-slate-400">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-slate-200">
              Pricing & Outcome Transparency Standards
            </h4>
            <p className="leading-relaxed">
              All starting prices listed above are <strong className="text-cyan-300">indicative planning estimates</strong> based on typical engineering scopes and are fully editable. In accordance with professional engineering ethics, every engagement is tailored to your verified codebase, cloud footprint, and security requirements. <em>I never promise arbitrary guaranteed results; instead, I deliver testable, reproducible, and verifiable engineering deliverables.</em>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
