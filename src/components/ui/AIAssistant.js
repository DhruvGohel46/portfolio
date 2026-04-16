'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoTerminalOutline, IoCloseOutline, IoSend, IoSparklesOutline } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'SYSTEM AGENT INITIALIZED. Ask me about Dhruv.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage }),
      });

      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      
      setMessages(prev => [...prev, { role: 'system', content: data.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'system', content: '[ERROR: CONNECTION FAILED. VERIFY API KEY IN .env.local]' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            whileHover={{ scale: 1.02, x: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-[104px] sm:bottom-8 right-0 pr-8 pl-6 py-3 bg-foreground text-background rounded-l-full shadow-2xl shadow-accent/20 flex items-center gap-3 z-50 border-y border-l border-border group"
          >
            <div className="relative">
              <IoSparklesOutline className="text-xl text-accent animate-pulse" />
              <div className="absolute inset-0 blur-sm bg-accent/40 animate-pulse rounded-full" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground group-hover:text-background transition-colors">AGENT_ONLINE</span>
              <span className="text-sm font-bold tracking-tight">ASK SYSTEM AI</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed z-50 flex flex-col overflow-hidden bg-background border border-border shadow-2xl shadow-black/20 bottom-0 left-0 w-full h-[88vh] rounded-t-3xl border-b-0 sm:bottom-6 sm:left-auto sm:right-6 sm:w-[400px] sm:h-[550px] sm:max-h-[80vh] sm:rounded-xl sm:border-b"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-foreground text-background flex items-center justify-center">
                  <IoSparklesOutline className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight text-foreground">AI Assistant</h3>
                  <div className="text-[10px] font-mono tracking-widest text-accent uppercase">Secured Channel</div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
              >
                <IoCloseOutline className="text-lg" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-lg p-3 ${
                    msg.role === 'user' 
                      ? 'bg-foreground text-background' 
                      : 'bg-muted border border-border text-foreground'
                  }`}>
                    {msg.role === 'system' && <div className="text-[9px] font-mono text-muted-foreground mb-1 uppercase tracking-widest">AGENT_RESPONSE</div>}
                    <div className="text-sm prose prose-sm dark:prose-invert max-w-none">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-muted border border-border rounded-lg p-3">
                    <div className="flex gap-1.5 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-4 border-t border-border bg-background">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-muted border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-white transition-colors"
                >
                  <IoSend className="text-sm cursor-pointer ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
