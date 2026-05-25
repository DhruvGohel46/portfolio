import { 
  IoBriefcaseOutline, 
  IoFlashOutline, 
  IoHardwareChipOutline, 
  IoTrophyOutline, 
  IoChatbubblesOutline, 
  IoMedalOutline 
} from 'react-icons/io5';

export const projects = [
  {
    id: 'project-shrink',
    title: 'Project Shrink',
    category: 'OS SECURITY',
    desc: 'Deep research into silent privilege escalation and persistence mechanisms on Windows 10/11 environments. Educational research only.',
    tech: ['C++', 'PowerShell', 'x64dbg', 'ASM'],
    image: '/projects/Shrink.png',
    link: '#',
    github: 'https://github.com/DhruvGohel46/Shrink',
    youtubeWin10: 'https://youtu.be/zPHhtJglhHI?si=5Uj8lGkE7dGCK4Bf',
    youtubeWin11: 'https://youtu.be/ztY4NmsZrxs?si=vpc0xnnylyn6l-6z'
  },
  {
    id: 'infoos-pos',
    title: 'InfoOS POS',
    category: 'SYS ARCHITECTURE',
    desc: 'High-performance, offline-first POS & inventory system with zero latency and thermal automation for retail environments.',
    tech: ['React', 'Flask', 'SQLite', 'RestAPI'],
    image: '/projects/InfoOS.png',
    link: '#',
    github: 'https://github.com/DhruvGohel46/Rebill'
  },
  {
    id: 'railqr-logistics',
    title: 'RailQR Logistics',
    category: 'AI / EMBEDDED',
    desc: 'Smart India Hackathon project for railway asset tracking utilizing local Ollama AI for fault data normalization and structuring.',
    tech: ['Python', 'Ollama', 'QR Metrics', 'React'],
    image: '/projects/RailQR.png',
    link: '#',
    github: '#',
    experienceMatch: 'sih'
  },
  {
    id: 'wofo-assistant',
    title: 'WOFO Enterprise Assistant',
    category: 'AI / RAG',
    desc: 'Axios Hackathon project. A powerful offline-capable RAG-based enterprise knowledge assistant designed to securely query internal documentation using Gemini and Qdrant DB.',
    tech: ['Gemini 3 Flash', 'Qdrant DB', 'React', 'Node.js'],
    image: '/projects/wofo.png',
    link: 'https://dune-perfume-42d.notion.site/WOFO-RAG-Based-Enterprise-Knowledge-Assistant-2d95191e15438004b3c2c9bd8ca441f2?source=copy_link',
    github: 'https://github.com/varun-ai69/Axios-hackathon',
    experienceMatch: 'wofo'
  },
  {
    id: 'coso-platform',
    title: 'COSO Platform',
    category: 'FULLSTACK ENG',
    desc: 'Campus wide social infrastructure with Role-Based Access Control and multi-layered data encryption mechanisms natively.',
    tech: ['Django', 'PostgreSQL', 'Tailwind', 'DRF'],
    image: '/projects/COSO.png',
    link: '#',
    github: '#'
  },
  {
    id: 'falak-al-buraimi-salon',
    title: 'Falak Al Buraimi Salon',
    category: 'WEB DEV',
    desc: 'Freelance responsive salon website for a client in Oman — animated offers, service cards, Google Maps embed. 90+ Lighthouse score.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
    image: '/projects/Falak Al Buraimi Beauty Salon.png',
    link: 'https://falak-al-buraimi-beauty-saloon.netlify.app/',
    github: '#'
  }
];

export const experiences = [
  {
    type: 'INTERNSHIP',
    id: 'oaisis',
    title: 'AICTE Oasis Infobyte',
    role: 'Python Engineering Intern',
    period: '2024 - PRESENT',
    desc: 'Translating tactical logic into secure, production-ready system tools. Focused on GUI development (PyQt6) and thread-safe API architectures.',
    details: ['Vizo Secure Voice System', 'Tactical Password Engine', 'API Audit Integration'],
    icon: IoBriefcaseOutline
  },
  {
    type: 'HACKATHON',
    id: 'sahaay',
    title: 'GDG Autonomous Hacks 26 (Offline)',
    role: 'Top 10 Finalist — SaHaay Emergency Grid',
    period: 'JAN 2026',
    desc: 'Cloud-native, offline-first autonomous ambulance dispatch system designed to replace human guesswork with intelligent orchestration. Engineered custom GSM/SMS transport layer ("Clockless" state machine), Ripple Search Algorithm for progressive driver discovery, and Self-Healing Failover for race conditions. Integrated API for traffic signal pre-emption (Green Corridor).',
    details: ['<200ms Dispatch Latency', 'Node.js/Express', 'MongoDB', 'Ripple Search', 'GSM Failover'],
    github: 'https://github.com/DhruvGohel46/emergency-dispatch-system',
    icon: IoFlashOutline
  },
  {
    type: 'HACKATHON',
    id: 'agentic-quiz',
    title: 'GDG Autonomous Hacks 26 (Online)',
    role: 'Participant — Autonomous Knowledge Extractor',
    period: 'JAN 2026',
    desc: 'Developed an Agentic AI solution to transform educational content. Built an AI Agent that extracts key concepts automatically, organizes data hierarchically, generates unique quiz questions, and validates difficulty logic through self-checking mechanisms. Spearheaded the Frontend Architecture for intuitive knowledge visualization.',
    details: ['Agentic AI', 'React', 'Self-Checking Logic', 'Knowledge Visualization'],
    github: 'https://github.com/varun-ai69/Agentic---AI-',
    icon: IoHardwareChipOutline
  },
  {
    type: 'HACKATHON',
    id: 'railvision',
    title: 'Hack Innovate 2026',
    role: 'Top 6 Finalist — RailVision AI',
    period: 'FEB 2026',
    desc: 'Engineered a pipeline that ensures high visual fidelity while optimizing for computational efficiency for "Motion Blur Mitigation for High-Speed Wagon Monitoring". Utilized NAFNet (deblurring) and Real-ESRGAN (super-resolution). Optimized extraction logic to trigger OCR on every 5th frame.',
    details: ['52 FPS on RTX 2050', '96.2% OCR Accuracy', 'NAFNet & Real-ESRGAN', 'Strategic OCR Sampling'],
    github: 'https://github.com/DhruvGohel46/hack-innovate-2026',
    icon: IoTrophyOutline
  },
  {
    type: 'HACKATHON',
    id: 'wofo',
    title: 'Axios Hackathon',
    role: 'Participant — WOFO Enterprise Assistant',
    period: 'DEC 2025',
    desc: 'Built WOFO, a powerful RAG-based enterprise knowledge assistant. An offline-capable AI assistant designed to streamline enterprise knowledge management. Allows employees to instantly query internal documents and get accurate, context-aware answers without hallucination. Led the Frontend development and integrated secure Authentication.',
    details: ['RAG', 'Gemini 3 Flash', 'Qdrant Vector DB', 'React', 'Node.js'],
    github: 'https://github.com/varun-ai69/Axios-hackathon',
    blog: 'https://medium.com/@kushwahavarun988/wofo-rag-based-enterprise-knowledge-offline-assistant-302dc887933a',
    docs: 'https://dune-perfume-42d.notion.site/WOFO-RAG-Based-Enterprise-Knowledge-Assistant-2d95191e15438004b3c2c9bd8ca441f2?source=copy_link',
    youtube: 'https://youtu.be/T9rLANULhrg?si=7Q0lAvDePAo_sbBG',
    projectMatch: 'wofo-assistant',
    icon: IoChatbubblesOutline
  },
  {
    type: 'HACKATHON',
    id: 'sih',
    title: 'Smart India Hackathon',
    role: 'Participant (GTU Representative)',
    period: '2025',
    desc: 'Railway asset tracking and fault prediction system. Developed RailQR, a smart logistics platform using local AI models to scan QR codes on tracks and automatically parse, clean, and map asset telemetry database queries in offline scenarios.',
    details: ['RailQR Logistics', 'Python/Ollama', 'QR Metrics', 'React', 'Local AI Models'],
    projectMatch: 'railqr-logistics',
    icon: IoMedalOutline
  }
];

export const skills = [
  {
    id: 'sec',
    title: 'Security Research',
    skills: ['OS Security', 'Kernel Exploitation', 'Penetration Testing', 'Digital Forensics', 'Binary Analysis'],
  },
  {
    id: 'web',
    title: 'Systems & Web',
    skills: ['React / Next.js', 'Python / Django', 'PostgreSQL', 'Node.js', 'API Architecture'],
  },
  {
    id: 'tools',
    title: 'Tactical Tooling',
    skills: ['Metasploit', 'Wireshark', 'Burp Suite', 'GDB / OllyDbg', 'PowerShell'],
  }
];

export const achievements = [
  {
    id: 'nptel-python',
    title: 'NPTEL Python — Top 5%',
    institution: 'IIT Madras',
    score: '94% ELITE',
    image: '/Achivments/joy of python.png',
    iconName: 'star'
  },
  {
    id: 'oracle-data',
    title: 'Oracle Data Platform',
    institution: 'ORACLE CERTIFIED',
    score: 'ASSOCIATE',
    image: '/Achivments/Oracle Foundation Associate.jpg',
    iconName: 'ribbon'
  },
  {
    id: 'nptel-cloud',
    title: 'NPTEL Cloud Computing',
    institution: 'IIT KHARAGPUR',
    score: '87% ELITE + SILVER',
    image: '/Achivments/NPTEL Cloud Computing.png',
    iconName: 'cloud'
  },
  {
    id: 'nptel-java',
    title: 'NPTEL Java',
    institution: 'IIT KHARAGPUR',
    score: '85% ELITE',
    image: '/Achivments/nptel_Java.jpg',
    iconName: 'code'
  }
];
