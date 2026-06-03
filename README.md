# Portfolio · Valentino Castaldi

Sitio personal construido con Vite + React + TypeScript, estilizado con Tailwind y animado con Framer Motion. Soporta español e inglés.

## Stack

- **Vite 5** + **React 19** + **TypeScript**
- **Tailwind CSS** (tema dark con utilidades custom)
- **Framer Motion** para transiciones y scroll reveals
- i18n propio con `localStorage`

## Scripts

```bash
npm install        # instalar dependencias
npm run dev        # http://localhost:5173
npm run build      # genera dist/ optimizado
npm run preview    # sirve el build local
npm run lint       # eslint
```

## Estructura

```
src/
├── components/
│   ├── layout/    # Navbar, Footer, LanguageToggle
│   ├── sections/  # Hero, About, Experience, Projects, Skills, Services, Contact
│   └── ui/        # Section, Reveal, Tag
├── data/          # contenido tipado (projects, skills, timeline)
├── hooks/         # useActiveSection
├── i18n/          # dictionaries ES/EN + provider
└── lib/           # helpers
```

## Deploy

Está pensado para Vercel (config en `vercel.json`). Auto-deploy al pushear a `main`.
