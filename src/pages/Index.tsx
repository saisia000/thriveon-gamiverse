import React from 'react';
import GamingNavbar from '@/components/GamingNavbar';
import GamingHero from '@/components/GamingHero';
import MissionClaritySection from '@/components/MissionClaritySection';
import DemoPreviewSection from '@/components/DemoPreviewSection';
import StoryPurchaseSection from '@/components/StoryPurchaseSection';
import EmailCaptureSection from '@/components/EmailCaptureSection';
import GamePreviewSection from '@/components/GamePreviewSection';
import CharactersSection from '@/components/CharactersSection';
import GameplaySection from '@/components/GameplaySection';
import InnerverseBattleSection from '@/components/InnerverseBattleSection';
import TestimonialsAndStatsSection from '@/components/TestimonialsAndStatsSection';
import AboutThriveOnSection from '@/components/AboutThriveOnSection';
import PricingSectionAdvanced from '@/components/PricingSectionAdvanced';
import WaitlistSection from '@/components/WaitlistSection';
import FoundingFamiliesModule from '@/components/FoundingFamiliesModule';
import RewardTracker from '@/components/RewardTracker';
import BuildWithUsWidget from '@/components/BuildWithUsWidget';
import ImageGenerator from '@/components/ImageGenerator';
import InvisibleStarField from '@/components/InvisibleStarField';
import ReadMyStorySection from '@/components/ReadMyStorySection';
import VisualizeHealingSection from '@/components/VisualizeHealingSection';
import { Button } from '@/components/ui/button';

const Index = () => {
  const handleStartFreeAdventure = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  const handleBecomeFoundingLightSeeker = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative star-container">
      <InvisibleStarField />
      <div className="relative z-10">
        <GamingNavbar />
        <div id="hero">
          <GamingHero />
        </div>

        {/* Soul Story Intro */}
        <ReadMyStorySection />

        {/* Free Chapter Email Capture */}
        <EmailCaptureSection />

        {/* Brain World Visualizer */}
        <VisualizeHealingSection />

        <MissionClaritySection />
        <DemoPreviewSection />
        <StoryPurchaseSection />

        <section className="py-16 px-4 relative">
          <ImageGenerator />
        </section>

        <GamePreviewSection />
        <div id="characters">
          <CharactersSection />
        </div>
        <GameplaySection />
        <div id="innerverse">
          <InnerverseBattleSection />
        </div>
        <div id="testimonials">
          <TestimonialsAndStatsSection />
        </div>
        <AboutThriveOnSection />
        <PricingSectionAdvanced />
        <BuildWithUsWidget />
        <FoundingFamiliesModule />
        <RewardTracker />
        <div id="waitlist">
          <WaitlistSection />
        </div>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <img
                src="/uploads/140f2ece-216c-4596-a10c-7560e01b6c3e.png"
                alt="MyThri"
                className="w-8 h-8 mr-2 object-contain"
              />
              <span className="text-2xl">ThriveOn</span>
            </div>
            <p className="text-white/90 mb-4">
              Where healing meets magic in the Innerverse
            </p>
            <p className="text-sm text-white/80 mb-8">
              © 2025 ThriveOn Nurturing light within
            </p>
            <div className="border-t border-white/20 pt-8 space-y-4">
              <h3 className="text-xl text-white mb-6">
                Ready to Begin Your Healing Journey
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={handleStartFreeAdventure}
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  variant="outline"
                >
                  Start Free Adventure
                </Button>
                <Button
                  onClick={handleBecomeFoundingLightSeeker}
                  className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Become a Founding LightSeeker
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
