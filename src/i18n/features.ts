import type { FeatureKey, Lang } from './routes';

export interface FeatureCopy {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1: string;
  lead: string;
  caps: [icon: string, title: string, text: string][];
  steps: [string, string][];
  faq: [q: string, a: string][];
}

const es: Record<FeatureKey, FeatureCopy> = {
  'feat-members': {
    metaTitle: 'Gestión de socios para gimnasios',
    metaDesc: 'Centralizá las fichas, membresías y actividad de tus socios en GymFlow. Encontrá la información que necesitás para atenderlos mejor.',
    eyebrow: 'Socios', h1: 'Cada socio, con su historia a mano.',
    lead: 'Consultá fichas, estado de membresía y actividad desde el mismo lugar. Así recepción puede resolver más rápido y el equipo trabaja con información clara.',
    caps: [
      ['users', 'Fichas ordenadas', 'Mantené los datos y el historial de cada socio vinculados a tu gimnasio.'],
      ['search', 'Búsqueda ágil', 'Encontrá una ficha por nombre o documento cuando alguien llega a recepción.'],
      ['credit-card', 'Estado de membresía', 'Revisá el plan vigente y la situación de pago antes de validar el ingreso.'],
    ],
    steps: [['Registrá al socio', 'Cargá sus datos desde el panel de gestión.'], ['Asigná una membresía', 'Elegí el plan y dejá registrado el período correspondiente.'], ['Consultá su actividad', 'Usá la ficha para revisar ingresos y estado de cuenta.']],
    faq: [
      ['¿Puedo registrar un socio sin correo electrónico?', 'El alta puede iniciarse desde recepción con los datos del socio. El acceso a la app de socios puede vincularse más adelante.'],
      ['¿Cómo busco una ficha?', 'Podés encontrar socios por nombre o documento desde el módulo de socios.'],
      ['¿El socio necesita una cuenta para estar registrado?', 'No. El gimnasio puede administrar su ficha aunque todavía no use la app de socios.'],
    ],
  },
  'feat-billing': {
    metaTitle: 'Membresías y cobros para gimnasios',
    metaDesc: 'Organizá planes, vencimientos y pagos de socios. GymFlow reúne el estado de las membresías y el registro de cobros en el panel del gimnasio.',
    eyebrow: 'Membresías y cobros', h1: 'Cuotas claras para tu equipo y tus socios.',
    lead: 'Definí planes, asociá membresías y llevá el seguimiento de pagos y vencimientos sin reconstruir el estado de cada socio en varias planillas.',
    caps: [
      ['layers', 'Planes configurables', 'Organizá opciones por duración, pases y condiciones de acceso.'],
      ['calendar-range', 'Vencimientos visibles', 'Consultá el período de cada membresía y anticipá renovaciones pendientes.'],
      ['credit-card', 'Registro de pagos', 'Asentá cobros y mantené el historial financiero asociado a cada socio.'],
    ],
    steps: [['Creá tus planes', 'Definí las opciones que ofrecés en el gimnasio.'], ['Asigná la membresía', 'Vinculá el plan con el socio y registrá el cobro.'], ['Seguí el estado', 'Revisá vigencias, pagos y renovaciones desde el panel.']],
    faq: [
      ['¿Puedo ofrecer más de un tipo de plan?', 'Sí. El sistema contempla planes con distintas duraciones y modalidades.'],
      ['¿Cómo se registra un pago?', 'El equipo puede asociar el cobro a una membresía y consultar luego su historial.'],
      ['¿GymFlow procesa cobros recurrentes?', 'La integración de pagos se está preparando. La disponibilidad y los medios de pago habilitados se confirmarán para cada gimnasio.'],
    ],
  },
  'feat-access': {
    metaTitle: 'Control de acceso y aforo para gimnasios',
    metaDesc: 'Validá ingresos, consultá quién está dentro y revisá la vigencia de cada membresía desde el control de acceso de GymFlow.',
    eyebrow: 'Control de acceso', h1: 'Un ingreso más claro desde recepción.',
    lead: 'Validá el estado del socio en el momento de entrada y llevá un registro de asistencia y aforo. El equipo sabe qué hacer sin depender de búsquedas manuales.',
    caps: [
      ['qr-code', 'Credencial QR', 'Validá un código rotativo desde la app del socio o usá la búsqueda de recepción.'],
      ['shield-check', 'Reglas de ingreso', 'Considerá vigencia, pases disponibles y reglas configuradas por el gimnasio.'],
      ['chart-column', 'Aforo actualizado', 'Consultá los ingresos registrados y quién permanece dentro del gimnasio.'],
    ],
    steps: [['Identificá al socio', 'Escaneá su credencial o buscá su ficha en recepción.'], ['Validá el acceso', 'GymFlow revisa su estado y registra el resultado.'], ['Seguí el aforo', 'Consultá ingresos abiertos y resolvé ajustes desde el panel.']],
    faq: [
      ['¿El QR es estático?', 'No. La credencial digital usa un código rotativo para reducir el riesgo de compartir una captura.'],
      ['¿Se puede validar un ingreso manualmente?', 'Sí. Recepción puede buscar al socio y registrar el ingreso desde el panel.'],
      ['¿Necesito un molinete especial?', 'El flujo puede utilizarse desde una terminal de recepción. La compatibilidad con hardware depende del dispositivo y su integración.'],
    ],
  },
  'feat-classes': {
    metaTitle: 'Clases y reservas para gimnasios',
    metaDesc: 'Organizá clases, cupos y reservas desde GymFlow. Tené horarios y disponibilidad más claros para el equipo y los socios.',
    eyebrow: 'Clases', h1: 'Clases organizadas, cupos bajo control.',
    lead: 'Definí horarios y capacidad, consultá las reservas y ordená la lista de espera desde el mismo panel que usás para gestionar el gimnasio.',
    caps: [
      ['calendar-range', 'Horarios recurrentes', 'Configurá plantillas para las clases que se repiten cada semana.'],
      ['users', 'Cupos y reservas', 'Revisá quién ocupa cada lugar y la disponibilidad de la sesión.'],
      ['list-checks', 'Lista de espera', 'Ordená solicitudes pendientes cuando una clase llega a su capacidad.'],
    ],
    steps: [['Creá la clase', 'Definí actividad, horario y capacidad.'], ['Abrí las reservas', 'Dejá que el equipo y los socios gestionen los lugares disponibles.'], ['Revisá cada sesión', 'Consultá reservas, cancelaciones y asistencia.']],
    faq: [
      ['¿Puedo limitar los lugares por clase?', 'Sí. Cada sesión contempla una capacidad máxima.'],
      ['¿Qué pasa si se libera un lugar?', 'La lista de espera permite ordenar a las personas pendientes para ofrecer los cupos disponibles.'],
      ['¿Puedo cancelar una sola fecha?', 'Las sesiones se gestionan por fecha, además de las plantillas recurrentes.'],
    ],
  },
  'feat-routines': {
    metaTitle: 'Rutinas y seguimiento de entrenamiento',
    metaDesc: 'Creá rutinas para tus socios y acompañá su entrenamiento con la app web de GymFlow.',
    eyebrow: 'Rutinas y app del socio', h1: 'El plan de entrenamiento, más cerca del socio.',
    lead: 'Armá rutinas por días y ejercicios, asignáselas a tus socios y dales un espacio para consultar el plan y registrar su progreso.',
    caps: [
      ['dumbbell', 'Rutinas por días', 'Organizá ejercicios, series, repeticiones y descansos en un plan claro.'],
      ['users', 'Asignación a socios', 'Mantené cada rutina vinculada a la persona que la sigue.'],
      ['smartphone', 'App web del socio', 'Permití que cada socio consulte su rutina desde el teléfono y registre su actividad.'],
    ],
    steps: [['Prepará el plan', 'Elegí ejercicios y organizalos por día de entrenamiento.'], ['Asignalo', 'Vinculá la rutina con el socio correspondiente.'], ['Acompañá el progreso', 'El socio consulta su plan y registra su actividad.']],
    faq: [
      ['¿Puedo organizar ejercicios por día?', 'Sí. Las rutinas se estructuran en días e ítems de ejercicio.'],
      ['¿Los socios necesitan instalar una app?', 'La experiencia del socio es web y puede usarse desde el teléfono.'],
      ['¿Se puede registrar el progreso?', 'El diseño contempla el registro de series y mediciones para seguir la evolución.'],
    ],
  },
  'feat-pos': {
    metaTitle: 'Caja, ventas e inventario para gimnasios',
    metaDesc: 'Registrá ventas de mostrador, movimientos de stock y cierres de caja en GymFlow.',
    eyebrow: 'Caja y ventas', h1: 'La caja del gimnasio, en orden al cierre.',
    lead: 'Registrá ventas de mostrador y movimientos de caja junto con la operación diaria. Consultá productos y stock sin separar el control del resto del gimnasio.',
    caps: [
      ['shopping-bag', 'Ventas de mostrador', 'Cargá productos y registrá ventas realizadas en recepción.'],
      ['layers', 'Control de inventario', 'Seguí existencias y movimientos para saber qué necesita reposición.'],
      ['chart-line', 'Apertura y cierre', 'Llevá el registro de caja y compará el cierre con los movimientos del día.'],
    ],
    steps: [['Configurá productos', 'Cargá artículos, precios y existencias iniciales.'], ['Registrá las ventas', 'Asociá cada operación a la caja abierta.'], ['Cerrá el turno', 'Revisá movimientos y dejá documentado el arqueo.']],
    faq: [
      ['¿Puedo vender productos desde recepción?', 'Sí. El módulo contempla ventas de mostrador vinculadas al inventario.'],
      ['¿Cómo se actualiza el stock?', 'Las ventas y ajustes registrados generan movimientos de inventario.'],
      ['¿Se pueden llevar varias cajas abiertas?', 'El flujo de caja está pensado para mantener una apertura activa por gimnasio y registrar su cierre.'],
    ],
  },
  'feat-analytics': {
    metaTitle: 'Retención y reportes para gimnasios',
    metaDesc: 'Consultá actividad, ocupación y señales de socios que podrían necesitar seguimiento desde los reportes de GymFlow.',
    eyebrow: 'Retención y reportes', h1: 'Detectá señales antes de perder el vínculo.',
    lead: 'Reuní indicadores de asistencia, membresías y actividad para que el equipo pueda encontrar socios que necesitan atención y entender mejor el movimiento del gimnasio.',
    caps: [
      ['users', 'Socios para contactar', 'Identificá socios con membresía vigente que dejaron de asistir según el período configurado.'],
      ['chart-column', 'Actividad por horario', 'Usá el historial de ingresos para observar qué franjas concentran más movimiento.'],
      ['chart-line', 'Métricas del gimnasio', 'Consultá indicadores financieros y de membresías definidos para tu operación.'],
    ],
    steps: [['Registrá actividad', 'Los ingresos y las membresías forman la base de los indicadores.'], ['Revisá las señales', 'Consultá asistencia, ocupación y estados de cuenta.'], ['Tomá acción', 'Priorizá seguimientos con el equipo según las necesidades del gimnasio.']],
    faq: [
      ['¿Cómo se detecta un socio en riesgo?', 'Se compara su última asistencia con el umbral de inactividad que configure el gimnasio.'],
      ['¿Los reportes muestran horarios de mayor actividad?', 'Sí. El registro de ingresos puede agruparse por día y franja horaria.'],
      ['¿Puedo contactar a los socios desde GymFlow?', 'Los reportes ayudan a identificar a quién contactar. Los canales de comunicación disponibles dependen de la configuración del gimnasio.'],
    ],
  },
};

const en: Record<FeatureKey, FeatureCopy> = {
  'feat-members': {
    metaTitle: 'Member management for gyms',
    metaDesc: 'Keep member profiles, memberships and activity together in GymFlow so your team can find the information it needs.',
    eyebrow: 'Members', h1: 'Every member’s history, close at hand.',
    lead: 'Check profiles, membership status and activity in one place. Reception can resolve requests faster and your team can work with clear information.',
    caps: [
      ['users', 'Organized profiles', 'Keep each member’s details and history linked to your gym.'],
      ['search', 'Quick search', 'Find a profile by name or document when someone arrives at reception.'],
      ['credit-card', 'Membership status', 'Review the current plan and payment status before validating entry.'],
    ],
    steps: [['Add a member', 'Enter their details from the management panel.'], ['Assign a membership', 'Choose a plan and record its billing period.'], ['Review activity', 'Use the profile to check entries and account status.']],
    faq: [
      ['Can I add a member without an email address?', 'Reception can start a member profile with their details. Access to the member app can be linked later.'],
      ['How do I find a profile?', 'Search for members by name or document in the members module.'],
      ['Does a member need an account to be listed?', 'No. Your gym can manage a member profile even if they do not use the member app yet.'],
    ],
  },
  'feat-billing': {
    metaTitle: 'Gym memberships and billing',
    metaDesc: 'Organize plans, due dates and member payments. GymFlow brings membership status and payment records into your gym panel.',
    eyebrow: 'Memberships and billing', h1: 'Clear membership status for your team and members.',
    lead: 'Set up plans, assign memberships and track payments and due dates without rebuilding each member’s status across multiple spreadsheets.',
    caps: [
      ['layers', 'Flexible plans', 'Organize options by duration, visit passes and access rules.'],
      ['calendar-range', 'Visible due dates', 'Review each membership period and anticipate renewals.'],
      ['credit-card', 'Payment records', 'Record payments and keep a history linked to each member.'],
    ],
    steps: [['Create your plans', 'Set up the options your gym offers.'], ['Assign a membership', 'Link a plan to a member and record the payment.'], ['Track its status', 'Review validity, payments and renewals from your panel.']],
    faq: [
      ['Can I offer more than one type of plan?', 'Yes. Plans can have different durations and formats.'],
      ['How is a payment recorded?', 'Your team can link a payment to a membership and review its history later.'],
      ['Does GymFlow process recurring payments?', 'Payment integrations are being prepared. Availability and supported methods will be confirmed for each gym.'],
    ],
  },
  'feat-access': {
    metaTitle: 'Gym access control and occupancy',
    metaDesc: 'Validate entries, see who is inside and review each membership status with GymFlow access control.',
    eyebrow: 'Access control', h1: 'A clearer check-in at reception.',
    lead: 'Validate a member’s status when they arrive and keep track of attendance and occupancy. Your team knows what to do without manual lookups.',
    caps: [
      ['qr-code', 'QR credential', 'Validate a rotating code from the member app or look up a profile at reception.'],
      ['shield-check', 'Entry rules', 'Account for membership validity, remaining passes and rules set by your gym.'],
      ['chart-column', 'Updated occupancy', 'Review recorded entries and who is still inside the gym.'],
    ],
    steps: [['Identify the member', 'Scan their credential or look up their profile at reception.'], ['Validate access', 'GymFlow checks their status and records the result.'], ['Track occupancy', 'Review open visits and make adjustments from the panel.']],
    faq: [
      ['Is the QR code static?', 'No. The digital credential uses a rotating code to reduce the risk of someone sharing a screenshot.'],
      ['Can reception validate an entry manually?', 'Yes. Reception can find the member and record an entry from the panel.'],
      ['Do I need a special turnstile?', 'The flow can be used from a reception terminal. Hardware compatibility depends on the device and its integration.'],
    ],
  },
  'feat-classes': {
    metaTitle: 'Gym classes and bookings',
    metaDesc: 'Organize classes, capacity and bookings with GymFlow. Give your team and members a clearer view of schedules and availability.',
    eyebrow: 'Classes', h1: 'Organized classes, controlled capacity.',
    lead: 'Set schedules and capacity, review bookings and organize the waitlist from the same panel you use to manage your gym.',
    caps: [
      ['calendar-range', 'Recurring schedules', 'Set up templates for classes that repeat each week.'],
      ['users', 'Capacity and bookings', 'See who has reserved a place and how many spots remain.'],
      ['list-checks', 'Waitlist', 'Organize pending requests when a class reaches capacity.'],
    ],
    steps: [['Create a class', 'Set the activity, schedule and capacity.'], ['Open bookings', 'Let your team and members manage available places.'], ['Review each session', 'Check bookings, cancellations and attendance.']],
    faq: [
      ['Can I limit places per class?', 'Yes. Each session has a maximum capacity.'],
      ['What happens when a place opens up?', 'The waitlist helps organize pending members so open spots can be offered.'],
      ['Can I cancel one date only?', 'Sessions are managed by date in addition to recurring templates.'],
    ],
  },
  'feat-routines': {
    metaTitle: 'Workout plans and training progress',
    metaDesc: 'Build workout plans for your members and support their training with the GymFlow web app.',
    eyebrow: 'Workout plans and member app', h1: 'Training plans, closer to your members.',
    lead: 'Build routines by day and exercise, assign them to members, and give them a place to view their plan and record progress.',
    caps: [
      ['dumbbell', 'Plans by day', 'Organize exercises, sets, reps and rest times into a clear routine.'],
      ['users', 'Member assignments', 'Keep each workout plan linked to the person following it.'],
      ['smartphone', 'Member web app', 'Let members check their routine on their phone and record activity.'],
    ],
    steps: [['Build the plan', 'Choose exercises and organize them by training day.'], ['Assign it', 'Link the workout plan to the right member.'], ['Support progress', 'Members can view their plan and record activity.']],
    faq: [
      ['Can I organize exercises by day?', 'Yes. Workout plans are structured into days and exercise items.'],
      ['Do members need to install an app?', 'The member experience is web-based and works on a phone.'],
      ['Can members record progress?', 'The design supports recording sets and measurements to follow progress.'],
    ],
  },
  'feat-pos': {
    metaTitle: 'Gym point of sale, inventory and cash register',
    metaDesc: 'Record front-desk sales, stock movements and cash register closeouts with GymFlow.',
    eyebrow: 'Point of sale', h1: 'Keep your gym’s daily sales in order.',
    lead: 'Record front-desk sales and cash movements alongside daily operations. Check products and inventory without separating retail from the rest of your gym.',
    caps: [
      ['shopping-bag', 'Front-desk sales', 'Add products and record sales made at reception.'],
      ['layers', 'Inventory tracking', 'Follow stock and movements to know what needs restocking.'],
      ['chart-line', 'Open and close cash', 'Record cash activity and compare the closeout against the day’s movements.'],
    ],
    steps: [['Set up products', 'Add items, prices and starting stock.'], ['Record sales', 'Link each transaction to the open cash register.'], ['Close the shift', 'Review movements and document the count.']],
    faq: [
      ['Can I sell products at reception?', 'Yes. The module includes front-desk sales linked to inventory.'],
      ['How does stock update?', 'Recorded sales and adjustments create inventory movements.'],
      ['Can I keep multiple cash registers open?', 'The cash flow is designed to keep one open register per gym and record its closeout.'],
    ],
  },
  'feat-analytics': {
    metaTitle: 'Member retention and gym reports',
    metaDesc: 'Review attendance, occupancy and signs that a member may need follow-up with GymFlow reports.',
    eyebrow: 'Retention and reports', h1: 'Spot signs before you lose touch.',
    lead: 'Bring attendance, membership and activity indicators together so your team can find members who need attention and better understand gym traffic.',
    caps: [
      ['users', 'Members to follow up with', 'Identify active members who have stopped attending according to your configured period.'],
      ['chart-column', 'Activity by time', 'Use entry history to see which time slots get the most traffic.'],
      ['chart-line', 'Gym metrics', 'Review the financial and membership indicators defined for your operation.'],
    ],
    steps: [['Record activity', 'Entries and memberships provide the basis for your indicators.'], ['Review signals', 'Check attendance, occupancy and account status.'], ['Take action', 'Prioritize follow-ups with your team based on your gym’s needs.']],
    faq: [
      ['How does GymFlow identify a member at risk?', 'It compares their latest attendance against the inactivity threshold set by your gym.'],
      ['Do reports show peak hours?', 'Yes. Entry history can be grouped by weekday and time of day.'],
      ['Can I contact members from GymFlow?', 'Reports help identify who to contact. Available communication channels depend on your gym’s setup.'],
    ],
  },
};

export const features: Record<Lang, Record<FeatureKey, FeatureCopy>> = { es, en };
