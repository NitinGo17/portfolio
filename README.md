# Nitin Goswami — portfolio

A React (Next.js) + Node.js portfolio, built to the blueprint in
`portfolio-blueprint.md`. Light editorial direction, one accent, sharp edges,
scroll-as-narrative. Backend on PostgreSQL.

## Pages

- `/` — the claim, a short intro, selected work
- `/work` — all projects, plus a Lab section
- `/work/[slug]` — a full case study (problem → what I did → outcome)
- `/about` — experience, education, awards, skills
- `/writing` — articles (first pieces being written)
- `/resume` — a printable résumé
- `/contact` — email plus a form that hands off to mail if no backend is present

## Content

All content lives in `src/content/`:

- `site.ts` — name, claim, intro, contact links, experience, education, awards, skills
- `projects.ts` — the projects and their case studies

Edit those files to change the site; no component changes needed.

## Requirements

- Node.js 20+, npm 10+
- PostgreSQL 16 (for the data layer)

## Run

```bash
npm install
cp .env.example .env      # DATABASE_URL, SESSION_SECRET
npm run db:generate
npm run db:migrate
npm run dev               # http://localhost:3000
```

## Build

```bash
npm run build             # full app (with API routes)
```

Static export (for a static host), with the API set aside:

```bash
STATIC_EXPORT=true npx next build      # → out/, assets at the root
STATIC_EXPORT=true BASE_PATH=/portfolio npx next build   # → out/, assets under /portfolio
```

## Not yet done

- Database-backed content and the admin CMS (schema is in `prisma/schema.prisma`).
- Contact-form persistence and email delivery.
- Real brand typeface (the token points at a neutral stack until it's chosen).
