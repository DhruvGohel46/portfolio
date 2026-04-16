'use client';

import { motion } from 'framer-motion';
import { IoFingerPrintOutline, IoLayersOutline, IoPulseOutline } from 'react-icons/io5';
import SystemTag from '../ui/SystemTag';

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="mb-6">
            <SystemTag label="IDENT_FILE" value="DHRUV.JSON" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mission & Architecture.
          </h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start border-t border-border pt-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a <span className="font-semibold text-foreground">Security Researcher</span> and Computer Engineering student at GTU-SET, driven by a deep fascination with how systems break and how to make them unbreakable. My approach combines the curiosity of a researcher with the pragmatism of an engineer.
            </p>
            <p>
              Beyond traditional software engineering, I specialize in OS-level security, low-level binary analysis, and developing custom defense mechanisms. I believe that security is not just a feature, but the core foundation upon which modern infrastructure must be built.
            </p>
            
            <div className="pt-8 mt-8 grid grid-cols-2 gap-8 border-t border-border">
              <div>
                <SystemTag label="PRIMARY_DISCIPLINE" value="Kernel Security" />
              </div>
              <div>
                <SystemTag label="OPERATING_STATUS" value="Active / On-Site" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-muted/50 rounded-xl p-8 border border-border"
          >
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <div className="text-3xl text-muted-foreground group-hover:text-foreground transition-colors">
                  <IoFingerPrintOutline />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Tactical Thinking</h3>
                  <p className="text-sm text-muted-foreground">Approaching problems with an adversary's mindset to anticipate and mitigate threats before they manifest.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="text-3xl text-muted-foreground group-hover:text-foreground transition-colors">
                  <IoLayersOutline />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Full-Stack Resilience</h3>
                  <p className="text-sm text-muted-foreground">Building applications with security baked into every layer, from UI input validation to database encryption.</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="text-3xl text-muted-foreground group-hover:text-foreground transition-colors">
                  <IoPulseOutline />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Continuous Research</h3>
                  <p className="text-sm text-muted-foreground">Constantly auditing new mechanisms and staying ahead of the evolving cybersecurity landscape.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
