# Portfolio Update Spec (for coding agent)

Repo: Next.js 14 (App Router), Tailwind, framer-motion, react-icons/io5. Path alias `@/` maps to `src/`.

**Goal:** (A) add the SARDET project and refresh InfoOS, (B) add four certificates (including the Happieloop internship certificate), (C) add the Happieloop internship and a leadership entry, (D) split the single "Experience" section into two sections: **Internships & Leadership** and **Hackathons**.

Almost all content lives in `src/utils/portfolioData.js`. The AI route (`src/app/api/chat/route.js`) imports `experiences`, `projects`, `skills`, `achievements` from that file, so **keep the combined `experiences` export intact**; the assistant picks up new data automatically.

---

## Part 1: Data changes in `src/utils/portfolioData.js`

### 1.1 Imports

Add `IoPeopleOutline`:

```js
import {
  IoBriefcaseOutline,
  IoFlashOutline,
  IoHardwareChipOutline,
  IoTrophyOutline,
  IoChatbubblesOutline,
  IoMedalOutline,
  IoPeopleOutline,
  IoShieldCheckmarkOutline
} from 'react-icons/io5';
```

### 1.2 Projects

Replace the existing `infoos-pos` entry and add `sardet` directly before it.

```js
  {
    id: 'sardet',
    title: 'SARDET',
    category: 'AI / COMPUTER VISION',
    desc: 'End-to-end satellite intelligence pipeline for ship and aircraft detection, fine-grained classification, and cross-date geospatial tracking. 4 production deep learning models (YOLO11-OBB detectors + ConvNeXt classifiers) in a 13-stage pipeline from STAC search to tracked output. 93.05% mAP@50 optical, 79.28% SAR, 98.73% aircraft accuracy.',
    tech: ['PyTorch', 'YOLO11-OBB', 'ConvNeXt', 'FastAPI', 'Rasterio', 'GeoPandas'],
    image: '/projects/SARDET.png',
    link: '#',
    github: 'https://github.com/DhruvGohel46/SARDET'
  },
  {
    id: 'infoos-pos',
    title: 'InfoOS POS',
    category: 'SYS ARCHITECTURE',
    desc: 'Zero-latency, 100% offline-first POS and retail operations suite. Live order drag-to-merge/settlement, real-time analytics, staff payroll, and an autonomous multi-agent AI system (7 domain agents, state-graph orchestration, human-in-the-loop approval) with 0-token fast-path routing and full audit trail.',
    tech: ['React', 'Electron', 'Flask', 'SQLite', 'AgentGraph', 'Multi-LLM', 'ONNX'],
    image: '/projects/InfoOS.png',
    link: '#',
    github: 'https://github.com/DhruvGohel46/Rebill'
  },
```

> **Decision for the owner:** the InfoOS README is marked "Proprietary". If the `Rebill` repo is private, set `github: '#'` so the card shows `[CLASSIFIED_INTERNAL]` instead of a dead link.

### 1.3 Experiences: add the Happieloop internship and the leadership entry

Append both to the `experiences` array, in this order. Source: the Happieloop internship certificate (issued 18-06-2026, Certificate ID `HP2605726`) and offer letter (Intern ID `162604`). Note the company's spelling on its own documents is **Happieloop** (with an "e").

```js
  {
    type: 'INTERNSHIP',
    id: 'happieloop',
    title: 'Happieloop Technologies',
    role: 'Cybersecurity Intern',
    period: 'MAY - JUN 2026',
    desc: 'Completed a one-month Cybersecurity Internship at Happieloop Technologies (18 May 2026 to 17 June 2026), certified by the company.',
    details: ['Cybersecurity', 'Certified Internship', '18 May - 17 Jun 2026'],
    icon: IoShieldCheckmarkOutline
  },
```

> The certificate and offer letter do not describe the work done. The `desc` above is deliberately factual. **The owner should replace it** with 1-2 sentences on what was actually worked on (tools, tasks, results), and swap `details` for real skill tags. Do not invent specifics.

Also add `IoShieldCheckmarkOutline` to the react-icons import in section 1.1.

Then the leadership entry:

```js
  {
    type: 'LEADERSHIP',
    id: 'fusion-fest',
    title: 'GTU-SET',
    role: 'Event Coordinator — Fusion Fest 2025',
    period: '2025',
    desc: 'Led Fusion Fest 2025, coordinating technical and cultural events and managing logistics and team scheduling for the university festival.',
    details: ['Event Management', 'Team Coordination', 'Logistics'],
    icon: IoPeopleOutline
  }
```

### 1.4 Experiences: derived lists for the split

Add **immediately after** the closing `];` of the `experiences` array:

```js
export const internships = experiences.filter(
  (e) => e.type === 'INTERNSHIP' || e.type === 'LEADERSHIP'
);

// Newest first
const hackathonOrder = ['railvision', 'sahaay', 'agentic-quiz', 'wofo', 'sih'];
export const hackathons = experiences
  .filter((e) => e.type === 'HACKATHON')
  .sort((a, b) => hackathonOrder.indexOf(a.id) - hackathonOrder.indexOf(b.id));
```

> If more hackathons are added later, add their `id` to `hackathonOrder` (unknown ids sort first because `indexOf` returns -1, so keep the list current).

### 1.5 Achievements: append four entries

```js
  {
    id: 'happieloop-internship',
    title: 'Cybersecurity Internship',
    institution: 'HAPPIELOOP TECHNOLOGIES',
    score: 'COMPLETED',
    image: '/Achivments/happieloop-internship.png',
    iconName: 'ribbon'
  },
  {
    id: 'udemy-agentic-ai',
    title: 'Full Stack GenAI & Agentic AI',
    institution: 'UDEMY — HITESH CHOUDHARY, PIYUSH GARG',
    score: '32.5 HRS COMPLETED',
    image: '/Achivments/udemy-agentic-ai.png',
    iconName: 'sparkles'
  },
  {
    id: 'cisco-networking',
    title: 'Networking Basics',
    institution: 'CISCO NETWORKING ACADEMY',
    score: 'CERTIFIED',
    image: '/Achivments/cisco-networking-basics.png',
    iconName: 'globe'
  },
  {
    id: 'langsmith-fleet',
    title: 'Quickstart: LangSmith Fleet',
    institution: 'LANGCHAIN',
    score: 'CERTIFIED',
    image: '/Achivments/langsmith-fleet.png',
    iconName: 'code'
  }
```

Reference IDs (for optional verification links): Udemy `UC-831b8c4f-c3a4-41e3-a88e-8416fb9e8702`, Cisco `20cfbdaa-3743-4b30-8ca7-7360152c2fd8`, LangSmith `lj2cgtaaum`.

---

## Part 2: `src/components/sections/Achievements.js`

Extend the import and `iconMap`:

```js
import {
  IoStarOutline, IoRibbonOutline, IoCodeSlashOutline, IoCloudOutline,
  IoCloseOutline, IoEyeOutline, IoSparklesOutline, IoGlobeOutline
} from 'react-icons/io5';

const iconMap = {
  star: IoStarOutline,
  ribbon: IoRibbonOutline,
  cloud: IoCloudOutline,
  code: IoCodeSlashOutline,
  sparkles: IoSparklesOutline,
  globe: IoGlobeOutline,
};
```

---

## Part 3: Split Experience into two sections

Approach: turn the existing `Experience.js` into a **reusable section component** driven by props, then add two thin wrappers.

### 3.1 Edit `src/components/sections/Experience.js`

Make these changes only (everything else, including the card markup, stays as is):

1. **Imports:** remove `import { experiences } from '@/utils/portfolioData';` (no longer used).

2. **Signature:** replace `export default function Experience() {` with:

```js
export default function ExperienceSection({
  id,
  tagLabel = 'TIMELINE',
  tagValue,
  title,
  items,
  muted = false,
}) {
```

3. **Highlight listener:** the `highlight-experience` event is fired from Projects (`experienceMatch`). Both sections now listen, so each must ignore ids that are not its own. Replace the `useEffect` with:

```js
  useEffect(() => {
    const handleHighlight = (e) => {
      const targetId = e.detail && e.detail.id;
      if (!targetId || !items.some((item) => item.id === targetId)) return;
      setExpanded(targetId);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    };
    window.addEventListener('highlight-experience', handleHighlight);
    return () => window.removeEventListener('highlight-experience', handleHighlight);
  }, [items]);
```

4. **Section wrapper and header:** replace the opening `<section ...>` through the closing `</header>` with:

```jsx
    <section id={id} className={`py-16 sm:py-32 px-6 ${muted ? 'bg-muted/30' : ''}`}>
      <div className="max-w-7xl mx-auto">

        <header className="mb-12 sm:mb-20">
          <div className="mb-6">
            <SystemTag label={tagLabel} value={tagValue} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
        </header>
```

5. **List source:** replace `experiences.map((exp, index) => {` with `items.map((exp, index) => {`.

### 3.2 Create `src/components/sections/Internships.js`

```js
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
```

### 3.3 Create `src/components/sections/Hackathons.js`

```js
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
```

`muted` gives Hackathons the alternating background so the page rhythm stays Skills (muted) → Internships → Hackathons (muted) → Projects → Qualifications (muted).

### 3.4 `src/app/page.js`

Replace the Experience import and usage:

```js
import Internships from '@/components/sections/Internships';
import Hackathons from '@/components/sections/Hackathons';
```

```jsx
        <Skills />
        <Internships />
        <Hackathons />
        <Projects />
```

(Remove `import Experience ...` and `<Experience />`.)

### 3.5 Navigation: `src/components/sections/Navbar.js`

Add `IoTrophyOutline` to the react-icons import and replace `navLinks`:

```js
const navLinks = [
  { name: 'About', href: '#about', icon: IoPersonOutline },
  { name: 'Skills', href: '#skills', icon: IoHardwareChipOutline },
  { name: 'Intern', href: '#internships', icon: IoBriefcaseOutline },
  { name: 'Hacks', href: '#hackathons', icon: IoTrophyOutline },
  { name: 'Projects', href: '#projects', icon: IoCodeSlashOutline },
];
```

**Mobile dock fix:** there are now 5 items, and each is `w-16` (64px). On narrow phones this can overflow. In the mobile dock `<a>` className, change `w-16` to `flex-1`:

```jsx
className="flex flex-col items-center justify-center flex-1 h-12 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all active:scale-95"
```

### 3.6 Command palette: `src/components/ui/CommandPalette.js`

Replace the `links` array:

```js
  const links = [
    { label: 'Home', href: '#home', id: '01' },
    { label: 'About', href: '#about', id: '02' },
    { label: 'Skills', href: '#skills', id: '03' },
    { label: 'Internships', href: '#internships', id: '04' },
    { label: 'Hackathons', href: '#hackathons', id: '05' },
    { label: 'Projects', href: '#projects', id: '06' },
    { label: 'Contact', href: '#contact', id: '07' },
  ];
```

### 3.7 Things that must keep working (verify)

- **Projects → Hackathon Details** button (`experienceMatch: 'sih' | 'wofo'`) still scrolls to and expands the right card in the Hackathons section.
- **Hackathon → View Project Details** button (`projectMatch`) still scrolls to and highlights the project card.
- `src/app/api/chat/route.js` is **unchanged** and still receives all entries via the combined `experiences` export.
- Anchor `scroll-mt-28` on cards is preserved.

---

## Part 4: Assets to add (human task)

| File | Notes |
| --- | --- |
| `public/Achivments/udemy-agentic-ai.png` | Convert the Udemy certificate PDF to PNG |
| `public/Achivments/cisco-networking-basics.png` | Convert the Cisco certificate PDF to PNG |
| `public/Achivments/langsmith-fleet.png` | Convert the LangSmith certificate PDF to PNG |
| `public/Achivments/happieloop-internship.png` | Page 1 (the certificate) of the Happieloop PDF as PNG. Page 2 is the offer letter; leave it out unless you want it public (it contains an Intern ID) |
| `public/projects/SARDET.png` | Map output, detection overlay, or the pipeline infographic from the SARDET repo |

Use **PNG, not JPG**: `.gitignore` excludes `*.jpg` and `*.jpeg`, so JPGs would not be committed or deployed.

---

## Part 5: Optional cleanup (not required)

- `README.md` in the portfolio repo describes an older structure (`components/Header.js`, `pages/_app.js`, Netlify form). Update it to the current `src/` layout if desired.
- `Contact.js` shows `dhruv@example.com` and `Rajkot, Gujarat, IN`, while the README lists a real email and Ahmedabad. Confirm which are correct.

## Acceptance checklist

- [ ] `npm run build` passes
- [ ] Two new sections render in order: Internships & Leadership, then Hackathons
- [ ] No "Experience" section remains; no dead `#experience` links in Navbar or CommandPalette
- [ ] SARDET appears in Featured Systems; InfoOS shows the updated description and tags
- [ ] Four new certificate cards open in the lightbox
- [ ] Cross-links between Projects and Hackathons still work on desktop and mobile
- [ ] Mobile dock with 5 items fits on a 360px-wide screen