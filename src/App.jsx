import React, { useState } from 'react';
import NeuralCanvas from './components/NeuralCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import EducationTimeline from './components/EducationTimeline';
import CertificationsAndAchievements from './components/CertificationsAndAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiChatbotDrawer from './components/AiChatbotDrawer';
import { Bot, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070F] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-300 overflow-x-hidden">
      
      {/* Background Interactive Neural Particle Canvas */}
      <NeuralCanvas />

      {/* Main Navigation */}
      <Navbar
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Hero Section */}
      <main className="relative z-10">
        <Hero
          onOpenChat={() => setIsChatOpen(true)}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Skills Section */}
        <Skills />

        {/* Education Timeline */}
        <EducationTimeline />

        {/* Certifications & Achievements */}
        <CertificationsAndAchievements />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenChat={() => setIsChatOpen(true)} />

      {/* Floating Action AI Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-purple-600 to-blue-600 text-white font-mono text-xs font-bold shadow-2xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all border border-white/20 group"
        aria-label="Open AI Assistant"
      >
        <div className="relative">
          <Bot size={18} className="animate-bounce" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400"></span>
        </div>
        <span className="hidden sm:inline">Ask Dharnish AI</span>
        <Sparkles size={14} className="text-yellow-300 group-hover:rotate-12 transition-transform" />
      </button>

      {/* Deep-Dive Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Interactive AI Chatbot Drawer */}
      <AiChatbotDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

    </div>
  );
}
