'use client';

import { motion } from 'framer-motion';
import { IoStarOutline, IoRibbonOutline, IoMedalOutline, IoCodeSlashOutline } from 'react-icons/io5';
import SystemTag from '../ui/SystemTag';

const achievements = [
  {
    title: 'NPTEL Python — Top 5%',
    institution: 'IIT Madras',
    score: '94% ELITE',
    icon: IoStarOutline
  },
  {
    title: 'Oracle Data Platform',
    institution: 'ORACLE CERTIFIED',
    score: 'ASSOCIATE',
    icon: IoRibbonOutline
  },
  {
    title: 'Smart India Hackathon',
    institution: 'NATIONAL FINALIST',
    score: 'GTU REP',
    icon: IoMedalOutline
  },
  {
    title: 'NPTEL Java',
    institution: 'IIT KHARAGPUR',
    score: '85% ELITE',
    icon: IoCodeSlashOutline
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="mb-6">
            <SystemTag label="RECORDS" value="CERTIFICATIONS" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Qualifications.
          </h2>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-8 h-full flex flex-col bg-background border border-border rounded-xl group hover:border-muted-foreground/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-xl text-muted-foreground group-hover:text-foreground group-hover:bg-border transition-all duration-300 mb-6">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mb-6">
                    {item.institution}
                  </div>
                  <div className="mt-auto pt-4 border-t border-border w-full flex items-center justify-between">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">SCORE_OUTPUT</span>
                    <span className="text-xs font-bold text-foreground">
                      {item.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
