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
  <svg viewBox="0 0 64 32" className="w-full h-full">
    {/* Smile shape */}
    <path 
      d="M6 10 Q32 36, 58 10" 
      stroke="#C62828" 
      strokeWidth="4" 
      fill="none" 
      strokeLinecap="round"
    />
    {/* Inner mouth */}
    <path 
      d="M10 12 Q32 32, 54 12" 
      fill="#FFCDD2"
    />
    {/* Teeth */}
    <rect x="22" y="12" width="8" height="6" rx="1" fill="white" stroke="#E0E0E0" strokeWidth="0.5"/>
    <rect x="32" y="12" width="8" height="6" rx="1" fill="white" stroke="#E0E0E0" strokeWidth="0.5"/>
  </svg>
);

const MouthSad = () => (
  <svg viewBox="0 0 64 28" className="w-full h-full">
    <path 
      d="M8 24 Q32 4, 56 24" 
      stroke="#C62828" 
      strokeWidth="4" 
      fill="none" 
      strokeLinecap="round"
    />
    <path 
      d="M14 22 Q32 8, 50 22" 
      stroke="#EF5350" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

const MouthTongue = () => (
  <svg viewBox="0 0 64 40" className="w-full h-full">
    {/* Open mouth */}
    <path 
      d="M8 12 Q32 30, 56 12 L56 18 Q32 36, 8 18 Z" 
      fill="#FFCDD2" 
      stroke="#C62828" 
      strokeWidth="3"
    />
    {/* Tongue */}
    <ellipse cx="32" cy="28" rx="12" ry="10" fill="#E91E63" stroke="#C2185B" strokeWidth="1.5"/>
    <path d="M32 22 L32 36" stroke="#AD1457" strokeWidth="2" strokeLinecap="round"/>
    {/* Highlight on tongue */}
    <ellipse cx="28" cy="26" rx="3" ry="2" fill="#F48FB1" opacity="0.5"/>
  </svg>
);

const MouthKiss = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full">
    <ellipse cx="20" cy="20" rx="10" ry="14" fill="#E91E63" stroke="#C2185B" strokeWidth="2.5"/>
    <ellipse cx="20" cy="16" rx="6" ry="4" fill="#F48FB1" opacity="0.6"/>
    <ellipse cx="20" cy="20" rx="4" ry="6" fill="#AD1457" opacity="0.5"/>
    {/* Lip highlight */}
    <path d="M14 18 Q20 14, 26 18" stroke="#FCE4EC" strokeWidth="1.5" fill="none" opacity="0.6"/>
  </svg>
);

const MouthOh = () => (
  <svg viewBox="0 0 44 44" className="w-full h-full">
    <ellipse cx="22" cy="22" rx="14" ry="18" fill="#FFCDD2" stroke="#C62828" strokeWidth="2.5"/>
    <ellipse cx="22" cy="22" rx="8" ry="12" fill="#5D4037"/>
    <ellipse cx="22" cy="18" rx="4" ry="4" fill="#4E342E"/>
    {/* Teeth hint */}
    <rect x="16" y="10" width="12" height="4" rx="1" fill="white" opacity="0.6"/>
  </svg>
);

const MouthAngry = () => (
  <svg viewBox="0 0 64 24" className="w-full h-full">
    <path 
      d="M8 18 L28 8 L36 8 L56 18" 
      stroke="#C62828" 
      strokeWidth="5" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 16 L28 10 L36 10 L52 16" 
      stroke="#EF5350" 
      strokeWidth="2" 
      fill="none" 
      opacity="0.4"
    />
  </svg>
);

// ========== EARS ==========
const EarNormal = () => (
  <svg viewBox="0 0 32 48" className="w-full h-full">
    {/* Outer ear */}
    <ellipse cx="16" cy="24" rx="13" ry="20" fill="#FFCC80" stroke="#E65100" strokeWidth="2"/>
    {/* Inner ear detail */}
    <ellipse cx="16" cy="24" rx="8" ry="14" fill="#FFE0B2"/>
    <path d="M14 14 Q10 24, 14 34" stroke="#FFAB40" strokeWidth="2" fill="none"/>
    {/* Ear lobe highlight */}
    <ellipse cx="16" cy="38" rx="5" ry="4" fill="#FFE0B2" opacity="0.6"/>
  </svg>
);

const EarElf = () => (
  <svg viewBox="0 0 32 60" className="w-full h-full">
    {/* Pointed elf ear */}
    <path 
      d="M16 58 Q4 40, 6 20 Q8 8, 16 2 Q24 8, 26 20 Q28 40, 16 58" 
      fill="#FFCC80" 
      stroke="#E65100" 
      strokeWidth="2"
    />
    {/* Inner ear detail */}
    <path 
      d="M16 50 Q10 36, 12 22 Q14 12, 16 8 Q18 12, 20 22 Q22 36, 16 50" 
      fill="#FFE0B2"
    />
    <path d="M14 18 Q12 28, 14 38" stroke="#FFAB40" strokeWidth="2" fill="none"/>
  </svg>
);

const EarBunny = () => (
  <svg viewBox="0 0 28 72" className="w-full h-full">
    {/* Long bunny ear */}
    <ellipse cx="14" cy="36" rx="11" ry="34" fill="white" stroke="#BDBDBD" strokeWidth="2"/>
    {/* Inner pink */}
    <ellipse cx="14" cy="36" rx="6" ry="28" fill="#FFCDD2"/>
    {/* Highlight */}
    <ellipse cx="10" cy="24" rx="2" ry="8" fill="white" opacity="0.6"/>
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
  <svg viewBox="0 0 48 56" className="w-full h-full">
    {/* Arm */}
    <path 
      d="M8 52 Q6 36, 12 28 Q18 20, 24 16" 
      stroke="#FFCC80" 
      strokeWidth="12" 
      fill="none" 
      strokeLinecap="round"
    />
    <path 
      d="M8 52 Q6 36, 12 28 Q18 20, 24 16" 
      stroke="#FFE0B2" 
      strokeWidth="8" 
      fill="none" 
      strokeLinecap="round"
      opacity="0.4"
    />
    
    {/* Hand palm */}
    <ellipse cx="28" cy="12" rx="10" ry="9" fill="#FFCC80" stroke="#E65100" strokeWidth="1.5"/>
    <ellipse cx="26" cy="10" rx="4" ry="3" fill="#FFE0B2" opacity="0.5"/>
    
    {/* Fingers spread for waving */}
    <rect x="20" y="2" width="4" height="12" rx="2" fill="#FFCC80" stroke="#E65100" strokeWidth="1" transform="rotate(-25 22 8)"/>
    <rect x="26" y="0" width="4" height="14" rx="2" fill="#FFCC80" stroke="#E65100" strokeWidth="1" transform="rotate(-8 28 7)"/>
    <rect x="32" y="2" width="4" height="12" rx="2" fill="#FFCC80" stroke="#E65100" strokeWidth="1" transform="rotate(10 34 8)"/>
    <rect x="37" y="6" width="3.5" height="10" rx="1.5" fill="#FFCC80" stroke="#E65100" strokeWidth="1" transform="rotate(25 38 11)"/>
    {/* Thumb */}
    <ellipse cx="18" cy="14" rx="3" ry="5" fill="#FFCC80" stroke="#E65100" strokeWidth="1" transform="rotate(-30 18 14)"/>
  </svg>
);

const ArmStrong = () => (
  <svg viewBox="0 0 56 48" className="w-full h-full">
    {/* Upper arm */}
    <path 
      d="M8 44 L18 30" 
      stroke="#FFCC80" 
      strokeWidth="12" 
      fill="none" 
      strokeLinecap="round"
    />
    
    {/* Forearm bent up */}
    <path 
      d="M18 30 L24 14" 
      stroke="#FFCC80" 
      strokeWidth="12" 
      fill="none" 
      strokeLinecap="round"
    />
    
    {/* Muscle bulge */}
    <ellipse cx="32" cy="20" rx="16" ry="12" fill="#FFCC80" stroke="#E65100" strokeWidth="2"/>
    <ellipse cx="30" cy="18" rx="10" ry="7" fill="#FFE0B2" opacity="0.5"/>
    
    {/* Fist */}
    <ellipse cx="26" cy="10" rx="8" ry="7" fill="#FFCC80" stroke="#E65100" strokeWidth="1.5"/>
    <path d="M20 8 L32 8" stroke="#E65100" strokeWidth="1"/>
    <path d="M20 12 L32 12" stroke="#E65100" strokeWidth="1"/>
  </svg>
);

const ArmOpen = () => (
  <svg viewBox="0 0 52 48" className="w-full h-full">
    {/* Arm */}
    <path 
      d="M6 44 Q10 30, 20 26" 
      stroke="#FFCC80" 
      strokeWidth="12" 
      fill="none" 
      strokeLinecap="round"
    />
    
    {/* Hand palm - open */}
    <ellipse cx="30" cy="24" rx="12" ry="11" fill="#FFCC80" stroke="#E65100" strokeWidth="1.5"/>
    <ellipse cx="28" cy="22" rx="5" ry="4" fill="#FFE0B2" opacity="0.4"/>
    
    {/* Five fingers spread */}
    {/* Thumb */}
    <ellipse cx="16" cy="22" rx="4" ry="6" fill="#FFCC80" stroke="#E65100" strokeWidth="1" transform="rotate(-45 16 22)"/>
    {/* Index */}
    <rect x="22" y="8" width="4" height="14" rx="2" fill="#FFCC80" stroke="#E65100" strokeWidth="1" transform="rotate(-20 24 15)"/>
    {/* Middle */}
    <rect x="28" y="6" width="4" height="16" rx="2" fill="#FFCC80" stroke="#E65100" strokeWidth="1"/>
    {/* Ring */}
    <rect x="34" y="8" width="4" height="14" rx="2" fill="#FFCC80" stroke="#E65100" strokeWidth="1" transform="rotate(15 36 15)"/>
    {/* Pinky */}
    <rect x="40" y="12" width="3.5" height="11" rx="1.5" fill="#FFCC80" stroke="#E65100" strokeWidth="1" transform="rotate(30 41 17)"/>
  </svg>
);

const ArmThumbsUp = () => (
  <svg viewBox="0 0 44 56" className="w-full h-full">
    {/* Arm */}
    <path 
      d="M10 52 Q6 38, 16 28" 
      stroke="#FFCC80" 
      strokeWidth="12" 
      fill="none" 
      strokeLinecap="round"
    />
    
    {/* Fist base */}
    <rect x="12" y="24" width="16" height="14" rx="4" fill="#FFCC80" stroke="#E65100" strokeWidth="1.5"/>
    {/* Finger lines on fist */}
    <path d="M14 28 L26 28" stroke="#E65100" strokeWidth="1" opacity="0.5"/>
    <path d="M14 32 L26 32" stroke="#E65100" strokeWidth="1" opacity="0.5"/>
    
    {/* Thumb pointing up */}
    <rect x="16" y="6" width="8" height="22" rx="4" fill="#FFCC80" stroke="#E65100" strokeWidth="1.5"/>
    <ellipse cx="20" cy="8" rx="3" ry="2" fill="#FFE0B2" opacity="0.5"/>
    
    {/* Thumb nail */}
    <ellipse cx="20" cy="8" rx="2.5" ry="1.5" fill="#FFECB3" stroke="#E65100" strokeWidth="0.5"/>
  </svg>
);

const ArmVictory = () => (
  <svg viewBox="0 0 48 56" className="w-full h-full">
    {/* Arm */}
    <path 
      d="M8 52 Q4 38, 14 30" 
      stroke="#FFCC80" 
      strokeWidth="12" 
      fill="none" 
      strokeLinecap="round"
    />
    
    {/* Palm/fist base */}
    <rect x="10" y="26" width="14" height="12" rx="3" fill="#FFCC80" stroke="#E65100" strokeWidth="1.5"/>
    
    {/* Index finger (V left) */}
    <rect x="12" y="6" width="5" height="24" rx="2.5" fill="#FFCC80" stroke="#E65100" strokeWidth="1.5" transform="rotate(-12 14 18)"/>
    
    {/* Middle finger (V right) */}
    <rect x="24" y="6" width="5" height="24" rx="2.5" fill="#FFCC80" stroke="#E65100" strokeWidth="1.5" transform="rotate(12 26 18)"/>
    
    {/* Folded fingers (ring, pinky) */}
    <ellipse cx="22" cy="34" rx="6" ry="4" fill="#FFCC80" stroke="#E65100" strokeWidth="1"/>
    
    {/* Thumb tucked */}
    <ellipse cx="8" cy="30" rx="4" ry="5" fill="#FFCC80" stroke="#E65100" strokeWidth="1"/>
    
    {/* Finger nails */}
    <ellipse cx="12" cy="8" rx="2" ry="1.5" fill="#FFECB3" stroke="#E65100" strokeWidth="0.5" transform="rotate(-12 12 8)"/>
    <ellipse cx="28" cy="8" rx="2" ry="1.5" fill="#FFECB3" stroke="#E65100" strokeWidth="0.5" transform="rotate(12 28 8)"/>
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
