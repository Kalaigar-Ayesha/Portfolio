import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-[#244b3a] bg-[#0d1f17]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70 font-mono">
        <div>
          © {currentYear} {PERSONAL_INFO.name}. DevOps & Multi-Cloud Infrastructure.
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`tel:${PERSONAL_INFO.phoneRaw}`}
            className="hover:text-[#34d399] transition-colors"
          >
            {PERSONAL_INFO.phone}
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#34d399] transition-colors"
          >
            {PERSONAL_INFO.email}
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#34d399] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#34d399] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
