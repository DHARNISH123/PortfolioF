import React from 'react';
import { Cpu, CheckCircle2, ShieldCheck, Award, GraduationCap, Code2, Terminal, Sparkles, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const focusAreas = [
    {
      icon: Cpu,
      title: "AI / ML & Computer Vision",
      desc: "Architecting high-throughput computer vision models with YOLOv8 & OpenCV, along with Generative AI workflows with Google Gemini LLMs and RAG pipelines.",
      gradient: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
      textColor: "text-cyan-400"
    },
    {
      icon: Layers,
      title: "Full-Stack Development",
      desc: "Building production-grade web platforms combining responsive React.js / Next.js interfaces with scalable Python (FastAPI/Flask) REST microservices and PostgreSQL.",
      gradient: "from-purple-500/20 to-indigo-500/20",
      border: "border-purple-500/30",
      textColor: "text-purple-400"
    },
    {
      icon: ShieldCheck,
      title: "Software Quality & Testing",
      desc: "Robust experience across the SDLC: functional testing, edge-case analysis, REST API validation, debugging, and quality engineering principles.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30",
      textColor: "text-emerald-400"
    },
    {
      icon: Award,
      title: "Leadership & Team Management",
      desc: "Collegiate Football Captain and hackathon competitor, adept at cross-functional communication, tactical problem-solving, and managing high-stakes project deliverables.",
      gradient: "from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-500/30",
      textColor: "text-yellow-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles size={13} />
            <span>EXECUTIVE PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Tomorrow's <span className="text-gradient-cyan">Intelligent Systems</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive look at my background, technical foundation, and core engineering philosophy.
          </p>
        </div>

        {/* Main Career Summary Card */}
        <div className="relative glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl mb-14 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <Terminal size={15} />
                <span>Career Statement &amp; Vision</span>
              </div>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {portfolioData.personal.bio}
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2.5">
                {["Python", "Java", "React.js", "FastAPI", "YOLOv8", "Gemini LLM", "Docker", "AWS", "SQL", "SDLC"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-mono bg-slate-900 border border-slate-700/70 text-slate-300 rounded-md"
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metrics Column */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="glass-card p-4 rounded-xl border border-cyan-500/20 text-center">
                <div className="text-2xl font-bold font-mono text-cyan-400">8.87</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">B.Tech CGPA</div>
                <div className="text-[10px] text-cyan-400/80 font-mono mt-0.5">JAIN University</div>
              </div>
              <div className="glass-card p-4 rounded-xl border border-purple-500/20 text-center">
                <div className="text-2xl font-bold font-mono text-purple-400">90%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Higher Secondary</div>
                <div className="text-[10px] text-purple-400/80 font-mono mt-0.5">Chellammal MHSS</div>
              </div>
              <div className="glass-card p-4 rounded-xl border border-emerald-500/20 text-center">
                <div className="text-2xl font-bold font-mono text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Hands-On Code</div>
                <div className="text-[10px] text-emerald-400/80 font-mono mt-0.5">Real Workflows</div>
              </div>
              <div className="glass-card p-4 rounded-xl border border-blue-500/20 text-center">
                <div className="text-2xl font-bold font-mono text-blue-400">Captain</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Football Team</div>
                <div className="text-[10px] text-blue-400/80 font-mono mt-0.5">Collegiate Leader</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className={`glass-card-interactive rounded-2xl p-6 border ${area.border} relative group`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.gradient} border ${area.border} flex items-center justify-center mb-4 text-white shadow-lg`}>
                  <Icon className={area.textColor} size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {area.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
