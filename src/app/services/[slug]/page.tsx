import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { DETAILED_SERVICES, getServiceBySlug } from '@/data/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Workflow, 
  Cloud, 
  Boxes, 
  FileCode2, 
  ShieldCheck, 
  Activity, 
  ArrowRight,
  TrendingUp,
  HelpCircle,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DETAILED_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found | K. Ayesha' };
  }

  return {
    title: `${service.title} | DevOps & Cloud Consulting | K. Ayesha`,
    description: service.summary,
    openGraph: {
      title: `${service.title} - Freelance DevOps Services`,
      description: service.summary,
    }
  };
}

const ICON_MAP: Record<string, React.ElementType> = {
  Workflow,
  Cloud,
  Boxes,
  FileCode2,
  ShieldCheck,
  Activity
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const IconComponent = ICON_MAP[service.iconName] || Cloud;

  // Next / Prev navigation
  const currentIndex = DETAILED_SERVICES.findIndex(s => s.slug === slug);
  const prevService = currentIndex > 0 ? DETAILED_SERVICES[currentIndex - 1] : DETAILED_SERVICES[DETAILED_SERVICES.length - 1];
  const nextService = currentIndex < DETAILED_SERVICES.length - 1 ? DETAILED_SERVICES[currentIndex + 1] : DETAILED_SERVICES[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
            <Link 
              href="/#services" 
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Consulting Services</span>
            </Link>

            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
              {service.badge}
            </span>
          </div>

          {/* Hero Section */}
          <div className="space-y-4 mb-12">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-950/30 mb-2">
              <IconComponent className="w-7 h-7" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-cyan-300 leading-relaxed">
              {service.subtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {service.summary}
            </p>

            {/* Target Client Pill */}
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400 font-mono">
              <span className="text-slate-500">BEST FOR:</span>
              <span className="text-slate-300 font-medium">{service.targetAudience}</span>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`/#contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-cyan-600/20"
              >
                <span>Discuss This Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Indicative: {service.startingEstimate}</span>
              </div>
            </div>
          </div>

          {/* Section 1: The Problem Clients Experience */}
          <section className="mb-14 p-7 sm:p-9 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>The Challenge You May Be Facing</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {service.problem.title}
              </h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {service.problem.description}
            </p>

            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Common Symptoms In Your Team:
              </span>
              {service.problem.symptoms.map((sym, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-rose-200 bg-rose-950/20 p-3 rounded-xl border border-rose-900/30">
                  <span className="text-rose-400 font-mono mt-0.5">⚠</span>
                  <span>{sym}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: What I Can Deliver & Solution */}
          <section className="mb-14 p-7 sm:p-9 rounded-2xl bg-[#0b1222] border border-cyan-500/30 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>My Implementation & Solution</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {service.solution.title}
              </h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {service.solution.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {service.solution.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Scope of Work */}
          <section className="mb-14 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Structured Engagement Phases
              </span>
              <h2 className="text-2xl font-bold text-white">
                Scope of Work & Milestones
              </h2>
            </div>

            <div className="space-y-4">
              {service.scopeOfWork.map((phase) => (
                <div key={phase.phase} className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-300">
                      {phase.phase}
                    </span>
                    <h3 className="text-base font-bold text-white">{phase.title}</h3>
                  </div>
                  <ul className="space-y-2 mt-2">
                    {phase.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <span className="text-cyan-400 font-mono mt-0.5">▸</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Concrete Deliverables */}
          <section className="mb-14 p-7 sm:p-9 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-6">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                What You Receive
              </span>
              <h2 className="text-2xl font-bold text-white">
                Concrete Deliverables & Assets
              </h2>
            </div>

            <div className="space-y-3">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Technologies Actually Used */}
          <section className="mb-14 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Tooling & Ecosystem
              </span>
              <h2 className="text-2xl font-bold text-white">
                Technologies Actually Used
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {service.technologies.map((t) => (
                <div key={t.name} className="p-4 rounded-xl bg-[#0b1222] border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-white font-mono block text-cyan-300">
                    {t.name}
                  </span>
                  <span className="text-[11px] text-slate-400 block leading-tight">
                    {t.role}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Expected Business Value */}
          <section className="mb-14 p-7 sm:p-9 rounded-2xl bg-gradient-to-br from-blue-950/40 via-cyan-950/20 to-slate-900 border border-cyan-500/30 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>ROI & Business Impact</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Expected Business Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.businessValue.map((bv, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <h3 className="text-sm font-bold text-white text-cyan-300">{bv.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{bv.description}</p>
                </div>
              ))}
            </div>

            {/* Pricing Transparency Callout */}
            <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-300">Indicative Pricing: </strong>
                <span>{service.startingEstimate}. Specific investment depends on your application architecture, number of services, and target cloud providers. Marked as an estimate and editable. Never promises guaranteed results.</span>
              </div>
            </div>
          </section>

          {/* Section 7: FAQs */}
          <section className="mb-14 space-y-6">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Got Questions?
              </span>
              <h2 className="text-2xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faq.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-cyan-400" />
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation Prev / Next Service */}
          <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/services/${prevService.slug}`}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col group"
            >
              <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400">← PREVIOUS SERVICE</span>
              <span className="text-xs font-bold text-white mt-1 group-hover:text-cyan-300">{prevService.title}</span>
            </Link>

            <Link
              href={`/services/${nextService.slug}`}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col sm:items-end text-left sm:text-right group"
            >
              <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400">NEXT SERVICE →</span>
              <span className="text-xs font-bold text-white mt-1 group-hover:text-cyan-300">{nextService.title}</span>
            </Link>
          </div>

          {/* Bottom Conversion Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-cyan-950/40 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">
                Ready to solve this in your engineering stack?
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Book a project discussion with K. Ayesha. We will review your current infrastructure and outline an exact roadmap.
              </p>
            </div>
            <a
              href={`/#contact?service=${encodeURIComponent(service.title)}`}
              className="whitespace-nowrap px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wide transition-all shadow-md shadow-blue-600/20"
            >
              Discuss a Project
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
