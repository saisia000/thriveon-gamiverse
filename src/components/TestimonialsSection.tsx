
import React, { useState } from 'react';
import { User, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [selectedRole, setSelectedRole] = useState('all');

  const testimonials = [
    {
      quote: "Our daughter used to zone out after treatments. Now she laughs again—deep belly laughs. ThriveOn brought color back to our days.",
      author: "Samira & Jay, Parents",
      role: 'caregiver',
      realm: 'memory'
    },
    {
      quote: "It didn't just lift the brain fog. It gave us a language to heal together—without saying a word. Just play, joy, and tiny victories.",
      author: "Jordan, Partner & Caregiver",
      role: 'caregiver',
      realm: 'fog'
    },
    {
      quote: "Every time I logged in, I felt seen. The characters made me feel stronger. The games made me feel alive.",
      author: "Ana, Survivor of Emotional Burnout",
      role: 'survivor',
      realm: 'wings'
    },
    {
      quote: "We used to sit in silence after dinner. Now we compete, we cheer, we win together. It's healing, disguised as fun.",
      author: "Leo & Samira, Siblings",
      role: 'loved-one',
      realm: 'memory'
    }
  ];

  const filteredTestimonials = selectedRole === 'all'
    ? testimonials
    : testimonials.filter(t => t.role === selectedRole);

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-perfect-dark text-center text-foreground mb-4">
          Real Strength from the Innerverse
        </h2>

        {/* Rotating Highlight */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-6 backdrop-blur-sm border border-primary/30">
            <p className="text-lg font-pixel-purl text-foreground italic animate-pulse">
              "It was like dopamine therapy—but with giggles, high-fives, and quiet moments that mattered."
            </p>
          </div>
        </div>

        {/* Role Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 p-2 gaming-widget rounded-full">
            <Button
              onClick={() => setSelectedRole('all')}
              className={`px-6 py-3 rounded-full font-pixel-purl transition-all duration-300 ${selectedRole === 'all'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-transparent hover:bg-accent/20'
                }`}
            >
              All Voices
            </Button>
            <Button
              onClick={() => setSelectedRole('survivor')}
              className={`px-6 py-3 rounded-full font-pixel-purl transition-all duration-300 ${selectedRole === 'survivor'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-transparent hover:bg-accent/20'
                }`}
            >
              <User className="w-4 h-4 mr-2" />
              Survivors
            </Button>
            <Button
              onClick={() => setSelectedRole('caregiver')}
              className={`px-6 py-3 rounded-full font-pixel-purl transition-all duration-300 ${selectedRole === 'caregiver'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-transparent hover:bg-accent/20'
                }`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Caregivers
            </Button>
            <Button
              onClick={() => setSelectedRole('loved-one')}
              className={`px-6 py-3 rounded-full font-pixel-purl transition-all duration-300 ${selectedRole === 'loved-one'
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
        <div className="grid md:grid-cols-2 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-bubble">
              <p className="text-lg text-foreground italic mb-4 leading-relaxed font-pixel-purl">
                "{testimonial.quote}"
              </p>
              <p className="text-primary font-astron-boy text-sm">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
