import React, { useState } from 'react';
import { Zap, Brain, Eye, Clock, Target, Layers, Heart, Shield, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GameEngine from './GameEngine';
import { toast } from 'sonner';

const InnerverseBattleSection = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [sloghHealth, setSloghHealth] = useState(100);
  const [nivayaPower, setNivayaPower] = useState(25);
  const [selectedChallenge, setSelectedChallenge] = useState('pattern');
  const [showGame, setShowGame] = useState(false);
  const [playerCredits, setPlayerCredits] = useState(10);
  const [gamesWon, setGamesWon] = useState(0);
  const [gamesLost, setGamesLost] = useState(0);

  const challengeTypes = {
    pattern: {
      name: 'Pattern Recognition',
      description: 'Break through Slogh\'s confusion with clarity patterns',
      icon: Eye,
      gradient: 'from-primary via-primary/80 to-secondary'
    },
    memory: {
      name: 'Memory Sequences',
      description: 'Recover lost memories from the fog',
      icon: Brain,
      gradient: 'from-secondary via-primary/60 to-primary'
    },
    attention: {
      name: 'Attention Training',
      description: 'Focus your mind through the mental haze',
      icon: Target,
      gradient: 'from-primary/80 via-secondary/70 to-primary/90'
    },
    speed: {
      name: 'Processing Speed',
      description: 'Quick thinking to outmaneuver brain fog',
      icon: Clock,
      gradient: 'from-secondary/90 via-primary/70 to-secondary'
    },
    executive: {
      name: 'Executive Function',
      description: 'Complex multi-step challenges for mental strength',
      icon: Layers,
      gradient: 'from-primary via-secondary/80 to-primary/70'
    }
  };

  const handleStartFreeAdventure = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  const handleSendFirstChapter = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  const handleBecomeFoundingLightSeeker = () => {
    window.open('https://airtable.com/appKppZ3IlrdRyTaH/pagoOQR0u3cbkwf7D/form', '_blank');
  };

  const handleExploreHealing = () => {
    const innerverseSection = document.getElementById('innerverse');
    if (innerverseSection) {
      innerverseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGenerateChallenge = () => {
    if (playerCredits < 1) {
      toast.error("Not enough AI Credits! Complete challenges to earn more");
      return;
    }

    setPlayerCredits(prev => prev - 1);
    setShowGame(true);
    toast.success(`Starting ${challengeTypes[selectedChallenge as keyof typeof challengeTypes].name} challenge!`);
  };

  const handleGameWin = () => {
    const healthReduction = Math.min(20, sloghHealth);
    const powerIncrease = Math.min(15, 100 - nivayaPower);

    setSloghHealth(prev => Math.max(0, prev - healthReduction));
    setNivayaPower(prev => Math.min(100, prev + powerIncrease));
    setGamesWon(prev => prev + 1);
    setPlayerCredits(prev => prev + 2); // Reward for winning

    if (gamesWon + 1 % 3 === 0) {
      setCurrentLevel(prev => prev + 1);
      toast.success(`Level up! You are now level ${currentLevel + 1}`);
    }

    toast.success("Victory! Nivaya grows stronger and Slogh weakens!");

    if (sloghHealth - healthReduction <= 0) {
      toast.success("🎉 Incredible! You've defeated Slogh and restored balance to the Innerverse!");
    }
  };

  const handleGameLose = () => {
    const powerDecrease = Math.min(10, nivayaPower);
    setNivayaPower(prev => Math.max(0, prev - powerDecrease));
    setGamesLost(prev => prev + 1);
    setPlayerCredits(prev => prev + 1); // Small reward for trying
    toast.error("The shadows grow stronger, but don't give up! Try again!");
  };

  const handleCloseGame = () => {
    setShowGame(false);
  };

  return (
    <section id="innerverse" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-perfect-dark text-foreground mb-4">
            Battle for the Innerverse
          </h2>
          <p className="text-lg font-pixel-purl text-muted-foreground mb-8">
            Face Slogh in AI-powered cognitive challenges Each victory strengthens Nivaya and clears the fog
          </p>

          {/* Player Stats */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="gaming-widget px-4 py-2 rounded-full flex items-center space-x-2">
              <Coins className="w-5 h-5 text-primary" />
              <span className="font-pixel-purl text-foreground">{playerCredits}</span>
              <span className="font-pixel-purl text-muted-foreground text-sm">AI Credits</span>
            </div>
            <div className="gaming-widget px-4 py-2 rounded-full flex items-center space-x-2">
              <span className="font-pixel-purl text-green-400">Won: {gamesWon}</span>
              <span className="font-pixel-purl text-red-400">Lost: {gamesLost}</span>
            </div>
          </div>
        </div>

        {/* Battle Arena - Nivaya, MyThri, Slogh */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Nivaya (Left) */}
          <div className="gaming-widget p-6 rounded-2xl text-center">
            <div className="mb-4">
              <img
                src="/uploads/755f25a5-4902-47a8-bb10-23a28b9971dc.png"
                alt="Nivaya - Angel of Clarity"
                className="w-24 h-24 mx-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-perfect-dark text-yellow-400 mb-2">Nivaya</h3>
            <p className="text-sm font-pixel-purl text-muted-foreground mb-4">Angel of Clarity</p>

            {/* Power Bar */}
            <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-4 rounded-full transition-all duration-500"
                style={{ width: `${nivayaPower}%` }}
              ></div>
            </div>
            <p className="text-xs font-pixel-purl text-muted-foreground">Power: {nivayaPower}%</p>
          </div>

          {/* AI Challenge Generator (Center) */}
          <div className="gaming-widget p-8 rounded-2xl text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-perfect-dark text-foreground mb-2">AI Challenge Generator</h3>
              <div className="gaming-widget px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-pixel-purl text-foreground">Level {currentLevel}</span>
              </div>
            </div>

            <Button
              onClick={handleGenerateChallenge}
              disabled={playerCredits < 1}
              className="magical-btn px-8 py-4 text-lg mb-6 w-full disabled:opacity-50"
            >
              <Zap className="w-6 h-6 mr-3" />
              Generate New Challenge (1 Credit)
            </Button>

            <div className="text-sm font-pixel-purl text-muted-foreground">
              Choose your battle type below
            </div>
          </div>

          {/* Slogh (Right) */}
          <div className="gaming-widget p-6 rounded-2xl text-center">
            <div className="mb-4">
              <img
                src="/uploads/846d8775-89af-460e-b51a-aa35ec271385.png"
                alt="Slogh - The Shadow Enemy"
                className="w-24 h-24 mx-auto object-contain opacity-80"
              />
            </div>
            <h3 className="text-xl font-perfect-dark text-secondary mb-2">Slogh</h3>
            <p className="text-sm font-pixel-purl text-muted-foreground mb-4">Shadow of Confusion</p>

            {/* Health Bar */}
            <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
              <div
                className="bg-gradient-to-r from-red-500 to-red-700 h-4 rounded-full transition-all duration-500"
                style={{ width: `${sloghHealth}%` }}
              ></div>
            </div>
            <p className="text-xs font-pixel-purl text-muted-foreground">Health: {sloghHealth}%</p>
          </div>
        </div>

        {/* Challenge Types - All Visible with Gradients */}
        <div className="mb-12">
          <h3 className="text-2xl font-perfect-dark text-center text-foreground mb-8">
            Choose Your Cognitive Challenge
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {Object.entries(challengeTypes).map(([key, challenge]) => {
              const Icon = challenge.icon;
              const isSelected = selectedChallenge === key;
              return (
                <div
                  key={key}
                  onClick={() => setSelectedChallenge(key)}
                  className={`cursor-pointer p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${isSelected
                      ? `bg-gradient-to-br ${challenge.gradient} text-white shadow-xl scale-105`
                      : `bg-gradient-to-br ${challenge.gradient} opacity-70 hover:opacity-90 text-white/90 shadow-lg`
                    }`}
                >
                  <div className="text-center">
                    <Icon className="w-8 h-8 mx-auto mb-3" />
                    <div className="text-sm font-bold mb-2 font-pixel-purl">{challenge.name}</div>
                    <div className="text-xs opacity-90 font-pixel-purl">{challenge.description}</div>
                    {isSelected && (
                      <div className="mt-3 px-3 py-1 bg-white/20 rounded-full text-xs font-bold">
                        SELECTED
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Milestones */}
        <div className="gaming-widget p-8 rounded-2xl">
          <h3 className="text-xl font-perfect-dark text-foreground mb-6 text-center">
            Story Milestones
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { level: '1-5', milestone: 'First Light', icon: Heart, achieved: currentLevel >= 1 },
              { level: '6-10', milestone: 'Growing Strength', icon: Shield, achieved: currentLevel >= 6 },
              { level: '11-15', milestone: 'Clear Vision', icon: Eye, achieved: currentLevel >= 11 },
              { level: '16-20', milestone: 'Mental Fortress', icon: Brain, achieved: currentLevel >= 16 },
              { level: '21-25', milestone: 'Innerverse Guardian', icon: Zap, achieved: currentLevel >= 21 }
            ].map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={index}
                  className={`text-center p-4 rounded-lg transition-colors ${milestone.achieved ? 'bg-primary/20 border border-primary' : 'hover:bg-accent/20'
                    }`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${milestone.achieved ? 'text-primary' : 'text-muted-foreground'}`} />
                  <div className={`font-pixel-purl text-sm font-bold ${milestone.achieved ? 'text-primary' : 'text-foreground'}`}>
                    {milestone.milestone}
                  </div>
                  <div className="font-pixel-purl text-xs text-muted-foreground">Level {milestone.level}</div>
                  {milestone.achieved && (
                    <div className="text-xs text-primary font-bold mt-1">✓ Achieved</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Game Engine Modal */}
        {showGame && (
          <GameEngine
            gameType={selectedChallenge}
            onClose={handleCloseGame}
            onWin={handleGameWin}
            onLose={handleGameLose}
            level={currentLevel}
          />
        )}
      </div>
    </section>
  );
};

export default InnerverseBattleSection;
