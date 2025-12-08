// SVG cartoon-style icons for Faccia Buffa pieces
// High-quality, realistic cartoon style with consistent 2-3px lines
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

// ========== EYES ==========
const EyesBig = () => (
  <svg viewBox="0 0 64 32" className="w-full h-full">
    {/* Left eye */}
    <ellipse cx="16" cy="16" rx="14" ry="15" fill="white" stroke="#4A3728" strokeWidth="2.5"/>
    <ellipse cx="16" cy="16" rx="12" ry="13" fill="white"/>
    <circle cx="18" cy="16" r="7" fill="#3E2723"/>
    <circle cx="18" cy="16" r="5" fill="#1A1A1A"/>
    <ellipse cx="15" cy="13" rx="3" ry="2.5" fill="white" opacity="0.9"/>
    <circle cx="21" cy="19" r="1.5" fill="white" opacity="0.5"/>
    
    {/* Right eye */}
    <ellipse cx="48" cy="16" rx="14" ry="15" fill="white" stroke="#4A3728" strokeWidth="2.5"/>
    <ellipse cx="48" cy="16" rx="12" ry="13" fill="white"/>
    <circle cx="50" cy="16" r="7" fill="#3E2723"/>
    <circle cx="50" cy="16" r="5" fill="#1A1A1A"/>
    <ellipse cx="47" cy="13" rx="3" ry="2.5" fill="white" opacity="0.9"/>
    <circle cx="53" cy="19" r="1.5" fill="white" opacity="0.5"/>
  </svg>
);

const EyesAngry = () => (
  <svg viewBox="0 0 64 36" className="w-full h-full">
    {/* Angry eyebrows */}
    <path d="M4 8 L24 16" stroke="#4A3728" strokeWidth="4" strokeLinecap="round"/>
    <path d="M60 8 L40 16" stroke="#4A3728" strokeWidth="4" strokeLinecap="round"/>
    
    {/* Left eye */}
    <ellipse cx="16" cy="22" rx="12" ry="12" fill="white" stroke="#4A3728" strokeWidth="2.5"/>
    <circle cx="16" cy="24" r="5" fill="#3E2723"/>
    <circle cx="16" cy="24" r="3" fill="#1A1A1A"/>
    <ellipse cx="14" cy="22" rx="2" ry="1.5" fill="white" opacity="0.8"/>
    
    {/* Right eye */}
    <ellipse cx="48" cy="22" rx="12" ry="12" fill="white" stroke="#4A3728" strokeWidth="2.5"/>
    <circle cx="48" cy="24" r="5" fill="#3E2723"/>
    <circle cx="48" cy="24" r="3" fill="#1A1A1A"/>
    <ellipse cx="46" cy="22" rx="2" ry="1.5" fill="white" opacity="0.8"/>
  </svg>
);

const EyesSurprised = () => (
  <svg viewBox="0 0 64 36" className="w-full h-full">
    {/* Left eye - extra wide */}
    <ellipse cx="16" cy="18" rx="14" ry="16" fill="white" stroke="#4A3728" strokeWidth="2.5"/>
    <circle cx="16" cy="18" r="9" fill="#3E2723"/>
    <circle cx="16" cy="18" r="6" fill="#1A1A1A"/>
    <ellipse cx="13" cy="14" rx="4" ry="3" fill="white" opacity="0.9"/>
    <circle cx="19" cy="21" r="2" fill="white" opacity="0.4"/>
    
    {/* Right eye - extra wide */}
    <ellipse cx="48" cy="18" rx="14" ry="16" fill="white" stroke="#4A3728" strokeWidth="2.5"/>
    <circle cx="48" cy="18" r="9" fill="#3E2723"/>
    <circle cx="48" cy="18" r="6" fill="#1A1A1A"/>
    <ellipse cx="45" cy="14" rx="4" ry="3" fill="white" opacity="0.9"/>
    <circle cx="51" cy="21" r="2" fill="white" opacity="0.4"/>
  </svg>
);

const EyesInLove = () => (
  <svg viewBox="0 0 64 32" className="w-full h-full">
    {/* Left heart eye */}
    <path 
      d="M16 8 C10 4, 2 10, 16 24 C30 10, 22 4, 16 8" 
      fill="#E91E63" 
      stroke="#C2185B" 
      strokeWidth="2"
    />
    <ellipse cx="11" cy="12" rx="3" ry="2" fill="#F48FB1" opacity="0.7"/>
    
    {/* Right heart eye */}
    <path 
      d="M48 8 C42 4, 34 10, 48 24 C62 10, 54 4, 48 8" 
      fill="#E91E63" 
      stroke="#C2185B" 
      strokeWidth="2"
    />
    <ellipse cx="43" cy="12" rx="3" ry="2" fill="#F48FB1" opacity="0.7"/>
  </svg>
);

const EyesSleepy = () => (
  <svg viewBox="0 0 64 28" className="w-full h-full">
    {/* Left closed eye */}
    <path d="M4 16 Q16 26, 28 16" stroke="#4A3728" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M8 14 Q16 10, 24 14" stroke="#4A3728" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
    
    {/* Right closed eye */}
    <path d="M36 16 Q48 26, 60 16" stroke="#4A3728" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M40 14 Q48 10, 56 14" stroke="#4A3728" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
    
    {/* Z's */}
    <text x="54" y="10" fontSize="10" fill="#4A3728" fontWeight="bold" fontFamily="Comic Sans MS, cursive">z</text>
    <text x="60" y="6" fontSize="7" fill="#4A3728" fontWeight="bold" fontFamily="Comic Sans MS, cursive">z</text>
  </svg>
);

const EyesStars = () => (
  <svg viewBox="0 0 64 32" className="w-full h-full">
    {/* Left star eye */}
    <polygon 
      points="16,2 19,10 28,10 21,16 24,26 16,20 8,26 11,16 4,10 13,10" 
      fill="#FFD700" 
      stroke="#F57F17" 
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <polygon 
      points="16,6 17,10 22,10 18,13 20,19 16,16 12,19 14,13 10,10 15,10" 
      fill="#FFEB3B" 
      opacity="0.6"
    />
    
    {/* Right star eye */}
    <polygon 
      points="48,2 51,10 60,10 53,16 56,26 48,20 40,26 43,16 36,10 45,10" 
      fill="#FFD700" 
      stroke="#F57F17" 
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <polygon 
      points="48,6 49,10 54,10 50,13 52,19 48,16 44,19 46,13 42,10 47,10" 
      fill="#FFEB3B" 
      opacity="0.6"
    />
  </svg>
);

// ========== NOSES ==========
const NoseRed = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full">
    <circle cx="20" cy="20" r="16" fill="#E53935" stroke="#C62828" strokeWidth="2"/>
    <ellipse cx="14" cy="14" rx="6" ry="5" fill="#EF5350" opacity="0.6"/>
    <ellipse cx="26" cy="26" rx="4" ry="3" fill="#C62828" opacity="0.3"/>
  </svg>
);

const NoseClown = () => (
  <svg viewBox="0 0 44 44" className="w-full h-full">
    <circle cx="22" cy="22" r="18" fill="#FF1744" stroke="#D50000" strokeWidth="2.5"/>
    <ellipse cx="14" cy="14" rx="7" ry="6" fill="#FF5252" opacity="0.5"/>
    <ellipse cx="28" cy="28" rx="5" ry="4" fill="#D50000" opacity="0.4"/>
    <circle cx="22" cy="22" r="4" fill="#FF8A80" opacity="0.3"/>
  </svg>
);

const NosePig = () => (
  <svg viewBox="0 0 48 36" className="w-full h-full">
    <ellipse cx="24" cy="18" rx="20" ry="15" fill="#FFAB91" stroke="#E64A19" strokeWidth="2.5"/>
    <ellipse cx="24" cy="18" rx="16" ry="11" fill="#FFCCBC"/>
    <ellipse cx="15" cy="18" rx="5" ry="6" fill="#BF360C"/>
    <ellipse cx="33" cy="18" rx="5" ry="6" fill="#BF360C"/>
    <ellipse cx="15" cy="16" rx="2" ry="2" fill="#8D6E63" opacity="0.5"/>
    <ellipse cx="33" cy="16" rx="2" ry="2" fill="#8D6E63" opacity="0.5"/>
  </svg>
);

const NoseCarrot = () => (
  <svg viewBox="0 0 32 52" className="w-full h-full">
    {/* Carrot body */}
    <path 
      d="M16 6 L26 46 Q16 52, 6 46 L16 6" 
      fill="#FF9800" 
      stroke="#E65100" 
      strokeWidth="2"
    />
    {/* Carrot texture lines */}
    <path d="M10 16 Q16 14, 22 16" stroke="#FFB74D" strokeWidth="2" fill="none"/>
    <path d="M8 28 Q16 26, 24 28" stroke="#FFB74D" strokeWidth="2" fill="none"/>
    <path d="M10 40 Q16 38, 22 40" stroke="#FFB74D" strokeWidth="2" fill="none"/>
    {/* Carrot top leaves */}
    <path d="M16 6 Q10 0, 8 4 Q12 6, 16 6" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1"/>
    <path d="M16 6 Q16 -2, 16 2 Q16 6, 16 6" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1"/>
    <path d="M16 6 Q22 0, 24 4 Q20 6, 16 6" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1"/>
  </svg>
);

// ========== MOUTHS ==========
const MouthSmile = () => (
  <svg viewBox="0 0 64 36" className="w-full h-full">
    {/* Lips outline - ampio sorriso */}
    <path 
      d="M4 12 Q32 4, 60 12 Q58 30, 32 34 Q6 30, 4 12" 
      fill="#E57373" 
      stroke="#C62828" 
      strokeWidth="2.5"
    />
    {/* Inner mouth */}
    <path 
      d="M10 15 Q32 10, 54 15 Q52 27, 32 30 Q12 27, 10 15" 
      fill="#FFCDD2"
    />
    {/* Teeth row - clear and visible */}
    <rect x="15" y="14" width="11" height="8" rx="2" fill="white" stroke="#E0E0E0" strokeWidth="0.8"/>
    <rect x="28" y="14" width="11" height="8" rx="2" fill="white" stroke="#E0E0E0" strokeWidth="0.8"/>
    <rect x="41" y="14" width="8" height="7" rx="2" fill="white" stroke="#E0E0E0" strokeWidth="0.6"/>
    {/* Smile curve emphasis */}
    <path d="M12 22 Q32 32, 52 22" stroke="#AD1457" strokeWidth="2" fill="none" opacity="0.5"/>
    {/* Upper lip highlight */}
    <path d="M18 10 Q32 7, 46 10" stroke="#EF9A9A" strokeWidth="2.5" fill="none" opacity="0.6"/>
  </svg>
);

const MouthSad = () => (
  <svg viewBox="0 0 64 32" className="w-full h-full">
    {/* Lower lip - prominent sad curve */}
    <path 
      d="M8 8 Q32 28, 56 8" 
      fill="none"
      stroke="#C62828" 
      strokeWidth="4" 
      strokeLinecap="round"
    />
    {/* Upper lip area */}
    <path 
      d="M12 10 Q32 24, 52 10" 
      fill="#FFCDD2"
      stroke="none"
    />
    {/* Lip detail */}
    <path 
      d="M16 12 Q32 22, 48 12" 
      stroke="#EF5350" 
      strokeWidth="2" 
      fill="none" 
      opacity="0.5"
    />
    {/* Lower lip volume */}
    <ellipse cx="32" cy="20" rx="16" ry="6" fill="#E57373" opacity="0.5"/>
  </svg>
);

const MouthTongue = () => (
  <svg viewBox="0 0 64 44" className="w-full h-full">
    {/* Open mouth shape */}
    <path 
      d="M8 10 Q32 6, 56 10 L56 20 Q32 26, 8 20 Z" 
      fill="#FFCDD2" 
      stroke="#C62828" 
      strokeWidth="2.5"
    />
    {/* Upper teeth */}
    <rect x="16" y="10" width="8" height="5" rx="1" fill="white" stroke="#E0E0E0" strokeWidth="0.5"/>
    <rect x="26" y="10" width="8" height="5" rx="1" fill="white" stroke="#E0E0E0" strokeWidth="0.5"/>
    <rect x="36" y="10" width="8" height="5" rx="1" fill="white" stroke="#E0E0E0" strokeWidth="0.5"/>
    {/* Tongue - clearly separate */}
    <ellipse cx="32" cy="30" rx="14" ry="12" fill="#E91E63" stroke="#C2185B" strokeWidth="2"/>
    {/* Tongue center line */}
    <path d="M32 22 L32 40" stroke="#AD1457" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Tongue highlight */}
    <ellipse cx="26" cy="28" rx="5" ry="4" fill="#F48FB1" opacity="0.5"/>
  </svg>
);

const MouthKiss = () => (
  <svg viewBox="0 0 44 48" className="w-full h-full">
    {/* Lips puckered - heart shape */}
    <path 
      d="M22 8 Q14 4, 10 12 Q6 20, 22 40 Q38 20, 34 12 Q30 4, 22 8" 
      fill="#E91E63" 
      stroke="#C2185B" 
      strokeWidth="2.5"
    />
    {/* Upper lip highlight */}
    <path 
      d="M16 12 Q22 10, 28 12" 
      stroke="#F48FB1" 
      strokeWidth="2" 
      fill="none" 
      opacity="0.7"
    />
    {/* Inner shadow */}
    <ellipse cx="22" cy="22" rx="6" ry="10" fill="#AD1457" opacity="0.4"/>
    {/* Shine */}
    <ellipse cx="18" cy="16" rx="3" ry="2" fill="#FCE4EC" opacity="0.6"/>
  </svg>
);

const MouthOh = () => (
  <svg viewBox="0 0 48 52" className="w-full h-full">
    {/* Outer lips - clear O shape */}
    <ellipse cx="24" cy="26" rx="18" ry="22" fill="#E57373" stroke="#C62828" strokeWidth="2.5"/>
    {/* Inner mouth dark */}
    <ellipse cx="24" cy="26" rx="11" ry="15" fill="#5D4037"/>
    {/* Tongue hint inside */}
    <ellipse cx="24" cy="34" rx="7" ry="6" fill="#E91E63" opacity="0.6"/>
    {/* Upper teeth peek */}
    <rect x="16" y="10" width="16" height="5" rx="2" fill="white" opacity="0.8"/>
    {/* Lip highlight */}
    <path d="M14 18 Q24 14, 34 18" stroke="#EF9A9A" strokeWidth="2" fill="none" opacity="0.5"/>
  </svg>
);

const MouthAngry = () => (
  <svg viewBox="0 0 64 28" className="w-full h-full">
    {/* Angry mouth - zigzag teeth showing */}
    <path 
      d="M6 18 L12 8 L22 18 L32 6 L42 18 L52 8 L58 18" 
      fill="#FFCDD2"
      stroke="#C62828" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    {/* Teeth */}
    <path d="M16 14 L22 8 L28 14" fill="white" stroke="#E0E0E0" strokeWidth="1"/>
    <path d="M36 14 L42 8 L48 14" fill="white" stroke="#E0E0E0" strokeWidth="1"/>
    {/* Lower lip */}
    <path 
      d="M10 20 Q32 26, 54 20" 
      stroke="#EF5350" 
      strokeWidth="3" 
      fill="none" 
      strokeLinecap="round"
    />
  </svg>
);

// ========== EARS ==========
const EarNormal = () => (
  <svg viewBox="0 0 36 52" className="w-full h-full">
    {/* Outer ear shape - anatomical but simple */}
    <path 
      d="M18 4 Q34 8, 34 26 Q34 44, 18 50 Q6 46, 4 32 Q2 18, 18 4" 
      fill="#FFCC80" 
      stroke="#D4894A" 
      strokeWidth="2.5"
    />
    {/* Helix (outer rim) */}
    <path 
      d="M18 8 Q28 12, 28 26 Q28 40, 18 46" 
      fill="none" 
      stroke="#E6A05A" 
      strokeWidth="2"
      opacity="0.6"
    />
    {/* Antihelix (inner ridge) */}
    <path 
      d="M14 14 Q22 18, 22 26 Q22 34, 14 38" 
      fill="#FFE0B2" 
      stroke="#D4894A" 
      strokeWidth="1.5"
    />
    {/* Ear canal shadow */}
    <ellipse cx="14" cy="26" rx="5" ry="7" fill="#CC8844" opacity="0.4"/>
    {/* Earlobe */}
    <ellipse cx="16" cy="46" rx="6" ry="5" fill="#FFD699" opacity="0.7"/>
  </svg>
);

const EarElf = () => (
  <svg viewBox="0 0 32 64" className="w-full h-full">
    {/* Pointed elf ear - elegant shape */}
    <path 
      d="M16 62 Q4 48, 4 30 Q4 12, 16 2 Q28 12, 28 30 Q28 48, 16 62" 
      fill="#FFCC80" 
      stroke="#D4894A" 
      strokeWidth="2.5"
    />
    {/* Sharp point emphasis */}
    <path 
      d="M16 2 Q12 8, 12 16 M16 2 Q20 8, 20 16" 
      fill="none" 
      stroke="#E6A05A" 
      strokeWidth="1.5"
    />
    {/* Inner ear detail */}
    <path 
      d="M16 54 Q10 42, 10 28 Q10 16, 16 10 Q22 16, 22 28 Q22 42, 16 54" 
      fill="#FFE0B2"
    />
    {/* Ridge line */}
    <path d="M14 18 Q10 32, 14 46" stroke="#D4894A" strokeWidth="1.5" fill="none"/>
    {/* Inner shadow */}
    <ellipse cx="14" cy="34" rx="4" ry="8" fill="#CC8844" opacity="0.3"/>
  </svg>
);

const EarBunny = () => (
  <svg viewBox="0 0 32 80" className="w-full h-full">
    {/* Long bunny ear - clear rabbit shape */}
    <path 
      d="M16 78 Q2 70, 2 40 Q2 10, 16 2 Q30 10, 30 40 Q30 70, 16 78" 
      fill="white" 
      stroke="#BDBDBD" 
      strokeWidth="2.5"
    />
    {/* Inner pink - distinctive rabbit look */}
    <path 
      d="M16 70 Q8 62, 8 38 Q8 14, 16 8 Q24 14, 24 38 Q24 62, 16 70" 
      fill="#FFCDD2"
    />
    {/* Pink gradient effect */}
    <ellipse cx="16" cy="36" rx="6" ry="24" fill="#F48FB1" opacity="0.4"/>
    {/* Fur texture highlights */}
    <ellipse cx="10" cy="24" rx="2" ry="10" fill="white" opacity="0.6"/>
    <ellipse cx="22" cy="50" rx="2" ry="8" fill="white" opacity="0.4"/>
  </svg>
);


// ========== HATS ==========
const HatMagic = () => (
  <svg viewBox="0 0 64 56" className="w-full h-full">
    {/* Hat brim */}
    <ellipse cx="32" cy="52" rx="30" ry="4" fill="#1A1A1A" stroke="#424242" strokeWidth="1"/>
    {/* Hat body */}
    <path d="M12 52 L32 8 L52 52" fill="#1A1A1A" stroke="#424242" strokeWidth="1"/>
    <path d="M14 52 L32 12 L50 52" fill="#212121"/>
    {/* Hat band */}
    <rect x="18" y="42" width="28" height="6" rx="1" fill="#7B1FA2"/>
    <ellipse cx="32" cy="45" rx="12" ry="2" fill="#9C27B0" opacity="0.5"/>
    {/* Magic star */}
    <polygon points="32,16 34,22 40,22 35,26 37,32 32,28 27,32 29,26 24,22 30,22" fill="#FFD700" stroke="#FFA000" strokeWidth="1"/>
    {/* Sparkles */}
    <circle cx="24" cy="30" r="2" fill="#FFD700" opacity="0.7"/>
    <circle cx="40" cy="24" r="1.5" fill="#FFD700" opacity="0.7"/>
  </svg>
);

const HatParty = () => (
  <svg viewBox="0 0 56 56" className="w-full h-full">
    {/* Party hat cone */}
    <path d="M28 4 L50 52 L6 52 Z" fill="#E91E63" stroke="#C2185B" strokeWidth="2"/>
    {/* Stripes */}
    <path d="M12 40 L44 40" stroke="#FFEB3B" strokeWidth="5"/>
    <path d="M18 28 L38 28" stroke="#4CAF50" strokeWidth="4"/>
    <path d="M22 18 L34 18" stroke="#2196F3" strokeWidth="3"/>
    {/* Pom pom on top */}
    <circle cx="28" cy="6" r="6" fill="#FFEB3B" stroke="#F57C00" strokeWidth="1"/>
    <circle cx="26" cy="4" r="2" fill="#FFF59D"/>
    {/* Polka dots */}
    <circle cx="20" cy="34" r="3" fill="#2196F3"/>
    <circle cx="36" cy="46" r="3" fill="#FF9800"/>
    <circle cx="34" cy="34" r="2" fill="#4CAF50"/>
  </svg>
);

const HatCrown = () => (
  <svg viewBox="0 0 64 48" className="w-full h-full">
    {/* Crown body */}
    <path 
      d="M6 44 L6 22 L16 32 L32 12 L48 32 L58 22 L58 44 Z" 
      fill="#FFD700" 
      stroke="#FF8F00" 
      strokeWidth="2"
    />
    {/* Crown inner gradient effect */}
    <path d="M10 44 L10 26 L18 34 L32 18 L46 34 L54 26 L54 44 Z" fill="#FFEB3B" opacity="0.5"/>
    {/* Jewels */}
    <circle cx="16" cy="18" r="5" fill="#E91E63" stroke="#C2185B" strokeWidth="1"/>
    <circle cx="32" cy="10" r="5" fill="#2196F3" stroke="#1565C0" strokeWidth="1"/>
    <circle cx="48" cy="18" r="5" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1"/>
    {/* Jewel highlights */}
    <circle cx="14" cy="16" r="2" fill="#F48FB1" opacity="0.7"/>
    <circle cx="30" cy="8" r="2" fill="#64B5F6" opacity="0.7"/>
    <circle cx="46" cy="16" r="2" fill="#81C784" opacity="0.7"/>
    {/* Crown base */}
    <rect x="6" y="38" width="52" height="6" fill="#FF8F00"/>
  </svg>
);

const HatBaseball = () => (
  <svg viewBox="0 0 64 44" className="w-full h-full">
    {/* Cap dome */}
    <path d="M8 38 Q8 16, 32 12 Q56 16, 56 38" fill="#1976D2" stroke="#0D47A1" strokeWidth="2"/>
    {/* Cap visor */}
    <path d="M4 38 L24 38 Q32 38, 32 30 L32 34 Q32 38, 40 38 L60 38 Q58 44, 32 46 Q6 44, 4 38" fill="#0D47A1"/>
    {/* Cap button on top */}
    <circle cx="32" cy="12" r="4" fill="#0D47A1" stroke="#1565C0" strokeWidth="1"/>
    {/* Front panel with logo */}
    <rect x="22" y="24" width="20" height="10" rx="2" fill="white"/>
    <text x="32" y="32" fontSize="8" fill="#1976D2" textAnchor="middle" fontWeight="bold">B</text>
    {/* Stitching detail */}
    <path d="M32 12 L32 24" stroke="#0D47A1" strokeWidth="1" strokeDasharray="2,2"/>
  </svg>
);

const HatCowboy = () => (
  <svg viewBox="0 0 72 48" className="w-full h-full">
    {/* Wide brim */}
    <ellipse cx="36" cy="42" rx="34" ry="6" fill="#6D4C41" stroke="#4E342E" strokeWidth="2"/>
    {/* Brim curve */}
    <path d="M4 40 Q12 48, 36 48 Q60 48, 68 40" fill="#5D4037"/>
    {/* Hat crown */}
    <path d="M18 42 Q18 24, 36 20 Q54 24, 54 42" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    {/* Crown indent */}
    <path d="M22 26 Q36 34, 50 26" fill="#6D4C41"/>
    {/* Hat band */}
    <rect x="22" y="32" width="28" height="5" rx="1" fill="#FFCA28"/>
    {/* Band buckle */}
    <rect x="32" y="31" width="8" height="7" rx="1" fill="#FFD54F" stroke="#F57C00" strokeWidth="1"/>
    <circle cx="36" cy="34" r="2" fill="#8D6E63"/>
  </svg>
);

const HatBow = () => (
  <svg viewBox="0 0 56 40" className="w-full h-full">
    {/* Left bow loop */}
    <path 
      d="M28 20 Q12 6, 6 20 Q12 34, 28 20" 
      fill="#E91E63" 
      stroke="#AD1457" 
      strokeWidth="2"
    />
    <ellipse cx="12" cy="16" rx="4" ry="3" fill="#F48FB1" opacity="0.5"/>
    
    {/* Right bow loop */}
    <path 
      d="M28 20 Q44 6, 50 20 Q44 34, 28 20" 
      fill="#E91E63" 
      stroke="#AD1457" 
      strokeWidth="2"
    />
    <ellipse cx="44" cy="16" rx="4" ry="3" fill="#F48FB1" opacity="0.5"/>
    
    {/* Center knot */}
    <circle cx="28" cy="20" r="8" fill="#AD1457" stroke="#880E4F" strokeWidth="1"/>
    <ellipse cx="26" cy="18" rx="3" ry="2" fill="#E91E63" opacity="0.5"/>
    
    {/* Ribbon tails */}
    <path d="M24 28 Q22 36, 18 38" stroke="#E91E63" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M32 28 Q34 36, 38 38" stroke="#E91E63" strokeWidth="4" fill="none" strokeLinecap="round"/>
  </svg>
);

// ========== ARMS ==========
const ArmWave = () => (
  <svg viewBox="0 0 52 60" className="w-full h-full">
    {/* Arm - curved waving position */}
    <path 
      d="M10 56 Q6 42, 14 32 Q22 22, 30 18" 
      stroke="#FFCC80" 
      strokeWidth="14" 
      fill="none" 
      strokeLinecap="round"
    />
    {/* Arm highlight */}
    <path 
      d="M12 52 Q10 42, 16 34 Q22 26, 28 22" 
      stroke="#FFE0B2" 
      strokeWidth="6" 
      fill="none" 
      strokeLinecap="round"
      opacity="0.4"
    />
    
    {/* Hand palm */}
    <ellipse cx="34" cy="14" rx="12" ry="11" fill="#FFCC80" stroke="#D4894A" strokeWidth="2"/>
    <ellipse cx="31" cy="12" rx="5" ry="4" fill="#FFE0B2" opacity="0.5"/>
    
    {/* Fingers spread - waving */}
    {/* Thumb */}
    <path d="M20 18 Q16 14, 18 10 Q20 8, 22 10" fill="#FFCC80" stroke="#D4894A" strokeWidth="1.5"/>
    {/* Index */}
    <rect x="26" y="2" width="5" height="13" rx="2.5" fill="#FFCC80" stroke="#D4894A" strokeWidth="1.5" transform="rotate(-20 28 8)"/>
    {/* Middle */}
    <rect x="33" y="0" width="5" height="15" rx="2.5" fill="#FFCC80" stroke="#D4894A" strokeWidth="1.5" transform="rotate(-5 35 7)"/>
    {/* Ring */}
    <rect x="40" y="2" width="5" height="13" rx="2.5" fill="#FFCC80" stroke="#D4894A" strokeWidth="1.5" transform="rotate(10 42 8)"/>
    {/* Pinky */}
    <rect x="46" y="6" width="4" height="10" rx="2" fill="#FFCC80" stroke="#D4894A" strokeWidth="1.5" transform="rotate(22 48 11)"/>
  </svg>
);

const ArmStrong = () => (
  <svg viewBox="0 0 60 52" className="w-full h-full">
    {/* Upper arm */}
    <path 
      d="M8 48 L20 34" 
      stroke="#FFCC80" 
      strokeWidth="14" 
      fill="none" 
      strokeLinecap="round"
    />
    
    {/* Forearm bent up */}
    <path 
      d="M20 34 L28 16" 
      stroke="#FFCC80" 
      strokeWidth="14" 
      fill="none" 
      strokeLinecap="round"
    />
    
    {/* Bicep muscle bulge */}
    <ellipse cx="36" cy="24" rx="18" ry="14" fill="#FFCC80" stroke="#D4894A" strokeWidth="2"/>
    {/* Muscle definition */}
    <path d="M28 20 Q36 16, 44 20" stroke="#FFE0B2" strokeWidth="3" fill="none" opacity="0.6"/>
    <ellipse cx="34" cy="22" rx="8" ry="6" fill="#FFE0B2" opacity="0.4"/>
    
    {/* Fist */}
    <ellipse cx="30" cy="12" rx="10" ry="9" fill="#FFCC80" stroke="#D4894A" strokeWidth="2"/>
    {/* Knuckle lines */}
    <path d="M22 10 L38 10" stroke="#D4894A" strokeWidth="1.5" opacity="0.6"/>
    <path d="M24 14 L36 14" stroke="#D4894A" strokeWidth="1" opacity="0.4"/>
    {/* Fist highlight */}
    <ellipse cx="28" cy="9" rx="4" ry="3" fill="#FFE0B2" opacity="0.5"/>
  </svg>
);

const ArmOpen = () => (
  <svg viewBox="0 0 56 54" className="w-full h-full">
    {/* Arm */}
    <path 
      d="M6 50 Q12 36, 22 30" 
      stroke="#FFCC80" 
      strokeWidth="14" 
      fill="none" 
      strokeLinecap="round"
    />
    {/* Arm highlight */}
    <path 
      d="M8 46 Q14 36, 22 32" 
      stroke="#FFE0B2" 
      strokeWidth="6" 
      fill="none" 
      strokeLinecap="round"
      opacity="0.4"
    />
    
    {/* Hand palm - open and visible */}
    <ellipse cx="32" cy="26" rx="14" ry="13" fill="#FFCC80" stroke="#D4894A" strokeWidth="2"/>
    {/* Palm lines */}
    <path d="M26 28 Q32 32, 38 28" stroke="#D4894A" strokeWidth="1" opacity="0.3"/>
    <ellipse cx="30" cy="24" rx="5" ry="4" fill="#FFE0B2" opacity="0.4"/>
    
    {/* Fingers spread - clearly visible */}
    {/* Thumb */}
    <path d="M18 28 Q14 24, 16 18 Q18 14, 22 16" fill="#FFCC80" stroke="#D4894A" strokeWidth="1.5"/>
    {/* Index */}
    <rect x="24" y="8" width="5" height="16" rx="2.5" fill="#FFCC80" stroke="#D4894A" strokeWidth="1.5" transform="rotate(-18 26 16)"/>
    {/* Middle */}
    <rect x="32" y="6" width="5" height="18" rx="2.5" fill="#FFCC80" stroke="#D4894A" strokeWidth="1.5"/>
    {/* Ring */}
    <rect x="40" y="8" width="5" height="16" rx="2.5" fill="#FFCC80" stroke="#D4894A" strokeWidth="1.5" transform="rotate(15 42 16)"/>
    {/* Pinky */}
    <rect x="47" y="12" width="4" height="12" rx="2" fill="#FFCC80" stroke="#D4894A" strokeWidth="1.5" transform="rotate(28 49 18)"/>
  </svg>
);

const ArmThumbsUp = () => (
  <svg viewBox="0 0 48 60" className="w-full h-full">
    {/* Arm */}
    <path 
      d="M12 56 Q8 42, 18 32" 
      stroke="#FFCC80" 
      strokeWidth="14" 
      fill="none" 
      strokeLinecap="round"
    />
    {/* Arm highlight */}
    <path 
      d="M14 52 Q12 42, 18 36" 
      stroke="#FFE0B2" 
      strokeWidth="5" 
      fill="none" 
      strokeLinecap="round"
      opacity="0.4"
    />
    
    {/* Fist base */}
    <rect x="14" y="28" width="18" height="16" rx="5" fill="#FFCC80" stroke="#D4894A" strokeWidth="2"/>
    {/* Finger lines on fist */}
    <path d="M16 33 L30 33" stroke="#D4894A" strokeWidth="1.5" opacity="0.4"/>
    <path d="M16 38 L30 38" stroke="#D4894A" strokeWidth="1.5" opacity="0.4"/>
    
    {/* Thumb pointing up - prominent */}
    <rect x="18" y="6" width="10" height="26" rx="5" fill="#FFCC80" stroke="#D4894A" strokeWidth="2"/>
    {/* Thumb highlight */}
    <ellipse cx="23" cy="14" rx="3" ry="6" fill="#FFE0B2" opacity="0.5"/>
    {/* Thumb nail */}
    <ellipse cx="23" cy="8" rx="4" ry="2.5" fill="#FFECB3" stroke="#D4894A" strokeWidth="1"/>
  </svg>
);

const ArmVictory = () => (
  <svg viewBox="0 0 52 60" className="w-full h-full">
    {/* Arm */}
    <path 
      d="M10 56 Q6 42, 16 34" 
      stroke="#FFCC80" 
      strokeWidth="14" 
      fill="none" 
      strokeLinecap="round"
    />
    {/* Arm highlight */}
    <path 
      d="M12 52 Q10 42, 18 36" 
      stroke="#FFE0B2" 
      strokeWidth="5" 
      fill="none" 
      strokeLinecap="round"
      opacity="0.4"
    />
    
    {/* Palm/fist base */}
    <rect x="12" y="30" width="16" height="14" rx="4" fill="#FFCC80" stroke="#D4894A" strokeWidth="2"/>
    
    {/* Index finger (V left) */}
    <rect x="12" y="6" width="6" height="28" rx="3" fill="#FFCC80" stroke="#D4894A" strokeWidth="2" transform="rotate(-14 15 20)"/>
    {/* Index nail */}
    <ellipse cx="13" cy="8" rx="2.5" ry="2" fill="#FFECB3" stroke="#D4894A" strokeWidth="0.8" transform="rotate(-14 13 8)"/>
    
    {/* Middle finger (V right) */}
    <rect x="26" y="6" width="6" height="28" rx="3" fill="#FFCC80" stroke="#D4894A" strokeWidth="2" transform="rotate(14 29 20)"/>
    {/* Middle nail */}
    <ellipse cx="31" cy="8" rx="2.5" ry="2" fill="#FFECB3" stroke="#D4894A" strokeWidth="0.8" transform="rotate(14 31 8)"/>
    
    {/* Folded fingers (ring, pinky) */}
    <ellipse cx="24" cy="40" rx="8" ry="5" fill="#FFCC80" stroke="#D4894A" strokeWidth="1.5"/>
    
    {/* Thumb tucked to side */}
    <ellipse cx="8" cy="36" rx="5" ry="7" fill="#FFCC80" stroke="#D4894A" strokeWidth="1.5"/>
  </svg>
);


// ========== EXTRAS ==========
const Mustache = () => (
  <svg viewBox="0 0 64 28" className="w-full h-full">
    <path 
      d="M32 24 
         Q18 24, 10 12 Q6 6, 4 14 Q6 24, 18 20 Q28 18, 32 24
         Q36 18, 46 20 Q58 24, 60 14 Q58 6, 54 12 Q46 24, 32 24" 
      fill="#4E342E" 
      stroke="#3E2723" 
      strokeWidth="2"
    />
    {/* Highlight */}
    <path d="M12 14 Q18 10, 24 14" stroke="#6D4C41" strokeWidth="2" fill="none" opacity="0.4"/>
    <path d="M40 14 Q46 10, 52 14" stroke="#6D4C41" strokeWidth="2" fill="none" opacity="0.4"/>
  </svg>
);

const GlassesSun = () => (
  <svg viewBox="0 0 64 28" className="w-full h-full">
    {/* Left lens */}
    <rect x="4" y="6" width="22" height="18" rx="4" fill="#1A1A1A" stroke="#424242" strokeWidth="2.5"/>
    <rect x="6" y="8" width="8" height="6" rx="2" fill="#424242" opacity="0.3"/>
    
    {/* Right lens */}
    <rect x="38" y="6" width="22" height="18" rx="4" fill="#1A1A1A" stroke="#424242" strokeWidth="2.5"/>
    <rect x="40" y="8" width="8" height="6" rx="2" fill="#424242" opacity="0.3"/>
    
    {/* Bridge */}
    <path d="M26 14 Q32 10, 38 14" stroke="#424242" strokeWidth="3" fill="none"/>
    
    {/* Temple arms */}
    <line x1="0" y1="12" x2="4" y2="12" stroke="#424242" strokeWidth="3" strokeLinecap="round"/>
    <line x1="60" y1="12" x2="64" y2="12" stroke="#424242" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const GlassesNerd = () => (
  <svg viewBox="0 0 64 28" className="w-full h-full">
    {/* Left lens */}
    <circle cx="16" cy="14" r="13" fill="white" stroke="#424242" strokeWidth="2.5"/>
    <circle cx="16" cy="14" r="10" fill="#E3F2FD" opacity="0.5"/>
    <ellipse cx="12" cy="10" rx="4" ry="3" fill="white" opacity="0.6"/>
    
    {/* Right lens */}
    <circle cx="48" cy="14" r="13" fill="white" stroke="#424242" strokeWidth="2.5"/>
    <circle cx="48" cy="14" r="10" fill="#E3F2FD" opacity="0.5"/>
    <ellipse cx="44" cy="10" rx="4" ry="3" fill="white" opacity="0.6"/>
    
    {/* Bridge */}
    <path d="M29 14 L35 14" stroke="#424242" strokeWidth="2.5"/>
    
    {/* Temple arms */}
    <line x1="0" y1="10" x2="3" y2="10" stroke="#424242" strokeWidth="2.5"/>
    <line x1="61" y1="10" x2="64" y2="10" stroke="#424242" strokeWidth="2.5"/>
  </svg>
);

const Flower = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    {/* Petals */}
    <ellipse cx="24" cy="10" rx="8" ry="10" fill="#F48FB1" stroke="#EC407A" strokeWidth="1.5"/>
    <ellipse cx="10" cy="20" rx="10" ry="8" fill="#F48FB1" stroke="#EC407A" strokeWidth="1.5"/>
    <ellipse cx="38" cy="20" rx="10" ry="8" fill="#F48FB1" stroke="#EC407A" strokeWidth="1.5"/>
    <ellipse cx="14" cy="34" rx="8" ry="10" fill="#F48FB1" stroke="#EC407A" strokeWidth="1.5" transform="rotate(-30 14 34)"/>
    <ellipse cx="34" cy="34" rx="8" ry="10" fill="#F48FB1" stroke="#EC407A" strokeWidth="1.5" transform="rotate(30 34 34)"/>
    
    {/* Petal highlights */}
    <ellipse cx="24" cy="8" rx="3" ry="4" fill="#FCE4EC" opacity="0.6"/>
    <ellipse cx="8" cy="20" rx="4" ry="3" fill="#FCE4EC" opacity="0.6"/>
    <ellipse cx="40" cy="20" rx="4" ry="3" fill="#FCE4EC" opacity="0.6"/>
    
    {/* Center */}
    <circle cx="24" cy="24" r="8" fill="#FFEB3B" stroke="#F57C00" strokeWidth="2"/>
    <circle cx="22" cy="22" r="3" fill="#FFF59D" opacity="0.7"/>
  </svg>
);

const Butterfly = () => (
  <svg viewBox="0 0 56 40" className="w-full h-full">
    {/* Upper wings */}
    <ellipse cx="14" cy="14" rx="12" ry="12" fill="#7C4DFF" stroke="#5E35B1" strokeWidth="2"/>
    <ellipse cx="42" cy="14" rx="12" ry="12" fill="#7C4DFF" stroke="#5E35B1" strokeWidth="2"/>
    
    {/* Lower wings */}
    <ellipse cx="12" cy="28" rx="10" ry="8" fill="#B388FF" stroke="#7C4DFF" strokeWidth="2"/>
    <ellipse cx="44" cy="28" rx="10" ry="8" fill="#B388FF" stroke="#7C4DFF" strokeWidth="2"/>
    
    {/* Wing patterns */}
    <circle cx="10" cy="12" r="4" fill="#E040FB"/>
    <circle cx="46" cy="12" r="4" fill="#E040FB"/>
    <circle cx="16" cy="18" r="2" fill="#EA80FC"/>
    <circle cx="40" cy="18" r="2" fill="#EA80FC"/>
    
    {/* Body */}
    <ellipse cx="28" cy="20" rx="4" ry="16" fill="#5D4037" stroke="#4E342E" strokeWidth="1"/>
    
    {/* Antennae */}
    <path d="M26 6 Q24 2, 22 4" stroke="#5D4037" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M30 6 Q32 2, 34 4" stroke="#5D4037" strokeWidth="2" fill="none" strokeLinecap="round"/>
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
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Inner highlight */}
    <polygon 
      points="24,10 26,16 34,16 28,20 30,28 24,24 18,28 20,20 14,16 22,16" 
      fill="#FFEB3B" 
      opacity="0.6"
    />
    {/* Sparkle */}
    <circle cx="20" cy="14" r="2" fill="#FFF59D" opacity="0.8"/>
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
