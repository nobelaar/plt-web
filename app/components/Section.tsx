'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, type ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export function Section({ id, title, description, children }: SectionProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-25% 0px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible').catch(() => {
        // Prevent unhandled rejection if component unmounts before animation completes.
      });
    }
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      className="section-container space-y-6"
      initial="hidden"
      animate={controls}
      ref={ref}
      variants={containerVariants}
    >
      {title && <h2 className="text-3xl font-spaceGrotesk md:text-4xl">{title}</h2>}
      {description && <p className="max-w-3xl text-base leading-relaxed text-[#d0d2d8]">{description}</p>}
      <div className="space-y-6 text-base leading-relaxed text-[#b5b8c0]">{children}</div>
    </motion.section>
  );
}
