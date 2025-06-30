
import React from 'react';
import { Button } from '@/components/ui/button';

const MissionClaritySection = () => {
  const handleSendFirstChapter = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/10 force-readable-font">
      <div className="max-w-7xl mx-auto">

        {/* Header - Prominently at the top */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl gaming-header text-primary leading-tight max-w-5xl mx-auto">
            Emotional Pain Isn't Just Invisible It's Isolating
          </h2>
        </div>

        {/* Content Section - Side by Side Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-12 lg:space-y-0 lg:space-x-20">

          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 order-1">
            <div className="space-y-6 max-w-3xl">
              {/* First paragraph */}
              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed">
                Grief, burnout, brain fog, trauma don't come with roadmaps
                And most "solutions" feel too clinical, too overwhelming, or too damn cold
                You're trying to hold it together… but inside, you feel like you're falling apart
              </p>

              {/* Second paragraph */}
              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed">
                ThriveOn meets you exactly where you are! No therapy speak, no shame
                Just a guided space to process, reflect, and reconnect through joyful story-driven play
              </p>

              {/* Third paragraph */}
              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed">
                Whether you're navigating illness, caregiving, heartbreak, or just plain exhaustion
                ThriveOn helps you heal gently, together or alone, one level at a time
              </p>
            </div>

            {/* Section CTA */}
            <div className="pt-6">
              <Button
                onClick={handleSendFirstChapter}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Me the First Chapter
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center lg:justify-start order-2">
            {/* Light Mode Image */}
            <img
              src="/uploads/74328c73-93f4-479d-be64-0251b42523e9.png"
              alt="People playing board game together"
              className="w-[500px] h-[400px] md:w-[600px] md:h-[480px] lg:w-[700px] lg:h-[560px] object-contain block dark:hidden"
            />

            {/* Dark Mode Image */}
            <img
              src="/uploads/16cc35ec-bdb0-4d81-8ca1-120bc7a956f1.png"
              alt="Emotional healing journey"
              className="w-[500px] h-[400px] md:w-[600px] md:h-[480px] lg:w-[700px] lg:h-[560px] object-contain hidden dark:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionClaritySection;
