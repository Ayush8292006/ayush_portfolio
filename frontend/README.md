# Ayush Kumar — Portfolio

Personal portfolio built with **React 19 + Vite**. A scroll-driven, single-page portfolio — no animation library needed.

## Concept — "lamp on", shot like a film
The site opens in the dark desk scene from my photo. Scrolling crops the photo into a frame and the room lights up;
the contact section turns the lamp off again. Every animation is scrubbed to scroll position (scroll back and it rewinds).

## Features
- Pinned hero scene: full-screen photo → framed picture, ink → concrete background, statement lit word by word
- ~4.5 s cinematic intro (role words rise through a mask, amber line + counter, screen splits open)
- Cinematic hero: the lamp flickers on, film grain, the camera pushes in with cinema bars, then the shot crops into a frame (about two screens of scrolling)
- Hero role line that slides between "MERN stack developer", "GenAI developer" and more; photo drifts with the pointer
- **GenAI scene** (pinned): MovieMind's GraphRAG pipeline runs as you scroll — question → embedding → Pinecone search → Neo4j graph walk → Gemini answer
- **ML / deep learning scene** (pinned): a neural network fires layer by layer while a training-loss curve draws with an epoch counter
- Headings whose letters rise into place with scroll
- Pinned horizontal project gallery on desktop with screenshot parallax and a progress bar (vertical list on mobile)
- Scroll-drawn experience timeline, toolkit lines sliding in opposite directions, DSA bar that fills on scroll
- One shared rAF scroll loop; styles are written directly, so React never re-renders while scrolling
- No animation library; respects `prefers-reduced-motion`; responsive down to 360px
- Contact form via EmailJS, with a `mailto:` fallback when keys aren't set
- Images optimised to WebP (~400 KB total)

## Edit content
Everything — text, links, projects, skills, stats — lives in **`src/data.js`**. Components only render it.
Replace `public/resume.pdf` to update the downloadable resume.

## Run locally
```bash
npm install
npm run dev
```

## Contact form (optional)
Create `frontend/.env` (and add the same variables in Vercel → Project → Settings → Environment Variables):
```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Structure
```
src/
  data.js          # all content
  hooks.js         # shared scroll loop (useScrollScene)
  index.css        # design tokens, layout, scroll scenes
  App.jsx
  components/      # Nav, Hero, Work, GenAI, ML, Experience, Toolkit, Practice, Contact, ScrollFade, ScrollTitle, RoleScramble
```
