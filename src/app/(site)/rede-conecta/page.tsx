import RedesHero from '@/components/redes/RedesHero';
import DiagnosticoSection from '@/components/redes/DiagnosticoSection';
import IsolamentoSection from '@/components/redes/IsolamentoSection';
import ForcaColetivaSection from '@/components/redes/ForcaColetivaSection';
import ComoFormarSection from '@/components/redes/ComoFormarSection';
import CasesSection from '@/components/redes/CasesSection';
import AcessoSection from '@/components/redes/AcessoSection';
import FechamentoCTA from '@/components/redes/FechamentoCTA';

export const metadata = {
  title: 'Rede Conecta | Mulheres que Transformam',
  description:
    'Por que formar uma rede, como formar a sua, e o que ela transforma. Acesse o catálogo nacional, o mapa interativo, cadastre sua iniciativa e conheça boas práticas.'
};

export default function RedeConectaPage() {
  return (
    <div className="redes-theme">
      <RedesHero />
      <DiagnosticoSection />
      <IsolamentoSection />
      <ForcaColetivaSection />
      <ComoFormarSection />
      <CasesSection />
      <AcessoSection />
      <FechamentoCTA />
    </div>
  );
}
