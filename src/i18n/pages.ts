/* ---------------- Precios ---------------- */
export const pricing = {
  es: {
    metaTitle: 'Planes',
    metaDesc: 'Consultá los planes de GymFlow para tu gimnasio y qué módulos están disponibles para empezar.',
    eyebrow: 'Planes', h1: 'Una opción que encaje con tu gimnasio.',
    lead: 'Todavía no publicamos una lista de precios. Contanos cómo funciona tu gimnasio y te compartimos las opciones disponibles.',
    heading: 'Qué podemos revisar juntos',
    items: ['Cantidad de socios y sedes', 'Gestión de membresías y cobros', 'Control de acceso y asistencia', 'Clases, rutinas y caja', 'Disponibilidad de los módulos'],
    cta: 'Consultar por planes',
    faqTitle: 'Preguntas sobre precios',
    faq: [
      ['¿Cuánto cuesta GymFlow?', 'Los precios todavía no están publicados. Contactanos para consultar las opciones disponibles para tu gimnasio.'],
      ['¿Puedo consultar antes de contratar?', 'Sí. Escribinos y conversamos sobre los módulos, la disponibilidad y las condiciones.'],
      ['¿Puedo usar todos los módulos hoy?', 'La disponibilidad puede variar mientras el producto se encuentra en desarrollo. Confirmaremos el alcance actual antes de avanzar.'],
    ],
  },
  en: {
    metaTitle: 'Plans',
    metaDesc: 'Ask about GymFlow plans for your gym and which modules are available to get started.',
    eyebrow: 'Plans', h1: 'An option that fits your gym.',
    lead: 'We have not published pricing yet. Tell us how your gym operates and we will share the available options.',
    heading: 'What we can review together',
    items: ['Member count and locations', 'Membership management and payments', 'Access control and attendance', 'Classes, workout plans and cash', 'Module availability'],
    cta: 'Ask about plans',
    faqTitle: 'Pricing questions',
    faq: [
      ['How much does GymFlow cost?', 'Pricing is not published yet. Contact us to ask about the options available for your gym.'],
      ['Can I ask questions before signing up?', 'Yes. Get in touch to discuss modules, availability and terms.'],
      ['Can I use every module today?', 'Availability may vary while the product is being developed. We will confirm the current scope before moving forward.'],
    ],
  },
} as const;

/* ---------------- Contacto ---------------- */
export const contact = {
  es: { metaTitle: 'Contacto', metaDesc: 'Consultanos por GymFlow, sus módulos y las opciones disponibles para tu gimnasio.', h1: 'Hablemos de tu gimnasio.', lead: 'Contanos cómo funciona tu operación y te ayudamos a revisar si GymFlow encaja.',
    topics: [['credit-card', 'Planes', 'Consultá opciones, disponibilidad y qué módulos están habilitados.'], ['qr-code', 'Control de acceso', 'Contanos cómo validan ingresos y qué equipos utilizan en recepción.'], ['users', 'Tu gimnasio', 'Compartinos el tamaño del equipo, cantidad de socios y necesidades principales.']], email: 'Escribinos a', hint: 'Este es el canal de contacto de GymFlow.' },
  en: { metaTitle: 'Contact', metaDesc: 'Ask about GymFlow, its modules and the options available for your gym.', h1: 'Let’s talk about your gym.', lead: 'Tell us how your operation works and we can review whether GymFlow is a fit.',
    topics: [['credit-card', 'Plans', 'Ask about options, availability and enabled modules.'], ['qr-code', 'Access control', 'Tell us how you validate entries and what equipment reception uses.'], ['users', 'Your gym', 'Share your team size, member count and main needs.']], email: 'Write to us at', hint: 'This is GymFlow’s contact channel.' },
} as const;

/* ---------------- Changelog ---------------- */
export const changelog = {
  es: { metaTitle: 'Qué estamos construyendo en GymFlow', metaDesc: 'Conocé el alcance de GymFlow para la operación diaria de un gimnasio y los módulos que estamos preparando.', h1: 'GymFlow está en desarrollo', lead: 'Este es el alcance que estamos trabajando. La disponibilidad de cada módulo se confirma a medida que esté listo.',
    entries: [
      { stage: 'Operación diaria', title: 'Socios, membresías y acceso', items: ['Fichas de socios vinculadas con planes, vigencias y actividad.', 'Validación de ingresos desde recepción y credenciales digitales.', 'Registro de asistencia y aforo para consultar el movimiento del gimnasio.'] },
      { stage: 'Gestión del gimnasio', title: 'Clases, rutinas y caja', items: ['Horarios, cupos y reservas para clases.', 'Rutinas de entrenamiento y consulta desde la app web del socio.', 'Ventas de mostrador, inventario y movimientos de caja.'] },
      { stage: 'Seguimiento', title: 'Indicadores para acompañar a tus socios', items: ['Actividad por horarios y asistencia.', 'Señales de inactividad para organizar el seguimiento.', 'Métricas de membresías y operación del gimnasio.'] },
    ] },
  en: { metaTitle: 'What we are building at GymFlow', metaDesc: 'Explore GymFlow’s planned scope for daily gym operations and the modules we are preparing.', h1: 'GymFlow is in development', lead: 'This is the scope we are working on. Availability for each module will be confirmed as it becomes ready.',
    entries: [
      { stage: 'Daily operations', title: 'Members, memberships and access', items: ['Member profiles linked to plans, validity and activity.', 'Entry validation at reception and digital credentials.', 'Attendance and occupancy records to review gym traffic.'] },
      { stage: 'Gym management', title: 'Classes, workout plans and cash', items: ['Schedules, capacity and bookings for classes.', 'Training plans and access through the member web app.', 'Front-desk sales, inventory and cash movements.'] },
      { stage: 'Follow-up', title: 'Indicators to support your members', items: ['Activity by time and attendance.', 'Inactivity signals to organize member follow-up.', 'Membership and gym operations metrics.'] },
    ] },
} as const;
