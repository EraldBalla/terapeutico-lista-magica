// SVG icons in Mr. Potato Head style for Faccia Buffa game
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

// ========== EYES - Googly style like Mr Potato Head ==========
const EyesBig = () => (
  <svg viewBox="0 0 64 32" className="w-full h-full">
    {/* Left eye - white ball with black pupil */}
    <circle cx="16" cy="16" r="14" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="18" cy="16" r="7" fill="#1A1A1A"/>
    <circle cx="16" cy="13" r="3" fill="white"/>
    
    {/* Right eye */}
    <circle cx="48" cy="16" r="14" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="50" cy="16" r="7" fill="#1A1A1A"/>
    <circle cx="48" cy="13" r="3" fill="white"/>
  </svg>
);

const EyesAngry = () => (
  <svg viewBox="0 0 64 36" className="w-full h-full">
    {/* Angry eyebrows - thick and angled */}
    <rect x="2" y="2" width="24" height="6" rx="2" fill="#5D4037" transform="rotate(15 14 5)"/>
    <rect x="38" y="2" width="24" height="6" rx="2" fill="#5D4037" transform="rotate(-15 50 5)"/>
    
    {/* Eyes underneath */}
    <circle cx="16" cy="22" r="12" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="18" cy="24" r="5" fill="#1A1A1A"/>
    <circle cx="16" cy="22" r="2" fill="white"/>
    
    <circle cx="48" cy="22" r="12" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="46" cy="24" r="5" fill="#1A1A1A"/>
    <circle cx="48" cy="22" r="2" fill="white"/>
  </svg>
);

const EyesSurprised = () => (
  <svg viewBox="0 0 64 36" className="w-full h-full">
    {/* Very wide open eyes */}
    <circle cx="16" cy="18" r="15" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="16" cy="20" r="9" fill="#1A1A1A"/>
    <circle cx="14" cy="16" r="4" fill="white"/>
    
    <circle cx="48" cy="18" r="15" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="48" cy="20" r="9" fill="#1A1A1A"/>
    <circle cx="46" cy="16" r="4" fill="white"/>
  </svg>
);

const EyesInLove = () => (
  <svg viewBox="0 0 64 32" className="w-full h-full">
    {/* Heart shaped eyes */}
    <path d="M16 8 C10 2, 2 8, 16 22 C30 8, 22 2, 16 8" fill="#E91E63"/>
    <ellipse cx="10" cy="10" rx="3" ry="2" fill="#F48FB1"/>
    
    <path d="M48 8 C42 2, 34 8, 48 22 C62 8, 54 2, 48 8" fill="#E91E63"/>
    <ellipse cx="42" cy="10" rx="3" ry="2" fill="#F48FB1"/>
  </svg>
);

const EyesSleepy = () => (
  <svg viewBox="0 0 64 28" className="w-full h-full">
    {/* Closed/droopy eyelids */}
    <ellipse cx="16" cy="16" rx="14" ry="8" fill="#FDD835" stroke="#F57F17" strokeWidth="2"/>
    <path d="M4 14 Q16 20, 28 14" stroke="#5D4037" strokeWidth="3" fill="none"/>
    
    <ellipse cx="48" cy="16" rx="14" ry="8" fill="#FDD835" stroke="#F57F17" strokeWidth="2"/>
    <path d="M36 14 Q48 20, 60 14" stroke="#5D4037" strokeWidth="3" fill="none"/>
  </svg>
);

const EyesStars = () => (
  <svg viewBox="0 0 64 32" className="w-full h-full">
    {/* Star shaped eyes */}
    <polygon points="16,2 19,10 28,10 21,16 24,26 16,20 8,26 11,16 4,10 13,10" fill="#FFD700" stroke="#F57F17" strokeWidth="1.5"/>
    <circle cx="16" cy="14" r="3" fill="#FFF59D"/>
    
    <polygon points="48,2 51,10 60,10 53,16 56,26 48,20 40,26 43,16 36,10 45,10" fill="#FFD700" stroke="#F57F17" strokeWidth="1.5"/>
    <circle cx="48" cy="14" r="3" fill="#FFF59D"/>
  </svg>
);

// ========== NOSES ==========
const NoseRed = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full">
    {/* Classic red/orange potato nose - 3D sphere look */}
    <circle cx="20" cy="20" r="17" fill="#FF5722"/>
    <ellipse cx="14" cy="14" rx="6" ry="5" fill="#FF8A65" opacity="0.7"/>
    <ellipse cx="26" cy="26" rx="4" ry="3" fill="#E64A19" opacity="0.5"/>
  </svg>
);

const NoseClown = () => (
  <svg viewBox="0 0 44 44" className="w-full h-full">
    {/* Bigger clown red nose */}
    <circle cx="22" cy="22" r="20" fill="#F44336"/>
    <ellipse cx="14" cy="14" rx="8" ry="6" fill="#EF5350" opacity="0.6"/>
    <ellipse cx="30" cy="30" rx="5" ry="4" fill="#C62828" opacity="0.4"/>
  </svg>
);

const NosePig = () => (
  <svg viewBox="0 0 48 36" className="w-full h-full">
    {/* Pink pig snout */}
    <ellipse cx="24" cy="18" rx="22" ry="16" fill="#FFAB91"/>
    <ellipse cx="14" cy="20" rx="5" ry="6" fill="#5D4037"/>
    <ellipse cx="34" cy="20" rx="5" ry="6" fill="#5D4037"/>
    <ellipse cx="24" cy="10" rx="10" ry="4" fill="#FFCCBC" opacity="0.6"/>
  </svg>
);

const NoseCarrot = () => (
  <svg viewBox="0 0 32 52" className="w-full h-full">
    {/* Orange carrot nose */}
    <path d="M16 4 L28 48 Q16 52, 4 48 Z" fill="#FF9800"/>
    <path d="M10 16 Q16 14, 22 16" stroke="#FFB74D" strokeWidth="2" fill="none"/>
    <path d="M8 28 Q16 26, 24 28" stroke="#FFB74D" strokeWidth="2" fill="none"/>
    <path d="M10 40 Q16 38, 22 40" stroke="#FFB74D" strokeWidth="2" fill="none"/>
    {/* Green top */}
    <ellipse cx="16" cy="6" rx="6" ry="4" fill="#4CAF50"/>
    <path d="M12 4 Q10 -2, 8 2" stroke="#4CAF50" strokeWidth="2" fill="none"/>
    <path d="M16 4 Q16 -4, 16 0" stroke="#4CAF50" strokeWidth="2" fill="none"/>
    <path d="M20 4 Q22 -2, 24 2" stroke="#4CAF50" strokeWidth="2" fill="none"/>
  </svg>
);

// ========== MOUTHS - Simple emoji ==========
const MouthSmile = () => (
  <span className="text-4xl">👄</span>
);

const MouthSad = () => (
  <span className="text-4xl">😞</span>
);

const MouthTongue = () => (
  <span className="text-4xl">👅</span>
);

const MouthKiss = () => (
  <span className="text-4xl">💋</span>
);

const MouthOh = () => (
  <span className="text-4xl">😮</span>
);

const MouthAngry = () => (
  <span className="text-4xl">😬</span>
);

// ========== EARS ==========
const EarNormal = () => (
  <span className="text-4xl">👂</span>
);

const EarElf = () => (
  <svg viewBox="0 0 28 56" className="w-full h-full">
    {/* Pointed elf ear */}
    <path d="M6 54 Q2 36, 6 20 Q10 4, 14 2 L18 4 Q22 8, 24 20 Q26 36, 22 54 Q14 56, 6 54" fill="#F8BBD9"/>
    {/* Inner detail */}
    <path d="M10 46 Q8 32, 12 18 Q14 8, 16 6" stroke="#EC407A" strokeWidth="2" fill="none"/>
    {/* Highlight */}
    <ellipse cx="12" cy="12" rx="4" ry="6" fill="#FCE4EC" opacity="0.5"/>
  </svg>
);

const EarBunny = () => (
  <svg viewBox="0 0 28 72" className="w-full h-full">
    {/* Long white bunny ear */}
    <ellipse cx="14" cy="36" rx="12" ry="34" fill="white" stroke="#E0E0E0" strokeWidth="2"/>
    {/* Pink inner ear */}
    <ellipse cx="14" cy="38" rx="7" ry="26" fill="#F8BBD9"/>
    {/* Highlight */}
    <ellipse cx="10" cy="20" rx="3" ry="10" fill="white" opacity="0.8"/>
  </svg>
);

// ========== HATS ==========
const HatMagic = () => (
  <svg viewBox="0 0 64 56" className="w-full h-full">
    {/* Black top hat */}
    <ellipse cx="32" cy="52" rx="30" ry="4" fill="#1A1A1A"/>
    <path d="M14 52 L18 16 L46 16 L50 52" fill="#1A1A1A"/>
    <ellipse cx="32" cy="16" rx="14" ry="3" fill="#333"/>
    {/* Hat band */}
    <rect x="18" y="40" width="28" height="6" fill="#7B1FA2"/>
    {/* Magic sparkle */}
    <polygon points="32,8 33,12 38,12 34,14 36,20 32,16 28,20 30,14 26,12 31,12" fill="#FFD700"/>
  </svg>
);

const HatParty = () => (
  <svg viewBox="0 0 56 56" className="w-full h-full">
    {/* Colorful party cone */}
    <path d="M28 4 L50 52 L6 52 Z" fill="#E91E63"/>
    {/* Stripes */}
    <path d="M12 40 L44 40" stroke="#FFEB3B" strokeWidth="6"/>
    <path d="M18 28 L38 28" stroke="#4CAF50" strokeWidth="5"/>
    <path d="M22 18 L34 18" stroke="#2196F3" strokeWidth="4"/>
    {/* Pom pom */}
    <circle cx="28" cy="6" r="6" fill="#FFEB3B"/>
    {/* Polka dots */}
    <circle cx="20" cy="46" r="3" fill="#2196F3"/>
    <circle cx="36" cy="46" r="3" fill="#4CAF50"/>
  </svg>
);

const HatCrown = () => (
  <svg viewBox="0 0 64 48" className="w-full h-full">
    {/* Golden crown */}
    <path d="M6 44 L6 22 L16 32 L32 12 L48 32 L58 44 Z" fill="#FFD700"/>
    <rect x="6" y="38" width="52" height="6" fill="#FFA000"/>
    {/* Jewels */}
    <circle cx="16" cy="20" r="4" fill="#E91E63"/>
    <circle cx="32" cy="12" r="5" fill="#2196F3"/>
    <circle cx="48" cy="20" r="4" fill="#4CAF50"/>
    {/* Jewel highlights */}
    <circle cx="14" cy="18" rx="2" fill="#F48FB1" opacity="0.6"/>
    <circle cx="30" cy="10" rx="2" fill="#64B5F6" opacity="0.6"/>
  </svg>
);

const HatBaseball = () => (
  <svg viewBox="0 0 64 44" className="w-full h-full">
    {/* Blue baseball cap */}
    <path d="M8 36 Q8 14, 32 10 Q56 14, 56 36" fill="#1976D2"/>
    {/* Visor */}
    <ellipse cx="32" cy="38" rx="28" ry="6" fill="#0D47A1"/>
    {/* Cap button */}
    <circle cx="32" cy="12" r="4" fill="#0D47A1"/>
    {/* Logo area */}
    <circle cx="32" cy="24" r="8" fill="white"/>
    <text x="32" y="28" fontSize="10" fill="#1976D2" textAnchor="middle" fontWeight="bold">B</text>
  </svg>
);

const HatCowboy = () => (
  <svg viewBox="0 0 72 48" className="w-full h-full">
    {/* Brown cowboy hat */}
    <ellipse cx="36" cy="42" rx="34" ry="6" fill="#6D4C41"/>
    <path d="M4 40 Q12 48, 36 48 Q60 48, 68 40" fill="#5D4037"/>
    {/* Crown */}
    <path d="M20 40 Q20 22, 36 18 Q52 22, 52 40" fill="#8D6E63"/>
    <path d="M24 24 Q36 32, 48 24" fill="#6D4C41"/>
    {/* Band */}
    <rect x="24" y="32" width="24" height="5" fill="#FFCA28"/>
    <rect x="32" y="31" width="8" height="7" rx="1" fill="#FFD54F" stroke="#F57C00" strokeWidth="1"/>
  </svg>
);

const HatBow = () => (
  <svg viewBox="0 0 56 40" className="w-full h-full">
    {/* Pink bow - like in the reference */}
    <path d="M28 20 Q10 4, 4 20 Q10 36, 28 20" fill="#E91E63"/>
    <ellipse cx="12" cy="16" rx="4" ry="3" fill="#F48FB1" opacity="0.5"/>
    
    <path d="M28 20 Q46 4, 52 20 Q46 36, 28 20" fill="#E91E63"/>
    <ellipse cx="44" cy="16" rx="4" ry="3" fill="#F48FB1" opacity="0.5"/>
    
    {/* Center knot */}
    <circle cx="28" cy="20" r="8" fill="#AD1457"/>
    <ellipse cx="26" cy="18" rx="3" ry="2" fill="#E91E63" opacity="0.5"/>
    
    {/* Ribbon tails */}
    <path d="M24 28 Q20 36, 16 38" stroke="#E91E63" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <path d="M32 28 Q36 36, 40 38" stroke="#E91E63" strokeWidth="5" fill="none" strokeLinecap="round"/>
  </svg>
);

// ========== ARMS/HANDS - Using emojis ==========
const ArmWave = () => (
  <span className="text-4xl">👋</span>
);

const ArmStrong = () => (
  <span className="text-4xl">💪</span>
);

const ArmOpen = () => (
  <span className="text-4xl">✋</span>
);

const ArmThumbsUp = () => (
  <span className="text-4xl">👍</span>
);

const ArmVictory = () => (
  <span className="text-4xl">✌️</span>
);

// ========== EXTRAS ==========
const Mustache = () => (
  <svg viewBox="0 0 64 28" className="w-full h-full">
    {/* Orange/brown mustache like the reference */}
    <path 
      d="M32 24 Q16 24, 8 12 Q4 4, 2 12 Q4 24, 18 20 Q28 18, 32 24
         Q36 18, 46 20 Q60 24, 62 12 Q60 4, 56 12 Q48 24, 32 24" 
      fill="#FF9800"
    />
    {/* Highlight */}
    <ellipse cx="14" cy="12" rx="6" ry="4" fill="#FFB74D" opacity="0.5"/>
    <ellipse cx="50" cy="12" rx="6" ry="4" fill="#FFB74D" opacity="0.5"/>
  </svg>
);

const GlassesSun = () => (
  <svg viewBox="0 0 64 28" className="w-full h-full">
    {/* Yellow/orange sunglasses like the reference */}
    <rect x="2" y="4" width="26" height="20" rx="6" fill="#FFB300" stroke="#F57C00" strokeWidth="2"/>
    <rect x="36" y="4" width="26" height="20" rx="6" fill="#FFB300" stroke="#F57C00" strokeWidth="2"/>
    {/* Lens shine */}
    <ellipse cx="10" cy="10" rx="5" ry="4" fill="#FFD54F" opacity="0.5"/>
    <ellipse cx="44" cy="10" rx="5" ry="4" fill="#FFD54F" opacity="0.5"/>
    {/* Bridge */}
    <path d="M28 12 L36 12" stroke="#F57C00" strokeWidth="3"/>
  </svg>
);

const GlassesNerd = () => (
  <svg viewBox="0 0 64 28" className="w-full h-full">
    {/* Round glasses */}
    <circle cx="16" cy="14" r="13" fill="white" stroke="#424242" strokeWidth="3"/>
    <circle cx="48" cy="14" r="13" fill="white" stroke="#424242" strokeWidth="3"/>
    {/* Lens reflection */}
    <ellipse cx="12" cy="10" rx="4" ry="3" fill="#E3F2FD" opacity="0.7"/>
    <ellipse cx="44" cy="10" rx="4" ry="3" fill="#E3F2FD" opacity="0.7"/>
    {/* Bridge */}
    <path d="M29 14 L35 14" stroke="#424242" strokeWidth="3"/>
  </svg>
);

const Flower = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    {/* Pink flower petals */}
    <ellipse cx="24" cy="10" rx="8" ry="10" fill="#F48FB1"/>
    <ellipse cx="10" cy="20" rx="10" ry="8" fill="#F48FB1"/>
    <ellipse cx="38" cy="20" rx="10" ry="8" fill="#F48FB1"/>
    <ellipse cx="14" cy="34" rx="8" ry="10" fill="#F48FB1" transform="rotate(-30 14 34)"/>
    <ellipse cx="34" cy="34" rx="8" ry="10" fill="#F48FB1" transform="rotate(30 34 34)"/>
    {/* Yellow center */}
    <circle cx="24" cy="24" r="9" fill="#FFEB3B"/>
    <circle cx="22" cy="22" r="3" fill="#FFF59D" opacity="0.7"/>
  </svg>
);

const Butterfly = () => (
  <svg viewBox="0 0 56 40" className="w-full h-full">
    {/* Colorful wings */}
    <ellipse cx="14" cy="14" rx="12" ry="12" fill="#7C4DFF"/>
    <ellipse cx="42" cy="14" rx="12" ry="12" fill="#7C4DFF"/>
    <ellipse cx="12" cy="28" rx="10" ry="8" fill="#B388FF"/>
    <ellipse cx="44" cy="28" rx="10" ry="8" fill="#B388FF"/>
    {/* Wing spots */}
    <circle cx="10" cy="12" r="4" fill="#E040FB"/>
    <circle cx="46" cy="12" r="4" fill="#E040FB"/>
    {/* Body */}
    <ellipse cx="28" cy="20" rx="4" ry="16" fill="#5D4037"/>
    {/* Antennae */}
    <path d="M26 6 Q24 2, 22 4" stroke="#5D4037" strokeWidth="2" fill="none"/>
    <path d="M30 6 Q32 2, 34 4" stroke="#5D4037" strokeWidth="2" fill="none"/>
    <circle cx="22" cy="4" r="2" fill="#5D4037"/>
    <circle cx="34" cy="4" r="2" fill="#5D4037"/>
  </svg>
);

const Star = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <polygon 
      points="24,4 28,16 42,16 31,24 35,38 24,30 13,38 17,24 6,16 20,16" 
      fill="#FFD700" 
      stroke="#FF8F00" 
      strokeWidth="2"
    />
    <polygon 
      points="24,10 26,16 34,16 28,20 30,28 24,24 18,28 20,20 14,16 22,16" 
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
    <div className={`${SIZE_MAP[size]} ${className} flex items-center justify-center transition-transform duration-200 hover:scale-105`}>
      <Component />
    </div>
  );
};

export default PieceIcon;
