## Portfolio (React + TypeScript + Vite)

A fast, modern personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. Includes animated sections, 3D/visual effects, and a clean component architecture.

### Tech stack

- **Framework**: React 19 + TypeScript
- **Build tool**: Vite
- **Styling**: Tailwind CSS (v4) with `@tailwindcss/vite`
- **Animations**: Framer Motion, Motion, GSAP

### Getting started

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build

```bash
npm run preview
```

### Available scripts

- **dev**: Start Vite dev server
- **build**: Type-check and build for production
- **preview**: Preview the production build
- **lint**: Run ESLint

### Project structure

```text
Port/
  public/                 # Static assets (images)
  src/
    components/
      Navbar.tsx
      Hero.tsx
      Project.tsx
      Experience.tsx
      Contact.tsx
      layouts/
        BGBeams.tsx       # Background/visual effects
        ProjectCard.tsx   # Project display card
        TextSnippet.tsx   # Reusable text/heading block
      lib/
        utils.ts          # Utility helpers
    data.tsx              # Data for projects/experience
    App.tsx               # App composition
    index.css             # Tailwind base/styles
    main.tsx              # Entry point
  vite.config.ts
  tsconfig*.json
  README.md
```

### Components overview

- **Navbar**: Top navigation across sections
- **Hero**: Landing section with headline and call-to-action
- **Project + ProjectCard**: List and card for portfolio projects
- **Experience**: Work/education timeline or highlights
- **Contact**: Contact methods or form
- **BGBeams**: Animated/3D background effects
- **TextSnippet**: Shared typography/heading block

### Styling

- Tailwind CSS v4 configured via `@tailwindcss/vite`
- Global styles in `src/index.css`
- Utility-first classes with `clsx` and `tailwind-merge` for conditional and conflict-free class names

### Data

- Centralized in `src/data.tsx` for projects, experience, or links. Update this file to change displayed content without touching component logic.

.

### Requirements

- Node.js 18+ recommended

