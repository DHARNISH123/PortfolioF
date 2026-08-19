import React, { useState, useEffect } from 'react';
import { 
  X, ExternalLink, Cpu, Layers, CheckCircle2, AlertTriangle, 
  Play, Pause, RefreshCw, BarChart2, Shield, Eye, Sparkles, Volume2, 
  Clock, ArrowUpRight, Copy, Check, Radio, Terminal, Server
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('simulation'); // 'simulation' | 'architecture' | 'highlights'
  const [copied, setCopied] = useState(false);

  // VisionGuard AI Simulation state
  const [streamActive, setStreamActive] = useState(true);
  const [confidenceThreshold, setConfidenceThreshold] = useState(85);
  const [alertsCount, setAlertsCount] = useState(1);
  const [simLog, setSimLog] = useState([
    { time: '15:30:12', msg: 'YOLOv8 stream initialized on Camera Node #04 (Loading Bay)', status: 'info' },
    { time: '15:30:18', msg: 'Worker #102: Hardhat [DETECTED 98%], High-Vis Vest [DETECTED 94%]', status: 'success' },
    { time: '15:30:22', msg: 'Worker #103: WARNING - Safety Gloves Missing in Zone B', status: 'warning' },
  ]);

  // Synapse AI Simulation state
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [synapseStep, setSynapseStep] = useState('ready'); // 'ready' | 'transcribing' | 'completed'

  // Smart VMS Simulation state
  const [vmsQueue, setVmsQueue] = useState([
    { id: 'TRK-8821', driver: 'Rajesh K.', cargo: 'Raw Materials', dock: 'Bay 01', status: 'Unloading' },
    { id: 'TRK-9042', driver: 'Arun M.', cargo: 'Electronics', dock: 'Bay 02', status: 'Inspection' },
    { id: 'TRK-4109', driver: 'Senthil V.', cargo: 'Auto Parts', dock: 'Queue #1', status: 'Waiting' }
  ]);

  useEffect(() => {
    // Disable background scroll when modal open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTriggerSimAlert = () => {
    const timestamp = new Date().toTimeString().split(' ')[0];
    const newLogs = [
      { time: timestamp, msg: `Manual Inspection triggered: Compliance score verified at ${confidenceThreshold}%`, status: 'info' },
      ...simLog
    ];
    setSimLog(newLogs);
    setAlertsCount((prev) => prev + 1);
  };

  const handleRunSynapse = () => {
    setSynapseStep('transcribing');
    setAudioPlaying(true);
    setTimeout(() => {
      setSynapseStep('completed');
      setAudioPlaying(false);
    }, 2000);
  };

  const handleAddTruck = () => {
    const randomId = `TRK-${Math.floor(1000 + Math.random() * 9000)}`;
    const newTruck = {
      id: randomId,
      driver: 'New Driver',
      cargo: 'Machinery Components',
      dock: `Bay 0${Math.floor(Math.random() * 3) + 1}`,
      status: 'Dock Allocated'
    };
    setVmsQueue([newTruck, ...vmsQueue.slice(0, 4)]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-slate-100">
        
        {/* Top Gradient Bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

        {/* Modal Header */}
        <div className="px-6 py-4 sm:py-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700">
              <Cpu className="text-cyan-400" size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  {project.category}
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  {project.id}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Copy Link"
            >
              {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-red-950/80 hover:text-red-400 text-slate-300 transition-colors border border-slate-700 hover:border-red-500/40"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-slate-800 bg-slate-950/40 flex gap-2 sm:gap-4 overflow-x-auto text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('simulation')}
            className={`py-3 px-3 border-b-2 flex items-center gap-2 transition-all font-mono ${activeTab === 'simulation' ? 'border-cyan-400 text-cyan-300' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <Play size={15} />
            <span>Interactive Simulator</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-3 border-b-2 flex items-center gap-2 transition-all font-mono ${activeTab === 'architecture' ? 'border-cyan-400 text-cyan-300' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <Server size={15} />
            <span>System Architecture</span>
          </button>
          <button
            onClick={() => setActiveTab('highlights')}
            className={`py-3 px-3 border-b-2 flex items-center gap-2 transition-all font-mono ${activeTab === 'highlights' ? 'border-cyan-400 text-cyan-300' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            <BarChart2 size={15} />
            <span>Metrics &amp; Engineering</span>
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {/* TAB 1: INTERACTIVE SIMULATION */}
          {activeTab === 'simulation' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-950/70 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Sparkles size={14} />
                  <span>Live Interactive Preview &amp; Sandbox Environment</span>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Interact with real-time controls below
                </div>
              </div>

              {/* SIMULATION 1: VISIONGUARD AI (YOLOv8 PPE DETECTION) */}
              {project.id === 'visionguard-ai' && (
                <div className="space-y-4">
                  {/* Virtual Video Stream Canvas */}
                  <div className="relative aspect-video w-full rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner flex flex-col justify-between p-4">
                    {/* Live Stream Overlay HUD */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-300 z-10">
                      <div className="flex items-center gap-2 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md border border-slate-800">
                        <span className={`w-2.5 h-2.5 rounded-full ${streamActive ? 'bg-red-500 animate-pulse' : 'bg-slate-600'}`}></span>
                        <span>{streamActive ? 'REC LIVE FEED: CAM_BAY_04' : 'FEED PAUSED'}</span>
                      </div>
                      <div className="bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md border border-slate-800 text-cyan-400">
                        YOLOv8 Inference: 48 FPS (TensorRT)
                      </div>
                    </div>

                    {/* Simulated Factory Floor Background & Bounding Boxes */}
                    <div className="relative flex-1 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent flex items-center justify-center opacity-40">
                        <div className="text-slate-600 font-mono text-sm">[Simulated Factory Floor Camera Feed]</div>
                      </div>

                      {streamActive && (
                        <div className="relative w-full max-w-lg h-44 border border-dashed border-cyan-500/40 rounded-xl p-3 flex items-center justify-around">
                          {/* Person 1 Box */}
                          <div className="relative border-2 border-emerald-400 bg-emerald-500/10 rounded-lg p-2 flex flex-col items-center justify-center w-36 h-36">
                            <span className="absolute -top-3 left-1 bg-emerald-500 text-black text-[10px] font-mono font-bold px-1 rounded">
                              PERSON #102: 98%
                            </span>
                            <div className="border border-cyan-400 bg-cyan-400/20 px-1 py-0.5 rounded text-[9px] font-mono text-cyan-200 mt-1">
                              [✓] Hardhat
                            </div>
                            <div className="border border-emerald-400 bg-emerald-400/20 px-1 py-0.5 rounded text-[9px] font-mono text-emerald-200 mt-1">
                              [✓] Safety Vest
                            </div>
                          </div>

                          {/* Person 2 Box (Violation) */}
                          <div className="relative border-2 border-red-500 bg-red-500/10 rounded-lg p-2 flex flex-col items-center justify-center w-36 h-36 animate-pulse">
                            <span className="absolute -top-3 left-1 bg-red-500 text-white text-[10px] font-mono font-bold px-1 rounded">
                              ALERT: PERSON #103
                            </span>
                            <div className="border border-emerald-400 bg-emerald-400/20 px-1 py-0.5 rounded text-[9px] font-mono text-emerald-200 mt-1">
                              [✓] Hardhat
                            </div>
                            <div className="border border-red-500 bg-red-500/30 px-1 py-0.5 rounded text-[9px] font-mono text-red-200 font-bold mt-1">
                              [!] GLOVES MISSING
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Status bar */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 z-10">
                      <div>Violations Logged: <span className="text-red-400 font-bold">{alertsCount}</span></div>
                      <div>Confidence Filter: <span className="text-cyan-400">{confidenceThreshold}%</span></div>
                    </div>
                  </div>

                  {/* Interactive Controls Panel */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      onClick={() => setStreamActive(!streamActive)}
                      className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-white flex items-center justify-center gap-2 border border-slate-700"
                    >
                      {streamActive ? <Pause size={14} className="text-yellow-400" /> : <Play size={14} className="text-emerald-400" />}
                      <span>{streamActive ? 'Pause Video Stream' : 'Resume Stream'}</span>
                    </button>

                    <button
                      onClick={handleTriggerSimAlert}
                      className="p-3 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-xs font-mono text-cyan-300 flex items-center justify-center gap-2"
                    >
                      <Shield size={14} />
                      <span>Trigger Real-time Audit</span>
                    </button>

                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                      <span className="text-xs font-mono text-slate-400 whitespace-nowrap">Threshold:</span>
                      <input
                        type="range"
                        min="60"
                        max="99"
                        value={confidenceThreshold}
                        onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                        className="w-full accent-cyan-400 cursor-pointer"
                      />
                      <span className="text-xs font-mono text-cyan-400">{confidenceThreshold}%</span>
                    </div>
                  </div>

                  {/* Real-time Logs Console */}
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono space-y-1.5">
                    <div className="text-slate-400 pb-1 border-b border-slate-800 flex items-center gap-1.5">
                      <Terminal size={13} className="text-cyan-400" />
                      <span>FastAPI WebSocket Event Stream</span>
                    </div>
                    {simLog.slice(0, 3).map((log, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300">
                        <span className="text-slate-500">[{log.time}]</span>
                        <span className={log.status === 'warning' ? 'text-red-400' : log.status === 'success' ? 'text-emerald-400' : 'text-cyan-400'}>
                          {log.msg}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SIMULATION 2: SYNAPSE AI (MEETING INTELLIGENCE & GEMINI) */}
              {project.id === 'synapse-ai' && (
                <div className="space-y-4">
                  {/* Virtual Audio Player & Waveform */}
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleRunSynapse}
                          className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform"
                        >
                          {audioPlaying ? <Pause size={18} /> : <Play size={18} />}
                        </button>
                        <div>
                          <div className="text-sm font-bold text-white">Sprint_Planning_Sync_Q3.wav</div>
                          <div className="text-xs text-slate-400 font-mono">Duration: 42m 18s | Google Gemini 1.5 Pro Model</div>
                        </div>
                      </div>

                      <button
                        onClick={handleRunSynapse}
                        disabled={synapseStep === 'transcribing'}
                        className="px-4 py-2 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/40 text-xs font-mono text-purple-300 flex items-center gap-2 shadow-md"
                      >
                        <Sparkles size={14} className={synapseStep === 'transcribing' ? 'animate-spin' : ''} />
                        <span>{synapseStep === 'transcribing' ? 'Synthesizing with Gemini...' : 'Run Full AI Intelligence Pipeline'}</span>
                      </button>
                    </div>

                    {/* Simulated Waveform Visualizer */}
                    <div className="h-14 flex items-center justify-between gap-1 px-3 bg-slate-900/80 rounded-xl border border-slate-800">
                      {[40, 65, 80, 45, 90, 70, 30, 85, 100, 75, 60, 40, 95, 60, 80, 50, 70, 90, 40, 60, 80, 95, 70, 50, 85, 100, 65, 45, 70, 50].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: audioPlaying ? `${Math.max(20, (h * Math.sin(Date.now() / 200 + i)) % 100)}%` : `${h}%` }}
                          className={`w-full rounded-full transition-all duration-150 ${audioPlaying ? 'bg-gradient-to-t from-purple-500 to-cyan-400' : 'bg-slate-700'}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Gemini Intelligence Results Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Transcript Box */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Terminal size={14} />
                        <span>Real-Time Speaker Diarization</span>
                      </div>
                      <div className="text-xs text-slate-300 space-y-2 max-h-44 overflow-y-auto pr-1">
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <span className="font-bold text-cyan-400">[00:04] Alex (Product):</span> "We need to optimize the FastAPI microservices for latency under 100ms before next release."
                        </div>
                        <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                          <span className="font-bold text-purple-400">[00:25] Dharnish (AI Lead):</span> "I have containerized the YOLOv8 model with TensorRT on AWS ECS. Ready for deployment."
                        </div>
                      </div>
                    </div>

                    {/* Gemini AI Action Items & Key Decisions */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/30 space-y-2 shadow-lg shadow-purple-950/20">
                      <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 size={14} />
                        <span>Gemini Extracted Action Items</span>
                      </div>
                      <div className="text-xs space-y-2">
                        <div className="flex items-start gap-2 p-2 rounded bg-emerald-950/30 border border-emerald-500/20">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-white">Deploy AWS ECS Task Definition</div>
                            <div className="text-slate-400 text-[11px]">Assignee: Dharnish V | Priority: High</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-2 rounded bg-cyan-950/30 border border-cyan-500/20">
                          <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-white">Run API Stress Test &amp; Validation</div>
                            <div className="text-slate-400 text-[11px]">Assignee: QA Team | Status: Automated</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SIMULATION 3: SMART VEHICLE & DOCK MANAGEMENT SYSTEM (VMS) */}
              {project.id === 'smart-vms' && (
                <div className="space-y-4">
                  {/* Dock Bay Layout Grid */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Server size={14} />
                        <span>Live Warehouse Bay Allocation &amp; Telemetry</span>
                      </div>
                      <button
                        onClick={handleAddTruck}
                        className="px-3 py-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-xs font-mono text-emerald-300 flex items-center gap-1.5"
                      >
                        <RefreshCw size={13} />
                        <span>Simulate Inbound Vehicle</span>
                      </button>
                    </div>

                    {/* Docks Graphic */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {['Bay 01 (Unloading)', 'Bay 02 (Inspection)', 'Bay 03 (Available)'].map((dock, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border text-xs font-mono ${idx === 2 ? 'bg-slate-900/50 border-slate-800 text-slate-400' : 'bg-emerald-950/40 border-emerald-500/40 text-white'}`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold">{dock}</span>
                            <span className={`w-2 h-2 rounded-full ${idx === 2 ? 'bg-slate-600' : 'bg-emerald-400 animate-pulse'}`} />
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {idx === 0 ? 'Vehicle: TRK-8821' : idx === 1 ? 'Vehicle: TRK-9042' : 'Dock Ready for Allocation'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Queue Table */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="text-xs font-mono text-slate-400">Current Factory Logistics Queue</div>
                    <div className="space-y-2">
                      {vmsQueue.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex flex-wrap items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-cyan-400">{item.id}</span>
                            <span className="text-slate-300">{item.driver}</span>
                            <span className="text-slate-500 hidden sm:inline">({item.cargo})</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">{item.dock}</span>
                            <span className="text-emerald-400 font-semibold">{item.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: SYSTEM ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h3 className="text-sm font-mono font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  <Layers size={16} />
                  <span>End-to-End System Topology</span>
                </h3>
                <div className="space-y-3">
                  {project.architecture.map((item, idx) => {
                    const [layer, desc] = item.split(': ');
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center gap-2 text-xs"
                      >
                        <span className="font-mono font-bold text-cyan-300 sm:w-36 shrink-0">
                          {layer}
                        </span>
                        <span className="text-slate-300 font-normal">
                          {desc}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tech Stack Matrix */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h3 className="text-sm font-mono font-bold text-purple-400 mb-3 flex items-center gap-2">
                  <Cpu size={16} />
                  <span>Production Tech Stack &amp; Libraries</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: METRICS & ENGINEERING HIGHLIGHTS */}
          {activeTab === 'highlights' && (
            <div className="space-y-6">
              {/* Metrics Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(project.metrics).map(([key, val]) => (
                  <div key={key} className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 text-center">
                    <div className="text-base sm:text-lg font-bold font-mono text-cyan-400">{val}</div>
                    <div className="text-xs text-slate-400 mt-1 uppercase font-mono">{key}</div>
                  </div>
                ))}
              </div>

              {/* Detailed Highlight Bullets from Resume */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="text-sm font-mono font-bold text-white mb-2">Key Engineering Contributions &amp; Results</h3>
                <ul className="space-y-2.5">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Live Demo and GitHub actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono hidden sm:block">
            Status: Deployed &amp; Production Verified
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-colors border border-slate-700"
            >
              <GithubIcon size={14} />
              <span>Source Code</span>
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/25"
            >
              <span>Launch Live App</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
