'use client';

import { motion } from 'framer-motion';
import { IoMailOutline, IoLocationOutline, IoPaperPlaneOutline } from 'react-icons/io5';
import SystemTag from '../ui/SystemTag';
import MagneticButton from '../ui/MagneticButton';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <div className="mb-6">
              <SystemTag label="COMMUNICATION" value="SECURE_CHANNEL" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Initiate <br /> Connection.
            </h2>
            
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Open to security consulting, full-stack collaborations, and research opportunities. establishing a secure handshake via the terminal below.
            </p>
            
            <div className="space-y-8 pl-4 border-l border-border">
              <div className="flex items-center gap-6">
                <div className="text-2xl text-muted-foreground">
                  <IoMailOutline />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mb-1">ENCRYPTED_EMAIL</div>
                  <div className="text-foreground font-medium">dhruv@example.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-2xl text-muted-foreground">
                  <IoLocationOutline />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mb-1">NODE_LOCATION</div>
                  <div className="text-foreground font-medium">Rajkot, Gujarat, IN</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">TRANSMISSION_FORM</span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">USER_IDENTITY</label>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm group" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">RETURN_ADDR</label>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">PAYLOAD_JSON</label>
                <textarea 
                  rows="5" 
                  placeholder="Message content..." 
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-sm resize-none" 
                ></textarea>
              </div>
              
              <MagneticButton primary className="w-full py-4 rounded-lg group">
                <span className="flex items-center gap-2">
                  Transmit Data <IoPaperPlaneOutline className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </MagneticButton>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
