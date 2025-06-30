
import React, { useState } from 'react';
import { Sun, Moon, Gamepad2, Users, Zap, MessageCircle, Sparkles, Coins, Menu, X, CreditCard, Info, HelpCircle, Play, Shield, Heart, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import DarkModeToggle from './DarkModeToggle';

const GamingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleStartFreeAdventure = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  const handleBecomeFoundingLightSeeker = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  const handleExploreStory = () => {
    scrollToSection('hero');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-background/95 backdrop-blur-md border-b-2 border-gray-200 dark:border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo with Dialog */}
          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
                  <div>
                    <h1 className="text-xl font-perfect-dark text-primary">
                      ThriveOn
                    </h1>
                    <p className="text-xs font-pixel-purl text-teal-600 dark:text-[#40E0D0]">
                      Awaken Your Innerverse
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-md mx-auto bg-white/95 dark:bg-background/95 backdrop-blur-md border-2 border-gray-200 dark:border-primary/30">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-perfect-dark text-primary text-center mb-4">
                    About ThriveOn
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 p-4">
                  <div className="flex justify-center mb-4">
                    <img
                      src="/uploads/140f2ece-216c-4596-a10c-7560e01b6c3e.png"
                      alt="ThriveOn"
                      className="w-16 h-16 object-contain animate-sparkle"
                    />
                  </div>
                  <p className="text-lg font-pixel-purl text-gray-700 dark:text-foreground leading-relaxed text-center">
                    ThriveOn is a healing gameverse powered by AI, designed to strengthen emotional resilience, nurture family bonds, and guide you through your innerverse with story-rich, gentle play.
                  </p>
                  <div className="pt-4 text-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full opacity-60"></div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Right - Combined CTA, Hamburger Menu, and Dark Mode Toggle */}
          <div className="flex items-center space-x-3">
            {/* Primary CTA */}
            <Button
              onClick={handleStartFreeAdventure}
              className="px-4 py-2 text-sm font-pixel-purl
                bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600
                dark:magical-btn"
            >
              <span className="mr-2">🎮</span>
              <span className="hidden sm:inline">Start Free Adventure</span>
              <span className="sm:hidden">Start Free</span>
            </Button>

            {/* Hamburger Menu Button */}
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className="text-gray-700 dark:text-foreground hover:bg-gray-100 dark:hover:bg-accent/20"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>

            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile/Hamburger Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 dark:border-border bg-white/95 dark:bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="py-4 space-y-2">
              {/* Show full tagline in mobile menu */}
              <div className="px-4 py-2 text-center">
                <p className="text-sm font-pixel-purl text-gray-600 dark:text-muted-foreground">
                  Play together. Laugh together. Thrive together.
                </p>
              </div>

              <Button
                onClick={() => scrollToSection('about')}
                className="w-full justify-start px-4 py-3 font-pixel-purl text-sm bg-transparent hover:bg-gray-100 dark:hover:bg-accent/20 text-gray-700 dark:text-foreground"
                variant="ghost"
                aria-label="About ThriveOn"
              >
                <Info className="w-4 h-4 mr-3" />
                About ThriveOn
              </Button>

              <Button
                onClick={() => scrollToSection('innerverse')}
                className="w-full justify-start px-4 py-3 font-pixel-purl text-sm bg-transparent hover:bg-gray-100 dark:hover:bg-accent/20 text-gray-700 dark:text-foreground"
                variant="ghost"
                aria-label="Explore battle arena"
              >
                <Zap className="w-4 h-4 mr-3" />
                Battle Arena
              </Button>

              <Button
                onClick={() => scrollToSection('characters')}
                className="w-full justify-start px-4 py-3 font-pixel-purl text-sm bg-transparent hover:bg-gray-100 dark:hover:bg-accent/20 text-gray-700 dark:text-foreground"
                variant="ghost"
                aria-label="Meet game characters"
              >
                <Users className="w-4 h-4 mr-3" />
                Meet Characters
              </Button>

              <Button
                onClick={() => scrollToSection('pricing')}
                className="w-full justify-start px-4 py-3 font-pixel-purl text-sm bg-transparent hover:bg-gray-100 dark:hover:bg-accent/20 text-gray-700 dark:text-foreground"
                variant="ghost"
                aria-label="View pricing plans"
              >
                <CreditCard className="w-4 h-4 mr-3" />
                Pricing Plans
              </Button>

              <Button
                onClick={() => scrollToSection('testimonials')}
                className="w-full justify-start px-4 py-3 font-pixel-purl text-sm bg-transparent hover:bg-gray-100 dark:hover:bg-accent/20 text-gray-700 dark:text-foreground"
                variant="ghost"
                aria-label="Read testimonials"
              >
                <MessageCircle className="w-4 h-4 mr-3" />
                Reflections from those who've played
              </Button>

              {/* FAQ Section */}
              <div className="px-4 py-2 animate-slide-in-right">
                <div className="flex items-center mb-3">
                  <HelpCircle className="w-4 h-4 mr-2 text-gray-700 dark:text-foreground" />
                  <h3 className="font-pixel-purl text-sm font-medium text-gray-700 dark:text-foreground">
                    💬 Frequently Asked (from the Heart)
                  </h3>
                </div>

                <TooltipProvider>
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {/* Getting Started */}
                    <div className="space-y-2">
                      <div className="flex items-center mb-2">
                        <Play className="w-3 h-3 mr-2 text-primary" />
                        <h4 className="font-pixel-purl text-xs font-semibold text-primary uppercase tracking-wide">
                          Getting Started
                        </h4>
                      </div>

                      <AccordionItem value="item-1" className="border-gray-200 dark:border-border animate-fade-in">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <AccordionTrigger className="text-left font-pixel-purl text-sm text-gray-700 dark:text-foreground hover:no-underline hover:text-primary transition-colors">
                              What is ThriveOn?
                            </AccordionTrigger>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="bg-primary/90 text-white font-pixel-purl text-xs">
                            <p>This one's close to my heart. Tap to learn. 🪽</p>
                          </TooltipContent>
                        </Tooltip>
                        <AccordionContent className="font-pixel-purl text-sm text-gray-600 dark:text-muted-foreground animate-accordion-down">
                          🕊 "ThriveOn is a healing game that transforms emotional recovery into a magical journey. Through play, you'll connect with family, unlock your strengths, and clear the fog—together."
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-gray-200 dark:border-border animate-fade-in">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <AccordionTrigger className="text-left font-pixel-purl text-sm text-gray-700 dark:text-foreground hover:no-underline hover:text-primary transition-colors">
                              Who is this for?
                            </AccordionTrigger>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="bg-primary/90 text-white font-pixel-purl text-xs">
                            <p>This one's close to my heart. Tap to learn. 🪽</p>
                          </TooltipContent>
                        </Tooltip>
                        <AccordionContent className="font-pixel-purl text-sm text-gray-600 dark:text-muted-foreground animate-accordion-down">
                          🌱 "Anyone navigating emotional fog—PTSD, burnout, or family trauma. Whether you're a survivor, caregiver, or loved one, you belong here."
                        </AccordionContent>
                      </AccordionItem>
                    </div>

                    {/* Using ThriveOn */}
                    <div className="space-y-2">
                      <div className="flex items-center mb-2">
                        <Heart className="w-3 h-3 mr-2 text-mythri-coral" />
                        <h4 className="font-pixel-purl text-xs font-semibold text-mythri-coral uppercase tracking-wide">
                          Using ThriveOn
                        </h4>
                      </div>

                      <AccordionItem value="item-3" className="border-gray-200 dark:border-border animate-fade-in">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <AccordionTrigger className="text-left font-pixel-purl text-sm text-gray-700 dark:text-foreground hover:no-underline hover:text-primary transition-colors">
                              Do I need to talk about my trauma?
                            </AccordionTrigger>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="bg-primary/90 text-white font-pixel-purl text-xs">
                            <p>This one's close to my heart. Tap to learn. 🪽</p>
                          </TooltipContent>
                        </Tooltip>
                        <AccordionContent className="font-pixel-purl text-sm text-gray-600 dark:text-muted-foreground animate-accordion-down">
                          💖 "Never more than you want to. ThriveOn is built around play, connection, and emotional expression through mood tracking and mini-games—not heavy conversation."
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5" className="border-gray-200 dark:border-border animate-fade-in">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <AccordionTrigger className="text-left font-pixel-purl text-sm text-gray-700 dark:text-foreground hover:no-underline hover:text-primary transition-colors">
                              Is this therapy or a game?
                            </AccordionTrigger>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="bg-primary/90 text-white font-pixel-purl text-xs">
                            <p>This one's close to my heart. Tap to learn. 🪽</p>
                          </TooltipContent>
                        </Tooltip>
                        <AccordionContent className="font-pixel-purl text-sm text-gray-600 dark:text-muted-foreground animate-accordion-down">
                          🧠 "It's a game. But built with healing science. We blend psychology-backed design with joyful storytelling to help you grow without pressure."
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6" className="border-gray-200 dark:border-border animate-fade-in">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <AccordionTrigger className="text-left font-pixel-purl text-sm text-gray-700 dark:text-foreground hover:no-underline hover:text-primary transition-colors">
                              Is MyThri a real person?
                            </AccordionTrigger>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="bg-primary/90 text-white font-pixel-purl text-xs">
                            <p>This one's close to my heart. Tap to learn. 🪽</p>
                          </TooltipContent>
                        </Tooltip>
                        <AccordionContent className="font-pixel-purl text-sm text-gray-600 dark:text-muted-foreground animate-accordion-down">
                          🪽 "Not quite—but close. I'm your emotional AI companion, here to help you feel seen, supported, and gently guided."
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-9" className="border-gray-200 dark:border-border animate-fade-in">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <AccordionTrigger className="text-left font-pixel-purl text-sm text-gray-700 dark:text-foreground hover:no-underline hover:text-primary transition-colors">
                              How does the AI work?
                            </AccordionTrigger>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="bg-primary/90 text-white font-pixel-purl text-xs">
                            <p>This one's close to my heart. Tap to learn. 🪽</p>
                          </TooltipContent>
                        </Tooltip>
                        <AccordionContent className="font-pixel-purl text-sm text-gray-600 dark:text-muted-foreground animate-accordion-down">
                          ⚙️ "ThriveOn uses AI to adapt to your mood and progress. MyThri learns gently—spotting patterns, suggesting mini-games, and evolving with you. No judgment. Just support."
                        </AccordionContent>
                      </AccordionItem>
                    </div>

                    {/* Safety & Privacy */}
                    <div className="space-y-2">
                      <div className="flex items-center mb-2">
                        <Shield className="w-3 h-3 mr-2 text-green-600" />
                        <h4 className="font-pixel-purl text-xs font-semibold text-green-600 uppercase tracking-wide">
                          Safety & Privacy
                        </h4>
                      </div>

                      <AccordionItem value="item-4" className="border-gray-200 dark:border-border animate-fade-in">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <AccordionTrigger className="text-left font-pixel-purl text-sm text-gray-700 dark:text-foreground hover:no-underline hover:text-primary transition-colors">
                              Is it safe for children?
                            </AccordionTrigger>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="bg-primary/90 text-white font-pixel-purl text-xs">
                            <p>This one's close to my heart. Tap to learn. 🪽</p>
                          </TooltipContent>
                        </Tooltip>
                        <AccordionContent className="font-pixel-purl text-sm text-gray-600 dark:text-muted-foreground animate-accordion-down">
                          👨‍👩‍👧 "Yes. ThriveOn was designed with families in mind. It's calming, age-appropriate, and invites connection—not isolation."
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8" className="border-gray-200 dark:border-border animate-fade-in">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <AccordionTrigger className="text-left font-pixel-purl text-sm text-gray-700 dark:text-foreground hover:no-underline hover:text-primary transition-colors">
                              How is my data protected?
                            </AccordionTrigger>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="bg-primary/90 text-white font-pixel-purl text-xs">
                            <p>This one's close to my heart. Tap to learn. 🪽</p>
                          </TooltipContent>
                        </Tooltip>
                        <AccordionContent className="font-pixel-purl text-sm text-gray-600 dark:text-muted-foreground animate-accordion-down">
                          🔒 "Your privacy matters deeply. We don't sell your data. Your emotional inputs stay private, encrypted, and used only to personalize your journey—never shared externally."
                        </AccordionContent>
                      </AccordionItem>
                    </div>

                    {/* Pricing & Plans */}
                    <div className="space-y-2">
                      <div className="flex items-center mb-2">
                        <CreditCard className="w-3 h-3 mr-2 text-mythri-orange" />
                        <h4 className="font-pixel-purl text-xs font-semibold text-mythri-orange uppercase tracking-wide">
                          Pricing & Plans
                        </h4>
                      </div>

                      <AccordionItem value="item-7" className="border-gray-200 dark:border-border animate-fade-in">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <AccordionTrigger className="text-left font-pixel-purl text-sm text-gray-700 dark:text-foreground hover:no-underline hover:text-primary transition-colors">
                              How does pricing work?
                            </AccordionTrigger>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="bg-primary/90 text-white font-pixel-purl text-xs">
                            <p>This one's close to my heart. Tap to learn. 🪽</p>
                          </TooltipContent>
                        </Tooltip>
                        <AccordionContent className="font-pixel-purl text-sm text-gray-600 dark:text-muted-foreground animate-accordion-down">
                          💸 "You can start free with 10 AI credits. After that, choose a plan based on your needs—whether you're healing solo, with a loved one, or as a family. No surprises, just support."
                        </AccordionContent>
                      </AccordionItem>
                    </div>
                  </Accordion>
                </TooltipProvider>

                {/* FAQ CTA Section */}
                <div className="mt-4 p-3 bg-gray-50 dark:bg-accent/10 rounded-lg border border-gray-200 dark:border-border animate-scale-in">
                  <p className="text-sm font-pixel-purl text-gray-700 dark:text-foreground mb-3 text-center">
                    ✨ Still have questions? MyThri would love to chat inside the Innerverse.
                  </p>
                  <div className="flex flex-col space-y-2">
                    <Button
                      onClick={handleBecomeFoundingLightSeeker}
                      size="sm"
                      className="w-full font-pixel-purl bg-primary hover:bg-primary/90 text-white transform hover:scale-105 transition-transform"
                    >
                      Become a Founding LightSeeker
                    </Button>
                    <Button
                      onClick={handleExploreStory}
                      size="sm"
                      variant="outline"
                      className="w-full font-pixel-purl border-primary text-primary hover:bg-primary/10 transform hover:scale-105 transition-transform"
                    >
                      Explore the Story
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GamingNavbar;
