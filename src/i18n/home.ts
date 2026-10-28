import type { Lang } from './routes';

type Tag = 'member' | 'billing' | 'access' | 'class' | 'cash';
export interface HomeCopy {
  hero: { badge: string; badgeText: string; l1: string; l2: string; l3: string; lead: string; cta1: string; cta2: string; note: string; aria: string };
  board: { nav: string[]; ws: string; project: string; sprintSub: string; tabs: string[]; progress: string; url: string; preview: string; cursor1: string; cursor2: string; cols: string[]; tags: Record<Tag, string>; cards: Record<string, { key: string; title: string; tag: Tag; who: string; p: number; col: number }> };
  marquee: [string, string][];
  showcase: {
    eyebrow: string; h2a: string; h2b: string; label: string;
    steps: { icon: string; title: string; text: string }[];
    boardCols: [string, string, [string, Tag][]][];
    listHead: string; listCount: string; rows: [string, Tag, string, string, string, string][];
    weeks: string[]; today: string; bars: [string, number, number, string][];
    sprint: { name: string; goal: string; badge: string; done: string; progress: string; days: string; real: string; ideal: string };
    status: Record<string, string>;
  };
  bento: {
    eyebrow: string; h2: string; lead: string;
    ai: { tag: string; h: string; p: string; prompt: string; n: number; tickets: [string, string, string][] };
    okr: { tag: string; h: string; p: string; krs: [string, number, string][] };
    git: { tag: string; h: string; p: string; commit: string; task: string };
    time: { tag: string; h: string; p: string; days: string; card: string; slot: string };
    pf: { tag: string; h: string; p: string; items: [string, number, string][] };
  };
  flow: { eyebrow: string; h2: string; steps: [string, string, string][] };
  details: { eyebrow: string; h2: string; lead: string; items: [string, string, string][] };
  cta: { h2: string; lead: string; primary: string; secondary: string };
}

const tagColors: Record<Tag, string> = { member: '#b7f34a', billing: '#38bdf8', access: '#d2ff73', class: '#fbbf24', cash: '#34d399' };
export const tagColor = (t: Tag) => tagColors[t];

const es: HomeCopy = {
  hero: {
    badge: 'GymFlow', badgeText: 'Gestión para gimnasios, desde recepción hasta administración',
    l1: 'Sabé quién está', l2: 'al día y quién', l3: 'puede entrar.',
    lead: 'Socios, membresías y control de acceso conectados para que tu equipo pueda operar con información clara, en cada turno.',
    cta1: 'Ingresar al sistema', cta2: 'Conocer GymFlow', note: '¿Ya tenés acceso? Entrá al panel de gestión.',
    aria: 'Sabé quién está al día y quién puede entrar.',
  },
  board: {
    nav: ['Resumen', 'Socios', 'Accesos', 'Membresías', 'Clases', 'Caja'], ws: 'Gimnasio · Sede Centro',
    project: 'Hoy en tu gimnasio', sprintSub: 'Ejemplo · Turno mañana', tabs: ['Resumen', 'Socios', 'Accesos', 'Caja'], progress: 'Membresías al día',
    url: 'app.gymflow.app/admin', preview: 'Vista ilustrativa del panel de gestión de GymFlow', cursor1: 'Lucía', cursor2: 'Recepción',
    cols: ['Vigentes', 'Por vencer', 'Revisar', 'Vencidas'],
    tags: { member: 'Socio', billing: 'Membresía', access: 'Acceso', class: 'Clase', cash: 'Caja' },
    cards: {
      ana: { key: 'SOC-041', title: 'Ana Martínez', tag: 'member', who: 'AM', p: 1, col: 0 },
      tomas: { key: 'SOC-128', title: 'Tomás Ríos', tag: 'billing', who: 'TR', p: 2, col: 1 },
      julia: { key: 'SOC-206', title: 'Julia López', tag: 'access', who: 'JL', p: 2, col: 2 },
      marta: { key: 'SOC-087', title: 'Marta Gómez', tag: 'billing', who: 'MG', p: 3, col: 3 },
      reserva: { key: 'CLS-022', title: 'Reserva · Funcional 18:00', tag: 'class', who: 'FR', p: 1, col: 0 },
      venta: { key: 'CAJ-014', title: 'Venta · Proteína 1 kg', tag: 'cash', who: 'LP', p: 1, col: 0 },
    },
  },
  marquee: [
    ['users', 'Socios'], ['credit-card', 'Membresías y cobros'], ['qr-code', 'Control de acceso'], ['chart-column', 'Aforo'],
    ['calendar-range', 'Clases y reservas'], ['dumbbell', 'Rutinas'], ['shopping-bag', 'Ventas'], ['chart-line', 'Retención'],
  ],
  showcase: {
    eyebrow: 'Una operación conectada', h2a: 'Cada turno necesita información clara.', h2b: 'GymFlow la reúne en un mismo lugar.', label: 'Panel de gestión · vista ilustrativa',
    steps: [
      { icon: 'users', title: 'Socios', text: 'Consultá fichas, membresías y actividad desde recepción y administración.' },
      { icon: 'qr-code', title: 'Accesos', text: 'Validá el estado del socio al ingresar y llevá el registro de asistencia.' },
      { icon: 'credit-card', title: 'Membresías', text: 'Seguí planes, pagos y vencimientos vinculados con cada ficha.' },
      { icon: 'calendar-range', title: 'Clases', text: 'Organizá horarios, cupos y reservas sin perder de vista la operación diaria.' },
    ],
    boardCols: [
      ['Vigentes', '#34d399', [['Ana Martínez · Plan mensual', 'member'], ['Funcional · 18:00', 'class'], ['Venta en recepción', 'cash']]],
      ['Por revisar', '#fbbf24', [['Tomás Ríos · Vence mañana', 'billing'], ['Julia López · Consultar ficha', 'member']]],
      ['Accesos de hoy', '#b7f34a', [['08:42 · Ana Martínez', 'access'], ['08:47 · Diego Pérez', 'access'], ['08:53 · Lucas Vega', 'access']]],
    ],
    listHead: 'Actividad de hoy', listCount: '· 6 registros',
    rows: [
      ['Ana Martínez', 'access', 'AM', 'done', '08:42', ''], ['Tomás Ríos · vence mañana', 'billing', 'TR', 'rev', '08:47', ''],
      ['Clase funcional · 18:00', 'class', 'FR', 'prog', '09:00', ''], ['Venta · Proteína 1 kg', 'cash', 'LP', 'done', '09:16', ''],
      ['Julia López', 'member', 'JL', 'todo', '09:22', ''], ['Diego Pérez', 'access', 'DP', 'done', '09:31', ''],
    ],
    weeks: ['08:00', '10:00', '12:00', '14:00'], today: 'Ahora',
    bars: [['Sala principal', 4, 22, '#b7f34a'], ['Musculación', 12, 32, '#34d399'], ['Sala funcional', 24, 29, '#38bdf8'], ['Clases', 38, 23, '#fbbf24'], ['Recepción', 47, 36, '#d2ff73'], ['Sala principal', 62, 25, '#34d399']],
    sprint: { name: 'Aforo', goal: 'Ejemplo de ocupación del gimnasio', badge: 'Ejemplo', done: 'Ingresos registrados', progress: 'Ocupación', days: 'Personas adentro', real: 'Hoy', ideal: 'Promedio' },
    status: { todo: 'Pendiente', prog: 'Programado', rev: 'Por revisar', done: 'Registrado' },
  },
  bento: {
    eyebrow: 'Herramientas para la operación', h2: 'Lo que pasa en tu gimnasio, a la vista.', lead: 'Socios, membresías, accesos y tareas del equipo conectados al trabajo diario.',
    ai: { tag: 'Socios', h: 'Cada ficha, con el contexto a mano.', p: 'Encontrá los datos de contacto, la membresía y la actividad del socio en una misma vista.', prompt: 'Buscar socio: Ana Martínez', n: 25,
      tickets: [['Socio', '#b7f34a', 'Ana Martínez · Plan mensual vigente'], ['Ingreso', '#d2ff73', 'Último acceso hoy · 08:42'], ['Membresía', '#38bdf8', 'Próximo vencimiento · 14 nov'], ['Clase', '#fbbf24', 'Reserva · Funcional 18:00']] },
    okr: { tag: 'Actividad', h: 'Entendé el movimiento del gimnasio.', p: 'Revisá señales de asistencia, vigencia y ocupación para decidir dónde poner atención.',
      krs: [['Membresías vigentes', 82, '#b7f34a'], ['Cuotas al día', 68, '#38bdf8'], ['Asistencia esta semana', 91, '#34d399']] },
    git: { tag: 'Acceso', h: 'Una validación clara en recepción.', p: 'Consultá el estado del socio y registrá el resultado del ingreso.', commit: 'QR validado · socio activo', task: 'Acceso autorizado · 08:42' },
    time: { tag: 'Clases', h: 'Horarios y cupos a la vista.', p: 'Revisá las reservas y planificá la capacidad de cada sesión.', days: 'LMXJVSD', card: 'Próxima clase · Funcional', slot: '18:00' },
    pf: { tag: 'Retención', h: 'Detectá quién necesita seguimiento.', p: 'Usá la actividad reciente para priorizar el contacto con tus socios.', items: [['Sin asistencia · 7 días', 68, '#fbbf24'], ['Membresía por vencer', 82, '#38bdf8'], ['Seguimiento pendiente', 46, '#b7f34a']] },
  },
  flow: {
    eyebrow: 'El día a día', h2: 'De la ficha del socio al cierre del turno.',
    steps: [
      ['users', 'Registrá', 'Mantené las fichas de socios y sus membresías al día.'],
      ['qr-code', 'Validá', 'Consultá el estado del socio y registrá su ingreso.'],
      ['credit-card', 'Gestioná', 'Seguí pagos, clases, ventas y movimientos de caja.'],
      ['chart-line', 'Acompañá', 'Revisá actividad y encontrá quién necesita atención.'],
    ],
  },
  details: {
    eyebrow: 'Un sistema para el gimnasio', h2: 'Cada área, conectada con la operación.', lead: 'Un panel común ayuda a que recepción, administración y entrenadores consulten el mismo estado.',
    items: [
      ['users', 'Fichas de socios', 'Datos, membresías e historial desde un solo lugar.'],
      ['credit-card', 'Planes y cobros', 'Vigencias, vencimientos y pagos asociados a cada socio.'],
      ['qr-code', 'Control de acceso', 'Credenciales digitales, registro de ingresos y aforo.'],
      ['calendar-range', 'Clases y rutinas', 'Horarios, reservas y planes de entrenamiento.'],
      ['shopping-bag', 'Ventas y caja', 'Productos, movimientos de inventario y cierres de turno.'],
      ['chart-column', 'Actividad y retención', 'Asistencia e indicadores para planificar seguimientos.'],
    ],
  },
  cta: { h2: 'Hacé que el gimnasio fluya.', lead: 'Entrá a GymFlow para gestionar la operación diaria de tu gimnasio.', primary: 'Ingresar al sistema', secondary: 'Consultar planes' },
};

const en: HomeCopy = {
  hero: {
    badge: 'GymFlow', badgeText: 'Gym management, from reception to administration',
    l1: 'Know who is', l2: 'up to date and', l3: 'who can enter.',
    lead: 'Members, memberships and access control work together so your team can operate with clear information at every shift.',
    cta1: 'Log in to GymFlow', cta2: 'Explore GymFlow', note: 'Already have access? Open your management panel.',
    aria: 'Know who is up to date and who can enter.',
  },
  board: {
    nav: ['Overview', 'Members', 'Entries', 'Memberships', 'Classes', 'Cash'], ws: 'Gym · Downtown location',
    project: 'Today at your gym', sprintSub: 'Example · Morning shift', tabs: ['Overview', 'Members', 'Entries', 'Cash'], progress: 'Memberships up to date',
    url: 'app.gymflow.app/admin', preview: 'Illustrative preview of the GymFlow management panel', cursor1: 'Lucy', cursor2: 'Front desk',
    cols: ['Active', 'Due soon', 'Review', 'Expired'],
    tags: { member: 'Member', billing: 'Membership', access: 'Access', class: 'Class', cash: 'Cash' },
    cards: {
      ana: { key: 'MEM-041', title: 'Ana Martinez', tag: 'member', who: 'AM', p: 1, col: 0 },
      tomas: { key: 'MEM-128', title: 'Tomas Rios', tag: 'billing', who: 'TR', p: 2, col: 1 },
      julia: { key: 'MEM-206', title: 'Julia Lopez', tag: 'access', who: 'JL', p: 2, col: 2 },
      marta: { key: 'MEM-087', title: 'Marta Gomez', tag: 'billing', who: 'MG', p: 3, col: 3 },
      reserva: { key: 'CLS-022', title: 'Booking · Functional 6 pm', tag: 'class', who: 'FR', p: 1, col: 0 },
      venta: { key: 'POS-014', title: 'Sale · Protein 1 kg', tag: 'cash', who: 'LP', p: 1, col: 0 },
    },
  },
  marquee: [
    ['users', 'Members'], ['credit-card', 'Memberships and billing'], ['qr-code', 'Access control'], ['chart-column', 'Occupancy'],
    ['calendar-range', 'Classes and bookings'], ['dumbbell', 'Workout plans'], ['shopping-bag', 'Sales'], ['chart-line', 'Retention'],
  ],
  showcase: {
    eyebrow: 'Connected operations', h2a: 'Every shift needs clear information.', h2b: 'GymFlow brings it together.', label: 'Management panel · illustrative view',
    steps: [
      { icon: 'users', title: 'Members', text: 'Check profiles, memberships and activity from reception and administration.' },
      { icon: 'qr-code', title: 'Access', text: 'Validate a member’s status at entry and keep an attendance record.' },
      { icon: 'credit-card', title: 'Memberships', text: 'Follow plans, payments and due dates linked to each profile.' },
      { icon: 'calendar-range', title: 'Classes', text: 'Organize schedules, capacity and bookings alongside daily operations.' },
    ],
    boardCols: [
      ['Active', '#34d399', [['Ana Martinez · Monthly plan', 'member'], ['Functional · 6 pm', 'class'], ['Front desk sale', 'cash']]],
      ['Needs review', '#fbbf24', [['Tomas Rios · Due tomorrow', 'billing'], ['Julia Lopez · Check profile', 'member']]],
      ['Today’s entries', '#b7f34a', [['8:42 am · Ana Martinez', 'access'], ['8:47 am · Diego Perez', 'access'], ['8:53 am · Lucas Vega', 'access']]],
    ],
    listHead: 'Today’s activity', listCount: '· 6 records',
    rows: [
      ['Ana Martinez', 'access', 'AM', 'done', '8:42 am', ''], ['Tomas Rios · due tomorrow', 'billing', 'TR', 'rev', '8:47 am', ''],
      ['Functional class · 6 pm', 'class', 'FR', 'prog', '9:00 am', ''], ['Sale · Protein 1 kg', 'cash', 'LP', 'done', '9:16 am', ''],
      ['Julia Lopez', 'member', 'JL', 'todo', '9:22 am', ''], ['Diego Perez', 'access', 'DP', 'done', '9:31 am', ''],
    ],
    weeks: ['8 am', '10 am', '12 pm', '2 pm'], today: 'Now',
    bars: [['Main floor', 4, 22, '#b7f34a'], ['Weights area', 12, 32, '#34d399'], ['Functional room', 24, 29, '#38bdf8'], ['Classes', 38, 23, '#fbbf24'], ['Front desk', 47, 36, '#d2ff73'], ['Main floor', 62, 25, '#34d399']],
    sprint: { name: 'Occupancy', goal: 'Example of gym occupancy', badge: 'Example', done: 'Entries recorded', progress: 'Occupancy', days: 'People inside', real: 'Today', ideal: 'Average' },
    status: { todo: 'Pending', prog: 'Scheduled', rev: 'Review', done: 'Recorded' },
  },
  bento: {
    eyebrow: 'Tools for daily operations', h2: 'See what is happening at your gym.', lead: 'Member profiles, memberships, entries and team tasks connected to daily work.',
    ai: { tag: 'Members', h: 'Every profile, with its context close by.', p: 'Find contact details, membership and activity in the same view.', prompt: 'Find member: Ana Martinez', n: 25,
      tickets: [['Member', '#b7f34a', 'Ana Martinez · Monthly plan active'], ['Entry', '#d2ff73', 'Last check-in today · 8:42 am'], ['Membership', '#38bdf8', 'Next due date · Nov 14'], ['Class', '#fbbf24', 'Booking · Functional 6 pm']] },
    okr: { tag: 'Activity', h: 'Understand traffic at your gym.', p: 'Review attendance, membership status and occupancy to decide where to focus.',
      krs: [['Active memberships', 82, '#b7f34a'], ['Payments up to date', 68, '#38bdf8'], ['Weekly attendance', 91, '#34d399']] },
    git: { tag: 'Access', h: 'A clear check-in at reception.', p: 'Review member status and record the entry result.', commit: 'QR checked · active member', task: 'Entry authorized · 8:42 am' },
    time: { tag: 'Classes', h: 'Schedules and capacity in view.', p: 'Review bookings and plan capacity for each session.', days: 'MTWTFSS', card: 'Next class · Functional', slot: '6:00 pm' },
    pf: { tag: 'Retention', h: 'Spot who may need follow-up.', p: 'Use recent activity to prioritize member outreach.', items: [['No visits · 7 days', 68, '#fbbf24'], ['Membership due soon', 82, '#38bdf8'], ['Follow-up pending', 46, '#b7f34a']] },
  },
  flow: {
    eyebrow: 'The daily workflow', h2: 'From a member profile to the end of a shift.',
    steps: [
      ['users', 'Record', 'Keep member profiles and memberships up to date.'],
      ['qr-code', 'Validate', 'Check member status and record each entry.'],
      ['credit-card', 'Manage', 'Follow payments, classes, sales and cash movements.'],
      ['chart-line', 'Support', 'Review activity and find who may need attention.'],
    ],
  },
  details: {
    eyebrow: 'One system for your gym', h2: 'Every area connected to daily operations.', lead: 'A shared panel helps reception, administration and trainers check the same status.',
    items: [
      ['users', 'Member profiles', 'Details, memberships and history in one place.'],
      ['credit-card', 'Plans and payments', 'Validity, due dates and payments linked to each member.'],
      ['qr-code', 'Access control', 'Digital credentials, entry records and occupancy.'],
      ['calendar-range', 'Classes and workout plans', 'Schedules, bookings and training plans.'],
      ['shopping-bag', 'Sales and cash', 'Products, inventory movements and shift closeouts.'],
      ['chart-column', 'Activity and retention', 'Attendance indicators to help plan follow-up.'],
    ],
  },
  cta: { h2: 'Keep your gym moving.', lead: 'Log in to GymFlow and manage your gym’s daily operations.', primary: 'Log in to GymFlow', secondary: 'Ask about plans' },
};

export const home: Record<Lang, HomeCopy> = { es, en };
