import React, { useState } from 'react';
import { Phone, Mail, ArrowUpRight, Copy, Check, MessageSquare, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Simple form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open direct mailto with prefilled message
    const subject = encodeURIComponent(`Project Collaboration Inquiry - ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#34d399] mb-2 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Collaboration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Let&apos;s Discuss Your Infrastructure
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-emerald-100/70 max-w-xl">
            Whether you need a FinOps cost audit, Kubernetes deployment, CI/CD automation, or security hardening, reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-[#132b20] border border-[#244b3a] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#19382b] border border-[#2f604b] flex items-center justify-center text-[#34d399]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#a7f3d0] uppercase">Phone / Direct Call</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phoneRaw}`}
                    className="text-sm font-semibold text-white hover:text-[#34d399] transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] text-xs font-mono text-emerald-200 transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#34d399]" /> : <Copy className="w-4 h-4 text-[#a7f3d0]" />}
                </button>
                <a
                  href={`tel:${PERSONAL_INFO.phoneRaw}`}
                  className="px-3 py-1.5 rounded-lg bg-[#10b981] hover:bg-[#34d399] text-[#062316] text-xs font-semibold transition-colors"
                >
                  Call
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 rounded-xl bg-[#132b20] border border-[#244b3a] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#19382b] border border-[#2f604b] flex items-center justify-center text-[#34d399]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#a7f3d0] uppercase">WhatsApp Chat</div>
                  <div className="text-sm font-semibold text-white">Quick Project Inquiries</div>
                </div>
              </div>

              <a
                href={`https://wa.me/91${PERSONAL_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] text-xs font-semibold text-[#34d399] hover:text-white transition-colors"
              >
                <span>Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-xl bg-[#132b20] border border-[#244b3a] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#19382b] border border-[#2f604b] flex items-center justify-center text-[#34d399]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-[#a7f3d0] uppercase">Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#34d399] transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] text-xs font-mono text-emerald-200 transition-colors"
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#34d399]" /> : <Copy className="w-4 h-4 text-[#a7f3d0]" />}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-5 rounded-xl bg-[#132b20] border border-[#244b3a] flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-200">Connect Online:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] text-xs font-mono text-emerald-200 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#19382b] hover:bg-[#1f4535] border border-[#2f604b] text-xs font-mono text-emerald-200 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Email Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-2xl bg-[#132b20] border border-[#244b3a]">
              <h3 className="text-base font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Tell me about your infrastructure, cloud bill goals, or pipeline requirements.
              </p>

              {submitted ? (
                <div className="p-4 rounded-xl bg-[#19382b] border border-[#34d399] text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#34d399]/20 text-[#34d399] flex items-center justify-center mx-auto">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Message Ready in Email Client</h4>
                  <p className="text-xs text-emerald-200">
                    If your email app didn&apos;t open automatically, send directly to <strong>{PERSONAL_INFO.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#a7f3d0] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d1f17] border border-[#244b3a] text-xs text-white placeholder-slate-500 focus:border-[#34d399] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#a7f3d0] mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d1f17] border border-[#244b3a] text-xs text-white placeholder-slate-500 focus:border-[#34d399] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#a7f3d0] mb-1.5">
                      Project Details & Cloud Environment
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your current cloud setup (AWS/Azure/GCP), Kubernetes needs, or cost reduction targets..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d1f17] border border-[#244b3a] text-xs text-white placeholder-slate-500 focus:border-[#34d399] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#10b981] hover:bg-[#34d399] text-[#062316] font-semibold text-xs transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
