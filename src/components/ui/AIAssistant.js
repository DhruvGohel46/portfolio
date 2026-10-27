'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoTerminalOutline, 
  IoCloseOutline, 
  IoSend, 
  IoSparklesOutline, 
  IoExpandOutline, 
  IoContractOutline,
  IoRefreshOutline
} from 'react-icons/io5';
import ReactMarkdown from 'react-markdown';
import ParticleOrb from './ParticleOrb';

const DEFAULT_WELCOME_MESSAGE = {
  role: 'assistant',
  content: JSON.stringify({
    heading: "Welcome & Portfolio Guide",
    paragraphs: [
      "Hi there! I'm Dhruv's portfolio AI assistant. I'm here to give you an insider look into his software systems, autonomous AI agents, OS security research, and competitive hackathon achievements.",
      "I maintain our conversation context as we chat, so you can freely ask follow-ups, request GitHub links, or dive deeper into any project."
    ],
    bullets: [
      "Ask about deep learning systems like SARDET or offline POS architectures like InfoOS",
      "Explore hackathon prototypes from Smart India Hackathon or GDG Autonomous Hacks",
      "Inquire about his OS privilege escalation security research or verified certifications"
    ],
    closing: "What would you like to explore first?"
  })
};

const STORAGE_KEY = 'dhruv_portfolio_chat_history_v2';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState([DEFAULT_WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(null);
  const messagesEndRef = useRef(null);

  // Restore chat history from localStorage on initial mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch {
      // Ignore parse error and keep default greeting
    }
  }, []);

  // Persist chat history to localStorage whenever messages change
  useEffect(() => {
    try {
      if (messages.length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      }
    } catch {
      // Ignore storage errors
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleClearChat = () => {
    setMessages([DEFAULT_WELCOME_MESSAGE]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    // Capture recent history turns for conversational context
    const currentMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(currentMessages);
    setIsLoading(true);
    setCurrentStep("Reviewing Dhruv's portfolio and chat context...");

    // Send the last 8-10 turns of history so the AI has rich context
    const historyPayload = currentMessages
      .filter(m => m.role === 'user' || m.role === 'assistant' || m.role === 'model')
      .slice(-10);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          prompt: userMessage,
          history: historyPayload
        }),
      });

      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      
      const steps = data.thinkingSteps || [];
      const text = data.text || '';

      // Play back thinking steps for smooth conversational progress
      for (const rawStep of steps) {
        let displayStep = rawStep;
        const match = rawStep.match(/setThinkingStep\(['"](.*)['"]\)/);
        if (match) {
          displayStep = match[1];
        }
        setCurrentStep(displayStep);
        await new Promise(resolve => setTimeout(resolve, 600));
      }

      const rawText = typeof text === 'object' ? JSON.stringify(text) : text;
      setMessages(prev => [...prev, { role: 'assistant', content: rawText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [
        ...prev, 
        { 
          role: 'assistant', 
          content: JSON.stringify({
            heading: "CONVERSATION NOTICE",
            paragraphs: [
              "I encountered a temporary connection glitch, but I'm still right here to assist you!",
              "Feel free to ask me again about Dhruv's projects, hackathons, or security research."
            ]
          }) 
        }
      ]);
    } finally {
      setIsLoading(false);
      setCurrentStep(null);
    }
  };

  const renderMessageContent = (content) => {
    const mdComponents = {
      a: ({ href, children }) => (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-accent hover:text-accent-hover underline font-bold"
        >
          {children}
        </a>
      ),
      p: ({ children }) => <span className="inline">{children}</span>
    };

    try {
      const parsed = JSON.parse(content);
      if (parsed && (parsed.paragraphs || parsed.heading || parsed.bullets)) {
        return (
          <div className="space-y-3 font-sans text-sm leading-relaxed text-left">
            {parsed.heading && (
              <h4 className="text-sm font-bold text-foreground tracking-tight mb-2">
                {parsed.heading}
              </h4>
            )}
            {parsed.paragraphs && parsed.paragraphs.map((para, idx) => (
              <div key={idx} className="text-foreground leading-relaxed whitespace-pre-wrap">
                <ReactMarkdown components={mdComponents}>{para}</ReactMarkdown>
              </div>
            ))}
            {parsed.bullets && parsed.bullets.length > 0 && (
              <ul className="list-none space-y-1.5 pl-1 my-2">
                {parsed.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground">
                    <span className="text-accent font-bold select-none text-base leading-none">•</span>
                    <span className="flex-1">
                      <ReactMarkdown components={mdComponents}>{bullet}</ReactMarkdown>
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {parsed.closing && (
              <div className="text-xs text-muted-foreground border-t border-border/80 pt-2 mt-2 leading-relaxed">
                <ReactMarkdown components={mdComponents}>{parsed.closing}</ReactMarkdown>
              </div>
            )}
          </div>
        );
      }
    } catch {
      // Fallback if not stringified JSON
    }

    return (
      <div className="prose prose-sm dark:prose-invert max-w-none break-words font-sans text-sm leading-relaxed text-left [&_a]:text-accent [&_a]:hover:text-accent-hover [&_a]:underline [&_a]:font-bold">
        <ReactMarkdown 
          components={{
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            )
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -8, 0] // gentle organic float
            }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{
              opacity: { duration: 0.35 },
              scale: { type: "spring", stiffness: 300, damping: 25 },
              y: {
                repeat: Infinity,
                duration: 2.8,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-[92px] sm:bottom-8 left-4 sm:left-8 z-50 group cursor-pointer flex items-center select-none"
            role="button"
            aria-label="Open Dhruv's AI Assistant"
          >
            {/* 3D Animated Particle Structure */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-accent/25 blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-140 transition-all duration-500 pointer-events-none" />
              
              <div className="hidden sm:block">
                <ParticleOrb size={132} />
              </div>
              <div className="sm:hidden">
                <ParticleOrb size={96} />
              </div>
            </div>

            {/* Hover Title Pill */}
            <div className="ml-3 pointer-events-none opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
              <div className="bg-background/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-border group-hover:border-accent/60 rounded-xl px-3.5 py-2 shadow-2xl shadow-black/30 flex items-center gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                <span className="text-xs font-semibold tracking-wide text-foreground uppercase">
                  CHAT WITH AI GUIDE
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed z-50 flex flex-col overflow-hidden bg-background border border-border shadow-2xl shadow-black/25 bottom-0 left-0 w-full rounded-t-3xl border-b-0 sm:bottom-6 sm:right-auto sm:left-8 sm:rounded-2xl sm:border-b transition-all duration-300 ${
              isMaximized 
                ? 'h-[95vh] sm:w-[700px] sm:h-[800px] sm:max-h-[90vh]' 
                : 'h-[88vh] sm:w-[420px] sm:h-[580px] sm:max-h-[80vh]'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/40 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center overflow-hidden shadow-sm">
                  <ParticleOrb size={32} />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-background animate-ping" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-tight text-foreground tracking-tight flex items-center gap-1.5">
                    <span>Dhruv&apos;s AI Assistant</span>
                  </h3>
                  <div className="text-[10px] font-medium text-accent uppercase tracking-wide">
                    Conversational Guide • Remembers Context
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={handleClearChat}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors cursor-pointer"
                  aria-label="Clear chat history and reset context"
                  title="Clear conversation history"
                >
                  <IoRefreshOutline className="text-xl" />
                </button>
                <button 
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors cursor-pointer"
                  aria-label={isMaximized ? "Minimize chat window" : "Maximize chat window"}
                  title={isMaximized ? "Minimize" : "Maximize"}
                >
                  {isMaximized ? (
                    <IoContractOutline className="text-xl" />
                  ) : (
                    <IoExpandOutline className="text-xl" />
                  )}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors cursor-pointer"
                  aria-label="Close chat window"
                >
                  <IoCloseOutline className="text-xl" />
                </button>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-grid-pattern/10">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[88%] rounded-2xl p-4 shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-accent text-white rounded-tr-none px-4 py-3 shadow-md shadow-accent/15 font-sans text-sm font-medium' 
                      : 'bg-muted/90 border border-border text-foreground rounded-tl-none px-4 py-3 font-sans text-sm leading-relaxed shadow-sm'
                  }`}>
                    {msg.role !== 'user' && (
                      <div className="text-[11px] font-semibold text-accent mb-2.5 flex items-center gap-1.5 border-b border-border/40 pb-1.5">
                        <IoSparklesOutline className="text-xs" />
                        <span>AI Assistant</span>
                      </div>
                    )}
                    <div className="max-w-none break-words">
                      {renderMessageContent(msg.content)}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Thinking Loader */}
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-muted border border-border rounded-2xl rounded-tl-none p-4 w-[85%] shadow-sm">
                    <div className="flex flex-col gap-2.5">
                      {currentStep && (
                        <div className="flex items-center gap-2 text-xs font-medium text-accent tracking-wide">
                          <IoTerminalOutline className="text-sm animate-pulse text-accent" />
                          <span className="tracking-wide animate-pulse leading-snug">
                            {currentStep}
                          </span>
                        </div>
                      )}
                      <div className="flex gap-1.5 items-center mt-1 pl-5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-4 border-t border-border bg-background/90 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question about projects, hackathons, skills..."
                  className="flex-1 bg-muted border border-border rounded-xl px-4 py-2.5 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm font-sans text-foreground placeholder:text-muted-foreground"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-white transition-colors cursor-pointer"
                  aria-label="Send message"
                >
                  <IoSend className="text-sm ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
