# Nitin Goswami — portfolio

A React (Next.js) + Node.js portfolio built to the blueprint in
`portfolio-blueprint.md`. Light editorial direction, one accent, sharp edges,
scroll-as-narrative. Backend on PostgreSQL.

## Status

This is the **foundation**: project setup, the design system as tokens, the
layout shell, the data model and a health endpoint. Pages and content come next,
once the real copy, project outcomes and brand assets land.

## Requirements

- Node.js 20+
- npm 10+
- PostgreSQL 16 (for the data layer)

## Run

```bash
npm install
cp .env.example .env      # fill in DATABASE_URL and SESSION_SECRET
npm run db:generate       # generate the Prisma client
npm run db:migrate        # create tables (needs DATABASE_URL)
npm run dev               # http://localhost:3000
```

Health check: `GET /api/v1/health`

## Scripts

| Script | Does |
|---|---|
| `npm run dev` | dev server |
| `npm run build` | production build |
| `npm run start` | run the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run db:generate` | Prisma client |
| `npm run db:migrate` | run migrations |
| `npm run db:seed` | seed admin + content |

## Layout

```
src/
  app/
    layout.tsx        root shell (skip link, header, footer)
    page.tsx          home
    globals.css       design tokens + base + primitives
    api/v1/health/    health endpoint
prisma/
  schema.prisma       data model (users, projects, posts, contact_messages, media)
```

## Not yet done

- Pages: work, case studies, about, writing, résumé, contact, admin.
- Auth and the content API.
- Email delivery for the contact form.
- Lint config, tests, CI.
