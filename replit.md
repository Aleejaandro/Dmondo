# DMONDO - B2B Ethnic Food Catalog

## Overview
Multi-page B2B brochure/catalog website for DMONDO (D'Mondo Food), the ethnic food portfolio of ABM Crops group. Built with vanilla HTML/CSS/JS served through an Express backend with Vite dev server.

## Architecture
- **Frontend**: Vanilla HTML + CSS + JS (no frameworks)
- **Backend**: Express.js (Node/TypeScript) serving static files + API
- **Database**: PostgreSQL via Drizzle ORM
- **Dev Server**: Vite in middleware mode through Express
- **Build**: Vite multipage build + esbuild for server

## Pages
| Route | File | Purpose |
|-------|------|---------|
| `/` | `client/index.html` | Home with hero, Command Center explorer, B2B capabilities |
| `/cocinas/` | `client/cocinas/index.html` | Single-page cuisine explorer (Command Center) with `?cocina=X` pre-selection |
| `/cocinas/latina.html` | Redirect → `/cocinas/?cocina=latina` | |
| `/cocinas/arabe.html` | Redirect → `/cocinas/?cocina=arabe` | |
| `/cocinas/asiatica.html` | Redirect → `/cocinas/?cocina=asiatica` | |
| `/productos/` | `client/productos/index.html` | Product catalog with filters |
| `/recetas/` | `client/recetas/index.html` | Recipes/inspiration listing |
| `/recetas/receta.html?id=X` | `client/recetas/receta.html` | Recipe detail |
| `/calidad.html` | `client/calidad.html` | Quality & certifications |
| `/contacto.html` | `client/contacto.html` | B2B contact form |

## Explorador "Command Center"
The cuisine explorer (used on home page and `/cocinas/`) uses an accordion sidebar layout:
- **Topbar**: Search input + "Solicitar catálogo" CTA + "Abrir catálogo completo" link
- **Sidebar (210px)**: Accordion with 3 cuisine groups (Latina / Árabe / Asiática). Each group expands to show its categories inline. One group is always open.
- **Main area**: Single product grid (3 columns on desktop) + applications row. Content updates dynamically when switching cuisines or categories.
- Key IDs: `#cc-nav` (sidebar), `#cc-products-grid` (single product grid), `#cc-prods-title`, `#cc-apps-content`
- `initHome()` triggered by presence of `#cc-nav` in DOM; builds sidebar dynamically from JS data
- URL parameter `?cocina=X` pre-selects the cuisine on load
- Applications data is stored in JS `aplicaciones` object and rendered dynamically per cuisine

## API Endpoints
- `POST /api/contact` — Submit contact form (persisted to PostgreSQL)
- `GET /api/contacts` — List all contact submissions

## Database Schema
- `contact_submissions` table: id, nombre, empresa, email, tipo_negocio, interes, comentarios, created_at

## Key Files
- `client/assets/css/styles.css` — Shared CSS (Spice Market Premium palette)
- `client/assets/js/app.js` — Shared JS (tabs, filters, catalog, form submission)
- `client/assets/img/logo.png` — D'Mondo Food logo
- `vite.config.js` — Vite multipage config
- `server/routes.ts` — API routes
- `server/storage.ts` — Database storage layer
- `shared/schema.ts` — Drizzle schema

## Color Palette
- Background: `#FFF6ED`
- Primary CTA: `#C2410C`
- Accent: `#D4A017`
- Ink (dark blocks): `#0F172A`
- Text: `#1F2937`