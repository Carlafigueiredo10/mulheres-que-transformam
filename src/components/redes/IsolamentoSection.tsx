'use client';

export default function IsolamentoSection() {
  return (
    <section
      className="relative py-28 md:py-40 px-6 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, var(--rede-roxo) 0%, var(--rede-roxo-deep) 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-7 text-[10px] uppercase tracking-[0.32em] font-body font-semibold" style={{ color: 'var(--rede-cobre-soft)' }}>
          <span aria-hidden className="inline-block w-12 h-px" style={{ background: 'var(--rede-cobre-soft)' }} />
          Consequência
        </div>

        <h2
          className="font-display text-[clamp(2.4rem,5.6vw,4.6rem)] font-medium mb-10 max-w-3xl"
          style={{ color: 'var(--rede-cream)', lineHeight: 1.0, letterSpacing: '-0.02em' }}
        >
          A Síndrome do Isolamento
        </h2>

        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6 font-body text-base md:text-lg leading-relaxed" style={{ color: 'var(--rede-cream-soft)' }}>
            <p>
              A consequência direta do teto de vidro é a solidão institucional. Ser a única
              mulher na sala de decisão significa não ter pares para validar ideias, compartilhar
              estratégias ou dividir o peso da liderança.
            </p>
            <p>
              A sub-representação reforça a falsa percepção de que espaços de poder
              &ldquo;não são destinados&rdquo; a mulheres, gerando a exclusão das dinâmicas
              informais de poder e minando a segurança psicológica.
            </p>
          </div>

          <div className="md:col-span-5">
            <CadeiraSolitaria />
          </div>
        </div>

        <div
          className="mt-24 md:mt-32 pt-16 md:pt-20 border-t"
          style={{ borderColor: 'var(--rede-line)' }}
        >
          <blockquote
            className="max-w-5xl mx-auto text-center font-display font-medium"
            style={{ color: 'var(--rede-cream)', lineHeight: 1.18, letterSpacing: '-0.015em' }}
          >
            <p className="text-[clamp(1.5rem,3.2vw,2.5rem)] italic">
              &ldquo;se a estrutura da nossa sociedade é pensada para desconexão, isolamento,
              dominação, apropriação e exclusão, quão libertária uma comunidade realmente pode ser?&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function CadeiraSolitaria() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[4/5] border"
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(139,92,246,0.32) 0%, rgba(15,6,35,0.95) 65%)',
        borderColor: 'var(--rede-line)'
      }}
    >
      <svg viewBox="0 0 320 400" className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="spot" cx="50%" cy="48%" r="40%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="320" height="400" fill="url(#spot)" />

        {/* mesa lateral esquerda */}
        <rect x="0" y="240" width="120" height="14" fill="#1E0F3A" opacity="0.9" />
        <rect x="0" y="254" width="120" height="38" fill="#0F0623" opacity="0.85" />
        {/* mesa lateral direita */}
        <rect x="200" y="240" width="120" height="14" fill="#1E0F3A" opacity="0.9" />
        <rect x="200" y="254" width="120" height="38" fill="#0F0623" opacity="0.85" />

        {/* cadeira central iluminada */}
        <g transform="translate(130 180)">
          <rect x="0" y="0" width="60" height="58" rx="6" fill="#2A1454" stroke="#8B5CF6" strokeWidth="1" />
          <rect x="6" y="58" width="48" height="14" fill="#1E0F3A" />
          <rect x="28" y="72" width="4" height="60" fill="#1E0F3A" />
          <ellipse cx="30" cy="138" rx="22" ry="4" fill="#1E0F3A" opacity="0.6" />
        </g>

        {/* cadeiras laterais escuras (silhuetas vazias) */}
        {[20, 70, 235, 280].map((x, i) => (
          <g key={i} transform={`translate(${x} 200)`} opacity="0.55">
            <rect x="0" y="0" width="42" height="40" rx="5" fill="#0F0623" stroke="#3D1F73" strokeWidth="0.6" />
            <rect x="4" y="40" width="34" height="10" fill="#0F0623" />
            <rect x="20" y="50" width="2" height="42" fill="#0F0623" />
          </g>
        ))}
      </svg>
    </div>
  );
}
