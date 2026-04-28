import BlockHeader from './BlockHeader';

interface BarriersListProps {
  items: string[];
}

export default function BarriersList({ items }: BarriersListProps) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <BlockHeader label="O que impede isso de acontecer" />
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="font-body flex gap-3 text-[var(--eixo-off-white-soft)] text-base leading-relaxed"
            >
              <span
                aria-hidden
                className="flex-shrink-0 mt-1 text-sm font-display"
                style={{ color: 'var(--eixo-ouro-deep)' }}
              >
                ✕
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
