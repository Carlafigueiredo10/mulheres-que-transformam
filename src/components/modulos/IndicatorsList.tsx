import BlockHeader from './BlockHeader';

interface IndicatorsListProps {
  items: string[];
  variant?: 'main' | 'submodule';
}

function splitFirstWord(raw: string): { head: string; tail: string } {
  const trimmed = raw.trimStart();
  const match = trimmed.match(/^(\S+)(\s.*)?$/);
  if (!match) return { head: trimmed, tail: '' };
  return { head: match[1], tail: match[2] ?? '' };
}

export default function IndicatorsList({ items, variant = 'main' }: IndicatorsListProps) {
  const isMain = variant === 'main';

  return (
    <section className={isMain ? 'py-16 px-6' : ''}>
      <div className={isMain ? 'max-w-3xl mx-auto' : ''}>
        {isMain && <BlockHeader label="Indicadores Mensuráveis" />}

        <div
          className={
            isMain
              ? 'rounded-2xl p-7 md:p-9 border-l-2'
              : 'mt-2'
          }
          style={
            isMain
              ? {
                  background: 'rgba(30, 32, 42, 0.65)',
                  borderColor: 'var(--eixo-ouro)'
                }
              : undefined
          }
        >
          <ul className="space-y-5">
            {items.map((item, i) => {
              const { head, tail } = splitFirstWord(item);
              return (
                <li
                  key={i}
                  className="font-body flex gap-3 text-[var(--eixo-off-white-soft)] text-base leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="flex-shrink-0 mt-1.5 inline-block w-2 h-2"
                    style={{ background: 'var(--eixo-ouro)' }}
                  />
                  <span>
                    <span
                      className="font-semibold"
                      style={{ color: 'var(--eixo-off-white)' }}
                    >
                      {head}
                    </span>
                    <span>{tail}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
