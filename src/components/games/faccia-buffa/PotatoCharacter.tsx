import { SlotType, SlotState, SLOT_CONFIG, getPieceById, PieceType, SYMMETRIC_SLOTS } from "@/data/facciaBuffa";
import PieceIcon from "./PieceIcon";
import NewPotatoBody from "./NewPotatoBody";
import { useRef, useCallback } from "react";

interface PotatoCharacterProps {
  slots: SlotState[];
  onDropPiece: (slotType: SlotType, pieceId: string) => void;
  draggedPiece: { id: string; type: PieceType } | null;
}

// Magnetic snap radius in pixels - LARGE for easy child use
const SNAP_RADIUS = 100;

const PotatoCharacter = ({ slots, onDropPiece, draggedPiece }: PotatoCharacterProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Find the best slot for drop based on position
  const findNearestSlot = useCallback((x: number, y: number, pieceType: PieceType): SlotType | null => {
    if (!containerRef.current) return null;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    let nearestSlot: SlotType | null = null;
    let nearestDistance = Infinity;
    
    const slotElements = container.querySelectorAll('[data-slot]');
    slotElements.forEach((el) => {
      const slotType = el.getAttribute('data-slot') as SlotType;
      const config = SLOT_CONFIG[slotType];
      
      if (config.acceptedTypes.includes(pieceType)) {
        const slotRect = el.getBoundingClientRect();
        const slotCenterX = slotRect.left + slotRect.width / 2;
        const slotCenterY = slotRect.top + slotRect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(x - slotCenterX, 2) + Math.pow(y - slotCenterY, 2)
        );
        
        if (distance < nearestDistance && distance < SNAP_RADIUS) {
          nearestDistance = distance;
          nearestSlot = slotType;
        }
      }
    });
    
    return nearestSlot;
  }, []);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedPiece) {
      e.dataTransfer.dropEffect = "move";
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData("pieceId");
    const pieceType = e.dataTransfer.getData("pieceType") as PieceType;
    
    // Use magnetic snap to find nearest valid slot
    const nearestSlot = findNearestSlot(e.clientX, e.clientY, pieceType);
    
    if (nearestSlot) {
      onDropPiece(nearestSlot, pieceId);
    }
  };

  // Handle drop directly on a slot (more precise)
  const handleSlotDrop = (e: React.DragEvent, slotType: SlotType) => {
    e.preventDefault();
    e.stopPropagation();
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

  // Check if this is a right-side slot that should be mirrored
  const shouldMirror = (slotType: SlotType) => {
    return slotType === "braccio_dx" || slotType === "orecchio_dx";
  };

  // Get slot dimensions based on type - VERY LARGE hitboxes for easy child use (OBJECTIVE 2)
  const getSlotSize = (slotType: SlotType) => {
    if (slotType.includes("occhio")) return "w-20 h-20 md:w-24 md:h-24";
    if (slotType === "naso") return "w-18 h-20 md:w-20 md:h-24";
    if (slotType === "bocca") return "w-24 h-18 md:w-28 md:h-20";
    if (slotType.includes("orecchio")) return "w-18 h-22 md:w-20 md:h-24";
    if (slotType === "cappello") return "w-28 h-20 md:w-32 md:h-24";
    if (slotType.includes("braccio")) return "w-20 h-24 md:w-24 md:h-28";
    if (slotType === "extra_occhi") return "w-32 h-16 md:w-36 md:h-18";
    if (slotType === "extra_bocca") return "w-20 h-14 md:w-24 md:h-16";
    return "w-20 h-20 md:w-24 md:h-24";
  };

  // Slot positions - calibrated for Mr Potato shape
  // Ears higher and closer to body, arms higher on flanks
  const getSlotPosition = (slotType: SlotType): React.CSSProperties => {
    const positions: Record<SlotType, React.CSSProperties> = {
      occhio_sx: { top: "28%", left: "36%", transform: "translate(-50%, -50%)" },
      occhio_dx: { top: "28%", left: "64%", transform: "translate(-50%, -50%)" },
      naso: { top: "45%", left: "50%", transform: "translate(-50%, -50%)" },
      bocca: { top: "68%", left: "50%", transform: "translate(-50%, -50%)" },
      orecchio_sx: { top: "30%", left: "18%", transform: "translate(-50%, -50%)" },
      orecchio_dx: { top: "30%", left: "82%", transform: "translate(-50%, -50%)" },
      cappello: { top: "6%", left: "50%", transform: "translate(-50%, -50%)" },
      braccio_sx: { top: "52%", left: "12%", transform: "translate(-50%, -50%)" },
      braccio_dx: { top: "52%", left: "88%", transform: "translate(-50%, -50%)" },
      extra_occhi: { top: "26%", left: "50%", transform: "translate(-50%, -50%)" },
      extra_bocca: { top: "55%", left: "50%", transform: "translate(-50%, -50%)" },
    };
    return positions[slotType];
  };

  // ALL pieces on potato use circular mask (hides white backgrounds)
  // Applies to: ears, arms, mouth, hat, nose, eyes, glasses, extras - everything
  const shouldUseMask = () => true;

  // Check if this is an eye slot needing CSS crop (shows only half of the double-eye image)
  const isEyeSlot = (slotType: SlotType) => {
    return slotType === "occhio_sx" || slotType === "occhio_dx";
  };

  // Check if this is the mouth slot (apply scale reduction for smile)
  const isMouthSlot = (slotType: SlotType) => {
    return slotType === "bocca";
  };

  // Check if this is the angry mouth (wider horizontal stretch)
  const isAngryMouth = (pieceId: string) => {
    return pieceId === "bocca_arrabbiata";
  };

  // Get slot label for empty slots
  const getSlotLabel = (slotType: SlotType) => {
    const labels: Record<SlotType, string> = {
      occhio_sx: "👁️",
      occhio_dx: "👁️",
      naso: "👃",
      bocca: "👄",
      orecchio_sx: "👂",
      orecchio_dx: "👂",
      cappello: "🎩",
      braccio_sx: "💪",
      braccio_dx: "💪",
      extra_occhi: "🕶️",
      extra_bocca: "🥸",
    };
    return labels[slotType];
  };

  // Slots to render - filter out extras if we want to show only main slots initially
  const visibleSlots = (Object.keys(SLOT_CONFIG) as SlotType[]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* New SVG potato body - sized to align with slots */}
      <div 
        className="absolute left-1/2 flex items-center justify-center pointer-events-none"
        style={{ 
          width: "80%",
          height: "90%",
          top: "5%",
          transform: "translateX(-50%)"
        }}
      >
        <NewPotatoBody />
      </div>

      {/* Slots */}
      {visibleSlots.map((slotType) => {
        const config = SLOT_CONFIG[slotType];
        const piece = getSlotPiece(slotType);
        const highlighted = isSlotHighlighted(slotType);
        const slotSize = getSlotSize(slotType);
        const slotPosition = getSlotPosition(slotType);
        const mirror = shouldMirror(slotType) && piece;

        return (
          <div
            key={slotType}
            data-slot={slotType}
            className={`absolute flex items-center justify-center transition-all duration-200 ${slotSize} ${
              highlighted
                ? "bg-green-300/60 border-4 border-dashed border-green-500 rounded-full scale-115 shadow-lg shadow-green-300/50 animate-pulse"
                : piece
                ? ""
                : "bg-amber-100/30 border-2 border-dashed border-amber-400/40 rounded-full hover:bg-amber-100/50"
            }`}
            style={slotPosition}
            onDragOver={(e) => {
              e.preventDefault();
              e.dataTransfer.dropEffect = "move";
            }}
            onDrop={(e) => handleSlotDrop(e, slotType)}
          >
          {piece ? (
              <div 
                className={`animate-scale-in flex items-center justify-center w-12 h-12 overflow-hidden rounded-full ${
                  isMouthSlot(slotType) && !isAngryMouth(piece.id) ? "scale-85" : ""
                } ${isAngryMouth(piece.id) ? "scale-x-125" : ""}`}
                style={mirror ? { transform: `scaleX(-1)` } : undefined}
              >
                {isEyeSlot(slotType) ? (
                  /* Eye slots: CSS crop to show only left or right half of double-eye image */
                  <div className="w-10 h-10 overflow-hidden flex items-center justify-center">
                    <div 
                      className="w-[200%] h-full flex-shrink-0"
                      style={{ 
                        transform: slotType === "occhio_sx" ? "translateX(25%)" : "translateX(-25%)"
                      }}
                    >
                      <PieceIcon pieceId={piece.id} size="lg" className="w-full h-full object-contain" />
                    </div>
                  </div>
                ) : (
                  <PieceIcon pieceId={piece.id} size="lg" className="w-full h-full object-contain" />
                )}
              </div>
            ) : (
              <span className="text-lg opacity-40">
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
