import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Download, Mail, Sparkles, Terminal, Code2, Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenChat, onSelectProject }) {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'AI & Machine Learning Engineer',
    'YOLOv8 & Computer Vision Developer',
    'Google Gemini & LLM Systems Architect',
    'Full-Stack & FastAPI Developer',
    'Quality & Test Automation Enthusiast'
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer;

    if (!isDeleting && typedText.length < currentPhrase.length) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      }, 70);
    } else if (!isDeleting && typedText.length === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length - 1));
      }, 35);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-cyber-grid bg-radial-vignette">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introduction */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-cyan-950/40 animate-float">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">AI/ML UNDERGRADUATE &bull; JAIN UNIVERSITY</span>
              <span className="text-slate-500">|</span>
              <span className="text-emerald-400 font-semibold">CGPA: 8.87</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient-cyan">{portfolioData.personal.name}</span>
              </h1>
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="font-mono text-lg sm:text-2xl font-semibold text-slate-300">
                  &gt; <span className="text-cyan-400">{typedText}</span>
                  <span className="animate-pulse text-purple-400">_</span>
                </span>
              </div>
            </div>

            {/* Bio Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Specialized in <strong className="text-white">Artificial Intelligence, Computer Vision (YOLOv8)</strong>, and <strong className="text-white">Generative AI (LLMs & Gemini)</strong> with hands-on expertise building production-ready full-stack applications with Python, React.js, FastAPI, REST APIs, and Docker.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore AI Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={portfolioData.personal.resumeUrl}
                download="Dharnish_V_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-all hover:border-cyan-500/50 hover:scale-105 active:scale-95 shadow-md"
              >
                <Download size={16} className="text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenChat}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/40 text-purple-300 hover:text-purple-200 font-mono text-sm transition-all hover:scale-105 active:scale-95 shadow-md shadow-purple-950/50"
              >
                <Bot size={16} className="text-purple-400 animate-pulse" />
                <span>Ask My AI Bot</span>
              </button>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 text-slate-400 text-sm font-mono">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800"
                title="GitHub Profile"
              >
                <GithubIcon size={16} className="text-cyan-400" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} className="text-purple-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:dharnidharni2356@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800"
                title="Send Email"
              >
                <Mail size={16} className="text-cyan-400" />
                <span className="hidden sm:inline">dharnidharni2356@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
              <a
                href="tel:+917094950944"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800"
                title="Direct Phone"
              >
                <Terminal size={16} className="text-purple-400" />
                <span>+91 7094950944</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Profile Card with AI Visuals */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Cyber Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-purple-600 to-emerald-500 rounded-3xl blur-md opacity-40 group-hover:opacity-100 transition duration-1000 animate-neural-glow"></div>

              {/* Main Card */}
              <div className="relative glass-card rounded-2xl p-6 border border-slate-700/80 shadow-2xl overflow-hidden">
                
                {/* Header Badge in Card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                    <span className="text-slate-400 ml-1">neural_core_v4.2</span>
                  </div>
                  <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">ONLINE</span>
                </div>

                {/* Profile Image & Aura */}
                <div className="relative my-6 flex flex-col items-center">
                  <div className="relative w-44 h-44 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-cyan-500 via-purple-500 to-emerald-400 shadow-xl shadow-cyan-500/20">
                    <img
                      src={portfolioData.personal.avatar}
                      alt={portfolioData.personal.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80";
                      }}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="font-bold text-lg text-white font-mono">Dharnish V</h3>
                    <p className="text-xs text-cyan-400 font-mono">B.Tech AI & ML | 2023 - 2027</p>
                  </div>
                </div>

                {/* Live System Metrics in Card */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center hover:border-cyan-500/40 transition-colors">
                    <div className="text-cyan-400 text-lg font-bold font-mono">8.87</div>
                    <div className="text-[11px] text-slate-400">JAIN University CGPA</div>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center hover:border-purple-500/40 transition-colors">
                    <div className="text-purple-400 text-lg font-bold font-mono">90%</div>
                    <div className="text-[11px] text-slate-400">12th Grade Score</div>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center hover:border-emerald-500/40 transition-colors">
                    <div className="text-emerald-400 text-lg font-bold font-mono">3+</div>
                    <div className="text-[11px] text-slate-400">Full-Stack AI Projects</div>
                  </div>
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-2.5 text-center hover:border-blue-500/40 transition-colors">
                    <div className="text-blue-400 text-lg font-bold font-mono">YOLOv8</div>
                    <div className="text-[11px] text-slate-400">Real-Time CV & Edge AI</div>
                  </div>
                </div>

                {/* Terminal Quick Command */}
                <div className="mt-4 p-2.5 bg-slate-950/90 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                  <span className="text-slate-400">$ python -m synapse.ai</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Ready
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Floating AI Skills Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <div className="text-center mb-5">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Core Technologies & Frameworks
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { name: "Python", color: "border-yellow-500/40 text-yellow-300 bg-yellow-950/20" },
              { name: "YOLOv8 & OpenCV", color: "border-cyan-500/40 text-cyan-300 bg-cyan-950/20" },
              { name: "Google Gemini & LLMs", color: "border-purple-500/40 text-purple-300 bg-purple-950/20" },
              { name: "React.js & Next.js", color: "border-blue-500/40 text-blue-300 bg-blue-950/20" },
              { name: "FastAPI & REST APIs", color: "border-emerald-500/40 text-emerald-300 bg-emerald-950/20" },
              { name: "PostgreSQL", color: "border-indigo-500/40 text-indigo-300 bg-indigo-950/20" },
              { name: "Docker & AWS", color: "border-orange-500/40 text-orange-300 bg-orange-950/20" },
              { name: "Java & DSA", color: "border-red-500/40 text-red-300 bg-red-950/20" }
            ].map((tech) => (
              <div
                key={tech.name}
                className={`px-3.5 py-1.5 rounded-lg border text-xs font-mono font-medium backdrop-blur-sm transition-all hover:scale-105 ${tech.color}`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
