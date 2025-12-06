/**
 * Minigioco premio "Taglia la Frutta" (Fruit Ninja style).
 * 
 * Gioco di sfogo breve (30-60 secondi) che appare dopo 3 esercizi completati.
 * Il bambino deve cliccare/tappare i frutti che compaiono per "tagliarli".
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";

interface FruitSliceGameProps {
  onComplete: (score: number) => void;
}

interface Fruit {
  id: number;
  emoji: string;
  x: number;
  y: number;
  velocityY: number;
  velocityX: number;
  isSliced: boolean;
  rotation: number;
}

const FRUIT_EMOJIS = ["🍎", "🍊", "🍋", "🍇", "🍓", "🍌", "🍉", "🍑", "🥝", "🍒"];
const GAME_DURATION = 45; // secondi
const SPAWN_INTERVAL = 800; // ms tra frutti

const FruitSliceGame = ({ onComplete }: FruitSliceGameProps) => {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [isPlaying, setIsPlaying] = useState(true);
  const [sliceEffects, setSliceEffects] = useState<{ id: number; x: number; y: number }[]>([]);
  const nextFruitId = useRef(0);
  const gameAreaRef = useRef<HTMLDivElement>(null);

  // Spawna un nuovo frutto
  const spawnFruit = useCallback(() => {
    if (!gameAreaRef.current) return;
    
    const areaWidth = gameAreaRef.current.clientWidth;
    const emoji = FRUIT_EMOJIS[Math.floor(Math.random() * FRUIT_EMOJIS.length)];
    
    const newFruit: Fruit = {
      id: nextFruitId.current++,
      emoji,
      x: Math.random() * (areaWidth - 80) + 40,
      y: -80,
      velocityY: 3 + Math.random() * 2,
      velocityX: (Math.random() - 0.5) * 4,
      isSliced: false,
      rotation: Math.random() * 360,
    };
    
    setFruits(prev => [...prev, newFruit]);
  }, []);

  // Timer countdown
  useEffect(() => {
    if (!isPlaying || timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setIsPlaying(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  // Spawn frutti periodicamente
  useEffect(() => {
    if (!isPlaying) return;
    
    const spawner = setInterval(spawnFruit, SPAWN_INTERVAL);
    return () => clearInterval(spawner);
  }, [isPlaying, spawnFruit]);

  // Movimento frutti
  useEffect(() => {
    if (!isPlaying) return;
    
    const moveInterval = setInterval(() => {
      setFruits(prev => prev
        .map(fruit => ({
          ...fruit,
          y: fruit.y + fruit.velocityY,
          x: fruit.x + fruit.velocityX,
          rotation: fruit.rotation + 3,
        }))
        .filter(fruit => fruit.y < (gameAreaRef.current?.clientHeight || 600) + 100)
      );
    }, 16);
    
    return () => clearInterval(moveInterval);
  }, [isPlaying]);

  // Gestisce il click su un frutto
  const handleFruitClick = (fruitId: number, event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    
    const fruit = fruits.find(f => f.id === fruitId);
    if (!fruit || fruit.isSliced) return;
    
    // Aggiungi effetto slice
    setSliceEffects(prev => [...prev, { id: fruitId, x: fruit.x, y: fruit.y }]);
    setTimeout(() => {
      setSliceEffects(prev => prev.filter(e => e.id !== fruitId));
    }, 500);
    
    // Rimuovi frutto e incrementa punteggio
    setFruits(prev => prev.filter(f => f.id !== fruitId));
    setScore(s => s + 1);
  };

  // Gestisce click nell'area di gioco (per touch swipe simulato)
  const handleAreaClick = (event: React.MouseEvent | React.TouchEvent) => {
    if (!gameAreaRef.current) return;
    
    const rect = gameAreaRef.current.getBoundingClientRect();
    let clientX: number, clientY: number;
    
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    
    // Trova frutto vicino al click
    const hitFruit = fruits.find(f => 
      !f.isSliced &&
      Math.abs(f.x + 40 - x) < 50 &&
      Math.abs(f.y + 40 - y) < 50
    );
    
    if (hitFruit) {
      handleFruitClick(hitFruit.id, event);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-accent/20 to-primary/20 z-50 flex flex-col">
      {/* Header */}
      <header className="bg-card/90 backdrop-blur-sm p-4 shadow-lg">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-warning animate-pulse" />
            <h1 className="text-xl font-bold text-foreground">Taglia la Frutta!</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{score}</div>
              <div className="text-xs text-muted-foreground">Punti</div>
            </div>
            <div className="text-center">
              <div className={cn(
                "text-2xl font-bold",
                timeLeft <= 10 ? "text-destructive animate-pulse" : "text-foreground"
              )}>
                {timeLeft}
              </div>
              <div className="text-xs text-muted-foreground">Secondi</div>
            </div>
          </div>
        </div>
      </header>

      {/* Area di gioco */}
      <div 
        ref={gameAreaRef}
        className="flex-1 relative overflow-hidden cursor-crosshair select-none"
        onClick={handleAreaClick}
        onTouchStart={handleAreaClick}
      >
        {/* Istruzioni */}
        {isPlaying && timeLeft === GAME_DURATION && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center animate-bounce-in">
              <p className="text-lg font-bold text-foreground">
                Tocca i frutti per tagliarli! 🍉
              </p>
            </div>
          </div>
        )}

        {/* Frutti */}
        {fruits.map(fruit => (
          <button
            key={fruit.id}
            onClick={(e) => handleFruitClick(fruit.id, e)}
            onTouchStart={(e) => handleFruitClick(fruit.id, e)}
            className={cn(
              "absolute text-5xl md:text-6xl transition-transform duration-75",
              "hover:scale-125 active:scale-90",
              "focus:outline-none select-none",
              fruit.isSliced && "opacity-0"
            )}
            style={{
              left: fruit.x,
              top: fruit.y,
              transform: `rotate(${fruit.rotation}deg)`,
            }}
          >
            {fruit.emoji}
          </button>
        ))}

        {/* Effetti slice */}
        {sliceEffects.map(effect => (
          <div
            key={effect.id}
            className="absolute pointer-events-none animate-bounce-in"
            style={{ left: effect.x, top: effect.y }}
          >
            <div className="text-4xl">💥</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-warning animate-float">+1</span>
            </div>
          </div>
        ))}
      </div>

      {/* Schermata fine gioco */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-background/90 flex items-center justify-center animate-bounce-in">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl max-w-md mx-4 text-center">
            <div className="text-6xl mb-4 animate-float">🎉</div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
              Bravo!
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Hai tagliato <span className="text-primary font-bold">{score}</span> pezzi di frutta!
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {FRUIT_EMOJIS.slice(0, Math.min(score, 10)).map((emoji, i) => (
                <span key={i} className="text-3xl animate-bounce-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  {emoji}
                </span>
              ))}
            </div>
            <Button
              onClick={() => onComplete(score)}
              size="lg"
              className="gap-2 text-lg font-bold rounded-xl"
            >
              Torniamo agli esercizi!
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FruitSliceGame;
