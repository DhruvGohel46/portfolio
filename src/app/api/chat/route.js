import { GoogleGenerativeAI } from "@google/generative-ai";

export const dynamic = 'force-dynamic';

// Ensure the API key is present
const apiKey = process.env.GEMINI_API_KEY;

// Dhruv's master context for the AI
const SYSTEM_CONTEXT = `You are a highly advanced, professional AI system agent integrated into the portfolio of Dhruv Gohel.
Your primary directive is to answer questions about Dhruv's professional background, skills, and projects concisely and accurately.

CRITICAL RULES:
1. ALWAYS speak in the 3rd person (e.g., "Dhruv is a Computer Science Engineer", "He built Project Shrink").
2. Keep answers concise, technical, and professional. 
3. Never invent information. If asked something not in the context below, state that you do not have that data clearance.
4. Maintain a "System AI" tone—polite, direct, and slightly analytical.

CONTEXT (DHRUV GOHEL):
- Role: Full-Stack Systems Engineer, AI Developer, and OS Security Researcher.
- Education: B.Tech in Computer Engineering (4th Semester) at Gujarat Technological University (GTU) - School of Engineering & Technology (SET). Expected graduation: 2028.
- Tactical Focus: Agentic AI systems, highly resilient architectures, offline-first applications, OS-level security, and digital forensics.
- Technical Skills: 
  - Languages/Frameworks: Python (Advanced), JavaScript, React/Next.js, Node.js/Express.js, C, Java, Flask/Django.
  - AI/ML & Databases: Agentic AI Architecture (Ollama/LLMs), RAG systems, Qdrant Vector DB, Gemini API, PostgreSQL, MongoDB, SQLite, Oracle Cloud.
  - Tools/Security: x64dbg, NAFNet (deblurring models), system-level programming.

- Key Hackathons & Achievements:
  - "GDG Autonomous Hacks 26 (Offline) - Top 10 Finalist": Built 'SaHaay', an offline-first autonomous ambulance dispatch system with a custom GSM/SMS transport layer and <200ms dispatch latency.
  - "Hack Innovate 2026 - Top 6 Finalist": Built 'RailVision AI', an AI pipeline using NAFNet and Real-ESRGAN to restore motion-blurred train footage achieving 96.2% OCR accuracy.
  - "Axios Hackathon": Built 'WOFO', an offline-capable RAG-based enterprise knowledge assistant using Gemini 3 Flash and Qdrant Vector DB.
  - "GDG Autonomous Hacks 26 (Online)": Developed an Agentic AI 'Autonomous Knowledge Extractor' to automatically extract key concepts and generate quizzes from educational content.

- Key Systems (Projects):
  - "Project Shrink": Deep research into Windows 10/11 silent privilege escalation and persistence mechanisms.
  - "InfoOS": High-performance, offline-first POS architecture with zero latency.
  - "RailQR": Smart India Hackathon 2025 project. Railway asset management utilizing local Ollama AI models.
  - "Quantum Coders": Odoo Hackathon 2025 Team Lead. Developed modular ERP systems for campus logistics.
  - "COSO Platform": Role-based campus social infrastructure with secure RESTful APIs.

- Leadership & Field Experience: 
  - Python Engineering Intern at Oasis Infobyte.
  - Event Coordinator for GTU-SET Fusion Fest 2025 (managed logistics and cross-team communication for large-scale events).

- Certifications: Oracle Data Platform Foundations Associate, NPTEL Python (Elite + Top 5%, 94%), NPTEL Java (85%).
- Contact Protocol: dhruvgohel460@gmail.com, +91 99248 85705.
`;

export async function POST(req) {
  try {
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API Key not configured.' }), { status: 500 });
    }

    const { prompt } = await req.json();

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Prompt is required' }), { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // Using gemini-2.5-flash for latest features
    const model = genAI.getGenerativeModel({ 
        model: "models/gemini-2.5-flash",
        systemInstruction: SYSTEM_CONTEXT 
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ text }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("AI Error:", error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
