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

## Home — Hero Inmersivo
Full-screen background image (`hero-beige.png`) with dark gradient overlay on the left for text legibility. Staggered CSS entry animations (`hero-anim--1` to `--4`), slow zoom on background image (`heroZoom` keyframes). Two CTAs: "Solicitar catálogo" (primary) + "Explorar productos" (outline-light). Dark band below with 3 bullet points (B2B, Private label, GFSI).

## Home — Cocinas Showcase
Three visual cards (Latina, Árabe, Asiática) with hero images, overlay text, and CTAs linking to `/productos/?cocina=X`. Purely visual "storefront" — no interactive filtering.

## Home — Inspiración Zigzag
Three zigzag rows alternating image-left/text-right and text-left/image-right. Each row has a cuisine image + descriptive text with badge, h3, paragraph, bullet highlights, and CTA linking to `/recetas/?cocina=X`. Images: `inspo-latina.png`, `inspo-arabe.png`, `inspo-asiatica.png`. CSS classes: `.zigzag-row`, `.zigzag-row--img-left`, `.zigzag-row--img-right`, `.zigzag-img`, `.zigzag-text`, `.zigzag-badge`, `.zigzag-highlights`.

## Catálogo B2B (`/productos/`) — Full Explorer
The accordion sidebar explorer lives on the productos page:
- **Topbar**: Search input + "Solicitar catálogo" CTA
- **Sidebar (210px)**: Accordion with 3 cuisine groups. Each expands to show categories inline. One group always open.
- **Main area**: Single product grid (3 columns, scrollable) + applications row. Shows ALL products per cuisine (no 6-item limit).
- Key IDs: `#cc-nav` (sidebar), `#cc-products-grid` (single product grid), `#cc-prods-title`, `#cc-apps-content`
- `initHome()` triggered by presence of `#cc-nav` in DOM; `isFullCatalog` flag controls whether products are limited
- URL parameter `?cocina=X` pre-selects the cuisine on load
- Applications data stored in JS `aplicaciones` object, rendered dynamically per cuisine
- FAQ section below the explorer

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