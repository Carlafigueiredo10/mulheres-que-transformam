import { Module } from '@/types';
import ModuleHero from './ModuleHero';
import ObjectivesList from './ObjectivesList';
import StrategyList from './StrategyList';
import BarriersList from './BarriersList';
import IndicatorsList from './IndicatorsList';
import SubmoduleCard from './SubmoduleCard';
import TransversalLink from './TransversalLink';
import SystemGrid from './SystemGrid';
import ModuleFooter from './ModuleFooter';
import BlockHeader from './BlockHeader';

interface NewModuleTemplateProps {
  module: Module;
  index: number;
}

export default function NewModuleTemplate({ module, index }: NewModuleTemplateProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <>
      <ModuleHero
        number={number}
        title={module.title}
        description={module.description}
      />

      <ObjectivesList items={module.objectives} />

      <StrategyList items={module.strategies} />

      {module.barriers && module.barriers.length > 0 && (
        <BarriersList items={module.barriers} />
      )}

      <IndicatorsList items={module.indicators} />

      {module.submodules && module.submodules.length > 0 && (
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <BlockHeader label="Áreas Específicas" />
            <div className="space-y-6">
              {module.submodules.map((sub) => (
                <SubmoduleCard key={sub.id} submodule={sub} />
              ))}
            </div>
          </div>
        </section>
      )}

      <TransversalLink />

      <SystemGrid currentSlug={module.id} />

      <ModuleFooter />
    </>
  );
}
