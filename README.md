# Alishba Ikhlaq — Portfolio

A premium, animated personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech stack

- **React 18** + **Vite** — fast dev server and build
- **Tailwind CSS** — utility-first styling with a custom design-token theme
- **Framer Motion** — page-load sequence, scroll reveals, hover micro-interactions
- **React Icons** — icon set
- **React Router** — routing shell (currently a single page, ready to extend)

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (defaults to `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     Reusable UI building blocks (Navbar, Hero, ProjectCard, etc.)
  pages/          Page-level composition (Home.jsx assembles all sections)
  hooks/          useTheme, useScrollProgress, useActiveSection
  utils/data.js   All portfolio content (name, projects, skills, experience...)
  index.css       Tailwind layers + design-token utility classes
public/
  favicon.svg
  robots.txt
  Alishba_Ikhlaq_Resume.pdf   ← replace with your real resume
```

## Customizing content

Everything text-based (name, bio, projects, skills, experience, certifications,
contact details) lives in **`src/utils/data.js`**. Edit that file and the whole
site updates — no need to touch component markup.

## Design tokens

Defined in `tailwind.config.js` under `theme.extend.colors`:

| Token       | Hex       | Use                          |
|-------------|-----------|-------------------------------|
| `primary`   | `#C0F5D8` | Backgrounds, badges, accents |
| `secondary` | `#94E3B1` | Gradients, dividers          |
| `surface`   | `#F7FFF9` | Page background              |
| `ink`       | `#244234` | Primary text                 |
| `accent`    | `#4F46E5` | CTAs, links, highlights      |

Dark mode uses the `.dark` class on `<html>` (toggled via the navbar switch,
persisted to `localStorage`).

## Before deploying

1. Replace `public/Alishba_Ikhlaq_Resume.pdf` with the real resume PDF.
2. Add a real Open Graph image at `public/og-image.png` (1200×630px recommended).
3. Add a LinkedIn URL in `src/utils/data.js` (`profile.linkedin`) once available.
4. Update `og:url` in `index.html` once the site has a domain.

## Deployment

This is a static Vite build — deploy the `dist/` folder to Vercel, Netlify,
GitHub Pages, or any static host.
