import { useState } from "react";
import { ShoppingListScene } from "@/data/shoppingListScenes";
import { AgeBand, DEFAULT_AGE_BAND } from "@/data/gameSettings";
import ShoppingListGame from "@/components/games/ShoppingListGame";
import SceneSelector from "@/components/games/SceneSelector";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles, Brain, Eye, MessageCircle } from "lucide-react";

type GameState = "home" | "selecting" | "playing";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("home");
  const [currentScene, setCurrentScene] = useState<ShoppingListScene | null>(null);
  const [currentAgeBand, setCurrentAgeBand] = useState<AgeBand>(DEFAULT_AGE_BAND);
  const [completedScenes, setCompletedScenes] = useState<string[]>([]);

  const handleSelectScene = (scene: ShoppingListScene, ageBand: AgeBand) => {
    setCurrentScene(scene);
    setCurrentAgeBand(ageBand);
    setGameState("playing");
  };

  const handleCompleteScene = () => {
    if (currentScene) {
      setCompletedScenes((prev) => [...prev, currentScene.id]);
    }
    setCurrentScene(null);
    setGameState("selecting");
  };

  const handleExit = () => {
    setCurrentScene(null);
    setGameState("selecting");
  };

  if (gameState === "playing" && currentScene) {
    return (
      <ShoppingListGame
        scene={currentScene}
        ageBand={currentAgeBand}
        onComplete={handleCompleteScene}
        onExit={handleExit}
      />
    );
  }

  if (gameState === "selecting") {
    return (
      <SceneSelector
        onSelectScene={handleSelectScene}
        onBack={() => setGameState("home")}
      />
    );
  }

  // Home screen
  return (
    <div className="min-h-screen bg-game-bg">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Gioco Terapeutico
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
              La lista della{" "}
              <span className="text-primary">spesa</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Riempi il carrello scegliendo gli oggetti corretti! 
              Un gioco divertente per imparare nuove parole e allenare la memoria.
            </p>

            <Button
              onClick={() => setGameState("selecting")}
              size="lg"
              className="gap-3 text-lg px-8 py-6 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <ShoppingCart className="w-6 h-6" />
              Inizia a giocare!
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          Cosa imparerai?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <FeatureCard
            icon={<MessageCircle className="w-8 h-8" />}
            title="Lessico"
            description="Nomi di cibi e oggetti quotidiani"
            color="bg-primary/10 text-primary"
          />
          <FeatureCard
            icon={<Brain className="w-8 h-8" />}
            title="Comprensione"
            description="Richieste dirette e indovinelli"
            color="bg-secondary/10 text-secondary"
          />
          <FeatureCard
            icon={<Eye className="w-8 h-8" />}
            title="Attenzione"
            description="Ricerca visiva tra gli oggetti"
            color="bg-accent/10 text-accent"
          />
          <FeatureCard
            icon={<Sparkles className="w-8 h-8" />}
            title="Memoria"
            description="Ricorda le liste e le sequenze"
            color="bg-warning/10 text-warning"
          />
        </div>
      </section>

      {/* Difficulty levels preview */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          Tre livelli di difficoltà
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <LevelCard
            level="Facile"
            emoji="🌟"
            description="Liste brevi, pochi oggetti, nessun trabocchetto"
            color="bg-success"
          />
          <LevelCard
            level="Medio"
            emoji="⭐⭐"
            description="Più oggetti, indovinelli semplici, più distrattori"
            color="bg-warning"
          />
          <LevelCard
            level="Difficile"
            emoji="🌟🌟🌟"
            description="Liste lunghe, memoria, indovinelli complessi"
            color="bg-destructive"
          />
        </div>
      </section>

      {/* Sample items */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Alcuni oggetti che troverai
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["🍎", "🍌", "🥛", "🍞", "🧀", "🥕", "🍅", "🥚", "🍪", "🍕", "🍦", "🧃"].map((emoji, i) => (
              <div
                key={i}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-muted flex items-center justify-center text-3xl md:text-4xl shadow-md hover:scale-110 transition-transform cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <Button
          onClick={() => setGameState("selecting")}
          size="lg"
          className="gap-3 text-lg px-8 py-6 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <ShoppingCart className="w-6 h-6" />
          Gioca ora!
        </Button>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => (
  <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

interface LevelCardProps {
  level: string;
  emoji: string;
  description: string;
  color: string;
}

const LevelCard = ({ level, emoji, description, color }: LevelCardProps) => (
  <div className="bg-card rounded-2xl p-6 shadow-md text-center">
    <div className={`inline-block px-4 py-2 rounded-full ${color} text-primary-foreground font-bold mb-4`}>
      {level}
    </div>
    <div className="text-2xl mb-3">{emoji}</div>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default Index;
