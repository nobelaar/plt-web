'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';

const container = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0a1b2e] to-[#102b45]">
      <motion.div
        className="section-container flex flex-col gap-8 py-24 text-left"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.h1 className="text-4xl font-spaceGrotesk leading-tight md:text-6xl" variants={item}>
          Infraestructura soberana para la nueva economía.
        </motion.h1>
        <motion.p className="max-w-3xl text-lg leading-relaxed text-[#d0d2d8]" variants={item}>
          PLT es una blockchain construida desde cero con Cosmos SDK, pensada para ofrecer una base
          digital abierta, transparente y eficiente. Una red donde empresas y comunidades pueden
          validar, construir y operar sin intermediarios.
        </motion.p>
        <motion.div className="flex flex-col gap-4 sm:flex-row" variants={item}>
          <Button href="#" variant="primary">
            Documentación
          </Button>
          <Button href="#" variant="outline">
            Repositorio
          </Button>
          <Button href="#participar" variant="outline">
            Participar como validador
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
