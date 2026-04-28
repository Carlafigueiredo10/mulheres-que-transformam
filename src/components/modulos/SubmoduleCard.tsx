import { Submodule } from '@/types';
import IndicatorsList from './IndicatorsList';

interface SubmoduleCardProps {
  submodule: Submodule;
}

export default function SubmoduleCard({ submodule }: SubmoduleCardProps) {
  return (
    <article
      className="relative rounded-2xl p-7 md:p-8 border"
      style={{
        background: 'rgba(21, 22, 29, 0.7)',
        borderColor: 'rgba(201, 168, 106, 0.18)'
      }}
    >
      <div
        aria-hidden
        className="absolute left-0 top-6 bottom-6 w-px"
        style={{ background: 'var(--eixo-ouro)' }}
      />
      <div className="pl-4">
        <h3 className="font-display text-xl md:text-[1.35rem] font-medium text-[var(--eixo-off-white)] mb-3 leading-tight">
          {submodule.title}
        </h3>
        {submodule.description && (
          <p className="font-body text-[0.95rem] text-[var(--eixo-off-white-soft)] leading-relaxed mb-6">
            {submodule.description}
          </p>
        )}
        <div className="text-[10px] uppercase tracking-[0.28em] font-body font-semibold text-[var(--eixo-ouro)] mb-3">
          Indicadores
        </div>
        <IndicatorsList items={submodule.indicators} variant="submodule" />
      </div>
    </article>
  );
}
