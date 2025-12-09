import { useState } from "react";
import { Piece, PieceCategory, getPiecesByCategory, SlotState, SYMMETRIC_SLOTS, SlotType } from "@/data/facciaBuffa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Crown, Sparkles } from "lucide-react";
import PieceIcon from "./PieceIcon";

interface PiecesBoxProps {
  onDragStart: (piece: Piece) => void;
  onDragEnd: () => void;
  onClickPiece: (piece: Piece) => void;
  slots: SlotState[];
}

const CATEGORY_CONFIG: Record<PieceCategory, { label: string; icon: React.ReactNode }> = {
  faccia: { label: "Faccia", icon: <Eye className="w-4 h-4" /> },
  corpo: { label: "Corpo", icon: <Crown className="w-4 h-4" /> },
  extra: { label: "Extra", icon: <Sparkles className="w-4 h-4" /> },
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

  // Check if piece is already placed - account for symmetric slots
  const isPiecePlaced = (pieceId: string) => {
    return slots.some(s => s.pieceId === pieceId);
  };

  const renderPieces = (category: PieceCategory) => {
    const pieces = getPiecesByCategory(category);
    
    return (
      <div className="grid grid-cols-3 gap-3 p-3">
        {pieces.map((piece) => {
          const placed = isPiecePlaced(piece.id);
          
          return (
            <div
              key={piece.id}
              draggable={!placed}
              onDragStart={(e) => handleDragStart(e, piece)}
              onDragEnd={handleDragEnd}
              onClick={() => !placed && onClickPiece(piece)}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all cursor-pointer touch-manipulation ${
                placed
                  ? "bg-gray-100 opacity-40 cursor-not-allowed"
                  : "bg-white hover:bg-amber-50 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md border-2 border-amber-100 active:border-amber-300"
              }`}
              style={{ 
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                <PieceIcon pieceId={piece.id} size="md" />
              </div>
              <span className="text-[11px] md:text-xs text-center text-muted-foreground font-medium line-clamp-2">
                {piece.label}
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200 overflow-hidden">
      <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as PieceCategory)}>
        <TabsList className="w-full grid grid-cols-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-none h-auto p-1.5">
          {(Object.keys(CATEGORY_CONFIG) as PieceCategory[]).map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="flex items-center gap-1.5 py-3 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg"
            >
              {CATEGORY_CONFIG[cat].icon}
              <span className="hidden sm:inline">{CATEGORY_CONFIG[cat].label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {(Object.keys(CATEGORY_CONFIG) as PieceCategory[]).map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-0 max-h-72 md:max-h-96 overflow-y-auto">
            {renderPieces(cat)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PiecesBox;
