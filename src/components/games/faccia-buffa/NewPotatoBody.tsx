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
    <ellipse cx="50" cy="125" rx="30" ry="5" fill="url(#groundShadow)" />
    
    {/* Piede sinistro */}
    <ellipse 
      cx="35" 
      cy="115" 
      rx="12" 
      ry="8" 
      fill="url(#footGradient)"
      stroke="#8B6914"
      strokeWidth="0.5"
    />
    {/* Highlight piede sinistro */}
    <ellipse cx="33" cy="113" rx="6" ry="3" fill="#D4A574" opacity="0.4" />
    
    {/* Piede destro */}
    <ellipse 
      cx="65" 
      cy="115" 
      rx="12" 
      ry="8" 
      fill="url(#footGradient)"
      stroke="#8B6914"
      strokeWidth="0.5"
    />
    {/* Highlight piede destro */}
    <ellipse cx="63" cy="113" rx="6" ry="3" fill="#D4A574" opacity="0.4" />
    
    {/* Corpo principale - forma irregolare patata */}
    <path 
      d="M 50 8
         C 75 8, 92 25, 90 45
         C 92 65, 88 80, 82 90
         C 78 100, 70 108, 50 108
         C 30 108, 22 100, 18 90
         C 12 80, 8 65, 10 45
         C 8 25, 25 8, 50 8
         Z"
      fill="url(#potatoGradient)"
      stroke="#8B6914"
      strokeWidth="1.5"
    />
    
    {/* Layer highlight luce */}
    <path 
      d="M 50 8
         C 75 8, 92 25, 90 45
         C 92 65, 88 80, 82 90
         C 78 100, 70 108, 50 108
         C 30 108, 22 100, 18 90
         C 12 80, 8 65, 10 45
         C 8 25, 25 8, 50 8
         Z"
      fill="url(#potatoHighlight)"
    />
    
    {/* Layer ombra interna */}
    <path 
      d="M 50 8
         C 75 8, 92 25, 90 45
         C 92 65, 88 80, 82 90
         C 78 100, 70 108, 50 108
         C 30 108, 22 100, 18 90
         C 12 80, 8 65, 10 45
         C 8 25, 25 8, 50 8
         Z"
      fill="url(#potatoShadow)"
    />
    
    {/* Macchiette sulla buccia */}
    <ellipse cx="25" cy="35" rx="3" ry="2" fill="#A67B52" opacity="0.5" transform="rotate(-15 25 35)" />
    <ellipse cx="72" cy="50" rx="2.5" ry="1.5" fill="#A67B52" opacity="0.4" transform="rotate(20 72 50)" />
    <ellipse cx="30" cy="70" rx="2" ry="1.5" fill="#A67B52" opacity="0.45" transform="rotate(-10 30 70)" />
    <ellipse cx="68" cy="75" rx="2.5" ry="2" fill="#A67B52" opacity="0.35" transform="rotate(15 68 75)" />
    <ellipse cx="45" cy="85" rx="2" ry="1.5" fill="#A67B52" opacity="0.4" />
    <ellipse cx="55" cy="25" rx="2" ry="1.5" fill="#A67B52" opacity="0.3" transform="rotate(5 55 25)" />
    
    {/* Riflesso lucido 3D */}
    <ellipse cx="32" cy="30" rx="8" ry="5" fill="white" opacity="0.15" transform="rotate(-20 32 30)" />
    <ellipse cx="28" cy="55" rx="4" ry="6" fill="white" opacity="0.08" transform="rotate(-10 28 55)" />
  </svg>
);

export default NewPotatoBody;
