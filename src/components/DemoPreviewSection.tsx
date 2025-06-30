
import React from 'react';
import { Button } from '@/components/ui/button';

const DemoPreviewSection = () => {
  const handleStartFreeAdventure = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-secondary/10 to-background force-readable-font">
      <div className="max-w-7xl mx-auto">

        {/* Content Section - Side by Side Layout with Image on Left */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-12 lg:space-y-0 lg:space-x-20">

          {/* Left Side - Image */}
          <div className="flex-1 flex justify-center lg:justify-end order-2 lg:order-1">
            {/* Light Mode Image */}
            <img
              src="/uploads/dd58c424-e801-4524-868c-82a89c1f64d8.png"
              alt="Family playing board game together in the Innerverse"
              className="w-[500px] h-[400px] md:w-[600px] md:h-[480px] lg:w-[700px] lg:h-[560px] object-contain block dark:hidden"
            />

            {/* Dark Mode Image */}
            <img
              src="/uploads/fc8fc2cf-71d5-414f-a211-b5a49eff59af.png"
              alt="Silhouettes entering the magical Innerverse portal"
              className="w-[500px] h-[400px] md:w-[600px] md:h-[480px] lg:w-[700px] lg:h-[560px] object-contain hidden dark:block"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 order-1 lg:order-2">

            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl gaming-header text-primary leading-tight max-w-4xl">
                Try the Demo
                <br />
                Preview the Innerverse
              </h2>
            </div>

            {/* Subtext */}
            <div className="space-y-4 max-w-3xl">
              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed">
                Peek inside the story-driven world where healing meets adventure
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed">
                Test the experience solo or with someone you trust
              </p>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Button
                onClick={handleStartFreeAdventure}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                Start Free Adventure
              </Button>

              {/* Supporting Line */}
              <p className="text-sm md:text-base text-muted-foreground">
                Already helping 2,547 families reconnect through play
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPreviewSection;
