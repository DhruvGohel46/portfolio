'use client';

import ExperienceSection from './Experience';
import { internships } from '@/utils/portfolioData';

export default function Internships() {
  return (
    <ExperienceSection
      id="internships"
      tagLabel="TIMELINE"
      tagValue="INTERNSHIPS_AND_LEADERSHIP"
      title="Internships & Leadership."
      items={internships}
    />
  );
}
