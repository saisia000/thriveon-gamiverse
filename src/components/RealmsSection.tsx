
import React, { useState } from 'react';
import { Cloud, Volume2, Brain, Flame, Feather } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RealmsSection = () => {
  const [selectedRealm, setSelectedRealm] = useState('fog');

  const realms = {
    fog: {
      name: 'Fog',
      theme: 'Cognitive clarity',
      games: 'Brain twisters, "Did You Know" challenges',
      icon: Cloud,
      gradient: 'from-primary via-primary/80 to-secondary',
      description: 'Clear the mental fog with gentle cognitive exercises and memory games.'
    },
    echoes: {
      name: 'Echoes',
      theme: 'Voice/emotion',
      games: 'Tongue twisters, voice logs, emotional expression',
      icon: Volume2,
      gradient: 'from-secondary via-primary/60 to-primary',
      description: 'Find your voice through sound-based healing and emotional release.'
    },
    memory: {
      name: 'Memory',
      theme: 'Bonded healing',
      games: 'Shared puzzles, memory lanes, connection rituals',
      icon: Brain,
      gradient: 'from-primary/80 via-secondary/70 to-primary/90',
      description: 'Strengthen bonds through shared memories and collaborative challenges.'
    },
    flame: {
      name: 'Flame',
      theme: 'Emotional strength',
      games: 'Myth vs Truth, courage quests, inner fire',
      icon: Flame,
      gradient: 'from-secondary/90 via-primary/70 to-secondary',
      description: 'Ignite your inner strength and build emotional resilience.'
    },
    wings: {
      name: 'Wings',
      theme: 'Belonging',
      games: 'Gift rituals, co-reflection, community circles',
      icon: Feather,
      gradient: 'from-primary via-secondary/80 to-primary/70',
      description: 'Discover your place in the world and build meaningful connections.'
    }
  };

  const currentRealm = realms[selectedRealm as keyof typeof realms];

  return (
    <section id="realms" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-perfect-dark text-center text-foreground mb-12">
          The 5 Realms Explorer
        </h2>
        
        {/* All Realms Visible with Gradients */}
        <div className="grid md:grid-cols-5 gap-4 mb-12">
          {Object.entries(realms).map(([key, realm]) => {
            const Icon = realm.icon;
            const isSelected = selectedRealm === key;
            return (
              <div
                key={key}
                onClick={() => setSelectedRealm(key)}
                className={`cursor-pointer p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  isSelected 
                    ? `bg-gradient-to-br ${realm.gradient} text-white shadow-xl scale-105` 
                    : `bg-gradient-to-br ${realm.gradient} opacity-70 hover:opacity-90 text-white/90 shadow-lg`
                }`}
              >
                <div className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-sm font-bold mb-1 font-pixel-purl">{realm.name}</div>
                  <div className="text-xs opacity-90 font-pixel-purl">{realm.theme}</div>
                  {isSelected && (
                    <div className="mt-3 px-2 py-1 bg-white/20 rounded-full text-xs font-bold">
                      SELECTED
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Realm Display */}
        <div className="gaming-widget p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className={`w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r ${currentRealm.gradient}`}>
                {React.createElement(currentRealm.icon, {
                  className: "w-16 h-16 text-white"
                })}
              </div>
              <h3 className="text-3xl font-perfect-dark text-foreground mb-2">
                {currentRealm.name}
              </h3>
              <p className="text-lg text-primary font-pixel-purl mb-4">
                {currentRealm.theme}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-astron-boy text-foreground mb-3">
                  Description
                </h4>
                <p className="text-foreground leading-relaxed font-pixel-purl">
                  {currentRealm.description}
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-astron-boy text-foreground mb-3">
                  Games & Activities
                </h4>
                <p className="text-foreground leading-relaxed font-pixel-purl">
                  {currentRealm.games}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealmsSection;
