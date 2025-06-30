
import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

const EmotionalTeaserSection = () => {
  return (
    <section className="py-16 px-4 relative">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          {/* Decorative Icons */}
          <div className="flex justify-center space-x-4 mb-8">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <Heart className="w-8 h-8 text-secondary animate-pulse" />
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          
          {/* Main Emotional Message */}
          <div className="cinematic-text space-y-6">
            <p className="text-2xl md:text-4xl font-pixel-purl leading-relaxed text-foreground">
              ThriveOn is a magical world built for families to grow stronger together after cancer
            </p>
            <p className="text-xl md:text-3xl font-pixel-purl leading-relaxed text-primary glow-text">
              This is your second life where you rise again, one joyful moment at a time
            </p>
          </div>
          
          {/* Subtle Accent */}
          <div className="pt-4">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalTeaserSection;
