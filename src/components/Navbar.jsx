import React, { useState, useEffect } from 'react';
import { Bot, Terminal, FileText, Menu, X, Sparkles, Send, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ onOpenChat }) {
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
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-blue-500/20 border border-cyan-500/40 flex items-center justify-center p-2 group-hover:border-cyan-400 transition-colors shadow-lg shadow-cyan-500/10">
            <span className="font-mono font-bold text-cyan-400 text-lg">D</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-lg text-white tracking-wide group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              Dharnish.V <span className="text-cyan-400 text-xs px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">AI/ML</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest">PORTFOLIO.SYS</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 rounded-full hover:bg-slate-800/80 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Ask AI Button */}
          <button
            onClick={onOpenChat}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/40 rounded-full transition-all shadow-sm shadow-cyan-500/20 hover:scale-105 active:scale-95"
            title="Ask Dharnish's AI Assistant"
          >
            <Bot size={14} className="text-cyan-400 animate-pulse" />
            <span>Ask Dharnish AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          </button>

          {/* Resume link */}
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-full transition-all hover:text-white"
          >
            <FileText size={14} className="text-purple-400" />
            <span>Resume</span>
          </a>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-full transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40"
          >
            <Send size={13} />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenChat}
            className="p-2 text-cyan-400 bg-cyan-950/50 border border-cyan-500/40 rounded-lg"
            aria-label="Ask AI"
          >
            <Bot size={18} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 rounded-lg"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-slate-800 px-5 py-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 rounded-xl"
              >
                <Bot size={16} />
                <span>Ask Dharnish AI</span>
              </button>
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700 rounded-xl"
              >
                <FileText size={16} className="text-purple-400" />
                <span>View Resume (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
