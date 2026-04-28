import Link from 'next/link';

export default function ModuleFooter() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-display text-base md:text-lg text-[var(--eixo-off-white-dim)] mb-5 italic">
          Este é um dos 6 caminhos possíveis.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-body text-sm text-[var(--eixo-off-white-soft)] hover:text-[var(--eixo-ouro)] transition-colors"
        >
          <span aria-hidden>←</span>
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
