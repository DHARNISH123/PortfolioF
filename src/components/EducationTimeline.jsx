import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationTimeline() {
  return (
    <section id="education" className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles size={13} />
            <span>ACADEMIC TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="text-gradient-cyan">Scholastic Records</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Academic milestones with consistent high achievement in Artificial Intelligence, Mathematics, and Computer Science.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-slate-800" />

          <div className="space-y-12">
            {portfolioData.education.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${isEven ? 'sm:flex-row-reverse' : ''} gap-8`}
                >
                  {/* Center Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 z-10 shadow-lg shadow-cyan-500/30">
                    <GraduationCap size={16} />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-6 w-full">
                    <div className="glass-card-interactive p-6 rounded-2xl border border-slate-800 space-y-4">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 font-bold">
                          {edu.score}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar size={13} />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      {/* Title & Institution */}
                      <div>
                        <h3 className="text-lg font-bold text-white leading-snug">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-1 font-mono">
                          <span className="text-purple-400 font-medium">{edu.institution}</span>
                          <span>&bull;</span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <MapPin size={12} /> {edu.location}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">&rsaquo;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Coursework Tags */}
                      {edu.courses && (
                        <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-1.5">
                          {edu.courses.map((c) => (
                            <span
                              key={c}
                              className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-400 border border-slate-800"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
