import React, { useState } from 'react';
import { ExternalLink, Sparkles, ArrowRight, Play, Server, Shield, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'AI/ML SaaS', label: 'AI/ML SaaS' },
    { id: 'Computer Vision & Edge AI', label: 'Computer Vision' },
    { id: 'Full-Stack Logistics', label: 'Full-Stack & Logistics' },
  ];

  const filteredProjects = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
              <Sparkles size={13} />
              <span>PRODUCTION SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient-cyan">AI &amp; Full-Stack</span> Projects
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              Production-grade applications engineered with Computer Vision (YOLOv8), Generative AI (Gemini LLMs), and high-throughput full-stack architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${filter === cat.id ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25' : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-card-interactive rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group cursor-pointer hover:border-cyan-500/50"
            >
              {/* Card Top Banner */}
              <div className={`h-2.5 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 text-cyan-300 border border-slate-700">
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Live Verified
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Key Metrics Pill Box */}
                <div className="grid grid-cols-2 gap-2 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 text-center font-mono text-xs">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, val]) => (
                    <div key={key} className="p-1">
                      <div className="text-cyan-400 font-bold text-xs truncate">{val}</div>
                      <div className="text-[10px] text-slate-400 uppercase mt-0.5">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 text-[11px] font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                  >
                    <Play size={13} className="text-cyan-400" />
                    <span>Launch Interactive Simulator</span>
                    <ArrowRight size={13} />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={15} />
                    </a>
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-slate-800 transition-colors"
                      title="Live Web Application"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Server size={22} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Looking for custom AI or Full-Stack solutions?</h4>
              <p className="text-xs text-slate-400">From custom YOLOv8 model training to LLM orchestration &amp; production deployment.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono whitespace-nowrap shadow-lg shadow-cyan-500/20"
          >
            Discuss a Project &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
