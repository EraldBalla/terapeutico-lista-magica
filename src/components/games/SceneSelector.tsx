import { useState } from "react";
import { ShoppingListScene, getScenesByDifficulty, GAME_TITLE, GAME_SUBTITLE } from "@/data/shoppingListScenes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star, ArrowLeft, Brain, Lightbulb, List } from "lucide-react";

interface SceneSelectorProps {
  onSelectScene: (scene: ShoppingListScene) => void;
  onBack: () => void;
}

const difficultyLabels = {
  1: { label: "Facile", color: "bg-scene-easy", stars: 1 },
  2: { label: "Medio", color: "bg-scene-medium", stars: 2 },
  3: { label: "Difficile", color: "bg-scene-hard", stars: 3 },
};

const modalitaConfig = {
  semplice: { 
    label: "Lista", 
    icon: List, 
    bgClass: "bg-scene-lista",
    borderClass: "border-scene-lista-border"
  },
  indovinello: { 
    label: "Indovinelli", 
    icon: Lightbulb, 
    bgClass: "bg-scene-indovinello",
    borderClass: "border-scene-indovinello-border"
  },
  memoria: { 
    label: "Memoria", 
    icon: Brain, 
    bgClass: "bg-scene-memoria",
    borderClass: "border-scene-memoria-border"
  },
};

const temaIcons: Record<string, string> = {
  frutta: "🍎",
  verdure: "🥬",
  colazione: "🥣",
  bevande: "🥤",
  scuola: "📚",
  cucina: "🍳",
  bagno: "🛁",
  vestiti: "👕",
  festa: "🎉",
  cibo_generico: "🍽️",
};

const SceneSelector = ({ onSelectScene, onBack }: SceneSelectorProps) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<1 | 2 | 3 | null>(null);

  const scenes = selectedDifficulty 
    ? getScenesByDifficulty(selectedDifficulty) 
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 md:p-8">
      <header className="mb-8">
        <Button variant="ghost" onClick={onBack} className="mb-4 gap-2 hover:bg-white/50">
          <ArrowLeft className="w-4 h-4" />
          Indietro
        </Button>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-4xl shadow-lg">
            🎒
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground">
              {GAME_TITLE}
            </h1>
            <p className="text-muted-foreground mt-1">
              {GAME_SUBTITLE}
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
                  "p-6 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all",
                  "hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/30",
                  "flex flex-col items-center gap-4 border-2 border-transparent hover:border-primary/20"
                )}
              >
                <div className={cn("px-4 py-2 rounded-full text-white font-bold shadow-md", info.color)}>
                  {info.label}
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-8 h-8",
                        i < info.stars ? "text-warning fill-warning" : "text-muted/40"
                      )}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm font-medium">
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
              className="gap-2 bg-white hover:bg-white/80"
            >
              <ArrowLeft className="w-4 h-4" />
              Cambia livello
            </Button>
            <div className={cn(
              "px-4 py-2 rounded-full text-white font-bold shadow-md",
              difficultyLabels[selectedDifficulty].color
            )}>
              {difficultyLabels[selectedDifficulty].label}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scenes.map((scene) => {
              const modalita = modalitaConfig[scene.modalita];
              const ModalitaIcon = modalita.icon;
              const temaIcon = temaIcons[scene.tema] || "🎯";
              
              return (
                <button
                  key={scene.id}
                  onClick={() => onSelectScene(scene)}
                  className={cn(
                    "p-5 rounded-2xl shadow-md hover:shadow-lg transition-all",
                    "hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-primary/30",
                    "text-left border-2",
                    modalita.bgClass,
                    modalita.borderClass
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">
                      {temaIcon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-foreground truncate">{scene.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{scene.instructions}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <span className={cn(
                          "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold",
                          "bg-white/70 text-foreground shadow-sm"
                        )}>
                          <ModalitaIcon className="w-3.5 h-3.5" />
                          {modalita.label}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium bg-white/50 px-2 py-1 rounded-full">
                          {scene.lista_della_spesa.length} oggetti
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
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
