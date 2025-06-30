import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GamingHero = () => {
  const handleStartFreeAdventure = () => {
    window.open(
      'https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form',
      '_blank'
    );
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">

      {/* Static Background Stars */}
      <div className="star-field absolute inset-0 pointer-events-none z-0">
        {/* Add your decorative static stars here if desired */}
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto space-y-12 z-10 relative text-center">

        {/* THRIVEON Title - No Glow */}
        <div className="mb-8 sparkle-trigger relative inline-block">
          <h1 className="text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] font-extrabold tracking-widest uppercase text-teal-800 dark:text-[#ff6b35]">
            THRIVEON
          </h1>
          <div className="invisible-star-field"></div>
        </div>

        {/* Headline */}
        <div className="space-y-8 max-w-4xl">
          <h2 className="gaming-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-800 dark:text-white">
            Heal Together Play Apart Unlock Your Innerverse
          </h2>

          <p className="gaming-font text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Step into an emotionally intelligent story game built to guide families through grief, brain fog, and emotional disconnection using magic, play, and AI.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            onClick={handleStartFreeAdventure}
            className="gaming-font px-8 py-6 text-xl bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl widget-hover"
            size="lg"
          >
            <Gamepad2 className="w-6 h-6 mr-3" />
            Start Free Adventure
          </Button>
        </div>

        {/* Social Proof */}
        <div className="pt-6">
          <p className="gaming-font text-lg text-primary dark:text-primary/80">
            Join 2547 families healing inside the Innerverse
          </p>
        </div>
      </div>
    </section>
  );
};

export default GamingHero;
