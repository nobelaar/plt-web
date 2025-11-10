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

const floatingNodes = [
  { id: 'alpha', className: 'left-6 top-10', delay: 0.2 },
  { id: 'beta', className: 'right-10 top-16', delay: 0.6 },
  { id: 'gamma', className: 'left-16 bottom-10', delay: 0.4 },
  { id: 'delta', className: 'right-8 bottom-12', delay: 0.8 }
] as const;

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#0a1b2e] to-[#102b45]">
      <motion.div
        className="section-container grid gap-12 py-24 text-left lg:grid-cols-[minmax(0,1fr)_420px]"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="flex flex-col gap-8">
          <motion.h1 className="text-4xl font-spaceGrotesk leading-tight md:text-6xl" variants={item}>
            Infraestructura digital en construcción.
          </motion.h1>
          <motion.p className="max-w-3xl text-lg leading-relaxed text-[#d0d2d8]" variants={item}>
            PLT es un proyecto que investiga cómo una cadena basada en estándares abiertos puede servir
            a organizaciones y comunidades que valoran transparencia y control técnico. La red todavía
            no existe; estamos documentando el diseño base y buscando quienes quieran revisar, cuestionar
            y aportar desde las primeras etapas.
          </motion.p>
          <motion.div className="flex flex-col gap-4 sm:flex-row" variants={item}>
            <Button href="#" variant="primary">
              Documentación base
            </Button>
            <Button href="#" variant="outline">
              Repositorio
            </Button>
            <Button href="#participar" variant="outline">
              Participar en etapa temprana
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="relative flex h-[360px] items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#041125] via-[#0a2540] to-[#12375c] shadow-[0_20px_80px_rgba(7,20,45,0.6)]"
          variants={item}
        >
          <motion.div
            className="absolute inset-8 rounded-[32px] border border-white/5"
            animate={{ rotate: 360 }}
            transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-16 rounded-[24px] border border-[#00d4ff]/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute h-48 w-48 rounded-full bg-[#00d4ff]/20 blur-3xl"
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: 1.2, opacity: 0.9 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <div className="absolute inset-0">
            <svg width="100%" height="100%" viewBox="0 0 400 360" className="opacity-30">
              <defs>
                <linearGradient id="grid" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#7de6ff" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <g stroke="url(#grid)" strokeWidth="0.6">
                <path d="M20 60C140 20 220 20 360 60" />
                <path d="M20 140C140 100 220 100 360 140" />
                <path d="M20 220C140 180 220 180 360 220" />
                <path d="M20 300C140 260 220 260 360 300" />
                <path d="M40 40V320" />
                <path d="M120 32V328" />
                <path d="M200 28V332" />
                <path d="M280 32V328" />
                <path d="M360 40V320" />
              </g>
            </svg>
          </div>
          <div className="relative h-40 w-40 rounded-full border border-[#00d4ff]/30 bg-[#02142a] shadow-inner shadow-[#00d4ff]/20">
            <motion.span
              className="absolute inset-3 rounded-full border border-[#00d4ff]/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            />
            <motion.span
              className="absolute inset-8 rounded-full border border-[#7de6ff]/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />
            <motion.span
              className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full bg-[#00d4ff]"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.span
              className="absolute bottom-4 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#7de6ff]"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          {floatingNodes.map((node) => (
            <motion.span
              key={node.id}
              className={`absolute h-12 w-12 rounded-2xl border border-white/10 bg-[#031327]/80 shadow-lg shadow-[#00d4ff]/20 ${node.className}`}
              initial={{ opacity: 0.3, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1.05, y: ['0%', '-6%', '0%'] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'mirror',
                delay: node.delay,
                ease: 'easeInOut'
              }}
            >
              <span className="absolute inset-[10px] rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#7de6ff] opacity-20" />
              <span className="absolute inset-0.5 rounded-[18px] border border-[#00d4ff]/30" />
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
