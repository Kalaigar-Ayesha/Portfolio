import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TargetAudience from '@/components/TargetAudience';
import ProblemsSolved from '@/components/ProblemsSolved';
import Services from '@/components/Services';
import EngagementOptions from '@/components/EngagementOptions';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#070b14] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      {/* 1. Premium Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section with Powerful Headline */}
        <Hero />

        {/* 3. Who I Help (Target Clients: SaaS, Agencies, Founders, CTOs) */}
        <TargetAudience />

        {/* 4. Business Problems I Solve */}
        <ProblemsSolved />

        {/* 5. Core Consulting Services */}
        <Services />

        {/* 6. Three Clear Engagement Options & Pricing Packages */}
        <EngagementOptions />

        {/* 7. Featured Engineering Case Studies Library */}
        <Projects />

        {/* 8. Technical Capabilities Matrix */}
        <Skills />

        {/* 9. Professional Experience & Track Record */}
        <Experience />

        {/* 10. Engineering Approach (How I Work) */}
        <Approach />

        {/* 11. Testimonials (Client Feedback Placeholders) */}
        <Testimonials />

        {/* 12. Strong Contact & Project Inquiry System */}
        <Contact />
      </main>

      {/* 13. Professional Engineering Footer */}
      <Footer />
    </div>
  );
}
