import { useState } from "react";
import { Piece, PieceCategory, getPiecesByCategory, PieceType, SLOT_CONFIG, SlotType, SlotState } from "@/data/facciaBuffa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PiecesBoxProps {
  onDragStart: (piece: Piece) => void;
  onDragEnd: () => void;
  onClickPiece: (piece: Piece) => void;
  slots: SlotState[];
}

const CATEGORY_LABELS: Record<PieceCategory, { label: string; emoji: string }> = {
  faccia: { label: "Faccia", emoji: "👀" },
  corpo: { label: "Corpo", emoji: "🎩" },
  extra: { label: "Extra", emoji: "⭐" },
};

const PiecesBox = ({ onDragStart, onDragEnd, onClickPiece, slots }: PiecesBoxProps) => {
  const [activeCategory, setActiveCategory] = useState<PieceCategory>("faccia");

  const handleDragStart = (e: React.DragEvent, piece: Piece) => {
    e.dataTransfer.setData("pieceId", piece.id);
    e.dataTransfer.setData("pieceType", piece.type);
    e.dataTransfer.effectAllowed = "move";
    onDragStart(piece);
  };

  const handleDragEnd = () => {
    onDragEnd();
  };

  // Check if piece is already placed
  const isPiecePlaced = (pieceId: string) => {
    return slots.some(s => s.pieceId === pieceId);
  };

  const renderPieces = (category: PieceCategory) => {
    const pieces = getPiecesByCategory(category);
    
    return (
      <div className="grid grid-cols-3 gap-2 p-2">
        {pieces.map((piece) => {
          const placed = isPiecePlaced(piece.id);
          
          return (
            <div
              key={piece.id}
              draggable={!placed}
              onDragStart={(e) => handleDragStart(e, piece)}
              onDragEnd={handleDragEnd}
              onClick={() => !placed && onClickPiece(piece)}
              className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all cursor-pointer ${
                placed
                  ? "bg-gray-100 opacity-40 cursor-not-allowed"
                  : "bg-white hover:bg-orange-50 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md border border-orange-100"
              }`}
            >
              <span className="text-3xl md:text-4xl">{piece.image}</span>
              <span className="text-xs text-center text-muted-foreground font-medium line-clamp-2">
                {piece.label}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
      <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as PieceCategory)}>
        <TabsList className="w-full grid grid-cols-3 bg-orange-50 rounded-none h-auto p-1">
          {(Object.keys(CATEGORY_LABELS) as PieceCategory[]).map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="flex items-center gap-1.5 py-2.5 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg"
            >
              <span>{CATEGORY_LABELS[cat].emoji}</span>
              <span className="hidden sm:inline">{CATEGORY_LABELS[cat].label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {(Object.keys(CATEGORY_LABELS) as PieceCategory[]).map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-0 max-h-60 md:max-h-80 overflow-y-auto">
            {renderPieces(cat)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PiecesBox;
