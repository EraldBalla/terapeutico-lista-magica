/**
 * Shared cartoon-style SVG icons for all therapeutic games.
 * High-quality, realistic cartoon style with consistent 2-3px lines.
 * Proper shading, highlights, and recognizable shapes.
 */
import React from "react";

interface IconProps {
  className?: string;
}

// ========== ANIMALS ==========
export const CowIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="28" cy="34" rx="20" ry="16" fill="#FAFAFA" stroke="#9E9E9E" strokeWidth="2"/>
    {/* Spots */}
    <ellipse cx="18" cy="30" rx="6" ry="5" fill="#5D4037" opacity="0.8"/>
    <ellipse cx="36" cy="36" rx="5" ry="4" fill="#5D4037" opacity="0.8"/>
    <ellipse cx="28" cy="42" rx="4" ry="3" fill="#5D4037" opacity="0.6"/>
    
    {/* Head */}
    <ellipse cx="28" cy="20" rx="14" ry="12" fill="#FAFAFA" stroke="#9E9E9E" strokeWidth="2"/>
    
    {/* Ears */}
    <ellipse cx="12" cy="14" rx="6" ry="4" fill="#FAFAFA" stroke="#9E9E9E" strokeWidth="2" transform="rotate(-20 12 14)"/>
    <ellipse cx="44" cy="14" rx="6" ry="4" fill="#FAFAFA" stroke="#9E9E9E" strokeWidth="2" transform="rotate(20 44 14)"/>
    <ellipse cx="12" cy="14" rx="3" ry="2" fill="#FFAB91" transform="rotate(-20 12 14)"/>
    <ellipse cx="44" cy="14" rx="3" ry="2" fill="#FFAB91" transform="rotate(20 44 14)"/>
    
    {/* Horns */}
    <path d="M16 8 Q14 2, 10 4" stroke="#BCAAA4" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M40 8 Q42 2, 46 4" stroke="#BCAAA4" strokeWidth="3" fill="none" strokeLinecap="round"/>
    
    {/* Eyes */}
    <ellipse cx="22" cy="18" rx="4" ry="5" fill="white" stroke="#5D4037" strokeWidth="1.5"/>
    <ellipse cx="34" cy="18" rx="4" ry="5" fill="white" stroke="#5D4037" strokeWidth="1.5"/>
    <circle cx="23" cy="19" r="2.5" fill="#3E2723"/>
    <circle cx="35" cy="19" r="2.5" fill="#3E2723"/>
    <circle cx="22" cy="17" r="1" fill="white"/>
    <circle cx="34" cy="17" r="1" fill="white"/>
    
    {/* Muzzle */}
    <ellipse cx="28" cy="28" rx="10" ry="7" fill="#FFCC80" stroke="#E65100" strokeWidth="1.5"/>
    <ellipse cx="24" cy="27" rx="2.5" ry="3" fill="#5D4037"/>
    <ellipse cx="32" cy="27" rx="2.5" ry="3" fill="#5D4037"/>
    
    {/* Highlight */}
    <ellipse cx="22" cy="14" rx="4" ry="2" fill="white" opacity="0.4"/>
  </svg>
);

export const DogIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="28" cy="38" rx="18" ry="14" fill="#A1887F" stroke="#6D4C41" strokeWidth="2"/>
    
    {/* Head */}
    <ellipse cx="28" cy="22" rx="16" ry="14" fill="#A1887F" stroke="#6D4C41" strokeWidth="2"/>
    
    {/* Ears - floppy */}
    <path d="M10 18 Q4 8, 8 20 Q6 30, 14 26" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    <path d="M46 18 Q52 8, 48 20 Q50 30, 42 26" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    
    {/* Forehead patch */}
    <ellipse cx="28" cy="16" rx="8" ry="6" fill="#8D6E63"/>
    
    {/* Eyes */}
    <ellipse cx="22" cy="20" rx="5" ry="6" fill="white" stroke="#5D4037" strokeWidth="1.5"/>
    <ellipse cx="34" cy="20" rx="5" ry="6" fill="white" stroke="#5D4037" strokeWidth="1.5"/>
    <circle cx="23" cy="21" r="3" fill="#3E2723"/>
    <circle cx="35" cy="21" r="3" fill="#3E2723"/>
    <circle cx="22" cy="19" r="1.5" fill="white"/>
    <circle cx="34" cy="19" r="1.5" fill="white"/>
    
    {/* Muzzle */}
    <ellipse cx="28" cy="30" rx="9" ry="7" fill="#FFCC80" stroke="#E65100" strokeWidth="1.5"/>
    {/* Nose */}
    <ellipse cx="28" cy="27" rx="4" ry="3" fill="#3E2723"/>
    <ellipse cx="27" cy="26" rx="1.5" ry="1" fill="#5D4037" opacity="0.5"/>
    
    {/* Mouth */}
    <path d="M24 32 Q28 36, 32 32" stroke="#5D4037" strokeWidth="2" fill="none" strokeLinecap="round"/>
    
    {/* Tongue */}
    <ellipse cx="28" cy="36" rx="4" ry="5" fill="#E91E63"/>
    <path d="M28 34 L28 40" stroke="#C2185B" strokeWidth="1"/>
    
    {/* Tail hint */}
    <path d="M46 42 Q54 38, 52 46" stroke="#8D6E63" strokeWidth="4" fill="none" strokeLinecap="round"/>
  </svg>
);

export const CatIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="28" cy="40" rx="16" ry="12" fill="#FFB74D" stroke="#F57C00" strokeWidth="2"/>
    
    {/* Head */}
    <ellipse cx="28" cy="24" rx="16" ry="14" fill="#FFB74D" stroke="#F57C00" strokeWidth="2"/>
    
    {/* Ears - pointed */}
    <path d="M12 20 L6 4 L18 14 Z" fill="#FFB74D" stroke="#F57C00" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M44 20 L50 4 L38 14 Z" fill="#FFB74D" stroke="#F57C00" strokeWidth="2" strokeLinejoin="round"/>
    {/* Inner ear */}
    <path d="M12 18 L9 8 L16 15 Z" fill="#FFAB91"/>
    <path d="M44 18 L47 8 L40 15 Z" fill="#FFAB91"/>
    
    {/* Eyes */}
    <ellipse cx="20" cy="22" rx="5" ry="7" fill="white" stroke="#5D4037" strokeWidth="1.5"/>
    <ellipse cx="36" cy="22" rx="5" ry="7" fill="white" stroke="#5D4037" strokeWidth="1.5"/>
    {/* Cat pupils - vertical slits */}
    <ellipse cx="21" cy="23" rx="2" ry="5" fill="#4CAF50"/>
    <ellipse cx="37" cy="23" rx="2" ry="5" fill="#4CAF50"/>
    <ellipse cx="21" cy="23" rx="1" ry="4" fill="#1B5E20"/>
    <ellipse cx="37" cy="23" rx="1" ry="4" fill="#1B5E20"/>
    <circle cx="20" cy="20" r="1.5" fill="white"/>
    <circle cx="36" cy="20" r="1.5" fill="white"/>
    
    {/* Nose */}
    <path d="M28 30 L26 33 L30 33 Z" fill="#E91E63"/>
    
    {/* Whiskers */}
    <line x1="6" y1="26" x2="18" y2="28" stroke="#5D4037" strokeWidth="1.5"/>
    <line x1="6" y1="30" x2="18" y2="30" stroke="#5D4037" strokeWidth="1.5"/>
    <line x1="6" y1="34" x2="18" y2="32" stroke="#5D4037" strokeWidth="1.5"/>
    <line x1="50" y1="26" x2="38" y2="28" stroke="#5D4037" strokeWidth="1.5"/>
    <line x1="50" y1="30" x2="38" y2="30" stroke="#5D4037" strokeWidth="1.5"/>
    <line x1="50" y1="34" x2="38" y2="32" stroke="#5D4037" strokeWidth="1.5"/>
    
    {/* Mouth */}
    <path d="M24 34 Q28 38, 32 34" stroke="#5D4037" strokeWidth="1.5" fill="none"/>
    
    {/* Stripes */}
    <path d="M22 12 L26 18" stroke="#E65100" strokeWidth="2" opacity="0.5"/>
    <path d="M28 10 L28 16" stroke="#E65100" strokeWidth="2" opacity="0.5"/>
    <path d="M34 12 L30 18" stroke="#E65100" strokeWidth="2" opacity="0.5"/>
  </svg>
);

export const ElephantIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 64 56" className={className}>
    {/* Body */}
    <ellipse cx="36" cy="38" rx="22" ry="16" fill="#90A4AE" stroke="#607D8B" strokeWidth="2"/>
    
    {/* Legs */}
    <rect x="20" y="44" width="8" height="12" rx="3" fill="#78909C" stroke="#546E7A" strokeWidth="1.5"/>
    <rect x="44" y="44" width="8" height="12" rx="3" fill="#78909C" stroke="#546E7A" strokeWidth="1.5"/>
    
    {/* Head */}
    <ellipse cx="22" cy="24" rx="18" ry="16" fill="#90A4AE" stroke="#607D8B" strokeWidth="2"/>
    
    {/* Large ears */}
    <ellipse cx="6" cy="22" rx="10" ry="14" fill="#90A4AE" stroke="#607D8B" strokeWidth="2"/>
    <ellipse cx="6" cy="22" rx="6" ry="10" fill="#FFCDD2"/>
    
    {/* Trunk - curved and natural */}
    <path 
      d="M22 32 Q18 38, 14 44 Q10 50, 16 52 Q20 52, 20 48 Q20 44, 24 40 Q28 36, 26 32" 
      fill="#90A4AE" 
      stroke="#607D8B" 
      strokeWidth="2"
    />
    {/* Trunk ridges */}
    <path d="M16 40 Q20 42, 24 40" stroke="#78909C" strokeWidth="1.5" fill="none"/>
    <path d="M14 46 Q18 48, 22 46" stroke="#78909C" strokeWidth="1.5" fill="none"/>
    
    {/* Eye */}
    <ellipse cx="28" cy="20" rx="4" ry="5" fill="white" stroke="#455A64" strokeWidth="1.5"/>
    <circle cx="29" cy="21" r="2.5" fill="#3E2723"/>
    <circle cx="28" cy="19" r="1" fill="white"/>
    
    {/* Tusk */}
    <path d="M26 34 Q30 42, 28 48" stroke="#ECEFF1" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <path d="M26 34 Q30 42, 28 48" stroke="#CFD8DC" strokeWidth="2" fill="none" strokeLinecap="round"/>
    
    {/* Tail */}
    <path d="M56 42 Q62 44, 60 50" stroke="#78909C" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <ellipse cx="60" cy="52" rx="3" ry="2" fill="#607D8B"/>
    
    {/* Highlight */}
    <ellipse cx="18" cy="16" rx="6" ry="4" fill="#B0BEC5" opacity="0.5"/>
  </svg>
);

export const LionIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Mane - outer ring */}
    <circle cx="28" cy="28" r="24" fill="#FF9800" stroke="#E65100" strokeWidth="2"/>
    {/* Mane texture */}
    <path d="M28 4 Q32 8, 28 12" stroke="#F57C00" strokeWidth="3" fill="none"/>
    <path d="M44 10 Q42 16, 46 18" stroke="#F57C00" strokeWidth="3" fill="none"/>
    <path d="M52 28 Q48 30, 50 34" stroke="#F57C00" strokeWidth="3" fill="none"/>
    <path d="M44 46 Q42 42, 46 40" stroke="#F57C00" strokeWidth="3" fill="none"/>
    <path d="M12 10 Q14 16, 10 18" stroke="#F57C00" strokeWidth="3" fill="none"/>
    <path d="M4 28 Q8 30, 6 34" stroke="#F57C00" strokeWidth="3" fill="none"/>
    <path d="M12 46 Q14 42, 10 40" stroke="#F57C00" strokeWidth="3" fill="none"/>
    
    {/* Face */}
    <ellipse cx="28" cy="30" rx="16" ry="14" fill="#FFB74D" stroke="#E65100" strokeWidth="2"/>
    
    {/* Ears */}
    <circle cx="14" cy="18" r="5" fill="#FFB74D" stroke="#E65100" strokeWidth="1.5"/>
    <circle cx="42" cy="18" r="5" fill="#FFB74D" stroke="#E65100" strokeWidth="1.5"/>
    <circle cx="14" cy="18" r="2.5" fill="#FFAB91"/>
    <circle cx="42" cy="18" r="2.5" fill="#FFAB91"/>
    
    {/* Eyes */}
    <ellipse cx="22" cy="26" rx="4" ry="5" fill="white" stroke="#5D4037" strokeWidth="1.5"/>
    <ellipse cx="34" cy="26" rx="4" ry="5" fill="white" stroke="#5D4037" strokeWidth="1.5"/>
    <circle cx="23" cy="27" r="2.5" fill="#5D4037"/>
    <circle cx="35" cy="27" r="2.5" fill="#5D4037"/>
    <circle cx="22" cy="25" r="1" fill="white"/>
    <circle cx="34" cy="25" r="1" fill="white"/>
    
    {/* Muzzle */}
    <ellipse cx="28" cy="36" rx="8" ry="6" fill="#FFCC80"/>
    <ellipse cx="28" cy="34" rx="4" ry="2.5" fill="#5D4037"/>
    
    {/* Mouth */}
    <path d="M24 38 Q28 42, 32 38" stroke="#5D4037" strokeWidth="2" fill="none"/>
    
    {/* Whisker dots */}
    <circle cx="20" cy="34" r="1" fill="#5D4037"/>
    <circle cx="18" cy="36" r="1" fill="#5D4037"/>
    <circle cx="36" cy="34" r="1" fill="#5D4037"/>
    <circle cx="38" cy="36" r="1" fill="#5D4037"/>
  </svg>
);

export const PigIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="28" cy="36" rx="20" ry="14" fill="#FFAB91" stroke="#E64A19" strokeWidth="2"/>
    
    {/* Head */}
    <ellipse cx="28" cy="22" rx="16" ry="14" fill="#FFAB91" stroke="#E64A19" strokeWidth="2"/>
    
    {/* Ears */}
    <path d="M12 16 Q8 6, 14 12 L16 18" fill="#FFAB91" stroke="#E64A19" strokeWidth="2"/>
    <path d="M44 16 Q48 6, 42 12 L40 18" fill="#FFAB91" stroke="#E64A19" strokeWidth="2"/>
    <path d="M13 14 Q10 8, 15 13" fill="#FF8A65"/>
    <path d="M43 14 Q46 8, 41 13" fill="#FF8A65"/>
    
    {/* Eyes */}
    <ellipse cx="22" cy="18" rx="4" ry="5" fill="white" stroke="#5D4037" strokeWidth="1.5"/>
    <ellipse cx="34" cy="18" rx="4" ry="5" fill="white" stroke="#5D4037" strokeWidth="1.5"/>
    <circle cx="23" cy="19" r="2.5" fill="#3E2723"/>
    <circle cx="35" cy="19" r="2.5" fill="#3E2723"/>
    <circle cx="22" cy="17" r="1" fill="white"/>
    <circle cx="34" cy="17" r="1" fill="white"/>
    
    {/* Snout */}
    <ellipse cx="28" cy="30" rx="10" ry="7" fill="#FF8A65" stroke="#BF360C" strokeWidth="2"/>
    <ellipse cx="24" cy="30" rx="3" ry="4" fill="#5D4037"/>
    <ellipse cx="32" cy="30" rx="3" ry="4" fill="#5D4037"/>
    
    {/* Cheeks */}
    <ellipse cx="16" cy="24" rx="4" ry="3" fill="#FF8A65" opacity="0.5"/>
    <ellipse cx="40" cy="24" rx="4" ry="3" fill="#FF8A65" opacity="0.5"/>
    
    {/* Tail - curly */}
    <path d="M48 38 Q52 36, 52 40 Q52 44, 48 42 Q44 40, 46 36" stroke="#E64A19" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);

export const SheepIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Wool body - fluffy circles */}
    <circle cx="16" cy="34" r="10" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1"/>
    <circle cx="40" cy="34" r="10" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1"/>
    <circle cx="28" cy="28" r="12" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1"/>
    <circle cx="20" cy="40" r="9" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1"/>
    <circle cx="36" cy="40" r="9" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1"/>
    <circle cx="28" cy="44" r="10" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1"/>
    
    {/* Legs */}
    <rect x="18" y="48" width="4" height="8" rx="2" fill="#5D4037"/>
    <rect x="34" y="48" width="4" height="8" rx="2" fill="#5D4037"/>
    
    {/* Head */}
    <ellipse cx="28" cy="18" rx="10" ry="9" fill="#3E2723" stroke="#5D4037" strokeWidth="2"/>
    
    {/* Wool on head */}
    <circle cx="22" cy="10" r="5" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1"/>
    <circle cx="34" cy="10" r="5" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1"/>
    <circle cx="28" cy="8" r="5" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1"/>
    
    {/* Ears */}
    <ellipse cx="16" cy="16" rx="5" ry="3" fill="#3E2723" stroke="#5D4037" strokeWidth="1" transform="rotate(-20 16 16)"/>
    <ellipse cx="40" cy="16" rx="5" ry="3" fill="#3E2723" stroke="#5D4037" strokeWidth="1" transform="rotate(20 40 16)"/>
    
    {/* Eyes */}
    <ellipse cx="24" cy="16" rx="3" ry="4" fill="white" stroke="#5D4037" strokeWidth="1"/>
    <ellipse cx="32" cy="16" rx="3" ry="4" fill="white" stroke="#5D4037" strokeWidth="1"/>
    <circle cx="25" cy="17" r="2" fill="#1A1A1A"/>
    <circle cx="33" cy="17" r="2" fill="#1A1A1A"/>
    <circle cx="24" cy="15" r="0.8" fill="white"/>
    <circle cx="32" cy="15" r="0.8" fill="white"/>
    
    {/* Nose */}
    <ellipse cx="28" cy="22" rx="3" ry="2" fill="#1A1A1A"/>
  </svg>
);

export const FrogIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="28" cy="38" rx="20" ry="14" fill="#66BB6A" stroke="#2E7D32" strokeWidth="2"/>
    
    {/* Belly */}
    <ellipse cx="28" cy="42" rx="14" ry="8" fill="#A5D6A7"/>
    
    {/* Head */}
    <ellipse cx="28" cy="24" rx="18" ry="12" fill="#66BB6A" stroke="#2E7D32" strokeWidth="2"/>
    
    {/* Big protruding eyes */}
    <circle cx="16" cy="14" r="10" fill="#66BB6A" stroke="#2E7D32" strokeWidth="2"/>
    <circle cx="40" cy="14" r="10" fill="#66BB6A" stroke="#2E7D32" strokeWidth="2"/>
    <circle cx="16" cy="12" r="7" fill="white" stroke="#2E7D32" strokeWidth="1"/>
    <circle cx="40" cy="12" r="7" fill="white" stroke="#2E7D32" strokeWidth="1"/>
    <circle cx="17" cy="13" r="4" fill="#1A1A1A"/>
    <circle cx="41" cy="13" r="4" fill="#1A1A1A"/>
    <circle cx="15" cy="10" r="2" fill="white"/>
    <circle cx="39" cy="10" r="2" fill="white"/>
    
    {/* Cheeks */}
    <ellipse cx="18" cy="28" rx="4" ry="3" fill="#E91E63" opacity="0.4"/>
    <ellipse cx="38" cy="28" rx="4" ry="3" fill="#E91E63" opacity="0.4"/>
    
    {/* Mouth - wide smile */}
    <path d="M14 32 Q28 42, 42 32" stroke="#2E7D32" strokeWidth="3" fill="none" strokeLinecap="round"/>
    
    {/* Nostrils */}
    <circle cx="24" cy="26" r="2" fill="#2E7D32"/>
    <circle cx="32" cy="26" r="2" fill="#2E7D32"/>
    
    {/* Front legs */}
    <path d="M10 44 Q4 48, 8 52 L14 50" fill="#66BB6A" stroke="#2E7D32" strokeWidth="2"/>
    <path d="M46 44 Q52 48, 48 52 L42 50" fill="#66BB6A" stroke="#2E7D32" strokeWidth="2"/>
  </svg>
);

export const BirdIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="30" cy="34" rx="16" ry="12" fill="#64B5F6" stroke="#1976D2" strokeWidth="2"/>
    
    {/* Wing */}
    <ellipse cx="34" cy="32" rx="10" ry="8" fill="#42A5F5" stroke="#1565C0" strokeWidth="1.5"/>
    <path d="M28 28 Q34 32, 42 30" stroke="#1976D2" strokeWidth="1.5" fill="none"/>
    <path d="M30 32 Q36 36, 44 34" stroke="#1976D2" strokeWidth="1.5" fill="none"/>
    
    {/* Head */}
    <circle cx="18" cy="22" r="12" fill="#64B5F6" stroke="#1976D2" strokeWidth="2"/>
    
    {/* Crest */}
    <path d="M16 10 Q20 4, 24 10 Q20 8, 16 10" fill="#1976D2"/>
    
    {/* Eye */}
    <ellipse cx="20" cy="20" rx="4" ry="5" fill="white" stroke="#5D4037" strokeWidth="1"/>
    <circle cx="21" cy="21" r="2.5" fill="#1A1A1A"/>
    <circle cx="20" cy="19" r="1" fill="white"/>
    
    {/* Beak */}
    <path d="M6 24 L14 22 L14 26 Z" fill="#FF9800" stroke="#F57C00" strokeWidth="1"/>
    
    {/* Tail feathers */}
    <path d="M46 32 Q54 28, 52 36" fill="#42A5F5" stroke="#1565C0" strokeWidth="1.5"/>
    <path d="M46 36 Q54 36, 50 42" fill="#42A5F5" stroke="#1565C0" strokeWidth="1.5"/>
    
    {/* Legs */}
    <path d="M26 46 L24 52 M22 52 L28 52" stroke="#FF9800" strokeWidth="2" strokeLinecap="round"/>
    <path d="M34 46 L36 52 M32 52 L40 52" stroke="#FF9800" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Cheek */}
    <ellipse cx="14" cy="26" rx="3" ry="2" fill="#E91E63" opacity="0.4"/>
  </svg>
);

export const BeeIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Wings */}
    <ellipse cx="38" cy="16" rx="10" ry="7" fill="white" opacity="0.8" stroke="#BDBDBD" strokeWidth="1"/>
    <ellipse cx="46" cy="22" rx="8" ry="5" fill="white" opacity="0.8" stroke="#BDBDBD" strokeWidth="1"/>
    
    {/* Body - striped */}
    <ellipse cx="32" cy="32" rx="16" ry="12" fill="#FFD54F" stroke="#F57C00" strokeWidth="2"/>
    <rect x="22" y="24" width="5" height="16" fill="#3E2723" rx="1"/>
    <rect x="31" y="24" width="5" height="16" fill="#3E2723" rx="1"/>
    <rect x="40" y="26" width="4" height="12" fill="#3E2723" rx="1"/>
    
    {/* Head */}
    <circle cx="18" cy="28" r="10" fill="#FFD54F" stroke="#F57C00" strokeWidth="2"/>
    
    {/* Eyes */}
    <ellipse cx="16" cy="26" rx="4" ry="5" fill="white" stroke="#5D4037" strokeWidth="1"/>
    <circle cx="17" cy="27" r="2.5" fill="#1A1A1A"/>
    <circle cx="15" cy="24" r="1" fill="white"/>
    
    {/* Antennae */}
    <path d="M14 18 Q12 12, 10 14" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M22 18 Q24 12, 26 14" stroke="#3E2723" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <circle cx="10" cy="14" r="2" fill="#3E2723"/>
    <circle cx="26" cy="14" r="2" fill="#3E2723"/>
    
    {/* Stinger */}
    <path d="M48 32 L54 34" stroke="#3E2723" strokeWidth="3" strokeLinecap="round"/>
    
    {/* Smile */}
    <path d="M14 32 Q18 36, 22 32" stroke="#5D4037" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const OwlIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="28" cy="38" rx="18" ry="16" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    
    {/* Belly pattern */}
    <ellipse cx="28" cy="44" rx="12" ry="10" fill="#D7CCC8"/>
    <path d="M20 38 Q28 42, 36 38" stroke="#A1887F" strokeWidth="1"/>
    <path d="M18 44 Q28 48, 38 44" stroke="#A1887F" strokeWidth="1"/>
    <path d="M20 50 Q28 54, 36 50" stroke="#A1887F" strokeWidth="1"/>
    
    {/* Head */}
    <ellipse cx="28" cy="20" rx="16" ry="14" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    
    {/* Ear tufts */}
    <path d="M12 12 Q8 4, 14 10 L16 14" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    <path d="M44 12 Q48 4, 42 10 L40 14" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    
    {/* Face disk */}
    <ellipse cx="28" cy="22" rx="12" ry="10" fill="#D7CCC8"/>
    
    {/* Big owl eyes */}
    <circle cx="22" cy="20" r="7" fill="white" stroke="#5D4037" strokeWidth="2"/>
    <circle cx="34" cy="20" r="7" fill="white" stroke="#5D4037" strokeWidth="2"/>
    <circle cx="22" cy="20" r="4" fill="#FF9800"/>
    <circle cx="34" cy="20" r="4" fill="#FF9800"/>
    <circle cx="22" cy="20" r="2" fill="#1A1A1A"/>
    <circle cx="34" cy="20" r="2" fill="#1A1A1A"/>
    <circle cx="21" cy="18" r="1.5" fill="white"/>
    <circle cx="33" cy="18" r="1.5" fill="white"/>
    
    {/* Beak */}
    <path d="M28 26 L24 32 L28 30 L32 32 Z" fill="#FF9800" stroke="#E65100" strokeWidth="1"/>
    
    {/* Feet */}
    <path d="M22 54 L18 56 M22 54 L22 56 M22 54 L26 56" stroke="#FF9800" strokeWidth="2" strokeLinecap="round"/>
    <path d="M34 54 L30 56 M34 54 L34 56 M34 54 L38 56" stroke="#FF9800" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const WolfIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="28" cy="40" rx="18" ry="12" fill="#78909C" stroke="#455A64" strokeWidth="2"/>
    
    {/* Head */}
    <ellipse cx="28" cy="24" rx="16" ry="14" fill="#78909C" stroke="#455A64" strokeWidth="2"/>
    
    {/* Ears - pointed */}
    <path d="M12 18 L4 4 L18 14 Z" fill="#78909C" stroke="#455A64" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M44 18 L52 4 L38 14 Z" fill="#78909C" stroke="#455A64" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 16 L8 8 L16 14 Z" fill="#90A4AE"/>
    <path d="M44 16 L48 8 L40 14 Z" fill="#90A4AE"/>
    
    {/* Muzzle */}
    <ellipse cx="28" cy="30" rx="10" ry="7" fill="#B0BEC5"/>
    
    {/* Eyes - intense */}
    <ellipse cx="22" cy="22" rx="4" ry="5" fill="white" stroke="#455A64" strokeWidth="1.5"/>
    <ellipse cx="34" cy="22" rx="4" ry="5" fill="white" stroke="#455A64" strokeWidth="1.5"/>
    <ellipse cx="23" cy="23" rx="2.5" ry="3" fill="#FFC107"/>
    <ellipse cx="35" cy="23" rx="2.5" ry="3" fill="#FFC107"/>
    <ellipse cx="23" cy="23" rx="1.5" ry="2" fill="#1A1A1A"/>
    <ellipse cx="35" cy="23" rx="1.5" ry="2" fill="#1A1A1A"/>
    
    {/* Nose */}
    <ellipse cx="28" cy="28" rx="4" ry="3" fill="#1A1A1A"/>
    
    {/* Mouth */}
    <path d="M24 34 Q28 38, 32 34" stroke="#455A64" strokeWidth="2" fill="none"/>
    
    {/* Chest fur */}
    <ellipse cx="28" cy="38" rx="8" ry="6" fill="#B0BEC5"/>
  </svg>
);

export const MouseIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="28" cy="38" rx="16" ry="12" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="2"/>
    
    {/* Head */}
    <ellipse cx="28" cy="24" rx="14" ry="12" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="2"/>
    
    {/* Big round ears */}
    <circle cx="14" cy="14" r="10" fill="#FFCDD2" stroke="#BDBDBD" strokeWidth="2"/>
    <circle cx="42" cy="14" r="10" fill="#FFCDD2" stroke="#BDBDBD" strokeWidth="2"/>
    <circle cx="14" cy="14" r="6" fill="#F8BBD9"/>
    <circle cx="42" cy="14" r="6" fill="#F8BBD9"/>
    
    {/* Eyes */}
    <circle cx="22" cy="22" r="4" fill="#1A1A1A"/>
    <circle cx="34" cy="22" r="4" fill="#1A1A1A"/>
    <circle cx="21" cy="20" r="1.5" fill="white"/>
    <circle cx="33" cy="20" r="1.5" fill="white"/>
    
    {/* Nose */}
    <ellipse cx="28" cy="30" rx="4" ry="3" fill="#FFCDD2"/>
    <ellipse cx="28" cy="29" rx="2" ry="1.5" fill="#F8BBD9"/>
    
    {/* Whiskers */}
    <line x1="8" y1="28" x2="20" y2="30" stroke="#9E9E9E" strokeWidth="1.5"/>
    <line x1="8" y1="32" x2="20" y2="32" stroke="#9E9E9E" strokeWidth="1.5"/>
    <line x1="8" y1="36" x2="20" y2="34" stroke="#9E9E9E" strokeWidth="1.5"/>
    <line x1="48" y1="28" x2="36" y2="30" stroke="#9E9E9E" strokeWidth="1.5"/>
    <line x1="48" y1="32" x2="36" y2="32" stroke="#9E9E9E" strokeWidth="1.5"/>
    <line x1="48" y1="36" x2="36" y2="34" stroke="#9E9E9E" strokeWidth="1.5"/>
    
    {/* Tail */}
    <path d="M44 42 Q54 44, 52 52 Q50 56, 48 54" stroke="#BDBDBD" strokeWidth="3" fill="none" strokeLinecap="round"/>
  </svg>
);

export const DuckIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="32" cy="38" rx="18" ry="14" fill="#FFEB3B" stroke="#F9A825" strokeWidth="2"/>
    
    {/* Wing */}
    <ellipse cx="36" cy="36" rx="10" ry="8" fill="#FDD835" stroke="#F9A825" strokeWidth="1"/>
    
    {/* Head */}
    <circle cx="18" cy="20" r="14" fill="#FFEB3B" stroke="#F9A825" strokeWidth="2"/>
    
    {/* Eye */}
    <ellipse cx="22" cy="18" rx="4" ry="5" fill="white" stroke="#5D4037" strokeWidth="1"/>
    <circle cx="23" cy="19" r="2.5" fill="#1A1A1A"/>
    <circle cx="22" cy="17" r="1" fill="white"/>
    
    {/* Beak */}
    <ellipse cx="6" cy="24" rx="10" ry="5" fill="#FF9800" stroke="#E65100" strokeWidth="2"/>
    <line x1="4" y1="24" x2="14" y2="24" stroke="#E65100" strokeWidth="1"/>
    
    {/* Tail */}
    <path d="M50 34 Q56 30, 54 38" fill="#FDD835" stroke="#F9A825" strokeWidth="1.5"/>
    
    {/* Feet */}
    <path d="M26 52 L22 56 M26 52 L26 56 M26 52 L30 56" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M38 52 L34 56 M38 52 L38 56 M38 52 L42 56" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round"/>
    
    {/* Cheek */}
    <ellipse cx="12" cy="26" rx="3" ry="2" fill="#FF9800" opacity="0.3"/>
  </svg>
);

export const HorseIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="32" cy="40" rx="18" ry="12" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    
    {/* Legs */}
    <rect x="20" y="46" width="5" height="10" rx="2" fill="#6D4C41" stroke="#4E342E" strokeWidth="1"/>
    <rect x="36" y="46" width="5" height="10" rx="2" fill="#6D4C41" stroke="#4E342E" strokeWidth="1"/>
    
    {/* Neck */}
    <path d="M18 38 Q12 30, 16 18 L22 18 Q20 30, 22 36" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    
    {/* Head */}
    <ellipse cx="14" cy="16" rx="10" ry="8" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    
    {/* Muzzle */}
    <ellipse cx="8" cy="20" rx="6" ry="5" fill="#A1887F"/>
    <ellipse cx="6" cy="19" rx="2" ry="1.5" fill="#5D4037"/>
    <ellipse cx="10" cy="19" rx="2" ry="1.5" fill="#5D4037"/>
    
    {/* Eye */}
    <ellipse cx="16" cy="14" rx="3" ry="4" fill="white" stroke="#5D4037" strokeWidth="1"/>
    <circle cx="17" cy="15" r="2" fill="#1A1A1A"/>
    <circle cx="16" cy="13" r="0.8" fill="white"/>
    
    {/* Ears */}
    <path d="M12 8 Q10 2, 14 6 L14 10" fill="#8D6E63" stroke="#5D4037" strokeWidth="1.5"/>
    <path d="M20 8 Q22 2, 18 6 L18 10" fill="#8D6E63" stroke="#5D4037" strokeWidth="1.5"/>
    
    {/* Mane */}
    <path d="M16 6 Q20 4, 22 8 Q24 12, 22 18 Q24 24, 22 30" stroke="#5D4037" strokeWidth="4" fill="none" strokeLinecap="round"/>
    
    {/* Tail */}
    <path d="M50 38 Q56 36, 54 44 Q52 50, 48 48" stroke="#5D4037" strokeWidth="4" fill="none" strokeLinecap="round"/>
  </svg>
);

export const RoosterIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="30" cy="38" rx="16" ry="12" fill="#FF9800" stroke="#E65100" strokeWidth="2"/>
    
    {/* Wing */}
    <ellipse cx="34" cy="36" rx="10" ry="7" fill="#FFB74D" stroke="#E65100" strokeWidth="1"/>
    
    {/* Tail feathers */}
    <path d="M46 30 Q56 24, 54 36" fill="#1A237E" stroke="#0D47A1" strokeWidth="1.5"/>
    <path d="M46 34 Q58 32, 52 42" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1.5"/>
    <path d="M46 38 Q56 40, 50 48" fill="#E53935" stroke="#C62828" strokeWidth="1.5"/>
    
    {/* Head */}
    <circle cx="18" cy="22" r="12" fill="#FF9800" stroke="#E65100" strokeWidth="2"/>
    
    {/* Comb */}
    <path d="M14 10 Q10 4, 16 8 Q14 2, 20 8 Q18 2, 24 10 Q22 4, 26 12" fill="#E53935" stroke="#C62828" strokeWidth="1"/>
    
    {/* Eye */}
    <ellipse cx="20" cy="20" rx="3" ry="4" fill="white" stroke="#5D4037" strokeWidth="1"/>
    <circle cx="21" cy="21" r="2" fill="#1A1A1A"/>
    <circle cx="20" cy="19" r="0.8" fill="white"/>
    
    {/* Beak */}
    <path d="M6 24 L14 22 L14 26 Z" fill="#FFD54F" stroke="#F57C00" strokeWidth="1"/>
    
    {/* Wattle */}
    <ellipse cx="12" cy="32" rx="4" ry="6" fill="#E53935" stroke="#C62828" strokeWidth="1"/>
    
    {/* Legs */}
    <path d="M24 50 L22 56 M24 50 L26 56 M24 50 L28 56" stroke="#FFD54F" strokeWidth="2" strokeLinecap="round"/>
    <path d="M34 50 L32 56 M34 50 L36 56 M34 50 L38 56" stroke="#FFD54F" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const SnakeIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body - curved snake */}
    <path 
      d="M8 32 Q16 18, 28 28 Q40 38, 48 24 Q52 16, 46 12" 
      stroke="#66BB6A" 
      strokeWidth="10" 
      fill="none" 
      strokeLinecap="round"
    />
    {/* Body pattern */}
    <path 
      d="M8 32 Q16 18, 28 28 Q40 38, 48 24 Q52 16, 46 12" 
      stroke="#81C784" 
      strokeWidth="6" 
      fill="none" 
      strokeLinecap="round"
    />
    
    {/* Head */}
    <ellipse cx="46" cy="12" rx="8" ry="6" fill="#66BB6A" stroke="#2E7D32" strokeWidth="2"/>
    
    {/* Eyes */}
    <circle cx="44" cy="10" r="2.5" fill="white" stroke="#2E7D32" strokeWidth="0.5"/>
    <circle cx="50" cy="10" r="2.5" fill="white" stroke="#2E7D32" strokeWidth="0.5"/>
    <circle cx="44" cy="10" r="1.5" fill="#1A1A1A"/>
    <circle cx="50" cy="10" r="1.5" fill="#1A1A1A"/>
    
    {/* Tongue */}
    <path d="M52 14 L56 16 M52 14 L56 12" stroke="#E53935" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Pattern spots */}
    <ellipse cx="16" cy="28" rx="3" ry="2" fill="#2E7D32" opacity="0.6"/>
    <ellipse cx="28" cy="28" rx="3" ry="2" fill="#2E7D32" opacity="0.6"/>
    <ellipse cx="40" cy="28" rx="3" ry="2" fill="#2E7D32" opacity="0.6"/>
    
    {/* Tail tip */}
    <circle cx="8" cy="32" r="3" fill="#66BB6A"/>
  </svg>
);

export const DonkeyIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="32" cy="40" rx="18" ry="12" fill="#9E9E9E" stroke="#757575" strokeWidth="2"/>
    
    {/* Legs */}
    <rect x="20" y="46" width="5" height="10" rx="2" fill="#757575" stroke="#616161" strokeWidth="1"/>
    <rect x="36" y="46" width="5" height="10" rx="2" fill="#757575" stroke="#616161" strokeWidth="1"/>
    
    {/* Neck */}
    <path d="M18 38 Q12 30, 16 18 L22 18 Q20 30, 22 36" fill="#9E9E9E" stroke="#757575" strokeWidth="2"/>
    
    {/* Head */}
    <ellipse cx="14" cy="18" rx="10" ry="9" fill="#9E9E9E" stroke="#757575" strokeWidth="2"/>
    
    {/* Long ears */}
    <ellipse cx="10" cy="6" rx="4" ry="10" fill="#9E9E9E" stroke="#757575" strokeWidth="2"/>
    <ellipse cx="22" cy="6" rx="4" ry="10" fill="#9E9E9E" stroke="#757575" strokeWidth="2"/>
    <ellipse cx="10" cy="6" rx="2" ry="7" fill="#BDBDBD"/>
    <ellipse cx="22" cy="6" rx="2" ry="7" fill="#BDBDBD"/>
    
    {/* Muzzle */}
    <ellipse cx="8" cy="24" rx="6" ry="5" fill="#BDBDBD"/>
    <ellipse cx="6" cy="23" rx="2" ry="1.5" fill="#616161"/>
    <ellipse cx="10" cy="23" rx="2" ry="1.5" fill="#616161"/>
    
    {/* Eye */}
    <ellipse cx="16" cy="16" rx="3" ry="4" fill="white" stroke="#616161" strokeWidth="1"/>
    <circle cx="17" cy="17" r="2" fill="#1A1A1A"/>
    <circle cx="16" cy="15" r="0.8" fill="white"/>
    
    {/* Mane */}
    <path d="M16 8 L18 12 L20 8 L22 14 L24 10 L26 16" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round"/>
    
    {/* Tail */}
    <path d="M50 38 L54 44" stroke="#757575" strokeWidth="3" strokeLinecap="round"/>
    <ellipse cx="54" cy="46" rx="3" ry="4" fill="#5D4037"/>
  </svg>
);

// ========== VEHICLES ==========
export const TrainIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <rect x="10" y="18" width="36" height="24" rx="4" fill="#E53935" stroke="#C62828" strokeWidth="2"/>
    
    {/* Cabin */}
    <rect x="14" y="22" width="12" height="10" rx="2" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    <rect x="30" y="22" width="12" height="10" rx="2" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    
    {/* Roof */}
    <rect x="8" y="14" width="40" height="6" rx="2" fill="#C62828"/>
    
    {/* Chimney */}
    <rect x="18" y="4" width="10" height="12" rx="2" fill="#424242" stroke="#212121" strokeWidth="1"/>
    {/* Steam */}
    <ellipse cx="23" cy="2" rx="5" ry="3" fill="#BDBDBD" opacity="0.8"/>
    <ellipse cx="28" cy="0" rx="4" ry="2" fill="#BDBDBD" opacity="0.6"/>
    
    {/* Undercarriage */}
    <rect x="8" y="40" width="40" height="6" fill="#424242"/>
    
    {/* Wheels */}
    <circle cx="18" cy="48" r="6" fill="#616161" stroke="#424242" strokeWidth="2"/>
    <circle cx="38" cy="48" r="6" fill="#616161" stroke="#424242" strokeWidth="2"/>
    <circle cx="18" cy="48" r="2" fill="#9E9E9E"/>
    <circle cx="38" cy="48" r="2" fill="#9E9E9E"/>
    
    {/* Cow catcher */}
    <path d="M6 46 L10 42 L10 50 Z" fill="#424242"/>
  </svg>
);

export const CarIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <path 
      d="M8 32 Q8 26, 14 26 L16 18 Q20 12, 36 12 L40 18 L42 26 Q48 26, 48 32 L48 38 L8 38 Z" 
      fill="#2196F3" 
      stroke="#1565C0" 
      strokeWidth="2"
    />
    
    {/* Roof/Windows */}
    <path d="M16 18 L18 26 L38 26 L40 18 Q36 14, 20 14 Z" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    <line x1="28" y1="14" x2="28" y2="26" stroke="#1976D2" strokeWidth="1"/>
    
    {/* Bumper */}
    <rect x="6" y="36" width="44" height="6" rx="2" fill="#1565C0"/>
    
    {/* Wheels */}
    <circle cx="16" cy="44" r="7" fill="#424242" stroke="#212121" strokeWidth="2"/>
    <circle cx="40" cy="44" r="7" fill="#424242" stroke="#212121" strokeWidth="2"/>
    <circle cx="16" cy="44" r="3" fill="#9E9E9E"/>
    <circle cx="40" cy="44" r="3" fill="#9E9E9E"/>
    
    {/* Headlights */}
    <rect x="44" y="28" width="4" height="4" rx="1" fill="#FFEB3B" stroke="#F57C00" strokeWidth="0.5"/>
    <rect x="8" y="28" width="4" height="4" rx="1" fill="#FFEB3B" stroke="#F57C00" strokeWidth="0.5"/>
    
    {/* Door handle */}
    <rect x="26" y="28" width="6" height="2" rx="1" fill="#1565C0"/>
  </svg>
);

export const AmbulanceIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <rect x="6" y="20" width="36" height="22" rx="3" fill="white" stroke="#E53935" strokeWidth="2.5"/>
    
    {/* Cabin */}
    <path d="M42 28 Q50 28, 50 34 L50 42 L42 42 Z" fill="white" stroke="#E53935" strokeWidth="2.5"/>
    <rect x="44" y="30" width="4" height="6" rx="1" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    
    {/* Red cross */}
    <rect x="18" y="26" width="12" height="4" fill="#E53935"/>
    <rect x="22" y="22" width="4" height="12" fill="#E53935"/>
    
    {/* Windows */}
    <rect x="8" y="24" width="8" height="8" rx="1" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    
    {/* Lights on top */}
    <rect x="10" y="14" width="8" height="6" rx="2" fill="#2196F3" stroke="#1565C0" strokeWidth="1"/>
    <rect x="22" y="14" width="8" height="6" rx="2" fill="#E53935" stroke="#C62828" strokeWidth="1"/>
    
    {/* Wheels */}
    <circle cx="16" cy="46" r="6" fill="#424242" stroke="#212121" strokeWidth="2"/>
    <circle cx="44" cy="46" r="6" fill="#424242" stroke="#212121" strokeWidth="2"/>
    <circle cx="16" cy="46" r="2" fill="#9E9E9E"/>
    <circle cx="44" cy="46" r="2" fill="#9E9E9E"/>
  </svg>
);

export const PlaneIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Fuselage */}
    <ellipse cx="28" cy="28" rx="24" ry="8" fill="#90CAF9" stroke="#1976D2" strokeWidth="2"/>
    
    {/* Nose */}
    <ellipse cx="50" cy="28" rx="4" ry="5" fill="#64B5F6" stroke="#1976D2" strokeWidth="1"/>
    
    {/* Tail */}
    <path d="M4 28 L8 16 L12 28" fill="#1976D2"/>
    
    {/* Wings */}
    <path d="M24 28 L24 12 L32 12 L32 28" fill="#1976D2" stroke="#0D47A1" strokeWidth="1"/>
    <path d="M24 28 L24 44 L32 44 L32 28" fill="#1976D2" stroke="#0D47A1" strokeWidth="1"/>
    
    {/* Windows */}
    <circle cx="20" cy="26" r="3" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    <circle cx="30" cy="26" r="3" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    <circle cx="40" cy="26" r="3" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    
    {/* Cockpit */}
    <ellipse cx="48" cy="26" rx="4" ry="3" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
  </svg>
);

export const MotorcycleIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Wheels */}
    <circle cx="12" cy="40" r="10" fill="#424242" stroke="#212121" strokeWidth="2.5"/>
    <circle cx="44" cy="40" r="10" fill="#424242" stroke="#212121" strokeWidth="2.5"/>
    <circle cx="12" cy="40" r="4" fill="#9E9E9E"/>
    <circle cx="44" cy="40" r="4" fill="#9E9E9E"/>
    
    {/* Frame */}
    <path d="M12 36 L24 24 L36 24 L44 36" stroke="#E53935" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Body/Tank */}
    <ellipse cx="28" cy="26" rx="10" ry="6" fill="#E53935" stroke="#C62828" strokeWidth="2"/>
    
    {/* Seat */}
    <ellipse cx="36" cy="24" rx="8" ry="4" fill="#3E2723"/>
    
    {/* Handlebars */}
    <path d="M24 24 L22 16 L18 16" stroke="#424242" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <ellipse cx="16" cy="16" rx="4" ry="2" fill="#424242"/>
    
    {/* Headlight */}
    <circle cx="50" cy="36" r="3" fill="#FFEB3B" stroke="#F57C00" strokeWidth="1"/>
    
    {/* Exhaust */}
    <path d="M12 44 L6 48" stroke="#9E9E9E" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const FireTruckIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <rect x="6" y="22" width="32" height="18" rx="2" fill="#E53935" stroke="#C62828" strokeWidth="2"/>
    
    {/* Cabin */}
    <path d="M38 28 Q46 28, 46 34 L46 40 L38 40 Z" fill="#E53935" stroke="#C62828" strokeWidth="2"/>
    <rect x="40" y="30" width="4" height="5" rx="1" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    
    {/* Windows */}
    <rect x="8" y="24" width="8" height="8" rx="1" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    <rect x="18" y="24" width="8" height="8" rx="1" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    
    {/* Ladder on top */}
    <rect x="10" y="12" width="28" height="8" rx="2" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="1"/>
    <line x1="14" y1="12" x2="14" y2="20" stroke="#757575" strokeWidth="2"/>
    <line x1="22" y1="12" x2="22" y2="20" stroke="#757575" strokeWidth="2"/>
    <line x1="30" y1="12" x2="30" y2="20" stroke="#757575" strokeWidth="2"/>
    
    {/* Wheels */}
    <circle cx="14" cy="46" r="6" fill="#424242" stroke="#212121" strokeWidth="2"/>
    <circle cx="40" cy="46" r="6" fill="#424242" stroke="#212121" strokeWidth="2"/>
    <circle cx="14" cy="46" r="2" fill="#9E9E9E"/>
    <circle cx="40" cy="46" r="2" fill="#9E9E9E"/>
    
    {/* Light */}
    <rect x="18" y="6" width="8" height="5" rx="2" fill="#E53935" stroke="#C62828" strokeWidth="1"/>
  </svg>
);

export const HelicopterIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <ellipse cx="24" cy="32" rx="16" ry="12" fill="#42A5F5" stroke="#1976D2" strokeWidth="2"/>
    
    {/* Cockpit */}
    <ellipse cx="18" cy="30" rx="8" ry="8" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1.5"/>
    
    {/* Tail */}
    <path d="M40 30 L52 24 L52 28 L40 32" fill="#1976D2"/>
    <ellipse cx="52" cy="26" rx="3" ry="5" fill="#1976D2" stroke="#0D47A1" strokeWidth="1"/>
    
    {/* Main rotor mast */}
    <rect x="22" y="16" width="4" height="8" fill="#616161"/>
    
    {/* Main rotor blades */}
    <rect x="4" y="14" width="40" height="4" rx="2" fill="#9E9E9E" stroke="#757575" strokeWidth="1"/>
    
    {/* Landing skids */}
    <rect x="12" y="42" width="24" height="3" rx="1" fill="#424242"/>
    <rect x="14" y="40" width="4" height="4" fill="#424242"/>
    <rect x="30" y="40" width="4" height="4" fill="#424242"/>
  </svg>
);

export const ShipIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Hull */}
    <path d="M6 38 L10 50 L46 50 L50 38 Q28 34, 6 38" fill="#1976D2" stroke="#0D47A1" strokeWidth="2"/>
    
    {/* Deck */}
    <rect x="14" y="26" width="28" height="14" fill="#ECEFF1" stroke="#90A4AE" strokeWidth="1"/>
    
    {/* Cabin */}
    <rect x="20" y="18" width="16" height="10" rx="2" fill="#ECEFF1" stroke="#90A4AE" strokeWidth="1"/>
    <rect x="22" y="20" width="5" height="4" fill="#BBDEFB" stroke="#1976D2" strokeWidth="0.5"/>
    <rect x="29" y="20" width="5" height="4" fill="#BBDEFB" stroke="#1976D2" strokeWidth="0.5"/>
    
    {/* Smokestack */}
    <rect x="26" y="8" width="6" height="12" fill="#424242" stroke="#212121" strokeWidth="1"/>
    {/* Smoke */}
    <ellipse cx="29" cy="6" rx="4" ry="2" fill="#9E9E9E" opacity="0.7"/>
    <ellipse cx="32" cy="4" rx="3" ry="1.5" fill="#9E9E9E" opacity="0.5"/>
    
    {/* Flag */}
    <rect x="36" y="6" width="2" height="14" fill="#8D6E63"/>
    <polygon points="38,6 50,10 38,14" fill="#E53935"/>
    
    {/* Porthole */}
    <circle cx="18" cy="32" r="3" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    <circle cx="28" cy="32" r="3" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    <circle cx="38" cy="32" r="3" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    
    {/* Water waves */}
    <path d="M2 52 Q8 48, 14 52 Q20 56, 26 52 Q32 48, 38 52 Q44 56, 50 52 Q56 48, 56 52" stroke="#2196F3" strokeWidth="2" fill="none"/>
  </svg>
);

export const BicycleIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Wheels */}
    <circle cx="12" cy="38" r="10" fill="none" stroke="#424242" strokeWidth="3"/>
    <circle cx="44" cy="38" r="10" fill="none" stroke="#424242" strokeWidth="3"/>
    <circle cx="12" cy="38" r="3" fill="#616161"/>
    <circle cx="44" cy="38" r="3" fill="#616161"/>
    
    {/* Spokes hint */}
    <line x1="12" y1="28" x2="12" y2="48" stroke="#9E9E9E" strokeWidth="1"/>
    <line x1="2" y1="38" x2="22" y2="38" stroke="#9E9E9E" strokeWidth="1"/>
    <line x1="44" y1="28" x2="44" y2="48" stroke="#9E9E9E" strokeWidth="1"/>
    <line x1="34" y1="38" x2="54" y2="38" stroke="#9E9E9E" strokeWidth="1"/>
    
    {/* Frame */}
    <path d="M12 38 L24 22 L36 22 L44 38" stroke="#E53935" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 22 L28 38 L36 22" stroke="#E53935" strokeWidth="3" fill="none" strokeLinejoin="round"/>
    
    {/* Pedal area */}
    <circle cx="28" cy="38" r="4" fill="#424242"/>
    
    {/* Seat */}
    <path d="M36 22 L38 16" stroke="#424242" strokeWidth="2"/>
    <ellipse cx="38" cy="14" rx="6" ry="3" fill="#3E2723"/>
    
    {/* Handlebars */}
    <path d="M24 22 L22 14" stroke="#424242" strokeWidth="2"/>
    <path d="M18 12 L26 12" stroke="#424242" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const TractorIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Body */}
    <rect x="14" y="20" width="28" height="18" rx="3" fill="#4CAF50" stroke="#2E7D32" strokeWidth="2"/>
    
    {/* Cabin */}
    <rect x="10" y="14" width="16" height="18" rx="2" fill="#388E3C" stroke="#2E7D32" strokeWidth="2"/>
    <rect x="12" y="16" width="10" height="10" rx="1" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    
    {/* Chimney */}
    <rect x="38" y="8" width="5" height="14" fill="#616161" stroke="#424242" strokeWidth="1"/>
    <ellipse cx="40" cy="6" rx="4" ry="2" fill="#424242"/>
    
    {/* Small front wheel */}
    <circle cx="14" cy="44" r="8" fill="#424242" stroke="#212121" strokeWidth="2"/>
    <circle cx="14" cy="44" r="3" fill="#FFC107"/>
    
    {/* Large back wheel */}
    <circle cx="40" cy="42" r="12" fill="#424242" stroke="#212121" strokeWidth="2.5"/>
    <circle cx="40" cy="42" r="5" fill="#FFC107"/>
    
    {/* Wheel treads */}
    <circle cx="40" cy="42" r="10" fill="none" stroke="#616161" strokeWidth="2" strokeDasharray="4,2"/>
  </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Rocket body */}
    <path d="M28 4 Q38 14, 38 32 L18 32 Q18 14, 28 4" fill="#ECEFF1" stroke="#90A4AE" strokeWidth="2"/>
    
    {/* Nose cone */}
    <ellipse cx="28" cy="10" rx="5" ry="6" fill="#E53935"/>
    
    {/* Window */}
    <circle cx="28" cy="20" r="5" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1.5"/>
    <ellipse cx="26" cy="18" rx="2" ry="1.5" fill="white" opacity="0.6"/>
    
    {/* Fins */}
    <path d="M18 32 L12 42 L18 40" fill="#1976D2" stroke="#0D47A1" strokeWidth="1"/>
    <path d="M38 32 L44 42 L38 40" fill="#1976D2" stroke="#0D47A1" strokeWidth="1"/>
    
    {/* Engine */}
    <rect x="22" y="32" width="12" height="6" fill="#616161"/>
    
    {/* Flames */}
    <path d="M22 38 L20 50 L28 44 L36 50 L34 38" fill="#FF9800"/>
    <path d="M24 40 L24 48 L28 44 L32 48 L32 40" fill="#FFEB3B"/>
    
    {/* Rivets/details */}
    <circle cx="22" cy="28" r="1" fill="#90A4AE"/>
    <circle cx="34" cy="28" r="1" fill="#90A4AE"/>
  </svg>
);

export const HornIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Horn body */}
    <path 
      d="M14 24 Q10 28, 14 32 L42 40 Q52 42, 52 28 Q52 14, 42 16 L14 24" 
      fill="#FFD54F" 
      stroke="#F57C00" 
      strokeWidth="2"
    />
    
    {/* Bell */}
    <ellipse cx="12" cy="28" rx="6" ry="8" fill="#F57C00"/>
    
    {/* Sound waves */}
    <path d="M48 18 Q54 14, 56 20" stroke="#FFB300" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M50 24 Q56 22, 58 28" stroke="#FFB300" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M48 38 Q54 42, 56 36" stroke="#FFB300" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    
    {/* Highlight */}
    <ellipse cx="30" cy="26" rx="8" ry="3" fill="#FFECB3" opacity="0.5"/>
  </svg>
);

// ========== OBJECTS ==========
export const BellIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Hanger */}
    <path d="M28 6 L28 12" stroke="#FFD54F" strokeWidth="4"/>
    <circle cx="28" cy="6" r="4" fill="#FFD54F" stroke="#F57C00" strokeWidth="1"/>
    
    {/* Bell body */}
    <path 
      d="M14 42 Q14 24, 28 16 Q42 24, 42 42 L14 42" 
      fill="#FFD54F" 
      stroke="#F57C00" 
      strokeWidth="2"
    />
    
    {/* Bell rim */}
    <ellipse cx="28" cy="42" rx="16" ry="4" fill="#F57C00"/>
    
    {/* Clapper */}
    <circle cx="28" cy="48" r="5" fill="#FFD54F" stroke="#F57C00" strokeWidth="2"/>
    
    {/* Highlight */}
    <ellipse cx="22" cy="28" rx="4" ry="6" fill="#FFECB3" opacity="0.6"/>
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Clock body */}
    <circle cx="28" cy="28" r="24" fill="#FFEB3B" stroke="#F57C00" strokeWidth="2.5"/>
    <circle cx="28" cy="28" r="20" fill="#FFF8E1"/>
    
    {/* Hour markers */}
    <circle cx="28" cy="10" r="2.5" fill="#F57C00"/>
    <circle cx="28" cy="46" r="2.5" fill="#F57C00"/>
    <circle cx="10" cy="28" r="2.5" fill="#F57C00"/>
    <circle cx="46" cy="28" r="2.5" fill="#F57C00"/>
    
    {/* Clock hands */}
    <line x1="28" y1="28" x2="28" y2="14" stroke="#5D4037" strokeWidth="4" strokeLinecap="round"/>
    <line x1="28" y1="28" x2="38" y2="28" stroke="#5D4037" strokeWidth="3" strokeLinecap="round"/>
    
    {/* Center */}
    <circle cx="28" cy="28" r="3" fill="#5D4037"/>
    
    {/* Alarm bells on top */}
    <circle cx="16" cy="6" r="4" fill="#E53935" stroke="#C62828" strokeWidth="1"/>
    <circle cx="40" cy="6" r="4" fill="#E53935" stroke="#C62828" strokeWidth="1"/>
    <rect x="26" y="2" width="4" height="4" fill="#5D4037"/>
    
    {/* Feet */}
    <ellipse cx="18" cy="52" rx="4" ry="2" fill="#5D4037"/>
    <ellipse cx="38" cy="52" rx="4" ry="2" fill="#5D4037"/>
  </svg>
);

export const WaterDropIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    <path 
      d="M28 6 Q42 22, 42 34 Q42 48, 28 48 Q14 48, 14 34 Q14 22, 28 6" 
      fill="#42A5F5" 
      stroke="#1976D2" 
      strokeWidth="2"
    />
    {/* Highlight */}
    <ellipse cx="22" cy="26" rx="5" ry="8" fill="#90CAF9" opacity="0.7"/>
    <circle cx="20" cy="22" r="3" fill="white" opacity="0.8"/>
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Phone body */}
    <rect x="14" y="4" width="28" height="48" rx="5" fill="#424242" stroke="#212121" strokeWidth="2"/>
    
    {/* Screen */}
    <rect x="16" y="10" width="24" height="32" rx="2" fill="#90CAF9"/>
    <rect x="18" y="12" width="20" height="8" fill="white" opacity="0.3" rx="1"/>
    
    {/* Home button */}
    <circle cx="28" cy="48" r="3" fill="#616161"/>
    
    {/* Speaker */}
    <rect x="24" y="6" width="8" height="2" rx="1" fill="#616161"/>
    
    {/* App icons */}
    <rect x="20" y="24" width="6" height="6" rx="1" fill="#E53935"/>
    <rect x="30" y="24" width="6" height="6" rx="1" fill="#4CAF50"/>
    <rect x="20" y="34" width="6" height="6" rx="1" fill="#2196F3"/>
    <rect x="30" y="34" width="6" height="6" rx="1" fill="#FF9800"/>
  </svg>
);

export const DrumIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Drum body */}
    <ellipse cx="28" cy="42" rx="22" ry="8" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    <rect x="6" y="18" width="44" height="24" fill="#D7CCC8" stroke="#8D6E63" strokeWidth="2"/>
    <ellipse cx="28" cy="18" rx="22" ry="8" fill="#EFEBE9" stroke="#8D6E63" strokeWidth="2"/>
    
    {/* Decorative stripes */}
    <path d="M8 22 L48 22" stroke="#E53935" strokeWidth="3"/>
    <path d="M6 34 L50 34" stroke="#1976D2" strokeWidth="3"/>
    
    {/* Drumsticks */}
    <line x1="4" y1="6" x2="20" y2="22" stroke="#8D6E63" strokeWidth="4" strokeLinecap="round"/>
    <line x1="52" y1="6" x2="36" y2="22" stroke="#8D6E63" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="4" cy="4" r="4" fill="#FFEB3B" stroke="#F57C00" strokeWidth="1"/>
    <circle cx="52" cy="4" r="4" fill="#FFEB3B" stroke="#F57C00" strokeWidth="1"/>
  </svg>
);

export const WhistleIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Whistle body */}
    <ellipse cx="32" cy="32" rx="16" ry="12" fill="#FFD54F" stroke="#F57C00" strokeWidth="2"/>
    
    {/* Mouthpiece */}
    <rect x="8" y="26" width="14" height="12" rx="3" fill="#F57C00"/>
    <circle cx="14" cy="32" r="4" fill="#5D4037"/>
    
    {/* Hole */}
    <circle cx="38" cy="28" r="4" fill="#5D4037"/>
    
    {/* Sound waves */}
    <path d="M44 22 Q50 18, 52 24" stroke="#9E9E9E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M46 16 Q52 12, 54 18" stroke="#9E9E9E" strokeWidth="2" fill="none" strokeLinecap="round"/>
    
    {/* Highlight */}
    <ellipse cx="28" cy="28" rx="6" ry="3" fill="#FFECB3" opacity="0.5"/>
  </svg>
);

export const DoorIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Door frame */}
    <rect x="8" y="4" width="40" height="48" rx="2" fill="#8D6E63" stroke="#5D4037" strokeWidth="2.5"/>
    
    {/* Door panels */}
    <rect x="12" y="8" width="14" height="18" rx="1" fill="#A1887F" stroke="#795548" strokeWidth="1"/>
    <rect x="30" y="8" width="14" height="18" rx="1" fill="#A1887F" stroke="#795548" strokeWidth="1"/>
    <rect x="12" y="30" width="14" height="18" rx="1" fill="#A1887F" stroke="#795548" strokeWidth="1"/>
    <rect x="30" y="30" width="14" height="18" rx="1" fill="#A1887F" stroke="#795548" strokeWidth="1"/>
    
    {/* Door handle */}
    <circle cx="42" cy="32" r="4" fill="#FFD54F" stroke="#F57C00" strokeWidth="1.5"/>
    <ellipse cx="42" cy="32" rx="2" ry="1" fill="#FFECB3"/>
  </svg>
);

export const ScissorsIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Finger holes */}
    <circle cx="14" cy="44" r="8" fill="none" stroke="#9E9E9E" strokeWidth="3.5"/>
    <circle cx="42" cy="44" r="8" fill="none" stroke="#9E9E9E" strokeWidth="3.5"/>
    
    {/* Blades */}
    <path d="M18 38 L32 12 L36 14 L22 40" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="1.5"/>
    <path d="M38 38 L24 12 L20 14 L34 40" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="1.5"/>
    
    {/* Pivot */}
    <circle cx="28" cy="26" r="4" fill="#E53935" stroke="#C62828" strokeWidth="1"/>
    
    {/* Blade edge */}
    <line x1="30" y1="14" x2="22" y2="36" stroke="#757575" strokeWidth="1"/>
    <line x1="26" y1="14" x2="34" y2="36" stroke="#757575" strokeWidth="1"/>
  </svg>
);

export const HammerIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Handle */}
    <rect x="22" y="28" width="12" height="26" rx="3" fill="#8D6E63" stroke="#5D4037" strokeWidth="2"/>
    <rect x="24" y="30" width="2" height="22" fill="#A1887F" opacity="0.5"/>
    
    {/* Head */}
    <rect x="8" y="8" width="40" height="18" rx="4" fill="#616161" stroke="#424242" strokeWidth="2"/>
    
    {/* Claw side */}
    <path d="M42 8 L50 4 Q52 8, 48 12" fill="#757575" stroke="#424242" strokeWidth="1.5"/>
    <path d="M44 8 L52 6" stroke="#424242" strokeWidth="1"/>
    
    {/* Face side */}
    <rect x="8" y="10" width="10" height="14" rx="2" fill="#9E9E9E"/>
    
    {/* Highlight */}
    <rect x="10" y="12" width="4" height="8" rx="1" fill="#BDBDBD" opacity="0.5"/>
  </svg>
);

export const ChurchBellIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Mount */}
    <rect x="24" y="2" width="8" height="8" fill="#8D6E63"/>
    <ellipse cx="28" cy="4" rx="6" ry="3" fill="#8D6E63" stroke="#5D4037" strokeWidth="1"/>
    
    {/* Bell body */}
    <path 
      d="M10 48 Q10 20, 28 14 Q46 20, 46 48 L10 48" 
      fill="#FFD54F" 
      stroke="#F57C00" 
      strokeWidth="2.5"
    />
    
    {/* Bell rim */}
    <ellipse cx="28" cy="48" rx="20" ry="6" fill="#F57C00"/>
    
    {/* Clapper */}
    <line x1="28" y1="18" x2="28" y2="40" stroke="#8D6E63" strokeWidth="3"/>
    <circle cx="28" cy="44" r="6" fill="#8D6E63" stroke="#5D4037" strokeWidth="1"/>
    
    {/* Highlight */}
    <ellipse cx="20" cy="30" rx="5" ry="8" fill="#FFECB3" opacity="0.5"/>
  </svg>
);

export const WindIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    <path d="M4 18 Q22 14, 32 18 Q42 22, 42 14 Q42 8, 36 8" stroke="#90CAF9" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <circle cx="36" cy="8" r="3" fill="#90CAF9"/>
    
    <path d="M4 28 Q28 24, 46 28 Q54 32, 50 38" stroke="#64B5F6" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <circle cx="50" cy="38" r="3" fill="#64B5F6"/>
    
    <path d="M4 38 Q18 42, 28 38 Q36 34, 40 38 Q44 42, 40 48" stroke="#42A5F5" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <circle cx="40" cy="48" r="3" fill="#42A5F5"/>
  </svg>
);

export const RainIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Cloud */}
    <ellipse cx="28" cy="18" rx="16" ry="12" fill="#90A4AE" stroke="#607D8B" strokeWidth="2"/>
    <circle cx="14" cy="20" r="10" fill="#90A4AE"/>
    <circle cx="42" cy="20" r="10" fill="#90A4AE"/>
    <ellipse cx="28" cy="16" rx="10" ry="6" fill="#B0BEC5" opacity="0.6"/>
    
    {/* Rain drops */}
    <path d="M14 34 L12 44" stroke="#42A5F5" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M24 36 L22 46" stroke="#42A5F5" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M34 34 L32 44" stroke="#42A5F5" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M44 36 L42 46" stroke="#42A5F5" strokeWidth="3.5" strokeLinecap="round"/>
    
    <path d="M18 42 L16 52" stroke="#64B5F6" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M38 42 L36 52" stroke="#64B5F6" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

// ========== HEADPHONES / SPEAKER for warnings ==========
export const HeadphonesIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Headband */}
    <path d="M10 32 Q10 12, 28 12 Q46 12, 46 32" stroke="#424242" strokeWidth="5" fill="none"/>
    
    {/* Left ear cup */}
    <rect x="4" y="28" width="12" height="18" rx="4" fill="#424242" stroke="#212121" strokeWidth="2"/>
    <rect x="6" y="30" width="8" height="14" rx="3" fill="#757575"/>
    <ellipse cx="10" cy="37" rx="3" ry="4" fill="#FFCDD2"/>
    
    {/* Right ear cup */}
    <rect x="40" y="28" width="12" height="18" rx="4" fill="#424242" stroke="#212121" strokeWidth="2"/>
    <rect x="42" y="30" width="8" height="14" rx="3" fill="#757575"/>
    <ellipse cx="46" cy="37" rx="3" ry="4" fill="#FFCDD2"/>
    
    {/* Padding on top */}
    <ellipse cx="28" cy="12" rx="8" ry="3" fill="#616161"/>
  </svg>
);

export const SpeakerIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Speaker body */}
    <path d="M10 20 L10 36 L18 36 L32 48 L32 8 L18 20 Z" fill="#424242" stroke="#212121" strokeWidth="2"/>
    
    {/* Membrane detail */}
    <ellipse cx="18" cy="28" rx="4" ry="6" fill="#616161"/>
    
    {/* Sound waves */}
    <path d="M38 18 Q46 28, 38 38" stroke="#42A5F5" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    <path d="M44 12 Q54 28, 44 44" stroke="#64B5F6" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    <path d="M50 6 Q62 28, 50 50" stroke="#90CAF9" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
  </svg>
);

// ========== GENERIC / FRUIT / OBJECTS ==========
export const AppleIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Apple body */}
    <path 
      d="M28 52 Q8 52, 8 32 Q8 18, 20 14 Q24 12, 28 14 Q32 12, 36 14 Q48 18, 48 32 Q48 52, 28 52" 
      fill="#E53935" 
      stroke="#C62828" 
      strokeWidth="2"
    />
    
    {/* Indent at top */}
    <path d="M24 16 Q28 12, 32 16" stroke="#C62828" strokeWidth="2" fill="none"/>
    
    {/* Stem */}
    <path d="M28 14 Q28 6, 32 4" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round"/>
    
    {/* Leaf */}
    <path d="M32 6 Q40 4, 40 10 Q36 8, 32 6" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1"/>
    
    {/* Highlight */}
    <ellipse cx="18" cy="28" rx="5" ry="8" fill="#EF5350" opacity="0.5"/>
    <circle cx="16" cy="24" r="3" fill="white" opacity="0.4"/>
  </svg>
);

export const PencilIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Pencil body */}
    <rect x="20" y="6" width="16" height="36" fill="#FFEB3B" stroke="#F57C00" strokeWidth="2"/>
    
    {/* Tip section */}
    <polygon points="28,52 20,42 36,42" fill="#FFCC80" stroke="#E65100" strokeWidth="1"/>
    <polygon points="28,52 25,48 31,48" fill="#3E2723"/>
    
    {/* Eraser */}
    <rect x="20" y="2" width="16" height="8" rx="2" fill="#F48FB1" stroke="#C2185B" strokeWidth="1"/>
    <rect x="20" y="6" width="16" height="4" fill="#8D6E63"/>
    
    {/* Wood section */}
    <rect x="20" y="36" width="16" height="6" fill="#FFCC80"/>
    
    {/* Center line highlight */}
    <line x1="28" y1="10" x2="28" y2="36" stroke="#FFF59D" strokeWidth="3" opacity="0.5"/>
  </svg>
);

export const MilkIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Carton body */}
    <path d="M14 14 L14 8 L42 8 L42 14 L46 18 L46 50 Q46 52, 44 52 L12 52 Q10 52, 10 50 L10 18 Z" fill="white" stroke="#BDBDBD" strokeWidth="2"/>
    
    {/* Cap */}
    <path d="M20 8 L20 2 L36 2 L36 8" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="1"/>
    <rect x="24" y="4" width="8" height="4" fill="#90CAF9"/>
    
    {/* Blue label area */}
    <rect x="10" y="26" width="36" height="22" fill="#64B5F6"/>
    
    {/* Cow spot decoration */}
    <ellipse cx="28" cy="36" rx="10" ry="6" fill="white" opacity="0.7"/>
    <ellipse cx="24" cy="34" rx="3" ry="2" fill="#1976D2" opacity="0.5"/>
    <ellipse cx="34" cy="38" rx="4" ry="2" fill="#1976D2" opacity="0.5"/>
    
    {/* "LATTE" text representation */}
    <rect x="22" y="40" width="12" height="4" rx="1" fill="white" opacity="0.8"/>
  </svg>
);

export const SoapIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* Soap bar */}
    <rect x="10" y="20" width="36" height="26" rx="6" fill="#81D4FA" stroke="#29B6F6" strokeWidth="2"/>
    
    {/* Soap highlight */}
    <ellipse cx="28" cy="26" rx="14" ry="4" fill="#E1F5FE" opacity="0.7"/>
    
    {/* Bubbles */}
    <circle cx="14" cy="12" r="5" fill="#E1F5FE" stroke="#29B6F6" strokeWidth="1" opacity="0.9"/>
    <circle cx="28" cy="8" r="4" fill="#E1F5FE" stroke="#29B6F6" strokeWidth="1" opacity="0.9"/>
    <circle cx="40" cy="12" r="6" fill="#E1F5FE" stroke="#29B6F6" strokeWidth="1" opacity="0.9"/>
    <circle cx="46" cy="4" r="3" fill="#E1F5FE" opacity="0.7"/>
    <circle cx="8" cy="6" r="2" fill="#E1F5FE" opacity="0.6"/>
    
    {/* Soap indentation */}
    <rect x="18" y="30" width="20" height="10" rx="3" fill="#29B6F6" opacity="0.4"/>
  </svg>
);

export const TshirtIcon: React.FC<IconProps> = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 56 56" className={className}>
    {/* T-shirt body */}
    <path 
      d="M18 10 L10 14 L4 24 L12 26 L14 18 L14 50 L42 50 L42 18 L44 26 L52 24 L46 14 L38 10 Q34 18, 28 18 Q22 18, 18 10" 
      fill="#42A5F5" 
      stroke="#1976D2" 
      strokeWidth="2"
    />
    
    {/* Collar */}
    <path d="M18 10 Q22 18, 28 18 Q34 18, 38 10" fill="#BBDEFB" stroke="#1976D2" strokeWidth="1"/>
    
    {/* Sleeve creases */}
    <path d="M14 22 L10 20" stroke="#1565C0" strokeWidth="1" opacity="0.5"/>
    <path d="M42 22 L46 20" stroke="#1565C0" strokeWidth="1" opacity="0.5"/>
    
    {/* Design on shirt */}
    <circle cx="28" cy="32" r="8" fill="#1976D2" opacity="0.3"/>
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
