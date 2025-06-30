
import React from 'react';
import { Gamepad2, Sparkles, Users, Heart } from 'lucide-react';

const SocialProofSection = () => {
  const stats = [
    { icon: Gamepad2, label: 'Games Played', value: '1,485' },
    { icon: Sparkles, label: 'Fairy Evolutions', value: '712' },
    { icon: Users, label: 'Bonds Strengthened', value: '1,259' },
    { icon: Heart, label: 'Hearts Healed', value: '2,547' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-perfect-dark text-foreground mb-12">
          The Innerverse Awakens
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="gaming-widget p-6 rounded-2xl text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-perfect-dark text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-pixel-purl text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-lg font-pixel-purl text-primary mb-8">
          <Sparkles className="w-5 h-5 inline mr-2" />
          2,547 have entered the Innerverse — survivors, caregivers, and loved ones
        </p>
      </div>
    </section>
  );
};

export default SocialProofSection;
