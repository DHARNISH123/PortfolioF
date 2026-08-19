import React from 'react';
import { ArrowUp, Heart, Bot, Code2, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenChat }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 relative z-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-cyan-400">
              D
            </div>
            <div>
              <div className="font-mono font-bold text-white text-sm">
                Dharnish V &bull; AI/ML Portfolio
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                B.Tech AI &amp; ML | JAIN University (FET Bangalore)
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-all hover:scale-105"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="font-mono text-[11px] text-slate-400">
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-bold">Dharnish V</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SYSTEM STATUS: 100% OPERATIONAL</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
