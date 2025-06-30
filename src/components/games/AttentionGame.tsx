
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Target } from 'lucide-react';

interface AttentionGameProps {
  level: number;
  onWin: () => void;
  onLose: () => void;
  difficulty: number;
}

const AttentionGame: React.FC<AttentionGameProps> = ({ level, onWin, onLose, difficulty }) => {
  const [targets, setTargets] = useState<Array<{id: number, x: number, y: number, isTarget: boolean}>>([]);
  const [score, setScore] = useState(0);
  const [targetCount, setTargetCount] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [round, setRound] = useState(1);

  const maxRounds = 5;
  const winScore = 15 + (difficulty * 3);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      if (score >= winScore) {
        onWin();
      } else {
        onLose();
      }
    }
  }, [timeLeft, gameStarted, score, winScore, onWin, onLose]);

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(generateTargets, 2000 - (difficulty * 100));
      return () => clearInterval(interval);
    }
  }, [gameStarted, difficulty]);

  const generateTargets = () => {
    const newTargets = [];
    const numItems = 5 + difficulty;
    const numTargets = 1 + Math.floor(difficulty / 2);
    
    for (let i = 0; i < numItems; i++) {
      newTargets.push({
        id: Math.random(),
        x: Math.random() * 80,
        y: Math.random() * 60,
        isTarget: i < numTargets
      });
    }
    
    // Shuffle array
    for (let i = newTargets.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newTargets[i], newTargets[j]] = [newTargets[j], newTargets[i]];
    }
    
    setTargets(newTargets);
    setTargetCount(numTargets);
    
    // Clear targets after a short time
    setTimeout(() => setTargets([]), 1500 - (difficulty * 50));
  };

  const handleClick = (target: any) => {
    if (target.isTarget) {
      setScore(prev => prev + 5);
    } else {
      setScore(prev => Math.max(0, prev - 2));
    }
  };

  const startGame = () => {
    setGameStarted(true);
    generateTargets();
  };

  if (!gameStarted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-perfect-dark text-foreground mb-4">
          Attention Focus Challenge
        </h3>
        <p className="font-pixel-purl text-muted-foreground mb-6">
          Click only the glowing targets while ignoring distractions. 
          Reach {winScore} points in 30 seconds to weaken Slogh!
        </p>
        <Button onClick={startGame} className="magical-btn">
          Begin Focus Training
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
          Score: {score}/{winScore}
        </div>
        <div className="font-pixel-purl text-foreground">
          Targets: {targetCount}
        </div>
      </div>

      <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
        {targets.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item)}
            className={`
              absolute w-8 h-8 rounded-full transition-all duration-200 transform
              ${item.isTarget 
                ? 'bg-gradient-to-r from-primary to-secondary animate-pulse shadow-lg shadow-primary/50' 
                : 'bg-red-500 opacity-60'
              }
              hover:scale-110
            `}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
          >
            {item.isTarget && <Target className="w-4 h-4 text-white m-auto" />}
          </button>
        ))}
        
        {targets.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-pixel-purl text-muted-foreground">
              Get ready for the next wave...
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 font-pixel-purl text-muted-foreground">
        Click the glowing targets! Avoid the red distractions.
      </div>
    </div>
  );
};

export default AttentionGame;
