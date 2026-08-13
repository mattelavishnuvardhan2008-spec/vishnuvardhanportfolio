# Vishnu -- 3D Creator

A dark-themed 3D creator portfolio landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

npm install
npm run dev

Then open the printed local URL (typically http://localhost:5173).

## Build

npm run build
npm run preview

## Structure

- `src/App.tsx` — assembles the sections in order: Hero, Marquee, About, Services, Projects, Contact.
- `src/components/` — `HeroSection`, `MarqueeSection`, `AboutSection`, `ServicesSection`, `ProjectsSection`, `ContactSection`, plus the reusable primitives `FadeIn`, `Magnet`, `AnimatedText`, `ContactButton`, `LiveProjectButton`.
- `src/index.css` — global reset, `#0C0C0C` background, Kanit font, and the `.hero-heading` gradient-text utility.

## Notes

- All imagery is pulled live from the URLs specified in the brief (decorative 3D renders, marquee GIFs) except project screenshots, which live in `src/assets/projects/`.
- The Projects section uses `useScroll`/`useTransform` per card to drive the sticky stacking scale effect; the Marquee section uses a passive, rAF-throttled `scroll` listener to translate two tripled image rows in opposite directions.
- Reduced-motion users get animations effectively disabled via a `prefers-reduced-motion` media query in `index.css`.
