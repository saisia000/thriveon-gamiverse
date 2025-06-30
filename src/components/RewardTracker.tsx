
import React from 'react';
import { Trophy, Star, Sparkles, Crown, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const RewardTracker = () => {
  const rewards = [
    {
      invites: 1,
      reward: "Nivaya Sticker Pack",
      icon: Star,
      completed: true,
      color: "text-primary"
    },
    {
      invites: 3,
      reward: "Innerverse Badge",
      icon: Crown,
      completed: false,
      color: "text-secondary"
    },
    {
      invites: 5,
      reward: "+50 Bonus Game Credits",
      icon: Zap,
      completed: false,
      color: "text-primary"
    },
    {
      invites: 10,
      reward: "Beta Family Access + Profile Glow Frame",
      icon: Trophy,
      completed: false,
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="gaming-widget rounded-2xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="founding-badge inline-block mb-4">
                <Sparkles className="w-4 h-4 inline mr-2" />
                You are now a LightSeeker
              </div>
              <h3 className="text-2xl font-perfect-dark text-foreground mb-2">
                Reward Tracker
              </h3>
              <p className="text-lg font-pixel-purl text-primary">
                Bring others to strengthen your healing force
              </p>
            </div>

            <div className="space-y-4">
              {rewards.map((reward, index) => {
                const Icon = reward.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
                      reward.completed 
                        ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30' 
                        : 'bg-background/50 border border-border/30'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      reward.completed 
                        ? 'bg-gradient-to-r from-primary to-secondary' 
                        : 'bg-muted'
                    }`}>
                      {reward.completed ? (
                        <span className="text-white text-lg">✅</span>
                      ) : (
                        <span className="text-muted-foreground text-lg">🔲</span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <span className="text-lg font-pixel-purl text-foreground">
                        Invite {reward.invites} famil{reward.invites === 1 ? 'y' : 'ies'} →{' '}
                        <span className={reward.color}>{reward.reward}</span>
                      </span>
                    </div>
                    
                    <Icon className={`w-6 h-6 ${reward.color} ${reward.completed ? 'animate-sparkle-dance' : ''}`} />
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm font-pixel-purl text-muted-foreground">
                Progress updates automatically as your referrals join the Innerverse
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RewardTracker;
