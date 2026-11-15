'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { LinkedInIcon } from '@/components/SocialIcons';
import { trackEvent } from '@/lib/analytics';
import { 
  Phone, 
  Mail, 
  Copy, 
  Check, 
  MessageSquare, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [inquiryReceipt, setInquiryReceipt] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    trackEvent('email_click', { action: 'copy_to_clipboard' });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setStatus('loading');
    setFeedbackMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setInquiryReceipt(data.inquiryId);
        setFeedbackMsg(data.message);
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
        setFeedbackMsg(data.error || 'Failed to submit. Please reach out directly via email.');
      }
    } catch {
      setStatus('error');
      setFeedbackMsg('Network error. Please email directly at ' + PERSONAL_INFO.email);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0e2a1d] relative border-t border-emerald-700/60">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-tr from-emerald-500/20 via-green-400/15 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#143d2b] border border-emerald-600/50 text-emerald-200 text-xs font-mono tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>PROJECT COLLABORATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Let&apos;s Discuss Your Infrastructure
          </h2>
          <p className="mt-2 text-sm text-emerald-100/90 max-w-2xl">
            Available for freelance and contract engagements. Reach out directly through phone, email, or LinkedIn to review cloud costs, security, or CI/CD pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Phone, Email & LinkedIn Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone & WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-[#143d2b] border border-emerald-700/70 hover:border-emerald-400 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0e2a1d] border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider block font-semibold">Direct Phone & WhatsApp</span>
                    <span className="text-base font-bold text-white font-mono tracking-wide">{PERSONAL_INFO.phone}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-emerald-700/60">
                <a
                  href={`tel:${PERSONAL_INFO.phoneRaw}`}
                  className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-bold text-xs text-center transition-all shadow-sm"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/91${PERSONAL_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-lg bg-[#0e2a1d] border border-emerald-600 hover:border-emerald-400 text-emerald-200 text-xs font-mono transition-all"
                >
                  WhatsApp
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="py-2 px-3 rounded-lg bg-[#0e2a1d] border border-emerald-600 hover:border-emerald-400 text-emerald-200 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#143d2b] border border-emerald-700/70 hover:border-emerald-400 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0e2a1d] border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider block font-semibold">Direct Email</span>
                    <span className="text-sm font-bold text-white font-mono break-all">{PERSONAL_INFO.email}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-emerald-700/60">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Collaboration`}
                  className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-bold text-xs text-center transition-all shadow-sm"
                >
                  Send Email
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="py-2 px-3 rounded-lg bg-[#0e2a1d] border border-emerald-600 hover:border-emerald-400 text-emerald-200 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 rounded-2xl bg-[#143d2b] border border-emerald-700/70 hover:border-emerald-400 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0e2a1d] border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider block font-semibold">LinkedIn Profile</span>
                    <span className="text-sm font-bold text-white">K. Ayesha</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-emerald-700/60">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-bold text-xs text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Message on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-xl bg-[#143d2b] border border-emerald-700/60 text-xs text-emerald-200 flex items-center gap-2.5 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Replies within 24 business hours • Clear technical roadmaps</span>
            </div>

          </div>

          {/* Right Column: Quick Minimal Message Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#143d2b] border border-emerald-700/70 p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-white mb-1">
              Send a Quick Message
            </h3>
            <p className="text-xs text-emerald-100/80 mb-6">
              Drop a note about your cloud infrastructure or project requirements.
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-[#0e2a1d] border border-emerald-500/60 space-y-3">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Message Received</span>
                </div>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  {feedbackMsg}
                </p>
                <div className="pt-3 border-t border-emerald-700 text-[11px] font-mono text-emerald-300">
                  Receipt Ref: <span className="text-white font-bold">{inquiryReceipt}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs font-mono text-emerald-300 underline hover:text-white cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot anti-spam trap */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-emerald-200 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2a1d] border border-emerald-600/70 focus:border-emerald-300 focus:outline-none text-xs text-white placeholder-emerald-400/60 shadow-inner"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-emerald-200 font-medium">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2a1d] border border-emerald-600/70 focus:border-emerald-300 focus:outline-none text-xs text-white placeholder-emerald-400/60 shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-emerald-200 font-medium">Message / Project Goal *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="We need to optimize our cloud spend and set up automated CI/CD for our containerized application..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0e2a1d] border border-emerald-600/70 focus:border-emerald-300 focus:outline-none text-xs text-white placeholder-emerald-400/60 resize-none shadow-inner"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-300 font-mono">{feedbackMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-emerald-950/40 disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
