import Link from 'next/link';

const acoes = [
  {
    titulo: 'Catálogo de redes',
    descricao: 'Redes, coletivos e iniciativas de mulheres no serviço público brasileiro.',
    icone: '📚',
    href: '/catalogo-redes'
  },
  {
    titulo: 'Mapa interativo',
    descricao: 'Visualize geograficamente e conecte-se com iniciativas próximas.',
    icone: '🗺️',
    href: '/mapa-redes'
  },
  {
    titulo: 'Cadastrar minha rede',
    descricao: 'Registre sua iniciativa e amplie o alcance no ecossistema nacional.',
    icone: '➕',
    href: '/cadastrar-rede'
  },
  {
    titulo: 'Boas práticas',
    descricao: 'Casos de sucesso, metodologias e recursos compartilhados pelas redes.',
    icone: '⭐',
    href: '/boas-praticas'
  }
];

export default function AcessoSection() {
  return (
    <section
      className="relative py-24 md:py-32 px-6"
      style={{ background: 'var(--rede-roxo)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="flex items-center gap-3 mb-7 text-[10px] uppercase tracking-[0.32em] font-body font-semibold"
          style={{ color: 'var(--rede-cobre-soft)' }}
        >
          <span
            aria-hidden
            className="inline-block w-12 h-px"
            style={{ background: 'var(--rede-cobre-soft)' }}
          />
          Ferramentas da rede
        </div>

        <h2
          className="font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium mb-6 max-w-3xl"
          style={{
            color: 'var(--rede-cream)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em'
          }}
        >
          O que você pode acessar agora.
        </h2>
        <p
          className="font-body text-base md:text-lg leading-relaxed max-w-3xl mb-14"
          style={{ color: 'var(--rede-cream-soft)' }}
        >
          A Rede Conecta reúne quem já está em movimento — para você encontrar pares,
          inspirar-se em práticas que funcionaram e cadastrar a sua iniciativa no mapa nacional.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {acoes.map((a) => (
            <li key={a.href}>
              <Link
                href={a.href}
                className="group block h-full rounded-2xl p-6 md:p-7 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(15, 6, 35, 0.45)',
                  borderColor: 'var(--rede-line)'
                }}
              >
                <div className="text-2xl mb-4" aria-hidden>
                  {a.icone}
                </div>
                <h3
                  className="font-display text-lg md:text-xl font-medium mb-2 leading-tight"
                  style={{ color: 'var(--rede-cream)' }}
                >
                  {a.titulo}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed mb-5"
                  style={{ color: 'var(--rede-cream-soft)' }}
                >
                  {a.descricao}
                </p>
                <div
                  className="inline-flex items-center gap-2 text-xs font-body font-semibold uppercase tracking-[0.18em]"
                  style={{ color: 'var(--rede-cobre-soft)' }}
                >
                  <span>Acessar</span>
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
