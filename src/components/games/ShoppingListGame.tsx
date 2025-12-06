import { useState, useEffect, useCallback } from "react";
import { ShoppingListScene, ShoppingItem } from "@/data/shoppingListScenes";
import { getMemoryDisplayTime } from "@/data/gameSettings";
import ItemCard from "./ItemCard";
import { ShoppingCart, Check, X, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ShoppingListGameProps {
  scene: ShoppingListScene;
  onComplete: () => void;
  onExit: () => void;
}

const ShoppingListGame = ({ scene, onComplete, onExit }: ShoppingListGameProps) => {
  const [collectedItems, setCollectedItems] = useState<string[]>([]);
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [shakeItemId, setShakeItemId] = useState<string | null>(null);
  const [cartBounce, setCartBounce] = useState(false);
  const [showList, setShowList] = useState(true);
  const [memoryPhase, setMemoryPhase] = useState<"viewing" | "playing">("viewing");
  
  // Calcola il tempo di memorizzazione in base SOLO a difficulty_tier
  const memoryTimeMs = getMemoryDisplayTime(scene.difficulty_tier);
  const memoryTimeSeconds = Math.ceil(memoryTimeMs / 1000);
  const [memoryTimer, setMemoryTimer] = useState(memoryTimeSeconds);

  const isComplete = collectedItems.length === scene.lista_della_spesa.length;

  // Modalità memoria: timer per nascondere la lista
  useEffect(() => {
    if (scene.modalita === "memoria" && memoryPhase === "viewing") {
      if (memoryTimer > 0) {
        const timer = setTimeout(() => setMemoryTimer((t) => t - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setMemoryPhase("playing");
        setShowList(false);
      }
    }
  }, [scene.modalita, memoryPhase, memoryTimer]);

  // Reset timer quando cambia scena
  useEffect(() => {
    setMemoryTimer(memoryTimeSeconds);
    setMemoryPhase("viewing");
    setShowList(true);
    setCollectedItems([]);
    setCurrentRiddleIndex(0);
  }, [scene.id, memoryTimeSeconds]);

  // Shuffle oggetti disponibili
  const shuffledItems = useCallback(() => {
    return [...scene.oggetti_disponibili].sort(() => Math.random() - 0.5);
  }, [scene.oggetti_disponibili]);

  const [displayItems] = useState(shuffledItems);

  const handleItemClick = (item: ShoppingItem) => {
    if (collectedItems.includes(item.id)) return;
    if (isComplete) return;

    const isCorrect = scene.lista_della_spesa.some((i) => i.id === item.id);

    if (scene.modalita === "indovinello") {
      // Per modalità indovinello, deve essere l'oggetto corrente
      const currentItem = scene.lista_della_spesa[currentRiddleIndex];
      if (item.id === currentItem.id) {
        handleCorrectItem(item);
        if (currentRiddleIndex < scene.lista_della_spesa.length - 1) {
          setCurrentRiddleIndex((i) => i + 1);
        }
      } else {
        handleWrongItem(item);
      }
    } else {
      if (isCorrect) {
        handleCorrectItem(item);
      } else {
        handleWrongItem(item);
      }
    }
  };

  const handleCorrectItem = (item: ShoppingItem) => {
    setCollectedItems((prev) => [...prev, item.id]);
    setCartBounce(true);
    setFeedback({ type: "success", message: "Giusto! 🎉" });
    setTimeout(() => {
      setFeedback(null);
      setCartBounce(false);
    }, 1500);
  };

  const handleWrongItem = (item: ShoppingItem) => {
    setShakeItemId(item.id);
    setFeedback({ type: "error", message: scene.error_message });
    setTimeout(() => {
      setShakeItemId(null);
      setFeedback(null);
    }, 1000);
  };

  const getCurrentRiddle = (): string | null => {
    if (scene.modalita !== "indovinello") return null;
    if (currentRiddleIndex >= scene.lista_della_spesa.length) return null;
    return scene.lista_della_spesa[currentRiddleIndex].descrizione || null;
  };

  return (
    <div className="min-h-screen bg-game-bg p-4 md:p-6">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">{scene.title}</h1>
          <p className="text-sm text-muted-foreground mt-1">{scene.instructions}</p>
        </div>
        <Button variant="outline" onClick={onExit} className="text-muted-foreground">
          Esci
        </Button>
      </header>

      {/* Modalità memoria: fase di visualizzazione */}
      {scene.modalita === "memoria" && memoryPhase === "viewing" && (
        <div className="fixed inset-0 bg-background/95 flex flex-col items-center justify-center z-50 p-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Memorizza la lista!</h2>
          <div className="flex items-center gap-2 mb-6">
            <Eye className="w-6 h-6 text-accent" />
            <span className="text-4xl font-bold text-primary">{memoryTimer}</span>
          </div>
          <div className="bg-game-list-bg rounded-2xl p-6 max-w-md">
            <div className="grid grid-cols-3 gap-4">
              {scene.lista_della_spesa.map((item) => (
                <div key={item.id} className="flex flex-col items-center gap-2">
                  <span className="text-4xl">{item.immagine}</span>
                  <span className="text-sm font-semibold text-foreground">{item.nome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Lista della spesa / Indovinello */}
        <aside className="lg:col-span-1 order-2 lg:order-1">
          <div className="bg-game-list-bg rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                📝 {scene.modalita === "indovinello" ? "Indovinello" : "Lista"}
              </h2>
              {scene.modalita === "memoria" && memoryPhase === "playing" && (
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  🧠 Ricorda!
                </span>
              )}
            </div>

            {scene.modalita === "indovinello" ? (
              <div className="space-y-3">
                {!isComplete && getCurrentRiddle() && (
                  <div className="bg-card p-4 rounded-xl border-2 border-accent/30">
                    <p className="text-foreground font-medium italic leading-relaxed">
                      "{getCurrentRiddle()}"
                    </p>
                  </div>
                )}
                <div className="text-sm text-muted-foreground text-center">
                  {currentRiddleIndex + 1} di {scene.lista_della_spesa.length}
                </div>
              </div>
            ) : (
              showList && (
                <ul className="space-y-2">
                  {scene.lista_della_spesa.map((item) => {
                    const isCollected = collectedItems.includes(item.id);
                    return (
                      <li
                        key={item.id}
                        className={cn(
                          "flex items-center gap-3 p-2 rounded-xl transition-all",
                          isCollected
                            ? "bg-success/20 line-through opacity-60"
                            : "bg-card"
                        )}
                      >
                        <span className="text-2xl">{item.immagine}</span>
                        <span className="font-semibold text-foreground">{item.nome}</span>
                        {isCollected && <Check className="w-5 h-5 text-success ml-auto" />}
                      </li>
                    );
                  })}
                </ul>
              )
            )}

            {/* Contatore */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="text-muted-foreground">Progresso</span>
                <span className="text-primary">
                  {collectedItems.length} / {scene.lista_della_spesa.length}
                </span>
              </div>
              <div className="mt-2 h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{
                    width: `${(collectedItems.length / scene.lista_della_spesa.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Griglia oggetti - ora usa ItemCard con TTS */}
        <main className="lg:col-span-2 order-1 lg:order-2">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {displayItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                isCollected={collectedItems.includes(item.id)}
                isShaking={shakeItemId === item.id}
                isComplete={isComplete}
                ttsEnabled={true}
                onSelect={handleItemClick}
              />
            ))}
          </div>
        </main>

        {/* Carrello */}
        <aside className="lg:col-span-1 order-3">
          <div className={cn("bg-game-cart-bg rounded-2xl p-4 shadow-lg", cartBounce && "animate-cart-bounce")}>
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
              <ShoppingCart className="w-6 h-6 text-primary" />
              Carrello
            </h2>

            {collectedItems.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                Il carrello è vuoto
              </p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {collectedItems.map((itemId) => {
                  const item = scene.lista_della_spesa.find((i) => i.id === itemId);
                  if (!item) return null;
                  return (
                    <div
                      key={itemId}
                      className="flex items-center gap-1 bg-card px-3 py-2 rounded-xl animate-bounce-in"
                    >
                      <span className="text-2xl">{item.immagine}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Feedback popup */}
      {feedback && (
        <div
          className={cn(
            "fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-4 rounded-2xl shadow-xl",
            "flex items-center gap-3 animate-bounce-in z-50",
            feedback.type === "success"
              ? "bg-success text-success-foreground"
              : "bg-destructive text-destructive-foreground"
          )}
        >
          {feedback.type === "success" ? (
            <Check className="w-6 h-6" />
          ) : (
            <X className="w-6 h-6" />
          )}
          <span className="font-bold">{feedback.message}</span>
        </div>
      )}

      {/* Schermata di completamento */}
      {isComplete && (
        <div className="fixed inset-0 bg-background/90 flex flex-col items-center justify-center z-50 animate-bounce-in">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl max-w-md mx-4 text-center">
            <div className="text-6xl mb-4 animate-float">🎉</div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              {scene.success_message}
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {scene.lista_della_spesa.map((item) => (
                <span key={item.id} className="text-3xl">
                  {item.immagine}
                </span>
              ))}
            </div>
            <Button
              onClick={onComplete}
              size="lg"
              className="gap-2 text-lg font-bold rounded-xl"
            >
              Avanti
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingListGame;
