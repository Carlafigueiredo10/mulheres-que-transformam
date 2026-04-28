'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Reveal({
  children,
  delay = 0,
  y = 18,
  once = true,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once, margin: '-12% 0px -12% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: 'blur(10px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ delay, duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
