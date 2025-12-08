import { SlotType, SlotState, SLOT_CONFIG, getPieceById, PieceType } from "@/data/facciaBuffa";
import PieceIcon from "./PieceIcon";

interface PotatoCharacterProps {
  slots: SlotState[];
  onDropPiece: (slotType: SlotType, pieceId: string) => void;
  draggedPiece: { id: string; type: PieceType } | null;
}

// SVG Potato base component - refined, clean cartoon style
const PotatoBase = () => (
  <svg 
    viewBox="0 0 200 280" 
    className="w-full h-full"
    style={{ filter: "drop-shadow(0 4px 8px rgba(90, 60, 30, 0.25))" }}
  >
    {/* Main potato body - organic shape, wider at bottom */}
    <path 
      d="M100 18
         C 150 16, 182 55, 186 100
         C 190 145, 186 190, 174 225
         C 162 258, 135 274, 100 276
         C 65 274, 38 258, 26 225
         C 14 190, 10 145, 14 100
         C 18 55, 50 16, 100 18"
      fill="#C4A265"
      stroke="#8B6B3D"
      strokeWidth="2"
    />
    
    {/* Single soft highlight - top left */}
    <ellipse cx="65" cy="70" rx="35" ry="28" fill="#D4B87A" opacity="0.45"/>
    
    {/* Potato skin spots - small, discrete */}
    <ellipse cx="52" cy="95" rx="5" ry="3" fill="#A08050" opacity="0.35" transform="rotate(-15 52 95)" />
    <ellipse cx="158" cy="120" rx="4" ry="3" fill="#A08050" opacity="0.3" transform="rotate(20 158 120)" />
    <ellipse cx="148" cy="200" rx="6" ry="3" fill="#A08050" opacity="0.28" transform="rotate(-5 148 200)" />
    <ellipse cx="45" cy="175" rx="4" ry="2.5" fill="#A08050" opacity="0.3" />
    
    {/* Simple cartoon feet - clean ovals */}
    <ellipse cx="72" cy="274" rx="22" ry="7" fill="#6D4C41" />
    <ellipse cx="128" cy="274" rx="22" ry="7" fill="#6D4C41" />
    <ellipse cx="72" cy="272" rx="20" ry="5" fill="#8D6E63" />
    <ellipse cx="128" cy="272" rx="20" ry="5" fill="#8D6E63" />
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
