import React from 'react';
import { Award, Sparkles, Trophy, Zap, ShieldCheck, CheckCircle2, ExternalLink, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CertificationsAndAchievements() {
  const achievementIcons = {
    Award: Award,
    Zap: Zap,
    Trophy: Trophy,
  };

  return (
    <section id="certifications" className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles size={13} />
            <span>CREDENTIALS &amp; RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Certifications &amp; <span className="text-gradient-cyan">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Professional certifications from global institutions and hackathon leadership milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold font-mono text-cyan-400 flex items-center gap-2 mb-4">
              <ShieldCheck size={20} />
              <span>Verified Professional Certifications</span>
            </h3>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-card-interactive p-6 rounded-2xl border border-slate-800 space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 shrink-0">
                        <BookOpen size={18} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-cyan-400 font-mono mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800 shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded bg-slate-900/90 text-slate-300 text-[11px] font-mono border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Leadership */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-lg font-bold font-mono text-purple-400 flex items-center gap-2 mb-4">
              <Trophy size={20} />
              <span>Hackathons &amp; Team Leadership</span>
            </h3>

            <div className="space-y-4">
              {portfolioData.achievements.map((ach, idx) => {
                const IconComp = achievementIcons[ach.icon] || Trophy;
                return (
                  <div
                    key={idx}
                    className="glass-card-interactive p-6 rounded-2xl border border-slate-800 space-y-3"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 text-yellow-400 shrink-0">
                        <IconComp size={20} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-yellow-950/60 text-yellow-300 border border-yellow-500/30">
                            {ach.category}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white leading-snug">
                          {ach.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                          {ach.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
