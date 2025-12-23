import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 'autonomous-knowledge-extractor',
      title: 'Autonomous Knowledge Extractor + Quiz Builder',
      role: 'Frontend Developer · GDG Autonomous Hacks 26',
      description: [
        'Developed an AI-powered solution that transforms educational content into structured knowledge and generates quizzes automatically. The system performs complex reasoning to extract key concepts, organize them hierarchically, and create validated quiz questions with self-checking mechanisms.',
        'Led the frontend development, creating an intuitive interface that visualizes the knowledge extraction process and presents quiz results in a clean, interactive format. The application helps educators and learners convert lengthy texts into structured, testable knowledge efficiently.',
      ],
      tech: ['React', 'Next.js', 'AI/ML', 'Natural Language Processing', 'Responsive Design'],
      repo: 'https://github.com/varun-ai69/Agentic---AI-',
      stats: [
        { label: 'AI-Powered', value: 'AI' },
        { label: 'Quiz Generation', value: 'Quiz' },
        { label: 'Hackathon Winner', value: 'Winner' },
      ],
    },
    {
      id: 'railqr',
      title: 'RailQR – Railway Asset Management System',
      role: 'Full-Stack Developer · SIH 2025 Participant',
      description: [
        'Developed a comprehensive railway asset management platform for Smart India Hackathon 2025 that streamlines maintenance tracking through QR code technology. Built with Flask backend and React/Next.js frontend, the system enables railway staff to scan asset QR codes and submit maintenance records.',
        'Integrated local AI models via Ollama to automatically clean, standardize, and improve user-entered maintenance descriptions into structured fault records. Implemented dual database support (XML and SQL) for flexible data management and created RESTful APIs for seamless frontend-backend communication.',
      ],
      tech: ['Flask', 'React', 'Next.js', 'Python', 'QR Generation', 'XML/SQL', 'Ollama AI'],
      repo: 'https://github.com/DhruvGohel46/QRail-3',
      stats: [
        { label: 'QR Based Tracking', value: 'QR' },
        { label: 'AI NLP Integration', value: 'AI' },
        { label: 'SIH 2025 Project', value: 'SIH' },
      ],
    },
    {
      id: 'quantum-coders',
      title: 'Quantum Coders – Odoo Hackathon \'25 Winning Solution',
      role: 'Team Lead · Hackathon Project \'25',
      description: [
        '• Guided a 4-member team to first place at the Odoo Hackathon 2025 with a modular add-on that streamlines campus club management inside the Odoo ERP ecosystem.',
        '• Built custom Odoo modules (Python) to automate event scheduling, membership payments and real-time notifications, reducing manual admin effort by 70%.',
        '• Integrated REST endpoints and Webhooks so external apps (e.g., college portals) can sync members, attendance and finance data in real time.',
        '• Employed PostgreSQL views and server actions to generate on-demand analytics dashboards for club budgets, participation trends and ROI.',
      ],
      tech: ['Odoo', 'Python', 'PostgreSQL', 'REST API', 'ERP'],
      repo: 'https://github.com/DhruvGohel46/Quantum-coders-Odoo-hackathon25-',
    },
    {
      id: 'ppt-summary',
      title: 'PPT Summary Maker – AI-Powered Presentation Tool',
      role: 'Personal Project \'25',
      description: [
        '• Built a Python application that reads PPTX/PDF files and generates concise, bullet-point slide summaries.',
        '• Leveraged python-pptx for slide parsing and Hugging Face Transformers for abstractive NLP summarization.',
        '• Added both a CLI and lightweight Flask web UI for file upload, summary-length selection, and one-click download of the new deck.',
        '• Optimized with caching and multithreading to process 100+-slide presentations in under 5 s on consumer hardware.',
      ],
      tech: ['Python', 'Flask', 'NLP', 'python-pptx', 'Transformers'],
      repo: 'https://github.com/DhruvGohel46/PPT-Summeray-maker',
    },
    {
      id: 'coso',
      title: 'COSO – College Social Platform',
      role: 'Campus Project \'24',
      description: [
        '• Engineered a full-stack Django application that enables students to post campus updates, create events and connect with peers through a role-based system (students / admins).',
        '• Implemented secure email-based signup with admin approval workflows, session-based authentication and granular access controls.',
        '• Exposed RESTful JSON APIs for posts, comments and event management using Django REST Framework, facilitating mobile-app integration.',
        '• Crafted responsive UIs with Tailwind CSS, handled file uploads and CORS, and deployed on Render with PostgreSQL backing store.',
      ],
      tech: ['Django', 'Python', 'Django REST Framework', 'PostgreSQL', 'Tailwind CSS'],
      repo: 'https://github.com/DhruvGohel46/COSO',
    },
    {
      id: 'falak-salon',
      title: 'Falak Al Buraimi Beauty Saloon – Marketing Website',
      role: 'Client Freelance \'24',
      description: [
        '• Designed and built a responsive one-page salon website using HTML5, CSS3 and vanilla JavaScript.',
        '• Implemented animated countdown offers, card-style service sections and smooth-scroll navigation to boost visitor engagement.',
        '• Embedded a Google Maps iframe for precise location visibility and added client-side form validation for booking inquiries.',
        '• Enhanced user experience with subtle CSS animations and optimized images to achieve 90+ Lighthouse scores.',
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Google Maps API'],
      repo: 'https://github.com/DhruvGohel46/falak-al-buraimi-beauty-saloon',
    },
  ];

  return (
    <section id="work" className="py-12 border-t border-white/5">
      <h2 className="text-3xl font-semibold">Project Experience</h2>
      <div className="mt-6 grid gap-6">
        {projects.map(project => (
          <div
            key={project.id}
            className="rounded-xl border border-white/10 bg-white/5 p-6 animate-fade-up hover:border-emerald-400/20 transition-all"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-emerald-300 mt-1">{project.role}</p>

            {project.stats && (
              <div className="mt-4 flex gap-6">
                {project.stats.map(stat => (
                  <div key={stat.label} className="text-center">
                    <span className="block text-2xl font-bold text-emerald-400">{stat.value}</span>
                    <span className="text-xs text-slate-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 space-y-2 text-slate-300/80">
              {Array.isArray(project.description)
                ? project.description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))
                : <p>{project.description}</p>
              }
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span
                  key={tech}
                  className="rounded-full bg-emerald-400/15 text-emerald-200 px-2 py-1 text-xs border border-emerald-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.repo && (
              <div className="mt-4">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-300 hover:text-cyan-200 underline underline-offset-2"
                >
                  View Source on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
