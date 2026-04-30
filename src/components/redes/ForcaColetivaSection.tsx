'use client';

const acoes = [
  'Criação de espaços seguros de acolhimento emocional.',
  'Troca de estratégias de sobrevivência e progressão no setor público.',
  'Reconhecimento coletivo de que as barreiras são sistêmicas, não falhas individuais.'
];

const funcoes = [
  {
    titulo: 'Acesso à Informação',
    texto: 'Circulação de oportunidades e vagas não publicadas oficialmente.'
  },
  {
    titulo: 'Segurança Psicológica',
    texto: 'Blindagem contra assédio e hostilidade através do apoio mútuo.'
  },
  {
    titulo: 'Alianças Estratégicas',
    texto:
      'Criação de propostas transversais e influência em mudanças institucionais a partir de uma base coletiva.'
  }
];

export default function ForcaColetivaSection() {
  return (
    <section className="relative py-24 md:py-32 px-6" style={{ background: 'var(--rede-roxo-deep)' }}>
      <div className="max-w-6xl mx-auto space-y-32">

        {/* Networking vs Netweaving — modelo da rede */}
        <div>
          <div className="flex items-center gap-3 mb-7 text-[10px] uppercase tracking-[0.32em] font-body font-semibold" style={{ color: 'var(--rede-cobre-soft)' }}>
            <span aria-hidden className="inline-block w-12 h-px" style={{ background: 'var(--rede-cobre-soft)' }} />
            O modelo da rede
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-10">
            <div
              className="rounded-2xl p-8 md:p-10 border"
              style={{ background: 'rgba(15, 6, 35, 0.55)', borderColor: 'var(--rede-line)' }}
            >
              <h3
                className="font-display text-2xl md:text-3xl font-medium mb-6"
                style={{ color: 'var(--rede-cream)', opacity: 0.65 }}
              >
                Networking
              </h3>
              <NetworkingSvg />
              <p
                className="font-display text-lg md:text-xl mt-6 italic"
                style={{ color: 'var(--rede-cream-soft)', opacity: 0.7 }}
              >
                &ldquo;O que eu posso ganhar?&rdquo;
              </p>
            </div>

            <div
              className="rounded-2xl p-8 md:p-10 border"
              style={{ background: 'rgba(201, 123, 90, 0.08)', borderColor: 'rgba(201, 123, 90, 0.4)' }}
            >
              <h3
                className="font-display text-2xl md:text-3xl font-medium mb-6"
                style={{ color: 'var(--rede-cream)' }}
              >
                Netweaving
              </h3>
              <NetweavingSvg />
              <p
                className="font-display text-lg md:text-xl mt-6 italic"
                style={{ color: 'var(--rede-cream)' }}
              >
                &ldquo;Quem eu posso ajudar a conectar?&rdquo;
              </p>
            </div>
          </div>

          <p
            className="font-body text-base md:text-lg leading-relaxed max-w-3xl"
            style={{ color: 'var(--rede-cream-soft)' }}
          >
            Abordagem colaborativa baseada em reciprocidade, ajuda mútua e generosidade.
            Construir relacionamentos genuínos, conectar pessoas com propósitos comuns —
            servir antes de ser servido.
          </p>
        </div>

        {/* A Força da Conexão Coletiva */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-7 text-[10px] uppercase tracking-[0.32em] font-body font-semibold" style={{ color: 'var(--rede-cobre-soft)' }}>
              <span aria-hidden className="inline-block w-12 h-px" style={{ background: 'var(--rede-cobre-soft)' }} />
              A virada
            </div>

            <h2
              className="font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium mb-6"
              style={{ color: 'var(--rede-cream)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
            >
              A Força da Conexão Coletiva
            </h2>
            <p
              className="font-body text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
              style={{ color: 'var(--rede-cream-soft)' }}
            >
              A quebra do isolamento acontece através da sociabilidade intencional. Redes de apoio
              transformam a exaustão individual em poder coletivo, resiliência e visibilidade.
            </p>

            <ul className="space-y-4">
              {acoes.map((acao, i) => (
                <li key={i} className="flex gap-4 items-start font-body text-base md:text-lg leading-relaxed" style={{ color: 'var(--rede-cream)' }}>
                  <span
                    aria-hidden
                    className="mt-2 inline-block w-8 h-px shrink-0"
                    style={{ background: 'var(--rede-cobre-soft)' }}
                  />
                  <span>{acao}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <CirculosConexao />
          </div>
        </div>

        {/* Capital Social e Proteção Institucional */}
        <div>
          <h2
            className="font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium mb-6 max-w-3xl"
            style={{ color: 'var(--rede-cream)', lineHeight: 1.05, letterSpacing: '-0.015em' }}
          >
            Gerando Capital Social e Proteção Institucional
          </h2>
          <p
            className="font-body text-base md:text-lg leading-relaxed max-w-3xl mb-12"
            style={{ color: 'var(--rede-cream-soft)' }}
          >
            Redes femininas funcionam como infraestruturas ocultas de avanço profissional,
            compensando a exclusão histórica das redes de influência tradicionais.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {funcoes.map((f, i) => (
              <div
                key={f.titulo}
                className="relative rounded-2xl p-8 border"
                style={{
                  background: 'rgba(245, 239, 230, 0.03)',
                  borderColor: 'var(--rede-line)'
                }}
              >
                <div
                  className="font-display text-sm mb-3"
                  style={{ color: 'var(--rede-cobre-soft)' }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="font-display text-xl md:text-2xl font-medium mb-3"
                  style={{ color: 'var(--rede-cream)' }}
                >
                  {f.titulo}
                </h3>
                <p
                  className="font-body text-sm md:text-base leading-relaxed"
                  style={{ color: 'var(--rede-cream-soft)' }}
                >
                  {f.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkingSvg() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-auto" aria-hidden>
      <defs>
        <marker id="arrowMutedNW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#5C4878" />
        </marker>
      </defs>
      <circle cx="40" cy="40" r="13" fill="#3D1F73" opacity="0.55" />
      <circle cx="280" cy="40" r="13" fill="#3D1F73" opacity="0.55" />
      <circle cx="40" cy="160" r="13" fill="#3D1F73" opacity="0.55" />
      <circle cx="280" cy="160" r="13" fill="#3D1F73" opacity="0.55" />
      <circle cx="160" cy="100" r="20" fill="#5C4878" />
      <line x1="54" y1="52" x2="142" y2="92" stroke="#5C4878" strokeWidth="1.5" markerEnd="url(#arrowMutedNW)" opacity="0.75" />
      <line x1="266" y1="52" x2="178" y2="92" stroke="#5C4878" strokeWidth="1.5" markerEnd="url(#arrowMutedNW)" opacity="0.75" />
      <line x1="54" y1="148" x2="142" y2="108" stroke="#5C4878" strokeWidth="1.5" markerEnd="url(#arrowMutedNW)" opacity="0.75" />
      <line x1="266" y1="148" x2="178" y2="108" stroke="#5C4878" strokeWidth="1.5" markerEnd="url(#arrowMutedNW)" opacity="0.75" />
    </svg>
  );
}

function NetweavingSvg() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-auto" aria-hidden>
      <defs>
        <marker id="arrowCobreNW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#C97B5A" />
        </marker>
      </defs>
      <line x1="52" y1="40" x2="268" y2="40" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="268" y1="40" x2="52" y2="40" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="52" y1="160" x2="268" y2="160" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="268" y1="160" x2="52" y2="160" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="40" y1="52" x2="40" y2="148" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="40" y1="148" x2="40" y2="52" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="280" y1="52" x2="280" y2="148" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="280" y1="148" x2="280" y2="52" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="54" y1="50" x2="146" y2="92" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="146" y1="92" x2="54" y2="50" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="266" y1="50" x2="174" y2="92" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="174" y1="92" x2="266" y2="50" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="54" y1="150" x2="146" y2="108" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="146" y1="108" x2="54" y2="150" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="266" y1="150" x2="174" y2="108" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <line x1="174" y1="108" x2="266" y2="150" stroke="#C97B5A" strokeWidth="1.4" markerEnd="url(#arrowCobreNW)" opacity="0.85" />
      <circle cx="40" cy="40" r="13" fill="#C97B5A" />
      <circle cx="280" cy="40" r="13" fill="#C97B5A" />
      <circle cx="40" cy="160" r="13" fill="#C97B5A" />
      <circle cx="280" cy="160" r="13" fill="#C97B5A" />
      <circle cx="160" cy="100" r="18" fill="#F4EFE6" />
    </svg>
  );
}

function CirculosConexao() {
  return (
    <div className="relative aspect-square max-w-md mx-auto rede-ring-float">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="ringA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3D1F73" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="ringB" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#C97B5A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#D9926E" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* 4 anéis sobrepostos formando uma "flor" */}
        <circle cx="200" cy="140" r="92" fill="none" stroke="url(#ringA)" strokeWidth="22" />
        <circle cx="140" cy="220" r="92" fill="none" stroke="url(#ringB)" strokeWidth="22" />
        <circle cx="260" cy="220" r="92" fill="none" stroke="url(#ringB)" strokeWidth="22" />
        <circle cx="200" cy="280" r="92" fill="none" stroke="url(#ringA)" strokeWidth="22" />

        {/* nó central */}
        <line x1="200" y1="140" x2="200" y2="280" stroke="#C97B5A" strokeWidth="3" opacity="0.65" />
        <line x1="140" y1="220" x2="260" y2="220" stroke="#8B5CF6" strokeWidth="3" opacity="0.65" />

        <circle cx="200" cy="140" r="9" fill="#F4EFE6" />
        <circle cx="140" cy="220" r="9" fill="#F4EFE6" />
        <circle cx="260" cy="220" r="9" fill="#F4EFE6" />
        <circle cx="200" cy="280" r="9" fill="#F4EFE6" />
        <circle cx="200" cy="220" r="12" fill="#C97B5A" />
      </svg>
    </div>
  );
}
