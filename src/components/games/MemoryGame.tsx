
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface MemoryGameProps {
  level: number;
  onWin: () => void;
  onLose: () => void;
  difficulty: number;
}

const MemoryGame: React.FC<MemoryGameProps> = ({ level, onWin, onLose, difficulty }) => {
  const [cards, setCards] = useState<Array<{id: number, symbol: string, flipped: boolean, matched: boolean}>>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [matches, setMatches] = useState(0);

  const symbols = ['🌟', '🔮', '⚡', '🌙', '💎', '🦋', '🌸', '🔥', '❄️', '🌊'];
  const totalPairs = Math.min(4 + difficulty, 8);

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      onLose();
    }
  }, [timeLeft, gameStarted, onLose]);

  useEffect(() => {
    if (matches === totalPairs) {
      onWin();
    }
  }, [matches, totalPairs, onWin]);

  const generateCards = () => {
    const selectedSymbols = symbols.slice(0, totalPairs);
    const cardPairs = [...selectedSymbols, ...selectedSymbols];
    const shuffledCards = cardPairs
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({
        id: index,
        symbol,
        flipped: false,
        matched: false
      }));
    
    setCards(shuffledCards);
  };

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2) return;
    if (cards[cardId].flipped || cards[cardId].matched) return;

    const newCards = [...cards];
    newCards[cardId].flipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstCard, secondCard] = newFlippedCards;
      if (cards[firstCard].symbol === cards[secondCard].symbol) {
        // Match found
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[firstCard].matched = true;
          matchedCards[secondCard].matched = true;
          setCards(matchedCards);
          setMatches(prev => prev + 1);
          setFlippedCards([]);
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[firstCard].flipped = false;
          resetCards[secondCard].flipped = false;
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const startGame = () => {
    setGameStarted(true);
    generateCards();
  };

  if (!gameStarted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-perfect-dark text-foreground mb-4">
          Memory Recovery Challenge
        </h3>
        <p className="font-pixel-purl text-muted-foreground mb-6">
          Find matching pairs of memories scattered by Slogh. 
          Match all {totalPairs} pairs before time runs out!
        </p>
        <Button onClick={startGame} className="magical-btn">
          Begin Memory Recovery
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
          Matches: {matches}/{totalPairs}
        </div>
      </div>

      <div className={`grid gap-3 mx-auto max-w-lg ${
        totalPairs <= 4 ? 'grid-cols-4' : 
        totalPairs <= 6 ? 'grid-cols-4' : 
        'grid-cols-4'
      }`}>
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`
              w-16 h-16 rounded-lg transition-all duration-300 transform
              ${card.flipped || card.matched 
                ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                : 'bg-gray-600 hover:bg-gray-500'
              }
              ${card.matched ? 'ring-2 ring-green-400' : ''}
              hover:scale-105
            `}
          >
            <span className="text-2xl">
              {card.flipped || card.matched ? card.symbol : '?'}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 font-pixel-purl text-muted-foreground">
        Click cards to reveal memories. Find matching pairs!
      </div>
    </div>
  );
};

export default MemoryGame;
