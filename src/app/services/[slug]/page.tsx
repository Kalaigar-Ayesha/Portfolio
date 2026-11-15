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
  Workflow, 
  Cloud, 
  Boxes, 
  ShieldCheck, 
  Activity, 
  TrendingUp,
  HelpCircle
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
  FileCode2: Cloud,
  ShieldCheck,
  Activity
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = ICON_MAP[service.iconName] || Cloud;

  const currentIndex = DETAILED_SERVICES.findIndex((s) => s.slug === service.slug);
  const nextService = DETAILED_SERVICES[(currentIndex + 1) % DETAILED_SERVICES.length];
  const prevService = DETAILED_SERVICES[(currentIndex - 1 + DETAILED_SERVICES.length) % DETAILED_SERVICES.length];

  return (
    <div className="flex flex-col min-h-screen bg-[#04140d] text-emerald-100 selection:bg-emerald-500/30 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Services Catalog</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono text-emerald-300">Open for Contracts</span>
            </div>
          </div>

          {/* Service Hero Header */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#072217] border border-emerald-900/80 mb-12 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                {service.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed font-normal">
              {service.summary}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                href="/#contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-lg"
              >
                Contact for Project Collab
              </Link>
            </div>
          </div>

          {/* Section 1: The Problem You May Be Experiencing */}
          <section className="mb-14 space-y-4">
            <h2 className="text-2xl font-bold text-white">
              The Problem You May Be Experiencing
            </h2>
            <div className="p-6 sm:p-7 rounded-2xl bg-red-950/20 border border-red-900/30 text-emerald-100 leading-relaxed text-sm">
              <p>{service.problem.description}</p>
            </div>
          </section>

          {/* Section 2: What I Deliver */}
          <section className="mb-14 space-y-4">
            <h2 className="text-2xl font-bold text-white">
              What I Deliver
            </h2>
            <div className="p-6 sm:p-7 rounded-2xl bg-[#072217] border border-emerald-900/80 text-emerald-100/90 leading-relaxed text-sm space-y-3">
              <p>{service.solution.description}</p>
            </div>
          </section>

          {/* Section 3: Scope of Work */}
          <section className="mb-14 space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Scope of Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.scopeOfWork.map((scope, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#072217] border border-emerald-900/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
                    <span>PHASE {scope.phase}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white">{scope.title}</h3>
                  <div className="space-y-1">
                    {scope.tasks.map((task, tIdx) => (
                      <div key={tIdx} className="text-xs text-emerald-100/70 flex items-start gap-1.5">
                        <span className="text-emerald-400">•</span>
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Tangible Deliverables */}
          <section className="mb-14 space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Tangible Deliverables
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliverables.map((del, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#072217] border border-emerald-900/80 space-y-1.5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-white">{del}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Technologies Actually Used */}
          <section className="mb-14 space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Technologies Actually Used
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {service.technologies.map((t) => (
                <div key={t.name} className="p-4 rounded-xl bg-[#072217] border border-emerald-900/80 space-y-1">
                  <span className="text-xs font-bold text-white font-mono block text-emerald-300">
                    {t.name}
                  </span>
                  <span className="text-[11px] text-emerald-100/70 block leading-tight">
                    {t.role}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Expected Business Value */}
          <section className="mb-14 p-7 sm:p-9 rounded-2xl bg-[#072217] border border-emerald-900 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>ROI & Business Impact</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Expected Business Outcomes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.businessValue.map((bv, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#04140d] border border-emerald-950 space-y-2">
                  <h3 className="text-sm font-bold text-emerald-300">{bv.title}</h3>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">{bv.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: FAQs */}
          <section className="mb-14 space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faq.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#072217] border border-emerald-900/80 space-y-2">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-400" />
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed pl-6">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation Prev / Next Service */}
          <div className="pt-8 border-t border-emerald-900/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/services/${prevService.slug}`}
              className="p-4 rounded-xl bg-[#072217] border border-emerald-900/80 hover:border-emerald-500/50 transition-all flex flex-col group"
            >
              <span className="text-[11px] font-mono text-emerald-400/80 group-hover:text-emerald-300">← PREVIOUS SERVICE</span>
              <span className="text-xs font-bold text-white mt-1 group-hover:text-emerald-300">{prevService.title}</span>
            </Link>

            <Link
              href={`/services/${nextService.slug}`}
              className="p-4 rounded-xl bg-[#072217] border border-emerald-900/80 hover:border-emerald-500/50 transition-all flex flex-col sm:items-end text-left sm:text-right group"
            >
              <span className="text-[11px] font-mono text-emerald-400/80 group-hover:text-emerald-300">NEXT SERVICE →</span>
              <span className="text-xs font-bold text-white mt-1 group-hover:text-emerald-300">{nextService.title}</span>
            </Link>
          </div>

          {/* Bottom Conversion Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-[#072217] border border-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">
                Ready to optimize this in your engineering stack?
              </h3>
              <p className="text-xs text-emerald-100/70 max-w-xl">
                Reach out to K. Ayesha via phone, email, or LinkedIn to review your infrastructure.
              </p>
            </div>
            <Link
              href="/#contact"
              className="whitespace-nowrap px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md"
            >
              Contact for Collab
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
