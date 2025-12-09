const NewPotatoBody = () => (
  <svg viewBox="0 0 100 130" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <defs>
      {/* Gradient principale corpo */}
      <linearGradient id="potatoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4A574" />
        <stop offset="30%" stopColor="#C4956A" />
        <stop offset="70%" stopColor="#B8875C" />
        <stop offset="100%" stopColor="#A67B52" />
      </linearGradient>
      
      {/* Highlight luce */}
      <radialGradient id="potatoHighlight" cx="30%" cy="25%" r="40%">
        <stop offset="0%" stopColor="#E8C9A0" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#D4A574" stopOpacity="0" />
      </radialGradient>
      
      {/* Ombra interna */}
      <radialGradient id="potatoShadow" cx="70%" cy="80%" r="50%">
        <stop offset="0%" stopColor="#8B6914" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#A67B52" stopOpacity="0" />
      </radialGradient>
      
      {/* Ombra sotto */}
      <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#5D4E37" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#5D4E37" stopOpacity="0" />
      </radialGradient>
      
      {/* Gradient piedi */}
      <linearGradient id="footGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C4956A" />
        <stop offset="100%" stopColor="#8B6914" />
      </linearGradient>
    </defs>
    
    {/* Ombra a terra */}
    <ellipse cx="50" cy="125" rx="35" ry="5" fill="url(#groundShadow)" />
    
    {/* Piede sinistro */}
    <ellipse 
      cx="32" 
      cy="118" 
      rx="14" 
      ry="9" 
      fill="url(#footGradient)"
      stroke="#8B6914"
      strokeWidth="0.5"
    />
    <ellipse cx="30" cy="116" rx="7" ry="3.5" fill="#D4A574" opacity="0.4" />
    
    {/* Piede destro */}
    <ellipse 
      cx="68" 
      cy="118" 
      rx="14" 
      ry="9" 
      fill="url(#footGradient)"
      stroke="#8B6914"
      strokeWidth="0.5"
    />
    <ellipse cx="66" cy="116" rx="7" ry="3.5" fill="#D4A574" opacity="0.4" />
    
    {/* Corpo principale - forma Mr Potato: LARGO sotto, STRETTO sopra */}
    <path 
      d="M 50 6
         C 68 6, 78 15, 80 28
         C 84 42, 88 58, 92 75
         C 94 88, 90 98, 78 104
         C 68 110, 58 112, 50 112
         C 42 112, 32 110, 22 104
         C 10 98, 6 88, 8 75
         C 12 58, 16 42, 20 28
         C 22 15, 32 6, 50 6
         Z"
      fill="url(#potatoGradient)"
      stroke="#8B6914"
      strokeWidth="1.5"
    />
    
    {/* Layer highlight luce */}
    <path 
      d="M 50 6
         C 68 6, 78 15, 80 28
         C 84 42, 88 58, 92 75
         C 94 88, 90 98, 78 104
         C 68 110, 58 112, 50 112
         C 42 112, 32 110, 22 104
         C 10 98, 6 88, 8 75
         C 12 58, 16 42, 20 28
         C 22 15, 32 6, 50 6
         Z"
      fill="url(#potatoHighlight)"
    />
    
    {/* Layer ombra interna */}
    <path 
      d="M 50 6
         C 68 6, 78 15, 80 28
         C 84 42, 88 58, 92 75
         C 94 88, 90 98, 78 104
         C 68 110, 58 112, 50 112
         C 42 112, 32 110, 22 104
         C 10 98, 6 88, 8 75
         C 12 58, 16 42, 20 28
         C 22 15, 32 6, 50 6
         Z"
      fill="url(#potatoShadow)"
    />
    
    {/* Macchiette sulla buccia */}
    <ellipse cx="25" cy="35" rx="3" ry="2" fill="#A67B52" opacity="0.5" transform="rotate(-15 25 35)" />
    <ellipse cx="75" cy="55" rx="2.5" ry="1.5" fill="#A67B52" opacity="0.4" transform="rotate(20 75 55)" />
    <ellipse cx="22" cy="70" rx="2" ry="1.5" fill="#A67B52" opacity="0.45" transform="rotate(-10 22 70)" />
    <ellipse cx="78" cy="78" rx="2.5" ry="2" fill="#A67B52" opacity="0.35" transform="rotate(15 78 78)" />
    <ellipse cx="45" cy="90" rx="2" ry="1.5" fill="#A67B52" opacity="0.4" />
    <ellipse cx="58" cy="25" rx="2" ry="1.5" fill="#A67B52" opacity="0.3" transform="rotate(5 58 25)" />
    <ellipse cx="35" cy="95" rx="2.5" ry="1.5" fill="#A67B52" opacity="0.35" />
    <ellipse cx="65" cy="92" rx="2" ry="1.5" fill="#A67B52" opacity="0.4" />
    
    {/* Riflesso lucido 3D */}
    <ellipse cx="30" cy="28" rx="10" ry="6" fill="white" opacity="0.18" transform="rotate(-20 30 28)" />
    <ellipse cx="24" cy="55" rx="5" ry="8" fill="white" opacity="0.1" transform="rotate(-10 24 55)" />
  </svg>
);

export default NewPotatoBody;
