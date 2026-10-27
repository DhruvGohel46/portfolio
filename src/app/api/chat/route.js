import { GoogleGenerativeAI } from "@google/generative-ai";
import { projects, experiences, skills, achievements } from "@/utils/portfolioData";

export const dynamic = 'force-dynamic';

const apiKey = process.env.GEMINI_API_KEY;

// Master context for human-friendly portfolio AI guide
const SYSTEM_CONTEXT = `You are Dhruv Gohel's personal AI portfolio assistant and guide.
Your purpose is to welcome visitors, recruiters, and engineers, and answer their questions about Dhruv's engineering background, projects, security research, hackathons, and certifications.

CONVERSATIONAL GUIDELINES (BE HUMAN & ENGAGING):
1. Warm, Natural Voice: Speak like a friendly, articulate tech peer who knows Dhruv's work well. Avoid robotic clichés, rigid declarations, or stiff corporate phrases like "DATA CLEARANCE ERROR" or "EXECUTING GETTER".
2. Multi-Turn Context Awareness: You are participating in an ongoing conversation. You have full access to past messages in this chat. ALWAYS leverage this history! If the user says "tell me more about that", "what tech did he use there?", "can you share the github link?", or "how does that relate to his security work?", connect your response directly back to the earlier discussion.
3. Factual & Grounded: All details about Dhruv's projects, tech stack, hackathon placements, and credentials are provided in the PORTFOLIO DATABASE below. Use real facts, links, and details from the database. If asked something personal or completely unrelated to his professional portfolio, respond politely and guide them back to his engineering work.
4. Natural Formatting: Use clean markdown with clear paragraphs, bullet lists, and links (e.g., [GitHub](url), [Live Demo](url)) where helpful.
5. Third-person about Dhruv: Refer to Dhruv in the 3rd person ("Dhruv", "he", "his"), while using a welcoming 1st-person voice for yourself ("I'd be happy to explain...", "Here's how Dhruv built it...").
6. Heading Rule: Do NOT repeat "Dhruv Gohel" in the heading. Keep headings concise, clean, and topic-focused (e.g. "Current Focus & Studies", "SARDET Intelligence Pipeline", "Hackathon Highlights").

RESPONSE JSON FORMAT:
You MUST return a valid JSON object matching this structure:
{
  "thinkingSteps": [
    "A natural, user-friendly phrase of what you are checking (e.g. 'Looking into Dhruv\\'s AI systems and architecture...')"
  ],
  "text": {
    "heading": "Clean topic title (e.g., 'Current Focus & Engagements' or 'SARDET Satellite Intelligence')",
    "paragraphs": [
      "Engaging conversational explanation written in human-friendly language."
    ],
    "bullets": [
      "Key highlight with context or tech stack",
      "Another useful takeaway or repository link"
    ],
    "closing": "Warm concluding sentence or helpful suggestion on what else they might like to check out."
  }
}
`;

function generateLocalFallbackResponse(prompt, history = []) {
  const q = prompt.toLowerCase();
  const pastText = history.map(h => (typeof h.content === 'string' ? h.content : JSON.stringify(h.content))).join(' ').toLowerCase();

  // Currently doing / What is he working on / Active focus
  if (
    q.includes('current') || 
    q.includes('doing') || 
    q.includes('working on') || 
    q.includes('now') || 
    q.includes('present') || 
    q.includes('today') ||
    q.includes('curreently') ||
    q.includes('recent') ||
    q.includes('latest')
  ) {
    return {
      thinkingSteps: [
        "Checking Dhruv's current university studies and active internship...",
        "Compiling active engineering projects and technical focus..."
      ],
      text: {
        heading: "Current Focus & Active Engagements",
        paragraphs: [
          "Dhruv is currently in his 4th semester pursuing a B.Tech in Computer Engineering at Gujarat Technological University (GTU - SET), graduating in 2028.",
          "Alongside his degree, he is actively engaged in industry engineering and system-level research:"
        ],
        bullets: [
          "Python Engineering Intern at AICTE Oasis Infobyte (2024 - Present): Developing thread-safe system tools, secure voice command architectures, and modern PyQt6 desktop interfaces.",
          "Building SARDET: Continually advancing his 13-stage deep learning pipeline (YOLO11-OBB + ConvNeXt) for satellite ship and aircraft intelligence.",
          "Refining InfoOS POS: Developing the zero-latency, 100% offline-first retail operations suite with autonomous multi-agent state graphs.",
          "OS Security Research: Actively researching Windows privilege escalation vectors, binary analysis, and kernel persistence mechanics."
        ],
        closing: "Would you like to know more about any of his current systems or hackathon prototypes?"
      }
    };
  }

  // Greeting
  if (/^(hi|hello|hey|greetings|who are you|what can you do)/i.test(q)) {
    return {
      thinkingSteps: ["Welcoming visitor to the portfolio..."],
      text: {
        heading: "Welcome & Portfolio Guide",
        paragraphs: [
          "Hello! I'm Dhruv's portfolio AI assistant. I'm here to give you an insider look into his software engineering, autonomous AI systems, hackathon awards, and OS security research.",
          "Feel free to ask me anything — from how he designed the SARDET satellite pipeline or offline POS architecture, to his experience in high-stakes hackathons like Smart India Hackathon and GDG Autonomous Hacks."
        ],
        bullets: [
          "Featured Systems: SARDET (Computer Vision), InfoOS POS (Offline Multi-Agent), RailQR (AI Logistics), Project Shrink (OS Security)",
          "Competitions: Finalist at GDG Autonomous Hacks 26, Smart India Hackathon, and Hack Innovate 2026",
          "Credentials: Elite NPTEL certifications in Python, Cloud, Java, and Cybersecurity internship"
        ],
        closing: "What area would you like to explore first?"
      }
    };
  }

  // SARDET
  if (q.includes('sardet') || q.includes('satellite') || q.includes('aircraft') || q.includes('detection')) {
    const p = projects.find(item => item.id === 'sardet');
    return {
      thinkingSteps: [
        "Analyzing Dhruv's SARDET computer vision pipeline...",
        "Retrieving deep learning models and benchmark metrics..."
      ],
      text: {
        heading: "SARDET: Satellite Intelligence Pipeline",
        paragraphs: [
          "SARDET is one of Dhruv's flagship AI systems. It's a comprehensive 13-stage geospatial intelligence pipeline that detects, classifies, and tracks ships and aircraft across satellite imagery (both Optical and Synthetic Aperture Radar / SAR).",
          "Dhruv integrated 4 production deep learning models into the pipeline, combining YOLO11-OBB (Oriented Bounding Box) detectors with ConvNeXt classifiers."
        ],
        bullets: [
          "Detection Performance: 93.05% mAP@50 on optical imagery and 79.28% on challenging SAR radar scans",
          "Aircraft Accuracy: 98.73% fine-grained classification accuracy",
          "Tech Stack: PyTorch, YOLO11-OBB, ConvNeXt, FastAPI, Rasterio, and GeoPandas",
          `Repository: [GitHub Link](${p ? p.github : 'https://github.com/DhruvGohel46/SARDET'})`
        ],
        closing: "Would you like to know how SARDET handles geospatial tracking or how it compares to his other AI projects?"
      }
    };
  }

  // InfoOS POS
  if (q.includes('infoos') || q.includes('pos') || q.includes('retail') || q.includes('rebill') || q.includes('agentgraph')) {
    const p = projects.find(item => item.id === 'infoos-pos');
    return {
      thinkingSteps: [
        "Checking InfoOS POS system architecture...",
        "Reviewing offline-first state-graph multi-agent AI..."
      ],
      text: {
        heading: "InfoOS: Offline Multi-Agent POS Suite",
        paragraphs: [
          "InfoOS is a zero-latency, 100% offline-first retail operations suite Dhruv designed. It combines everyday store operations with an autonomous multi-agent AI framework.",
          "Even if the internet goes completely down, cashiers and managers can merge orders, run analytics, manage payroll, and interact with the AI without losing a single beat."
        ],
        bullets: [
          "Autonomous Agent Framework: 7 specialized domain agents coordinated via state-graph orchestration with human-in-the-loop approvals",
          "Performance: Fast-path routing with 0-token overhead for deterministic actions and full cryptographic audit trails",
          "Tech Stack: React, Electron, Flask, SQLite, AgentGraph, Multi-LLM, and ONNX runtime",
          `Source Code: [GitHub Repository](${p ? p.github : 'https://github.com/DhruvGohel46/infoOS'})`
        ],
        closing: "Dhruv built this with a strong emphasis on reliability in production environments."
      }
    };
  }

  // Project Shrink / Security
  if (q.includes('shrink') || q.includes('security') || q.includes('kernel') || q.includes('privilege') || q.includes('exploit')) {
    const p = projects.find(item => item.id === 'project-shrink');
    return {
      thinkingSteps: [
        "Reviewing Dhruv's OS security research...",
        "Checking Project Shrink technical specs and reverse engineering tooling..."
      ],
      text: {
        heading: "Project Shrink: OS Security Research",
        paragraphs: [
          "Dhruv conducts active security research specializing in Windows internal architectures, privilege escalation, and persistence mechanics.",
          "In Project Shrink, he explored silent privilege elevation pathways across Windows 10 and 11 environments for defensive and educational security research."
        ],
        bullets: [
          "Core Tools: C++, PowerShell, x64dbg, and x86/x64 Assembly",
          "Analysis Scope: Binary exploitation, kernel integrity, and digital forensics",
          `GitHub: [Project Shrink Repository](${p ? p.github : 'https://github.com/DhruvGohel46/Shrink'})`,
          `Video Demonstrations: [Windows 10 Demo](${p ? p.youtubeWin10 : '#'}) and [Windows 11 Demo](${p ? p.youtubeWin11 : '#'})`
        ],
        closing: "His deep understanding of low-level OS internals directly informs how he designs secure, attack-resilient backend architectures."
      }
    };
  }

  // Hackathons
  if (q.includes('hackathon') || q.includes('railvision') || q.includes('sahaay') || q.includes('wofo') || q.includes('sih') || q.includes('competition')) {
    return {
      thinkingSteps: [
        "Retrieving competitive hackathon timeline...",
        "Compiling awards, prototypes, and technical challenges..."
      ],
      text: {
        heading: "Hackathons & Competitive Honors",
        paragraphs: [
          "Dhruv has represented his university and achieved top ranks in multiple competitive engineering hackathons, consistently building resilient, offline-capable systems under strict time constraints."
        ],
        bullets: [
          "Smart India Hackathon 2025: GTU Representative — Built RailQR Logistics, using local Ollama LLMs for railway asset tracking",
          "GDG Autonomous Hacks 26 (Offline): Top 10 Finalist — Built SaHaay, an offline-first autonomous ambulance dispatch grid with <200ms latency",
          "Hack Innovate 2026: Top 6 Finalist — Built RailVision AI, restoring motion-blurred train CCTV footage with 96.2% OCR accuracy",
          "Axios Hackathon: Built WOFO, an offline RAG enterprise assistant powered by Gemini and Qdrant DB",
          "GDG Autonomous Hacks 26 (Online): Created an Autonomous Quiz & Knowledge Extractor agent"
        ],
        closing: "In each hackathon, Dhruv focused on low-latency architectures, local AI models, and real-world utility."
      }
    };
  }

  // Certifications & Qualifications
  if (q.includes('certificate') || q.includes('certif') || q.includes('achievement') || q.includes('qualification') || q.includes('nptel') || q.includes('oracle')) {
    return {
      thinkingSteps: [
        "Browsing Dhruv's verified credentials and certifications...",
        "Checking scores and issuing institutions..."
      ],
      text: {
        heading: "Verified Certifications & Credentials",
        paragraphs: [
          "Dhruv holds 8 verified certifications across systems programming, cloud infrastructure, AI, and cybersecurity."
        ],
        bullets: [
          "NPTEL Python (IIT Madras): Score 94% — Elite + Top 5% Topper",
          "Oracle Certified Data Platform Foundations Associate",
          "NPTEL Cloud Computing (IIT Kharagpur): Score 87% — Elite + Silver (Top 5%)",
          "NPTEL Java (IIT Kharagpur): Score 85% — Elite",
          "Cybersecurity Internship (Happieloop Technologies): Verified Completion",
          "Full Stack GenAI & Agentic AI (Udemy — Hitesh Choudhary & Piyush Garg): 32.5 Hours",
          "Cisco Networking Academy: Networking Basics Certified",
          "LangChain: Quickstart LangSmith Fleet Certified"
        ],
        closing: "You can click on any certificate card in the Qualifications section of the portfolio to inspect the full certificate in the lightbox viewer."
      }
    };
  }

  // Work experience / internships
  if (q.includes('intern') || q.includes('experience') || q.includes('oasis') || q.includes('happieloop') || q.includes('job') || q.includes('leadership')) {
    return {
      thinkingSteps: [
        "Reviewing Dhruv's internships and leadership positions..."
      ],
      text: {
        heading: "Internships & Leadership Experience",
        paragraphs: [
          "Dhruv has applied his software engineering and security background in both company internships and university leadership roles:"
        ],
        bullets: [
          "AICTE Oasis Infobyte (Python Engineering Intern, 2024 - Present): Building thread-safe system tools, secure voice command architectures, and responsive PyQt6 desktop interfaces.",
          "Happieloop Technologies (Cybersecurity Intern, May - Jun 2026): Completed a certified one-month cybersecurity internship.",
          "GTU-SET Fusion Fest 2025 (Event Coordinator): Led university-wide technical and cultural event operations, managing logistics and cross-team scheduling."
        ],
        closing: "He brings a strong mix of systems engineering, security mindset, and practical team leadership."
      }
    };
  }

  // General catch-all with conversational touch
  return {
    thinkingSteps: [
      "Reviewing Dhruv's engineering portfolio and conversation history...",
      "Formulating an overview response..."
    ],
    text: {
      heading: "Engineering Overview & Systems Focus",
      paragraphs: [
        "Dhruv Gohel is a systems-focused Computer Engineering student and security researcher at Gujarat Technological University (GTU - SET), graduating in 2028. He specializes in agentic AI frameworks, OS security research, and resilient offline-first systems.",
        "Whether it's building satellite intelligence with SARDET, crafting offline retail suites with InfoOS POS, or researching Windows kernel persistence in Project Shrink, he loves solving deep system-level challenges."
      ],
      bullets: [
        "Key Systems: SARDET, InfoOS POS, RailQR Logistics, Project Shrink, and WOFO",
        "Technical Arsenal: Python, PyTorch, C++, React/Next.js, Electron, SQLite, PostgreSQL, Qdrant, and low-level reverse engineering tools",
        "Recent Hackathons: Finalist in GDG Autonomous Hacks, Hack Innovate, and Smart India Hackathon"
      ],
      closing: "Feel free to ask me to drill into any specific project, hackathon, or technology!"
    }
  };
}

export async function POST(req) {
  try {
    const { prompt, history } = await req.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Prompt is required' }), { status: 400 });
    }

    // Dynamic database context to pass to the AI model
    const cleanProjects = projects.map(({ id, title, category, desc, tech, link, github, youtubeWin10, youtubeWin11 }) => ({
      id, title, category, desc, tech, link, github, youtubeWin10, youtubeWin11
    }));

    const cleanExperiences = experiences.map(({ id, type, title, role, period, desc, details, github, blog, docs, youtube }) => ({
      id, type, title, role, period, desc, details, github, blog, docs, youtube
    }));

    const DATABASE_CONTEXT = `
PORTFOLIO DATABASE ENTRY:
PROJECTS:
${JSON.stringify(cleanProjects, null, 2)}

EXPERIENCES:
${JSON.stringify(cleanExperiences, null, 2)}

TECHNICAL_SKILLS_ARSENAL:
${JSON.stringify(skills, null, 2)}

QUALIFICATIONS_AND_CERTIFICATIONS:
${JSON.stringify(achievements, null, 2)}
`;

    const FULL_SYSTEM_CONTEXT = `${SYSTEM_CONTEXT}\n\n${DATABASE_CONTEXT}`;

    // If no API key configured, use our rich conversational offline engine seamlessly
    if (!apiKey) {
      const fallbackData = generateLocalFallbackResponse(prompt, history);
      return new Response(JSON.stringify(fallbackData), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Build Gemini history array from previous turns
    const sanitizedHistory = [];
    if (Array.isArray(history)) {
      for (const msg of history) {
        if (!msg || !msg.content) continue;
        const role = msg.role === 'user' ? 'user' : 'model';
        
        let textContent = '';
        if (typeof msg.content === 'string') {
          try {
            const parsed = JSON.parse(msg.content);
            if (parsed && parsed.paragraphs) {
              textContent = [
                parsed.heading ? `## ${parsed.heading}` : '',
                ...(parsed.paragraphs || []),
                ...(parsed.bullets ? parsed.bullets.map(b => `- ${b}`) : []),
                parsed.closing || ''
              ].filter(Boolean).join('\n\n');
            } else {
              textContent = msg.content;
            }
          } catch {
            textContent = msg.content;
          }
        } else if (typeof msg.content === 'object') {
          textContent = JSON.stringify(msg.content);
        }

        // Avoid empty parts or identical immediate consecutive roles for Gemini API stability
        if (textContent.trim()) {
          const lastMsg = sanitizedHistory[sanitizedHistory.length - 1];
          if (lastMsg && lastMsg.role === role) {
            lastMsg.parts[0].text += `\n\n${textContent}`;
          } else {
            sanitizedHistory.push({
              role,
              parts: [{ text: textContent }]
            });
          }
        }
      }
    }

    // Ensure history starts with user if non-empty
    while (sanitizedHistory.length > 0 && sanitizedHistory[0].role !== 'user') {
      sanitizedHistory.shift();
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const candidateModels = [
      "models/gemini-1.5-flash",
      "models/gemini-2.5-flash",
      "models/gemini-3.5-flash",
      "models/gemini-3.8-flash"
    ];

    let result = null;
    let lastError = null;

    for (const modelName of candidateModels) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: FULL_SYSTEM_CONTEXT,
          generationConfig: {
            responseMimeType: "application/json"
          }
        });

        // Use multi-turn chat if history exists, otherwise simple generateContent
        if (sanitizedHistory.length > 0) {
          const chat = model.startChat({ history: sanitizedHistory });
          result = await chat.sendMessage(prompt);
        } else {
          result = await model.generateContent(prompt);
        }

        if (result) break;
      } catch (err) {
        lastError = err;
        console.warn(`Model ${modelName} failed, trying next candidate:`, err.message);
      }
    }

    if (!result) {
      console.warn("All Gemini models encountered an error, falling back to conversational engine:", lastError);
      const fallbackData = generateLocalFallbackResponse(prompt, history);
      return new Response(JSON.stringify(fallbackData), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await result.response;
    const text = response.text();

    let responseJson;
    try {
      responseJson = JSON.parse(text);
    } catch {
      responseJson = {
        thinkingSteps: ["Responding to your question with portfolio context..."],
        text: text
      };
    }

    return new Response(JSON.stringify(responseJson), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("AI Error:", error);
    const fallbackData = generateLocalFallbackResponse(prompt || '');
    return new Response(JSON.stringify(fallbackData), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
