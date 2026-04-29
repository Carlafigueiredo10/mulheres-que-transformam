import Link from 'next/link';

export default function ManifestoTeaser() {
  return (
    <section
      id="manifesto"
      className="relative px-6 py-32 md:py-40 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(217,70,239,0.05), transparent 55%)'
        }}
      />

      <div className="max-w-4xl mx-auto relative text-center">
        <div
          className="flex items-center justify-center gap-4 mb-10 text-[10px] uppercase font-body font-semibold"
          style={{ color: 'var(--eixo-ouro)', letterSpacing: '0.5em' }}
        >
          <span
            aria-hidden
            className="block w-12 h-px"
            style={{ background: 'var(--eixo-ouro)' }}
          />
          Manifesto
          <span
            aria-hidden
            className="block w-12 h-px"
            style={{ background: 'var(--eixo-ouro)' }}
          />
        </div>

        <h2
          className="font-display font-medium mb-12"
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            color: 'var(--eixo-off-white)',
            lineHeight: 1.0,
            letterSpacing: '-0.02em'
          }}
        >
          Por uma{' '}
          <span style={{ color: 'var(--eixo-ouro)' }}>engenharia</span> da
          paridade.
        </h2>

        <Link href="/manifesto" className="btn-secondary">
          Ler o manifesto na íntegra
        </Link>
      </div>
    </section>
  );
}
