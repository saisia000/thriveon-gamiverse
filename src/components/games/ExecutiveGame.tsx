
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Shield, Sword, Heart } from 'lucide-react';

interface ExecutiveGameProps {
  level: number;
  onWin: () => void;
  onLose: () => void;
  difficulty: number;
}

const ExecutiveGame: React.FC<ExecutiveGameProps> = ({ level, onWin, onLose, difficulty }) => {
  const [tasks, setTasks] = useState<Array<{id: number, type: 'direction' | 'combat' | 'sequence', data: any, completed: boolean}>>([]);
  const [currentTask, setCurrentTask] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [playerActions, setPlayerActions] = useState<string[]>([]);

  const totalTasks = 8 + difficulty;

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      if (completedTasks >= totalTasks) {
        onWin();
      } else {
        onLose();
      }
    }
  }, [timeLeft, gameStarted, completedTasks, totalTasks, onWin, onLose]);

  const generateTasks = () => {
    const newTasks = [];
    
    for (let i = 0; i < totalTasks; i++) {
      const taskType = ['direction', 'combat', 'sequence'][Math.floor(Math.random() * 3)];
      let taskData;
      
      switch (taskType) {
        case 'direction':
          const directions = ['up', 'down', 'left', 'right'];
          taskData = {
            instruction: directions[Math.floor(Math.random() * directions.length)],
            reverse: Math.random() < 0.3 + (difficulty * 0.1)
          };
          break;
        case 'combat':
          taskData = {
            enemy: ['shadow', 'phantom', 'wraith'][Math.floor(Math.random() * 3)],
            action: ['attack', 'defend', 'heal'][Math.floor(Math.random() * 3)]
          };
          break;
        case 'sequence':
          const length = 3 + Math.floor(difficulty / 2);
          taskData = {
            sequence: Array.from({length}, () => Math.floor(Math.random() * 4)),
            userSequence: []
          };
          break;
      }
      
      newTasks.push({
        id: i,
        type: taskType as 'direction' | 'combat' | 'sequence',
        data: taskData,
        completed: false
      });
    }
    
    setTasks(newTasks);
  };

  const handleDirectionTask = (direction: string) => {
    const task = tasks[currentTask];
    if (!task || task.type !== 'direction') return;
    
    const correct = task.data.reverse 
      ? (direction !== task.data.instruction)
      : (direction === task.data.instruction);
    
    if (correct) {
      completeTask();
    } else {
      // Penalty for wrong answer
      setTimeLeft(prev => Math.max(0, prev - 3));
    }
  };

  const handleCombatTask = (action: string) => {
    const task = tasks[currentTask];
    if (!task || task.type !== 'combat') return;
    
    if (action === task.data.action) {
      completeTask();
    } else {
      setTimeLeft(prev => Math.max(0, prev - 3));
    }
  };

  const handleSequenceInput = (value: number) => {
    const task = tasks[currentTask];
    if (!task || task.type !== 'sequence') return;
    
    const newUserSequence = [...task.data.userSequence, value];
    const updatedTasks = [...tasks];
    updatedTasks[currentTask].data.userSequence = newUserSequence;
    setTasks(updatedTasks);
    
    if (newUserSequence.length === task.data.sequence.length) {
      const correct = newUserSequence.every((val, idx) => val === task.data.sequence[idx]);
      if (correct) {
        completeTask();
      } else {
        // Reset sequence on wrong answer
        updatedTasks[currentTask].data.userSequence = [];
        setTasks(updatedTasks);
        setTimeLeft(prev => Math.max(0, prev - 5));
      }
    }
  };

  const completeTask = () => {
    setCompletedTasks(prev => prev + 1);
    if (currentTask < tasks.length - 1) {
      setCurrentTask(prev => prev + 1);
    } else if (completedTasks + 1 >= totalTasks) {
      onWin();
    }
  };

  const startGame = () => {
    setGameStarted(true);
    generateTasks();
  };

  const renderCurrentTask = () => {
    if (currentTask >= tasks.length) return null;
    
    const task = tasks[currentTask];
    
    switch (task.type) {
      case 'direction':
        return (
          <div className="text-center">
            <h4 className="text-xl font-perfect-dark text-foreground mb-4">
              Navigation Challenge
            </h4>
            <p className="font-pixel-purl text-muted-foreground mb-6">
              {task.data.reverse 
                ? `Go OPPOSITE of: ${task.data.instruction}`
                : `Go ${task.data.instruction}`
              }
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
              <div></div>
              <Button onClick={() => handleDirectionTask('up')} className="gaming-widget h-16">
                <ArrowUp className="w-8 h-8" />
              </Button>
              <div></div>
              <Button onClick={() => handleDirectionTask('left')} className="gaming-widget h-16">
                <ArrowLeft className="w-8 h-8" />
              </Button>
              <div></div>
              <Button onClick={() => handleDirectionTask('right')} className="gaming-widget h-16">
                <ArrowRight className="w-8 h-8" />
              </Button>
              <div></div>
              <Button onClick={() => handleDirectionTask('down')} className="gaming-widget h-16">
                <ArrowDown className="w-8 h-8" />
              </Button>
              <div></div>
            </div>
          </div>
        );
      
      case 'combat':
        return (
          <div className="text-center">
            <h4 className="text-xl font-perfect-dark text-foreground mb-4">
              Combat Decision
            </h4>
            <p className="font-pixel-purl text-muted-foreground mb-6">
              A {task.data.enemy} approaches! What do you do?
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => handleCombatTask('attack')} className="gaming-widget px-6 py-4">
                <Sword className="w-6 h-6 mr-2" />
                Attack
              </Button>
              <Button onClick={() => handleCombatTask('defend')} className="gaming-widget px-6 py-4">
                <Shield className="w-6 h-6 mr-2" />
                Defend
              </Button>
              <Button onClick={() => handleCombatTask('heal')} className="gaming-widget px-6 py-4">
                <Heart className="w-6 h-6 mr-2" />
                Heal
              </Button>
            </div>
          </div>
        );
      
      case 'sequence':
        return (
          <div className="text-center">
            <h4 className="text-xl font-perfect-dark text-foreground mb-4">
              Spell Sequence
            </h4>
            <p className="font-pixel-purl text-muted-foreground mb-4">
              Cast this spell sequence:
            </p>
            <div className="flex gap-2 justify-center mb-6">
              {task.data.sequence.map((num: number, idx: number) => (
                <div key={idx} className="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center font-pixel-purl">
                  {num + 1}
                </div>
              ))}
            </div>
            <p className="font-pixel-purl text-muted-foreground mb-4">
              Your sequence: {task.data.userSequence.map((n: number) => n + 1).join('-') || 'None'}
            </p>
            <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
              {[0, 1, 2, 3].map((num) => (
                <Button 
                  key={num}
                  onClick={() => handleSequenceInput(num)}
                  className="gaming-widget h-12"
                >
                  {num + 1}
                </Button>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (!gameStarted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-perfect-dark text-foreground mb-4">
          Executive Function Challenge
        </h3>
        <p className="font-pixel-purl text-muted-foreground mb-6">
          The ultimate test! Navigate, fight, and cast spells in a complex multi-step battle.
          Complete {totalTasks} tasks in 60 seconds to defeat Slogh!
        </p>
        <Button onClick={startGame} className="magical-btn">
          Begin Final Challenge
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div className="font-pixel-purl text-foreground">
          Time: {timeLeft}s
        </div>
        <div className="font-pixel-purl text-foreground">
          Task: {currentTask + 1}/{totalTasks}
        </div>
        <div className="font-pixel-purl text-foreground">
          Completed: {completedTasks}
        </div>
      </div>

      <div className="gaming-widget p-8 rounded-xl min-h-[300px] flex items-center justify-center">
        {renderCurrentTask()}
      </div>

      <div className="mt-4 text-center font-pixel-purl text-muted-foreground">
        Focus and adapt quickly! Each task type requires different skills.
      </div>
    </div>
  );
};

export default ExecutiveGame;
