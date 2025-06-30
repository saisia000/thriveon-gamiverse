
import React, { useState } from 'react';
import { Brain, Heart, Users, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const NeedsToggle = () => {
  const [selectedNeed, setSelectedNeed] = useState<'focus' | 'calm' | 'bonding' | 'strength'>('focus');

  const needs = [
    {
      key: 'focus' as const,
      label: 'Focus',
      icon: Brain,
      gradient: 'from-primary via-primary/80 to-secondary',
      description: 'Clear the mental fog and sharpen your thinking with gentle brain games and clarity exercises',
      benefit: 'Mental clarity and cognitive sharpness return gradually'
    },
    {
      key: 'calm' as const,
      label: 'Calm',
      icon: Heart,
      gradient: 'from-secondary via-primary/60 to-primary',
      description: 'Find inner peace through guided reflection, breathing exercises, and emotional grounding',
      benefit: 'Deep relaxation and emotional balance emerge'
    },
    {
      key: 'bonding' as const,
      label: 'Bonding',
      icon: Users,
      gradient: 'from-primary/80 via-secondary/70 to-primary/90',
      description: 'Strengthen connections with loved ones through shared activities and meaningful conversations',
      benefit: 'Deeper relationships and mutual understanding flourish'
    },
    {
      key: 'strength' as const,
      label: 'Strength',
      icon: Flame,
      gradient: 'from-secondary/90 via-primary/70 to-secondary',
      description: 'Build emotional resilience and inner courage through empowering challenges and affirmations',
      benefit: 'Confidence and emotional fortitude ignite within'
    }
  ];

  const currentNeed = needs.find(need => need.key === selectedNeed)!;

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-pixel text-center text-foreground mb-8">
          What do you need most?
        </h2>
        
        {/* All Needs Visible with Gradients */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {needs.map((need) => {
            const Icon = need.icon;
            const isSelected = selectedNeed === need.key;
            
            return (
              <div
                key={need.key}
                onClick={() => setSelectedNeed(need.key)}
                className={`cursor-pointer p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  isSelected 
                    ? `bg-gradient-to-br ${need.gradient} text-white shadow-xl scale-105` 
                    : `bg-gradient-to-br ${need.gradient} opacity-70 hover:opacity-90 text-white/90 shadow-lg`
                }`}
              >
                <div className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-lg font-bold mb-2 font-pixel-sans">{need.label}</div>
                  {isSelected && (
                    <div className="mt-2 px-3 py-1 bg-white/20 rounded-full text-xs font-bold">
                      SELECTED
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Need Details */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/60 backdrop-blur-sm no-border shadow-xl rounded-lg gentle-hover">
            <CardContent className="p-8 text-center">
              <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${currentNeed.gradient} rounded-lg shadow-lg mb-6 flex items-center justify-center`}>
                <currentNeed.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-pixel-sans font-bold text-foreground mb-4">
                {currentNeed.label}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 font-modern">
                {currentNeed.description}
              </p>
              <div className="bg-accent/20 rounded-lg p-4">
                <p className="text-foreground font-medium italic font-modern">
                  {currentNeed.benefit}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NeedsToggle;
