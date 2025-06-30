import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VisualizeHealingSection = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
            <div className="max-w-4xl mx-auto text-center">
                <div className="gaming-widget p-8 rounded-2xl">
                    {/* Sparkles Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center animate-pulse">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl font-perfect-dark text-foreground mb-4">
                        ✨ Visualize Your Healing Journey ✨
                    </h2>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl font-pixel-purl text-muted-foreground mb-2 leading-relaxed max-w-3xl mx-auto">
                        Create a magical visualization of your personal Brain World—
                        complete with memory islands, neural bridges, and healing safe zones
                    </p>
                    <p className="text-lg md:text-xl font-pixel-purl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto italic">
                        Your imagination… brought to life ✨
                    </p>

                    {/* CTA */}
                    <Button
                        onClick={() => window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank')}
                        className="magical-btn px-8 py-3"
                    >
                        🧠 Create My Brain World
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default VisualizeHealingSection;
