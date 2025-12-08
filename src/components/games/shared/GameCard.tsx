/**
 * Shared GameCard component for game selection screens.
 * Clean cartoon-style card with single illustration.
 */
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface GameCardProps {
  title: string;
  titleHighlight?: string;
  description: string;
  illustration?: React.ReactNode;
  features?: React.ReactNode[];
  onPlay: () => void;
  playLabel?: string;
  extraActions?: React.ReactNode;
  variant?: "orange" | "purple" | "amber" | "teal" | "green";
  className?: string;
  /** @deprecated Use illustration instead */
  icons?: React.ReactNode[];
}

const VARIANTS = {
  orange: {
    border: "border-orange-100",
    gradient: "from-primary to-orange-500",
    titleColor: "text-primary",
  },
  purple: {
    border: "border-purple-100",
    gradient: "from-purple-500 to-pink-500",
    titleColor: "text-purple-500",
  },
  amber: {
    border: "border-amber-100",
    gradient: "from-orange-500 to-pink-500",
    titleColor: "bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent",
  },
  teal: {
    border: "border-teal-100",
    gradient: "from-teal-500 to-cyan-500",
    titleColor: "text-teal-600",
  },
  green: {
    border: "border-green-100",
    gradient: "from-green-500 to-emerald-500",
    titleColor: "text-green-600",
  },
};

const GameCard = ({
  title,
  titleHighlight,
  description,
  illustration,
  features,
  onPlay,
  playLabel = "Gioca",
  extraActions,
  variant = "orange",
  className,
}: GameCardProps) => {
  const variantStyles = VARIANTS[variant];

  return (
    <div
      className={cn(
        "bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8",
        "shadow-lg border hover:shadow-xl hover:scale-[1.01] transition-all duration-300",
        variantStyles.border,
        className
      )}
    >
      {/* Single illustration */}
      {illustration && (
        <div className="w-32 h-28 md:w-40 md:h-36 mx-auto mb-5">
          {illustration}
        </div>
      )}

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-2">
        {title}{" "}
        {titleHighlight && (
          <span className={variantStyles.titleColor}>{titleHighlight}</span>
        )}
      </h2>

      {/* Description */}
      <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Feature pills */}
      {features && features.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {features}
        </div>
      )}

      {/* Play button */}
      <Button
        onClick={onPlay}
        size="lg"
        className={cn(
          "w-full gap-2 text-base py-6 rounded-xl font-bold",
          "shadow-md hover:shadow-lg transition-all",
          `bg-gradient-to-r ${variantStyles.gradient}`
        )}
      >
        <Play className="w-5 h-5 fill-current" />
        {playLabel}
      </Button>

      {/* Extra actions */}
      {extraActions && <div className="mt-3">{extraActions}</div>}
    </div>
  );
};

export default GameCard;
