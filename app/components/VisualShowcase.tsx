'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const gallery = [
  {
    label: 'Topología',
    title: 'Constelación de nodos',
    description:
      'Representa cómo las validaciones se distribuyen en anillos concéntricos que privilegian transparencia y auditoría constante.',
    src: '/assets/plt-network.svg'
  },
  {
    label: 'Capas',
    title: 'Arquitectura modular',
    description:
      'Las capas de ejecución, consenso y experiencia de usuario se diferencian para iterar cada parte sin romper el todo.',
    src: '/assets/plt-layers.svg'
  },
  {
    label: 'Dinámica',
    title: 'Flujos energéticos',
    description:
      'Un vistazo al intercambio entre hardware, staking y gobernanza que mantiene vivo al ecosistema cuando esté en marcha.',
    src: '/assets/plt-dynamics.svg'
  }
] as const;

const cardVariants = {
  initial: { opacity: 0, y: 24 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 * index }
  })
};

export function VisualShowcase() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {gallery.map((item, index) => (
        <motion.article
          key={item.title}
          className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.04] text-left shadow-[0_25px_80px_rgba(4,8,24,0.45)]"
          custom={index}
          initial="initial"
          whileHover={{ y: -8 }}
          animate="animate"
          variants={cardVariants}
        >
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority={index === 0}
            />
            <motion.span
              className="absolute inset-0 bg-gradient-to-t from-[#031327] via-transparent to-transparent opacity-80"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.6 }}
            />
          </div>
          <div className="space-y-3 p-6">
            <span className="text-xs uppercase tracking-[0.4em] text-[#7de6ff]/70">{item.label}</span>
            <h3 className="text-2xl font-spaceGrotesk text-white">{item.title}</h3>
            <p className="text-sm leading-relaxed text-[#d0d2d8]">{item.description}</p>
          </div>
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#00d4ff]/20 blur-3xl"
            animate={{ scale: [0.8, 1.1, 0.9] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
          />
        </motion.article>
      ))}
    </div>
  );
}
