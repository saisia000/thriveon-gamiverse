
import React, { useState } from 'react';
import { Crown, Sparkles, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WaitlistSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    role: 'survivor',
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJoinAirtable = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email && formData.consent) {
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="gaming-widget p-12 rounded-2xl">
            <CardContent className="space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center animate-sparkle-dance">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-perfect-dark text-foreground">
                You're now part of the Founding 100
              </h3>
              <p className="text-lg font-pixel-purl text-primary">
                Your legacy begins. Welcome to the Innerverse!
              </p>
              <div className="founding-badge inline-block">
                <Crown className="w-4 h-4 inline mr-2" />
                Founding Light Member
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Waitlist Form */}
        <div className="text-center mb-12">
          <div className="founding-badge inline-block mb-6">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Join the First 100
          </div>
          <h2 className="text-4xl md:text-5xl font-perfect-dark text-foreground mb-4">
            Crown Me with Magic
          </h2>
          <p className="text-lg font-pixel-purl text-muted-foreground">
            Secure your place among the Founding Light Members
          </p>
        </div>

        <Card className="gaming-widget p-8 rounded-2xl">
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-pixel-purl text-foreground mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full p-3 rounded-lg border-2 border-border bg-background font-pixel-purl focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-pixel-purl text-foreground mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-3 rounded-lg border-2 border-border bg-background font-pixel-purl focus:border-primary focus:outline-none transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-pixel-purl text-foreground mb-2">
                  Your Role in the Journey
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="w-full p-3 rounded-lg border-2 border-border bg-background font-pixel-purl focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="survivor">Survivor</option>
                  <option value="caregiver">Caregiver</option>
                  <option value="loved-one">Loved One</option>
                </select>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => handleInputChange('consent', e.target.checked)}
                  className="mt-1 w-4 h-4 text-primary bg-background border-2 border-border rounded focus:ring-primary focus:ring-2"
                  required
                />
                <label htmlFor="consent" className="text-sm font-pixel-purl text-foreground leading-relaxed">
                  I consent to receive updates about ThriveOn's magical journey and early access opportunities
                </label>
              </div>

              <div className="text-center pt-4">
                <Button 
                  onClick={handleJoinAirtable}
                  className="magical-btn px-8 py-4 text-lg"
                  disabled={!formData.firstName || !formData.email || !formData.consent}
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Crown Me with Magic
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistSection;
