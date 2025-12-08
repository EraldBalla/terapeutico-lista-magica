/**
 * Shared ReinforcementBanner component for positive feedback messages.
 * Fixed height to prevent layout shifts.
 * Used across all therapeutic games.
 */
import { cn } from "@/lib/utils";

interface ReinforcementBannerProps {
  type: "success" | "error" | "info";
  message: string;
  visible?: boolean;
  className?: string;
  mascot?: "fox" | "bear" | "star";
}

const MASCOT_CONFIG = {
  fox: {
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <ellipse cx="20" cy="24" rx="14" ry="12" fill="#FF9800" />
        <path d="M6 20 Q2 8, 12 14" fill="#FF9800" />
        <path d="M34 20 Q38 8, 28 14" fill="#FF9800" />
        <ellipse cx="20" cy="28" rx="8" ry="6" fill="white" />
        <circle cx="14" cy="22" r="3" fill="#3B2820" />
        <circle cx="26" cy="22" r="3" fill="#3B2820" />
        <circle cx="15" cy="21" r="1" fill="white" />
        <circle cx="27" cy="21" r="1" fill="white" />
        <ellipse cx="20" cy="26" rx="2" ry="1.5" fill="#3B2820" />
        <path d="M16 30 Q20 34, 24 30" stroke="#5D4037" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    name: "Volpix",
  },
  bear: {
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <circle cx="20" cy="22" r="14" fill="#8D6E63" />
        <circle cx="10" cy="12" r="6" fill="#8D6E63" />
        <circle cx="30" cy="12" r="6" fill="#8D6E63" />
        <circle cx="10" cy="12" r="3" fill="#A1887F" />
        <circle cx="30" cy="12" r="3" fill="#A1887F" />
        <ellipse cx="20" cy="26" rx="8" ry="6" fill="#FFCC80" />
        <circle cx="14" cy="20" r="3" fill="#3B2820" />
        <circle cx="26" cy="20" r="3" fill="#3B2820" />
        <circle cx="15" cy="19" r="1" fill="white" />
        <circle cx="27" cy="19" r="1" fill="white" />
        <ellipse cx="20" cy="26" rx="3" ry="2" fill="#5D4037" />
        <path d="M16 30 Q20 34, 24 30" stroke="#5D4037" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    name: "Orsetto",
  },
  star: {
    svg: (
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <polygon
          points="20,2 24,14 38,14 27,22 31,36 20,28 9,36 13,22 2,14 16,14"
          fill="#FFD700"
          stroke="#FFA000"
          strokeWidth="2"
        />
        <circle cx="16" cy="18" r="2" fill="#3B2820" />
        <circle cx="24" cy="18" r="2" fill="#3B2820" />
        <path d="M16 24 Q20 28, 24 24" stroke="#5D4037" strokeWidth="2" fill="none" />
      </svg>
    ),
    name: "Stellina",
  },
};

const TYPE_STYLES = {
  success: {
    bg: "bg-gradient-to-r from-emerald-50 to-green-100",
    border: "border-success/40",
    text: "text-emerald-800",
    subtext: "text-emerald-700",
    mascotBg: "bg-gradient-to-br from-success to-emerald-400",
    defaultMascot: "fox" as const,
  },
  error: {
    bg: "bg-gradient-to-r from-amber-50 to-orange-100",
    border: "border-amber-300",
    text: "text-amber-900",
    subtext: "text-amber-700",
    mascotBg: "bg-gradient-to-br from-amber-400 to-orange-400",
    defaultMascot: "bear" as const,
  },
  info: {
    bg: "bg-gradient-to-r from-blue-50 to-cyan-100",
    border: "border-blue-300",
    text: "text-blue-900",
    subtext: "text-blue-700",
    mascotBg: "bg-gradient-to-br from-blue-400 to-cyan-400",
    defaultMascot: "star" as const,
  },
};

const ReinforcementBanner = ({
  type,
  message,
  visible = true,
  className,
  mascot,
}: ReinforcementBannerProps) => {
  const styles = TYPE_STYLES[type];
  const mascotKey = mascot || styles.defaultMascot;
  const mascotConfig = MASCOT_CONFIG[mascotKey];

  if (!visible) {
    // Return empty placeholder to prevent layout shift
    return <div className={cn("min-h-[80px] w-full", className)} />;
  }

  return (
    <div
      className={cn(
        "w-full animate-bounce-in",
        "flex items-center gap-3 md:gap-4 p-3 md:p-4",
        "rounded-2xl shadow-lg border-2",
        styles.bg,
        styles.border,
        className
      )}
    >
      {/* Mascot Avatar */}
      <div
        className={cn(
          "relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14",
          "rounded-full shadow-md overflow-hidden",
          "flex items-center justify-center",
          styles.mascotBg
        )}
      >
        <div className="w-10 h-10 md:w-12 md:h-12">{mascotConfig.svg}</div>
        {type === "success" && (
          <span className="absolute -top-1 -right-1 text-sm animate-pulse">
            ⭐
          </span>
        )}
      </div>

      {/* Message Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2">
          <span className="text-xl md:text-2xl flex-shrink-0">
            {type === "success" ? "🎉" : type === "error" ? "💪" : "💡"}
          </span>
          <div className="flex-1 min-w-0">
            <p
              className={cn(
                "text-base md:text-lg font-bold leading-snug break-words",
                styles.text
              )}
            >
              {message}
            </p>
            <p className={cn("text-xs md:text-sm mt-0.5 opacity-70", styles.subtext)}>
              — {mascotConfig.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReinforcementBanner;
