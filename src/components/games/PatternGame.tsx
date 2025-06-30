
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface PatternGameProps {
  level: number;
  onWin: () => void;
  onLose: () => void;
  difficulty: number;
}

const PatternGame: React.FC<PatternGameProps> = ({ level, onWin, onLose, difficulty }) => {
  const [pattern, setPattern] = useState<number[]>([]);
  const [userPattern, setUserPattern] = useState<number[]>([]);
  const [showingPattern, setShowingPattern] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
  const patternLength = Math.min(3 + difficulty, 8);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      onLose();
    }
  }, [timeLeft, gameStarted, onLose]);

  const generatePattern = () => {
    const newPattern = Array.from({ length: patternLength }, () => 
      Math.floor(Math.random() * colors.length)
    );
    setPattern(newPattern);
    setUserPattern([]);
    setCurrentStep(0);
    showPattern(newPattern);
  };

  const showPattern = async (patternToShow: number[]) => {
    setShowingPattern(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    for (let i = 0; i < patternToShow.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
      setCurrentStep(-1);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    setShowingPattern(false);
    setCurrentStep(0);
  };

  const handleColorClick = (colorIndex: number) => {
    if (showingPattern) return;
    
    const newUserPattern = [...userPattern, colorIndex];
    setUserPattern(newUserPattern);

    if (newUserPattern[newUserPattern.length - 1] !== pattern[newUserPattern.length - 1]) {
      onLose();
      return;
    }

    if (newUserPattern.length === pattern.length) {
      onWin();
    }
  };

  const startGame = () => {
    setGameStarted(true);
    generatePattern();
  };

  if (!gameStarted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-perfect-dark text-foreground mb-4">
          Pattern Recognition Challenge
        </h3>
        <p className="font-pixel-purl text-muted-foreground mb-6">
          Watch the pattern carefully, then repeat it by clicking the colors in the same sequence.
          You have 30 seconds!
        </p>
        <Button onClick={startGame} className="magical-btn">
          Begin Pattern Challenge
        </Button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="flex justify-between items-center mb-6">
        <div className="font-pixel-purl text-foreground">
          Time: {timeLeft}s
        </div>
        <div className="font-pixel-purl text-foreground">
          Progress: {userPattern.length}/{pattern.length}
        </div>
      </div>

      {showingPattern && (
        <div className="mb-4 p-4 bg-primary/20 rounded-lg">
          <p className="font-pixel-purl text-foreground">
            Watch the pattern... Step {currentStep + 1} of {pattern.length}
          </p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorClick(index)}
            disabled={showingPattern}
            className={`
              w-20 h-20 rounded-lg transition-all duration-300 transform
              ${color}
              ${currentStep === index && showingPattern ? 'scale-110 brightness-150' : ''}
              ${!showingPattern ? 'hover:scale-105 hover:brightness-110' : ''}
              ${showingPattern ? 'opacity-50' : 'opacity-100'}
            `}
          />
        ))}
      </div>

      <div className="font-pixel-purl text-muted-foreground">
        {showingPattern ? 'Memorize the pattern...' : 'Now repeat the pattern!'}
      </div>
    </div>
  );
};

export default PatternGame;
