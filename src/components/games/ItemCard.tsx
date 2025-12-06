/**
 * Card singolo oggetto per il gioco "La lista della spesa".
 * Include:
 * - Immagine + nome dell'oggetto
 * - Pulsante audio per pronunciare il nome (TTS)
 * - Stati: normale, selezionato, errore
 */

import { useState } from "react";
import { ShoppingItem } from "@/data/shoppingListScenes";
import { useSpeech } from "@/hooks/use-speech";
import { cn } from "@/lib/utils";
import { Check, Volume2 } from "lucide-react";

interface ItemCardProps {
  item: ShoppingItem;
  isCollected: boolean;
  isShaking: boolean;
  isWiggling?: boolean;
  isComplete: boolean;
  ttsEnabled?: boolean;
  onSelect: (item: ShoppingItem) => void;
}

const ItemCard = ({
  item,
  isCollected,
  isShaking,
  isWiggling = false,
  isComplete,
  ttsEnabled = true,
  onSelect,
}: ItemCardProps) => {
  const { speakWord, isSpeaking } = useSpeech({ lang: "it-IT" });
  const [isAudioActive, setIsAudioActive] = useState(false);

  /**
   * Gestisce il click sul pulsante audio.
   * NON deve propagare l'evento alla card (evita selezione oggetto).
   */
  const handleAudioClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Importante: non seleziona l'oggetto
    
    speakWord(item.nome);
    setIsAudioActive(true);
    
    // Reset stato visivo dopo la pronuncia
    setTimeout(() => setIsAudioActive(false), 1000);
  };

  /**
   * Gestisce il click sulla card (selezione oggetto).
   */
  const handleCardClick = () => {
    if (!isCollected && !isComplete) {
      onSelect(item);
    }
  };

  return (
    <button
      onClick={handleCardClick}
      disabled={isCollected || isComplete}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 p-4 md:p-6 rounded-2xl",
        "transition-all duration-200 shadow-md",
        "focus:outline-none focus:ring-4 focus:ring-primary/30",
        isCollected
          ? "bg-game-card-selected opacity-50 cursor-not-allowed scale-95"
          : "bg-game-card hover:bg-game-card-hover hover:scale-105 hover:shadow-lg cursor-pointer",
        isShaking && "animate-shake bg-game-card-error",
        isWiggling && "animate-wiggle"
      )}
    >
      {/* Pulsante Audio TTS */}
      {ttsEnabled && !isCollected && (
        <button
          onClick={handleAudioClick}
          className={cn(
            "absolute top-2 right-2 p-2 rounded-full",
            "transition-all duration-200",
            "bg-muted/80 hover:bg-primary/20 hover:scale-110",
            "focus:outline-none focus:ring-2 focus:ring-primary/50",
            (isSpeaking || isAudioActive) && "bg-primary/30 animate-pulse"
          )}
          title="Ascolta la parola"
          aria-label={`Pronuncia: ${item.nome}`}
        >
          <Volume2
            className={cn(
              "w-4 h-4 md:w-5 md:h-5",
              (isSpeaking || isAudioActive)
                ? "text-primary"
                : "text-muted-foreground"
            )}
          />
        </button>
      )}

      {/* Immagine oggetto */}
      <span className={cn("text-4xl md:text-5xl", isCollected && "animate-bounce-in")}>
        {item.immagine}
      </span>

      {/* Nome oggetto */}
      <span className="text-xs md:text-sm font-bold text-foreground text-center">
        {item.nome}
      </span>

      {/* Overlay oggetto selezionato */}
      {isCollected && (
        <div className="absolute inset-0 flex items-center justify-center bg-success/20 rounded-2xl">
          <Check className="w-10 h-10 text-success animate-bounce-in" />
        </div>
      )}
    </button>
  );
};

export default ItemCard;
