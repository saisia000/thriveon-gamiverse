
import React, { useState } from 'react';
import { Gift, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const EmailCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJoinAirtable = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="gaming-widget p-8 rounded-2xl">
          {/* Gift Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center animate-pulse">
              <Gift className="w-8 h-8 text-white" />
            </div>
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-perfect-dark text-foreground mb-4">
            🎁 Want a Free Sample Before You Dive In?
          </h2>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl font-pixel-purl text-muted-foreground mb-2 leading-relaxed max-w-3xl mx-auto">
            Get the first chapter of the ThriveOn story—sent straight to your inbox
          </p>
          <p className="text-lg md:text-xl font-pixel-purl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            💌 A peek inside the world of healing, imagination, and courage
          </p>
          
          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 font-pixel-purl"
                  required
                />
                <Button 
                  onClick={handleJoinAirtable}
                  className="magical-btn px-6 py-3"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me the First Chapter
                </Button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-primary animate-spin" />
              </div>
              <p className="text-xl font-pixel-purl text-primary">
                Thank you! Your first chapter is on its way to your inbox
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailCaptureSection;
