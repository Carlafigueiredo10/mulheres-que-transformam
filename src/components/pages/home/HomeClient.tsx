'use client';

import HomeHero from '@/components/ui/HomeHero';
import ImpactSection from '@/components/ui/ImpactSection';
import RedeConectaSection from '@/components/ui/RedeConectaSection';
import HomeModulesSection from '@/components/ui/HomeModulesSection';
import AderirCTA from '@/components/ui/AderirCTA';
import EixosTransversaisSection from '@/components/ui/EixosTransversaisSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import ObservatorySection from '@/components/ui/ObservatorySection';
import Reveal from '@/components/motion/Reveal';

export default function HomeClient() {
  return (
    <div>
      <HomeHero />
      <Reveal delay={0.04}><ImpactSection /></Reveal>
      <Reveal delay={0.06}><HomeModulesSection /></Reveal>
      <Reveal delay={0.08}><AderirCTA /></Reveal>
      <Reveal delay={0.1}><EixosTransversaisSection /></Reveal>
      <Reveal delay={0.12}><ObservatorySection /></Reveal>
      <Reveal delay={0.14}><RedeConectaSection /></Reveal>
      <Reveal delay={0.16}><TestimonialsSection /></Reveal>
    </div>
  );
}
