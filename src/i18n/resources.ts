import type { CompareKey, Lang } from './routes';

interface ResourceCopy {
  metaTitle: string;
  metaDesc: string;
  h1: string;
  lead: string;
  quick: { fb: string; other: string };
  chooseFb: string[];
  chooseOther: string[];
  faq: [string, string][];
}

const names = {
  'cmp-jira': 'Ordenar la operación diaria',
  'cmp-clickup': 'Controlar cuotas y cobros',
  'cmp-linear': 'Control de acceso y aforo',
  'cmp-trello': 'Mejorar la retención de socios',
} satisfies Record<CompareKey, string>;

const es: Record<CompareKey, ResourceCopy> = {
  'cmp-jira': {
    metaTitle: 'Cómo ordenar la operación diaria de un gimnasio',
    metaDesc: 'Una guía práctica para reunir la información que recepción, administración y entrenadores necesitan en el día a día.',
    h1: 'Una operación más ordenada empieza con información compartida.',
    lead: 'Cuando socios, pagos y asistencia se consultan por separado, cada turno vuelve a reconstruir el contexto. Un flujo común reduce esos cortes.',
    quick: { fb: 'GymFlow conecta fichas, membresías, ingresos, clases y caja para que el equipo consulte el estado del gimnasio desde un mismo panel.', other: 'Con planillas y herramientas separadas, cada área suele mantener su propia versión de los datos y actualizarla de forma manual.' },
    chooseFb: ['Recepción necesita validar datos y resolver ingresos con rapidez.', 'Administración quiere consultar pagos y vencimientos sin cruzar varias planillas.', 'El equipo necesita compartir el mismo estado operativo entre turnos.'],
    chooseOther: ['Tu operación es muy pequeña y una única planilla te resulta suficiente.', 'Todavía estás probando qué información necesitás registrar.', 'Preferís mantener cada proceso en una herramienta distinta.'],
    faq: [
      ['¿Por dónde empiezo a ordenar la operación?', 'Identificá los datos que el equipo consulta a diario: socios, membresías, pagos e ingresos. Después definí quién actualiza cada dato.'],
      ['¿GymFlow reemplaza todas las herramientas del gimnasio?', 'GymFlow reúne módulos de gestión del gimnasio. La compatibilidad con herramientas externas depende de cada integración.'],
    ],
  },
  'cmp-clickup': {
    metaTitle: 'Cómo ordenar cuotas y cobros del gimnasio',
    metaDesc: 'Ideas para mantener a la vista membresías, vencimientos y pagos sin depender de conciliaciones manuales.',
    h1: 'Que el estado de cada cuota sea fácil de consultar.',
    lead: 'Tener planes claros y pagos registrados ayuda a recepción a responder preguntas y a administración a seguir vencimientos.',
    quick: { fb: 'GymFlow vincula cada plan y pago con la ficha del socio, para consultar la vigencia de su membresía al gestionar el ingreso.', other: 'Con registros separados, el estado de una cuota puede quedar desactualizado entre la caja, las planillas y recepción.' },
    chooseFb: ['Querés consultar membresías desde la ficha del socio.', 'Necesitás revisar vencimientos junto con la actividad de ingreso.', 'Buscás mantener pagos y operación en el mismo panel.'],
    chooseOther: ['Tu gimnasio tiene pocos socios y ya cuenta con un proceso manual confiable.', 'Necesitás funciones contables o fiscales específicas que el producto no ofrece.', 'La integración de pagos que necesitás todavía no está habilitada.'],
    faq: [
      ['¿Qué datos conviene tener a mano al cobrar?', 'El plan elegido, su período de vigencia, los pagos registrados y cualquier condición de acceso.'],
      ['¿GymFlow emite facturas fiscales?', 'La facturación fiscal no forma parte del alcance actual descrito para GymFlow.'],
    ],
  },
  'cmp-linear': {
    metaTitle: 'Control de acceso y aforo para gimnasios',
    metaDesc: 'Qué tener en cuenta al registrar ingresos, validar membresías y conocer la ocupación de un gimnasio.',
    h1: 'Validar cada ingreso con el estado correcto.',
    lead: 'Un buen control de acceso combina una identificación rápida, reglas claras y un registro que ayude a recepción a resolver excepciones.',
    quick: { fb: 'GymFlow reúne credencial QR, búsqueda de recepción, estado de membresía y registro de asistencia para validar ingresos.', other: 'Un conteo manual o una lista separada puede perder vigencia cuando se renuevan planes o cambian las condiciones de acceso.' },
    chooseFb: ['Querés consultar la vigencia de la membresía al validar un ingreso.', 'Necesitás revisar asistencia y aforo desde recepción.', 'Querés empezar con recepción y evaluar hardware compatible después.'],
    chooseOther: ['Tu gimnasio requiere una integración con hardware que aún no fue validada.', 'Necesitás un protocolo de operación sin conexión certificado para un equipo concreto.', 'Tu proceso actual ya responde a tus necesidades de control.'],
    faq: [
      ['¿Se puede comenzar sin un molinete?', 'Sí. El flujo puede operarse desde una terminal de recepción. La integración con hardware requiere revisar el dispositivo específico.'],
      ['¿Cómo ayuda el QR rotativo?', 'Reduce el uso de capturas estáticas al renovar la credencial digital periódicamente.'],
    ],
  },
  'cmp-trello': {
    metaTitle: 'Cómo mejorar la retención de socios del gimnasio',
    metaDesc: 'Señales de inactividad que un gimnasio puede seguir y formas de organizar el contacto con sus socios.',
    h1: 'Volvé a conectar antes de que un socio se vaya.',
    lead: 'La asistencia puede mostrar cambios de hábito antes de una cancelación. Un seguimiento oportuno empieza por detectar quién dejó de venir.',
    quick: { fb: 'GymFlow cruza actividad de ingreso y estado de membresía para ayudar a encontrar socios que podrían necesitar seguimiento.', other: 'Sin un registro de asistencia consultable, el equipo suele enterarse de la inactividad cuando el socio ya cancela o deja de pagar.' },
    chooseFb: ['Querés revisar asistencia y membresías juntas.', 'Necesitás priorizar seguimientos con criterios configurables.', 'Tu equipo puede contactar socios por un canal que ya tiene definido.'],
    chooseOther: ['Todavía no registrás los ingresos con regularidad.', 'Tu gimnasio prefiere contactar a todos los socios con la misma frecuencia.', 'Necesitás campañas automáticas por WhatsApp, que no forman parte del alcance actual.'],
    faq: [
      ['¿Cuándo se considera que un socio necesita seguimiento?', 'Cada gimnasio puede definir el período de inactividad que considera relevante.'],
      ['¿GymFlow envía campañas automáticas?', 'Los reportes ayudan a encontrar socios para contactar. La automatización por WhatsApp no forma parte del alcance actual.'],
    ],
  },
};

const en: Record<CompareKey, ResourceCopy> = {
  'cmp-jira': {
    metaTitle: 'How to organize daily gym operations',
    metaDesc: 'A practical guide to bringing together the information reception, administration and trainers need every day.',
    h1: 'A more organized operation starts with shared information.',
    lead: 'When members, payments and attendance are tracked separately, every shift has to rebuild the context. A shared workflow reduces those gaps.',
    quick: { fb: 'GymFlow connects member profiles, memberships, entries, classes and cash so your team can check gym operations from one panel.', other: 'With separate spreadsheets and tools, each area often maintains its own copy of the data and updates it manually.' },
    chooseFb: ['Reception needs to validate details and resolve entries quickly.', 'Administration wants to review payments and due dates without joining multiple sheets.', 'Your team needs the same operational status across shifts.'],
    chooseOther: ['Your operation is small and one spreadsheet is enough.', 'You are still deciding what information to record.', 'You prefer to keep each process in a separate tool.'],
    faq: [
      ['Where should I start when organizing operations?', 'Identify the information your team checks daily: members, memberships, payments and entries. Then decide who updates each item.'],
      ['Does GymFlow replace every tool at a gym?', 'GymFlow brings together gym management modules. Compatibility with external tools depends on each integration.'],
    ],
  },
  'cmp-clickup': {
    metaTitle: 'How to organize gym memberships and payments',
    metaDesc: 'Ideas for keeping memberships, due dates and payments visible without manual reconciliation.',
    h1: 'Make every membership status easy to check.',
    lead: 'Clear plans and recorded payments help reception answer questions and administration keep track of due dates.',
    quick: { fb: 'GymFlow links each plan and payment to a member profile, so the team can check membership validity while managing entry.', other: 'With separate records, a payment status can become outdated across the register, spreadsheets and reception.' },
    chooseFb: ['You want to check memberships from a member profile.', 'You need to review due dates alongside attendance.', 'You want payments and operations in the same panel.'],
    chooseOther: ['Your gym has few members and a reliable manual process.', 'You need specific accounting or tax features the product does not offer.', 'The payment integration you need is not enabled yet.'],
    faq: [
      ['What should the team check when recording a payment?', 'The selected plan, its validity period, recorded payments and any access conditions.'],
      ['Does GymFlow issue tax invoices?', 'Tax invoicing is outside GymFlow’s currently described scope.'],
    ],
  },
  'cmp-linear': {
    metaTitle: 'Gym access control and occupancy',
    metaDesc: 'What to consider when recording entries, validating memberships and understanding gym occupancy.',
    h1: 'Validate every entry against the right membership status.',
    lead: 'Good access control combines quick identification, clear rules and an entry record that helps reception resolve exceptions.',
    quick: { fb: 'GymFlow brings together QR credentials, reception search, membership status and attendance records to validate entries.', other: 'A manual count or separate list can fall out of date as plans renew or access conditions change.' },
    chooseFb: ['You want to check membership validity when validating entry.', 'You need reception to see attendance and occupancy.', 'You want to start at reception and evaluate compatible hardware later.'],
    chooseOther: ['Your gym needs a hardware integration that has not been validated yet.', 'You need a certified offline protocol for a specific device.', 'Your current process already meets your needs.'],
    faq: [
      ['Can I start without a turnstile?', 'Yes. The flow can run from a reception terminal. Hardware integration requires reviewing the specific device.'],
      ['How does a rotating QR help?', 'It reduces the use of static screenshots by periodically refreshing the digital credential.'],
    ],
  },
  'cmp-trello': {
    metaTitle: 'How to improve gym member retention',
    metaDesc: 'Attendance signals gyms can follow and ways to organize member follow-up.',
    h1: 'Reconnect before a member decides to leave.',
    lead: 'Attendance can reveal a change in habit before a cancellation. Timely follow-up starts with spotting who has stopped coming in.',
    quick: { fb: 'GymFlow combines entry activity and membership status to help find members who may need follow-up.', other: 'Without searchable attendance records, a team may only notice inactivity after a member cancels or stops paying.' },
    chooseFb: ['You want to review attendance and memberships together.', 'You need configurable criteria to prioritize follow-up.', 'Your team already has a channel for reaching members.'],
    chooseOther: ['You do not yet record entries consistently.', 'Your gym prefers to contact every member on the same schedule.', 'You need automated WhatsApp campaigns, which are outside the current scope.'],
    faq: [
      ['When should a member get a follow-up?', 'Each gym can define the period of inactivity it considers relevant.'],
      ['Does GymFlow send automated campaigns?', 'Reports help find members to contact. WhatsApp automation is outside the current scope.'],
    ],
  },
};

export const resources = {
  es: { data: es, names, h: { quick: 'Dos formas de organizarlo', fb: 'Con GymFlow', other: (n: string) => `Con ${n.toLowerCase()}`, includes: 'Una operación conectada', disclaimer: 'Las necesidades y procesos varían según cada gimnasio. Confirmá las funciones disponibles y las integraciones requeridas antes de adoptar un sistema.', ctaH: 'Conocé GymFlow', ctaP: 'Ingresá al sistema para explorar el panel de gestión.', includesList: ['Fichas de socios y membresías', 'Registro de pagos y vencimientos', 'Control de acceso y asistencia', 'Clases, reservas y rutinas', 'Ventas, inventario y caja', 'Indicadores de actividad y retención'] } },
  en: { data: en, names, h: { quick: 'Two ways to organize it', fb: 'With GymFlow', other: (n: string) => `With ${n.toLowerCase()}`, includes: 'Connected operations', disclaimer: 'Needs and processes vary by gym. Confirm available features and required integrations before adopting a system.', ctaH: 'Get to know GymFlow', ctaP: 'Log in to explore the management panel.', includesList: ['Member profiles and memberships', 'Payment records and due dates', 'Access control and attendance', 'Classes, bookings and workout plans', 'Sales, inventory and cash', 'Activity and retention metrics'] } },
} satisfies Record<Lang, unknown>;
