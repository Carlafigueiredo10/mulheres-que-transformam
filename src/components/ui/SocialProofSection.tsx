import Link from 'next/link';
import { orgaosAderentes, type SeloNivel, type TipoOrgao } from '@/data/orgaos-aderentes';

const tipoLabel: Record<TipoOrgao, string> = {
  federal: 'Federal',
  estadual: 'Estadual',
  municipal: 'Municipal',
  controle: 'Controle',
  'escola-governo': 'Escola de Governo'
};

const seloStyle: Record<
  SeloNivel,
  { bg: string; color: string; border: string; label: string }
> = {
  participante: {
    bg: 'transparent',
    color: 'rgba(242, 234, 217, 0.6)',
    border: 'rgba(242, 234, 217, 0.18)',
    label: 'Participante'
  },
  ativa: {
    bg: 'rgba(201, 168, 106, 0.12)',
    color: 'var(--eixo-ouro)',
    border: 'rgba(201, 168, 106, 0.4)',
    label: 'Ativa'
  },
  inspiradora: {
    bg: 'var(--eixo-ouro)',
    color: 'var(--eixo-grafite)',
    border: 'var(--eixo-ouro)',
    label: 'Inspiradora'
  }
};

export default function SocialProofSection() {
  const total = orgaosAderentes.length;

  return (
    <section className="py-32 md:py-40 px-6 relative">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(201,168,106,0.04), transparent 60%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]">
            <span
              aria-hidden
              className="inline-block w-10 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
            Quem já está no programa
            <span
              aria-hidden
              className="inline-block w-10 h-px"
              style={{ background: 'var(--eixo-ouro)' }}
            />
          </div>
          <h2
            className="font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] font-medium text-[var(--eixo-off-white)] mb-6"
            style={{ letterSpacing: '-0.015em' }}
          >
            <span style={{ color: 'var(--eixo-ouro)' }}>{total}</span>{' '}
            órgãos já firmaram compromisso
          </h2>
          <p className="font-body text-base md:text-[1.05rem] leading-relaxed text-[var(--eixo-off-white-soft)]">
            Instituições federais, estaduais, municipais, de controle e escolas de governo
            que já desenharam seu plano de adesão ao programa.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {orgaosAderentes.map((org) => {
            const selo = seloStyle[org.nivel];
            return (
              <li
                key={org.id}
                className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(21, 22, 29, 0.55)',
                  borderColor: 'rgba(242, 234, 217, 0.08)'
                }}
              >
                <div className="flex flex-col h-full">
                  <div
                    className="font-display text-2xl font-medium mb-2"
                    style={{ color: 'var(--eixo-off-white)' }}
                  >
                    {org.sigla}
                  </div>
                  <div className="font-body text-xs text-[var(--eixo-off-white-soft)] leading-relaxed mb-5 flex-1">
                    {org.nome}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-body font-semibold uppercase tracking-[0.15em]">
                    <span
                      className="px-2.5 py-1 rounded-full border"
                      style={{
                        background: selo.bg,
                        color: selo.color,
                        borderColor: selo.border
                      }}
                    >
                      {selo.label}
                    </span>
                    <span className="text-[var(--eixo-off-white-dim)]">
                      {tipoLabel[org.tipo]}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="text-center">
          <Link href="/orgaos-participantes" className="btn-secondary">
            Ver lista completa
          </Link>
        </div>
      </div>
    </section>
  );
}
