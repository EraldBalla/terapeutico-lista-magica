/**
 * Card singolo oggetto per il gioco "Viaggio nel mondo degli oggetti".
 * Include:
 * - Immagine + nome dell'oggetto
 * - Pulsante audio per pronunciare il nome (TTS)
 * - Stati: normale, selezionato, errore
 * - Colori più vivaci e adatti ai bambini
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
  tema?: string;
  onSelect: (item: ShoppingItem) => void;
}

// Colori di sfondo per tema
const temaBackgrounds: Record<string, string> = {
  frutta: "bg-item-frutta hover:bg-orange-100",
  verdure: "bg-item-verdure hover:bg-green-100",
  bevande: "bg-item-bevande hover:bg-blue-100",
  scuola: "bg-item-scuola hover:bg-indigo-100",
  bagno: "bg-item-bagno hover:bg-cyan-100",
  cucina: "bg-item-cucina hover:bg-amber-100",
  vestiti: "bg-item-vestiti hover:bg-pink-100",
  festa: "bg-item-festa hover:bg-rose-100",
  colazione: "bg-item-colazione hover:bg-yellow-100",
  cibo_generico: "bg-game-card hover:bg-game-card-hover",
};

const ItemCard = ({
  item,
  isCollected,
  isShaking,
  isWiggling = false,
  isComplete,
  ttsEnabled = true,
  tema = "cibo_generico",
  onSelect,
}: ItemCardProps) => {
  const { speakWord, isSpeaking } = useSpeech({ lang: "it-IT" });
  const [isAudioActive, setIsAudioActive] = useState(false);

  const bgClass = temaBackgrounds[tema] || temaBackgrounds.cibo_generico;

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
        "relative flex flex-col items-center justify-center gap-2 p-4 md:p-6 rounded-3xl",
        "transition-all duration-200 shadow-md border-2 border-transparent",
        "focus:outline-none focus:ring-4 focus:ring-primary/30",
        isCollected
          ? "bg-game-card-selected border-success/30 opacity-60 cursor-not-allowed scale-95"
          : cn(bgClass, "hover:scale-105 hover:shadow-lg hover:border-primary/20 cursor-pointer"),
        isShaking && "animate-shake bg-game-card-error border-destructive/30",
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
            "bg-white/80 hover:bg-primary/20 hover:scale-110 shadow-sm",
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
      <span className={cn(
        "text-5xl md:text-6xl drop-shadow-sm", 
        isCollected && "animate-gentle-bounce"
      )}>
        {item.immagine}
      </span>

      {/* Nome oggetto */}
      <span className="text-sm md:text-base font-bold text-foreground text-center leading-tight">
        {item.nome}
      </span>

      {/* Overlay oggetto selezionato */}
      {isCollected && (
        <div className="absolute inset-0 flex items-center justify-center bg-success/20 rounded-3xl">
          <div className="bg-success rounded-full p-2 shadow-lg animate-bounce-in">
            <Check className="w-8 h-8 text-white" />
          </div>
        </div>
      )}
    </button>
  );
};

export default ItemCard;
