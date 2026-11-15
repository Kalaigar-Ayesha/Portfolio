import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CASE_STUDIES, getCaseStudyBySlug } from '@/data/caseStudiesData';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import { GitHubIcon } from '@/components/SocialIcons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Wrench, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight,
  GitBranch,
  Terminal,
  Info
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found | K. Ayesha' };
  }

  return {
    title: `${project.title} | DevOps & Cloud Case Study | K. Ayesha`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - Engineering Case Study`,
      description: project.summary,
    }
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next and prev case studies
  const currentIndex = CASE_STUDIES.findIndex(c => c.slug === slug);
  const prevProject = currentIndex > 0 ? CASE_STUDIES[currentIndex - 1] : CASE_STUDIES[CASE_STUDIES.length - 1];
  const nextProject = currentIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[currentIndex + 1] : CASE_STUDIES[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Case Studies Library</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-300">
                {project.category}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                {project.status}
              </span>
            </div>
          </div>

          {/* Hero Header */}
          <div className="space-y-4 mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-cyan-300 leading-relaxed">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="text-slate-500">ENGINEERING ROLE:</span>
                <span className="font-semibold text-white">{project.role}</span>
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Repository Work</span>
              </span>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={project.verifiedRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold tracking-wide transition-all border border-slate-700"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Inspect Repository on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-blue-600/20"
              >
                <span>Discuss Similar Implementation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 1. Project Overview & Abstract */}
          <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#0b1222] border border-slate-800">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>01 // Project Overview</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* 2. Business & Engineering Problem */}
          <section className="mb-14 space-y-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>02 // The Engineering & Business Challenge</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {project.problem.statement}
              </h3>
            </div>

            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-900/30 text-xs sm:text-sm text-rose-200 leading-relaxed">
              <strong className="text-rose-100 font-semibold block mb-1">Why This Matters:</strong>
              {project.problem.whyItMatters}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.problem.impactAreas.map((impact, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2.5">
                  <span className="text-rose-400 font-mono mt-0.5">•</span>
                  <span className="text-xs text-slate-300 leading-relaxed">{impact}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 3. System Architecture & Diagram */}
          <section className="mb-14 space-y-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>03 // System Architecture & Data Flow</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Architectural Breakdown
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {project.architecture.description}
            </p>

            {/* Interactive Architecture Diagram */}
            <ArchitectureDiagram type={project.architectureDiagramType} />
            <p className="text-xs text-slate-500 font-mono italic">
              {project.architecture.diagramCaption}
            </p>

            {/* Components Table */}
            <div className="rounded-xl border border-slate-800 overflow-hidden bg-[#090e1a]">
              <div className="px-4 py-3 bg-[#0d1424] border-b border-slate-800 text-xs font-mono font-semibold text-white">
                System Component Topology
              </div>
              <div className="divide-y divide-slate-800/80">
                {project.architecture.components.map((comp) => (
                  <div key={comp.name} className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-2 text-xs">
                    <span className="sm:col-span-4 font-mono font-bold text-cyan-300">{comp.name}</span>
                    <span className="sm:col-span-5 text-slate-300">{comp.purpose}</span>
                    <span className="sm:col-span-3 font-mono text-slate-400 sm:text-right">{comp.tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Flow List */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Execution Data Flow:
              </span>
              {project.architecture.dataFlow.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                  <span className="text-cyan-400 font-mono font-semibold">{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Technologies Actually Used */}
          <section className="mb-14 space-y-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                <span>04 // Technologies Actually Used</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Technical Stack & Library Breakdown
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.technologies.map((group) => (
                <div key={group.category} className="p-5 rounded-xl bg-[#0b1222] border border-slate-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 pb-2 border-b border-slate-800">
                    {group.category}
                  </h4>
                  <div className="space-y-3">
                    {group.tools.map((tool) => (
                      <div key={tool.name} className="space-y-0.5">
                        <span className="text-xs font-bold text-slate-200 block">{tool.name}</span>
                        <span className="text-[11px] text-slate-400 block leading-tight">{tool.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Implementation Walkthrough */}
          <section className="mb-14 space-y-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                <span>05 // Step-by-Step Implementation</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How It Was Engineered
              </h3>
            </div>

            <div className="space-y-6">
              {project.implementation.map((phase) => (
                <div key={phase.phase} className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-500/30 text-cyan-300">
                      {phase.phase}
                    </span>
                    <h4 className="text-base font-bold text-white">{phase.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {phase.details}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Technical Decisions & Tradeoffs */}
          <section className="mb-14 space-y-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>06 // Important Technical Decisions</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Architectural Trade-Off Analysis
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.technicalDecisions.map((dec, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white text-cyan-300">{dec.decision}</h4>
                  <div className="space-y-2 text-xs">
                    <p className="text-slate-300 leading-relaxed">
                      <strong className="text-slate-200">Rationale: </strong>{dec.rationale}
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      <strong className="text-slate-300">Trade-off: </strong>{dec.tradeoffs}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Challenges & Resolutions */}
          <section className="mb-14 space-y-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>07 // Challenges Encountered & Overcome</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Production Edge Cases Solved
              </h3>
            </div>

            <div className="space-y-4">
              {project.challenges.map((ch, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#0b1222] border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono text-rose-300 font-bold">
                    PROBLEM: {ch.challenge}
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-300 leading-relaxed">
                    <strong className="text-emerald-400">RESOLUTION: </strong>{ch.resolution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Security & Reliability Considerations */}
          <section className="mb-14 space-y-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>08 // Security & Reliability Considerations</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Production Hardening
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.securityAndReliability.map((sec) => (
                <div key={sec.category} className="p-5 rounded-xl bg-[#0b1222] border border-slate-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 pb-2 border-b border-slate-800">
                    {sec.category}
                  </h4>
                  <ul className="space-y-2">
                    {sec.measures.map((m, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Verified Results & Outcomes */}
          <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950/40 via-cyan-950/30 to-slate-900 border border-cyan-500/30 space-y-5">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-1 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>09 // Verified Results & Measurable Outcomes</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Technical Deliverables & Veracity Standards
              </h3>
            </div>

            <div className="space-y-2.5">
              {project.results.verifiedOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>

            {/* Veracity Notice on Metrics */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-300">Metrics Notice: </strong>
                <span>{project.results.metricsPlaceholder}</span>
              </p>
            </div>
          </section>

          {/* Project Navigation Prev/Next */}
          <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col group"
            >
              <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400">← PREVIOUS CASE STUDY</span>
              <span className="text-xs font-bold text-white mt-1 group-hover:text-cyan-300">{prevProject.title}</span>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col sm:items-end text-left sm:text-right group"
            >
              <span className="text-[11px] font-mono text-slate-500 group-hover:text-cyan-400">NEXT CASE STUDY →</span>
              <span className="text-xs font-bold text-white mt-1 group-hover:text-cyan-300">{nextProject.title}</span>
            </Link>
          </div>

          {/* Sticky Bottom Project Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-[#0b1222] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white">
                Interested in this architecture for your systems?
              </h4>
              <p className="text-xs text-slate-300">
                Let&apos;s evaluate your current infrastructure and map out an automation or reliability plan.
              </p>
            </div>
            <Link
              href="/#contact"
              className="whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs tracking-wide transition-all shadow-md shadow-blue-600/20"
            >
              Discuss a Project
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
