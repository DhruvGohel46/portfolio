# Dhruv Gohel's Portfolio

A modern, interactive portfolio built with **Next.js**, **React**, and **Tailwind CSS**, featuring smooth scroll animations powered by **GSAP**.

## Features

✨ **Smooth Animations** - Fade-up reveals, parallax hero, scroll-triggered animations  
🎯 **Responsive Design** - Fully optimized for mobile, tablet, and desktop  
🚀 **Performance Optimized** - Fast load times with Next.js optimization  
💼 **Full Project Showcase** - 5 featured projects with detailed descriptions  
🏆 **Achievements & Certifications** - Display of accomplishments and awards  
📞 **Contact Integration** - Netlify form for easy communication  

## Tech Stack

- **Frontend Framework**: Next.js 14.1.2
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: GSAP 3.12.2 with ScrollTrigger
- **Form Handling**: Netlify Forms
- **Deployment**: Ready for Vercel/Netlify

## Project Structure

```
portfolio/
├── components/
│   ├── Header.js           # Navigation header
│   ├── Hero.js             # Hero section with intro
│   ├── About.js            # About & skills section
│   ├── Certifications.js   # Certifications display
│   ├── Projects.js         # Portfolio projects
│   ├── Leadership.js       # Achievements & leadership
│   └── Contact.js          # Contact form & info
├── pages/
│   ├── _app.js             # App wrapper & Tailwind config
│   └── index.js            # Main page
├── styles/
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies
├── next.config.js          # Next.js config
└── tsconfig.json          # TypeScript config
```

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Components Overview

### Header
Sticky navigation with smooth scroll links to different sections.

### Hero
Animated introduction with profile image, headline, and CTA buttons.

### About
Education, skills breakdown (Frontend, Backend, Database, Tools), and availability.

### Certifications
Display of professional certifications with scores and achievements.

### Projects
Showcase of 5 major projects with descriptions, tech stacks, and GitHub links:
- RailQR (Smart India Hackathon 2025)
- Quantum Coders (Odoo Hackathon Winner)
- PPT Summary Maker
- COSO (Campus Social Platform)
- Falak Salon (Client Freelance)

### Leadership
Achievements, hackathon wins, contest awards, and core strengths.

### Contact
Contact form (Netlify integrated) and multiple contact methods.

## Customization

### Adding Projects
Edit `components/Projects.js` and add new project objects to the `projects` array:
```javascript
{
  id: 6,
  title: 'Your Project',
  description: ['Description paragraph'],
  tech: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
}
```

### Modifying Colors
Update Tailwind color classes in components (e.g., `emerald-400`, `indigo-400`, `cyan-400`, `amber-400`).

### Adjusting Animations
Modify animation delays and durations in `pages/index.js` and `styles/globals.css`.

## Deployment

### Deploy on Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy on Netlify
```bash
npm run build
netlify deploy --prod --dir=.next
```

## Contact

- **Email**: Dhruvgohel460@gmail.com
- **Phone**: +91 99248 85705
- **LinkedIn**: [dhruv-gohel-220194322](https://linkedin.com/in/dhruv-gohel-220194322)
- **Location**: Ahmedabad, Gujarat, India

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Dhruv Gohel**
