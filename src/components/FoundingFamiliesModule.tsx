import React, { useState } from 'react';
import { Crown, Users, Share2, Mail, MessageCircle, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

const FoundingFamiliesModule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    role: 'survivor'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referralLink] = useState(`https://thriveon.app/join?ref=${Math.random().toString(36).substr(2, 9)}`);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      toast({
        title: "Please fill in all fields",
        description: "We need your name and email to create your founding family account.",
        variant: "destructive"
      });
      return;
    }
    
    console.log('Founding family submission:', formData);
    setIsSubmitted(true);
    toast({
      title: "Welcome to the Founding Families! ✨",
      description: "You're now part of the first 500 families. Check your referral rewards below!",
    });
  };

  const handleShare = (platform: string) => {
    const message = "Join me in the ThriveOn Innerverse - a healing game for families facing cancer. Be among the first 500 founding families!";
    
    switch (platform) {
      case 'email':
        window.location.href = `mailto:?subject=Join ThriveOn Innerverse&body=${message} ${referralLink}`;
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(message + ' ' + referralLink)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(referralLink);
        toast({ title: "Link copied!", description: "Share it with families who need healing." });
        break;
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-12 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="gaming-widget p-8 rounded-2xl">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center animate-sparkle-dance">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-perfect-dark text-foreground">
                You're in! Invite 3 families to unlock your Innerverse Guardian Badge.
              </h3>
              
              <div className="space-y-4">
                <p className="text-lg font-pixel-purl text-primary">Your unique referral link:</p>
                <div className="flex items-center space-x-2 p-3 bg-background/50 rounded-lg">
                  <code className="flex-1 text-sm font-mono text-foreground">{referralLink}</code>
                  <Button onClick={() => handleShare('copy')} size="sm" variant="outline">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <Button onClick={() => handleShare('email')} className="magical-btn">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                  <Button onClick={() => handleShare('whatsapp')} className="magical-btn">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button onClick={() => handleShare('copy')} className="magical-btn">
                    <Share2 className="w-4 h-4 mr-2" />
                    Copy Link
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="founding-badge inline-block mb-6">
          <Users className="w-4 h-4 inline mr-2" />
          Founding Families of ThriveOn – Join the Legacy
        </div>
        
        <h2 className="text-3xl md:text-4xl font-perfect-dark text-foreground mb-6">
          Be Among the First 500 Families
        </h2>
        
        <p className="text-lg font-pixel-purl text-muted-foreground mb-8 leading-relaxed">
          Be among the first 500 families to enter the Innerverse<br />
          Get early perks, exclusive badges, and surprise bonuses when you refer others on the same healing journey
        </p>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button className="magical-btn px-8 py-4 text-lg">
              <Crown className="w-5 h-5 mr-2" />
              Join Waitlist
            </Button>
          </DialogTrigger>
          <DialogContent className="gaming-widget">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-perfect-dark text-foreground mb-2">
                  Join the Founding Families
                </h3>
                <p className="text-sm font-pixel-purl text-muted-foreground">
                  Secure your place among the first 500 families
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-pixel-purl text-foreground">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="mt-1 font-pixel-purl"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-pixel-purl text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="mt-1 font-pixel-purl"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <Label htmlFor="role" className="text-sm font-pixel-purl text-foreground">
                    Your Role
                  </Label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                    className="w-full mt-1 p-3 rounded-lg border-2 border-border bg-background font-pixel-purl focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="survivor">Survivor</option>
                    <option value="caregiver">Caregiver</option>
                    <option value="loved-one">Loved One</option>
                  </select>
                </div>
              </div>

              <Button type="submit" className="magical-btn w-full py-3">
                <Crown className="w-4 h-4 mr-2" />
                Join the Founding Families
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FoundingFamiliesModule;
