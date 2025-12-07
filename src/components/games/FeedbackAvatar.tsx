/**
 * Avatar mascotte per i messaggi di feedback.
 * Stile Digimon/creatura fantastica, amichevole per i bambini.
 */

import { cn } from "@/lib/utils";

interface FeedbackAvatarProps {
  type: "success" | "error";
  message: string;
  emoji?: string;
}

const FeedbackAvatar = ({ type, message, emoji }: FeedbackAvatarProps) => {
  // Mascotte diverse per successo/errore
  const mascotEmoji = type === "success" ? "🦊" : "🐻";
  const mascotName = type === "success" ? "Volpix" : "Orsetto";

  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-50",
        "flex items-end gap-3 max-w-lg w-[90%] md:w-auto",
        "animate-bounce-in"
      )}
    >
      {/* Avatar Mascotte */}
      <div
        className={cn(
          "relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24",
          "rounded-full shadow-xl",
          "flex items-center justify-center",
          "animate-float",
          type === "success"
            ? "bg-gradient-to-br from-success/90 to-emerald-400"
            : "bg-gradient-to-br from-amber-400 to-orange-400"
        )}
      >
        {/* Mascotte */}
        <span className="text-4xl md:text-5xl drop-shadow-md">
          {mascotEmoji}
        </span>

        {/* Stelline decorative per successo */}
        {type === "success" && (
          <>
            <span className="absolute -top-1 -right-1 text-lg animate-pulse">⭐</span>
            <span className="absolute -bottom-1 -left-1 text-sm animate-pulse delay-150">✨</span>
          </>
        )}
      </div>

      {/* Fumetto con messaggio */}
      <div
        className={cn(
          "relative px-6 py-4 rounded-2xl shadow-xl",
          "before:content-[''] before:absolute before:left-0 before:bottom-4",
          "before:w-0 before:h-0 before:-translate-x-3",
          "before:border-t-[10px] before:border-t-transparent",
          "before:border-b-[10px] before:border-b-transparent",
          "before:border-r-[12px]",
          type === "success"
            ? "bg-gradient-to-r from-success to-emerald-400 before:border-r-success"
            : "bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300 before:border-r-amber-100"
        )}
      >
        {/* Emoji extra */}
        <div className="flex items-start gap-2">
          <span className="text-2xl md:text-3xl flex-shrink-0">
            {emoji || (type === "success" ? "🎉" : "💪")}
          </span>
          <div>
            <p
              className={cn(
                "text-lg md:text-xl font-bold leading-snug",
                type === "success" ? "text-white" : "text-amber-900"
              )}
            >
              {message}
            </p>
            <p
              className={cn(
                "text-xs md:text-sm mt-1 opacity-80",
                type === "success" ? "text-white/80" : "text-amber-700"
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

export default FeedbackAvatar;
