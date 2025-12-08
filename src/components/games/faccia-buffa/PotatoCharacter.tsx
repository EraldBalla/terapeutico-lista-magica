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
    style={{ filter: "drop-shadow(0 8px 16px rgba(139, 90, 43, 0.3))" }}
  >
    {/* Main potato body with organic shape */}
    <defs>
      <linearGradient id="potatoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F4C07A" />
        <stop offset="50%" stopColor="#E8B060" />
        <stop offset="100%" stopColor="#D4944A" />
      </linearGradient>
      <linearGradient id="potatoHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDD998" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#F4C07A" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    {/* Main body - irregular oval shape */}
    <path 
      d="M100 20
         C 155 20, 185 60, 188 110
         C 192 160, 180 210, 165 240
         C 150 265, 120 275, 100 275
         C 80 275, 50 265, 35 240
         C 20 210, 8 160, 12 110
         C 15 60, 45 20, 100 20"
      fill="url(#potatoGradient)"
      stroke="#C98B4A"
      strokeWidth="3"
    />
    
    {/* Highlight on top left */}
    <path 
      d="M70 40
         C 90 35, 120 35, 140 45
         C 160 55, 170 80, 168 100
         C 140 85, 100 75, 60 85
         C 55 70, 55 50, 70 40"
      fill="url(#potatoHighlight)"
    />
    
    {/* Potato spots/freckles */}
    <ellipse cx="50" cy="100" rx="6" ry="4" fill="#C98B4A" opacity="0.4" transform="rotate(-15 50 100)" />
    <ellipse cx="160" cy="130" rx="5" ry="3" fill="#C98B4A" opacity="0.35" transform="rotate(20 160 130)" />
    <ellipse cx="140" cy="200" rx="7" ry="4" fill="#C98B4A" opacity="0.3" transform="rotate(-10 140 200)" />
    <ellipse cx="55" cy="180" rx="4" ry="3" fill="#C98B4A" opacity="0.35" transform="rotate(25 55 180)" />
    <ellipse cx="100" cy="240" rx="5" ry="3" fill="#C98B4A" opacity="0.25" />
    
    {/* Simple feet at the bottom */}
    <ellipse cx="70" cy="272" rx="22" ry="10" fill="#5D4037" />
    <ellipse cx="130" cy="272" rx="22" ry="10" fill="#5D4037" />
    <ellipse cx="70" cy="270" rx="20" ry="8" fill="#8D6E63" />
    <ellipse cx="130" cy="270" rx="20" ry="8" fill="#8D6E63" />
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
