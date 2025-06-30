
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const MindBattlefieldSection = () => {
  const scrollToGamePreview = () => {
    const element = document.getElementById('characters');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden force-readable-font">
      {/* Background Image - Complete mind with emotional forces inside */}
      <div className="absolute inset-0 z-0">
        <img
          src="/uploads/a7124941-a9a6-4d77-96d2-1c196c38a5a1.png"
          alt="The Human Mind - Inner Forces and Emotional Landscape"
          className="w-full h-full object-cover object-[center_20%]"
        />
        {/* Lighter overlay for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/20"></div>
      </div>

      {/* Content Overlay with cycling animation */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-8">
        <div className="p-6 md:p-8 rounded-2xl space-y-6 backdrop-blur-sm bg-black/20 border border-white/30 animate-[fadeInOut_8s_ease-in-out_infinite]">
          {/* Main Header with better contrast */}
          <h2 className="text-xl md:text-4xl gaming-header text-white mb-4 leading-tight text-shadow-2xl">
            Your Mind Is a Battlefield
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent font-bold text-shadow-lg">
              It's Time to Win It Back
            </span>
          </h2>

          {/* Subheader with enhanced readability */}
          <div className="space-y-3 text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto">
            <p className="text-cyan-200 font-semibold text-shadow-lg text-base md:text-lg">
              ThriveOn turns your brain's hardest days into powerful play
            </p>
            <p className="text-white drop-shadow-lg text-sm md:text-base">
              Every emotion has a character Every moment, a choice
            </p>
            <p className="text-yellow-200 font-semibold drop-shadow-lg text-base md:text-lg">
              Play together Heal together One joyful game at a time
            </p>
          </div>

          {/* Learn More Button with enhanced styling */}
          <div className="pt-4">
            <Button
              onClick={scrollToGamePreview}
              variant="outline"
              className="px-6 py-3 text-base border-2 border-white/70 text-white hover:bg-white hover:text-foreground transition-all duration-300 backdrop-blur-sm bg-white/20 shadow-xl hover:shadow-2xl"
            >
              <ChevronDown className="w-4 h-4 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindBattlefieldSection;
