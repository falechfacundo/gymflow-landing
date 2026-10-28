import type { Lang } from './routes';

type LegalKind = 'terms' | 'privacy';
type LegalDoc = { metaTitle: string; metaDesc: string; h1: string; updated: string; draft: boolean; notice: string; sections: [string, string[]][] };

const docs: Record<LegalKind, Record<Lang, LegalDoc>> = {
  terms: {
    es: {
      metaTitle: 'Términos y condiciones', metaDesc: 'Borrador de términos para el uso de GymFlow.', h1: 'Términos y condiciones', updated: 'Borrador · 28 de octubre de 2026', draft: true,
      notice: 'Borrador pendiente de revisión legal y de completar los datos de la entidad responsable antes de publicarse.',
      sections: [
        ['1. Quién presta el servicio', ['Razón social, CUIT, domicilio y datos de contacto del proveedor de GymFlow: pendientes de completar.']],
        ['2. El servicio', ['GymFlow es una plataforma de gestión para gimnasios que reúne módulos de socios, membresías, control de acceso, clases, rutinas, caja y reportes. Las funciones disponibles pueden variar durante el desarrollo y según el plan contratado.']],
        ['3. Cuentas y permisos', ['Cada gimnasio administra las cuentas y permisos de su personal. Quienes usan el servicio deben mantener sus credenciales bajo control y notificar cualquier acceso no autorizado.']],
        ['4. Información del gimnasio y sus socios', ['El gimnasio es responsable de que los datos que carga sean adecuados para su operación y de informar a sus socios sobre el tratamiento que realiza. Las responsabilidades de cada parte deben confirmarse en el contrato de servicio.']],
        ['5. Planes y pagos', ['Los precios, módulos habilitados, medios de pago, condiciones de facturación y cancelación se informarán antes de contratar. GymFlow no reemplaza las obligaciones comerciales o fiscales propias del gimnasio.']],
        ['6. Uso aceptable', ['No se puede usar GymFlow para actividades ilegales, vulnerar derechos de terceros, acceder sin autorización a datos o afectar el funcionamiento del servicio.']],
        ['7. Disponibilidad', ['GymFlow se encuentra en desarrollo. El alcance actual, la disponibilidad y las integraciones se deben confirmar antes de usar el servicio en operaciones reales.']],
        ['8. Suspensión y cambios', ['Las reglas de suspensión, conservación de datos y actualización de estos términos deben definirse en la versión final del acuerdo.']],
        ['9. Ley aplicable y contacto', ['Jurisdicción, domicilio legal y canal de contacto: pendientes de completar con asesoramiento profesional.']],
      ],
    },
    en: {
      metaTitle: 'Terms and conditions', metaDesc: 'Draft terms for using GymFlow.', h1: 'Terms and conditions', updated: 'Draft · October 28, 2026', draft: true,
      notice: 'Draft pending legal review and completion of the responsible entity’s details before publication.',
      sections: [
        ['1. Service provider', ['Legal name, tax ID, address and contact details for the GymFlow provider: to be completed.']],
        ['2. The service', ['GymFlow is a gym management platform with member, membership, access control, class, workout plan, cash and reporting modules. Available features may vary during development and by plan.']],
        ['3. Accounts and permissions', ['Each gym manages staff accounts and permissions. Users must keep their credentials secure and report unauthorized access.']],
        ['4. Gym and member information', ['The gym is responsible for ensuring the data it uploads is appropriate for its operations and for informing members about its data practices. Each party’s responsibilities must be confirmed in the service agreement.']],
        ['5. Plans and payments', ['Pricing, enabled modules, payment methods, billing terms and cancellation conditions will be provided before purchase. GymFlow does not replace the gym’s own commercial or tax obligations.']],
        ['6. Acceptable use', ['GymFlow may not be used for unlawful activity, to violate third-party rights, to access data without authorization or to disrupt the service.']],
        ['7. Availability', ['GymFlow is in development. Current scope, availability and integrations must be confirmed before using the service in real operations.']],
        ['8. Suspension and changes', ['Suspension rules, data retention and changes to these terms must be defined in the final service agreement.']],
        ['9. Governing law and contact', ['Jurisdiction, legal address and contact channel: to be completed with professional advice.']],
      ],
    },
  },
  privacy: {
    es: {
      metaTitle: 'Política de privacidad', metaDesc: 'Borrador de privacidad para GymFlow y los datos de gimnasios y socios.', h1: 'Política de privacidad', updated: 'Borrador · 28 de octubre de 2026', draft: true,
      notice: 'Borrador pendiente de identificar al responsable, confirmar proveedores y revisar el tratamiento con asesoramiento legal antes de publicarse.',
      sections: [
        ['1. Quién trata los datos', ['GymFlow puede procesar datos para operar la plataforma. El gimnasio decide qué información de sus socios carga y para qué la utiliza. La identidad del responsable de la base y la distribución de responsabilidades entre GymFlow y cada gimnasio deben completarse en la versión final.']],
        ['2. Datos que puede tratar el servicio', ['Datos de cuenta y personal del gimnasio; nombre, documento y datos de contacto de socios; información de membresías, pagos, asistencia y reservas; registros de acceso; ventas e inventario. El gimnasio también puede cargar datos adicionales, que deben describirse y limitarse en la configuración final.']],
        ['3. Datos sensibles', ['El producto contempla que un gimnasio pueda gestionar documentación relacionada con aptos médicos. El uso, acceso, almacenamiento, plazo de conservación y consentimiento aplicables a esos datos requieren una definición específica antes de habilitar esa función.']],
        ['4. Finalidades', ['Los datos pueden utilizarse para administrar cuentas, socios, membresías, pagos, reservas, ingresos, caja, soporte y seguridad de la plataforma. Las finalidades definitivas deben validarse con cada gimnasio y comunicarse a las personas titulares.']],
        ['5. Proveedores y ubicación', ['Los proveedores que alojan, almacenan o procesan información, la ubicación de los datos y las transferencias internacionales deben confirmarse antes de publicar esta política.']],
        ['6. Conservación y seguridad', ['Los plazos de conservación, eliminación y exportación de datos están pendientes de definirse. GymFlow contempla controles de acceso y medidas de protección; la descripción final debe corresponder a lo efectivamente desplegado.']],
        ['7. Derechos y consultas', ['Las personas pueden solicitar información, acceso, rectificación o supresión al responsable correspondiente. Identidad, domicilio y canal de contacto para ejercer estos derechos: pendientes de completar.']],
        ['8. Cookies y medición', ['La landing no declara herramientas de analítica configuradas en el proyecto. Las cookies y herramientas de medición de la aplicación deben confirmarse en el despliegue final.']],
      ],
    },
    en: {
      metaTitle: 'Privacy policy', metaDesc: 'Draft privacy policy for GymFlow and gym and member data.', h1: 'Privacy policy', updated: 'Draft · October 28, 2026', draft: true,
      notice: 'Draft pending identification of the responsible entity, provider confirmation and legal review before publication.',
      sections: [
        ['1. Who processes data', ['GymFlow may process data to operate the platform. Each gym decides what member information to upload and how it uses it. The database controller and allocation of responsibilities between GymFlow and each gym must be completed in the final version.']],
        ['2. Data the service may process', ['Gym and staff account details; member names, document numbers and contact details; memberships, payments, attendance and bookings; access records; sales and inventory. Any additional data a gym may upload must be described and limited in the final configuration.']],
        ['3. Sensitive data', ['The product allows a gym to manage medical-clearance documents. Use, access, storage, retention and consent requirements for this data need a specific definition before this feature is enabled.']],
        ['4. Purposes', ['Data may be used to manage accounts, members, memberships, payments, bookings, entries, cash, support and platform security. Final purposes must be confirmed with each gym and communicated to data subjects.']],
        ['5. Providers and data location', ['Providers that host, store or process information, data locations and international transfers must be confirmed before this policy is published.']],
        ['6. Retention and security', ['Data retention, deletion and export periods still need to be defined. GymFlow plans access controls and security measures; the final description must match what is actually deployed.']],
        ['7. Rights and questions', ['Individuals may request information, access, correction or deletion from the relevant controller. Identity, address and contact channel for exercising these rights: to be completed.']],
        ['8. Cookies and analytics', ['The landing page does not list analytics tools configured in the project. Cookies and measurement tools in the application must be confirmed for the final deployment.']],
      ],
    },
  },
};

export const legal = {
  terms: { es: docs.terms.es, en: docs.terms.en },
  privacy: { es: docs.privacy.es, en: docs.privacy.en },
} satisfies Record<LegalKind, Record<Lang, LegalDoc>>;
