/**
 * Shared cartoon-style SVG icons for all therapeutic games.
 * Replaces emoji with consistent illustrated style.
 */
import React from "react";

interface IconProps {
  className?: string;
}

// ========== ANIMALS ==========
export const CowIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="24" cy="28" rx="18" ry="16" fill="#F5F5F5" />
    <ellipse cx="24" cy="30" rx="12" ry="8" fill="#FFCC80" />
    <circle cx="18" cy="28" r="2" fill="#5D4037" />
    <circle cx="30" cy="28" r="2" fill="#5D4037" />
    <circle cx="16" cy="14" r="8" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1" />
    <circle cx="32" cy="14" r="8" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1" />
    <ellipse cx="16" cy="8" rx="4" ry="5" fill="#FFCC80" />
    <ellipse cx="32" cy="8" rx="4" ry="5" fill="#FFCC80" />
    <circle cx="14" cy="22" r="5" fill="white" stroke="#5D4037" strokeWidth="1.5" />
    <circle cx="34" cy="22" r="5" fill="white" stroke="#5D4037" strokeWidth="1.5" />
    <circle cx="15" cy="22" r="2.5" fill="#3B2820" />
    <circle cx="35" cy="22" r="2.5" fill="#3B2820" />
    <ellipse cx="10" cy="34" rx="4" ry="3" fill="#5D4037" opacity="0.4" />
    <ellipse cx="38" cy="36" rx="3" ry="2" fill="#5D4037" opacity="0.4" />
  </svg>
);

export const DogIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="24" cy="28" rx="16" ry="14" fill="#A1887F" />
    <path d="M8 16 Q6 6, 14 12 Q12 20, 12 24" fill="#8D6E63" />
    <path d="M40 16 Q42 6, 34 12 Q36 20, 36 24" fill="#8D6E63" />
    <circle cx="17" cy="24" r="4" fill="white" stroke="#5D4037" strokeWidth="1" />
    <circle cx="31" cy="24" r="4" fill="white" stroke="#5D4037" strokeWidth="1" />
    <circle cx="18" cy="24" r="2" fill="#3B2820" />
    <circle cx="32" cy="24" r="2" fill="#3B2820" />
    <ellipse cx="24" cy="32" rx="8" ry="6" fill="#FFCC80" />
    <ellipse cx="24" cy="30" rx="5" ry="3" fill="#5D4037" />
    <path d="M20 36 Q24 40, 28 36" stroke="#D32F2F" strokeWidth="2" fill="#FFCDD2" />
  </svg>
);

export const CatIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="24" cy="30" rx="16" ry="14" fill="#FFB74D" />
    <path d="M8 28 L4 6 L16 18" fill="#FFB74D" stroke="#F57C00" strokeWidth="1" />
    <path d="M40 28 L44 6 L32 18" fill="#FFB74D" stroke="#F57C00" strokeWidth="1" />
    <path d="M6 10 L12 16" stroke="#FFCC80" strokeWidth="2" />
    <path d="M42 10 L36 16" stroke="#FFCC80" strokeWidth="2" />
    <ellipse cx="16" cy="26" rx="5" ry="6" fill="white" stroke="#5D4037" strokeWidth="1" />
    <ellipse cx="32" cy="26" rx="5" ry="6" fill="white" stroke="#5D4037" strokeWidth="1" />
    <ellipse cx="17" cy="27" rx="2" ry="4" fill="#4CAF50" />
    <ellipse cx="33" cy="27" rx="2" ry="4" fill="#4CAF50" />
    <circle cx="17" cy="27" r="1" fill="#1B5E20" />
    <circle cx="33" cy="27" r="1" fill="#1B5E20" />
    <path d="M22 34 L24 36 L26 34" fill="#FFCDD2" stroke="#D32F2F" strokeWidth="1" />
    <line x1="8" y1="30" x2="18" y2="32" stroke="#5D4037" strokeWidth="1" />
    <line x1="8" y1="34" x2="18" y2="34" stroke="#5D4037" strokeWidth="1" />
    <line x1="40" y1="30" x2="30" y2="32" stroke="#5D4037" strokeWidth="1" />
    <line x1="40" y1="34" x2="30" y2="34" stroke="#5D4037" strokeWidth="1" />
  </svg>
);

export const DuckIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="28" cy="32" rx="16" ry="12" fill="#FFEB3B" />
    <circle cx="18" cy="18" r="12" fill="#FFEB3B" />
    <ellipse cx="10" cy="22" rx="8" ry="4" fill="#FF9800" />
    <circle cx="20" cy="14" r="4" fill="white" stroke="#5D4037" strokeWidth="1" />
    <circle cx="21" cy="14" r="2" fill="#3B2820" />
    <path d="M40 36 Q44 42, 38 44" fill="#FF9800" />
    <ellipse cx="14" cy="12" rx="2" ry="1" fill="#5D4037" opacity="0.3" />
  </svg>
);

export const HorseIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="28" cy="34" rx="14" ry="10" fill="#8D6E63" />
    <path d="M16 32 Q8 24, 12 12 Q16 8, 20 12 L22 28" fill="#8D6E63" />
    <path d="M12 8 Q8 4, 10 10 Q8 16, 12 12" fill="#5D4037" />
    <path d="M18 8 Q22 4, 20 10 Q22 16, 18 12" fill="#5D4037" />
    <circle cx="16" cy="18" r="3" fill="white" stroke="#5D4037" strokeWidth="1" />
    <circle cx="17" cy="18" r="1.5" fill="#3B2820" />
    <ellipse cx="14" cy="26" rx="4" ry="3" fill="#FFCC80" />
    <circle cx="12" cy="26" r="1" fill="#5D4037" />
    <circle cx="16" cy="26" r="1" fill="#5D4037" />
    <path d="M14 6 Q18 2, 22 6" stroke="#5D4037" strokeWidth="3" fill="none" />
  </svg>
);

export const SheepIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <circle cx="12" cy="28" r="8" fill="#FAFAFA" />
    <circle cx="36" cy="28" r="8" fill="#FAFAFA" />
    <circle cx="24" cy="22" r="10" fill="#FAFAFA" />
    <circle cx="18" cy="30" r="7" fill="#FAFAFA" />
    <circle cx="30" cy="30" r="7" fill="#FAFAFA" />
    <circle cx="24" cy="34" r="8" fill="#FAFAFA" />
    <ellipse cx="24" cy="20" rx="8" ry="6" fill="#FFE0B2" />
    <circle cx="20" cy="18" r="2" fill="#5D4037" />
    <circle cx="28" cy="18" r="2" fill="#5D4037" />
    <ellipse cx="24" cy="24" rx="3" ry="2" fill="#5D4037" />
    <path d="M16 12 Q14 6, 18 10" stroke="#5D4037" strokeWidth="2" fill="none" />
    <path d="M32 12 Q34 6, 30 10" stroke="#5D4037" strokeWidth="2" fill="none" />
  </svg>
);

export const PigIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="24" cy="28" rx="18" ry="14" fill="#FFAB91" />
    <ellipse cx="10" cy="20" rx="5" ry="7" fill="#FFAB91" stroke="#E64A19" strokeWidth="1" />
    <ellipse cx="38" cy="20" rx="5" ry="7" fill="#FFAB91" stroke="#E64A19" strokeWidth="1" />
    <circle cx="16" cy="24" r="4" fill="white" stroke="#5D4037" strokeWidth="1" />
    <circle cx="32" cy="24" r="4" fill="white" stroke="#5D4037" strokeWidth="1" />
    <circle cx="17" cy="24" r="2" fill="#3B2820" />
    <circle cx="33" cy="24" r="2" fill="#3B2820" />
    <ellipse cx="24" cy="34" rx="10" ry="6" fill="#FF8A65" stroke="#E64A19" strokeWidth="1" />
    <ellipse cx="20" cy="34" rx="2" ry="3" fill="#5D4037" />
    <ellipse cx="28" cy="34" rx="2" ry="3" fill="#5D4037" />
  </svg>
);

export const RoosterIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="26" cy="32" rx="14" ry="12" fill="#FF9800" />
    <circle cx="20" cy="20" r="10" fill="#FF9800" />
    <path d="M14 16 Q10 8, 18 10 Q14 4, 22 8 Q20 2, 28 10" fill="#E53935" />
    <circle cx="22" cy="18" r="3" fill="white" stroke="#5D4037" strokeWidth="1" />
    <circle cx="23" cy="18" r="1.5" fill="#3B2820" />
    <path d="M12 24 L6 28 L12 28" fill="#FFD54F" stroke="#F57C00" strokeWidth="1" />
    <path d="M14 28 Q16 34, 12 36 Q8 34, 10 30" fill="#E53935" />
    <path d="M38 36 Q44 34, 40 40 Q36 42, 34 38" fill="#FF9800" stroke="#F57C00" strokeWidth="1" />
    <path d="M38 40 Q42 40, 38 44" fill="#FF9800" stroke="#F57C00" strokeWidth="1" />
  </svg>
);

export const LionIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <circle cx="24" cy="24" r="20" fill="#FF9800" />
    <circle cx="24" cy="26" r="14" fill="#FFB74D" />
    <circle cx="17" cy="22" r="4" fill="white" stroke="#5D4037" strokeWidth="1" />
    <circle cx="31" cy="22" r="4" fill="white" stroke="#5D4037" strokeWidth="1" />
    <circle cx="18" cy="22" r="2" fill="#3B2820" />
    <circle cx="32" cy="22" r="2" fill="#3B2820" />
    <ellipse cx="24" cy="30" rx="6" ry="4" fill="#FFCC80" />
    <ellipse cx="24" cy="28" rx="3" ry="2" fill="#5D4037" />
    <path d="M20 34 Q24 38, 28 34" stroke="#5D4037" strokeWidth="2" fill="none" />
    <line x1="14" y1="32" x2="8" y2="34" stroke="#5D4037" strokeWidth="1" />
    <line x1="14" y1="34" x2="8" y2="36" stroke="#5D4037" strokeWidth="1" />
    <line x1="34" y1="32" x2="40" y2="34" stroke="#5D4037" strokeWidth="1" />
    <line x1="34" y1="34" x2="40" y2="36" stroke="#5D4037" strokeWidth="1" />
  </svg>
);

export const BirdIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="26" cy="28" rx="14" ry="12" fill="#64B5F6" />
    <circle cx="18" cy="20" r="10" fill="#64B5F6" />
    <circle cx="20" cy="18" r="3" fill="white" stroke="#5D4037" strokeWidth="1" />
    <circle cx="21" cy="18" r="1.5" fill="#3B2820" />
    <path d="M8 22 L2 20 L8 24" fill="#FF9800" />
    <path d="M38 32 Q46 28, 44 36 Q40 34, 36 34" fill="#42A5F5" />
    <path d="M20 10 Q22 4, 26 10" fill="#1976D2" />
    <ellipse cx="12" cy="22" rx="3" ry="6" fill="#42A5F5" />
  </svg>
);

export const FrogIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="24" cy="32" rx="18" ry="12" fill="#66BB6A" />
    <circle cx="12" cy="18" r="8" fill="#66BB6A" />
    <circle cx="36" cy="18" r="8" fill="#66BB6A" />
    <circle cx="12" cy="16" r="5" fill="white" stroke="#2E7D32" strokeWidth="1" />
    <circle cx="36" cy="16" r="5" fill="white" stroke="#2E7D32" strokeWidth="1" />
    <circle cx="13" cy="16" r="2.5" fill="#3B2820" />
    <circle cx="37" cy="16" r="2.5" fill="#3B2820" />
    <ellipse cx="24" cy="34" rx="10" ry="6" fill="#81C784" />
    <path d="M16 36 Q24 42, 32 36" stroke="#2E7D32" strokeWidth="2" fill="none" />
    <circle cx="20" cy="32" r="2" fill="#E91E63" />
    <circle cx="28" cy="32" r="2" fill="#E91E63" />
  </svg>
);

export const BeeIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="28" cy="28" rx="14" ry="10" fill="#FFD54F" />
    <rect x="20" y="20" width="4" height="16" fill="#3B2820" />
    <rect x="28" y="20" width="4" height="16" fill="#3B2820" />
    <circle cx="16" cy="24" r="8" fill="#FFD54F" />
    <circle cx="14" cy="22" r="3" fill="white" stroke="#5D4037" strokeWidth="1" />
    <circle cx="15" cy="22" r="1.5" fill="#3B2820" />
    <ellipse cx="32" cy="12" rx="8" ry="5" fill="white" opacity="0.7" stroke="#BDBDBD" strokeWidth="1" />
    <ellipse cx="40" cy="16" rx="6" ry="4" fill="white" opacity="0.7" stroke="#BDBDBD" strokeWidth="1" />
    <path d="M40 30 L44 34" stroke="#3B2820" strokeWidth="2" />
    <path d="M10 18 Q8 14, 12 14" stroke="#3B2820" strokeWidth="2" fill="none" />
    <path d="M18 18 Q20 14, 16 14" stroke="#3B2820" strokeWidth="2" fill="none" />
  </svg>
);

export const ElephantIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="28" cy="28" rx="16" ry="14" fill="#90A4AE" />
    <circle cx="16" cy="20" r="12" fill="#90A4AE" />
    <path d="M8 24 Q4 32, 8 42 Q12 44, 14 40 Q10 34, 12 28" fill="#90A4AE" stroke="#607D8B" strokeWidth="1" />
    <ellipse cx="6" cy="16" rx="6" ry="10" fill="#90A4AE" stroke="#607D8B" strokeWidth="1" />
    <ellipse cx="26" cy="16" rx="5" ry="8" fill="#90A4AE" stroke="#607D8B" strokeWidth="1" />
    <circle cx="14" cy="18" r="3" fill="white" stroke="#455A64" strokeWidth="1" />
    <circle cx="15" cy="18" r="1.5" fill="#3B2820" />
    <ellipse cx="5" cy="14" rx="3" ry="5" fill="#FFCDD2" />
    <ellipse cx="27" cy="14" rx="2" ry="4" fill="#FFCDD2" />
  </svg>
);

export const SnakeIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M8 24 Q16 12, 24 24 Q32 36, 40 24 Q44 18, 40 14" stroke="#66BB6A" strokeWidth="8" fill="none" strokeLinecap="round" />
    <circle cx="40" cy="14" r="6" fill="#66BB6A" />
    <circle cx="38" cy="12" r="2" fill="white" stroke="#2E7D32" strokeWidth="0.5" />
    <circle cx="42" cy="12" r="2" fill="white" stroke="#2E7D32" strokeWidth="0.5" />
    <circle cx="38" cy="12" r="1" fill="#3B2820" />
    <circle cx="42" cy="12" r="1" fill="#3B2820" />
    <path d="M40 18 L42 22 L38 22 Z" fill="#E53935" />
    <ellipse cx="24" cy="24" rx="2" ry="1" fill="#2E7D32" />
    <ellipse cx="16" cy="18" rx="2" ry="1" fill="#2E7D32" />
    <ellipse cx="32" cy="30" rx="2" ry="1" fill="#2E7D32" />
  </svg>
);

export const OwlIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="24" cy="28" rx="16" ry="16" fill="#8D6E63" />
    <path d="M8 20 Q4 8, 16 16" fill="#8D6E63" />
    <path d="M40 20 Q44 8, 32 16" fill="#8D6E63" />
    <circle cx="16" cy="24" r="8" fill="white" stroke="#5D4037" strokeWidth="2" />
    <circle cx="32" cy="24" r="8" fill="white" stroke="#5D4037" strokeWidth="2" />
    <circle cx="17" cy="24" r="4" fill="#FF9800" />
    <circle cx="33" cy="24" r="4" fill="#FF9800" />
    <circle cx="17" cy="24" r="2" fill="#3B2820" />
    <circle cx="33" cy="24" r="2" fill="#3B2820" />
    <path d="M24 32 L20 38 L24 36 L28 38 Z" fill="#FF9800" />
    <ellipse cx="24" cy="40" rx="8" ry="4" fill="#A1887F" />
    <path d="M16 42 Q24 46, 32 42" stroke="#795548" strokeWidth="2" fill="none" />
  </svg>
);

export const WolfIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="24" cy="30" rx="16" ry="14" fill="#78909C" />
    <path d="M10 28 Q4 12, 14 20 L16 28" fill="#78909C" />
    <path d="M38 28 Q44 12, 34 20 L32 28" fill="#78909C" />
    <path d="M6 14 L10 20" stroke="#90A4AE" strokeWidth="2" />
    <path d="M42 14 L38 20" stroke="#90A4AE" strokeWidth="2" />
    <circle cx="16" cy="26" r="4" fill="white" stroke="#455A64" strokeWidth="1" />
    <circle cx="32" cy="26" r="4" fill="white" stroke="#455A64" strokeWidth="1" />
    <circle cx="17" cy="26" r="2" fill="#FFC107" />
    <circle cx="33" cy="26" r="2" fill="#FFC107" />
    <ellipse cx="24" cy="36" rx="8" ry="5" fill="#B0BEC5" />
    <ellipse cx="24" cy="34" rx="4" ry="2" fill="#3B2820" />
    <path d="M18 40 Q24 44, 30 40" stroke="#455A64" strokeWidth="2" fill="none" />
  </svg>
);

export const MouseIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="24" cy="30" rx="14" ry="12" fill="#BDBDBD" />
    <circle cx="10" cy="20" r="8" fill="#FFCDD2" stroke="#BDBDBD" strokeWidth="2" />
    <circle cx="38" cy="20" r="8" fill="#FFCDD2" stroke="#BDBDBD" strokeWidth="2" />
    <circle cx="18" cy="26" r="3" fill="#3B2820" />
    <circle cx="30" cy="26" r="3" fill="#3B2820" />
    <circle cx="19" cy="25" r="1" fill="white" />
    <circle cx="31" cy="25" r="1" fill="white" />
    <ellipse cx="24" cy="34" rx="4" ry="3" fill="#FFCDD2" />
    <line x1="10" y1="32" x2="4" y2="30" stroke="#9E9E9E" strokeWidth="1" />
    <line x1="10" y1="34" x2="4" y2="34" stroke="#9E9E9E" strokeWidth="1" />
    <line x1="10" y1="36" x2="4" y2="38" stroke="#9E9E9E" strokeWidth="1" />
    <line x1="38" y1="32" x2="44" y2="30" stroke="#9E9E9E" strokeWidth="1" />
    <line x1="38" y1="34" x2="44" y2="34" stroke="#9E9E9E" strokeWidth="1" />
    <line x1="38" y1="36" x2="44" y2="38" stroke="#9E9E9E" strokeWidth="1" />
  </svg>
);

export const DonkeyIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="28" cy="34" rx="14" ry="10" fill="#9E9E9E" />
    <path d="M16 32 Q8 24, 12 14 L18 12 L20 28" fill="#9E9E9E" />
    <path d="M8 8 Q6 2, 12 8 L14 14" fill="#9E9E9E" stroke="#757575" strokeWidth="1" />
    <path d="M18 8 Q20 2, 14 8" fill="#9E9E9E" stroke="#757575" strokeWidth="1" />
    <path d="M10 6 L12 12" stroke="#BDBDBD" strokeWidth="2" />
    <path d="M16 6 L14 12" stroke="#BDBDBD" strokeWidth="2" />
    <circle cx="14" cy="20" r="3" fill="white" stroke="#616161" strokeWidth="1" />
    <circle cx="15" cy="20" r="1.5" fill="#3B2820" />
    <ellipse cx="14" cy="28" rx="5" ry="4" fill="#BDBDBD" />
    <circle cx="12" cy="28" r="1" fill="#616161" />
    <circle cx="16" cy="28" r="1" fill="#616161" />
  </svg>
);

// ========== VEHICLES ==========
export const TrainIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <rect x="8" y="16" width="32" height="20" rx="4" fill="#E53935" />
    <rect x="12" y="20" width="10" height="8" rx="2" fill="#BBDEFB" />
    <rect x="26" y="20" width="10" height="8" rx="2" fill="#BBDEFB" />
    <rect x="6" y="32" width="36" height="6" fill="#424242" />
    <circle cx="14" cy="40" r="4" fill="#616161" stroke="#424242" strokeWidth="2" />
    <circle cx="34" cy="40" r="4" fill="#616161" stroke="#424242" strokeWidth="2" />
    <rect x="16" y="8" width="8" height="10" rx="2" fill="#212121" />
    <ellipse cx="20" cy="6" rx="6" ry="2" fill="#9E9E9E" />
    <circle cx="20" cy="4" r="2" fill="#BDBDBD" />
  </svg>
);

export const CarIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M6 28 Q6 22, 12 22 L14 16 Q18 12, 30 12 L34 16 L36 22 Q42 22, 42 28 L42 34 L6 34 Z" fill="#2196F3" />
    <rect x="12" y="16" width="10" height="8" rx="2" fill="#BBDEFB" />
    <rect x="26" y="16" width="10" height="8" rx="2" fill="#BBDEFB" />
    <rect x="4" y="32" width="40" height="6" rx="2" fill="#1976D2" />
    <circle cx="14" cy="38" r="5" fill="#424242" stroke="#212121" strokeWidth="2" />
    <circle cx="34" cy="38" r="5" fill="#424242" stroke="#212121" strokeWidth="2" />
    <circle cx="14" cy="38" r="2" fill="#9E9E9E" />
    <circle cx="34" cy="38" r="2" fill="#9E9E9E" />
    <rect x="38" y="24" width="4" height="3" rx="1" fill="#FFEB3B" />
    <rect x="6" y="24" width="4" height="3" rx="1" fill="#FFEB3B" />
  </svg>
);

export const AmbulanceIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <rect x="4" y="18" width="32" height="18" rx="3" fill="white" stroke="#E53935" strokeWidth="2" />
    <path d="M36 26 Q44 26, 44 32 L44 36 L36 36 Z" fill="white" stroke="#E53935" strokeWidth="2" />
    <rect x="38" y="28" width="4" height="4" fill="#BBDEFB" />
    <rect x="16" y="22" width="8" height="2" fill="#E53935" />
    <rect x="18" y="20" width="4" height="6" fill="#E53935" />
    <rect x="6" y="22" width="6" height="6" fill="#BBDEFB" />
    <circle cx="14" cy="40" r="4" fill="#424242" stroke="#212121" strokeWidth="2" />
    <circle cx="38" cy="40" r="4" fill="#424242" stroke="#212121" strokeWidth="2" />
    <rect x="2" y="12" width="6" height="4" rx="1" fill="#2196F3" />
    <rect x="10" y="12" width="6" height="4" rx="1" fill="#E53935" />
  </svg>
);

export const HornIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M12 20 Q8 24, 12 28 L36 34 Q44 36, 44 24 Q44 12, 36 14 L12 20" fill="#FFD54F" stroke="#F57C00" strokeWidth="2" />
    <ellipse cx="10" cy="24" rx="4" ry="6" fill="#F57C00" />
    <circle cx="36" cy="24" r="3" fill="#FFF8E1" />
    <path d="M40 16 Q44 12, 46 16" stroke="#FFB300" strokeWidth="2" fill="none" />
    <path d="M42 20 Q46 18, 48 22" stroke="#FFB300" strokeWidth="2" fill="none" />
    <path d="M40 32 Q44 36, 46 32" stroke="#FFB300" strokeWidth="2" fill="none" />
  </svg>
);

export const PlaneIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="24" cy="24" rx="20" ry="6" fill="#90CAF9" />
    <ellipse cx="40" cy="24" rx="4" ry="3" fill="#64B5F6" />
    <path d="M20 24 L8 16 L8 20 L18 24 L8 28 L8 32 L20 24" fill="#1976D2" />
    <path d="M28 24 L28 12 L32 12 L32 24" fill="#1976D2" />
    <path d="M28 24 L28 36 L32 36 L32 24" fill="#1976D2" />
    <circle cx="14" cy="22" r="3" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1" />
    <circle cx="22" cy="22" r="3" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1" />
    <circle cx="30" cy="22" r="3" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1" />
  </svg>
);

export const MotorcycleIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <circle cx="10" cy="36" r="8" fill="#424242" stroke="#212121" strokeWidth="2" />
    <circle cx="38" cy="36" r="8" fill="#424242" stroke="#212121" strokeWidth="2" />
    <circle cx="10" cy="36" r="3" fill="#9E9E9E" />
    <circle cx="38" cy="36" r="3" fill="#9E9E9E" />
    <path d="M10 32 L20 24 L32 24 L38 32" stroke="#E53935" strokeWidth="4" fill="none" />
    <rect x="18" y="20" width="12" height="8" rx="2" fill="#E53935" />
    <path d="M26 20 L28 12 L32 12" stroke="#424242" strokeWidth="2" fill="none" />
    <ellipse cx="30" cy="12" rx="4" ry="2" fill="#424242" />
  </svg>
);

export const FireTruckIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <rect x="4" y="20" width="28" height="16" rx="2" fill="#E53935" />
    <path d="M32 24 Q40 24, 40 30 L40 36 L32 36 Z" fill="#E53935" />
    <rect x="34" y="26" width="4" height="4" fill="#BBDEFB" />
    <rect x="6" y="22" width="6" height="6" fill="#BBDEFB" />
    <rect x="14" y="22" width="6" height="6" fill="#BBDEFB" />
    <circle cx="12" cy="40" r="4" fill="#424242" stroke="#212121" strokeWidth="2" />
    <circle cx="36" cy="40" r="4" fill="#424242" stroke="#212121" strokeWidth="2" />
    <rect x="8" y="10" width="24" height="6" rx="1" fill="#BDBDBD" />
    <path d="M4 16 L10 10" stroke="#9E9E9E" strokeWidth="2" />
  </svg>
);

export const HelicopterIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="20" cy="28" rx="14" ry="10" fill="#42A5F5" />
    <path d="M34 26 L44 20 L44 24 L34 28" fill="#1976D2" />
    <ellipse cx="44" cy="22" rx="2" ry="4" fill="#1976D2" />
    <rect x="16" y="36" width="8" height="4" rx="1" fill="#424242" />
    <ellipse cx="20" cy="42" rx="6" ry="2" fill="#424242" />
    <rect x="18" y="12" width="4" height="8" fill="#616161" />
    <rect x="4" y="10" width="32" height="4" rx="2" fill="#9E9E9E" />
    <circle cx="14" cy="26" r="4" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1" />
  </svg>
);

export const ShipIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M4 34 L8 44 L40 44 L44 34 Q24 30, 4 34" fill="#1976D2" />
    <rect x="14" y="24" width="20" height="12" fill="#BBDEFB" />
    <rect x="22" y="16" width="4" height="10" fill="#8D6E63" />
    <rect x="18" y="26" width="4" height="4" fill="#1976D2" />
    <rect x="26" y="26" width="4" height="4" fill="#1976D2" />
    <path d="M26 8 L26 16 L38 16" fill="#E53935" />
    <polygon points="26,8 26,16 38,16" fill="#E53935" />
    <ellipse cx="10" cy="40" rx="4" ry="2" fill="#0D47A1" opacity="0.5" />
    <ellipse cx="38" cy="40" rx="4" ry="2" fill="#0D47A1" opacity="0.5" />
  </svg>
);

export const BicycleIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <circle cx="10" cy="32" r="8" fill="none" stroke="#424242" strokeWidth="3" />
    <circle cx="38" cy="32" r="8" fill="none" stroke="#424242" strokeWidth="3" />
    <path d="M10 32 L20 20 L28 20 L38 32" stroke="#E53935" strokeWidth="3" fill="none" />
    <path d="M20 20 L24 32 L28 20" stroke="#E53935" strokeWidth="3" fill="none" />
    <circle cx="28" cy="20" r="3" fill="#424242" />
    <path d="M28 18 L32 12" stroke="#424242" strokeWidth="2" />
    <rect x="30" y="10" width="6" height="3" rx="1" fill="#424242" />
    <path d="M20 20 L16 14" stroke="#424242" strokeWidth="2" />
  </svg>
);

export const TractorIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <rect x="12" y="18" width="24" height="14" rx="3" fill="#4CAF50" />
    <rect x="8" y="24" width="8" height="10" rx="2" fill="#388E3C" />
    <rect x="10" y="20" width="4" height="6" fill="#BBDEFB" />
    <circle cx="12" cy="38" r="6" fill="#424242" stroke="#212121" strokeWidth="2" />
    <circle cx="34" cy="38" r="8" fill="#424242" stroke="#212121" strokeWidth="2" />
    <circle cx="12" cy="38" r="2" fill="#FFC107" />
    <circle cx="34" cy="38" r="3" fill="#FFC107" />
    <rect x="34" y="10" width="4" height="10" fill="#616161" />
    <rect x="32" y="8" width="8" height="4" rx="1" fill="#424242" />
  </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M24 4 Q32 12, 32 28 L16 28 Q16 12, 24 4" fill="#ECEFF1" stroke="#90A4AE" strokeWidth="1" />
    <ellipse cx="24" cy="8" rx="4" ry="4" fill="#E53935" />
    <circle cx="24" cy="18" r="4" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1" />
    <path d="M16 28 L12 36 L16 34" fill="#1976D2" />
    <path d="M32 28 L36 36 L32 34" fill="#1976D2" />
    <path d="M20 34 L18 44 L24 40 L30 44 L28 34" fill="#FF9800" />
    <path d="M22 38 L24 46 L26 38" fill="#FFEB3B" />
  </svg>
);

// ========== OBJECTS ==========
export const BellIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M24 6 L24 10" stroke="#FFD54F" strokeWidth="3" />
    <circle cx="24" cy="6" r="3" fill="#FFD54F" />
    <path d="M12 36 Q12 20, 24 14 Q36 20, 36 36 L12 36" fill="#FFD54F" stroke="#F57C00" strokeWidth="2" />
    <ellipse cx="24" cy="36" rx="14" ry="3" fill="#F57C00" />
    <circle cx="24" cy="42" r="4" fill="#FFD54F" stroke="#F57C00" strokeWidth="2" />
    <ellipse cx="20" cy="24" rx="3" ry="4" fill="#FFECB3" opacity="0.6" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <circle cx="24" cy="24" r="20" fill="#FFEB3B" stroke="#F57C00" strokeWidth="2" />
    <circle cx="24" cy="24" r="16" fill="#FFF8E1" />
    <line x1="24" y1="24" x2="24" y2="12" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" />
    <line x1="24" y1="24" x2="32" y2="24" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="24" r="2" fill="#5D4037" />
    <circle cx="24" cy="10" r="2" fill="#F57C00" />
    <circle cx="24" cy="38" r="2" fill="#F57C00" />
    <circle cx="10" cy="24" r="2" fill="#F57C00" />
    <circle cx="38" cy="24" r="2" fill="#F57C00" />
    <circle cx="24" cy="4" r="3" fill="#E53935" />
    <circle cx="14" cy="6" r="3" fill="#E53935" />
    <circle cx="34" cy="6" r="3" fill="#E53935" />
  </svg>
);

export const WaterDropIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M24 6 Q36 20, 36 30 Q36 42, 24 42 Q12 42, 12 30 Q12 20, 24 6" fill="#42A5F5" />
    <ellipse cx="20" cy="24" rx="4" ry="6" fill="#90CAF9" opacity="0.6" />
    <circle cx="18" cy="20" r="2" fill="white" opacity="0.8" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <rect x="12" y="4" width="24" height="40" rx="4" fill="#424242" />
    <rect x="14" y="8" width="20" height="28" rx="2" fill="#90CAF9" />
    <circle cx="24" cy="40" r="3" fill="#616161" />
    <rect x="20" y="5" width="8" height="2" rx="1" fill="#616161" />
    <rect x="18" y="12" width="12" height="4" rx="1" fill="white" opacity="0.5" />
    <circle cx="24" cy="24" r="6" fill="white" opacity="0.3" />
  </svg>
);

export const WhistleIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="28" cy="28" rx="14" ry="10" fill="#FFD54F" stroke="#F57C00" strokeWidth="2" />
    <rect x="8" y="22" width="12" height="12" rx="2" fill="#F57C00" />
    <circle cx="14" cy="28" r="3" fill="#5D4037" />
    <path d="M36 22 Q40 18, 44 22" stroke="#9E9E9E" strokeWidth="2" fill="none" />
    <path d="M38 18 Q42 14, 46 18" stroke="#9E9E9E" strokeWidth="2" fill="none" />
    <ellipse cx="12" cy="22" rx="4" ry="2" fill="#FF9800" />
  </svg>
);

export const DrumIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="24" cy="36" rx="18" ry="6" fill="#8D6E63" />
    <rect x="6" y="16" width="36" height="20" fill="#D7CCC8" />
    <ellipse cx="24" cy="16" rx="18" ry="6" fill="#EFEBE9" stroke="#8D6E63" strokeWidth="2" />
    <line x1="8" y1="18" x2="8" y2="34" stroke="#8D6E63" strokeWidth="2" />
    <line x1="16" y1="14" x2="16" y2="36" stroke="#8D6E63" strokeWidth="2" />
    <line x1="24" y1="12" x2="24" y2="36" stroke="#8D6E63" strokeWidth="2" />
    <line x1="32" y1="14" x2="32" y2="36" stroke="#8D6E63" strokeWidth="2" />
    <line x1="40" y1="18" x2="40" y2="34" stroke="#8D6E63" strokeWidth="2" />
    <line x1="4" y1="6" x2="16" y2="18" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" />
    <line x1="44" y1="6" x2="32" y2="18" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" />
    <circle cx="4" cy="4" r="4" fill="#FFEB3B" />
    <circle cx="44" cy="4" r="4" fill="#FFEB3B" />
  </svg>
);

export const DoorIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <rect x="8" y="4" width="32" height="40" rx="2" fill="#8D6E63" stroke="#5D4037" strokeWidth="2" />
    <rect x="12" y="8" width="10" height="14" rx="1" fill="#A1887F" />
    <rect x="26" y="8" width="10" height="14" rx="1" fill="#A1887F" />
    <rect x="12" y="26" width="10" height="14" rx="1" fill="#A1887F" />
    <rect x="26" y="26" width="10" height="14" rx="1" fill="#A1887F" />
    <circle cx="36" cy="28" r="3" fill="#FFD54F" stroke="#F57C00" strokeWidth="1" />
  </svg>
);

export const ScissorsIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <circle cx="12" cy="38" r="6" fill="none" stroke="#9E9E9E" strokeWidth="3" />
    <circle cx="36" cy="38" r="6" fill="none" stroke="#9E9E9E" strokeWidth="3" />
    <path d="M16 34 L28 12 L32 12 L20 34" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="1" />
    <path d="M32 34 L20 12 L16 12 L28 34" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="1" />
    <circle cx="24" cy="22" r="3" fill="#E53935" />
  </svg>
);

export const HammerIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <rect x="20" y="24" width="8" height="20" rx="2" fill="#8D6E63" />
    <rect x="8" y="8" width="32" height="14" rx="3" fill="#616161" stroke="#424242" strokeWidth="2" />
    <rect x="10" y="10" width="8" height="10" rx="1" fill="#9E9E9E" />
    <ellipse cx="36" cy="15" rx="4" ry="5" fill="#757575" />
  </svg>
);

export const ChurchBellIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M24 4 L24 8" stroke="#8D6E63" strokeWidth="4" />
    <ellipse cx="24" cy="4" rx="4" ry="2" fill="#8D6E63" />
    <path d="M8 40 Q8 16, 24 12 Q40 16, 40 40 L8 40" fill="#FFD54F" stroke="#F57C00" strokeWidth="2" />
    <ellipse cx="24" cy="40" rx="16" ry="4" fill="#F57C00" />
    <circle cx="24" cy="36" r="4" fill="#8D6E63" />
    <ellipse cx="18" cy="24" rx="4" ry="6" fill="#FFECB3" opacity="0.5" />
  </svg>
);

export const WindIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M4 16 Q20 12, 28 16 Q36 20, 36 14 Q36 10, 32 10" stroke="#90CAF9" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M4 24 Q24 20, 40 24 Q46 28, 42 32" stroke="#64B5F6" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M4 32 Q16 36, 24 32 Q30 28, 34 32 Q38 36, 34 40" stroke="#42A5F5" strokeWidth="4" fill="none" strokeLinecap="round" />
    <circle cx="36" cy="10" r="2" fill="#90CAF9" />
    <circle cx="42" cy="32" r="2" fill="#64B5F6" />
    <circle cx="34" cy="40" r="2" fill="#42A5F5" />
  </svg>
);

export const RainIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <ellipse cx="24" cy="16" rx="14" ry="10" fill="#90A4AE" />
    <circle cx="12" cy="18" r="8" fill="#90A4AE" />
    <circle cx="36" cy="18" r="8" fill="#90A4AE" />
    <ellipse cx="24" cy="14" rx="8" ry="5" fill="#B0BEC5" opacity="0.6" />
    <path d="M12 30 L10 38" stroke="#42A5F5" strokeWidth="3" strokeLinecap="round" />
    <path d="M20 32 L18 40" stroke="#42A5F5" strokeWidth="3" strokeLinecap="round" />
    <path d="M28 30 L26 38" stroke="#42A5F5" strokeWidth="3" strokeLinecap="round" />
    <path d="M36 32 L34 40" stroke="#42A5F5" strokeWidth="3" strokeLinecap="round" />
    <path d="M16 36 L14 44" stroke="#64B5F6" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 36 L30 44" stroke="#64B5F6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ========== HEADPHONES / SPEAKER for warnings ==========
export const HeadphonesIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M8 28 Q8 12, 24 12 Q40 12, 40 28" stroke="#424242" strokeWidth="4" fill="none" />
    <rect x="4" y="26" width="8" height="14" rx="3" fill="#424242" />
    <rect x="36" y="26" width="8" height="14" rx="3" fill="#424242" />
    <rect x="5" y="28" width="6" height="10" rx="2" fill="#757575" />
    <rect x="37" y="28" width="6" height="10" rx="2" fill="#757575" />
    <ellipse cx="8" cy="33" rx="2" ry="3" fill="#FFCDD2" />
    <ellipse cx="40" cy="33" rx="2" ry="3" fill="#FFCDD2" />
  </svg>
);

export const SpeakerIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M8 18 L8 30 L14 30 L26 40 L26 8 L14 18 Z" fill="#424242" />
    <path d="M32 16 Q38 24, 32 32" stroke="#42A5F5" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M36 12 Q44 24, 36 36" stroke="#64B5F6" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M40 8 Q50 24, 40 40" stroke="#90CAF9" strokeWidth="3" fill="none" strokeLinecap="round" />
    <ellipse cx="14" cy="24" rx="3" ry="4" fill="#616161" />
  </svg>
);

// ========== GENERIC / FRUIT / OBJECTS ==========
export const AppleIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M24 44 Q8 44, 8 28 Q8 16, 18 14 Q22 12, 24 14 Q26 12, 30 14 Q40 16, 40 28 Q40 44, 24 44" fill="#E53935" />
    <path d="M24 14 Q24 8, 28 6" stroke="#4CAF50" strokeWidth="2" fill="none" />
    <path d="M28 6 Q32 6, 34 10" fill="#4CAF50" stroke="#4CAF50" strokeWidth="1" />
    <ellipse cx="16" cy="24" rx="4" ry="6" fill="#EF5350" opacity="0.4" />
    <path d="M22 16 Q24 14, 26 16" stroke="#C62828" strokeWidth="1" fill="none" />
  </svg>
);

export const PencilIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <rect x="18" y="4" width="12" height="32" rx="1" fill="#FFEB3B" />
    <polygon points="24,44 18,36 30,36" fill="#FFCC80" />
    <polygon points="24,44 22,40 26,40" fill="#3B2820" />
    <rect x="18" y="4" width="12" height="4" fill="#F57C00" />
    <rect x="18" y="32" width="12" height="4" fill="#8D6E63" />
    <line x1="24" y1="8" x2="24" y2="32" stroke="#FFF59D" strokeWidth="2" opacity="0.5" />
  </svg>
);

export const MilkIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M14 12 L14 8 L34 8 L34 12 L38 16 L38 42 Q38 44, 36 44 L12 44 Q10 44, 10 42 L10 16 Z" fill="white" stroke="#BDBDBD" strokeWidth="2" />
    <rect x="10" y="24" width="28" height="16" fill="#64B5F6" />
    <ellipse cx="24" cy="32" rx="8" ry="4" fill="white" opacity="0.6" />
    <path d="M18 8 L18 4 L30 4 L30 8" fill="#BDBDBD" />
    <rect x="20" y="28" width="8" height="6" rx="1" fill="white" />
  </svg>
);

export const SoapIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <rect x="8" y="16" width="32" height="24" rx="4" fill="#81D4FA" stroke="#29B6F6" strokeWidth="2" />
    <ellipse cx="24" cy="20" rx="10" ry="3" fill="#E1F5FE" opacity="0.6" />
    <circle cx="14" cy="10" r="4" fill="#E1F5FE" stroke="#29B6F6" strokeWidth="1" opacity="0.8" />
    <circle cx="24" cy="6" r="3" fill="#E1F5FE" stroke="#29B6F6" strokeWidth="1" opacity="0.8" />
    <circle cx="32" cy="10" r="5" fill="#E1F5FE" stroke="#29B6F6" strokeWidth="1" opacity="0.8" />
    <circle cx="38" cy="4" r="2" fill="#E1F5FE" opacity="0.6" />
    <rect x="16" y="24" width="16" height="8" rx="2" fill="#29B6F6" opacity="0.3" />
  </svg>
);

export const TshirtIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 48 48" className={className}>
    <path d="M16 8 L8 12 L4 20 L10 22 L12 16 L12 42 L36 42 L36 16 L38 22 L44 20 L40 12 L32 8 Q28 14, 24 14 Q20 14, 16 8" fill="#42A5F5" stroke="#1976D2" strokeWidth="2" />
    <path d="M16 8 Q20 14, 24 14 Q28 14, 32 8" fill="#BBDEFB" />
    <ellipse cx="24" cy="28" rx="6" ry="4" fill="#1976D2" opacity="0.2" />
  </svg>
);

// Map of all icons by ID
export const CARTOON_ICONS: Record<string, React.FC<IconProps>> = {
  // Animals
  mucca: CowIcon,
  cane: DogIcon,
  gatto: CatIcon,
  papera: DuckIcon,
  cavallo: HorseIcon,
  pecora: SheepIcon,
  maiale: PigIcon,
  gallo: RoosterIcon,
  leone: LionIcon,
  uccellino: BirdIcon,
  rana: FrogIcon,
  ape: BeeIcon,
  elefante: ElephantIcon,
  serpente: SnakeIcon,
  gufo: OwlIcon,
  lupo: WolfIcon,
  topo: MouseIcon,
  asino: DonkeyIcon,
  // Vehicles
  treno: TrainIcon,
  auto: CarIcon,
  ambulanza: AmbulanceIcon,
  clacson: HornIcon,
  aereo: PlaneIcon,
  moto: MotorcycleIcon,
  pompieri: FireTruckIcon,
  elicottero: HelicopterIcon,
  nave: ShipIcon,
  bicicletta: BicycleIcon,
  trattore: TractorIcon,
  razzo: RocketIcon,
  // Objects
  campanello: BellIcon,
  orologio: ClockIcon,
  acqua: WaterDropIcon,
  telefono: PhoneIcon,
  fischietto: WhistleIcon,
  tamburo: DrumIcon,
  porta: DoorIcon,
  forbici: ScissorsIcon,
  martello: HammerIcon,
  campana: ChurchBellIcon,
  vento: WindIcon,
  pioggia: RainIcon,
  // Utility
  cuffie: HeadphonesIcon,
  speaker: SpeakerIcon,
  // Common items
  mela: AppleIcon,
  matita: PencilIcon,
  latte: MilkIcon,
  sapone: SoapIcon,
  maglietta: TshirtIcon,
};

// Helper function to get icon by ID
export const getCartoonIcon = (id: string): React.FC<IconProps> | null => {
  return CARTOON_ICONS[id] || null;
};
