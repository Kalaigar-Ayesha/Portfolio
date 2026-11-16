import React, { useState } from 'react';
import { Phone, Mail, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-semibold mb-2 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Collaboration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Get in Touch for Project Work
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Reach out directly by phone, WhatsApp, email, or LinkedIn to discuss cloud cost reduction, Kubernetes migrations, or CI/CD pipelines.
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D1FFBD] border border-emerald-300 flex items-center justify-center text-emerald-950">
                  <Phone className="w-5 h-5 text-emerald-900" />
                </div>
                <span className="text-[11px] font-mono font-medium text-emerald-800 bg-[#D1FFBD]/60 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Direct Call
                </span>
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-500 font-medium">
                Phone Number
              </h3>
              <div className="mt-1 text-base font-bold text-slate-900">
                {PERSONAL_INFO.phone}
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Available for urgent calls & project discussions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
              <a
                href={`tel:${PERSONAL_INFO.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D1FFBD]" />
                <span>Call Now</span>
              </a>
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 hover:border-emerald-300 transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D1FFBD] border border-emerald-300 flex items-center justify-center text-emerald-950">
                  <MessageSquare className="w-5 h-5 text-emerald-900" />
                </div>
                <span className="text-[11px] font-mono font-medium text-emerald-800 bg-[#D1FFBD]/60 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Fast Response
                </span>
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-500 font-medium">
                WhatsApp Chat
              </h3>
              <div className="mt-1 text-base font-bold text-slate-900">
                {PERSONAL_INFO.phone}
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Quick project questions, scopes & async updates.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/91${PERSONAL_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#D1FFBD] hover:bg-[#bbf7d0] border border-emerald-300 text-emerald-950 text-xs font-semibold transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-800" />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D1FFBD] border border-emerald-300 flex items-center justify-center text-emerald-950">
                  <Mail className="w-5 h-5 text-emerald-900" />
                </div>
                <span className="text-[11px] font-mono font-medium text-emerald-800 bg-[#D1FFBD]/60 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Email
                </span>
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-500 font-medium">
                Direct Email
              </h3>
              <div className="mt-1 text-sm font-bold text-slate-900 truncate" title={PERSONAL_INFO.email}>
                {PERSONAL_INFO.email}
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Send RFPs, architecture specs & inquiries.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#D1FFBD]" />
                <span>Send Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 hover:border-emerald-300 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700">
                  <LinkedInIcon className="w-5 h-5 text-blue-700" />
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Professional
                </span>
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-500 font-medium">
                LinkedIn Profile
              </h3>
              <div className="mt-1 text-base font-bold text-slate-900">
                kalaigarayesha
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Connect for professional networking & contracts.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold hover:border-emerald-300 transition-colors"
              >
                <span>View LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 transition-all shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                  <GitHubIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Code & Configs
                </span>
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-500 font-medium">
                GitHub Repositories
              </h3>
              <div className="mt-1 text-base font-bold text-slate-900">
                Kalaigar-Ayesha
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Inspect Dockerfiles, Helm charts & Terraform code.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold hover:border-emerald-300 transition-colors"
              >
                <span>View GitHub Repos</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
