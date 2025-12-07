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

// Colori di sfondo più vivaci per tema
const temaBackgrounds: Record<string, string> = {
  frutta: "bg-gradient-to-br from-orange-100 to-yellow-100 hover:from-orange-200 hover:to-yellow-200 border-orange-200",
  verdure: "bg-gradient-to-br from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 border-green-200",
  bevande: "bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 border-blue-200",
  scuola: "bg-gradient-to-br from-indigo-100 to-violet-100 hover:from-indigo-200 hover:to-violet-200 border-indigo-200",
  bagno: "bg-gradient-to-br from-cyan-100 to-sky-100 hover:from-cyan-200 hover:to-sky-200 border-cyan-200",
  cucina: "bg-gradient-to-br from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 border-amber-200",
  vestiti: "bg-gradient-to-br from-pink-100 to-rose-100 hover:from-pink-200 hover:to-rose-200 border-pink-200",
  festa: "bg-gradient-to-br from-rose-100 to-fuchsia-100 hover:from-rose-200 hover:to-fuchsia-200 border-rose-200",
  colazione: "bg-gradient-to-br from-yellow-100 to-amber-100 hover:from-yellow-200 hover:to-amber-200 border-yellow-200",
  cibo_generico: "bg-gradient-to-br from-slate-50 to-gray-100 hover:from-slate-100 hover:to-gray-200 border-slate-200",
  animali: "bg-gradient-to-br from-lime-100 to-green-100 hover:from-lime-200 hover:to-green-200 border-lime-200",
  sport: "bg-gradient-to-br from-sky-100 to-blue-100 hover:from-sky-200 hover:to-blue-200 border-sky-200",
  musica: "bg-gradient-to-br from-purple-100 to-violet-100 hover:from-purple-200 hover:to-violet-200 border-purple-200",
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
        "relative flex flex-col items-center justify-center gap-3 p-5 md:p-7 rounded-[2rem]",
        "transition-all duration-300 shadow-lg border-2",
        "focus:outline-none focus:ring-4 focus:ring-primary/40",
        isCollected
          ? "bg-gradient-to-br from-success/30 to-emerald-200 border-success/50 opacity-70 cursor-not-allowed scale-95"
          : cn(bgClass, "hover:scale-110 hover:shadow-xl hover:-translate-y-1 cursor-pointer active:scale-95"),
        isShaking && "animate-shake !bg-gradient-to-br !from-red-100 !to-rose-200 !border-red-300",
        isWiggling && "animate-wiggle"
      )}
    >
      {/* Pulsante Audio TTS - Area clic grande e facile da toccare */}
      {ttsEnabled && !isCollected && (
        <button
          type="button"
          onClick={handleAudioClick}
          className={cn(
            "absolute -top-1 -right-1 z-10",
            "min-w-[44px] min-h-[44px] p-3 rounded-full",
            "cursor-pointer pointer-events-auto",
            "transition-all duration-200",
            "bg-white shadow-md border-2 border-primary/30",
            "hover:bg-primary/20 hover:scale-110 hover:shadow-lg",
            "active:scale-95 active:bg-primary/30",
            "focus:outline-none focus:ring-4 focus:ring-primary/40",
            (isSpeaking || isAudioActive) && "bg-primary/30 animate-pulse border-primary"
          )}
          aria-label={`Ascolta la parola "${item.nome}"`}
        >
          <Volume2
            className={cn(
              "w-5 h-5 md:w-6 md:h-6",
              (isSpeaking || isAudioActive)
                ? "text-primary"
                : "text-primary/70"
            )}
          />
        </button>
      )}

      {/* Immagine oggetto - più grande */}
      <span className={cn(
        "text-6xl md:text-7xl drop-shadow-md transition-transform duration-300", 
        isCollected && "animate-gentle-bounce",
        !isCollected && !isComplete && "group-hover:scale-110"
      )}>
        {item.immagine}
      </span>

      {/* Nome oggetto - più visibile */}
      <span className="text-base md:text-lg font-extrabold text-foreground text-center leading-tight drop-shadow-sm">
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
