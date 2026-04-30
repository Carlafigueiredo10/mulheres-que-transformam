'use client';

import HomeHero from '@/components/ui/HomeHero';
import ManifestoTeaser from '@/components/ui/ManifestoTeaser';
import HomeModulesSection from '@/components/ui/HomeModulesSection';
import EixosTransversaisSection from '@/components/ui/EixosTransversaisSection';
import ComoFuncionaSection from '@/components/ui/ComoFuncionaSection';
import AderirCTA from '@/components/ui/AderirCTA';
import SecondaryProgramsSection from '@/components/ui/SecondaryProgramsSection';
import Reveal from '@/components/motion/Reveal';

export default function HomeClient() {
  return (
    <div>
      <HomeHero />
      <Reveal delay={0.03}><ManifestoTeaser /></Reveal>
      <Reveal delay={0.04}><HomeModulesSection /></Reveal>
      <Reveal delay={0.06}><EixosTransversaisSection /></Reveal>
      <Reveal delay={0.08}><SecondaryProgramsSection /></Reveal>
      <Reveal delay={0.1}><ComoFuncionaSection /></Reveal>
      <Reveal delay={0.12}><AderirCTA /></Reveal>
    </div>
  );
}
