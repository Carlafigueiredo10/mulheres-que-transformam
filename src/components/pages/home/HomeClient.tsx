'use client';

import HomeHero from '@/components/ui/HomeHero';
import ManifestoTeaser from '@/components/ui/ManifestoTeaser';
import HomeModulesSection from '@/components/ui/HomeModulesSection';
import EixosTransversaisSection from '@/components/ui/EixosTransversaisSection';
import SocialProofSection from '@/components/ui/SocialProofSection';
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
      <Reveal delay={0.1}><SocialProofSection /></Reveal>
      <Reveal delay={0.12}><AderirCTA /></Reveal>
    </div>
  );
}
