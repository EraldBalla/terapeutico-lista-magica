import { Button } from "@/components/ui/button";
import { GameMode, Turn, Mission } from "@/data/facciaBuffa";
import { RotateCcw, Shuffle, Users, Gamepad2, Target, ArrowRight } from "lucide-react";

interface GameModePanelProps {
  mode: GameMode;
  onChangeMode: (mode: GameMode) => void;
  currentTurn: Turn;
  onPassTurn: () => void;
  onResetFace: () => void;
  onShufflePieces?: () => void;
  currentMission?: Mission | null;
}

const MODE_CONFIG: Record<GameMode, { label: string; icon: React.ReactNode; color: string }> = {
  libero: { label: "Gioco libero", icon: <Gamepad2 className="w-4 h-4" />, color: "bg-green-100 text-green-700 border-green-200" },
  turni: { label: "A turno", icon: <Users className="w-4 h-4" />, color: "bg-blue-100 text-blue-700 border-blue-200" },
  istruzioni: { label: "Segui le istruzioni", icon: <Target className="w-4 h-4" />, color: "bg-purple-100 text-purple-700 border-purple-200" },
};

const GameModePanel = ({
  mode,
  onChangeMode,
  currentTurn,
  onPassTurn,
  onResetFace,
  onShufflePieces,
  currentMission,
}: GameModePanelProps) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-orange-100 space-y-4">
      {/* Mode selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        {(Object.keys(MODE_CONFIG) as GameMode[]).map((m) => {
          const config = MODE_CONFIG[m];
          const isActive = mode === m;
          
          return (
            <button
              key={m}
              onClick={() => onChangeMode(m)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                isActive
                  ? config.color + " shadow-sm"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {config.icon}
              <span className="hidden sm:inline">{config.label}</span>
            </button>
          );
        })}
      </div>

      {/* Turn indicator for "turni" mode */}
      {mode === "turni" && (
        <div className="flex items-center justify-between bg-blue-50 rounded-xl p-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{currentTurn === "bambino" ? "👶" : "👨‍👩‍👧"}</span>
            <span className="font-bold text-blue-700">
              Tocca al {currentTurn === "bambino" ? "bambino" : "genitore"}
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onPassTurn}
            className="gap-1 border-blue-300 text-blue-700 hover:bg-blue-100"
          >
            <ArrowRight className="w-4 h-4" />
            Passa il turno
          </Button>
        </div>
      )}

      {/* Mission display for "istruzioni" mode */}
      {mode === "istruzioni" && currentMission && (
        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
          <div className="flex items-start gap-2">
            <Target className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-purple-800 text-sm mb-1">Missione:</p>
              <p className="text-purple-700 leading-relaxed">{currentMission.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-2 justify-center">
        <Button
          variant="outline"
          size="sm"
          onClick={onResetFace}
          className="gap-2 border-orange-200 text-orange-700 hover:bg-orange-50"
        >
          <RotateCcw className="w-4 h-4" />
          Nuova faccia
        </Button>
        {onShufflePieces && (
          <Button
            variant="outline"
            size="sm"
            onClick={onShufflePieces}
            className="gap-2 border-gray-200 text-gray-600 hover:bg-gray-50"
          >
            <Shuffle className="w-4 h-4" />
            Mescola
          </Button>
        )}
      </div>
    </div>
  );
};

export default GameModePanel;
