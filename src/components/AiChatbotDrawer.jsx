import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, User, Terminal, Trash2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AiChatbotDrawer({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `👋 Hi! I am Dharnish's AI Assistant. Ask me anything about his AI/ML projects, skills, education at JAIN University, or how to get in touch!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "Tell me about VisionGuard AI (YOLOv8)",
    "What is Synapse AI & Gemini platform?",
    "What are his core technical skills?",
    "What is his CGPA and education?",
    "How can I contact Dharnish for opportunities?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const generateBotReply = (query) => {
    const q = query.toLowerCase();

    if (q.includes('visionguard') || q.includes('ppe') || q.includes('yolo') || q.includes('computer vision')) {
      return `🛡️ **VisionGuard AI** is a real-time Computer Vision safety system built with **Python, YOLOv8, OpenCV, React.js, FastAPI, Docker, and AWS**. It detects PPE compliance (Hardhats, High-Vis Vests, Gloves) at 48 FPS with 94.8% mAP@50 and triggers instant sub-second alerts for factory safety compliance!`;
    }

    if (q.includes('synapse') || q.includes('meeting') || q.includes('gemini') || q.includes('llm')) {
      return `⚡ **Synapse AI** is an AI SaaS platform built with **Next.js, FastAPI, PostgreSQL, Google Gemini 1.5 Pro, and Docker on AWS**. It transcribes audio meetings, performs speaker diarization, generates structured summaries & action items, and enables instant semantic vector search across meeting history!`;
    }

    if (q.includes('vms') || q.includes('vehicle') || q.includes('dock') || q.includes('logistics')) {
      return `🚚 **Smart Vehicle & Dock Management System** is a full-stack logistics platform built with **Python, Flask, React.js, and PostgreSQL**. It automates gate entry, queue tracking, dock bay scheduling, reducing truck turnaround wait times by 35% with 42% higher dock utilization!`;
    }

    if (q.includes('cgpa') || q.includes('education') || q.includes('college') || q.includes('university') || q.includes('degree')) {
      return `🎓 **Education Milestones:**\n• **B.Tech in AI & ML** at **JAIN University, Bangalore** (2023–2027) with an outstanding **CGPA of 8.87 / 10**.\n• **12th Standard** at Chellammal MHSS: **90%** (2022–2023).\n• Specialized in Deep Learning, Computer Vision, DSA, and Cloud Systems.`;
    }

    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('languages') || q.includes('framework')) {
      return `💻 **Core Technical Skills:**\n• **Languages:** Python, Java, SQL, JavaScript, TypeScript\n• **AI/ML:** YOLOv8, OpenCV, LLMs, Google Gemini, LangChain, RAG, TensorFlow\n• **Web & Cloud:** React.js, Next.js, FastAPI, Flask, REST APIs, Docker, AWS, PostgreSQL\n• **Testing & CS:** DSA, OOPs, DBMS, OS, API Validation, SDLC, Functional Testing.`;
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
      return `📬 **Get in Touch with Dharnish V:**\n• **Email:** dharnidharni2356@gmail.com\n• **Phone:** +91 7094950944\n• **Location:** Bangalore, India\n• You can also download his resume or send a direct message through the Contact section!`;
    }

    if (q.includes('certif') || q.includes('achieve') || q.includes('hackathon') || q.includes('football')) {
      return `🏆 **Certifications & Achievements:**\n• **Certifications:** Generative AI in Education (Univ. of Glasgow), Machine Learning Web Apps (Coursera), Intro to Computers & OS (Microsoft).\n• **Hackathons:** Build with India Hackathon & JAIN University Hackathon participant.\n• **Sports Leadership:** Captain of the University Football Team!`;
    }

    return `✨ Dharnish V is an AI/ML Engineer specializing in Computer Vision (YOLOv8), Generative AI (LLMs & Gemini), and scalable Full-Stack architectures (FastAPI, React.js, Docker, AWS). He holds an 8.87 CGPA at JAIN University. Feel free to ask about his specific projects or how to collaborate!`;
  };

  const handleSend = (textToSend) => {
    const userQuery = textToSend || input;
    if (!userQuery.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: userQuery }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(userQuery);
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md h-full bg-slate-900 border-l border-slate-700/80 shadow-2xl flex flex-col justify-between text-slate-100 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="px-5 py-4 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
              <Bot size={20} className="animate-pulse" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400"></span>
            </div>
            <div>
              <div className="font-bold text-sm text-white flex items-center gap-2">
                <span>Dharnish AI Agent</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  v2.4
                </span>
              </div>
              <p className="text-[11px] text-emerald-400 font-mono">Trained on Dharnish V Resume &amp; Projects</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setMessages([{ sender: 'bot', text: 'Chat cleared! How can I help you today?' }])}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Clear Conversation"
            >
              <Trash2 size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close Drawer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Message Log */}
        <div className="p-4 overflow-y-auto flex-1 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono ${msg.sender === 'user' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-purple-950 border border-purple-500/40 text-purple-300'}`}>
                {msg.sender === 'user' ? 'YOU' : <Bot size={15} />}
              </div>

              <div
                className={`max-w-[82%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${msg.sender === 'user' ? 'bg-cyan-600/90 text-white rounded-tr-none' : 'glass-card border border-slate-800 text-slate-200 rounded-tl-none'}`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 p-2">
              <Sparkles size={14} className="animate-spin" />
              <span>Synthesizing response...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-2 bg-slate-950/40 border-t border-slate-800/80">
          <div className="text-[10px] font-mono text-slate-400 mb-1.5">Suggested Questions:</div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 text-[11px] whitespace-nowrap border border-slate-700 shrink-0 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about Dharnish's work..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold transition-transform hover:scale-105 active:scale-95"
            >
              <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
