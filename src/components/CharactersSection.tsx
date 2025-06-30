
import React, { useState } from 'react';
import { Sparkles, Moon, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CharactersSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<'mythri' | 'slogh' | 'nivaya'>('mythri');

  const characters = {
    nivaya: {
      name: 'Nivaya',
      title: 'The evolving fairy within',
      description: 'Representing inner calm, confidence, and transcendence. Grows stronger as you heal, bringing light back to your world',
      image: '/uploads/755f25a5-4902-47a8-bb10-23a28b9971dc.png',
      gradient: 'from-yellow-400 to-yellow-500',
      textColor: 'text-yellow-400'
    },
    mythri: {
      name: 'MyThri',
      title: 'The gentle AI agent and emotional guide',
      description: 'Appears as a floating spark of light with wings of memory, offering gentle guidance through your healing journey',
      image: '/uploads/140f2ece-216c-4596-a10c-7560e01b6c3e.png',
      gradient: 'from-cyan-400 to-cyan-500',
      textColor: 'text-primary'
    },
    slogh: {
      name: 'Slogh',
      title: 'The shadow-like monster of struggle',
      description: 'Made of fear, confusion, chemo brain, and PTSD. Not your enemy, but a part of your story to understand and transform',
      image: '/uploads/846d8775-89af-460e-b51a-aa35ec271385.png',
      gradient: 'from-red-500 to-red-600',
      textColor: 'text-secondary'
    }
  };

  const currentChar = characters[selectedCharacter];

  return (
    <section id="characters" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-perfect-dark text-center text-foreground mb-12">
          The Forces Within
        </h2>

        {/* Character Navigation - Nivaya, MyThri, Slogh */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 p-2 gaming-widget rounded-full">
            {Object.entries(characters).map(([key, char]) => (
              <Button
                key={key}
                onClick={() => setSelectedCharacter(key as any)}
                className={`px-6 py-3 rounded-full font-pixel-purl transition-all duration-300 ${selectedCharacter === key
                    ? `bg-gradient-to-r ${char.gradient} text-white shadow-lg`
                    : 'bg-transparent hover:bg-accent/20'
                  }`}
              >
                {char.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Character Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Character Visual */}
          <div className="text-center">
            <div className="character-card w-64 h-64 mx-auto rounded-2xl flex items-center justify-center mb-6 p-8">
              <img
                src={currentChar.image}
                alt={currentChar.name}
                className="w-40 h-40 object-contain animate-float-gentle"
              />
            </div>
            <h3 className={`text-2xl font-perfect-dark mb-2 ${currentChar.textColor}`}>
              {currentChar.name}
            </h3>
            <p className={`text-lg font-pixel-purl ${currentChar.textColor}`}>
              {currentChar.title}
            </p>
          </div>

          {/* Character Info */}
          <div className="space-y-6">
            <div className="gaming-widget p-8 rounded-2xl">
              <h4 className="text-xl font-astron-boy text-foreground mb-4">
                Who They Are
              </h4>
              <p className="text-foreground leading-relaxed font-pixel-purl text-lg">
                {currentChar.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
