// Piece icons for Faccia Buffa game - ALL SVG, no white backgrounds
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

// ========== EYES - 3D Cartoon Style ==========
const EyesBigSVG = () => (
  <svg viewBox="0 0 80 40" className="w-full h-full">
    {/* Left eye */}
    <defs>
      <radialGradient id="eyeWhite" cx="40%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#FFFFFF"/>
        <stop offset="100%" stopColor="#E8E8E8"/>
      </radialGradient>
      <radialGradient id="pupilShine" cx="30%" cy="20%" r="50%">
        <stop offset="0%" stopColor="#4A4A4A"/>
        <stop offset="100%" stopColor="#1A1A1A"/>
      </radialGradient>
    </defs>
    <ellipse cx="20" cy="20" rx="16" ry="18" fill="url(#eyeWhite)" stroke="#5D4037" strokeWidth="2"/>
    <circle cx="22" cy="22" r="8" fill="url(#pupilShine)"/>
    <ellipse cx="18" cy="16" rx="4" ry="3" fill="white" opacity="0.9"/>
    {/* Right eye */}
    <ellipse cx="60" cy="20" rx="16" ry="18" fill="url(#eyeWhite)" stroke="#5D4037" strokeWidth="2"/>
    <circle cx="62" cy="22" r="8" fill="url(#pupilShine)"/>
    <ellipse cx="58" cy="16" rx="4" ry="3" fill="white" opacity="0.9"/>
  </svg>
);

const EyesAngrySVG = () => (
  <svg viewBox="0 0 80 48" className="w-full h-full">
    <defs>
      <radialGradient id="eyeWhiteAngry" cx="40%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#FFFFFF"/>
        <stop offset="100%" stopColor="#E0E0E0"/>
      </radialGradient>
    </defs>
    {/* Angry eyebrows */}
    <path d="M4 8 L34 16" stroke="#5D4037" strokeWidth="6" strokeLinecap="round"/>
    <path d="M76 8 L46 16" stroke="#5D4037" strokeWidth="6" strokeLinecap="round"/>
    {/* Left eye */}
    <ellipse cx="20" cy="30" rx="14" ry="14" fill="url(#eyeWhiteAngry)" stroke="#5D4037" strokeWidth="2"/>
    <circle cx="22" cy="32" r="6" fill="#1A1A1A"/>
    <ellipse cx="18" cy="28" rx="3" ry="2" fill="white" opacity="0.8"/>
    {/* Right eye */}
    <ellipse cx="60" cy="30" rx="14" ry="14" fill="url(#eyeWhiteAngry)" stroke="#5D4037" strokeWidth="2"/>
    <circle cx="58" cy="32" r="6" fill="#1A1A1A"/>
    <ellipse cx="56" cy="28" rx="3" ry="2" fill="white" opacity="0.8"/>
  </svg>
);

const EyesSurprisedSVG = () => (
  <svg viewBox="0 0 80 44" className="w-full h-full">
    <defs>
      <radialGradient id="eyeWhiteSurprised" cx="40%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#FFFFFF"/>
        <stop offset="100%" stopColor="#E8E8E8"/>
      </radialGradient>
    </defs>
    {/* Left eye - big and round */}
    <circle cx="20" cy="22" r="18" fill="url(#eyeWhiteSurprised)" stroke="#5D4037" strokeWidth="2"/>
    <circle cx="20" cy="24" r="7" fill="#1A1A1A"/>
    <ellipse cx="16" cy="18" rx="5" ry="4" fill="white" opacity="0.9"/>
    {/* Right eye */}
    <circle cx="60" cy="22" r="18" fill="url(#eyeWhiteSurprised)" stroke="#5D4037" strokeWidth="2"/>
    <circle cx="60" cy="24" r="7" fill="#1A1A1A"/>
    <ellipse cx="56" cy="18" rx="5" ry="4" fill="white" opacity="0.9"/>
  </svg>
);

const EyesInLoveSVG = () => (
  <svg viewBox="0 0 80 40" className="w-full h-full">
    <defs>
      <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B9D"/>
        <stop offset="100%" stopColor="#E91E63"/>
      </linearGradient>
    </defs>
    {/* Left heart */}
    <path d="M20 12 C14 6, 4 12, 20 28 C36 12, 26 6, 20 12" fill="url(#heartGrad)" stroke="#C2185B" strokeWidth="1.5"/>
    <ellipse cx="13" cy="12" rx="4" ry="3" fill="#FF8A80" opacity="0.6"/>
    {/* Right heart */}
    <path d="M60 12 C54 6, 44 12, 60 28 C76 12, 66 6, 60 12" fill="url(#heartGrad)" stroke="#C2185B" strokeWidth="1.5"/>
    <ellipse cx="53" cy="12" rx="4" ry="3" fill="#FF8A80" opacity="0.6"/>
  </svg>
);

const EyesSleepySVG = () => (
  <svg viewBox="0 0 80 36" className="w-full h-full">
    <defs>
      <linearGradient id="lidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFECD2"/>
        <stop offset="100%" stopColor="#E8C4A0"/>
      </linearGradient>
    </defs>
    {/* Left closed eye */}
    <ellipse cx="20" cy="18" rx="16" ry="12" fill="url(#lidGrad)" stroke="#8D6E63" strokeWidth="2"/>
    <path d="M6 18 Q20 28, 34 18" stroke="#5D4037" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M12 12 L10 6" stroke="#5D4037" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 10 L20 4" stroke="#5D4037" strokeWidth="2" strokeLinecap="round"/>
    <path d="M28 12 L30 6" stroke="#5D4037" strokeWidth="2" strokeLinecap="round"/>
    {/* Right closed eye */}
    <ellipse cx="60" cy="18" rx="16" ry="12" fill="url(#lidGrad)" stroke="#8D6E63" strokeWidth="2"/>
    <path d="M46 18 Q60 28, 74 18" stroke="#5D4037" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M52 12 L50 6" stroke="#5D4037" strokeWidth="2" strokeLinecap="round"/>
    <path d="M60 10 L60 4" stroke="#5D4037" strokeWidth="2" strokeLinecap="round"/>
    <path d="M68 12 L70 6" stroke="#5D4037" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const EyesStarsSVG = () => (
  <svg viewBox="0 0 80 40" className="w-full h-full">
    <defs>
      <linearGradient id="starGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFE082"/>
        <stop offset="100%" stopColor="#FFB300"/>
      </linearGradient>
    </defs>
    {/* Left star */}
    <polygon points="20,2 24,14 38,14 27,22 31,36 20,28 9,36 13,22 2,14 16,14" 
             fill="url(#starGold)" stroke="#FF8F00" strokeWidth="1.5"/>
    <circle cx="20" cy="18" r="4" fill="#FFF59D"/>
    {/* Right star */}
    <polygon points="60,2 64,14 78,14 67,22 71,36 60,28 49,36 53,22 42,14 56,14" 
             fill="url(#starGold)" stroke="#FF8F00" strokeWidth="1.5"/>
    <circle cx="60" cy="18" r="4" fill="#FFF59D"/>
  </svg>
);

// ========== NOSES - 3D Cartoon Style ==========
const NoseRedSVG = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <radialGradient id="redNoseGrad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#EF5350"/>
        <stop offset="100%" stopColor="#C62828"/>
      </radialGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#redNoseGrad)" stroke="#B71C1C" strokeWidth="2"/>
    <ellipse cx="16" cy="16" rx="8" ry="6" fill="#FF8A80" opacity="0.6"/>
  </svg>
);

const NoseClownSVG = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <radialGradient id="clownNoseGrad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FF5252"/>
        <stop offset="100%" stopColor="#D32F2F"/>
      </radialGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#clownNoseGrad)" stroke="#B71C1C" strokeWidth="2"/>
    <ellipse cx="14" cy="14" rx="8" ry="6" fill="#FF8A80" opacity="0.7"/>
    <ellipse cx="32" cy="32" rx="4" ry="3" fill="#B71C1C" opacity="0.4"/>
  </svg>
);

const NosePigSVG = () => (
  <svg viewBox="0 0 56 44" className="w-full h-full">
    <defs>
      <radialGradient id="pigNoseGrad" cx="40%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#FFCCBC"/>
        <stop offset="100%" stopColor="#FFAB91"/>
      </radialGradient>
    </defs>
    <ellipse cx="28" cy="22" rx="26" ry="20" fill="url(#pigNoseGrad)" stroke="#A1887F" strokeWidth="2"/>
    <ellipse cx="16" cy="24" rx="6" ry="7" fill="#5D4037"/>
    <ellipse cx="40" cy="24" rx="6" ry="7" fill="#5D4037"/>
    <ellipse cx="28" cy="12" rx="12" ry="5" fill="white" opacity="0.4"/>
  </svg>
);

const NoseCarrotSVG = () => (
  <svg viewBox="0 0 36 56" className="w-full h-full">
    <defs>
      <linearGradient id="carrotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFB74D"/>
        <stop offset="100%" stopColor="#EF6C00"/>
      </linearGradient>
    </defs>
    <path d="M18 10 L28 50 Q18 54, 8 50 Z" fill="url(#carrotGrad)" stroke="#E65100" strokeWidth="1.5"/>
    <path d="M12 22 Q18 20, 24 22" stroke="#FFCC80" strokeWidth="2" fill="none"/>
    <path d="M10 32 Q18 30, 26 32" stroke="#FFCC80" strokeWidth="2" fill="none"/>
    <path d="M12 42 Q18 40, 24 42" stroke="#FFCC80" strokeWidth="2" fill="none"/>
    <ellipse cx="18" cy="8" rx="8" ry="5" fill="#66BB6A"/>
    <path d="M14 6 Q12 0, 10 4" stroke="#4CAF50" strokeWidth="2" fill="none"/>
    <path d="M18 5 Q18 -2, 18 2" stroke="#4CAF50" strokeWidth="2" fill="none"/>
    <path d="M22 6 Q24 0, 26 4" stroke="#4CAF50" strokeWidth="2" fill="none"/>
  </svg>
);

// ========== MOUTHS - 3D Cartoon Style (NO WHITE BG) ==========
const MouthSmileSVG = () => (
  <svg viewBox="0 0 64 36" className="w-full h-full">
    <defs>
      <linearGradient id="lipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#EF5350"/>
        <stop offset="100%" stopColor="#C62828"/>
      </linearGradient>
    </defs>
    <path d="M4 12 Q32 44, 60 12" fill="url(#lipGrad)" stroke="#B71C1C" strokeWidth="2"/>
    <rect x="12" y="10" width="40" height="10" rx="3" fill="white"/>
    <path d="M32 20 Q32 30, 32 26" fill="#E91E63"/>
  </svg>
);

const MouthSadSVG = () => (
  <svg viewBox="0 0 56 32" className="w-full h-full">
    <defs>
      <linearGradient id="sadLipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#EF5350"/>
        <stop offset="100%" stopColor="#C62828"/>
      </linearGradient>
    </defs>
    <path d="M6 8 Q28 32, 50 8" fill="none" stroke="url(#sadLipGrad)" strokeWidth="8" strokeLinecap="round"/>
    <path d="M8 6 Q28 28, 48 6" fill="none" stroke="#FFCDD2" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const MouthTongueSVG = () => (
  <svg viewBox="0 0 64 48" className="w-full h-full">
    <defs>
      <linearGradient id="tongueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F48FB1"/>
        <stop offset="100%" stopColor="#E91E63"/>
      </linearGradient>
    </defs>
    <ellipse cx="32" cy="18" rx="28" ry="16" fill="#D32F2F" stroke="#B71C1C" strokeWidth="2"/>
    <ellipse cx="32" cy="32" rx="16" ry="14" fill="url(#tongueGrad)"/>
    <ellipse cx="32" cy="28" rx="10" ry="6" fill="#F8BBD9" opacity="0.5"/>
    <rect x="10" y="10" width="44" height="8" rx="3" fill="white"/>
  </svg>
);

const MouthKissSVG = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <radialGradient id="kissGrad" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#F48FB1"/>
        <stop offset="100%" stopColor="#E91E63"/>
      </radialGradient>
    </defs>
    <ellipse cx="24" cy="24" rx="20" ry="18" fill="url(#kissGrad)" stroke="#C2185B" strokeWidth="2"/>
    <ellipse cx="24" cy="20" rx="8" ry="10" fill="#D81B60"/>
    <ellipse cx="18" cy="16" rx="5" ry="4" fill="#F8BBD9" opacity="0.5"/>
  </svg>
);

const MouthSurprisedSVG = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <radialGradient id="surprisedGrad" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#EF5350"/>
        <stop offset="100%" stopColor="#C62828"/>
      </radialGradient>
    </defs>
    <ellipse cx="24" cy="24" rx="18" ry="22" fill="url(#surprisedGrad)" stroke="#B71C1C" strokeWidth="2"/>
    <ellipse cx="24" cy="24" rx="10" ry="14" fill="#1A1A1A"/>
    <ellipse cx="24" cy="34" rx="6" ry="4" fill="#E91E63"/>
  </svg>
);

const MouthAngrySVG = () => (
  <svg viewBox="0 0 56 28" className="w-full h-full">
    <defs>
      <linearGradient id="angryLipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#EF5350"/>
        <stop offset="100%" stopColor="#C62828"/>
      </linearGradient>
    </defs>
    <path d="M6 18 L28 8 L50 18" fill="none" stroke="url(#angryLipGrad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="12" y="10" width="32" height="6" rx="2" fill="white"/>
  </svg>
);

// ========== EARS - 3D Cartoon Style ==========
const EarNormalSVG = () => (
  <svg viewBox="0 0 36 48" className="w-full h-full">
    <defs>
      <radialGradient id="earGrad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFECD2"/>
        <stop offset="100%" stopColor="#D4A574"/>
      </radialGradient>
    </defs>
    <ellipse cx="18" cy="24" rx="14" ry="20" fill="url(#earGrad)" stroke="#A67B52" strokeWidth="2"/>
    <ellipse cx="18" cy="24" rx="8" ry="12" fill="#E8C4A0" stroke="#C4956A" strokeWidth="1"/>
    <ellipse cx="14" cy="18" rx="4" ry="6" fill="white" opacity="0.3"/>
  </svg>
);

const EarElfSVG = () => (
  <svg viewBox="0 0 36 64" className="w-full h-full">
    <defs>
      <linearGradient id="elfEarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFECD2"/>
        <stop offset="100%" stopColor="#D4A574"/>
      </linearGradient>
    </defs>
    <path d="M18 4 C30 8, 34 24, 32 40 C30 52, 20 60, 18 60 C16 60, 6 52, 4 40 C2 24, 6 8, 18 4" 
          fill="url(#elfEarGrad)" stroke="#A67B52" strokeWidth="2"/>
    <path d="M18 12 C24 14, 26 24, 24 36 C22 44, 18 50, 18 50 C18 50, 14 44, 12 36 C10 24, 12 14, 18 12" 
          fill="#E8C4A0" stroke="#C4956A" strokeWidth="1"/>
    <ellipse cx="14" cy="20" rx="4" ry="8" fill="white" opacity="0.3"/>
  </svg>
);

const EarBunnySVG = () => (
  <svg viewBox="0 0 32 80" className="w-full h-full">
    <defs>
      <linearGradient id="bunnyEarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F5F5F5"/>
        <stop offset="100%" stopColor="#E0E0E0"/>
      </linearGradient>
    </defs>
    <ellipse cx="16" cy="40" rx="14" ry="38" fill="url(#bunnyEarGrad)" stroke="#BDBDBD" strokeWidth="2"/>
    <ellipse cx="16" cy="42" rx="8" ry="30" fill="#F8BBD9"/>
    <ellipse cx="12" cy="24" rx="3" ry="12" fill="white" opacity="0.6"/>
  </svg>
);

// ========== ARMS - 3D Cartoon Style ==========
const ArmWaveSVG = () => (
  <svg viewBox="0 0 48 56" className="w-full h-full">
    <defs>
      <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFECD2"/>
        <stop offset="100%" stopColor="#D4A574"/>
      </linearGradient>
    </defs>
    {/* Arm */}
    <ellipse cx="24" cy="40" rx="10" ry="18" fill="url(#armGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Hand */}
    <circle cx="24" cy="18" r="14" fill="url(#armGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Fingers waving */}
    <ellipse cx="12" cy="10" rx="4" ry="8" fill="url(#armGrad)" stroke="#A67B52" strokeWidth="1.5"/>
    <ellipse cx="20" cy="6" rx="4" ry="9" fill="url(#armGrad)" stroke="#A67B52" strokeWidth="1.5"/>
    <ellipse cx="28" cy="6" rx="4" ry="9" fill="url(#armGrad)" stroke="#A67B52" strokeWidth="1.5"/>
    <ellipse cx="36" cy="10" rx="4" ry="8" fill="url(#armGrad)" stroke="#A67B52" strokeWidth="1.5"/>
  </svg>
);

const ArmMuscleSVG = () => (
  <svg viewBox="0 0 56 56" className="w-full h-full">
    <defs>
      <linearGradient id="muscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFECD2"/>
        <stop offset="100%" stopColor="#D4A574"/>
      </linearGradient>
    </defs>
    {/* Upper arm */}
    <ellipse cx="20" cy="40" rx="12" ry="14" fill="url(#muscleGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Bicep bulge */}
    <ellipse cx="32" cy="24" rx="16" ry="12" fill="url(#muscleGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Forearm */}
    <ellipse cx="44" cy="40" rx="10" ry="14" fill="url(#muscleGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Fist */}
    <circle cx="44" cy="50" r="8" fill="url(#muscleGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Muscle highlight */}
    <ellipse cx="28" cy="20" rx="6" ry="4" fill="white" opacity="0.4"/>
  </svg>
);

const ArmOpenSVG = () => (
  <svg viewBox="0 0 48 56" className="w-full h-full">
    <defs>
      <linearGradient id="handGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFECD2"/>
        <stop offset="100%" stopColor="#D4A574"/>
      </linearGradient>
    </defs>
    {/* Arm */}
    <ellipse cx="24" cy="44" rx="8" ry="14" fill="url(#handGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Palm */}
    <circle cx="24" cy="24" r="12" fill="url(#handGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Fingers */}
    <ellipse cx="10" cy="14" rx="4" ry="10" fill="url(#handGrad)" stroke="#A67B52" strokeWidth="1.5"/>
    <ellipse cx="18" cy="8" rx="4" ry="12" fill="url(#handGrad)" stroke="#A67B52" strokeWidth="1.5"/>
    <ellipse cx="26" cy="6" rx="4" ry="13" fill="url(#handGrad)" stroke="#A67B52" strokeWidth="1.5"/>
    <ellipse cx="34" cy="8" rx="4" ry="12" fill="url(#handGrad)" stroke="#A67B52" strokeWidth="1.5"/>
    <ellipse cx="40" cy="18" rx="4" ry="8" fill="url(#handGrad)" stroke="#A67B52" strokeWidth="1.5"/>
  </svg>
);

const ArmThumbsUpSVG = () => (
  <svg viewBox="0 0 48 56" className="w-full h-full">
    <defs>
      <linearGradient id="thumbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFECD2"/>
        <stop offset="100%" stopColor="#D4A574"/>
      </linearGradient>
    </defs>
    {/* Arm */}
    <ellipse cx="24" cy="44" rx="8" ry="14" fill="url(#thumbGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Fist */}
    <ellipse cx="24" cy="28" rx="12" ry="10" fill="url(#thumbGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Thumb up */}
    <ellipse cx="14" cy="12" rx="6" ry="14" fill="url(#thumbGrad)" stroke="#A67B52" strokeWidth="2"/>
    <ellipse cx="12" cy="8" rx="3" ry="4" fill="white" opacity="0.3"/>
  </svg>
);

const ArmPeaceSVG = () => (
  <svg viewBox="0 0 48 60" className="w-full h-full">
    <defs>
      <linearGradient id="peaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFECD2"/>
        <stop offset="100%" stopColor="#D4A574"/>
      </linearGradient>
    </defs>
    {/* Arm */}
    <ellipse cx="24" cy="48" rx="8" ry="14" fill="url(#peaceGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Palm/fist */}
    <ellipse cx="24" cy="32" rx="10" ry="8" fill="url(#peaceGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Peace fingers */}
    <ellipse cx="18" cy="12" rx="5" ry="16" fill="url(#peaceGrad)" stroke="#A67B52" strokeWidth="2"/>
    <ellipse cx="30" cy="12" rx="5" ry="16" fill="url(#peaceGrad)" stroke="#A67B52" strokeWidth="2"/>
    {/* Curled fingers */}
    <ellipse cx="12" cy="30" rx="4" ry="6" fill="url(#peaceGrad)" stroke="#A67B52" strokeWidth="1.5"/>
    <ellipse cx="36" cy="30" rx="4" ry="6" fill="url(#peaceGrad)" stroke="#A67B52" strokeWidth="1.5"/>
  </svg>
);

// ========== HATS - 3D Cartoon Style ==========
const HatMagicSVG = () => (
  <svg viewBox="0 0 64 72" className="w-full h-full">
    <defs>
      <linearGradient id="hatBlack" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#424242"/>
        <stop offset="100%" stopColor="#1A1A1A"/>
      </linearGradient>
    </defs>
    {/* Brim */}
    <ellipse cx="32" cy="64" rx="30" ry="8" fill="url(#hatBlack)" stroke="#000" strokeWidth="2"/>
    {/* Top */}
    <path d="M12 64 L16 20 Q32 16, 48 20 L52 64" fill="url(#hatBlack)" stroke="#000" strokeWidth="2"/>
    {/* Band */}
    <rect x="14" y="54" width="36" height="6" fill="#E91E63"/>
    {/* Star */}
    <polygon points="32,28 34,34 40,34 35,38 37,44 32,40 27,44 29,38 24,34 30,34" fill="#FFD700"/>
    {/* Shine */}
    <ellipse cx="22" cy="36" rx="4" ry="8" fill="white" opacity="0.2"/>
  </svg>
);

const HatPartySVG = () => (
  <svg viewBox="0 0 56 72" className="w-full h-full">
    <defs>
      <linearGradient id="partyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E91E63"/>
        <stop offset="33%" stopColor="#9C27B0"/>
        <stop offset="66%" stopColor="#3F51B5"/>
        <stop offset="100%" stopColor="#00BCD4"/>
      </linearGradient>
    </defs>
    {/* Cone */}
    <path d="M28 6 L48 64 L8 64 Z" fill="url(#partyGrad)" stroke="#5D4037" strokeWidth="2"/>
    {/* Pom pom */}
    <circle cx="28" cy="6" r="8" fill="#FFD54F"/>
    <circle cx="26" cy="4" r="3" fill="#FFEE58"/>
    {/* Stripes */}
    <path d="M18 40 L38 40" stroke="white" strokeWidth="3" opacity="0.5"/>
    <path d="M14 52 L42 52" stroke="white" strokeWidth="3" opacity="0.5"/>
    {/* Elastic */}
    <ellipse cx="28" cy="66" rx="22" ry="4" fill="#5D4037"/>
  </svg>
);

const HatCrownSVG = () => (
  <svg viewBox="0 0 72 56" className="w-full h-full">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFD54F"/>
        <stop offset="100%" stopColor="#FF8F00"/>
      </linearGradient>
    </defs>
    {/* Crown base */}
    <path d="M8 50 L8 24 L20 36 L36 18 L52 36 L64 24 L64 50 Z" fill="url(#goldGrad)" stroke="#E65100" strokeWidth="2"/>
    {/* Bottom band */}
    <rect x="8" y="44" width="56" height="8" fill="#EF6C00"/>
    {/* Jewels */}
    <circle cx="20" cy="48" r="4" fill="#E91E63"/>
    <circle cx="36" cy="48" r="4" fill="#2196F3"/>
    <circle cx="52" cy="48" r="4" fill="#4CAF50"/>
    {/* Top jewels */}
    <circle cx="8" cy="24" r="4" fill="#E91E63"/>
    <circle cx="36" cy="18" r="5" fill="#9C27B0"/>
    <circle cx="64" cy="24" r="4" fill="#E91E63"/>
    {/* Shine */}
    <ellipse cx="24" cy="34" rx="6" ry="4" fill="white" opacity="0.3"/>
  </svg>
);

const HatBaseballSVG = () => (
  <svg viewBox="0 0 72 52" className="w-full h-full">
    <defs>
      <linearGradient id="capGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#42A5F5"/>
        <stop offset="100%" stopColor="#1565C0"/>
      </linearGradient>
    </defs>
    {/* Cap dome */}
    <ellipse cx="36" cy="32" rx="32" ry="18" fill="url(#capGrad)" stroke="#0D47A1" strokeWidth="2"/>
    {/* Visor */}
    <path d="M4 36 Q36 52, 68 36 L64 42 Q36 56, 8 42 Z" fill="#1565C0" stroke="#0D47A1" strokeWidth="2"/>
    {/* Button on top */}
    <circle cx="36" cy="16" r="4" fill="#0D47A1"/>
    {/* Panel lines */}
    <path d="M36 16 L20 32" stroke="#1976D2" strokeWidth="1.5"/>
    <path d="M36 16 L52 32" stroke="#1976D2" strokeWidth="1.5"/>
    {/* Logo placeholder */}
    <circle cx="36" cy="26" r="6" fill="white"/>
    <text x="36" y="29" textAnchor="middle" fontSize="8" fill="#1565C0" fontWeight="bold">B</text>
  </svg>
);

const HatCowboySVG = () => (
  <svg viewBox="0 0 80 56" className="w-full h-full">
    <defs>
      <linearGradient id="cowboyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#A1887F"/>
        <stop offset="100%" stopColor="#6D4C41"/>
      </linearGradient>
    </defs>
    {/* Brim */}
    <ellipse cx="40" cy="48" rx="38" ry="8" fill="url(#cowboyGrad)" stroke="#4E342E" strokeWidth="2"/>
    {/* Crown */}
    <path d="M20 48 Q18 24, 26 18 Q40 12, 54 18 Q62 24, 60 48" fill="url(#cowboyGrad)" stroke="#4E342E" strokeWidth="2"/>
    {/* Indent */}
    <path d="M28 20 Q40 28, 52 20" fill="#5D4037"/>
    {/* Band */}
    <rect x="22" y="38" width="36" height="4" fill="#4E342E"/>
    {/* Star */}
    <polygon points="40,39 41,41 43,41 41.5,42 42,44 40,43 38,44 38.5,42 37,41 39,41" fill="#FFD54F"/>
    {/* Shine */}
    <ellipse cx="30" cy="28" rx="6" ry="4" fill="white" opacity="0.2"/>
  </svg>
);

const HatFlowersSVG = () => (
  <svg viewBox="0 0 64 56" className="w-full h-full">
    {/* Flower 1 */}
    <circle cx="20" cy="20" r="8" fill="#F48FB1"/>
    <circle cx="12" cy="20" r="6" fill="#F48FB1"/>
    <circle cx="28" cy="20" r="6" fill="#F48FB1"/>
    <circle cx="20" cy="12" r="6" fill="#F48FB1"/>
    <circle cx="20" cy="28" r="6" fill="#F48FB1"/>
    <circle cx="20" cy="20" r="5" fill="#FFEB3B"/>
    {/* Flower 2 */}
    <circle cx="44" cy="24" r="7" fill="#CE93D8"/>
    <circle cx="37" cy="24" r="5" fill="#CE93D8"/>
    <circle cx="51" cy="24" r="5" fill="#CE93D8"/>
    <circle cx="44" cy="17" r="5" fill="#CE93D8"/>
    <circle cx="44" cy="31" r="5" fill="#CE93D8"/>
    <circle cx="44" cy="24" r="4" fill="#FFF59D"/>
    {/* Leaves */}
    <ellipse cx="32" cy="44" rx="20" ry="8" fill="#81C784"/>
    <ellipse cx="20" cy="36" rx="4" ry="8" fill="#66BB6A" transform="rotate(-20 20 36)"/>
    <ellipse cx="44" cy="38" rx="4" ry="8" fill="#66BB6A" transform="rotate(20 44 38)"/>
  </svg>
);

// ========== EXTRAS - 3D Cartoon Style ==========
const MustacheSVG = () => (
  <svg viewBox="0 0 72 32" className="w-full h-full">
    <defs>
      <linearGradient id="stacheGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5D4037"/>
        <stop offset="100%" stopColor="#3E2723"/>
      </linearGradient>
    </defs>
    {/* Left side */}
    <path d="M36 16 Q28 8, 12 12 Q4 14, 2 22 Q8 20, 16 18 Q24 16, 36 18" fill="url(#stacheGrad)"/>
    {/* Right side */}
    <path d="M36 16 Q44 8, 60 12 Q68 14, 70 22 Q64 20, 56 18 Q48 16, 36 18" fill="url(#stacheGrad)"/>
    {/* Curls */}
    <circle cx="4" cy="20" r="4" fill="url(#stacheGrad)"/>
    <circle cx="68" cy="20" r="4" fill="url(#stacheGrad)"/>
    {/* Shine */}
    <ellipse cx="20" cy="14" rx="6" ry="2" fill="#8D6E63" opacity="0.4"/>
    <ellipse cx="52" cy="14" rx="6" ry="2" fill="#8D6E63" opacity="0.4"/>
  </svg>
);

const GlassesSunSVG = () => (
  <svg viewBox="0 0 80 36" className="w-full h-full">
    <defs>
      <linearGradient id="lensGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#424242"/>
        <stop offset="100%" stopColor="#1A1A1A"/>
      </linearGradient>
    </defs>
    {/* Frame */}
    <rect x="6" y="8" width="28" height="22" rx="4" fill="url(#lensGrad)" stroke="#000" strokeWidth="2"/>
    <rect x="46" y="8" width="28" height="22" rx="4" fill="url(#lensGrad)" stroke="#000" strokeWidth="2"/>
    {/* Bridge */}
    <path d="M34 16 Q40 12, 46 16" stroke="#000" strokeWidth="3" fill="none"/>
    {/* Arms hint */}
    <rect x="2" y="14" width="6" height="4" fill="#000"/>
    <rect x="72" y="14" width="6" height="4" fill="#000"/>
    {/* Lens shine */}
    <ellipse cx="14" cy="14" rx="6" ry="4" fill="white" opacity="0.2"/>
    <ellipse cx="54" cy="14" rx="6" ry="4" fill="white" opacity="0.2"/>
  </svg>
);

const GlassesNerdSVG = () => (
  <svg viewBox="0 0 80 40" className="w-full h-full">
    {/* Frames */}
    <circle cx="20" cy="20" r="16" fill="none" stroke="#000" strokeWidth="4"/>
    <circle cx="60" cy="20" r="16" fill="none" stroke="#000" strokeWidth="4"/>
    {/* Lenses */}
    <circle cx="20" cy="20" r="13" fill="white" fillOpacity="0.3"/>
    <circle cx="60" cy="20" r="13" fill="white" fillOpacity="0.3"/>
    {/* Bridge */}
    <path d="M36 20 L44 20" stroke="#000" strokeWidth="4"/>
    {/* Arms */}
    <rect x="2" y="18" width="4" height="4" fill="#000"/>
    <rect x="74" y="18" width="4" height="4" fill="#000"/>
    {/* Lens shine */}
    <ellipse cx="14" cy="14" rx="4" ry="3" fill="white" opacity="0.5"/>
    <ellipse cx="54" cy="14" rx="4" ry="3" fill="white" opacity="0.5"/>
  </svg>
);

const FlowerSVG = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <ellipse cx="24" cy="10" rx="8" ry="10" fill="#F48FB1"/>
    <ellipse cx="10" cy="20" rx="10" ry="8" fill="#F48FB1"/>
    <ellipse cx="38" cy="20" rx="10" ry="8" fill="#F48FB1"/>
    <ellipse cx="14" cy="34" rx="8" ry="10" fill="#F48FB1" transform="rotate(-30 14 34)"/>
    <ellipse cx="34" cy="34" rx="8" ry="10" fill="#F48FB1" transform="rotate(30 34 34)"/>
    <circle cx="24" cy="24" r="9" fill="#FFEB3B"/>
  </svg>
);

const ButterflySVG = () => (
  <svg viewBox="0 0 56 40" className="w-full h-full">
    <ellipse cx="14" cy="14" rx="12" ry="12" fill="#7C4DFF"/>
    <ellipse cx="42" cy="14" rx="12" ry="12" fill="#7C4DFF"/>
    <ellipse cx="12" cy="28" rx="10" ry="8" fill="#B388FF"/>
    <ellipse cx="44" cy="28" rx="10" ry="8" fill="#B388FF"/>
    <circle cx="10" cy="12" r="4" fill="#E040FB"/>
    <circle cx="46" cy="12" r="4" fill="#E040FB"/>
    <ellipse cx="28" cy="20" rx="4" ry="16" fill="#5D4037"/>
  </svg>
);

const StarSVG = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <polygon points="24,4 28,16 42,16 31,24 35,38 24,30 13,38 17,24 6,16 20,16" fill="#FFD700" stroke="#FF8F00" strokeWidth="2"/>
  </svg>
);

// Map piece IDs to SVG components - ALL transparent backgrounds
const PIECE_COMPONENTS: Record<string, React.FC> = {
  // Eyes - 3D Cartoon SVG
  occhi_grandi: EyesBigSVG,
  occhi_arrabbiati: EyesAngrySVG,
  occhi_sorpresi: EyesSurprisedSVG,
  occhi_innamorati: EyesInLoveSVG,
  occhi_addormentati: EyesSleepySVG,
  occhi_stelle: EyesStarsSVG,
  
  // Noses - 3D Cartoon SVG
  naso_rosso: NoseRedSVG,
  naso_pagliaccio: NoseClownSVG,
  naso_maiale: NosePigSVG,
  naso_carota: NoseCarrotSVG,
  
  // Mouths - 3D Cartoon SVG
  bocca_sorriso: MouthSmileSVG,
  bocca_triste: MouthSadSVG,
  bocca_lingua: MouthTongueSVG,
  bocca_bacio: MouthKissSVG,
  bocca_sorpresa: MouthSurprisedSVG,
  bocca_arrabbiata: MouthAngrySVG,
  
  // Ears - 3D Cartoon SVG
  orecchie_normali: EarNormalSVG,
  orecchie_elfo: EarElfSVG,
  orecchie_coniglio: EarBunnySVG,
  
  // Hats - 3D Cartoon SVG
  cappello_mago: HatMagicSVG,
  cappello_festa: HatPartySVG,
  cappello_corona: HatCrownSVG,
  cappello_baseball: HatBaseballSVG,
  cappello_cowboy: HatCowboySVG,
  cappello_fiocco: HatFlowersSVG,
  
  // Arms - 3D Cartoon SVG
  braccio_saluto: ArmWaveSVG,
  braccio_forza: ArmMuscleSVG,
  braccio_mano: ArmOpenSVG,
  braccio_pollice: ArmThumbsUpSVG,
  braccio_vittoria: ArmPeaceSVG,
  
  // Extra - 3D Cartoon SVG
  baffi_classici: MustacheSVG,
  occhiali_sole: GlassesSunSVG,
  occhiali_nerd: GlassesNerdSVG,
  extra_fiore: FlowerSVG,
  extra_farfalla: ButterflySVG,
  extra_stella: StarSVG,
};

const PieceIcon: React.FC<PieceIconProps> = ({ pieceId, className = "", size = "md" }) => {
  const Component = PIECE_COMPONENTS[pieceId];
  
  if (!Component) {
    return <div className={`${SIZE_MAP[size]} ${className} bg-muted rounded-lg`} />;
  }

  return (
    <div className={`${SIZE_MAP[size]} ${className} flex items-center justify-center`}>
      <Component />
    </div>
  );
};

export default PieceIcon;
