import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TargetAudience from '@/components/TargetAudience';
import ProblemsSolved from '@/components/ProblemsSolved';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#04140d] text-emerald-100 selection:bg-emerald-500/30 selection:text-white">
      {/* 1. Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section: Cost Optimization & Secure Infra */}
        <Hero />

        {/* 3. Who I Work With */}
        <TargetAudience />

        {/* 4. High-Cost Problems I Solve */}
        <ProblemsSolved />

        {/* 5. Core Services */}
        <Services />

        {/* 6. Verified Case Studies */}
        <Projects />

        {/* 7. Technical Capabilities */}
        <Skills />

        {/* 8. Professional Experience */}
        <Experience />

        {/* 9. Engineering Methodology */}
        <Approach />

        {/* 10. Direct Project Collaboration (Phone, Email, LinkedIn) */}
        <Contact />
      </main>

      {/* 11. Engineering Footer */}
      <Footer />
    </div>
  );
}
