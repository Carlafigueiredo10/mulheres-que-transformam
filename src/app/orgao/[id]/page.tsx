import { notFound } from 'next/navigation';
import { orgaosAderentes } from '@/data/orgaos-aderentes';
import PaginaOrgao from '@/components/ui/PaginaOrgao';

export async function generateStaticParams() {
  return orgaosAderentes.map((orgao) => ({
    id: orgao.id,
  }));
}

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const orgao = orgaosAderentes.find(o => o.id === params.id);
  
  if (!orgao) {
    return {
      title: 'Órgão não encontrado',
    };
  }

  return {
    title: `${orgao.nome} - Mulheres que Transformam`,
    description: `Conheça as iniciativas de equidade de gênero do ${orgao.nome} na Rede Conecta Mulheres que Transformam.`,
  };
}

export default function Page({ params }: PageProps) {
  const orgao = orgaosAderentes.find(o => o.id === params.id);

  if (!orgao) {
    notFound();
  }

  return <PaginaOrgao orgao={orgao} />;
}