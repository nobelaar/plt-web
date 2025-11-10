export const navLinks = [
  { label: 'Qué es PLT', href: '/#que-es-plt' },
  { label: 'Cómo funciona', href: '/#como-funciona' },
  { label: 'Token', href: '/#token-plt' },
  { label: 'Participar', href: '/#participar' },
  { label: 'Roadmap', href: '/#roadmap' },
  { label: 'Validadores', href: '/validadores' }
];

export const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Documentación', href: '/#participar' },
  { label: 'Comunidad', href: '/#participar' },
  { label: 'Whitepaper', href: '/#que-es-plt' }
];

export const roadmapItems = [
  { quarter: '2024', milestone: 'Diseño inicial: documentación técnica y definición de arquitectura.' },
  { quarter: '2025', milestone: 'Prototipo y comunidad: liberación de código alfa y sesiones de revisión conjunta.' },
  { quarter: '2025/2026', milestone: 'Testnet pública: red abierta para validar performance, gobernanza y parámetros monetarios.' },
  { quarter: '2026', milestone: 'Camino a mainnet: auditorías, ajustes e implementación gradual del lanzamiento.' }
];

export const monetaryParameters = [
  'Inflación mínima: 7% anual',
  'Inflación máxima: 20% anual',
  'Variación máxima por año: 13%',
  'Objetivo de staking: 67% del suministro total'
];

export const participationLinks = [
  { label: 'Documentación técnica', href: '/#participar', variant: 'primary' as const },
  { label: 'GitHub', href: 'https://github.com/', variant: 'outline' as const },
  { label: 'Comunidad', href: '/#participar', variant: 'outline' as const },
  { label: 'Guía para validadores', href: '/validadores', variant: 'outline' as const }
];

export const valuePillars = [
  {
    title: 'Autonomía',
    description:
      'El diseño apunta a que quienes operen la infraestructura puedan decidir su rumbo sin depender de custodios externos.'
  },
  {
    title: 'Transparencia',
    description:
      'Cada componente, parámetro y documento se publica para que cualquier persona pueda auditarlo y cuestionarlo.'
  },
  {
    title: 'Sostenibilidad',
    description:
      'El modelo económico se explora con cautela para equilibrar incentivos y costos operativos a largo plazo.'
  }
];
