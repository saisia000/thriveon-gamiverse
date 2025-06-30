
import React, { useState } from 'react';
import { Mail, User, Sparkles, Heart, Users, Crown, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    userType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const userTypes = [
    { value: 'survivor', label: 'Survivor', icon: Heart },
    { value: 'caregiver', label: 'Caregiver', icon: Users },
    { value: 'loved-one', label: 'Loved One', icon: Sparkles }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.userType) {
      toast({
        title: "Please fill in all fields",
        description: "We need your name, email, and to know who you are in this journey.",
        variant: "destructive"
      });
      return;
    }

    console.log('Waitlist submission:', formData);
    setIsSubmitted(true);
    
    toast({
      title: "Welcome to the Founding 100! ✨",
      description: "Your light will help shape the Innerverse. We'll be in touch soon.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4 social-proof">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="card-3d shadow-2xl rounded-lg magical-sparkle">
            <CardContent className="p-12">
              <div className="w-20 h-20 brand-gradient-primary rounded-lg mx-auto mb-6 flex items-center justify-center animate-float brand-glow-blue">
                <Crown className="w-10 h-10 text-white animate-pulse" />
              </div>
              <Badge className="founding-badge mb-4">
                <Trophy className="w-3 h-3 mr-1" />
                Founding Player #47
              </Badge>
              <h3 className="text-2xl font-pixel-sans font-bold text-foreground mb-4">
                You've Joined the Founding 100
              </h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed font-modern">
                Your light will help shape the Innerverse. We'll be in touch soon with early access 
                and the chance to help us create something truly magical.
              </p>
              <p className="text-muted-foreground font-pixel-sans font-bold italic">
                Thank you for believing in the power of healing through play.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 social-proof">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="founding-badge mb-4">
            <Crown className="w-3 h-3 mr-1" />
            Founding 100 - Limited Time
          </Badge>
          <h2 className="text-3xl md:text-4xl font-pixel-sans font-bold text-foreground mb-6">
            Become a Founding Player
          </h2>
          <p className="text-xl text-foreground leading-relaxed font-modern mb-4">
            Be among the first to experience ThriveOn and help us create a healing space 
            that truly serves your needs.
          </p>
          <p className="text-sm font-pixel-sans text-[#40E0D0] font-bold">
            <Trophy className="w-4 h-4 inline mr-1" />
            Only 53 spots remaining for early access & legacy perks
          </p>
        </div>

        <Card className="card-3d shadow-2xl rounded-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-base font-pixel-sans font-bold text-foreground">
                  First Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#40E0D0]" />
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="What should MyThri call you?"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="pl-10 py-3 text-lg no-border bg-background/50 focus:bg-background/80 font-modern border-[#40E0D0]/20 focus:border-[#40E0D0]/50"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-pixel-sans font-bold text-foreground">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#40E0D0]" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="pl-10 py-3 text-lg no-border bg-background/50 focus:bg-background/80 font-modern border-[#40E0D0]/20 focus:border-[#40E0D0]/50"
                  />
                </div>
              </div>

              {/* User Type */}
              <div className="space-y-4">
                <Label className="text-base font-pixel-sans font-bold text-foreground">
                  Who are you in this journey?
                </Label>
                <div className="grid gap-3">
                  {userTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = formData.userType === type.value;
                    
                    return (
                      <Button
                        key={type.value}
                        type="button"
                        onClick={() => handleInputChange('userType', type.value)}
                        variant="outline"
                        className={`button-3d justify-start h-auto p-4 no-border transition-all duration-300 font-pixel-sans font-bold ${
                          isSelected
                            ? 'brand-gradient-primary text-white brand-glow-blue'
                            : 'bg-card/80 hover:bg-accent/50 backdrop-blur-sm border-[#40E0D0]/20'
                        }`}
                      >
                        <Icon className={`w-5 h-5 mr-3 ${isSelected ? 'text-white' : 'text-[#40E0D0]'}`} />
                        <span className="text-base">{type.label}</span>
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="cta-primary button-3d w-full py-4 shadow-lg font-pixel text-white transform hover:scale-105 transition-all duration-300 no-border"
              >
                <Crown className="w-5 h-5 mr-2" />
                Become a Founding Player
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground font-modern">
                By joining, you'll receive early access, legacy perks, and the opportunity to help shape ThriveOn 
                into the healing experience our community truly needs.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistForm;
