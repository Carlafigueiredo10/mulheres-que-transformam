'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { mainNavigation } from '@/data/navigation';

export default function Header() {
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const detectMobile = () => setIsMobile(window.innerWidth < 768);
    detectMobile();
    window.addEventListener('resize', detectMobile);
    return () => window.removeEventListener('resize', detectMobile);
  }, []);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const p = Math.min(window.scrollY / 80, 1);
      setProgress(p);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const minBgOpacity = isMobile ? 0.55 : 0;
  const minBlur = isMobile ? 8 : 0;
  const bgOpacity = minBgOpacity + (0.92 - minBgOpacity) * progress;
  const blur = minBlur + (16 - minBlur) * progress;
  const borderOpacity = progress * 0.14;
  const padY = 24 - progress * 8;

  const featured = mainNavigation.find((i) => i.featured);
  const regular = mainNavigation.filter((i) => !i.featured);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 eixos-theme"
      style={{
        background: `rgba(15, 16, 20, ${bgOpacity})`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        borderBottom: `1px solid rgba(201, 168, 106, ${borderOpacity})`,
        transition: 'border-color 200ms ease-out'
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6"
        style={{
          paddingTop: `${padY}px`,
          paddingBottom: `${padY}px`,
          transition: 'padding 200ms ease-out'
        }}
      >
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-display text-base md:text-[1.05rem] font-medium text-[var(--eixo-off-white)] hover:text-[var(--eixo-ouro)] transition-colors duration-300"
            style={{ letterSpacing: '-0.01em', opacity: 0.92 }}
          >
            Mulheres que Transformam
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {regular.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-scanline font-body text-sm text-[var(--eixo-off-white)]/65 hover:text-[var(--eixo-off-white)] transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            {featured && (
              <Link
                href={featured.href}
                className="font-body text-sm font-medium px-5 py-2 rounded-full border border-[var(--eixo-ouro)]/45 text-[var(--eixo-off-white)] hover:bg-[var(--eixo-ouro)] hover:text-[var(--eixo-grafite)] hover:border-[var(--eixo-ouro)] transition-all duration-300"
              >
                {featured.name}
              </Link>
            )}
          </nav>

          <button
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
          >
            <span
              className="block w-6 h-px bg-[var(--eixo-off-white)] transition-transform duration-300"
              style={{ transform: isMobileMenuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-6 h-px bg-[var(--eixo-off-white)] transition-opacity duration-200"
              style={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px bg-[var(--eixo-off-white)] transition-transform duration-300"
              style={{ transform: isMobileMenuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: 'rgba(15, 16, 20, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderColor: 'rgba(201, 168, 106, 0.12)'
          }}
        >
          <nav className="flex flex-col px-6 py-6 gap-1">
            {regular.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-lg py-3 text-[var(--eixo-off-white)] hover:text-[var(--eixo-ouro)] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {featured && (
              <Link
                href={featured.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body text-sm font-medium mt-4 inline-flex items-center justify-center px-5 py-3 rounded-full border border-[var(--eixo-ouro)]/45 text-[var(--eixo-off-white)] hover:bg-[var(--eixo-ouro)] hover:text-[var(--eixo-grafite)] transition-all duration-300"
              >
                {featured.name}
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
