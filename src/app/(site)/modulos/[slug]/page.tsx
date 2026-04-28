import { notFound } from 'next/navigation';
import { modules } from '@/data/modules';
import NewModuleTemplate from '@/components/modulos/NewModuleTemplate';

interface ModulePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { slug } = await params;
  const moduleData = modules.find(m => m.id === slug);

  if (!moduleData) {
    notFound();
  }

  const currentIndex = modules.findIndex(m => m.id === slug);

  return <NewModuleTemplate module={moduleData} index={currentIndex} />;
}

export async function generateStaticParams() {
  return modules.map((module) => ({
    slug: module.id,
  }));
}
