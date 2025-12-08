/**
 * Shared FeaturePill component for displaying game features.
 */
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeaturePillProps {
  icon: LucideIcon | React.FC<{ className?: string }>;
  label: string;
  variant?: "orange" | "green" | "blue" | "purple" | "pink" | "amber" | "teal";
  className?: string;
}

const VARIANTS = {
  orange: "bg-orange-100 text-orange-700 border-orange-200",
  green: "bg-green-100 text-green-700 border-green-200",
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200",
  pink: "bg-pink-100 text-pink-700 border-pink-200",
  amber: "bg-amber-100 text-amber-700 border-amber-200",
  teal: "bg-teal-100 text-teal-700 border-teal-200",
};

const FeaturePill = ({
  icon: Icon,
  label,
  variant = "orange",
  className,
}: FeaturePillProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2",
        "rounded-full text-sm font-semibold",
        "border shadow-sm",
        VARIANTS[variant],
        className
      )}
    >
      <Icon className="w-4 h-4" />
      {label}
    </span>
  );
};

export default FeaturePill;
