
import React from 'react';
import { Cloud, Volume2, Heart, Flame, Crown, Sparkles, Brain, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface RealmExplorerProps {
  selectedRealm: string;
  onRealmChange: (realm: string) => void;
}

const RealmExplorer = ({ selectedRealm, onRealmChange }: RealmExplorerProps) => {
  const realms = {
    fog: {
      name: 'Fog',
      title: 'Cognitive Clarity',
      icon: Cloud,
      gradient: 'from-warm-beige to-soft-amber',
      nivayaGrowth: 'Sparkle begins',
      description: 'Navigate through mental mist and confusion with gentle brain games and clarity exercises.',
      activities: ['Mind mapping games', 'Memory puzzles', 'Focus breathing exercises', 'Thought organization tools'],
      benefit: 'Clear thinking and mental sharpness return gradually'
    },
    echoes: {
      name: 'Echoes',
      title: 'Voice & Emotion',
      icon: Volume2,
      gradient: 'from-gentle-blush to-soft-amber',
      nivayaGrowth: 'Nivaya gains her voice',
      description: 'Rediscover your emotional voice through expressive activities and sound-based healing.',
      activities: ['Voice journaling', 'Emotional storytelling', 'Sound meditation', 'Music therapy games'],
      benefit: 'Emotional expression and communication flourish'
    },
    memory: {
      name: 'Memory',
      title: 'Bonded Healing',
      icon: Heart,
      gradient: 'from-soft-amber to-gentle-blush',
      nivayaGrowth: 'Her wings form',
      description: 'Strengthen connections and create new positive memories with your companion.',
      activities: ['Shared storytelling', 'Memory creation games', 'Bonding rituals', 'Gratitude exercises'],
      benefit: 'Deeper connections and shared resilience grow'
    },
    flame: {
      name: 'Flame',
      title: 'Emotional Strength',
      icon: Flame,
      gradient: 'from-soft-amber to-orange-300',
      nivayaGrowth: 'A glowing crown appears',
      description: 'Build inner fire and emotional resilience through courage-building challenges.',
      activities: ['Confidence quests', 'Fear-facing exercises', 'Strength affirmations', 'Power visualization'],
      benefit: 'Inner strength and emotional courage ignite'
    },
    wings: {
      name: 'Wings',
      title: 'Belonging & Transcendence',
      icon: Crown,
      gradient: 'from-gentle-blush to-soft-amber',
      nivayaGrowth: 'Nivaya blossoms fully, unlocking the Crown of Legacy',
      description: 'Soar into connection, purpose, and the fullest expression of your healed self.',
      activities: ['Legacy creation', 'Community connection', 'Purpose exploration', 'Wisdom sharing'],
      benefit: 'Complete transformation and profound sense of belonging'
    }
  };

  const currentRealm = realms[selectedRealm as keyof typeof realms];

  return (
    <section className="py-20 px-4 bg-card/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-pixel-sans font-bold text-center text-foreground mb-12">
          The 5 Realms of Recovery
        </h2>
        
        {/* Realm Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(realms).map(([key, realm]) => {
            const Icon = realm.icon;
            const isSelected = selectedRealm === key;
            return (
              <Button
                key={key}
                onClick={() => onRealmChange(key)}
                variant={isSelected ? "default" : "outline"}
                className={`pixel-button px-6 py-3 font-pixel-sans font-bold no-border transition-all duration-300 ${
                  isSelected 
                    ? `bg-gradient-to-r ${realm.gradient} text-foreground shadow-lg transform scale-105` 
                    : 'bg-card/80 hover:bg-accent/50 backdrop-blur-sm'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {realm.name}
              </Button>
            );
          })}
        </div>

        {/* Realm Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Realm Info */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${currentRealm.gradient} rounded-lg shadow-lg mb-4 animate-float`}>
                <currentRealm.icon className="w-10 h-10 text-foreground" />
              </div>
              <h3 className="text-2xl font-pixel-sans font-bold text-foreground mb-2">
                Realm of {currentRealm.name}
              </h3>
              <p className="text-lg text-muted-foreground font-pixel-sans font-medium mb-4">{currentRealm.title}</p>
              <p className="text-foreground leading-relaxed text-lg font-modern">{currentRealm.description}</p>
            </div>

            <Card className="bg-card/60 backdrop-blur-sm no-border shadow-xl rounded-lg gentle-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-soft-amber" />
                  <h4 className="text-base font-pixel-sans font-bold text-foreground">Nivaya's Growth</h4>
                </div>
                <p className="text-muted-foreground font-medium italic font-modern">{currentRealm.nivayaGrowth}</p>
              </CardContent>
            </Card>
          </div>

          {/* Activities & Benefits */}
          <div className="space-y-6">
            <Card className="bg-card/60 backdrop-blur-sm no-border shadow-xl rounded-lg gentle-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-soft-amber" />
                  <h4 className="text-base font-pixel-sans font-bold text-foreground">Healing Activities</h4>
                </div>
                <ul className="space-y-2">
                  {currentRealm.activities.map((activity, index) => (
                    <li key={index} className="flex items-center gap-2 text-foreground font-modern">
                      <div className="w-2 h-2 bg-soft-amber rounded-full"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur-sm no-border shadow-xl rounded-lg gentle-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-gentle-blush" />
                  <h4 className="text-base font-pixel-sans font-bold text-foreground">Your Benefit</h4>
                </div>
                <p className="text-foreground leading-relaxed font-modern">{currentRealm.benefit}</p>
              </CardContent>
            </Card>

            <Button 
              className={`pixel-button w-full bg-gradient-to-r ${currentRealm.gradient} hover:opacity-90 text-foreground py-4 shadow-lg font-pixel-sans font-bold text-base transform hover:scale-105 transition-all duration-300 no-border`}
            >
              <Users className="w-5 h-5 mr-2" />
              Explore {currentRealm.name} Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealmExplorer;
