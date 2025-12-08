import { SlotType, SlotState, SLOT_CONFIG, getPieceById, PieceType } from "@/data/facciaBuffa";
import PieceIcon from "./PieceIcon";
import potatoBase from "@/assets/potato-base.png";

interface PotatoCharacterProps {
  slots: SlotState[];
  onDropPiece: (slotType: SlotType, pieceId: string) => void;
  draggedPiece: { id: string; type: PieceType } | null;
}

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
    <div className="relative w-full mx-auto aspect-[3/4]" style={{ maxWidth: "320px" }}>
      {/* Potato base - centered and sized to fill container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={potatoBase} 
          alt="Patata" 
          className="w-[85%] h-[85%] object-contain"
          style={{ marginTop: "5%" }}
        />
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
