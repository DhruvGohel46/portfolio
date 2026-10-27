'use client';

import ExperienceSection from './Experience';
import { hackathons } from '@/utils/portfolioData';

export default function Hackathons() {
  return (
    <ExperienceSection
      id="hackathons"
      tagLabel="ARENA"
      tagValue="COMPETITIVE_OUTPUT"
      title="Hackathons & Finals."
      items={hackathons}
      muted
    />
  );
}
