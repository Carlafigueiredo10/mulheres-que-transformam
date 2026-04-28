'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
};

export default function MagneticButton({ strength = 18, className = '', children, onClick }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });

  const rX = useTransform(sy, [-strength, strength], [6, -6]);
  const rY = useTransform(sx, [-strength, strength], [-6, 6]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set((dx / rect.width) * strength);
    y.set((dy / rect.height) * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{ x: sx, y: sy, rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d' }}
      className={`will-change-transform inline-block ${className}`}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
