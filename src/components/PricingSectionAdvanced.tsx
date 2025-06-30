
import React from 'react';
import { Crown, Sparkles, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PricingSectionAdvanced = () => {
  const handleJoinAirtable = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  const plans = [
    {
      id: 'first-light',
      name: 'First Light',
      description: 'Try ThriveOn. No risk, all heart.',
      price: 'Free',
      icon: Sparkles,
      features: ['10 AI quests', 'Single player', 'Intro chapter'],
      gradient: 'from-gray-400 to-gray-600',
      isFree: true
    },
    {
      id: 'heart-sync',
      name: 'Heart Sync',
      description: 'For families ready to grow closer through play.',
      price: '$19.99/month',
      icon: Users,
      features: ['Unlimited AI play', 'Up to 4 users', 'Family dashboard'],
      gradient: 'from-blue-400 to-blue-600',
      popular: true
    },
    {
      id: 'soul-link',
      name: 'Soul Link',
      description: 'Unlimited healing for unlimited hearts.',
      price: '$39.99/month',
      icon: Crown,
      features: ['Everything from Heart Sync', 'Exclusive features', 'Early unlocks'],
      gradient: 'from-primary to-secondary'
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-perfect-dark text-foreground mb-4">
            Choose How You Want to Thrive
          </h2>
          <p className="text-lg font-pixel-purl text-muted-foreground mb-8">
            Start with 10 free AI-powered quests, then unlock your full potential with plans that grow with your needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div key={plan.id} className="relative">
                {plan.popular && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-transparent border-2 border-primary/50 px-3 py-1 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                      <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x font-pixel-purl">
                        Most Popular
                      </span>
                    </Badge>
                  </div>
                )}
                <Card 
                  className={`gaming-widget rounded-2xl h-full transition-all duration-300 hover:shadow-xl ${
                    plan.popular ? 'ring-2 ring-primary/30 shadow-lg transform scale-105' : 'hover:scale-102'
                  }`}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r ${plan.gradient} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-perfect-dark text-foreground mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-sm font-pixel-purl text-muted-foreground mb-4">
                      {plan.description}
                    </p>
                    
                    <div className="text-3xl font-perfect-dark text-primary mb-6">
                      {plan.price}
                    </div>
                    
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-sm font-pixel-purl text-foreground flex items-center">
                          <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={handleJoinAirtable}
                      className="magical-btn w-full"
                      aria-label={`Choose ${plan.name} plan`}
                    >
                      {plan.isFree ? 'Start Free Adventure' : 'Start Free Adventure'}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg font-pixel-purl text-muted-foreground mb-6">
            All plans include our core promise: helping you reconnect and thrive together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleJoinAirtable}
              className="magical-btn px-8 py-4"
              aria-label="Start with free plan"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Free Adventure
            </Button>
            <Button 
              variant="outline"
              onClick={handleJoinAirtable}
              className="px-8 py-4 border-2 border-primary/50 text-primary hover:bg-primary hover:text-white"
              aria-label="Send me the first chapter"
            >
              <Users className="w-5 h-5 mr-2" />
              Send Me the First Chapter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSectionAdvanced;

