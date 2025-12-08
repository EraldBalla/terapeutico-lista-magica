import { SlotType, SlotState, SLOT_CONFIG, getPieceById, PieceType } from "@/data/facciaBuffa";
import PieceIcon from "./PieceIcon";

interface PotatoCharacterProps {
  slots: SlotState[];
  onDropPiece: (slotType: SlotType, pieceId: string) => void;
  draggedPiece: { id: string; type: PieceType } | null;
}

// SVG Potato base component
const PotatoBase = () => (
  <svg 
    viewBox="0 0 200 280" 
    className="w-full h-full"
    style={{ filter: "drop-shadow(0 6px 12px rgba(101, 67, 33, 0.35))" }}
  >
    <defs>
      {/* Warm brown gradient - matte finish, no plastic look */}
      <linearGradient id="potatoBody" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#C9A66B" />
        <stop offset="45%" stopColor="#B8956A" />
        <stop offset="100%" stopColor="#A07850" />
      </linearGradient>
      {/* Soft highlight */}
      <radialGradient id="potatoHighlight" cx="35%" cy="25%" r="40%">
        <stop offset="0%" stopColor="#DEC08A" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#C9A66B" stopOpacity="0" />
      </radialGradient>
    </defs>
    
    {/* Main potato body - more irregular, wider at bottom */}
    <path 
      d="M100 22
         C 145 18, 178 50, 184 95
         C 190 140, 188 180, 178 215
         C 168 250, 140 270, 100 272
         C 60 270, 32 250, 22 215
         C 12 180, 10 140, 16 95
         C 22 50, 55 18, 100 22"
      fill="url(#potatoBody)"
      stroke="#8B6340"
      strokeWidth="2.5"
    />
    
    {/* Soft highlight overlay */}
    <path 
      d="M100 22
         C 145 18, 178 50, 184 95
         C 190 140, 188 180, 178 215
         C 168 250, 140 270, 100 272
         C 60 270, 32 250, 22 215
         C 12 180, 10 140, 16 95
         C 22 50, 55 18, 100 22"
      fill="url(#potatoHighlight)"
    />
    
    {/* Potato skin spots - subtle, organic */}
    <ellipse cx="55" cy="85" rx="8" ry="5" fill="#9E7B52" opacity="0.35" transform="rotate(-20 55 85)" />
    <ellipse cx="155" cy="110" rx="6" ry="4" fill="#9E7B52" opacity="0.3" transform="rotate(15 155 110)" />
    <ellipse cx="145" cy="195" rx="9" ry="5" fill="#9E7B52" opacity="0.28" transform="rotate(-8 145 195)" />
    <ellipse cx="50" cy="170" rx="5" ry="4" fill="#9E7B52" opacity="0.32" transform="rotate(30 50 170)" />
    <ellipse cx="90" cy="235" rx="6" ry="4" fill="#9E7B52" opacity="0.25" transform="rotate(-5 90 235)" />
    
    {/* Simple cartoon feet */}
    <ellipse cx="70" cy="270" rx="20" ry="8" fill="#6D4C41" />
    <ellipse cx="130" cy="270" rx="20" ry="8" fill="#6D4C41" />
    <ellipse cx="70" cy="268" rx="18" ry="6" fill="#8D6E63" />
    <ellipse cx="130" cy="268" rx="18" ry="6" fill="#8D6E63" />
  </svg>
);

const PotatoCharacter = ({ slots, onDropPiece, draggedPiece }: PotatoCharacterProps) => {
  
  const handleDragOver = (e: React.DragEvent, slotType: SlotType) => {
    e.preventDefault();
    const config = SLOT_CONFIG[slotType];
    if (draggedPiece && config.acceptedTypes.includes(draggedPiece.type)) {
      e.dataTransfer.dropEffect = "move";
    }
  };

  const handleDrop = (e: React.DragEvent, slotType: SlotType) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData("pieceId");
    const pieceType = e.dataTransfer.getData("pieceType") as PieceType;
    
    const config = SLOT_CONFIG[slotType];
    if (config.acceptedTypes.includes(pieceType)) {
      onDropPiece(slotType, pieceId);
    }
  };

  const getSlotPiece = (slotType: SlotType) => {
    const slotState = slots.find(s => s.slot === slotType);
    if (slotState?.pieceId) {
      return getPieceById(slotState.pieceId);
    }
    return null;
  };

  const isSlotHighlighted = (slotType: SlotType) => {
    if (!draggedPiece) return false;
    const config = SLOT_CONFIG[slotType];
    return config.acceptedTypes.includes(draggedPiece.type);
  };

  // Get slot dimensions based on type
  const getSlotSize = (slotType: SlotType) => {
    if (slotType.includes("occhio")) return "w-10 h-10 md:w-14 md:h-14";
    if (slotType === "naso") return "w-10 h-12 md:w-12 md:h-14";
    if (slotType === "bocca") return "w-14 h-8 md:w-16 md:h-10";
    if (slotType.includes("orecchio")) return "w-8 h-12 md:w-10 md:h-14";
    if (slotType === "cappello") return "w-16 h-12 md:w-20 md:h-14";
    if (slotType.includes("braccio")) return "w-10 h-14 md:w-12 md:h-16";
    return "w-12 h-12 md:w-14 md:h-14";
  };

  // Get slot label for empty slots
  const getSlotLabel = (slotType: SlotType) => {
    const labels: Record<SlotType, string> = {
      occhio_sx: "Occhio",
      occhio_dx: "Occhio",
      naso: "Naso",
      bocca: "Bocca",
      orecchio_sx: "Orecchio",
      orecchio_dx: "Orecchio",
      cappello: "Cappello",
      braccio_sx: "Braccio",
      braccio_dx: "Braccio",
    };
    return labels[slotType];
  };

  return (
    <div className="relative w-full max-w-xs md:max-w-sm mx-auto aspect-[3/4]">
      {/* Potato base */}
      <div className="absolute inset-0">
        <PotatoBase />
      </div>

      {/* Slots */}
      {(Object.keys(SLOT_CONFIG) as SlotType[]).map((slotType) => {
        const config = SLOT_CONFIG[slotType];
        const piece = getSlotPiece(slotType);
        const highlighted = isSlotHighlighted(slotType);
        const slotSize = getSlotSize(slotType);

        return (
          <div
            key={slotType}
            className={`absolute flex items-center justify-center transition-all duration-200 ${config.position} ${slotSize} ${
              highlighted
                ? "bg-green-200/70 border-2 border-dashed border-green-500 rounded-full scale-110"
                : piece
                ? ""
                : "bg-white/40 border-2 border-dashed border-amber-400/60 rounded-full"
            }`}
            onDragOver={(e) => handleDragOver(e, slotType)}
            onDrop={(e) => handleDrop(e, slotType)}
          >
            {piece ? (
              <div className="w-full h-full animate-scale-in">
                <PieceIcon pieceId={piece.id} size="lg" className="w-full h-full" />
              </div>
            ) : (
              <span className="text-[10px] text-amber-700/50 text-center font-medium hidden md:block">
                {getSlotLabel(slotType)}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PotatoCharacter;
