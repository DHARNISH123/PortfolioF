import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles, MessageSquare, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/80">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles size={13} />
            <span>COMMUNICATION PORTAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-gradient-cyan">Intelligent</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Open for AI/ML engineering roles, full-stack internships, collaborative research, and software innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              
              <div className="space-y-2">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                  <Terminal size={14} />
                  <span>Direct Communication Node</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Dharnish V</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Reach out directly via email, phone, or LinkedIn for technical discussions, project inquiries, or interview scheduling.
                </p>
              </div>

              {/* Direct Details with Copy Buttons */}
              <div className="space-y-4 pt-2">
                {/* Email */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-400 font-mono">Email Address</div>
                      <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="text-xs sm:text-sm font-mono font-medium text-slate-200 hover:text-cyan-400 truncate block"
                      >
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-purple-950 border border-purple-500/30 text-purple-400 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-400 font-mono">Direct Phone</div>
                      <a
                        href={`tel:${portfolioData.personal.phone}`}
                        className="text-xs sm:text-sm font-mono font-medium text-slate-200 hover:text-purple-400 truncate block"
                      >
                        {portfolioData.personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-500/30 text-emerald-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Current Base</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      Bangalore, Karnataka, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-800 flex gap-3">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                >
                  <LinkedinIcon size={15} className="text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                >
                  <GithubIcon size={15} className="text-purple-400" />
                  <span>GitHub</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Message Terminal Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <MessageSquare size={16} />
                  <span>Dispatch Direct Message</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>SMTP Ready</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl shadow-xl shadow-emerald-500/20">
                    <Check size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Dispatched Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Thank you, <strong className="text-cyan-300">{formData.name}</strong>! Your message has been routed to Dharnish. He will get back to you shortly at <strong className="text-cyan-300">{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-cyan-300 border border-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject</label>
                    <input
                      type="text"
                      placeholder="Opportunity / Collaboration / Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Discussing a potential software role, AI project, or technical question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition-all hover:scale-[1.01] active:scale-95 shadow-lg shadow-cyan-500/25"
                  >
                    <Send size={16} />
                    <span>Transmit Message</span>
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
