// src/data/site.ts

export const SITE = {
  // --- Identidad general ---
  name: 'Planes de Rescate y Asistencia',
  domain: 'https://planesdeasistenciaprivada.cl',

  // --- Información de contacto ---
  phone: '+56 9 4287 4934',
  whatsapp: '+56942874934',
  whatsappMessage: 'Hola, quisiera solicitar información sobre los planes de asistencia privada.',

  email: 'erikazunigaejecutiva@gmail.com',

  // --- Ubicación / cobertura ---
  region: 'Región Metropolitana',
  areas: ['Santiago', 'Comunas aledañas'],

  // --- Contenido del sitio ---
  hero: {
    title: 'Rescate Médico y Asistencia Privada 24/7',
    subtitle:
      'Orientación clara para contratar servicios de ambulancia privada, atención domiciliaria y apoyo urgente para tu familia.'
  },

  sections: {
    services: {
      title: 'Servicios de Asistencia y Rescate',
      description:
        'Información y orientación sobre servicios de ambulancia particular, atención domiciliaria y apoyo prehospitalario.'
    },
    plans: {
      title: 'Opciones de Planes',
      description:
        'Conoce alternativas de asistencia privada y apoyo en emergencias. Recibe orientación antes de contratar.'
    },
    contact: {
      title: 'Contacto',
      description:
        'Contáctanos por WhatsApp o teléfono para recibir orientación inmediata sobre asistencia privada y servicios de rescate.'
    }
  },

  // --- Disclaimers (OBLIGATORIOS segun Hoja UCM) ---
  disclaimers: {
    top: 'Sitio informativo independiente sobre asistencia privada. No representa servicios médicos oficiales ni actúa en nombre de ninguna marca.',
    footer:
      'Este sitio entrega orientación independiente sobre servicios de asistencia privada y opciones de rescate. No reemplaza asesoría médica profesional ni pertenece a proveedores oficiales.'
  },

  // --- Redes sociales (opcional, generalmente vacío) ---
  social: {
    instagram: '',
    facebook: ''
  }
}
