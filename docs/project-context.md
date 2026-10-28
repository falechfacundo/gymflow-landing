# Contexto del proyecto

## Producto

**GymFlow** es un SaaS para administrar gimnasios: socios, membresías y cobros, control de acceso y aforo, clases,
rutinas, caja y reportes de retención. Este repo es **solo la landing de marketing**. El producto vive en
`../gymflow-webapp` y se vincula mediante `PUBLIC_APP_URL`.

- **Público**: dueños y administradores de gimnasios.
- **Promesa en evaluación**: tener socios, cuotas y accesos bajo control. La hipótesis prioriza el momento operativo de validar quién puede entrar; falta validarla con gimnasios.
- **Estado de la landing**: identidad y contenido adaptados a GymFlow. La demo visual usa datos de ejemplo; el estado de cada módulo se confirma según el despliegue del producto.
- **Idiomas**: español (default, sin prefijo: `/`) e inglés (`/en/`).

## Páginas

Registro de rutas en `src/i18n/routes.ts` (clave → ruta por idioma):

| Tipo | Rutas ES (EN equivalente bajo `/en/`) | Vista |
|---|---|---|
| Home | `/` | `src/views/Home.astro`: Hero, Marquee, Showcase, Bento, Flow, Details, CTA |
| Módulos (7) | `/funciones/{socios,membresias-y-cobros,control-de-acceso,clases,rutinas,caja-y-ventas,retencion-y-reportes}/` | `FeaturePage.astro` |
| Planes | `/planes/` | `PricingPage.astro` (sin precios publicados) |
| Recursos (4) | `/recursos/{ordenar-la-operacion,controlar-cuotas-y-cobros,control-de-acceso-y-aforo,mejorar-retencion-de-socios}/` | `ComparePage.astro` |
| Legal (2) | `/legal/{terminos,privacidad}/` | `LegalPage.astro` |
| Contacto | `/contacto/` | `ContactPage.astro` (email opcional por entorno; sin formulario) |
| Desarrollo | `/desarrollo/` | `ChangelogPage.astro` |
| Blog | `/blog/` y `/blog/<slug>/` | `BlogIndex.astro`, `BlogPost.astro` |
| 404 | `/404.html` | `noindex` |

Las páginas del registro se generan desde `src/pages/[...slug].astro`; home y blog tienen rutas propias.

## Integraciones

| Integración | Estado |
|---|---|
| Analytics | No definido |
| Formularios | No definido; contacto por email solo si se configura `PUBLIC_CONTACT_EMAIL` |
| CMS | No definido. El blog usa Content Collections de Astro: Markdown en `src/content/blog/{es,en}/`, unidos por `translationKey` |
| SEO | `@astrojs/sitemap` (con alternates i18n), `robots.txt` generado (`src/pages/robots.txt.ts`), JSON-LD (`JsonLd.astro`) |
| Hosting | Vercel (proyecto linkeado en `.vercel/`); cualquier host estático sirve |

## Variables de entorno

Todas opcionales: si faltan, se usa el default de `src/config.ts` / `astro.config.mjs`.

| Variable | Uso |
|---|---|
| `PUBLIC_SITE_URL` | Dominio de la landing (canonical, sitemap, OG) |
| `PUBLIC_APP_URL` | URL base del producto; todos los CTA de acceso van a `/login` |
| `PUBLIC_CONTACT_EMAIL` | Email comercial opcional. Si no está configurado, la página no inventa un canal de contacto |

`.env.local` lo genera el CLI de Vercel (`VERCEL_OIDC_TOKEN`); no lo usa el build.

## Decisiones técnicas

| Decisión | Por qué |
|---|---|
| Astro estático (`build.format: 'directory'`, `trailingSlash: 'always'`) | Landing de contenido: HTML puro, sin servidor, URLs canónicas consistentes |
| i18n con registro propio de rutas (`routes.ts`) en vez de duplicar páginas | Slugs traducidos por idioma (`/planes/` ↔ `/en/pricing/`) y hreflang automático |
| Tailwind v4 configurado en CSS (`@theme`) | Tokens del design system junto a los estilos globales; sin archivo de config |
| Un único `motion.ts` global (GSAP + Lenis) | Sitio multipágina sin islands interactivas; una sola inicialización por carga |
| Lenis solo para rueda, touch nativo | Evita conflictos con el scroll del sistema en móvil |
| Clase `js-motion` puesta en `<head>` + fallback de 4s | Ocultar estados iniciales sin flash, sin dejar la página en blanco si el JS falla |
| `scripts/sync-icons.mjs` | Copia solo los íconos de lucide que se usan (evita procesar ~2000 SVG) |
| pnpm | Gestor del repo (`packageManager: pnpm@12.4.2`) |
| Playwright contra el build (`build && preview`), nunca el dev server | Probar lo mismo que se deploya |

## Pendientes conocidos

- URL final de la app y dominio propio de la landing pendientes de definir en despliegue.
- Textos legales en borrador, `noindex`, pendientes de completar datos de la entidad, proveedores y revisión profesional.
- Deuda de UI registrada en los tests (`test.fail`): ver `docs/testing.md` → "Deuda conocida".
