import type { Lang, FeatureKey, CompareKey } from './routes';

export const featureNav: Record<FeatureKey, { icon: string; es: [string, string]; en: [string, string] }> = {
  'feat-members': { icon: 'users', es: ['Socios', 'Fichas y actividad en un solo lugar'], en: ['Members', 'Profiles and activity in one place'] },
  'feat-billing': { icon: 'credit-card', es: ['Membresías y cobros', 'Planes, vigencias y pagos'], en: ['Memberships and billing', 'Plans, validity and payments'] },
  'feat-access': { icon: 'qr-code', es: ['Control de acceso', 'Ingresos y aforo actualizados'], en: ['Access control', 'Updated entries and occupancy'] },
  'feat-classes': { icon: 'calendar-range', es: ['Clases', 'Horarios, cupos y reservas'], en: ['Classes', 'Schedules, capacity and bookings'] },
  'feat-routines': { icon: 'dumbbell', es: ['Rutinas', 'Planes de entrenamiento para socios'], en: ['Workout plans', 'Training plans for members'] },
  'feat-pos': { icon: 'shopping-bag', es: ['Caja y ventas', 'Mostrador, inventario y arqueo'], en: ['Point of sale', 'Front desk, inventory and closeout'] },
  'feat-analytics': { icon: 'chart-line', es: ['Retención y reportes', 'Asistencia e indicadores del gimnasio'], en: ['Retention and reports', 'Attendance and gym metrics'] },
};

export const resourceNav: Record<CompareKey, Record<Lang, string>> = {
  'cmp-jira': { es: 'Ordenar la operación diaria', en: 'Organize daily operations' },
  'cmp-clickup': { es: 'Controlar cuotas y cobros', en: 'Manage memberships and payments' },
  'cmp-linear': { es: 'Control de acceso y aforo', en: 'Access control and occupancy' },
  'cmp-trello': { es: 'Mejorar la retención de socios', en: 'Improve member retention' },
};

export const ui = {
  es: {
    nav: { product: 'Producto', pricing: 'Planes', compare: 'Recursos', blog: 'Blog', changelog: 'En desarrollo', login: 'Ingresar', cta: 'Ingresar al sistema', menu: 'Menú', close: 'Cerrar', allFeatures: 'Ver todos los módulos', home: 'GymFlow — inicio' },
    footer: {
      tagline: 'Tu gimnasio, en orden.',
      cols: { product: 'Producto', compare: 'Recursos', company: 'GymFlow', legal: 'Legal' },
      contact: 'Contacto', terms: 'Términos', privacy: 'Privacidad', signup: 'Ingresar al sistema', login: 'Ingresar',
      rights: 'Todos los derechos reservados.', lang: 'English',
    },
    common: { learnMore: 'Conocer más', startFree: 'Ingresar al sistema', createAccount: 'Ingresar al sistema', haveAccount: 'Ya tenés cuenta', faq: 'Preguntas frecuentes', related: 'Seguí explorando', readMore: 'Leer artículo', minutes: 'min de lectura', back: 'Volver', breadcrumbHome: 'Inicio', notFoundTitle: 'Esta página no existe', notFoundText: 'El enlace que seguiste no lleva a ningún lado. Volvamos al inicio.', goHome: 'Ir al inicio', updated: 'Última actualización', published: 'Publicado' },
  },
  en: {
    nav: { product: 'Product', pricing: 'Plans', compare: 'Resources', blog: 'Blog', changelog: 'Roadmap', login: 'Log in', cta: 'Log in to GymFlow', menu: 'Menu', close: 'Close', allFeatures: 'See all modules', home: 'GymFlow — home' },
    footer: {
      tagline: 'Your gym, under control.',
      cols: { product: 'Product', compare: 'Resources', company: 'GymFlow', legal: 'Legal' },
      contact: 'Contact', terms: 'Terms', privacy: 'Privacy', signup: 'Log in to GymFlow', login: 'Log in',
      rights: 'All rights reserved.', lang: 'Español',
    },
    common: { learnMore: 'Learn more', startFree: 'Log in to GymFlow', createAccount: 'Log in to GymFlow', haveAccount: 'Already have an account', faq: 'Frequently asked questions', related: 'Keep exploring', readMore: 'Read article', minutes: 'min read', back: 'Back', breadcrumbHome: 'Home', notFoundTitle: "This page doesn't exist", notFoundText: "The link you followed doesn't lead anywhere. Let's go back home.", goHome: 'Go home', updated: 'Last updated', published: 'Published' },
  },
} satisfies Record<Lang, unknown>;

