import { useState, useCallback } from "react";
import { ShoppingListScene, GAME_TITLE, GAME_SUBTITLE } from "@/data/shoppingListScenes";
import ShoppingListGame from "@/components/games/ShoppingListGame";
import SceneSelector from "@/components/games/SceneSelector";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Eye, MessageCircle, Play, Star } from "lucide-react";

type GameState = "home" | "selecting" | "playing";

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("home");
  const [currentScene, setCurrentScene] = useState<ShoppingListScene | null>(null);
  const [completedScenes, setCompletedScenes] = useState<string[]>([]);
  
  // Contatore esercizi completati per minigioco premio
  // Si resetta quando si esce dalla selezione scene (torna alla home)
  const [exercisesCompleted, setExercisesCompleted] = useState(0);

  const handleSelectScene = (scene: ShoppingListScene) => {
    setCurrentScene(scene);
    setGameState("playing");
  };

  const handleCompleteScene = () => {
    if (currentScene) {
      setCompletedScenes((prev) => [...prev, currentScene.id]);
    }
    setCurrentScene(null);
    setGameState("selecting");
  };

  const handleExerciseComplete = useCallback(() => {
    setExercisesCompleted((prev) => prev + 1);
  }, []);

  const handleExit = () => {
    setCurrentScene(null);
    setGameState("selecting");
  };

  const handleBackToHome = () => {
    // Reset contatore quando si torna alla home
    setExercisesCompleted(0);
    setGameState("home");
  };

  if (gameState === "playing" && currentScene) {
    return (
      <ShoppingListGame
        scene={currentScene}
        onComplete={handleCompleteScene}
        onExit={handleExit}
        completedCount={exercisesCompleted}
        onExerciseComplete={handleExerciseComplete}
      />
    );
  }

  if (gameState === "selecting") {
    return (
      <SceneSelector
        onSelectScene={handleSelectScene}
        onBack={handleBackToHome}
      />
    );
  }

  // Home screen
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-orange-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-green-200/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-md border border-primary/20">
              <Sparkles className="w-4 h-4" />
              Gioco Terapeutico
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              Viaggio nel mondo{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                degli oggetti
              </span>
            </h1>
            
            {/* Subtitle with emojis */}
            <p className="text-lg md:text-xl text-foreground/80 mb-3 max-w-2xl mx-auto font-medium">
              Scegli un posto (cucina, scuola, frutta, verdure…) e cerca gli oggetti giusti!
            </p>
            
            {/* Secondary text for parents/therapists */}
            <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
              Giochi per allenare lessico, comprensione e attenzione con gli oggetti di tutti i giorni.
            </p>

            {/* Object icons decoration */}
            <div className="flex justify-center gap-3 mb-8">
              {["🍎", "✏️", "🥛", "🧼", "👕"].map((emoji, i) => (
                <span
                  key={i}
                  className="text-3xl md:text-4xl animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => setGameState("selecting")}
              size="lg"
              className="gap-3 text-lg md:text-xl px-10 py-7 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-gradient-to-r from-primary to-orange-500"
            >
              <Play className="w-6 h-6 fill-current" />
              Inizia a giocare!
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          Cosa imparerai?
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          <FeatureCard
            icon={<MessageCircle className="w-7 h-7" />}
            title="Lessico"
            description="Nomi di cibi e oggetti quotidiani"
            bgColor="bg-orange-100"
            iconBg="bg-orange-200"
            iconColor="text-orange-600"
          />
          <FeatureCard
            icon={<Brain className="w-7 h-7" />}
            title="Comprensione"
            description="Richieste dirette e indovinelli"
            bgColor="bg-green-100"
            iconBg="bg-green-200"
            iconColor="text-green-600"
          />
          <FeatureCard
            icon={<Eye className="w-7 h-7" />}
            title="Attenzione"
            description="Ricerca visiva tra gli oggetti"
            bgColor="bg-blue-100"
            iconBg="bg-blue-200"
            iconColor="text-blue-600"
          />
          <FeatureCard
            icon={<Sparkles className="w-7 h-7" />}
            title="Memoria"
            description="Ricorda le liste e le sequenze"
            bgColor="bg-amber-100"
            iconBg="bg-amber-200"
            iconColor="text-amber-600"
          />
        </div>
      </section>

      {/* Difficulty Levels */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          Tre livelli di difficoltà
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <LevelCard
            level="Facile"
            stars={1}
            description="Liste brevi, pochi oggetti, nessun trabocchetto"
            bgColor="bg-green-50"
            badgeColor="bg-scene-easy"
          />
          <LevelCard
            level="Medio"
            stars={2}
            description="Più oggetti, indovinelli semplici, più distrattori"
            bgColor="bg-amber-50"
            badgeColor="bg-scene-medium"
          />
          <LevelCard
            level="Difficile"
            stars={3}
            description="Liste lunghe, memoria, indovinelli complessi"
            bgColor="bg-red-50"
            badgeColor="bg-scene-hard"
          />
        </div>
      </section>

      {/* Sample Items */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl border border-border/50">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Alcuni oggetti che troverai
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { emoji: "🍎", bg: "bg-red-100" },
              { emoji: "🥕", bg: "bg-orange-100" },
              { emoji: "🥛", bg: "bg-blue-50" },
              { emoji: "✏️", bg: "bg-yellow-100" },
              { emoji: "🧼", bg: "bg-cyan-100" },
              { emoji: "👕", bg: "bg-pink-100" },
              { emoji: "🥦", bg: "bg-green-100" },
              { emoji: "🍞", bg: "bg-amber-100" },
              { emoji: "🧀", bg: "bg-yellow-100" },
              { emoji: "📚", bg: "bg-indigo-100" },
              { emoji: "🧃", bg: "bg-orange-100" },
              { emoji: "🪥", bg: "bg-teal-100" },
            ].map((item, i) => (
              <div
                key={i}
                className={`w-14 h-14 md:w-18 md:h-18 rounded-2xl ${item.bg} flex items-center justify-center text-3xl md:text-4xl shadow-md hover:scale-110 transition-transform cursor-default border-2 border-white`}
              >
                {item.emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container mx-auto px-4 py-12 md:py-16 text-center">
        <Button
          onClick={() => setGameState("selecting")}
          size="lg"
          className="gap-3 text-lg md:text-xl px-10 py-7 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-gradient-to-r from-primary to-orange-500"
        >
          <Play className="w-6 h-6 fill-current" />
          Gioca ora!
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          {GAME_SUBTITLE}
        </p>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconBg: string;
  iconColor: string;
}

const FeatureCard = ({ icon, title, description, bgColor, iconBg, iconColor }: FeatureCardProps) => (
  <div className={`${bgColor} rounded-2xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] border-2 border-white`}>
    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="font-bold text-base md:text-lg text-foreground mb-1">{title}</h3>
    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

interface LevelCardProps {
  level: string;
  stars: number;
  description: string;
  bgColor: string;
  badgeColor: string;
}

const LevelCard = ({ level, stars, description, bgColor, badgeColor }: LevelCardProps) => (
  <div className={`${bgColor} rounded-3xl p-6 md:p-8 shadow-md text-center hover:shadow-lg transition-all hover:scale-[1.02] border-2 border-white`}>
    <div className={`inline-block px-5 py-2.5 rounded-full ${badgeColor} text-white font-bold mb-4 shadow-md text-lg`}>
      {level}
    </div>
    <div className="flex justify-center gap-1 mb-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Star
          key={i}
          className={`w-7 h-7 ${i < stars ? "text-warning fill-warning" : "text-muted/30"}`}
        />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default Index;
