
import React from 'react';
import { Heart, Sparkles, Zap } from 'lucide-react';

const AboutThriveOnSection = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      {/* Decorative Elements */}
      <div className="flex justify-center space-x-4 mb-8">
        <Heart className="w-6 h-6 text-secondary animate-pulse" />
        <Sparkles className="w-6 h-6 text-primary animate-sparkle-dance" />
        <Zap className="w-6 h-6 text-secondary animate-pulse" />
      </div>
      
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-perfect-dark text-foreground mb-8 text-center">
        About ThriveOn
      </h2>
      
      {/* About Content */}
      <div className="gaming-widget p-8 rounded-2xl space-y-6">
        <p className="text-xl md:text-2xl font-pixel-purl leading-relaxed text-foreground">
          We took everything we wish we had during the darkest moments
          and turned it into a world of joyful, story-driven healing
        </p>
        <p className="text-lg md:text-xl font-pixel-purl leading-relaxed text-muted-foreground">
          Backed by neuroscience Powered by AI
          But built for the heart
        </p>
        <p className="text-xl md:text-2xl font-pixel-purl leading-relaxed text-primary glow-text">
          This isn't a support group It's a player-powered path through pain
        </p>
      </div>
      
      {/* Bottom Accent */}
      <div className="pt-6">
        <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default AboutThriveOnSection;
