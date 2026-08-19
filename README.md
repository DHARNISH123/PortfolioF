# Dharnish V - AI/ML & Full-Stack Developer Portfolio

An interactive, responsive, modern portfolio built with **React.js, Tailwind CSS, Lucide Icons, and Canvas Confetti**.

---

## ✨ Features & Architecture

- **🧠 Interactive AI Neural Particle Canvas**: Particle and synapse network reacting dynamically to mouse movement.
- **⚡ Interactive Project Sandbox Simulators**:
  - **VisionGuard AI (Real-Time PPE Detection)**: Interactive simulated camera feed with YOLOv8 bounding boxes, confidence sliders, and live FastAPI event stream logs.
  - **Synapse AI (Meeting Intelligence)**: Waveform audio visualizer, Google Gemini transcription, speaker diarization, and automated action item extractor.
  - **Smart Vehicle & Dock Management System (VMS)**: Logistics dock bay allocator, queue tracking, and live telemetry simulation.
- **🤖 Built-in "Ask Dharnish AI" Chatbot**: AI assistant trained directly on Dharnish's resume to answer recruiter questions about projects, skills, education, and credentials.
- **📊 Technical Skill Matrix**: Categorized, searchable competency matrix with animated proficiency bars.
- **🎓 Verified Academic Timeline**: JAIN University B.Tech (CGPA: 8.87) & Higher Secondary (90%).
- **🏆 Certifications & Hackathons**: University of Glasgow, Microsoft, Streamlit, and Collegiate Football Captain leadership.
- **📬 Interactive Contact Terminal**: Copy-to-clipboard, direct mail/phone links, and celebratory confetti dispatch.

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
PortfolioF/
├── public/
│   ├── profile.jpg          # Profile photo
│   └── Resume.pdf           # Downloadable PDF Resume
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── AiChatbotDrawer.jsx
│   │   ├── CertificationsAndAchievements.jsx
│   │   ├── Contact.jsx
│   │   ├── EducationTimeline.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Navbar.jsx
│   │   ├── NeuralCanvas.jsx
│   │   ├── ProjectModal.jsx
│   │   └── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js # All resume data & project details
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```
