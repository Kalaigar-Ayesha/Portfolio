'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  Menu, 
  X, 
  ArrowUpRight
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
    { label: 'Case Studies', href: '/#projects' },
    { label: 'Capabilities', href: '/#capabilities' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#04140d]/90 backdrop-blur-md border-b border-emerald-950/80 shadow-lg shadow-black/30 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-800/40 to-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-all">
              <Terminal className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                K. Ayesha
              </span>
              <span className="text-[11px] font-mono tracking-wider text-emerald-400/80">
                FINOPS // SEC // CLOUD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#072217]/80 border border-emerald-900/60 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-emerald-100/80 hover:text-emerald-300 hover:bg-emerald-950/70 rounded-full transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action CTA & Status Indicator */}
          <div className="hidden md:flex items-center gap-4">
            {/* Availability Beacon */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Client Projects</span>
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 text-xs font-bold tracking-wide transition-all shadow-md shadow-emerald-900/30 hover:shadow-emerald-500/25 active:scale-95"
            >
              <span>Contact for Collab</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/#contact"
              className="px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold"
            >
              Collab
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#072217] border border-emerald-800/80 text-emerald-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-emerald-900/80 bg-[#04140d]/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-emerald-100 hover:bg-emerald-950/80 hover:text-emerald-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="pt-4 border-t border-emerald-950 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Client Projects</span>
            </div>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg bg-emerald-500 text-slate-950 text-center text-xs font-bold"
            >
              Contact for Project Collab
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
