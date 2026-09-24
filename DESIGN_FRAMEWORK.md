# Portfolio Design Framework
### Synthesized from reference inspiration → mapped to your existing Next.js/Tailwind codebase

---

## 1. Design Direction

Across your six references, three distinct "modes" show up. Pick **one primary mode** and use the others only as accents — mixing all three flattens the identity.

| Mode | References | Feel |
|---|---|---|
| **Editorial Minimal** | Derek®, Elian Ross | Huge type, tight monochrome palette, small mono labels, lots of whitespace |
| **Bold Type / Anti-Grid** | Visual Poetry | Oversized overlapping headlines, marquee text, high contrast |
| **Soft Product/UX** | Jon Daniel, Solt/Dominic | Rounded cards, pastel blocks, stat tiles, friendly |

**Your site (SEC_ENGINEER / terminal aesthetic) is closest to Editorial Minimal + a technical/mono accent layer.** That's the direction this framework builds toward — it keeps your "hacker/systems" identity but borrows the *restraint and typographic confidence* of Derek® and Elian Ross rather than the busier dashboard/3D style of Pixel Rise or Jon Daniel.

**Core principle:** one accent color, one display typeface used huge, one mono typeface used small — everything else is grayscale.

---

## 2. Color System

Your `globals.css` already has the right shape. Tighten it to match the references (which never use more than one accent):

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --border: #e4e4e7;
  --muted: #f4f4f5;
  --muted-foreground: #71717a;
  --accent: #4f46e5;       /* keep ONE accent — indigo works, don't add a second */
  --accent-hover: #4338ca;
}
.dark {
  --background: #0a0a0a;
  --foreground: #fafafa;
  --border: #27272a;
  --muted: #18181b;
  --muted-foreground: #a1a1aa;
  --accent: #6366f1;
  --accent-hover: #4f46e5;
}
```

**Rule from Derek®/Elian Ross:** the accent color should appear in maybe 3–5 spots per screen max (a dot, a link hover, a tag) — never as a background fill for large areas. Reserve color *pop* moments (like Elian Ross's lime glow, or Pixel Rise's orange) for ONE hero element only, if at all — your current indigo dot/pulse pattern in `Navbar.js` and `AIAssistant.js` is already correct, don't expand it.

---

## 3. Typography Scale

Derek® and Elian Ross both use a **huge display weight** (~96–140px) against **tiny mono labels** (~10px, uppercase, tracked-out). Your `SystemTag` component already nails the label half. Formalize the display half:

```js
// tailwind.config.cjs — add a display scale
fontSize: {
  'display-xl': ['clamp(3rem, 9vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
  'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
}
```

| Role | Reference | Your component | Size |
|---|---|---|---|
| Hero headline | Derek®, Elian Ross | `Hero.js` h1 | `display-xl`, font-bold, uppercase optional |
| Section headline | Derek® "Selected Work" | section `h2` | `display-lg` |
| Body copy | all references | `<p>` | `text-lg`, `muted-foreground`, max-width ~60ch |
| Mono label/tag | Derek® "PROJECTS", Elian "/Our Projects" | `SystemTag.js` | `text-[10px]`, uppercase, tracked-widest — **already correct, keep as-is** |
| Nav links | all | `Navbar.js` | `text-sm font-medium` |

**Key move from your references you're missing:** Derek® and Elian Ross both pair the huge headline with a *small italic or mono kicker* right above it ("/Our Projects Explined", "ABOUT ME"). Your `SystemTag` is already this pattern — just make sure every major section opens with one, consistently positioned above the h2 (you're already doing this in `About.js`, `Skills.js`, `Achievements.js` — good, keep it uniform across `Experience.js` and `Contact.js` too, which currently skip straight to the heading in some spots).

---

## 4. Layout & Spacing

From Derek® / Elian Ross:

- **Section padding:** generous vertical rhythm — your `py-16 sm:py-32` is already correct, don't shrink it.
- **Max width:** `max-w-7xl` centered — matches your current setup.
- **Grid bias:** asymmetric splits (`1fr_2fr`, `2/3–1/3`) rather than even grids — you already do this in `Skills.js` and `About.js`. Extend it to `Contact.js` (currently a clean 50/50 — consider 40/60 to match the editorial asymmetry of the references).
- **Card style:** Jon Daniel's rounded-tile pattern is worth borrowing *only* for stat/number callouts (e.g., a "12+ Nodes", "2+ YRS Uptime" tile row) — you already have this exact pattern in `Hero.js`'s HUD status bar. Consider pulling it out as a reusable `<StatTile />` and reusing it in `About.js` or `Achievements.js` for consistency.

---

## 5. Motion Guidelines

Your `framer-motion` usage (fade-up on scroll, `AnimatePresence` tab switches, magnetic buttons) already matches the subtlety level of Derek®/Elian Ross — **don't add more animation**, these references are calm, not flashy like Pixel Rise's 3D scene. Two additions worth making:

1. **Staggered word/line reveal on the Hero h1** (Derek®'s headline animates in as a block — yours currently is a single fade; a per-line stagger would elevate it).
2. **Scramble/glitch text** you already built (`useScramble.js`) is a nice technical-flavor differentiator none of the references have — keep it, it reinforces the security-research identity.

---

## 6. Component Checklist (apply framework to existing files)

- [ ] `Hero.js` — bump headline to `display-xl` scale, add per-line stagger animation
- [ ] `SystemTag.js` — no change, this is your kicker pattern, reuse everywhere
- [ ] `About.js` / `Skills.js` — already asymmetric, just confirm consistent `SystemTag` + h2 pairing
- [ ] `Contact.js` — shift grid to 40/60 asymmetric split
- [ ] `Experience.js` — add a `SystemTag` kicker above "Experience & Output." if missing
- [ ] New: `StatTile.js` — extract Hero's HUD stat rows into a reusable component for reuse in About/Achievements
- [ ] Global: audit that `--accent` never fills large backgrounds, only small elements (dots, underlines, tags, hover states)

---

## 7. What NOT to borrow

- Pixel Rise's 3D illustration + multi-color badges → clashes with your monochrome/mono-type identity
- Jon Daniel's pastel card grid → too playful for a security-research positioning
- Visual Poetry's overlapping marquee text → high risk of readability issues at your content density (project descriptions, tech stacks) — better suited to a photography portfolio with less text
