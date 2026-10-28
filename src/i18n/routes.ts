export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'es';
export const ogLocale: Record<Lang, string> = { es: 'es_AR', en: 'en_US' };

// Cada clave tiene su ruta por idioma (sin barras inicial/final).
export const routes = {
  home: { es: '', en: '' },
  'feat-members': { es: 'funciones/socios', en: 'features/members' },
  'feat-billing': { es: 'funciones/membresias-y-cobros', en: 'features/memberships-and-billing' },
  'feat-access': { es: 'funciones/control-de-acceso', en: 'features/access-control' },
  'feat-classes': { es: 'funciones/clases', en: 'features/classes' },
  'feat-routines': { es: 'funciones/rutinas', en: 'features/workout-plans' },
  'feat-pos': { es: 'funciones/caja-y-ventas', en: 'features/point-of-sale' },
  'feat-analytics': { es: 'funciones/retencion-y-reportes', en: 'features/retention-and-reports' },
  pricing: { es: 'planes', en: 'pricing' },
  'cmp-jira': { es: 'recursos/ordenar-la-operacion', en: 'resources/organize-gym-operations' },
  'cmp-clickup': { es: 'recursos/controlar-cuotas-y-cobros', en: 'resources/manage-memberships-and-payments' },
  'cmp-linear': { es: 'recursos/control-de-acceso-y-aforo', en: 'resources/access-control-and-capacity' },
  'cmp-trello': { es: 'recursos/mejorar-retencion-de-socios', en: 'resources/improve-member-retention' },
  terms: { es: 'legal/terminos', en: 'legal/terms' },
  privacy: { es: 'legal/privacidad', en: 'legal/privacy' },
  contact: { es: 'contacto', en: 'contact' },
  blog: { es: 'blog', en: 'blog' },
  changelog: { es: 'desarrollo', en: 'roadmap' },
} as const;

export type RouteKey = keyof typeof routes;

export function url(key: RouteKey, lang: Lang): string {
  const p = routes[key][lang];
  const base = lang === defaultLang ? '/' : `/${lang}/`;
  return p ? `${base}${p}/` : base;
}
export const blogUrl = (slug: string, lang: Lang) => `${url('blog', lang)}${slug}/`;

export const featureKeys = ['feat-members', 'feat-billing', 'feat-access', 'feat-classes', 'feat-routines', 'feat-pos', 'feat-analytics'] as const;
export const compareKeys = ['cmp-jira', 'cmp-clickup', 'cmp-linear', 'cmp-trello'] as const;
export type FeatureKey = (typeof featureKeys)[number];
export type CompareKey = (typeof compareKeys)[number];

export function otherLang(lang: Lang): Lang { return lang === 'es' ? 'en' : 'es'; }
