
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import PatternGame from './games/PatternGame';
import MemoryGame from './games/MemoryGame';
import AttentionGame from './games/AttentionGame';
import SpeedGame from './games/SpeedGame';
import ExecutiveGame from './games/ExecutiveGame';
import { X, Heart, Zap } from 'lucide-react';

interface GameEngineProps {
  gameType: string;
  onClose: () => void;
  onWin: () => void;
  onLose: () => void;
  level: number;
}

const GameEngine: React.FC<GameEngineProps> = ({ gameType, onClose, onWin, onLose, level }) => {
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost' | 'loading'>('loading');
  const [story, setStory] = useState('');
  const [playerHealth, setPlayerHealth] = useState(100);
  const [sloghHealth, setSloghHealth] = useState(100);

  // AI-generated story snippets based on game type and level
  const generateStory = () => {
    const stories = {
      pattern: [
        "The fog swirls around you, creating confusing patterns. Nivaya whispers: 'Focus on the true sequence to break through Slogh's illusions.'",
        "Slogh's shadow magic creates false patterns in the mist. You must identify the real path forward.",
        "Ancient symbols appear and fade. Nivaya's light reveals which ones are genuine - follow them to weaken Slogh."
      ],
      memory: [
        "Lost memories float like fragments in the Innerverse. Gather them in the correct order to restore your strength.",
        "Slogh has scattered precious memories across the realm. Nivaya's glow helps you recall them - but quickly, before they fade!",
        "The shadow creature feeds on forgotten moments. Reclaim your memories to starve its power."
      ],
      attention: [
        "Distractions cloud your vision as Slogh attacks. Stay focused on what truly matters to land your counter-strike.",
        "Through the chaos of battle, find the moment of clarity. Nivaya's light shows the way - ignore the false signals.",
        "The enemy creates noise and confusion. Your focused mind is your greatest weapon."
      ],
      speed: [
        "Time moves strangely in the Innerverse. Think fast to outmaneuver Slogh's advancing shadows.",
        "The battle intensifies! Quick thinking and faster reactions are needed to keep pace with the darkness.",
        "Slogh's attacks come rapidly. Your mind must be like lightning to survive this onslaught."
      ],
      executive: [
        "Multiple threats approach from all directions. Plan your strategy carefully - every decision matters.",
        "The final confrontation requires all your skills. Coordinate your abilities to overcome Slogh's complex assault.",
        "This is the ultimate test. Use everything you've learned to orchestrate victory against the shadow."
      ]
    };
    
    const gameStories = stories[gameType as keyof typeof stories] || stories.pattern;
    const storyIndex = Math.min(level - 1, gameStories.length - 1);
    setStory(gameStories[storyIndex]);
  };

  useEffect(() => {
    generateStory();
    setGameState('playing');
  }, [gameType, level]);

  const handleGameWin = () => {
    setGameState('won');
    setSloghHealth(prev => Math.max(0, prev - 20));
    onWin();
  };

  const handleGameLose = () => {
    setGameState('lost');
    setPlayerHealth(prev => Math.max(0, prev - 15));
    onLose();
  };

  const renderGame = () => {
    const gameProps = {
      level,
      onWin: handleGameWin,
      onLose: handleGameLose,
      difficulty: Math.min(level, 10)
    };

    switch (gameType) {
      case 'pattern':
        return <PatternGame {...gameProps} />;
      case 'memory':
        return <MemoryGame {...gameProps} />;
      case 'attention':
        return <AttentionGame {...gameProps} />;
      case 'speed':
        return <SpeedGame {...gameProps} />;
      case 'executive':
        return <ExecutiveGame {...gameProps} />;
      default:
        return <PatternGame {...gameProps} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="gaming-widget max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500" />
              <div className="w-20 bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-red-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${playerHealth}%` }}
                ></div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-pixel-purl text-foreground">Level {level}</span>
            </div>
          </div>
          <Button onClick={onClose} variant="ghost" size="icon">
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Story Section */}
        <div className="gaming-widget p-4 rounded-lg mb-6">
          <p className="font-pixel-purl text-foreground text-center leading-relaxed">
            {story}
          </p>
        </div>

        {/* Game Area */}
        <div className="min-h-[400px]">
          {renderGame()}
        </div>

        {/* Game Result */}
        {gameState === 'won' && (
          <div className="text-center mt-6 p-4 bg-green-500/20 rounded-lg">
            <h3 className="text-xl font-perfect-dark text-green-400 mb-2">Victory!</h3>
            <p className="font-pixel-purl text-foreground">
              Nivaya's light grows stronger! Slogh retreats further into the shadows.
            </p>
          </div>
        )}

        {gameState === 'lost' && (
          <div className="text-center mt-6 p-4 bg-red-500/20 rounded-lg">
            <h3 className="text-xl font-perfect-dark text-red-400 mb-2">Defeat</h3>
            <p className="font-pixel-purl text-foreground">
              The shadow grows stronger, but don't give up! Try again to push back the darkness.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameEngine;
