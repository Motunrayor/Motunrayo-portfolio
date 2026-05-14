# Motunrayo Fatumo Portfolio (Vite)

Modern single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Folder Structure

```txt
.
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── components/
├── sections/
├── data/
├── utils/
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── package.json
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open:

```txt
http://localhost:5173
```

## Build

```bash
npm run build
npm run preview
```

## Customize Content

Edit all portfolio text/content from:

- `data/portfolio.ts`

## Deployment

### Vercel

1. Push to GitHub.
2. Import project in Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

### Netlify

1. Push to GitHub.
2. Import project in Netlify.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Deploy.
