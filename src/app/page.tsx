import EnhancedHero from '@/components/ui/EnhancedHero';
import NewsBanner from '@/components/ui/NewsBanner';
import ImpactSection from '@/components/ui/ImpactSection';
import RedeConectaSection from '@/components/ui/RedeConectaSection';
import ModernModulesSection from '@/components/ui/ModernModulesSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import ObservatorySection from '@/components/ui/ObservatorySection';

export default function Home() {
  return (
    <div>
      <NewsBanner />
      <EnhancedHero />
      <ImpactSection />
      <ObservatorySection />
      <RedeConectaSection />
      <ModernModulesSection />
      <TestimonialsSection />
    </div>
  );
}
