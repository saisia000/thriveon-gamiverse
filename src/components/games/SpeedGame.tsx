
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface SpeedGameProps {
  level: number;
  onWin: () => void;
  onLose: () => void;
  difficulty: number;
}

const SpeedGame: React.FC<SpeedGameProps> = ({ level, onWin, onLose, difficulty }) => {
  const [question, setQuestion] = useState<{problem: string, answer: number, options: number[]}>({
    problem: '', answer: 0, options: []
  });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [gameStarted, setGameStarted] = useState(false);
  const [streak, setStreak] = useState(0);

  const winScore = 10 + (difficulty * 2);

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

  const generateQuestion = () => {
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let num1, num2, answer;
    
    switch (operation) {
      case '+':
        num1 = Math.floor(Math.random() * (20 + difficulty * 10)) + 1;
        num2 = Math.floor(Math.random() * (20 + difficulty * 10)) + 1;
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * (30 + difficulty * 10)) + 10;
        num2 = Math.floor(Math.random() * num1) + 1;
        answer = num1 - num2;
        break;
      case '*':
        num1 = Math.floor(Math.random() * (5 + difficulty)) + 2;
        num2 = Math.floor(Math.random() * (5 + difficulty)) + 2;
        answer = num1 * num2;
        break;
      default:
        num1 = 5; num2 = 3; answer = 8;
    }

    const problem = `${num1} ${operation} ${num2}`;
    
    // Generate wrong options
    const wrongOptions = [];
    for (let i = 0; i < 3; i++) {
      let wrong;
      do {
        wrong = answer + (Math.floor(Math.random() * 10) - 5);
      } while (wrong === answer || wrongOptions.includes(wrong) || wrong < 0);
      wrongOptions.push(wrong);
    }
    
    const options = [answer, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    setQuestion({ problem, answer, options });
  };

  const handleAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === question.answer) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
    generateQuestion();
  };

  const startGame = () => {
    setGameStarted(true);
    generateQuestion();
  };

  if (!gameStarted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-perfect-dark text-foreground mb-4">
          Lightning Speed Challenge
        </h3>
        <p className="font-pixel-purl text-muted-foreground mb-6">
          Solve math problems as quickly as possible! 
          Get {winScore} correct answers in 45 seconds to outpace Slogh's attacks.
        </p>
        <Button onClick={startGame} className="magical-btn">
          Begin Speed Challenge
        </Button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className="flex justify-between items-center mb-8">
        <div className="font-pixel-purl text-foreground">
          Time: {timeLeft}s
        </div>
        <div className="font-pixel-purl text-foreground">
          Score: {score}/{winScore}
        </div>
        <div className="font-pixel-purl text-foreground">
          Streak: {streak}
        </div>
      </div>

      <div className="gaming-widget p-8 rounded-xl mb-8">
        <div className="text-4xl font-perfect-dark text-foreground mb-8">
          {question.problem} = ?
        </div>
        
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
          {question.options.map((option) => (
            <Button
              key={option}
              onClick={() => handleAnswer(option)}
              className="h-16 text-2xl font-pixel-purl gaming-widget hover:bg-primary/20 transition-all duration-200"
              variant="outline"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="font-pixel-purl text-muted-foreground">
        {streak > 3 && (
          <div className="text-primary font-bold">
            🔥 {streak} in a row! Nivaya's power grows!
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeedGame;
