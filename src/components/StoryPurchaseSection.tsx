import React from 'react';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';

const StoryPurchaseSection = () => {
  const handleNotify = () => {
    window.open(
      'https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form',
      '_blank'
    );
  };

  return (
    <section className="py-24 px-6 text-center bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-center mb-4">
          <Book className="w-6 h-6 text-orange-500" />
        </div>

        <h2 className="text-3xl md:text-4xl font-perfect-dark text-foreground">
          Begin the Soul Journey
        </h2>

        <p className="text-lg font-pixel-purl text-foreground leading-relaxed">
          A true story of healing through imagination, grief, and light—
          crafted to help you feel less alone.
        </p>

        <Button
          className="font-perfect-dark text-lg bg-orange-500 text-white px-6 py-4 rounded-xl hover:bg-orange-600 transition-all"
          onClick={handleNotify}
        >
          Notify Me When It’s Ready
        </Button>
      </div>
    </section>
  );
};

export default StoryPurchaseSection;
