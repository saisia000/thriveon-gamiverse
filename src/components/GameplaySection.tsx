
import React, { useState } from 'react';
import { MessageCircle, Brain, Sun, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GameplaySection = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Chat with MyThri',
      icon: MessageCircle,
      description: 'Share how you feel through emoji-based check-ins and gentle support from your AI guide',
      color: 'from-[#40E0D0] to-[#20B2AA]'
    },
    {
      id: 2,
      title: 'Select Realm & Companion',
      icon: Users,
      description: 'Play solo or invite someone. Choose your healing path—private reflection or shared experience',
      color: 'from-[#FF6B35] to-[#FF7F50]'
    },
    {
      id: 3,
      title: 'Play & Evolve',
      icon: Sun,
      description: 'Level up with mini-games that build emotional strength and awaken your family\'s healing force',
      color: 'from-[#40E0D0] to-[#FF6B35]'
    }
  ];

  return (
    <section id="gameplay" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-perfect-dark text-foreground mb-4">
            Your Healing Journey Starts Here
          </h2>
          <p className="text-lg font-pixel-purl text-muted-foreground">
            Three simple steps to emotional clarity—guided by light, story, and play
          </p>
        </div>
        
        {/* Step Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 p-2 gaming-widget rounded-full">
            {steps.map((step) => (
              <Button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`px-6 py-3 rounded-full font-pixel-purl transition-all duration-300 ${
                  currentStep === step.id 
                    ? `bg-gradient-to-r ${step.color} text-white shadow-lg` 
                    : 'bg-transparent hover:bg-accent/20'
                }`}
              >
                Step {step.id}
              </Button>
            ))}
          </div>
        </div>

        {/* Step Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="gaming-widget p-8 rounded-2xl">
            <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center bg-gradient-to-r ${steps[currentStep - 1].color}`}>
              {React.createElement(steps[currentStep - 1].icon, {
                className: "w-10 h-10 text-white"
              })}
            </div>
            <h3 className="text-2xl font-astron-boy text-center text-foreground mb-4">
              {steps[currentStep - 1].title}
            </h3>
            <p className="text-lg text-foreground leading-relaxed font-pixel-purl text-center">
              {steps[currentStep - 1].description}
            </p>
          </div>

          <div className="gaming-widget p-8 rounded-2xl">
            <h4 className="text-xl font-astron-boy text-foreground mb-4">
              Game Features
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-primary" />
                <span className="font-pixel-purl">Emoji-based mood tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-primary" />
                <span className="font-pixel-purl">Personalized mini-games</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-pixel-purl">Solo or cooperative play</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sun className="w-5 h-5 text-primary" />
                <span className="font-pixel-purl">Character evolution system</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameplaySection;
