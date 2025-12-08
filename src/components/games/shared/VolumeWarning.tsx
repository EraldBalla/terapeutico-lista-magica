/**
 * Shared VolumeWarning component for games with audio.
 * Uses cartoon-style headphones icon.
 */
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";
import { HeadphonesIcon } from "./CartoonIcons";

interface VolumeWarningProps {
  className?: string;
  compact?: boolean;
}

const VolumeWarning = ({ className, compact = false }: VolumeWarningProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border-2",
        "bg-gradient-to-r from-amber-100 to-orange-100 border-amber-300",
        "shadow-md",
        compact ? "p-3" : "p-4 md:p-5",
        className
      )}
    >
      <div className="flex items-center gap-3 md:gap-4">
        {/* Headphones cartoon icon */}
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-amber-200 rounded-xl flex items-center justify-center shadow-sm">
          <div className="w-7 h-7 md:w-8 md:h-8">
            <HeadphonesIcon />
          </div>
        </div>

        {/* Warning content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span className="font-bold text-amber-800 text-sm md:text-base">
              Attenzione al volume!
            </span>
          </div>
          <p className="text-amber-700 text-xs md:text-sm leading-relaxed">
            Se il bambino usa le cuffie, abbassa il volume.{" "}
            {!compact && "Suoni troppo forti possono dare fastidio o spaventare."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolumeWarning;
