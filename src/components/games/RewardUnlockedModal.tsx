/**
 * Modale "Gioco premio sbloccato!" che appare dopo 3 esercizi completati.
 */

import { Button } from "@/components/ui/button";
import { Sparkles, Play, Clock } from "lucide-react";

interface RewardUnlockedModalProps {
  onPlayNow: () => void;
  onPlayLater: () => void;
  exercisesCompleted: number;
}

const RewardUnlockedModal = ({ 
  onPlayNow, 
  onPlayLater, 
  exercisesCompleted 
}: RewardUnlockedModalProps) => {
  return (
    <div className="fixed inset-0 bg-background/95 flex items-center justify-center z-50 animate-bounce-in p-4">
      <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl max-w-md text-center border-4 border-warning">
        {/* Icona animata */}
        <div className="relative mb-6">
          <div className="text-6xl animate-float">🎮</div>
          <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-warning animate-pulse" />
          <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-primary animate-pulse" />
        </div>

        {/* Titolo */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
          Gioco Premio Sbloccato! 🎉
        </h2>

        {/* Sottotitolo */}
        <p className="text-muted-foreground mb-2">
          Hai completato <span className="text-primary font-bold">{exercisesCompleted}</span> esercizi!
        </p>
        <p className="text-foreground font-semibold mb-6">
          Ora puoi giocare a tagliare la frutta! 🍉🍎🍊
        </p>

        {/* Preview frutti */}
        <div className="flex justify-center gap-3 mb-8">
          {["🍎", "🍊", "🍋", "🍇", "🍓", "🍌"].map((fruit, i) => (
            <span 
              key={i} 
              className="text-3xl animate-float"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {fruit}
            </span>
          ))}
        </div>

        {/* Pulsanti */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={onPlayNow}
            size="lg"
            className="gap-2 text-lg font-bold rounded-xl bg-secondary hover:bg-secondary/90"
          >
            <Play className="w-5 h-5" />
            Gioca ora!
          </Button>
          <Button
            onClick={onPlayLater}
            variant="outline"
            size="lg"
            className="gap-2 font-semibold rounded-xl"
          >
            <Clock className="w-5 h-5" />
            Più tardi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RewardUnlockedModal;
