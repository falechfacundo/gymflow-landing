# GymFlow · Landing

Landing page de GymFlow, construida con **Astro 7 + Tailwind v4 + GSAP (ScrollTrigger, Flip) + Lenis**.
Es un repo independiente del producto, que vive en `../gymflow-webapp`.

## Estado

| | |
| --- | --- |
| Deploy | ❌ Dominio final por definir. Valor temporal de `PUBLIC_SITE_URL`: `https://gymflow-landing.vercel.app` |
| Producto | Marca y copy adaptados a gimnasios; el alcance de algunos módulos depende del estado de la webapp |

## Comandos

| Comando | Acción |
|---|---|
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Dev server en `http://localhost:4321` |
| `pnpm build` | Build estático a `dist/` |
| `pnpm preview` | Sirve el build |
| `pnpm check` | Type-check de Astro/TS |
| `pnpm icons` | Copia a `src/icons` solo los íconos lucide usados |
| `pnpm test:e2e` | Playwright contra el build en 6 dispositivos (ver `docs/testing.md`) |
| `pnpm build && pnpm lighthouse` | Lighthouse CI mobile + desktop |

Documentación técnica en [`CLAUDE.md`](CLAUDE.md) y [`docs/`](docs/) (design system, animaciones, testing, contexto).

## Configuración

Variables (o defaults en `src/config.ts`):

| Variable | Uso |
|---|---|
| `PUBLIC_SITE_URL` | Dominio de esta landing (canonical, sitemap, OG). Default `https://gymflow-landing.vercel.app` |
| `PUBLIC_APP_URL` | URL base del producto; los CTA apuntan a `/login` (default local: `http://localhost:3000`) |
| `PUBLIC_CONTACT_EMAIL` | Email comercial opcional para `/contacto`; si no se configura, no se muestra un correo inventado |

## Estructura

```
src/
  i18n/         routes.ts (rutas ES/EN), home.ts, features.ts, resources.ts, legal.ts, pages.ts (planes, contacto y desarrollo), ui.ts
  views/        Home, FeaturePage, PricingPage, ComparePage, LegalPage, ContactPage, ChangelogPage, BlogIndex, BlogPost
  pages/        index, en/index, [...slug] (páginas del registro de rutas), blog/, en/blog/, 404, robots.txt
  content/blog/ Artículos en Markdown (es/ y en/, unidos por translationKey)
  components/   Nav, Footer, Hero, HeroBoard, Showcase, Bento, Flow, Details, CTA, InnerHero, Faq, CtaBand, JsonLd...
  scripts/motion.ts   Animación (Lenis, GSAP, loop del tablero, reveals, pin)
scripts/sync-icons.mjs  Copia a src/icons solo los íconos lucide usados (corre en dev/build)
```

## SEO

- Español en `/` e inglés en `/en/`, con `hreflang` + `x-default`, canonical y `og:locale`.
- `sitemap-index.xml` (con alternates i18n) y `robots.txt` generados en build.
- JSON-LD: Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList, BlogPosting.
- Páginas por módulo, recursos para gimnasios, planes sin precios publicados, blog, hoja de ruta y páginas legales marcadas como borrador/noindex; 404 con `noindex`.

## Agregar contenido

- Nueva página estática: agregar la ruta en `src/i18n/routes.ts` y su contenido/vista.
- Nuevo artículo: crear `src/content/blog/es/<slug>.md` y `en/<slug>.md` con el mismo `translationKey`.
- Al usar un ícono nuevo de lucide, `pnpm icons` (dev/build ya lo hacen).

## Notas

- Respeta `prefers-reduced-motion`.
- Los textos legales son un documento base: revisarlos con asesoría legal antes de publicar.
- Deploy: cualquier host estático; en Vercel es zero-config (framework Astro).
