# iKnow Technology

Enterprise IT solutions, bespoke software development, and AI-powered consultancy website.

**Tech Stack:** React 19, Vite 8, Tailwind CSS v4, React Router v7, Lucide Icons.

## Getting Started

```bash
npm install
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── App.jsx              # Route definitions
├── main.jsx             # Entry point
├── index.css            # Tailwind & global styles
├── components/
│   ├── layout/          # Navbar, Footer, Layout shell
│   ├── sections/        # Page section blocks
│   └── ui/              # Reusable UI primitives
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── pages/               # Route page components
```

## Deployment

Build the project and deploy the `dist/` folder to any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.).

```bash
npm run build
```
