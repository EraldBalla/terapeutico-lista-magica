/**
 * Shared GameCard component for game selection screens.
 * Cartoon-style card with gradient background.
 */
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface GameCardProps {
  title: string;
  titleHighlight?: string;
  description: string;
  icons: React.ReactNode[];
  features?: React.ReactNode[];
  onPlay: () => void;
  playLabel?: string;
  extraActions?: React.ReactNode;
  variant?: "orange" | "purple" | "amber" | "teal" | "green";
  className?: string;
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
  icons,
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
        "bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8",
        "shadow-xl border-2 hover:shadow-2xl hover:scale-[1.02] transition-all",
        variantStyles.border,
        className
      )}
    >
      {/* Animated icons */}
      <div className="flex justify-center gap-2 mb-4">
        {icons.map((icon, i) => (
          <div
            key={i}
            className="w-10 h-10 md:w-12 md:h-12 animate-float"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {icon}
          </div>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-3">
        {title}{" "}
        {titleHighlight && (
          <span className={variantStyles.titleColor}>{titleHighlight}</span>
        )}
      </h2>

      {/* Description */}
      <p className="text-muted-foreground text-center mb-6 leading-relaxed">
        {description}
      </p>

      {/* Feature pills */}
      {features && features.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {features}
        </div>
      )}

      {/* Play button */}
      <Button
        onClick={onPlay}
        size="lg"
        className={cn(
          "w-full gap-3 text-lg py-7 rounded-2xl font-bold",
          "shadow-lg hover:shadow-xl transition-all",
          `bg-gradient-to-r ${variantStyles.gradient}`
        )}
      >
        <Play className="w-6 h-6 fill-current" />
        {playLabel}
      </Button>

      {/* Extra actions */}
      {extraActions && <div className="mt-3">{extraActions}</div>}
    </div>
  );
};

export default GameCard;
