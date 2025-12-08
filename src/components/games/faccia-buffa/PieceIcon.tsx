// SVG cartoon-style icons for Faccia Buffa pieces
import React from "react";

interface PieceIconProps {
  pieceId: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SIZE_MAP = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

// Eye variants
const EyesBig = () => (
  <svg viewBox="0 0 48 24" className="w-full h-full">
    <ellipse cx="12" cy="12" rx="10" ry="11" fill="white" stroke="#5D4037" strokeWidth="1.5" />
    <ellipse cx="36" cy="12" rx="10" ry="11" fill="white" stroke="#5D4037" strokeWidth="1.5" />
    <circle cx="14" cy="12" r="5" fill="#3B2820" />
    <circle cx="38" cy="12" r="5" fill="#3B2820" />
    <circle cx="16" cy="10" r="2" fill="white" />
    <circle cx="40" cy="10" r="2" fill="white" />
  </svg>
);

const EyesAngry = () => (
  <svg viewBox="0 0 48 28" className="w-full h-full">
    <line x1="2" y1="4" x2="22" y2="10" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" />
    <line x1="46" y1="4" x2="26" y2="10" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" />
    <ellipse cx="12" cy="16" rx="9" ry="10" fill="white" stroke="#5D4037" strokeWidth="1.5" />
    <ellipse cx="36" cy="16" rx="9" ry="10" fill="white" stroke="#5D4037" strokeWidth="1.5" />
    <circle cx="12" cy="17" r="4" fill="#3B2820" />
    <circle cx="36" cy="17" r="4" fill="#3B2820" />
  </svg>
);

const EyesSurprised = () => (
  <svg viewBox="0 0 48 28" className="w-full h-full">
    <ellipse cx="12" cy="14" rx="11" ry="12" fill="white" stroke="#5D4037" strokeWidth="1.5" />
    <ellipse cx="36" cy="14" rx="11" ry="12" fill="white" stroke="#5D4037" strokeWidth="1.5" />
    <circle cx="12" cy="14" r="7" fill="#3B2820" />
    <circle cx="36" cy="14" r="7" fill="#3B2820" />
    <circle cx="10" cy="12" r="2.5" fill="white" />
    <circle cx="34" cy="12" r="2.5" fill="white" />
  </svg>
);

const EyesInLove = () => (
  <svg viewBox="0 0 48 24" className="w-full h-full">
    <path d="M12 6 C8 2, 2 6, 12 16 C22 6, 16 2, 12 6" fill="#E91E63" />
    <path d="M36 6 C32 2, 26 6, 36 16 C46 6, 40 2, 36 6" fill="#E91E63" />
    <circle cx="10" cy="8" r="2" fill="#FCE4EC" opacity="0.7" />
    <circle cx="34" cy="8" r="2" fill="#FCE4EC" opacity="0.7" />
  </svg>
);

const EyesSleepy = () => (
  <svg viewBox="0 0 48 20" className="w-full h-full">
    <path d="M2 10 Q12 18, 22 10" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round" />
    <path d="M26 10 Q36 18, 46 10" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round" />
    <text x="22" y="6" fontSize="8" fill="#5D4037">z</text>
    <text x="28" y="4" fontSize="6" fill="#5D4037">z</text>
  </svg>
);

const EyesStars = () => (
  <svg viewBox="0 0 48 24" className="w-full h-full">
    <polygon points="12,2 14,8 20,8 15,12 17,19 12,15 7,19 9,12 4,8 10,8" fill="#FFD700" stroke="#FFA000" strokeWidth="1" />
    <polygon points="36,2 38,8 44,8 39,12 41,19 36,15 31,19 33,12 28,8 34,8" fill="#FFD700" stroke="#FFA000" strokeWidth="1" />
  </svg>
);

// Nose variants
const NoseRed = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full">
    <circle cx="16" cy="16" r="12" fill="#E53935" />
    <ellipse cx="12" cy="12" rx="4" ry="3" fill="#EF5350" opacity="0.6" />
  </svg>
);

const NoseClown = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full">
    <circle cx="16" cy="16" r="14" fill="#FF1744" />
    <ellipse cx="10" cy="12" rx="5" ry="4" fill="#FF5252" opacity="0.5" />
    <circle cx="16" cy="16" r="14" fill="none" stroke="#D50000" strokeWidth="2" />
  </svg>
);

const NosePig = () => (
  <svg viewBox="0 0 36 28" className="w-full h-full">
    <ellipse cx="18" cy="14" rx="16" ry="12" fill="#FFAB91" stroke="#E64A19" strokeWidth="1.5" />
    <ellipse cx="11" cy="14" rx="4" ry="5" fill="#E64A19" />
    <ellipse cx="25" cy="14" rx="4" ry="5" fill="#E64A19" />
  </svg>
);

const NoseCarrot = () => (
  <svg viewBox="0 0 24 40" className="w-full h-full">
    <path d="M12 0 L20 38 Q12 42, 4 38 L12 0" fill="#FF9800" />
    <line x1="8" y1="10" x2="12" y2="12" stroke="#FFB74D" strokeWidth="2" />
    <line x1="16" y1="18" x2="12" y2="20" stroke="#FFB74D" strokeWidth="2" />
    <line x1="8" y1="26" x2="12" y2="28" stroke="#FFB74D" strokeWidth="2" />
    <path d="M8 0 Q12 -4, 16 0" stroke="#4CAF50" strokeWidth="3" fill="none" />
  </svg>
);

// Mouth variants
const MouthSmile = () => (
  <svg viewBox="0 0 48 24" className="w-full h-full">
    <path d="M4 8 Q24 28, 44 8" stroke="#D32F2F" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M8 8 Q24 24, 40 8" fill="#FFCDD2" />
  </svg>
);

const MouthSad = () => (
  <svg viewBox="0 0 48 24" className="w-full h-full">
    <path d="M4 20 Q24 4, 44 20" stroke="#D32F2F" strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
);

const MouthTongue = () => (
  <svg viewBox="0 0 48 32" className="w-full h-full">
    <path d="M4 8 Q24 24, 44 8" stroke="#D32F2F" strokeWidth="3" fill="#FFCDD2" strokeLinecap="round" />
    <ellipse cx="24" cy="20" rx="8" ry="10" fill="#E91E63" />
    <line x1="24" y1="16" x2="24" y2="28" stroke="#C2185B" strokeWidth="2" />
  </svg>
);

const MouthKiss = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full">
    <ellipse cx="16" cy="16" rx="8" ry="10" fill="#E91E63" stroke="#C2185B" strokeWidth="2" />
    <ellipse cx="16" cy="14" rx="4" ry="3" fill="#F48FB1" opacity="0.5" />
  </svg>
);

const MouthOh = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full">
    <ellipse cx="16" cy="16" rx="10" ry="12" fill="#FFCDD2" stroke="#D32F2F" strokeWidth="2" />
    <ellipse cx="16" cy="16" rx="6" ry="8" fill="#5D4037" />
  </svg>
);

const MouthAngry = () => (
  <svg viewBox="0 0 48 20" className="w-full h-full">
    <path d="M6 14 L20 6 L28 6 L42 14" stroke="#D32F2F" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Ear variants
const EarNormal = () => (
  <svg viewBox="0 0 24 36" className="w-full h-full">
    <ellipse cx="12" cy="18" rx="10" ry="16" fill="#FFCC80" stroke="#E65100" strokeWidth="1.5" />
    <ellipse cx="12" cy="18" rx="5" ry="10" fill="#FFE0B2" />
  </svg>
);

const EarElf = () => (
  <svg viewBox="0 0 24 48" className="w-full h-full">
    <path d="M12 46 Q2 30, 12 2 Q22 30, 12 46" fill="#FFCC80" stroke="#E65100" strokeWidth="1.5" />
    <path d="M12 40 Q8 28, 12 10 Q16 28, 12 40" fill="#FFE0B2" />
  </svg>
);

const EarBunny = () => (
  <svg viewBox="0 0 20 56" className="w-full h-full">
    <ellipse cx="10" cy="28" rx="8" ry="26" fill="white" stroke="#9E9E9E" strokeWidth="1.5" />
    <ellipse cx="10" cy="28" rx="4" ry="20" fill="#FFCDD2" />
  </svg>
);

// Hat variants
const HatMagic = () => (
  <svg viewBox="0 0 56 48" className="w-full h-full">
    <ellipse cx="28" cy="44" rx="28" ry="4" fill="#1A1A1A" />
    <path d="M10 44 L28 4 L46 44 Z" fill="#1A1A1A" />
    <rect x="8" y="40" width="40" height="6" fill="#1A1A1A" />
    <rect x="16" y="34" width="24" height="4" fill="#7B1FA2" />
    <polygon points="28,8 30,14 36,14 31,18 33,24 28,20 23,24 25,18 20,14 26,14" fill="#FFD700" />
  </svg>
);

const HatParty = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <path d="M24 2 L44 46 L4 46 Z" fill="#E91E63" />
    <line x1="8" y1="20" x2="40" y2="20" stroke="#FFEB3B" strokeWidth="4" />
    <line x1="12" y1="32" x2="36" y2="32" stroke="#4CAF50" strokeWidth="4" />
    <circle cx="24" cy="4" r="4" fill="#FFEB3B" />
    <circle cx="16" cy="26" r="2" fill="#2196F3" />
    <circle cx="32" cy="38" r="2" fill="#FF9800" />
  </svg>
);

const HatCrown = () => (
  <svg viewBox="0 0 56 40" className="w-full h-full">
    <path d="M4 38 L4 16 L14 26 L28 8 L42 26 L52 16 L52 38 Z" fill="#FFD700" stroke="#FFA000" strokeWidth="2" />
    <circle cx="14" cy="14" r="4" fill="#E91E63" />
    <circle cx="28" cy="6" r="4" fill="#2196F3" />
    <circle cx="42" cy="14" r="4" fill="#4CAF50" />
    <rect x="4" y="32" width="48" height="6" fill="#FFA000" />
  </svg>
);

const HatBaseball = () => (
  <svg viewBox="0 0 56 36" className="w-full h-full">
    <ellipse cx="28" cy="32" rx="26" ry="4" fill="#1976D2" />
    <path d="M4 32 Q4 12, 28 10 Q52 12, 52 32" fill="#1976D2" />
    <path d="M0 32 L20 32 Q28 32, 28 24 L28 28 Q28 32, 36 32 L56 32" fill="#0D47A1" />
    <rect x="20" y="20" width="16" height="8" rx="2" fill="white" />
  </svg>
);

const HatCowboy = () => (
  <svg viewBox="0 0 64 40" className="w-full h-full">
    <ellipse cx="32" cy="36" rx="30" ry="4" fill="#795548" />
    <path d="M8 36 Q8 20, 32 18 Q56 20, 56 36" fill="#8D6E63" />
    <path d="M16 36 L16 28 Q32 16, 48 28 L48 36" fill="#6D4C41" />
    <rect x="20" y="24" width="24" height="4" fill="#FFCA28" />
  </svg>
);

const HatBow = () => (
  <svg viewBox="0 0 48 32" className="w-full h-full">
    <path d="M24 16 Q8 4, 4 16 Q8 28, 24 16" fill="#E91E63" />
    <path d="M24 16 Q40 4, 44 16 Q40 28, 24 16" fill="#E91E63" />
    <circle cx="24" cy="16" r="6" fill="#AD1457" />
    <path d="M20 28 Q24 36, 28 28" stroke="#E91E63" strokeWidth="3" fill="none" />
    <path d="M18 32 Q24 40, 30 32" stroke="#E91E63" strokeWidth="3" fill="none" />
  </svg>
);

// Arm variants
const ArmWave = () => (
  <svg viewBox="0 0 40 48" className="w-full h-full">
    <path d="M4 44 Q4 20, 20 12" stroke="#FFCC80" strokeWidth="10" fill="none" strokeLinecap="round" />
    <circle cx="24" cy="8" r="10" fill="#FFCC80" stroke="#E65100" strokeWidth="1" />
    <rect x="18" y="4" width="3" height="10" rx="1" fill="#FFCC80" transform="rotate(-20 20 8)" />
    <rect x="22" y="2" width="3" height="12" rx="1" fill="#FFCC80" transform="rotate(-5 24 8)" />
    <rect x="26" y="4" width="3" height="10" rx="1" fill="#FFCC80" transform="rotate(10 28 8)" />
    <rect x="30" y="6" width="3" height="8" rx="1" fill="#FFCC80" transform="rotate(25 32 10)" />
  </svg>
);

const ArmStrong = () => (
  <svg viewBox="0 0 48 40" className="w-full h-full">
    <path d="M4 36 L16 24 L20 8" stroke="#FFCC80" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <ellipse cx="28" cy="12" rx="14" ry="10" fill="#FFCC80" stroke="#E65100" strokeWidth="1" />
    <ellipse cx="28" cy="12" rx="10" ry="6" fill="#FFE0B2" />
  </svg>
);

const ArmOpen = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full">
    <path d="M4 36 Q8 20, 20 20" stroke="#FFCC80" strokeWidth="10" fill="none" strokeLinecap="round" />
    <circle cx="26" cy="20" r="12" fill="#FFCC80" stroke="#E65100" strokeWidth="1" />
    <rect x="20" y="10" width="3" height="10" rx="1" fill="#FFCC80" transform="rotate(-30 22 14)" />
    <rect x="24" y="8" width="3" height="12" rx="1" fill="#FFCC80" />
    <rect x="28" y="10" width="3" height="10" rx="1" fill="#FFCC80" transform="rotate(30 30 14)" />
    <rect x="32" y="14" width="3" height="8" rx="1" fill="#FFCC80" transform="rotate(50 34 18)" />
    <rect x="16" y="14" width="3" height="8" rx="1" fill="#FFCC80" transform="rotate(-50 18 18)" />
  </svg>
);

const ArmThumbsUp = () => (
  <svg viewBox="0 0 36 48" className="w-full h-full">
    <path d="M8 44 Q4 28, 16 20" stroke="#FFCC80" strokeWidth="10" fill="none" strokeLinecap="round" />
    <rect x="10" y="18" width="10" height="16" rx="3" fill="#FFCC80" stroke="#E65100" strokeWidth="1" />
    <rect x="13" y="4" width="8" height="18" rx="3" fill="#FFCC80" stroke="#E65100" strokeWidth="1" />
  </svg>
);

const ArmVictory = () => (
  <svg viewBox="0 0 40 48" className="w-full h-full">
    <path d="M8 44 Q4 28, 16 24" stroke="#FFCC80" strokeWidth="10" fill="none" strokeLinecap="round" />
    <rect x="8" y="20" width="10" height="12" rx="3" fill="#FFCC80" stroke="#E65100" strokeWidth="1" />
    <rect x="10" y="4" width="6" height="20" rx="2" fill="#FFCC80" stroke="#E65100" strokeWidth="1" transform="rotate(-15 13 14)" />
    <rect x="22" y="4" width="6" height="20" rx="2" fill="#FFCC80" stroke="#E65100" strokeWidth="1" transform="rotate(15 25 14)" />
  </svg>
);

// Extra variants
const Mustache = () => (
  <svg viewBox="0 0 56 24" className="w-full h-full">
    <path d="M28 20 Q16 20, 8 8 Q4 4, 2 12 Q4 20, 16 16 Q24 14, 28 20 Q32 14, 40 16 Q52 20, 54 12 Q52 4, 48 8 Q40 20, 28 20" fill="#5D4037" />
  </svg>
);

const GlassesSun = () => (
  <svg viewBox="0 0 56 24" className="w-full h-full">
    <rect x="2" y="4" width="20" height="16" rx="4" fill="#1A1A1A" stroke="#424242" strokeWidth="2" />
    <rect x="34" y="4" width="20" height="16" rx="4" fill="#1A1A1A" stroke="#424242" strokeWidth="2" />
    <path d="M22 12 L34 12" stroke="#424242" strokeWidth="3" />
    <line x1="0" y1="10" x2="2" y2="10" stroke="#424242" strokeWidth="3" />
    <line x1="54" y1="10" x2="56" y2="10" stroke="#424242" strokeWidth="3" />
  </svg>
);

const GlassesNerd = () => (
  <svg viewBox="0 0 56 24" className="w-full h-full">
    <circle cx="14" cy="12" r="11" fill="white" stroke="#424242" strokeWidth="2" />
    <circle cx="42" cy="12" r="11" fill="white" stroke="#424242" strokeWidth="2" />
    <path d="M25 12 L31 12" stroke="#424242" strokeWidth="2" />
    <circle cx="14" cy="12" r="5" fill="#90CAF9" opacity="0.3" />
    <circle cx="42" cy="12" r="5" fill="#90CAF9" opacity="0.3" />
  </svg>
);

const Flower = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full">
    <circle cx="20" cy="10" r="8" fill="#F48FB1" />
    <circle cx="10" cy="20" r="8" fill="#F48FB1" />
    <circle cx="30" cy="20" r="8" fill="#F48FB1" />
    <circle cx="14" cy="30" r="8" fill="#F48FB1" />
    <circle cx="26" cy="30" r="8" fill="#F48FB1" />
    <circle cx="20" cy="20" r="6" fill="#FFEB3B" />
  </svg>
);

const Butterfly = () => (
  <svg viewBox="0 0 48 32" className="w-full h-full">
    <ellipse cx="12" cy="12" rx="10" ry="10" fill="#7C4DFF" />
    <ellipse cx="36" cy="12" rx="10" ry="10" fill="#7C4DFF" />
    <ellipse cx="10" cy="24" rx="8" ry="6" fill="#B388FF" />
    <ellipse cx="38" cy="24" rx="8" ry="6" fill="#B388FF" />
    <ellipse cx="24" cy="16" rx="3" ry="14" fill="#5D4037" />
    <path d="M22 4 Q24 0, 26 4" stroke="#5D4037" strokeWidth="2" fill="none" />
    <circle cx="8" cy="10" r="3" fill="#E040FB" />
    <circle cx="40" cy="10" r="3" fill="#E040FB" />
  </svg>
);

const Star = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full">
    <polygon 
      points="20,2 24,14 38,14 27,22 31,36 20,28 9,36 13,22 2,14 16,14" 
      fill="#FFD700" 
      stroke="#FFA000" 
      strokeWidth="2" 
    />
    <polygon 
      points="20,8 22,14 30,14 24,18 26,26 20,22 14,26 16,18 10,14 18,14" 
      fill="#FFEB3B" 
      opacity="0.5"
    />
  </svg>
);

// Map piece IDs to components
const PIECE_COMPONENTS: Record<string, React.FC> = {
  // Eyes
  occhi_grandi: EyesBig,
  occhi_arrabbiati: EyesAngry,
  occhi_sorpresi: EyesSurprised,
  occhi_innamorati: EyesInLove,
  occhi_addormentati: EyesSleepy,
  occhi_stelle: EyesStars,
  // Noses
  naso_rosso: NoseRed,
  naso_pagliaccio: NoseClown,
  naso_maiale: NosePig,
  naso_carota: NoseCarrot,
  // Mouths
  bocca_sorriso: MouthSmile,
  bocca_triste: MouthSad,
  bocca_lingua: MouthTongue,
  bocca_bacio: MouthKiss,
  bocca_sorpresa: MouthOh,
  bocca_arrabbiata: MouthAngry,
  // Ears
  orecchie_normali: EarNormal,
  orecchie_elfo: EarElf,
  orecchie_coniglio: EarBunny,
  // Hats
  cappello_mago: HatMagic,
  cappello_festa: HatParty,
  cappello_corona: HatCrown,
  cappello_baseball: HatBaseball,
  cappello_cowboy: HatCowboy,
  cappello_fiocco: HatBow,
  // Arms
  braccio_saluto: ArmWave,
  braccio_forza: ArmStrong,
  braccio_mano: ArmOpen,
  braccio_pollice: ArmThumbsUp,
  braccio_vittoria: ArmVictory,
  // Extra
  baffi_classici: Mustache,
  occhiali_sole: GlassesSun,
  occhiali_nerd: GlassesNerd,
  extra_fiore: Flower,
  extra_farfalla: Butterfly,
  extra_stella: Star,
};

const PieceIcon: React.FC<PieceIconProps> = ({ pieceId, className = "", size = "md" }) => {
  const Component = PIECE_COMPONENTS[pieceId];
  
  if (!Component) {
    return <div className={`${SIZE_MAP[size]} ${className} bg-gray-200 rounded-lg`} />;
  }

  return (
    <div className={`${SIZE_MAP[size]} ${className} flex items-center justify-center`}>
      <Component />
    </div>
  );
};

export default PieceIcon;
