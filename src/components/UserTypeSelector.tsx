
import React, { useState } from 'react';
import { Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UserTypeSelectorProps {
  onUserTypeChange: (userType: 'survivor' | 'caregiver' | 'loved-one' | null) => void;
}

const UserTypeSelector = ({ onUserTypeChange }: UserTypeSelectorProps) => {
  const [selectedType, setSelectedType] = useState<'survivor' | 'caregiver' | 'loved-one' | null>(null);

  const userTypes = [
    {
      key: 'survivor' as const,
      label: 'Survivor',
      description: ['I am navigating my own', 'cancer journey'],
      gradient: 'brand-gradient-primary',
      useImage: true,
      imageSrc: '/uploads/782a08b5-9ff8-4891-8a2f-38a3227a50be.png',
      imageAlt: 'Survivor'
    },
    {
      key: 'caregiver' as const,
      label: 'Caregiver',
      icon: Users,
      description: ['I am supporting someone', 'through their journey'],
      gradient: 'brand-gradient-secondary',
      useImage: true,
      imageSrc: '/uploads/dfa7e883-7a6c-469f-a369-836bb9b74aa7.png',
      imageAlt: 'Caregiver'
    },
    {
      key: 'loved-one' as const,
      label: 'Loved One',
      icon: Sparkles,
      description: ['I am connected to someone', 'affected by cancer'],
      gradient: 'brand-gradient-primary',
      useImage: true,
      imageSrc: '/uploads/56d533c3-0bd8-4689-a1ce-3e2ec716f371.png',
      imageAlt: 'Loved One'
    }
  ];

  const handleSelection = (type: 'survivor' | 'caregiver' | 'loved-one') => {
    setSelectedType(type);
    onUserTypeChange(type);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h3 className="text-xl font-pixel font-bold text-center text-foreground mb-8 widget-3d">
        Who are you in this journey?
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {userTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.key;

          return (
            <Button
              key={type.key}
              onClick={() => handleSelection(type.key)}
              variant="outline"
              className={`card-3d pixel-button h-auto p-4 no-border transition-all duration-300 gentle-hover min-h-[220px] w-full ${isSelected
                  ? `${type.gradient} text-white shadow-lg transform scale-105 brand-glow-blue`
                  : 'bg-card/80 hover:bg-accent/50 backdrop-blur-sm border-[#40E0D0]/20'
                }`}
            >
              <div className="text-center space-y-3 w-full flex flex-col items-center h-full">
                <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center widget-3d ${isSelected ? 'bg-white/20' : 'bg-[#40E0D0]/10'
                  }`}>
                  {type.useImage ? (
                    <img
                      src={type.imageSrc}
                      alt={type.imageAlt}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-[#40E0D0]'}`} />
                  )}
                </div>
                <div className="space-y-2 flex-1 flex flex-col justify-center">
                  <h4 className={`text-sm font-pixel font-bold ${isSelected ? 'text-white' : 'text-foreground'}`}>
                    {type.label}
                  </h4>
                  <div className={`text-xs font-pixel leading-tight text-center ${isSelected ? 'text-white/90' : 'text-muted-foreground'}`}>
                    <p>{type.description[0]}</p>
                    <p>{type.description[1]}</p>
                  </div>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default UserTypeSelector;
