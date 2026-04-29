import ManifestoSection from '@/components/ui/ManifestoSection';

export const metadata = {
  title: 'Manifesto · Por uma engenharia da paridade | Mulheres que Transformam',
  description:
    'Manifesto Mulheres que Transformam. Nós, mulheres trabalhadoras e servidoras da administração pública, declaramos que o tempo do mero diagnóstico acabou.'
};

export default function ManifestoPage() {
  return (
    <div className="pt-32">
      <ManifestoSection />
    </div>
  );
}
