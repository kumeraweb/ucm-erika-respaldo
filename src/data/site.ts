// src/data/site.ts

export const SITE = {
  // --- Identidad general ---
  name: 'Planes de Asistencia Privada',
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
    title: 'Asistencia Privada para tu Familia',
    subtitle:
      'Orientación rápida y clara para contratar planes de apoyo domiciliario y acompañamiento para adultos mayores.'
  },

  sections: {
    services: {
      title: 'Servicios Disponibles',
      description:
        'Asesoría independiente para ayudarte a elegir un plan de asistencia privada que se adapte a tus necesidades.'
    },
    plans: {
      title: 'Planes y Beneficios',
      description:
        'Revisa las opciones disponibles y recibe orientación personalizada antes de contratar.'
    },
    contact: {
      title: 'Contacto',
      description:
        'Haz tus consultas por WhatsApp o teléfono. Respuesta rápida dentro del horario hábil.'
    }
  },

  // --- Disclaimers (OBLIGATORIOS segun Hoja UCM) ---
  disclaimers: {
    top: 'Sitio administrado por asesora independiente. No es sitio oficial, ni representa a ninguna institución de salud.',
    footer:
      'Este sitio ofrece asesoría independiente sobre planes de asistencia privada. No es una plataforma oficial de servicios médicos ni reemplaza atención profesional.'
  },

  // --- Redes sociales (opcional, generalmente vacío) ---
  social: {
    instagram: '',
    facebook: ''
  }
}
