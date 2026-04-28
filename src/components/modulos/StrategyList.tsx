import BlockHeader from './BlockHeader';

interface StrategyListProps {
  items: string[];
}

function splitStrategy(raw: string): { title: string; description: string } {
  const idx = raw.indexOf(':');
  if (idx === -1) return { title: raw.trim(), description: '' };
  return {
    title: raw.slice(0, idx).trim(),
    description: raw.slice(idx + 1).trim()
  };
}

export default function StrategyList({ items }: StrategyListProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <BlockHeader label="Estratégias de Implementação" />
        <ul className="divide-y" style={{ borderColor: 'rgba(242,234,217,0.10)' }}>
          {items.map((raw, i) => {
            const { title, description } = splitStrategy(raw);
            const number = String(i + 1).padStart(2, '0');
            return (
              <li
                key={i}
                className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-5 py-6 first:pt-0"
                style={{ borderColor: 'rgba(242,234,217,0.10)' }}
              >
                <div
                  className="font-display text-[1.6rem] md:text-[1.85rem] leading-none font-medium"
                  style={{ color: 'var(--eixo-ouro)' }}
                  aria-hidden
                >
                  {number}
                </div>
                <div>
                  <div className="font-display text-lg md:text-[1.2rem] font-medium text-[var(--eixo-off-white)] mb-2 leading-tight">
                    {title}
                  </div>
                  {description && (
                    <p className="font-body text-[0.95rem] text-[var(--eixo-off-white-soft)] leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
