'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/portfolioData';
import { 
  Quote, 
  MessageSquare, 
  Star, 
  Info
} from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#080d1a] relative border-t border-slate-900">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CLIENT PERSPECTIVES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            What Founders & Engineering Leaders Say
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Client feedback and references from past freelance and contract infrastructure engagements.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-[#0b1222] border border-slate-800/80 hover:border-cyan-500/30 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group relative"
            >
              <div>
                
                {/* Quote Icon & Placeholder Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30 text-amber-300">
                    Editable Placeholder
                  </span>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6">
                  &ldquo;{t.quote.replace(/^\[Editable Placeholder:\s*['"]?/, '').replace(/['"]?\]$/, '')}&rdquo;
                </p>

              </div>

              {/* Author & Project Context */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-md shadow-blue-900/40">
                    {t.author.charAt(1) || 'C'}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {t.title} • {t.company}
                    </p>
                    <span className="text-[10px] text-cyan-400/80 font-mono block mt-0.5">
                      Scope: {t.context}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Placeholder Customization Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-300">Placeholder Notice: </strong>
            To strictly adhere to veracity guidelines, the above testimonial cards are marked as editable placeholders. You can replace the text, names, and companies in <code className="text-cyan-300 bg-slate-800 px-1.5 py-0.5 rounded font-mono">src/data/portfolioData.ts</code> with verified client references and feedback.
          </p>
        </div>

      </div>
    </section>
  );
}
