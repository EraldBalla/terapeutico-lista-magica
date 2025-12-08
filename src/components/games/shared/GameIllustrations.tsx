/**
 * Cartoon-style illustrations for each therapeutic game.
 * Single, clear illustration per game for the home page.
 */

// Objects Journey - Basket with everyday objects
export const ObjectsIllustration = () => (
  <svg viewBox="0 0 200 180" className="w-full h-full">
    {/* Basket */}
    <ellipse cx="100" cy="150" rx="70" ry="20" fill="#D4A574" />
    <path
      d="M30 150 L40 90 C45 70 70 60 100 60 C130 60 155 70 160 90 L170 150"
      fill="#E8C69A"
      stroke="#C49A6C"
      strokeWidth="3"
    />
    <path
      d="M35 150 C35 130 50 120 100 120 C150 120 165 130 165 150"
      fill="#D4A574"
      stroke="#C49A6C"
      strokeWidth="2"
    />
    {/* Basket weave pattern */}
    <path d="M50 100 L55 130" stroke="#C49A6C" strokeWidth="2" opacity="0.5" />
    <path d="M80 85 L82 125" stroke="#C49A6C" strokeWidth="2" opacity="0.5" />
    <path d="M120 85 L118 125" stroke="#C49A6C" strokeWidth="2" opacity="0.5" />
    <path d="M150 100 L145 130" stroke="#C49A6C" strokeWidth="2" opacity="0.5" />
    
    {/* Apple */}
    <circle cx="70" cy="55" r="28" fill="#E74C3C" />
    <ellipse cx="70" cy="55" rx="10" ry="8" fill="#FF6B5B" opacity="0.5" transform="translate(-8, -10)" />
    <path d="M70 28 Q75 20 82 25" stroke="#5D4037" strokeWidth="3" fill="none" />
    <ellipse cx="78" cy="22" rx="8" ry="5" fill="#4CAF50" transform="rotate(30, 78, 22)" />
    
    {/* Pencil */}
    <rect x="115" y="25" width="12" height="55" fill="#FFD54F" rx="1" transform="rotate(15, 121, 52)" />
    <polygon points="121,82 115,95 127,95" fill="#FFB74D" transform="rotate(15, 121, 88)" />
    <polygon points="121,90 118,98 124,98" fill="#5D4037" transform="rotate(15, 121, 94)" />
    <rect x="115" y="25" width="12" height="8" fill="#E91E63" rx="1" transform="rotate(15, 121, 29)" />
    
    {/* Glass */}
    <path
      d="M140 45 L145 95 C145 100 155 100 155 95 L160 45 Z"
      fill="#B3E5FC"
      stroke="#81D4FA"
      strokeWidth="2"
      opacity="0.8"
    />
    <ellipse cx="150" cy="45" rx="10" ry="4" fill="#E1F5FE" stroke="#81D4FA" strokeWidth="2" />
    <path d="M145 55 Q150 58 155 55" stroke="#fff" strokeWidth="2" opacity="0.6" />
    
    {/* T-shirt peeking out */}
    <path
      d="M85 100 L75 85 L65 90 L75 105 L85 100 L95 85 L105 85 L115 100 L125 105 L135 90 L125 85 L115 100"
      fill="#9C27B0"
      stroke="#7B1FA2"
      strokeWidth="2"
    />
  </svg>
);

// Sound Machine - Magical sound box
export const SoundMachineIllustration = () => (
  <svg viewBox="0 0 200 180" className="w-full h-full">
    {/* Machine base */}
    <rect x="40" y="70" width="120" height="90" rx="15" fill="#5C6BC0" />
    <rect x="40" y="70" width="120" height="90" rx="15" fill="url(#machineGradient)" />
    <defs>
      <linearGradient id="machineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7986CB" />
        <stop offset="100%" stopColor="#3F51B5" />
      </linearGradient>
    </defs>
    
    {/* Speaker grille */}
    <circle cx="100" cy="115" r="35" fill="#303F9F" />
    <circle cx="100" cy="115" r="30" fill="#1A237E" />
    <circle cx="100" cy="115" r="20" fill="#283593" />
    <circle cx="100" cy="115" r="10" fill="#3F51B5" />
    
    {/* Speaker rings */}
    {[25, 20, 15].map((r, i) => (
      <circle key={i} cx="100" cy="115" r={r} fill="none" stroke="#5C6BC0" strokeWidth="1" opacity="0.5" />
    ))}
    
    {/* Control buttons */}
    <circle cx="60" cy="85" r="6" fill="#FF5722" />
    <circle cx="80" cy="85" r="6" fill="#4CAF50" />
    <rect x="130" y="80" width="20" height="10" rx="3" fill="#FFC107" />
    
    {/* Sound waves */}
    <path d="M150 100 Q165 115 150 130" fill="none" stroke="#FFD54F" strokeWidth="3" opacity="0.8" />
    <path d="M160 90 Q180 115 160 140" fill="none" stroke="#FFD54F" strokeWidth="3" opacity="0.6" />
    <path d="M170 80 Q195 115 170 150" fill="none" stroke="#FFD54F" strokeWidth="3" opacity="0.4" />
    
    {/* Floating icons - Cow */}
    <g transform="translate(25, 15) scale(0.5)">
      <ellipse cx="40" cy="50" rx="30" ry="25" fill="#F5F5F5" />
      <circle cx="25" cy="45" r="5" fill="#8D6E63" />
      <circle cx="55" cy="45" r="5" fill="#8D6E63" />
      <ellipse cx="40" cy="60" rx="15" ry="10" fill="#FFCCBC" />
      <circle cx="35" cy="58" r="2" fill="#5D4037" />
      <circle cx="45" cy="58" r="2" fill="#5D4037" />
      <ellipse cx="25" cy="35" rx="8" ry="12" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1" />
      <ellipse cx="55" cy="35" rx="8" ry="12" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="1" />
    </g>
    
    {/* Floating icons - Car */}
    <g transform="translate(140, 20) scale(0.45)">
      <rect x="10" y="30" width="60" height="25" rx="8" fill="#E53935" />
      <rect x="20" y="20" width="40" height="20" rx="5" fill="#EF5350" />
      <rect x="25" y="22" width="15" height="12" rx="2" fill="#BBDEFB" />
      <rect x="42" y="22" width="15" height="12" rx="2" fill="#BBDEFB" />
      <circle cx="25" cy="55" r="8" fill="#424242" />
      <circle cx="25" cy="55" r="4" fill="#757575" />
      <circle cx="55" cy="55" r="8" fill="#424242" />
      <circle cx="55" cy="55" r="4" fill="#757575" />
    </g>
    
    {/* Floating icons - Bell */}
    <g transform="translate(5, 55) scale(0.4)">
      <path d="M40 20 L40 30 M40 30 C25 30 15 45 15 60 L65 60 C65 45 55 30 40 30" fill="#FFC107" stroke="#FFA000" strokeWidth="2" />
      <ellipse cx="40" cy="60" rx="28" ry="8" fill="#FFD54F" />
      <circle cx="40" cy="70" r="6" fill="#FFA000" />
    </g>
    
    {/* Music notes */}
    <text x="55" y="50" fontSize="20" fill="#FF80AB">♪</text>
    <text x="130" y="60" fontSize="16" fill="#B388FF">♫</text>
  </svg>
);

// Faccia Buffa - Mr Potato with floating pieces
export const FacciaBuffaIllustration = () => (
  <svg viewBox="0 0 200 180" className="w-full h-full">
    {/* Potato body */}
    <defs>
      <linearGradient id="potatoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F4C07A" />
        <stop offset="100%" stopColor="#E0A25A" />
      </linearGradient>
    </defs>
    
    <ellipse cx="100" cy="105" rx="55" ry="65" fill="url(#potatoGradient)" />
    <ellipse cx="100" cy="105" rx="55" ry="65" fill="none" stroke="#C98B4A" strokeWidth="3" />
    
    {/* Potato spots */}
    <ellipse cx="75" cy="85" rx="6" ry="4" fill="#D4A05A" transform="rotate(-20, 75, 85)" />
    <ellipse cx="130" cy="100" rx="5" ry="3" fill="#D4A05A" transform="rotate(15, 130, 100)" />
    <ellipse cx="90" cy="140" rx="4" ry="3" fill="#D4A05A" />
    
    {/* Feet */}
    <ellipse cx="75" cy="165" rx="18" ry="10" fill="#5D4037" />
    <ellipse cx="125" cy="165" rx="18" ry="10" fill="#5D4037" />
    
    {/* Big cartoon eyes on potato */}
    <g>
      <ellipse cx="80" cy="85" rx="18" ry="20" fill="#FFFFFF" stroke="#333" strokeWidth="2" />
      <ellipse cx="120" cy="85" rx="18" ry="20" fill="#FFFFFF" stroke="#333" strokeWidth="2" />
      <circle cx="82" cy="88" r="8" fill="#333" />
      <circle cx="122" cy="88" r="8" fill="#333" />
      <circle cx="85" cy="85" r="3" fill="#FFF" />
      <circle cx="125" cy="85" r="3" fill="#FFF" />
    </g>
    
    {/* Red nose on potato */}
    <ellipse cx="100" cy="110" rx="12" ry="10" fill="#E53935" />
    <ellipse cx="96" cy="106" rx="4" ry="3" fill="#FF6B5B" opacity="0.6" />
    
    {/* Smiling mouth on potato */}
    <path d="M80 130 Q100 150 120 130" fill="none" stroke="#333" strokeWidth="3" strokeLinecap="round" />
    
    {/* Floating party hat */}
    <g transform="translate(135, 10) rotate(15)">
      <polygon points="20,0 0,50 40,50" fill="#9C27B0" />
      <circle cx="20" cy="0" r="6" fill="#FFC107" />
      <rect x="0" y="45" width="40" height="8" fill="#E91E63" rx="2" />
      <line x1="10" y1="15" x2="10" y2="40" stroke="#E1BEE7" strokeWidth="2" />
      <line x1="20" y1="10" x2="20" y2="45" stroke="#F8BBD9" strokeWidth="2" />
      <line x1="30" y1="15" x2="30" y2="40" stroke="#E1BEE7" strokeWidth="2" />
    </g>
    
    {/* Floating mustache */}
    <g transform="translate(15, 80)">
      <path
        d="M0 20 Q10 10 20 15 Q30 5 40 15 Q50 10 60 20 Q50 25 40 20 Q30 30 20 20 Q10 25 0 20"
        fill="#5D4037"
      />
    </g>
  </svg>
);

// Export all illustrations
export const GameIllustrations = {
  objects: ObjectsIllustration,
  sounds: SoundMachineIllustration,
  facciaBuffa: FacciaBuffaIllustration,
};

export default GameIllustrations;
