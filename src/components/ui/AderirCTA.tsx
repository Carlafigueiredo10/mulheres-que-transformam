import Link from 'next/link';

export default function AderirCTA() {
  return (
    <section id="aderir" className="py-32 md:py-40 px-6 relative">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(201,168,106,0.08), transparent 60%)'
        }}
      />

      <div className="max-w-4xl mx-auto relative text-center">
        <div className="inline-flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]">
          <span aria-hidden className="inline-block w-10 h-px" style={{ background: 'var(--eixo-ouro)' }} />
          Adesão Institucional
          <span aria-hidden className="inline-block w-10 h-px" style={{ background: 'var(--eixo-ouro)' }} />
        </div>

        <h2
          className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] font-medium text-[var(--eixo-off-white)] mb-6"
          style={{ letterSpacing: '-0.015em' }}
        >
          Seu órgão pode fazer parte da{' '}
          <span style={{ color: 'var(--eixo-ouro)' }}>transformação</span>
        </h2>

        <p className="font-body text-base md:text-[1.05rem] leading-relaxed text-[var(--eixo-off-white-soft)] max-w-2xl mx-auto mb-10">
          Cada instituição desenha seu próprio plano de adesão — escolhe por onde começar,
          em que ritmo seguir e quais módulos priorizar. A única exigência é o compromisso público.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/como-aderir" className="btn-primary">
            Como aderir
          </Link>
          <Link href="/observatorio" className="btn-secondary">
            Ver dados públicos
          </Link>
        </div>
      </div>
    </section>
  );
}
