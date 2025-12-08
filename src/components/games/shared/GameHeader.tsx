/**
 * Shared GameHeader component for all therapeutic games.
 * Provides consistent styling across games.
 */
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface GameHeaderProps {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  badge?: string;
  onBack?: () => void;
  backLabel?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  titleGradient?: string;
}

const GameHeader = ({
  title,
  titleHighlight,
  subtitle,
  badge = "Gioco Terapeutico",
  onBack,
  backLabel = "Indietro",
  className,
  size = "lg",
  titleGradient = "from-primary to-orange-500",
}: GameHeaderProps) => {
  const titleSizes = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl lg:text-6xl",
  };

  const subtitleSizes = {
    sm: "text-sm md:text-base",
    md: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
  };

  return (
    <div className={cn("w-full", className)}>
      {onBack && (
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4 md:mb-6 text-muted-foreground hover:text-foreground hover:bg-white/50 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Button>
      )}

      <div className="text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm font-bold mb-4 md:mb-6 shadow-md border border-primary/20">
            <Sparkles className="w-4 h-4" />
            {badge}
          </div>
        )}

        <h1
          className={cn(
            "font-extrabold text-foreground leading-tight mb-2 md:mb-4",
            titleSizes[size]
          )}
        >
          {title}{" "}
          {titleHighlight && (
            <span
              className={cn(
                "bg-gradient-to-r bg-clip-text text-transparent",
                titleGradient
              )}
            >
              {titleHighlight}
            </span>
          )}
        </h1>

        {subtitle && (
          <p
            className={cn(
              "text-foreground/80 max-w-2xl mx-auto font-medium",
              subtitleSizes[size]
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default GameHeader;
