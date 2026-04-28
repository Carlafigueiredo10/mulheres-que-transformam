import { eixosTransversais } from '@/data/eixos-transversais';
import ParticleField from '@/components/eixos/ParticleField';
import CinematicTitle from '@/components/eixos/CinematicTitle';
import ManifestoBlock from '@/components/eixos/ManifestoBlock';
import DepthScroller from '@/components/eixos/DepthScroller';
import EixoSlide from '@/components/eixos/EixoSlide';
import TransversalDiagram from '@/components/eixos/TransversalDiagram';
import EixoCTA from '@/components/eixos/EixoCTA';

export const metadata = {
  title: 'Eixos Transversais — Mulheres que Transformam',
  description:
    'As cinco premissas inegociáveis que atravessam todos os módulos do programa. Sem elas, a paridade não sobrevive a uma troca de gestão.'
};

export default function EixosTransversaisPage() {
  return (
    <>
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
        <ParticleField className="absolute inset-0 w-full h-full" />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 45%, rgba(168,139,82,0.10), transparent 55%), linear-gradient(to bottom, transparent 60%, rgba(15,16,20,0.85) 100%)'
          }}
        />
        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <div className="mb-10 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.32em] font-body font-semibold text-[var(--eixo-ouro)]">
            <span aria-hidden className="inline-block w-10 h-px" style={{ background: 'var(--eixo-ouro)' }} />
            Cinco Regras Inegociáveis
            <span aria-hidden className="inline-block w-10 h-px" style={{ background: 'var(--eixo-ouro)' }} />
          </div>
          <CinematicTitle
            primary="As regras que sustentam"
            accent="a transformação."
            subtitle="Cinco premissas que atravessam toda escolha. Sem elas, a paridade não sobrevive a uma troca de gestão."
          />
        </div>
      </section>

      <ManifestoBlock
        lines={[
          'Programa de gestão sai com gestor.',
          'Portaria fica.'
        ]}
      />

      <DepthScroller
        slides={eixosTransversais.map((eixo, i) => (
          <EixoSlide key={eixo.id} eixo={eixo} index={i} />
        ))}
      />

      <TransversalDiagram />

      <EixoCTA />

      <footer className="py-10 text-center font-body text-xs text-[var(--eixo-off-white-dim)]">
        Mulheres que Transformam · MGI
      </footer>
    </>
  );
}
