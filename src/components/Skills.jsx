import React, { useState } from 'react';
import { Cpu, Code2, Globe, Terminal, Database, Users, Sparkles, Search, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    Cpu: Cpu,
    Code2: Code2,
    Globe: Globe,
    Terminal: Terminal,
    Database: Database,
    Users: Users,
  };

  // Filter skills based on search query if entered
  const isSearching = searchQuery.trim().length > 0;
  
  const allFilteredSkills = isSearching
    ? portfolioData.skillCategories.flatMap(cat => 
        cat.skills
          .filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(s => ({ ...s, categoryTitle: cat.title }))
      )
    : [];

  return (
    <section id="skills" className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles size={13} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-gradient-cyan">Skill Matrix</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            From deep learning architectures &amp; computer vision to full-stack microservices, QA testing, and databases.
          </p>

          {/* Search bar for quick skill lookup */}
          <div className="mt-8 relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input
              type="text"
              placeholder="Search skills (e.g. YOLOv8, Python, Docker, DSA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* If Searching, show search results */}
        {isSearching ? (
          <div className="glass-card rounded-2xl p-6 border border-slate-800">
            <div className="text-xs font-mono text-cyan-400 mb-4">
              Found {allFilteredSkills.length} skill(s) matching "{searchQuery}":
            </div>
            {allFilteredSkills.length === 0 ? (
              <div className="text-slate-400 text-sm py-8 text-center font-mono">No matching skills found.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {allFilteredSkills.map((skill, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white text-sm">{skill.name}</span>
                      <span className="text-xs font-mono text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">{skill.categoryTitle}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Normal Tabbed View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Category Selector Tabs */}
            <div className="lg:col-span-4 space-y-2.5">
              {portfolioData.skillCategories.map((cat, idx) => {
                const IconComponent = categoryIcons[cat.icon] || Code2;
                const isActive = activeCategory === idx;
                return (
                  <button
                    key={cat.title}
                    onClick={() => setActiveCategory(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-3.5 border ${isActive ? 'bg-cyan-950/70 border-cyan-500/50 shadow-lg shadow-cyan-950/50' : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'}`}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                      <IconComponent size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-bold text-sm truncate ${isActive ? 'text-cyan-300' : 'text-slate-200'}`}>
                        {cat.title}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        {cat.skills.length} core competencies
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Skills Display Box */}
            <div className="lg:col-span-8 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 relative">
              <div className="mb-6 pb-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {portfolioData.skillCategories[activeCategory].title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {portfolioData.skillCategories[activeCategory].description}
                  </p>
                </div>
                <div className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
                  Level Assessment: Advanced
                </div>
              </div>

              {/* Skill Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {portfolioData.skillCategories[activeCategory].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/30 transition-all space-y-2.5"
                  >
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold text-slate-100 flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-cyan-400" />
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
