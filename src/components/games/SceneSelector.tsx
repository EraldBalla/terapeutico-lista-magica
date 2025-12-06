import { useState } from "react";
import { ShoppingListScene, getScenesByDifficulty } from "@/data/shoppingListScenes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";

interface SceneSelectorProps {
  onSelectScene: (scene: ShoppingListScene) => void;
  onBack: () => void;
}

const difficultyLabels = {
  1: { label: "Facile", color: "bg-success", stars: 1 },
  2: { label: "Medio", color: "bg-warning", stars: 2 },
  3: { label: "Difficile", color: "bg-destructive", stars: 3 },
};

const SceneSelector = ({ onSelectScene, onBack }: SceneSelectorProps) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<1 | 2 | 3 | null>(null);

  const scenes = selectedDifficulty 
    ? getScenesByDifficulty(selectedDifficulty) 
    : [];

  return (
    <div className="min-h-screen bg-game-bg p-4 md:p-8">
      <header className="mb-8">
        <Button variant="ghost" onClick={onBack} className="mb-4 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Indietro
        </Button>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-4xl shadow-lg">
            🛒
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">
              La lista della spesa
            </h1>
            <p className="text-muted-foreground mt-1">
              Scegli il livello e inizia a giocare!
            </p>
          </div>
        </div>
      </header>

      {/* Selezione difficoltà */}
      {!selectedDifficulty && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {([1, 2, 3] as const).map((tier) => {
            const info = difficultyLabels[tier];
            const tierScenes = getScenesByDifficulty(tier);
            return (
              <button
                key={tier}
                onClick={() => setSelectedDifficulty(tier)}
                className={cn(
                  "p-6 rounded-3xl bg-card shadow-lg hover:shadow-xl transition-all",
                  "hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/30",
                  "flex flex-col items-center gap-4"
                )}
              >
                <div className={cn("px-4 py-2 rounded-full text-primary-foreground font-bold", info.color)}>
                  {info.label}
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-8 h-8",
                        i < info.stars ? "text-warning fill-warning" : "text-muted"
                      )}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  {tierScenes.length} scene disponibili
                </p>
              </button>
            );
          })}
        </div>
      )}

      {/* Lista scene per difficoltà selezionata */}
      {selectedDifficulty && (
        <>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Button
              variant="outline"
              onClick={() => setSelectedDifficulty(null)}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Cambia livello
            </Button>
            <div className={cn(
              "px-4 py-2 rounded-full text-primary-foreground font-bold",
              difficultyLabels[selectedDifficulty].color
            )}>
              {difficultyLabels[selectedDifficulty].label}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scenes.map((scene) => (
              <button
                key={scene.id}
                onClick={() => onSelectScene(scene)}
                className={cn(
                  "p-6 rounded-2xl bg-card shadow-md hover:shadow-lg transition-all",
                  "hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-primary/30",
                  "text-left"
                )}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">
                    <ShoppingCart className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground">{scene.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{scene.instructions}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-muted font-medium">
                        {scene.modalita === "semplice" && "📋 Lista"}
                        {scene.modalita === "indovinello" && "🧩 Indovinelli"}
                        {scene.modalita === "memoria" && "🧠 Memoria"}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {scene.lista_della_spesa.length} oggetti
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {scenes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nessuna scena disponibile per questa difficoltà.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SceneSelector;
