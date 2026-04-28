'use client';

import { useEffect, useRef, useState } from 'react';

interface ManifestoBlockProps {
  lines: string[];
  lineDelay?: number;
}

export default function ManifestoBlock({ lines, lineDelay = 550 }: ManifestoBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-40 md:py-56 px-6 flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center font-display text-[clamp(1.8rem,4.2vw,3.4rem)] leading-[1.2] font-medium">
        {lines.map((line, i) => (
          <span
            key={i}
            className="block"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? 'translateY(0)' : 'translateY(14px)',
              transition: `opacity 700ms cubic-bezier(0.2,0.7,0.1,1) ${i * lineDelay}ms, transform 700ms cubic-bezier(0.2,0.7,0.1,1) ${i * lineDelay}ms`,
              color: i === lines.length - 1 ? 'var(--eixo-ouro)' : 'var(--eixo-off-white)',
              marginTop: i === 0 ? 0 : '0.65em'
            }}
          >
            {line}
          </span>
        ))}
      </div>
    </section>
  );
}
