/**
 * SEO configuration – Unified (ERIKA)
 * Orientación: Asesoría independiente en planes de rescate en ambulancia privada
 * y asistencia médica prehospitalaria.
 * No representa marcas ni prestadores específicos.
 */

export const SEO = {
  locale: 'es_CL',
  siteType: 'service',
  region: 'Chile',

  /**
   * IDENTIDAD DEL SITIO (ERIKA)
   */
  identity: {
    siteName: 'Asesoría en Planes de Asistencia Privada',
    representativeName: 'Erika Zuñiga',
    role: 'Asesora comercial independiente',
    serviceArea: 'Región Metropolitana',

    contact: {
      phone: '+56942874934',
      whatsapp: '56942874934',
      email: 'erikazunigaejecutiva@gmail.com'
    },

    audience: [
      'Familias',
      'Adultos mayores',
      'Empresas y residencias',
      'Personas que buscan asistencia médica privada'
    ]
  },

  /**
   * DOMINIO
   */
  domain: 'https://planesdeasistenciaprivada.cl',

  /**
   * INTENCIÓN PRIMARIA
   */
  primaryIntent:
    'Asesoría en planes de rescate en ambulancia privada y asistencia médica prehospitalaria 24/7',

  /**
   * INTENCIONES SECUNDARIAS
   */
  secondaryIntents: [
    'Rescate médico a domicilio',
    'Ambulancia privada para emergencias',
    'Asistencia médica prehospitalaria',
    'Planes de emergencia médica familiar',
    'Rescate en ambulancia para adultos mayores',
    'Atención médica de urgencia en el hogar'
  ],

  /**
   * KEYWORDS (SEO + GOOGLE ADS)
   * Todas genéricas, sin uso de marcas registradas.
   */
  keywords: {
    primary: [
      'plan rescate ambulancia',
      'ambulancia privada',
      'rescate médico',
      'emergencia médica domicilio',
      'asistencia médica 24/7',
      'rescate en ambulancia'
    ],

    secondary: [
      'ambulancia privada hogar',
      'emergencia médica privada',
      'rescate médico adulto mayor',
      'ambulancia urgencia domicilio',
      'plan emergencia médica familiar',
      'asistencia médica domiciliaria'
    ],

    longTail: [
      'plan de rescate en ambulancia privada',
      'servicio de ambulancia privada 24/7',
      'rescate médico en caso de emergencia',
      'asistencia médica en el hogar para familias',
      'plan de emergencia médica para adultos mayores'
    ]
  },

  /**
   * META TAGS BASE
   */
  meta: {
    title: 'Planes de rescate en ambulancia privada | Asesoría en asistencia médica',
    description:
      'Asesoría independiente sobre planes de rescate en ambulancia privada y asistencia médica prehospitalaria 24/7. Información clara para familias y adultos mayores.',
    robots: 'index, follow'
  },

  /**
   * HEADINGS SEMÁNTICOS
   */
  headings: {
    h1: 'Planes de rescate en ambulancia privada y asistencia médica prehospitalaria',

    h2: [
      'Rescate médico ante emergencias y riesgo vital',
      'Asistencia médica prehospitalaria para tu familia',
      'Planes de rescate para adultos mayores',
      'Atención médica rápida en el hogar'
    ],

    h3: [
      '¿Cómo funciona un plan de rescate en ambulancia privada?',
      '¿Qué tipo de emergencias cubren estos planes?',
      'Diferencias entre rescate médico y atención programada',
      '¿A quién está dirigido este tipo de servicio?'
    ]
  },

  /**
   * CONTENIDO SEMÁNTICO DE APOYO
   */
  semanticSupport: [
    'respuesta rápida ante emergencias médicas',
    'activación de ambulancia privada',
    'evaluación clínica inicial',
    'estabilización del paciente en el lugar',
    'traslado coordinado a centros de salud',
    'asistencia médica domiciliaria',
    'planes flexibles según edad y necesidad'
  ],

  /**
   * DISCLAIMERS LEGALES Y DE MARCA
   */
  disclaimers: [
    'Este sitio entrega información y orientación comercial independiente.',
    'No representa ni corresponde a una institución médica específica.',
    'Los servicios médicos son prestados por empresas externas según el plan contratado.',
    'La asesoría no reemplaza la atención médica de urgencia ni a los servicios públicos.'
  ]
}
