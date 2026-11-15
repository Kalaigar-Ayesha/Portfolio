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
    <div className="flex flex-col min-h-screen bg-[#04140d] text-emerald-100 selection:bg-emerald-500/30 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-emerald-900">
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Case Studies</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-950 border border-emerald-500/30 text-emerald-300">
                {project.category}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
                {project.status}
              </span>
            </div>
          </div>

          {/* Hero Header */}
          <div className="space-y-4 mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-emerald-300 leading-relaxed">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-emerald-400/80 pt-2">
              <span className="flex items-center gap-1.5 text-emerald-200">
                <span className="text-emerald-500">ROLE:</span>
                <span className="font-semibold text-white">{project.role}</span>
              </span>
              <span className="text-emerald-900">•</span>
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#072217] hover:bg-emerald-950 text-white text-xs font-semibold tracking-wide transition-all border border-emerald-900"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Inspect Repository on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              </a>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 text-xs font-bold tracking-wide transition-all shadow-md shadow-emerald-950/50"
              >
                <span>Discuss Similar Implementation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 1. Project Overview & Abstract */}
          <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#072217] border border-emerald-900/80">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>1. Project Overview</span>
            </h2>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              {project.summary}
            </p>
          </section>

          {/* 2 & 3. Business Problem & Why It Matters */}
          <section className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#072217] border border-emerald-900/80 space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>2. Engineering Problem</span>
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                {project.problem.statement}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#072217] border border-emerald-900/80 space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-2">
                <Info className="w-4 h-4" />
                <span>3. Why This Problem Matters</span>
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                {project.problem.whyItMatters}
              </p>
            </div>
          </section>

          {/* 4. Architecture Overview & Diagram */}
          <section className="mb-14 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>4. Architecture Overview</span>
              </h2>
              <span className="text-xs font-mono text-emerald-400/80">SVG Technical Topology</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#072217] border border-emerald-900/80 space-y-4">
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                {project.architecture.description}
              </p>

              {/* Render Architecture Diagram */}
              <div className="pt-4 border-t border-emerald-900/60">
                <ArchitectureDiagram type={project.architectureDiagramType} />
              </div>
            </div>
          </section>

          {/* 5. Technologies Actually Used */}
          <section className="mb-14 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              <span>5. Verified Technologies Actually Used</span>
            </h2>

            <div className="p-6 rounded-2xl bg-[#072217] border border-emerald-900/80">
              <div className="space-y-4">
                {project.technologies.map((group) => (
                  <div key={group.category} className="space-y-2">
                    <span className="text-xs font-mono text-emerald-400 font-bold block">{group.category}</span>
                    <div className="flex flex-wrap gap-2">
                      {group.tools.map((t) => (
                        <span 
                          key={t.name}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#04140d] border border-emerald-900 text-emerald-300"
                        >
                          {t.name} • {t.role}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. My Implementation */}
          <section className="mb-14 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>6. Technical Implementation</span>
            </h2>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#072217] border border-emerald-900/80 space-y-4">
              {project.implementation.map((step, idx) => (
                <div key={idx} className="space-y-1.5 pb-3 border-b border-emerald-900/60 last:border-b-0">
                  <span className="text-xs font-mono text-emerald-400 font-bold block">
                    {step.phase}: {step.title}
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Important Technical Decisions */}
          <section className="mb-14 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              <span>7. Important Technical Decisions</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.technicalDecisions.map((decision, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#072217] border border-emerald-900/80 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-white">{decision.decision}</h3>
                  </div>
                  <p className="text-xs text-emerald-100/70 leading-relaxed pl-7">
                    {decision.rationale}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Challenges Encountered */}
          <section className="mb-14 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>8. Engineering Challenges Encountered & Overcome</span>
            </h2>

            <div className="space-y-4">
              {project.challenges.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#072217] border border-emerald-900/80 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-red-950/40 border border-red-800/40 text-red-400 shrink-0">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider block">Obstacle:</span>
                      <h3 className="text-sm font-bold text-white">{item.challenge}</h3>
                    </div>
                  </div>
                  <div className="pl-9 pt-2 border-t border-emerald-900/60">
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">Resolution:</span>
                    <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">{item.resolution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Security & Reliability Considerations */}
          <section className="mb-14 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>9. Security & Reliability Considerations</span>
            </h2>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#072217] border border-emerald-900/80 space-y-4">
              {project.securityAndReliability.map((sec, idx) => (
                <div key={idx} className="space-y-1.5 pb-3 border-b border-emerald-900/60 last:border-b-0">
                  <h3 className="text-xs font-bold text-emerald-300 font-mono">{sec.category}</h3>
                  <div className="space-y-1">
                    {sec.measures.map((m, mIdx) => (
                      <div key={mIdx} className="text-xs text-emerald-100/80 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 10. Results & Measurable Outcomes */}
          <section className="mb-14 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>10. Results & Verified Outcomes</span>
            </h2>

            <div className="p-6 rounded-2xl bg-[#072217] border border-emerald-900/80 space-y-2">
              {project.results.verifiedOutcomes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Prev / Next Navigation */}
          <div className="pt-8 border-t border-emerald-900/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-4 rounded-xl bg-[#072217] border border-emerald-900/80 hover:border-emerald-500/50 transition-all flex flex-col group"
            >
              <span className="text-[11px] font-mono text-emerald-400/80 group-hover:text-emerald-300">← PREVIOUS CASE STUDY</span>
              <span className="text-xs font-bold text-white mt-1 group-hover:text-emerald-300">{prevProject.title}</span>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-4 rounded-xl bg-[#072217] border border-emerald-900/80 hover:border-emerald-500/50 transition-all flex flex-col sm:items-end text-left sm:text-right group"
            >
              <span className="text-[11px] font-mono text-emerald-400/80 group-hover:text-emerald-300">NEXT CASE STUDY →</span>
              <span className="text-xs font-bold text-white mt-1 group-hover:text-emerald-300">{nextProject.title}</span>
            </Link>
          </div>

          {/* Bottom Conversion Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-[#072217] border border-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">
                Need similar engineering execution?
              </h3>
              <p className="text-xs text-emerald-100/70 max-w-xl">
                Reach out to discuss your cloud infrastructure, cost optimization, or DevSecOps requirements.
              </p>
            </div>
            <Link
              href="/#contact"
              className="whitespace-nowrap px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md"
            >
              Contact for Project Collab
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
