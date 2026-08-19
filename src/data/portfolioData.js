export const portfolioData = {
  personal: {
    name: "Dharnish V",
    title: "AI & ML Engineer / Full-Stack Developer",
    tagline: "Building Scalable AI Systems, Computer Vision Pipelines & Intelligent Full-Stack Architectures",
    email: "dharnidharni2356@gmail.com",
    phone: "+91 7094950944",
    location: "Bangalore, India",
    github: "https://github.com/DHARNISH123",
    linkedin: "https://www.linkedin.com/in/dharnishv23/",
    resumeUrl: "/Resume.pdf",
    avatar: "/profile.jpg",
    bio: "Aspiring Computer Science (AI & ML) undergraduate with hands-on experience in full-stack development, AI/ML, computer vision, and cloud-based application development. Proficient in Python, Java, JavaScript, RestAPI, React.js, SQL, Docker, and AWS, with a strong foundation in data structures, algorithms, and scalable software engineering.",
    stats: [
      { label: "B.Tech CGPA", value: "8.87", highlight: "JAIN University" },
      { label: "12th Grade", value: "90%", highlight: "Chellammal MHSS" },
      { label: "Projects Deployed", value: "3+", highlight: "Live Production" },
      { label: "Core Competency", value: "AI/ML & CV", highlight: "YOLOv8 + LLMs" }
    ]
  },

  education: [
    {
      institution: "JAIN (Deemed-to-be University), FET",
      degree: "B.Tech – Specialization in Artificial Intelligence and Machine Learning",
      period: "2023 – 2027",
      location: "Bangalore",
      score: "CGPA: 8.87 / 10",
      type: "Undergraduate",
      highlights: [
        "Specialized in Artificial Intelligence, Deep Learning, Computer Vision, and Cloud Native Architectures.",
        "Active leader in technical events, coding hackathons, and sports (Football Captain).",
        "Consistent academic excellence with an 8.87 CGPA."
      ],
      courses: ["Data Structures & Algorithms", "Deep Learning", "Computer Vision", "Database Management Systems", "Operating Systems", "Computer Networks"]
    },
    {
      institution: "Chellammal Matric Higher Secondary School",
      degree: "12th Standard (Higher Secondary)",
      period: "2022 – 2023",
      location: "Trichy",
      score: "90%",
      type: "Schooling",
      highlights: [
        "Focused on Mathematics, Physics, Chemistry, and Computer Science.",
        "Graduated with Distinction (90%)."
      ],
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      institution: "Chellammal Matric Higher Secondary School",
      degree: "10th Standard (Secondary School)",
      period: "2020 – 2021",
      location: "Trichy",
      score: "Completed (State Board)",
      type: "Schooling",
      highlights: [
        "Strong foundation in STEM subjects and foundational programming."
      ],
      courses: ["Science", "Mathematics", "Social Studies", "Languages"]
    }
  ],

  projects: [
    {
      id: "synapse-ai",
      title: "Synapse AI: Meeting Intelligence Platform",
      subtitle: "Enterprise Audio Intelligence & Action Item Extraction with Google Gemini",
      category: "AI/ML SaaS",
      badge: "Featured AI SaaS",
      techStack: ["Next.js", "FastAPI", "PostgreSQL", "Google Gemini", "Docker", "AWS", "REST APIs"],
      summary: "An AI-powered SaaS platform that transcribes meeting audio, generates intelligent summaries, extracts action items and decisions, and enables semantic search across meeting history using Google Gemini.",
      highlights: [
        "Transcribes meeting recordings in real-time with speaker diarization and noise reduction filtering.",
        "Extracts structured action items, assignees, deadlines, and high-impact key decisions via Google Gemini LLM prompt orchestration.",
        "Enables instant semantic and vector search across extensive historical meeting archives.",
        "Engineered scalable full-stack architecture with Next.js, FastAPI, PostgreSQL, and Docker containerization.",
        "Deployed on AWS with rigorous security, JWT authentication, and production-grade cloud infrastructure."
      ],
      metrics: {
        accuracy: "98.4% Transcript Fidelity",
        latency: "< 1.2s Summary Generation",
        scalability: "Cloud Native AWS / Docker"
      },
      architecture: [
        "Client Layer: Next.js responsive web UI with waveform visualizer & interactive query editor",
        "API Gateway: FastAPI asynchronous endpoints with rate limiting & token authorization",
        "AI Engine: Google Gemini 1.5 Pro / Flash for structured JSON extraction & semantic embeddings",
        "Storage Layer: PostgreSQL with vector indexing for lightning-fast meeting retrieval",
        "Cloud & DevOps: Dockerized microservices deployed on AWS with zero-downtime CI/CD"
      ],
      interactiveType: "synapse-ai-sim",
      liveDemoUrl: "https://synapse-ai-meeting-intelligence-pla.vercel.app/",
      githubUrl: "https://github.com/DHARNISH123",
      color: "from-purple-500 to-indigo-600",
      accentColor: "#9333ea"
    },
    {
      id: "visionguard-ai",
      title: "VisionGuard AI – Real-Time PPE Detection System",
      subtitle: "High-Performance Computer Vision & Industrial Workplace Safety Monitor",
      category: "Computer Vision & Edge AI",
      badge: "Real-Time CV",
      techStack: ["Python", "YOLOv8", "OpenCV", "React.js", "FastAPI", "Docker", "AWS"],
      summary: "Developed a real-time computer vision system that detects Personal Protective Equipment (PPE) compliance from live video streams using YOLOv8 and OpenCV to improve workplace safety.",
      highlights: [
        "Detects helmets, safety vests, gloves, and protective gear at 45+ FPS on edge and cloud pipelines.",
        "Generates instant alerts and triggers audio-visual warnings upon non-compliance or breach of safety zones.",
        "Built a FastAPI-based monitoring dashboard with real-time incident logging, thermal heatmaps, and audit reports.",
        "Packaged and deployed with Docker containers on AWS for scalable industrial safety monitoring across multiple plant feeds."
      ],
      metrics: {
        mAP: "94.8% mAP@50 on Custom Dataset",
        fps: "48 FPS Live Inference",
        reduction: "75% Reduction in Safety Infractions"
      },
      architecture: [
        "Ingestion: RTSP / WebRTC video stream decoder via OpenCV multithreaded workers",
        "Inference: YOLOv8 custom-trained neural weights optimized with TensorRT/ONNX",
        "Detection Engine: Real-time class identification for Hardhats, High-Vis Vests, and Safety Harnesses",
        "Alerting Engine: FastAPI WebSockets for sub-second push notifications to field supervisors",
        "Analytics: Violation time-series charts, camera grid view, and exportable compliance PDFs"
      ],
      interactiveType: "visionguard-sim",
      liveDemoUrl: "https://visionguardai-five.vercel.app/",
      githubUrl: "https://github.com/DHARNISH123",
      color: "from-cyan-500 to-blue-600",
      accentColor: "#00f2fe"
    },
    {
      id: "smart-vms",
      title: "Smart Vehicle & Dock Management System",
      subtitle: "Automated Logistics Queue Tracking, Dock Allocation & KPI Dashboard",
      category: "Full-Stack Logistics",
      badge: "Logistics ERP",
      techStack: ["Python", "Flask", "React.js", "PostgreSQL", "REST APIs", "Tailwind CSS"],
      summary: "Developed a Vehicle Management System (VMS) for factory logistics to manage vehicle entry, queue tracking, dock allocation, and vehicle movement with real-time telemetry.",
      highlights: [
        "Automated gate-in/gate-out workflows, dynamic queue scheduling, and intelligent dock bay allocation.",
        "Built an interactive real-time dashboard for monitoring vehicle status, dock utilization, and turnaround KPIs.",
        "Implemented role-based access control (RBAC), automatic SMS/email notifications, and exportable operational analytics.",
        "Drastically reduced turnaround time and eliminated warehouse congestion with queue priority logic."
      ],
      metrics: {
        efficiency: "+42% Dock Utilization",
        turnaround: "-35% Truck Wait Times",
        uptime: "99.9% Production Ready"
      },
      architecture: [
        "Frontend: React.js SPA with live dock layout, drag-and-drop bay reassignment & KPI gauges",
        "Backend: Python Flask REST API with queue optimization algorithms and webhook triggers",
        "Database: Relational PostgreSQL schema tracking truck timestamps, driver logs & bay states",
        "Notification: Real-time driver queue alerts via SMS and dock supervisor push notifications"
      ],
      interactiveType: "vms-sim",
      liveDemoUrl: "https://gate2dock-live.onrender.com/",
      githubUrl: "https://github.com/DHARNISH123",
      color: "from-emerald-500 to-teal-600",
      accentColor: "#00f5a0"
    }
  ],

  skillCategories: [
    {
      title: "AI / ML & Deep Learning",
      icon: "Cpu",
      description: "Neural Networks, LLMs, Computer Vision & Prompt Engineering",
      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Deep Learning", level: 85 },
        { name: "YOLOv8 & Computer Vision", level: 92 },
        { name: "OpenCV", level: 88 },
        { name: "LLMs & Prompt Engineering", level: 90 },
        { name: "RAG & LangChain", level: 84 },
        { name: "NLP", level: 82 },
        { name: "TensorFlow", level: 80 }
      ]
    },
    {
      title: "Programming Languages",
      icon: "Code2",
      description: "Robust languages for backend logic, data structures and systems",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 88 },
        { name: "SQL", level: 90 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "TypeScript", level: 82 }
      ]
    },
    {
      title: "Web & Full-Stack Development",
      icon: "Globe",
      description: "High-performance reactive interfaces and scalable REST architectures",
      skills: [
        { name: "React.js", level: 92 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Flask & FastAPI", level: 90 },
        { name: "REST APIs", level: 94 },
        { name: "HTML5 & CSS3", level: 96 }
      ]
    },
    {
      title: "Core Computer Science & Testing",
      icon: "Terminal",
      description: "Algorithmic thinking, systems architecture, and quality assurance",
      skills: [
        { name: "Data Structures & Algorithms (DSA)", level: 88 },
        { name: "Object-Oriented Programming (OOPs)", level: 92 },
        { name: "Database Management Systems (DBMS)", level: 90 },
        { name: "Operating Systems (OS)", level: 85 },
        { name: "Computer Networks (CN)", level: 84 },
        { name: "SDLC & API Validation", level: 88 },
        { name: "Software Testing & Debugging", level: 86 }
      ]
    },
    {
      title: "Databases, Cloud & DevOps",
      icon: "Database",
      description: "Data storage, containerization, and cloud deployment pipelines",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Git & GitHub", level: 94 },
        { name: "Linux CLI", level: 86 },
        { name: "Tableau & Excel", level: 82 }
      ]
    },
    {
      title: "Soft Skills & Leadership",
      icon: "Users",
      description: "Team dynamics, communication, agile execution and adaptability",
      skills: [
        { name: "Team Collaboration & Leadership", level: 95 },
        { name: "Analytical Thinking", level: 94 },
        { name: "Communication", level: 90 },
        { name: "Time Management", level: 88 },
        { name: "Adaptability & Problem Solving", level: 95 }
      ]
    }
  ],

  certifications: [
    {
      title: "Generative AI in Education",
      issuer: "University of Glasgow (Coursera)",
      date: "2024",
      skills: ["Generative AI", "LLM Integration", "AI Ethics", "Prompt Design"],
      icon: "Sparkles",
      verifyUrl: "https://coursera.org"
    },
    {
      title: "Build a Machine Learning Web App with Streamlit and Python",
      issuer: "Coursera",
      date: "2024",
      skills: ["Streamlit", "Model Deployment", "Python", "Data Visualization"],
      icon: "Layers",
      verifyUrl: "https://coursera.org"
    },
    {
      title: "Introduction to Computers and Operating Systems",
      issuer: "Microsoft (Coursera)",
      date: "2023",
      skills: ["OS Architecture", "Memory Management", "System Admin", "Networking"],
      icon: "Monitor",
      verifyUrl: "https://coursera.org"
    }
  ],

  achievements: [
    {
      title: "Participant – Build with India Hackathon",
      category: "National Hackathon",
      desc: "Developed an innovative AI-driven software prototype tackling real-world Indian infrastructure and automation challenges.",
      icon: "Award"
    },
    {
      title: "Participant – JAIN University Hackathon",
      category: "University Hackathon",
      desc: "Engineered a full-stack rapid prototype within 24 hours under rigorous judging on problem-solving and scalability.",
      icon: "Zap"
    },
    {
      title: "Captain – University Football Team",
      category: "Sports & Leadership",
      desc: "Led the collegiate football squad across inter-university championships, fostering tactical discipline, resilience, and high-pressure team coordination.",
      icon: "Trophy"
    }
  ]
};
