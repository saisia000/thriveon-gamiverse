
import React from 'react';
import { Hammer, CheckCircle, Clock, Vote, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BuildWithUsWidget = () => {
  const progressItems = [
    {
      task: "Realm of Fog prototype coming soon",
      status: "in-progress",
      icon: Clock
    },
    {
      task: "Family profile authentication live",
      status: "completed",
      icon: CheckCircle
    },
    {
      task: "Nivaya and Slogh characters ready",
      status: "completed",
      icon: CheckCircle
    },
    {
      task: "Referral engine in testing",
      status: "in-progress",
      icon: Clock
    },
    {
      task: "AI coaching system development",
      status: "planned",
      icon: Clock
    }
  ];

  const handleVoteClick = () => {
    window.open('https://forms.google.com/vote-thriveon-features', '_blank');
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="gaming-widget rounded-2xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="founding-badge inline-block mb-4">
                <Hammer className="w-4 h-4 inline mr-2" />
                Building in Public
              </div>
              <h3 className="text-2xl font-perfect-dark text-foreground mb-2">
                We're Building This In Public
              </h3>
              <p className="text-lg font-pixel-purl text-primary">
                Watch our progress and help shape what comes next
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {progressItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 border border-border/30"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.status === 'completed' 
                        ? 'bg-gradient-to-r from-primary to-secondary' 
                        : item.status === 'in-progress'
                        ? 'bg-secondary/20 border-2 border-secondary'
                        : 'bg-muted'
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        item.status === 'completed' 
                          ? 'text-white' 
                          : item.status === 'in-progress'
                          ? 'text-secondary animate-pulse'
                          : 'text-muted-foreground'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <span className="text-lg font-pixel-purl text-foreground">
                        {item.task}
                      </span>
                    </div>
                    
                    <Badge variant={
                      item.status === 'completed' ? 'default' :
                      item.status === 'in-progress' ? 'secondary' : 'outline'
                    }>
                      {item.status === 'completed' ? 'Live' :
                       item.status === 'in-progress' ? 'Building' : 'Planned'}
                    </Badge>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Button onClick={handleVoteClick} className="magical-btn">
                <Vote className="w-4 h-4 mr-2" />
                Vote on what we build next
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-sm font-pixel-purl text-muted-foreground mt-3">
                Your voice shapes the Innerverse Help us prioritize features that matter most to healing families
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BuildWithUsWidget;
