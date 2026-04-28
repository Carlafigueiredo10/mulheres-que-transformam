import BlockHeader from './BlockHeader';

interface ObjectivesListProps {
  items: string[];
}

export default function ObjectivesList({ items }: ObjectivesListProps) {
  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <BlockHeader label="Objetivos" />
        <ul className="space-y-2.5">
          {items.map((item, i) => (
            <li
              key={i}
              className="font-body flex gap-3 text-[var(--eixo-off-white-soft)] text-base leading-relaxed"
            >
              <span
                aria-hidden
                className="font-display flex-shrink-0 mt-0.5"
                style={{ color: 'var(--eixo-ouro)' }}
              >
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
