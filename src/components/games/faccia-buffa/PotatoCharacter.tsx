import { SlotType, SlotState, SLOT_CONFIG, getPieceById, PieceType } from "@/data/facciaBuffa";

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

  return (
    <div className="relative w-full max-w-xs md:max-w-sm mx-auto aspect-[3/4]">
      {/* Potato body */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-200 to-amber-300 rounded-[40%_40%_45%_45%] shadow-xl border-4 border-amber-400">
        {/* Inner shadow for depth */}
        <div className="absolute inset-4 bg-gradient-to-b from-amber-100/30 to-transparent rounded-[40%] pointer-events-none" />
      </div>

      {/* Slots */}
      {(Object.keys(SLOT_CONFIG) as SlotType[]).map((slotType) => {
        const config = SLOT_CONFIG[slotType];
        const piece = getSlotPiece(slotType);
        const highlighted = isSlotHighlighted(slotType);

        return (
          <div
            key={slotType}
            className={`absolute w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full transition-all duration-200 ${config.position} ${
              highlighted
                ? "bg-green-200/80 border-2 border-dashed border-green-500 scale-110"
                : piece
                ? "bg-transparent"
                : "bg-amber-100/50 border-2 border-dashed border-amber-400/50"
            }`}
            onDragOver={(e) => handleDragOver(e, slotType)}
            onDrop={(e) => handleDrop(e, slotType)}
          >
            {piece ? (
              <span className="text-3xl md:text-4xl animate-bounce-in drop-shadow-md">
                {piece.image}
              </span>
            ) : (
              <span className="text-xs text-amber-600/50 text-center font-medium hidden md:block">
                {config.label.split(' ')[0]}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PotatoCharacter;
