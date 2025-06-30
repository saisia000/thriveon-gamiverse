
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Loader2, Sparkles } from 'lucide-react';

const ImageGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleStartFreeAdventure = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  const generateMagicalWorld = () => {
    setIsGenerating(true);

    // Simulate magical world creation with a beautiful preset image
    setTimeout(() => {
      setGeneratedImage('/uploads/917e222d-93bb-403b-a5d0-08a5f95d98b9.png');
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl blur-3xl -z-10"></div>

      <Card className="gaming-widget relative overflow-hidden border-2 border-primary/20 shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02]">
        {/* Magical sparkle animation overlay */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full animate-pulse"></div>

        <CardHeader className="text-center relative">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-primary mr-3 animate-sparkle" />
            <CardTitle className="text-3xl md:text-4xl font-perfect-dark text-primary">
              Visualize Your Healing Journey
            </CardTitle>
            <Sparkles className="w-8 h-8 text-primary ml-3 animate-sparkle" />
          </div>
          <p className="text-lg font-pixel-purl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Create a magical visualization of your personal Brain World—complete with memory islands, neural bridges, and healing safe zones
          </p>
          <p className="text-primary font-pixel-purl mt-2 italic">
            Your imagination... brought to life ✨
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {!generatedImage ? (
            <Button
              onClick={generateMagicalWorld}
              disabled={isGenerating}
              className="magical-btn w-full py-6 text-lg relative overflow-hidden group"
              size="lg"
            >
              <div className="flex items-center justify-center relative z-10">
                {isGenerating ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                    Creating Your Magical Brain World...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                    Create My Brain World
                  </>
                )}
              </div>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center">
                <h3 className="text-xl font-perfect-dark text-primary mb-4">
                  Your Brain World is Ready! ✨
                </h3>
              </div>
              <div className="relative overflow-hidden rounded-xl border-4 border-primary/30 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02]">
                <img
                  src={generatedImage}
                  alt="Your Personal Brain World"
                  className="w-full h-auto"
                />
                {/* Image overlay with subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
              </div>
              <div className="text-center space-y-4">
                <p className="text-sm font-pixel-purl text-muted-foreground italic">
                  This is your personal healing visualization—a magical world where your journey becomes an adventure
                </p>
                <Button
                  onClick={handleStartFreeAdventure}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-pixel-purl text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start My Healing Adventure
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageGenerator;
