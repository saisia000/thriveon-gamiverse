
import React, { useState } from 'react';
import { User, Heart, Users, Gamepad2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsAndStatsSection = () => {
  const [selectedRole, setSelectedRole] = useState('all');

  const handleStartFreeAdventure = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  const stats = [
    { icon: Gamepad2, label: 'Games Played', value: '1,485' },
    { icon: Sparkles, label: 'Fairy Evolutions', value: '712' },
    { icon: Users, label: 'Bonds Strengthened', value: '1,259' },
    { icon: Heart, label: 'Hearts Healed', value: '2,547' }
  ];

  const testimonials = [
    {
      quote: "Our daughter used to zone out after treatments. Now she laughs again—deep belly laughs. ThriveOn brought color back to our days.",
      author: "Maya & Priya, Parents",
      role: 'caregiver'
    },
    {
      quote: "It didn't just lift the brain fog. It gave us a language to heal together—without saying a word. Just play, joy, and tiny victories.",
      author: "Jordan, Partner & Caregiver",
      role: 'caregiver'
    },
    {
      quote: "Every time I logged in, I felt seen. The characters made me feel stronger. The games made me feel alive.",
      author: "Arun, Survivor of Emotional Burnout",
      role: 'survivor'
    },
    {
      quote: "We used to sit in silence after dinner. Now we compete, we cheer, we win together. It's healing, disguised as fun.",
      author: "Leo & Samira, Siblings",
      role: 'loved-one'
    }
  ];

  const filteredTestimonials = selectedRole === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.role === selectedRole);

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto">
        {/* Combined Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-perfect-dark text-foreground mb-4">
            Real Strength from the Innerverse
          </h2>
          <p className="text-lg font-pixel-purl text-primary mb-8">
            <Sparkles className="w-5 h-5 inline mr-2" />
            2,547 have entered the Innerverse — survivors, caregivers, and loved ones
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="gaming-widget p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3 hover:animate-bounce" />
                <div className="text-2xl font-perfect-dark text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-pixel-purl text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Rotating Highlight */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-6 backdrop-blur-sm border border-primary/30 hover:scale-105 transition-all duration-300">
            <p className="text-lg font-pixel-purl text-foreground italic">
              "It was like dopamine therapy—but with giggles, high-fives, and quiet moments that mattered."
            </p>
          </div>
        </div>
        
        {/* Role Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 p-2 gaming-widget rounded-full">
            <Button
              onClick={() => setSelectedRole('all')}
              className={`px-6 py-3 rounded-full font-pixel-purl transition-all duration-300 hover:scale-105 ${
                selectedRole === 'all' 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                  : 'bg-transparent hover:bg-accent/20'
              }`}
            >
              All Voices
            </Button>
            <Button
              onClick={() => setSelectedRole('survivor')}
              className={`px-6 py-3 rounded-full font-pixel-purl transition-all duration-300 hover:scale-105 ${
                selectedRole === 'survivor' 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                  : 'bg-transparent hover:bg-accent/20'
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              Survivors
            </Button>
            <Button
              onClick={() => setSelectedRole('caregiver')}
              className={`px-6 py-3 rounded-full font-pixel-purl transition-all duration-300 hover:scale-105 ${
                selectedRole === 'caregiver' 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                  : 'bg-transparent hover:bg-accent/20'
              }`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Caregivers
            </Button>
            <Button
              onClick={() => setSelectedRole('loved-one')}
              className={`px-6 py-3 rounded-full font-pixel-purl transition-all duration-300 hover:scale-105 ${
                selectedRole === 'loved-one' 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                  : 'bg-transparent hover:bg-accent/20'
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              Loved Ones
            </Button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filteredTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-bubble hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <p className="text-lg text-foreground italic mb-4 leading-relaxed font-pixel-purl">
                "{testimonial.quote}"
              </p>
              <p className="text-primary font-astron-boy text-sm">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={handleStartFreeAdventure}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-pixel-purl text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Free Adventure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndStatsSection;
