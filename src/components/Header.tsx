import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Header() {
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
    { name: 'Projects', href: '#projects' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#D1FFBD] border border-emerald-300 flex items-center justify-center font-mono font-bold text-sm text-emerald-950 group-hover:scale-105 transition-transform shadow-xs">
            KA
          </div>
          <div>
            <div className="font-semibold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              DevOps & Multi-Cloud
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-600 hover:text-emerald-700 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D1FFBD] border border-emerald-300 hover:bg-[#bbf7d0] text-xs font-mono font-medium text-emerald-950 transition-colors"
            title="Call directly"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-800" />
            <span>{PERSONAL_INFO.phoneRaw}</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors shadow-xs"
          >
            <Mail className="w-3.5 h-3.5 text-[#D1FFBD]" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${PERSONAL_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-[#D1FFBD] border border-emerald-300 text-xs font-mono font-semibold text-emerald-950"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-800" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold"
            >
              <Mail className="w-3.5 h-3.5 text-[#D1FFBD]" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
