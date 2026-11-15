'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { LinkedInIcon, GitHubIcon } from '@/components/SocialIcons';
import { 
  Terminal, 
  Menu, 
  X, 
  ArrowUpRight, 
  Mail
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Pricing & Packages', href: '/#pricing' },
    { label: 'Case Studies', href: '/#projects' },
    { label: 'Capabilities', href: '/#capabilities' },
    { label: 'Approach', href: '/#approach' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-all">
              <Terminal className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                K. Ayesha
              </span>
              <span className="text-[11px] font-mono tracking-wider text-slate-400">
                DEVOPS // CLOUD // SEC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-full transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA & Status Indicator */}
          <div className="hidden md:flex items-center gap-4">
            {/* Availability Beacon */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Client Projects</span>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-blue-600/20 hover:shadow-cyan-500/25 active:scale-95"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/#contact"
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500"
            >
              Hire Me
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 px-3 py-2 mb-3 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Freelance & Contract Projects</span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium text-sm text-center"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
                aria-label="GitHub profile"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
                aria-label="Direct Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
