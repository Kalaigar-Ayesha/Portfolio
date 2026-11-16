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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0d1f17]/95 backdrop-blur-md border-b border-[#244b3a] shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#19382b] border border-[#2f604b] flex items-center justify-center font-mono font-bold text-sm text-[#34d399] group-hover:border-[#34d399] transition-colors">
            KA
          </div>
          <div>
            <div className="font-semibold text-sm text-slate-100 group-hover:text-[#34d399] transition-colors leading-tight">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] font-mono text-[#a7f3d0]">
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
              className="text-xs font-medium text-slate-300 hover:text-[#34d399] transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#19382b] border border-[#2f604b] hover:border-[#34d399] text-xs font-mono text-emerald-200 hover:text-white transition-colors"
            title="Call directly"
          >
            <Phone className="w-3.5 h-3.5 text-[#34d399]" />
            <span>{PERSONAL_INFO.phoneRaw}</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#10b981] hover:bg-[#34d399] text-[#062316] text-xs font-semibold transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#19382b] border border-[#2f604b] text-slate-200"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1f17] border-b border-[#244b3a] px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-[#19382b] hover:text-[#34d399]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#244b3a] flex flex-col gap-2">
            <a
              href={`tel:${PERSONAL_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-[#19382b] border border-[#2f604b] text-xs font-mono text-emerald-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#34d399]" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2 rounded-lg bg-[#10b981] text-[#062316] text-xs font-semibold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
