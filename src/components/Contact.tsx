'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { LinkedInIcon, GitHubIcon } from '@/components/SocialIcons';
import { trackEvent } from '@/lib/analytics';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  ShieldCheck, 
  Calendar,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AWS Cloud Infrastructure',
    budget: '$1,500 - $3,500 [Estimated]',
    timeline: 'Within 2-4 weeks',
    contactMethod: 'Email',
    message: '',
    honeypot: '' // Anti-bot honeypot field
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [inquiryReceipt, setInquiryReceipt] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Pre-fill from URL params if present (e.g. ?service=... or ?package=...)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const svcParam = params.get('service');
      const pkgParam = params.get('package');
      if (svcParam || pkgParam) {
        const timer = setTimeout(() => {
          if (svcParam) {
            setFormData(prev => ({ ...prev, service: svcParam, message: `Hi Ayesha, I would like to discuss ${svcParam} for our stack.` }));
          } else if (pkgParam) {
            setFormData(prev => ({ ...prev, service: pkgParam, message: `Hi Ayesha, I am interested in the ${pkgParam} engagement model.` }));
          }
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    trackEvent('email_click', { action: 'copy_to_clipboard' });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSocialClick = (platform: 'github' | 'linkedin') => {
    if (platform === 'github') trackEvent('github_click', { source: 'contact_section' });
    if (platform === 'linkedin') trackEvent('linkedin_click', { source: 'contact_section' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: if bot filled this, silently ignore
    if (formData.honeypot) {
      setStatus('success');
      setFeedbackMsg('Your message has been processed.');
      return;
    }

    setStatus('loading');
    setFeedbackMsg('');
    setInquiryReceipt('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline,
          contactMethod: formData.contactMethod,
          message: formData.message
        })
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFeedbackMsg(data.message || 'Inquiry submitted successfully! I will reach out within 24 business hours.');
        if (data.inquiryId) {
          setInquiryReceipt(data.inquiryId);
        }

        // Track conversion event
        trackEvent('contact_form_submit', {
          service: formData.service,
          budget: formData.budget,
          contactMethod: formData.contactMethod,
          company: formData.company || 'Not specified'
        });

        setFormData({
          name: '',
          email: '',
          company: '',
          service: 'AWS Cloud Infrastructure',
          budget: '$1,500 - $3,500 [Estimated]',
          timeline: 'Within 2-4 weeks',
          contactMethod: 'Email',
          message: '',
          honeypot: ''
        });
      } else {
        setStatus('error');
        setFeedbackMsg(data.error || 'Something went wrong. Please email directly.');
      }
    } catch {
      setStatus('error');
      setFeedbackMsg('Network connection error. Please email directly at kalaigarayesha@gmail.com');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#070b14] relative border-t border-slate-900">
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider mb-4">
            <Send className="w-3.5 h-3.5" />
            <span>START A PROJECT // CLIENT ACQUISITION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Let&apos;s Build Reliable Cloud Infrastructure For Your Team
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Ready to eliminate manual deployment friction, optimize your AWS cloud costs, or harden container security? Tell me about your project requirements below.
          </p>
        </div>

        {/* 2-Column Grid: Form & Direct Contact Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels & SLA Reassurances */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="rounded-2xl bg-[#0b1222] border border-slate-800 p-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Direct Contact Channel
              </span>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-200 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white flex items-center gap-1 transition-all"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Turnaround & SLA Trust Card */}
            <div className="rounded-2xl bg-[#0b1222] border border-slate-800 p-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Client Commitments & SLA
              </span>
              
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">&lt; 24-Hour Business Day Response</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      I review inquiries promptly and reply with actionable technical questions or a preliminary proposal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Strict NDA & Confidentiality</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Your architecture diagrams, cloud credentials, and source repositories remain strictly private.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Flexible Contract Terms</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Choose between fixed-scope milestones, hourly advisory, or monthly fractional retainers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Social Profiles */}
            <div className="rounded-2xl bg-[#0b1222] border border-slate-800 p-6 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Verified Professional Profiles
              </span>
              
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick('linkedin')}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <LinkedInIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick('github')}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-medium"
                >
                  <GitHubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0b1222] border border-slate-800 p-7 sm:p-9 shadow-xl shadow-cyan-950/20">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">
                  Discuss a Project & Get an Estimate
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Share your requirements to receive a scope breakdown, timeline estimate, and next steps.
                </p>
              </div>

              {/* Success Notification with Real Inquiry ID */}
              {status === 'success' && (
                <div className="mb-6 p-5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>INQUIRY REGISTERED SUCCESSFULLY</span>
                  </div>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    {feedbackMsg}
                  </p>
                  {inquiryReceipt && (
                    <div className="text-[11px] font-mono text-emerald-400/80 pt-1">
                      Tracking Reference: <span className="bg-emerald-900/40 px-2 py-0.5 rounded">{inquiryReceipt}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Error Notification */}
              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-rose-200 leading-relaxed">
                    {feedbackMsg}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot field (hidden from real users, caught by bots) */}
                <input
                  type="text"
                  name="website_hp"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: 'none', position: 'absolute', opacity: 0 }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-slate-300">
                      Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-slate-300">
                      Business Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="sarah@yourcompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Company Name & Preferred Contact Method */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-xs font-medium text-slate-300">
                      Company / Startup Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="e.g. CloudScale SaaS"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contactMethod" className="text-xs font-medium text-slate-300">
                      Preferred Contact Method <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="contactMethod"
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs text-white outline-none transition-all cursor-pointer"
                    >
                      <option value="Email">Email</option>
                      <option value="Google Meet / Video Call">Google Meet / Video Call</option>
                      <option value="LinkedIn Direct Message">LinkedIn Direct Message</option>
                    </select>
                  </div>
                </div>

                {/* Service Needed & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs font-medium text-slate-300">
                      Service / Scope Needed
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs text-white outline-none transition-all cursor-pointer"
                    >
                      <option value="CI/CD Pipeline Automation">CI/CD Pipeline Automation</option>
                      <option value="AWS Cloud Infrastructure">AWS Cloud Infrastructure</option>
                      <option value="Docker & Kubernetes Orchestration">Docker & Kubernetes Orchestration</option>
                      <option value="Infrastructure as Code (Terraform)">Infrastructure as Code (Terraform)</option>
                      <option value="DevSecOps & Security Hardening">DevSecOps & Security Hardening</option>
                      <option value="Monitoring & Reliability (SRE)">Monitoring & Reliability (SRE)</option>
                      <option value="Small Fixed-Scope Project">Small Fixed-Scope Project</option>
                      <option value="Project-Based Implementation">Project-Based Implementation</option>
                      <option value="Ongoing Freelance Retainer">Ongoing Freelance Retainer</option>
                      <option value="General Architecture Consultation">General Architecture Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="budget" className="text-xs font-medium text-slate-300">
                      Estimated Budget Range (Optional)
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs text-white outline-none transition-all cursor-pointer"
                    >
                      <option value="< $1,000 [Quick Fix / Small Scope]">&lt; $1,000 [Quick Fix / Small Scope]</option>
                      <option value="$1,000 - $2,500 [Standard Implementation]">$1,000 - $2,500 [Standard Implementation]</option>
                      <option value="$2,500 - $5,000 [Comprehensive Architecture]">$2,500 - $5,000 [Comprehensive Architecture]</option>
                      <option value="$5,000+ [Full Platform / Multi-Service]">$5,000+ [Full Platform / Multi-Service]</option>
                      <option value="$1,500 - $3,000 / month [Monthly Retainer]">$1,500 - $3,000 / month [Monthly Retainer]</option>
                      <option value="Exploring Options / Flexible">Exploring Options / Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Project Requirements Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-slate-300">
                    Project Requirements & Current Stack <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your current stack (e.g. AWS, Docker, Node.js, Python), your existing pain points (e.g. deployments breaking, high AWS bills), and what you would like to achieve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs text-white placeholder-slate-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-cyan-600/20 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <span>Registering Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Project Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500 font-mono pt-1">
                  Non-binding consultation • Direct review & response from K. Ayesha within 24h
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
