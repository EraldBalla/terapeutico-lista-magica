/**
 * Barra di feedback stabile per messaggi di rinforzo.
 * Posizionata in un punto fisso del layout (non fluttuante sopra le card).
 * Avatar + messaggio in un contenitore a tutta larghezza.
 */

import { cn } from "@/lib/utils";

interface FeedbackBarProps {
  type: "success" | "error";
  message: string;
  emoji?: string;
}

const FeedbackBar = ({ type, message, emoji }: FeedbackBarProps) => {
  // Mascotte diverse per successo/errore
  const mascotEmoji = type === "success" ? "🦊" : "🐻";
  const mascotName = type === "success" ? "Volpix" : "Orsetto";

  return (
    <div
      className={cn(
        "w-full mt-4 animate-bounce-in",
        "flex items-center gap-3 md:gap-4 p-3 md:p-4",
        "rounded-2xl shadow-lg border-2",
        type === "success"
          ? "bg-gradient-to-r from-emerald-50 to-green-100 border-success/40"
          : "bg-gradient-to-r from-amber-50 to-orange-100 border-amber-300"
      )}
    >
      {/* Avatar Mascotte */}
      <div
        className={cn(
          "flex-shrink-0 w-12 h-12 md:w-14 md:h-14",
          "rounded-full shadow-md",
          "flex items-center justify-center",
          "animate-float",
          type === "success"
            ? "bg-gradient-to-br from-success to-emerald-400"
            : "bg-gradient-to-br from-amber-400 to-orange-400"
        )}
      >
        <span className="text-2xl md:text-3xl drop-shadow-sm">
          {mascotEmoji}
        </span>
        
        {/* Stelline decorative per successo */}
        {type === "success" && (
          <span className="absolute -top-1 -right-1 text-sm animate-pulse">⭐</span>
        )}
      </div>

      {/* Contenuto messaggio */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2">
          <span className="text-xl md:text-2xl flex-shrink-0">
            {emoji || (type === "success" ? "🎉" : "💪")}
          </span>
          <div className="flex-1 min-w-0">
            <p
              className={cn(
                "text-base md:text-lg font-bold leading-snug",
                "break-words",
                type === "success" ? "text-emerald-800" : "text-amber-900"
              )}
            >
              {message}
            </p>
            <p
              className={cn(
                "text-xs md:text-sm mt-0.5 opacity-70",
                type === "success" ? "text-emerald-700" : "text-amber-700"
              )}
            >
              — {mascotName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackBar;
