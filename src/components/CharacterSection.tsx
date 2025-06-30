import React, { useState } from 'react';
import { Sparkles, Moon, Crown, MessageCircle, Shield, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CharacterSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<'mythri' | 'slogh' | 'nivaya'>('mythri');

  const characters = {
    mythri: {
      name: 'MyThri',
      title: 'Your AI Companion',
      icon: Sparkles,
      gradient: 'from-mythri-turquoise to-mythri-orange',
      description: 'The soft-spoken guide who listens without judgment, offering gentle nudges and healing quests tailored to your emotional journey.',
      purpose: 'To create a safe space for reflection, growth, and gentle challenge through personalized conversations and activities.',
      quote: '"Every step forward, no matter how small, is a victory worth celebrating."'
    },
    slogh: {
      name: 'Slogh',
      title: 'The Shadow of Struggle',
      icon: Moon,
      gradient: 'from-gray-500 to-gray-700',
      description: 'A shape-shifting shadow creature representing the emotional fog, trauma, and disconnection that clouds your inner world.',
      purpose: 'Not an enemy to defeat, but a part of your story to understand, acknowledge, and gradually transform.',
      quote: '"I am the weight you carry, but I need not define you."'
    },
    nivaya: {
      name: 'Nivaya',
      title: 'Your Inner Light',
      icon: Crown,
      gradient: 'from-mythri-orange to-mythri-coral',
      description: 'The radiant fairy of calm, joy, and clarity that lives within you, slowly awakening as you heal and grow stronger.',
      purpose: 'To represent your returning sense of self, inner peace, and the beautiful strength that emerges through healing.',
      quote: '"I have always been here, waiting for you to remember your own magic."'
    }
  };

  const currentChar = characters[selectedCharacter];

  return (
    <section className="py-20 px-4 bg-warm-ivory">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-pixel font-bold text-center text-dark-teal mb-12">
          Meet Your Companions
        </h2>

        {/* Character Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-2 bg-white/40 backdrop-blur-sm rounded-lg no-border">
            {Object.entries(characters).map(([key, char]) => {
              const Icon = char.icon;
              const isSelected = selectedCharacter === key;
              return (
                <Button
                  key={key}
                  onClick={() => setSelectedCharacter(key as any)}
                  variant={isSelected ? "default" : "ghost"}
                  className={`pixel-button px-6 py-3 transition-all duration-300 font-pixel-sans font-bold no-border ${isSelected
                      ? `bg-gradient-to-r ${char.gradient} text-white shadow-lg`
                      : 'hover:bg-mythri-turquoise/10 text-dark-teal'
                    }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {char.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Character Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Character Visual */}
          <div className="text-center">
            <div className={`w-48 h-48 mx-auto ${selectedCharacter === 'mythri' ? 'bg-white' : selectedCharacter === 'slogh' ? 'bg-white' : selectedCharacter === 'nivaya' ? 'bg-white' : `bg-gradient-to-br ${currentChar.gradient}`} rounded-lg flex items-center justify-center shadow-2xl mb-6 animate-float`}>
              {selectedCharacter === 'mythri' ? (
                <img
                  src="/uploads/140f2ece-216c-4596-a10c-7560e01b6c3e.png"
                  alt="MyThri - Your AI Companion"
                  className="w-32 h-32 object-contain"
                />
              ) : selectedCharacter === 'slogh' ? (
                <img
                  src="/uploads/846d8775-89af-460e-b51a-aa35ec271385.png"
                  alt="Slogh - The Shadow of Struggle"
                  className="w-32 h-32 object-contain"
                />
              ) : selectedCharacter === 'nivaya' ? (
                <img
                  src="/uploads/755f25a5-4902-47a8-bb10-23a28b9971dc.png"
                  alt="Nivaya - Your Inner Light"
                  className="w-40 h-40 object-contain"
                />
              ) : (
                <currentChar.icon className="w-24 h-24 text-white" />
              )}
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-pixel-sans font-bold text-dark-teal">{currentChar.name}</h3>
              <p className="text-lg text-mythri-teal font-pixel-sans font-medium">{currentChar.title}</p>
            </div>
          </div>

          {/* Character Info */}
          <div className="space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm no-border shadow-xl rounded-lg gentle-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-mythri-orange mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-pixel-sans font-bold text-dark-teal mb-2">Who They Are</h4>
                    <p className="text-dark-teal leading-relaxed font-modern">{currentChar.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm no-border shadow-xl rounded-lg gentle-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-3 mb-4">
                  <Heart className="w-6 h-6 text-mythri-coral mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-pixel-sans font-bold text-dark-teal mb-2">Their Purpose</h4>
                    <p className="text-dark-teal leading-relaxed font-modern">{currentChar.purpose}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm no-border shadow-xl rounded-lg gentle-hover">
              <CardContent className="p-8">
                <div className="text-center">
                  <p className="text-lg text-dark-teal italic leading-relaxed font-pixel-dialogue">
                    {currentChar.quote}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterSection;
