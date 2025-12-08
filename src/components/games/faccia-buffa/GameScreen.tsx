import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PotatoCharacter from "./PotatoCharacter";
import PiecesBox from "./PiecesBox";
import GameModePanel from "./GameModePanel";
import ParentTipsAccordion from "./ParentTipsAccordion";
import {
  SlotType,
  SlotState,
  GameMode,
  Turn,
  Mission,
  Piece,
  PieceType,
  INITIAL_SLOTS,
  SLOT_CONFIG,
  getRandomMission,
  getRandomSuccessMessage,
  getRandomMissionMessage,
  getPieceById,
} from "@/data/facciaBuffa";

interface GameScreenProps {
  onBack: () => void;
}

// Required slots for a "complete" face
const REQUIRED_SLOTS: SlotType[] = ["occhio_sx", "occhio_dx", "naso", "bocca"];

const GameScreen = ({ onBack }: GameScreenProps) => {
  const [slots, setSlots] = useState<SlotState[]>([...INITIAL_SLOTS]);
  const [mode, setMode] = useState<GameMode>("libero");
  const [currentTurn, setCurrentTurn] = useState<Turn>("bambino");
  const [currentMission, setCurrentMission] = useState<Mission | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [draggedPiece, setDraggedPiece] = useState<{ id: string; type: PieceType } | null>(null);

  // Initialize mission when mode changes to "istruzioni"
  useEffect(() => {
    if (mode === "istruzioni") {
      setCurrentMission(getRandomMission(1));
    } else {
      setCurrentMission(null);
    }
  }, [mode]);

  // Clear feedback after 4 seconds
  useEffect(() => {
    if (feedbackMessage) {
      const timer = setTimeout(() => setFeedbackMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [feedbackMessage]);

  // Check mission completion
  const checkMissionComplete = useCallback((currentSlots: SlotState[], mission: Mission): boolean => {
    return mission.conditions.every((condition) => {
      // Find slots that accept this piece type
      const matchingSlotTypes = (Object.keys(SLOT_CONFIG) as SlotType[]).filter(
        (slotType) => SLOT_CONFIG[slotType].acceptedTypes.includes(condition.type)
      );

      // Check if any matching slot has the required piece
      return matchingSlotTypes.some((slotType) => {
        const slot = currentSlots.find((s) => s.slot === slotType);
        if (!slot?.pieceId) return false;

        if (condition.pieceId) {
          return slot.pieceId === condition.pieceId;
        }
        
        // If no specific pieceId, just check if any piece of that type is placed
        const piece = getPieceById(slot.pieceId);
        return piece?.type === condition.type;
      });
    });
  }, []);

  // Check if face is complete (all required slots filled)
  const checkFaceComplete = useCallback((currentSlots: SlotState[]): boolean => {
    return REQUIRED_SLOTS.every((slotType) => {
      const slot = currentSlots.find((s) => s.slot === slotType);
      return slot?.pieceId !== null;
    });
  }, []);

  // Handle piece drop on slot
  const handleDropPiece = useCallback((slotType: SlotType, pieceId: string) => {
    setSlots((prev) => {
      // Remove piece from any other slot if it was there
      const newSlots = prev.map((s) => ({
        ...s,
        pieceId: s.pieceId === pieceId ? null : s.pieceId,
      }));

      // Place piece in new slot
      const updatedSlots = newSlots.map((s) =>
        s.slot === slotType ? { ...s, pieceId } : s
      );

      // Check for feedback
      setTimeout(() => {
        if (mode === "istruzioni" && currentMission) {
          if (checkMissionComplete(updatedSlots, currentMission)) {
            setFeedbackMessage(getRandomMissionMessage());
            // Load next mission after delay
            setTimeout(() => {
              setCurrentMission(getRandomMission());
              handleResetFace();
            }, 3000);
          }
        } else if (mode === "libero" && checkFaceComplete(updatedSlots)) {
          setFeedbackMessage(getRandomSuccessMessage());
        }
      }, 100);

      return updatedSlots;
    });
    setDraggedPiece(null);
  }, [mode, currentMission, checkMissionComplete, checkFaceComplete]);

  // Handle click-to-place (auto-find slot)
  const handleClickPiece = useCallback((piece: Piece) => {
    // Find first empty slot that accepts this piece type
    const availableSlotTypes = (Object.keys(SLOT_CONFIG) as SlotType[]).filter(
      (slotType) => SLOT_CONFIG[slotType].acceptedTypes.includes(piece.type)
    );

    const emptySlot = availableSlotTypes.find((slotType) => {
      const slot = slots.find((s) => s.slot === slotType);
      return slot?.pieceId === null;
    });

    if (emptySlot) {
      handleDropPiece(emptySlot, piece.id);
    } else {
      // Replace the first slot of this type
      const firstSlot = availableSlotTypes[0];
      if (firstSlot) {
        handleDropPiece(firstSlot, piece.id);
      }
    }
  }, [slots, handleDropPiece]);

  const handleResetFace = useCallback(() => {
    setSlots([...INITIAL_SLOTS]);
    setFeedbackMessage(null);
  }, []);

  const handleChangeMode = useCallback((newMode: GameMode) => {
    setMode(newMode);
    handleResetFace();
  }, [handleResetFace]);

  const handlePassTurn = useCallback(() => {
    setCurrentTurn((prev) => (prev === "bambino" ? "genitore" : "bambino"));
  }, []);

  const handleDragStart = useCallback((piece: Piece) => {
    setDraggedPiece({ id: piece.id, type: piece.type });
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggedPiece(null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-yellow-200/40 to-orange-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-pink-200/40 to-purple-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 py-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="rounded-full bg-white/70 hover:bg-white shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">
            Faccia <span className="text-orange-500">Buffa</span>
          </h1>
        </div>

        {/* Feedback area - fixed height */}
        <div className="w-full flex justify-center mb-4">
          <div className="min-h-[56px] flex items-center justify-center">
            {feedbackMessage && (
              <div className="px-5 py-3 rounded-full bg-green-100 text-green-800 font-medium text-center shadow-md animate-bounce-in">
                {feedbackMessage}
              </div>
            )}
          </div>
        </div>

        {/* Main content - responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Character zone */}
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-b from-sky-100 to-teal-50 rounded-3xl p-6 md:p-8 shadow-lg border-2 border-sky-100 w-full max-w-sm">
              <PotatoCharacter
                slots={slots}
                onDropPiece={handleDropPiece}
                draggedPiece={draggedPiece}
              />
            </div>
          </div>

          {/* Pieces box */}
          <div className="flex flex-col gap-4">
            <PiecesBox
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onClickPiece={handleClickPiece}
              slots={slots}
            />
          </div>
        </div>

        {/* Game mode panel */}
        <GameModePanel
          mode={mode}
          onChangeMode={handleChangeMode}
          currentTurn={currentTurn}
          onPassTurn={handlePassTurn}
          onResetFace={handleResetFace}
          currentMission={currentMission}
        />

        {/* Parent tips */}
        <div className="mt-6">
          <ParentTipsAccordion />
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
