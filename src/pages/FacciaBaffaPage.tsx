import { useState } from "react";
import WelcomeScreen from "@/components/games/faccia-buffa/WelcomeScreen";
import GameScreen from "@/components/games/faccia-buffa/GameScreen";

type ScreenState = "welcome" | "game";

interface FacciaBaffaPageProps {
  onBack: () => void;
}

const FacciaBaffaPage = ({ onBack }: FacciaBaffaPageProps) => {
  const [screen, setScreen] = useState<ScreenState>("welcome");

  if (screen === "game") {
    return <GameScreen onBack={() => setScreen("welcome")} />;
  }

  return <WelcomeScreen onStart={() => setScreen("game")} onBack={onBack} />;
};

export default FacciaBaffaPage;
