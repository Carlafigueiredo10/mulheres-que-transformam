'use client';

import { ReactNode, useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

interface DepthScrollerProps {
  slides: ReactNode[];
}

export default function DepthScroller({ slides }: DepthScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  const total = slides.length;

  return (
    <section
      ref={ref}
      className="relative"
      style={{ height: `${(total + 0.6) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 35%, rgba(201,168,106,0.05), transparent 60%)'
          }}
        />
        {slides.map((slide, i) => (
          <SlideLayer
            key={i}
            index={i}
            total={total}
            progress={scrollYProgress}
          >
            {slide}
          </SlideLayer>
        ))}
      </div>
    </section>
  );
}

interface SlideLayerProps {
  index: number;
  total: number;
  progress: MotionValue<number>;
  children: ReactNode;
}

function SlideLayer({ index, total, progress, children }: SlideLayerProps) {
  const segment = useTransform(progress, (p) => p * (total + 0.6) - index);

  const opacity = useTransform(
    segment,
    [-0.5, 0, 0.5, 1.2, 3],
    [0, 1, 1, 0.12, 0.04]
  );
  const scale = useTransform(
    segment,
    [-0.5, 0, 0.5, 1.2, 3],
    [0.94, 1, 1, 0.88, 0.78]
  );
  const y = useTransform(
    segment,
    [-0.5, 0, 0.5, 1.2, 3],
    [42, 0, -12, -38, -64]
  );

  const filter = useTransform(segment, (s) => {
    if (s <= 0.5) return 'blur(0px) saturate(1) contrast(1)';
    const recess = Math.min(Math.max(s - 0.5, 0), 3);
    const blur = Math.min(recess * 9, 22);
    const sat = Math.max(1 - recess * 0.55, 0.15);
    const contrast = Math.max(1 - recess * 0.32, 0.4);
    return `blur(${blur.toFixed(2)}px) saturate(${sat.toFixed(2)}) contrast(${contrast.toFixed(2)})`;
  });

  return (
    <motion.div
      className="absolute inset-0 will-change-transform"
      style={{
        opacity,
        scale,
        y,
        filter,
        zIndex: index + 1,
        transformOrigin: '50% 50%',
        pointerEvents: 'none'
      }}
    >
      <div className="w-full h-full pointer-events-auto">{children}</div>
    </motion.div>
  );
}
