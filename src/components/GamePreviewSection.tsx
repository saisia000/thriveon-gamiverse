
import React from 'react';
import { Shield, Zap, Heart, Trophy, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GamePreviewSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Unlock your family's healing superpowers",
      color: "text-primary"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Battle Slogh—the inner monster of despair",
      color: "text-secondary"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Grow with Nivaya, your calmness companion",
      color: "text-primary"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      text: "Earn wins, unlock levels, and thrive together",
      color: "text-secondary"
    }
  ];

  const handleUnlockPreview = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  return (
    <section className="py-16 px-4 relative force-readable-font">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl gaming-header text-foreground mb-2">
            What Happens Inside the Innerverse?
          </h2>
          <p className="text-lg text-muted-foreground">
            (A Journey Through Healing, Play, and Power-Ups)
          </p>
        </div>

        {/* Character Images Row - Nivaya, MyThri, Slogh */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          <div className="character-card p-4 rounded-xl">
            <img
              src="/uploads/755f25a5-4902-47a8-bb10-23a28b9971dc.png"
              alt="Nivaya - Guardian of Calm"
              className="w-20 h-20 object-contain"
            />
            <p className="text-sm text-center mt-2 text-yellow-400">Nivaya</p>
          </div>
          <div className="character-card p-4 rounded-xl">
            <img
              src="/uploads/140f2ece-216c-4596-a10c-7560e01b6c3e.png"
              alt="MyThri - Your AI Companion"
              className="w-20 h-20 object-contain"
            />
            <p className="text-sm text-center mt-2 text-primary">MyThri</p>
          </div>
          <div className="character-card p-4 rounded-xl">
            <img
              src="/uploads/846d8775-89af-460e-b51a-aa35ec271385.png"
              alt="Slogh - Monster of Despair"
              className="w-20 h-20 object-contain"
            />
            <p className="text-sm text-center mt-2 text-secondary">Slogh</p>
          </div>
        </div>

        {/* Features List */}
        <div className="gaming-widget p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-background/50">
                <div className={`${feature.color} animate-pulse`}>
                  {feature.icon}
                </div>
                <span className="text-lg text-foreground">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* New CTA Section */}
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-4">
                <Sparkles className="w-5 h-5 text-primary animate-sparkle-dance" />
                <span className="text-xl text-primary glow-text">
                  Curious What It Feels Like to Heal Through Play?
                </span>
                <Sparkles className="w-5 h-5 text-secondary animate-sparkle-dance" />
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Join the waitlist and be the first to preview the Innerverse game
              </p>
            </div>

            <Button
              onClick={handleUnlockPreview}
              className="magical-btn px-8 py-4 text-lg"
            >
              🔓 Unlock the Preview – Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamePreviewSection;
