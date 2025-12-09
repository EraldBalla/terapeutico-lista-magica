// Piece icons for Faccia Buffa game - using generated 3D images
import React from "react";

// Import generated 3D piece images
import eyesBig from "@/assets/pieces/eyes-big.png";
import eyesSmall from "@/assets/pieces/eyes-small.png";
import eyesSweet from "@/assets/pieces/eyes-sweet.png";
import noseRed from "@/assets/pieces/nose-red.png";
import noseSmall from "@/assets/pieces/nose-small.png";
import mouthKiss from "@/assets/pieces/mouth-kiss.png";
import mouthTeeth from "@/assets/pieces/mouth-teeth.png";
import mouthSad from "@/assets/pieces/mouth-sad.png";
import mouthAngry from "@/assets/pieces/mouth-angry.png";
import mouthSmile from "@/assets/pieces/mouth-smile-new.png"; // New child-friendly smile
import mouthTongue from "@/assets/pieces/mouth-tongue.png";
import hatBaseball from "@/assets/pieces/hat-baseball.png";
import glassesNerd from "@/assets/pieces/glasses-nerd.png";
import earBig from "@/assets/pieces/ear-big.png";
import earSmall from "@/assets/pieces/ear-small.png";
import earElf from "@/assets/pieces/ear-elf.png";
import earMouse from "@/assets/pieces/ear-mouse.png";
import hatMagic from "@/assets/pieces/hat-magic.png";
import hatCowboy from "@/assets/pieces/hat-cowboy.png";
import hatCrown from "@/assets/pieces/hat-crown.png";
import hatChef from "@/assets/pieces/hat-chef.png";
import hatParty from "@/assets/pieces/hat-party.png";
import hatFlowers from "@/assets/pieces/hat-flowers.png";
import armWave from "@/assets/pieces/arm-wave.png";
import armMuscle from "@/assets/pieces/arm-muscle.png";
import armOpen from "@/assets/pieces/arm-open.png";
import armThumbsup from "@/assets/pieces/arm-thumbsup.png";
import armPeace from "@/assets/pieces/arm-peace.png";
import armPoint from "@/assets/pieces/arm-point.png";
import glassesRound from "@/assets/pieces/glasses-round.png";
import glassesSun from "@/assets/pieces/glasses-sun.png";
import mustache from "@/assets/pieces/mustache.png";
import bowtie from "@/assets/pieces/bowtie.png";

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

// Image-based piece component
const ImagePiece = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-full h-full object-contain" />
);

// ========== SVG FALLBACKS for pieces that need isolation ==========

// Eyes - Clean isolated SVG versions
const EyesBigSVG = () => (
  <svg viewBox="0 0 64 32" className="w-full h-full">
    <circle cx="16" cy="16" r="14" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="18" cy="16" r="7" fill="#1A1A1A"/>
    <circle cx="16" cy="13" r="3" fill="white"/>
    <circle cx="48" cy="16" r="14" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="50" cy="16" r="7" fill="#1A1A1A"/>
    <circle cx="48" cy="13" r="3" fill="white"/>
  </svg>
);

const EyesAngrySVG = () => (
  <svg viewBox="0 0 64 36" className="w-full h-full">
    <rect x="2" y="2" width="24" height="6" rx="2" fill="#5D4037" transform="rotate(15 14 5)"/>
    <rect x="38" y="2" width="24" height="6" rx="2" fill="#5D4037" transform="rotate(-15 50 5)"/>
    <circle cx="16" cy="22" r="12" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="18" cy="24" r="5" fill="#1A1A1A"/>
    <circle cx="48" cy="22" r="12" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="46" cy="24" r="5" fill="#1A1A1A"/>
  </svg>
);

const EyesSurprisedSVG = () => (
  <svg viewBox="0 0 64 36" className="w-full h-full">
    <circle cx="16" cy="18" r="15" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="16" cy="20" r="6" fill="#1A1A1A"/>
    <circle cx="14" cy="16" r="3" fill="white"/>
    <circle cx="48" cy="18" r="15" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="48" cy="20" r="6" fill="#1A1A1A"/>
    <circle cx="46" cy="16" r="3" fill="white"/>
  </svg>
);

const EyesInLoveSVG = () => (
  <svg viewBox="0 0 64 32" className="w-full h-full">
    <path d="M16 8 C10 2, 2 8, 16 22 C30 8, 22 2, 16 8" fill="#E91E63"/>
    <ellipse cx="10" cy="10" rx="3" ry="2" fill="#F48FB1"/>
    <path d="M48 8 C42 2, 34 8, 48 22 C62 8, 54 2, 48 8" fill="#E91E63"/>
    <ellipse cx="42" cy="10" rx="3" ry="2" fill="#F48FB1"/>
  </svg>
);

const EyesSleepySVG = () => (
  <svg viewBox="0 0 64 28" className="w-full h-full">
    <ellipse cx="16" cy="14" rx="14" ry="10" fill="#FFECD2" stroke="#D4A574" strokeWidth="2"/>
    <path d="M4 14 Q16 20, 28 14" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <ellipse cx="48" cy="14" rx="14" ry="10" fill="#FFECD2" stroke="#D4A574" strokeWidth="2"/>
    <path d="M36 14 Q48 20, 60 14" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);

const EyesStarsSVG = () => (
  <svg viewBox="0 0 64 32" className="w-full h-full">
    <polygon points="16,2 19,10 28,10 21,16 24,26 16,20 8,26 11,16 4,10 13,10" fill="#FFD700" stroke="#F57F17" strokeWidth="1.5"/>
    <circle cx="16" cy="14" r="3" fill="#FFF59D"/>
    <polygon points="48,2 51,10 60,10 53,16 56,26 48,20 40,26 43,16 36,10 45,10" fill="#FFD700" stroke="#F57F17" strokeWidth="1.5"/>
    <circle cx="48" cy="14" r="3" fill="#FFF59D"/>
  </svg>
);

// Noses - Clean isolated SVG versions
const NoseClownSVG = () => (
  <svg viewBox="0 0 44 44" className="w-full h-full">
    <circle cx="22" cy="22" r="20" fill="#F44336"/>
    <ellipse cx="14" cy="14" rx="8" ry="6" fill="#EF5350" opacity="0.6"/>
    <ellipse cx="30" cy="30" rx="5" ry="4" fill="#C62828" opacity="0.4"/>
  </svg>
);

const NosePigSVG = () => (
  <svg viewBox="0 0 48 36" className="w-full h-full">
    <ellipse cx="24" cy="18" rx="22" ry="16" fill="#FFAB91"/>
    <ellipse cx="14" cy="20" rx="5" ry="6" fill="#5D4037"/>
    <ellipse cx="34" cy="20" rx="5" ry="6" fill="#5D4037"/>
    <ellipse cx="24" cy="10" rx="10" ry="4" fill="#FFCCBC" opacity="0.6"/>
  </svg>
);

const NoseCarrotSVG = () => (
  <svg viewBox="0 0 32 52" className="w-full h-full">
    <path d="M16 8 L26 46 Q16 50, 6 46 Z" fill="#FF9800"/>
    <path d="M10 18 Q16 16, 22 18" stroke="#FFB74D" strokeWidth="2" fill="none"/>
    <path d="M8 28 Q16 26, 24 28" stroke="#FFB74D" strokeWidth="2" fill="none"/>
    <path d="M10 38 Q16 36, 22 38" stroke="#FFB74D" strokeWidth="2" fill="none"/>
    <ellipse cx="16" cy="6" rx="6" ry="4" fill="#4CAF50"/>
    <path d="M12 4 Q10 -2, 8 2" stroke="#4CAF50" strokeWidth="2" fill="none"/>
    <path d="M16 4 Q16 -4, 16 0" stroke="#4CAF50" strokeWidth="2" fill="none"/>
    <path d="M20 4 Q22 -2, 24 2" stroke="#4CAF50" strokeWidth="2" fill="none"/>
  </svg>
);

const NoseLongSVG = () => (
  <svg viewBox="0 0 32 56" className="w-full h-full">
    <ellipse cx="16" cy="32" rx="12" ry="22" fill="#FFECD2"/>
    <ellipse cx="16" cy="46" rx="10" ry="8" fill="#E8C4A0"/>
    <ellipse cx="12" cy="24" rx="4" ry="6" fill="#FFF5E6" opacity="0.6"/>
  </svg>
);

const NosePotatoSVG = () => (
  <svg viewBox="0 0 40 36" className="w-full h-full">
    <ellipse cx="20" cy="18" rx="18" ry="16" fill="#FFECD2"/>
    <ellipse cx="20" cy="24" rx="12" ry="10" fill="#E8C4A0"/>
    <ellipse cx="14" cy="14" rx="6" ry="4" fill="#FFF5E6" opacity="0.6"/>
  </svg>
);

// Mouths - Clean isolated SVG versions
const MouthSmileSVG = () => (
  <svg viewBox="0 0 56 32" className="w-full h-full">
    <path d="M4 8 Q28 36, 52 8" fill="#D32F2F" stroke="#B71C1C" strokeWidth="2"/>
    <path d="M10 12 L46 12" fill="white"/>
    <rect x="10" y="8" width="36" height="8" rx="2" fill="white"/>
    <path d="M28 16 Q28 28, 28 24" fill="#E91E63"/>
  </svg>
);

const MouthSadSVG = () => (
  <svg viewBox="0 0 48 28" className="w-full h-full">
    <path d="M6 8 Q24 28, 42 8" fill="none" stroke="#D32F2F" strokeWidth="6" strokeLinecap="round"/>
    <path d="M6 6 Q24 26, 42 6" fill="none" stroke="#EF5350" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const MouthTongueSVG = () => (
  <svg viewBox="0 0 56 40" className="w-full h-full">
    <ellipse cx="28" cy="16" rx="24" ry="14" fill="#D32F2F"/>
    <ellipse cx="28" cy="28" rx="14" ry="12" fill="#E91E63"/>
    <ellipse cx="28" cy="24" rx="10" ry="6" fill="#F48FB1" opacity="0.5"/>
    <rect x="10" y="8" width="36" height="6" rx="2" fill="white"/>
  </svg>
);

const MouthSurprisedSVG = () => (
  <svg viewBox="0 0 40 40" className="w-full h-full">
    <ellipse cx="20" cy="20" rx="16" ry="18" fill="#D32F2F"/>
    <ellipse cx="20" cy="20" rx="10" ry="12" fill="#1A1A1A"/>
    <ellipse cx="20" cy="28" rx="6" ry="4" fill="#E91E63"/>
  </svg>
);

const MouthAngrySVG = () => (
  <svg viewBox="0 0 48 24" className="w-full h-full">
    <path d="M4 16 L24 8 L44 16" fill="none" stroke="#D32F2F" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="8" y="10" width="32" height="6" rx="2" fill="white"/>
  </svg>
);

// Ears SVG fallbacks
const EarBunnySVG = () => (
  <svg viewBox="0 0 28 72" className="w-full h-full">
    <ellipse cx="14" cy="36" rx="12" ry="34" fill="white" stroke="#E0E0E0" strokeWidth="2"/>
    <ellipse cx="14" cy="38" rx="7" ry="26" fill="#F8BBD9"/>
    <ellipse cx="10" cy="20" rx="3" ry="10" fill="white" opacity="0.8"/>
  </svg>
);

// Other extras
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

// Map piece IDs to components - prioritize 3D images where available
const PIECE_COMPONENTS: Record<string, React.FC> = {
  // Eyes - Mix of 3D images and SVG
  occhi_grandi: () => <ImagePiece src={eyesBig} alt="Occhi grandi" />,
  occhi_arrabbiati: EyesAngrySVG,
  occhi_sorpresi: EyesSurprisedSVG,
  occhi_innamorati: EyesInLoveSVG,
  occhi_addormentati: EyesSleepySVG,
  occhi_stelle: EyesStarsSVG,
  
  // Noses - Mix of 3D images and SVG
  naso_rosso: () => <ImagePiece src={noseRed} alt="Naso rosso" />,
  naso_pagliaccio: NoseClownSVG,
  naso_maiale: NosePigSVG,
  naso_carota: NoseCarrotSVG,
  
  // Mouths - 3D images
  bocca_sorriso: () => <ImagePiece src={mouthSmile} alt="Bocca sorridente" />,
  bocca_triste: () => <ImagePiece src={mouthSad} alt="Bocca triste" />,
  bocca_lingua: () => <ImagePiece src={mouthTongue} alt="Bocca con lingua" />,
  bocca_bacio: () => <ImagePiece src={mouthKiss} alt="Bocca bacio" />,
  bocca_sorpresa: MouthSurprisedSVG,
  bocca_arrabbiata: () => <ImagePiece src={mouthAngry} alt="Bocca arrabbiata" />,
  
  // Ears - 3D images
  orecchie_normali: () => <ImagePiece src={earBig} alt="Orecchie normali" />,
  orecchie_elfo: () => <ImagePiece src={earElf} alt="Orecchie da elfo" />,
  orecchie_coniglio: EarBunnySVG,
  
  // Hats - 3D images
  cappello_mago: () => <ImagePiece src={hatMagic} alt="Cappello da mago" />,
  cappello_festa: () => <ImagePiece src={hatParty} alt="Cappello da festa" />,
  cappello_corona: () => <ImagePiece src={hatCrown} alt="Corona" />,
  cappello_baseball: () => <ImagePiece src={hatBaseball} alt="Cappello baseball" />,
  cappello_cowboy: () => <ImagePiece src={hatCowboy} alt="Cappello cowboy" />,
  cappello_fiocco: () => <ImagePiece src={hatFlowers} alt="Fiocco" />,
  
  // Arms - 3D images
  braccio_saluto: () => <ImagePiece src={armWave} alt="Braccio che saluta" />,
  braccio_forza: () => <ImagePiece src={armMuscle} alt="Braccio forte" />,
  braccio_mano: () => <ImagePiece src={armOpen} alt="Mano aperta" />,
  braccio_pollice: () => <ImagePiece src={armThumbsup} alt="Pollice in su" />,
  braccio_vittoria: () => <ImagePiece src={armPeace} alt="Segno di vittoria" />,
  
  // Extra - Mix of 3D images and SVG
  baffi_classici: () => <ImagePiece src={mustache} alt="Baffi classici" />,
  occhiali_sole: () => <ImagePiece src={glassesSun} alt="Occhiali da sole" />,
  occhiali_nerd: () => <ImagePiece src={glassesNerd} alt="Occhiali da nerd" />,
  extra_fiore: FlowerSVG,
  extra_farfalla: ButterflySVG,
  extra_stella: StarSVG,
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
