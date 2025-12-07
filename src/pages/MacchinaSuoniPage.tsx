import { useState, useCallback } from "react";
import { SOUND_ITEMS, SoundItem } from "@/data/sounds";
import WelcomeScreen from "@/components/games/sound-machine/WelcomeScreen";
import SoundGameScreen, { Recording } from "@/components/games/sound-machine/SoundGameScreen";
import SummaryScreen from "@/components/games/sound-machine/SummaryScreen";

type Step = "welcome" | "game" | "summary";

interface MacchinaSuoniPageProps {
  onBack: () => void;
}

const MacchinaSuoniPage = ({ onBack }: MacchinaSuoniPageProps) => {
  const [step, setStep] = useState<Step>("welcome");
  const [sounds, setSounds] = useState<SoundItem[]>([]);
  const [recordings, setRecordings] = useState<Recording[]>([]);

  // Shuffle and pick sounds for the game
  const initializeGame = useCallback(() => {
    // Shuffle all sounds and pick a subset (e.g., 8-10 sounds)
    const shuffled = [...SOUND_ITEMS].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(10, shuffled.length));
    setSounds(selected);
    setRecordings([]);
    setStep("game");
  }, []);

  const handleRecordingComplete = useCallback((recording: Recording) => {
    setRecordings((prev) => {
      // Replace existing recording for this sound, or add new one
      const existing = prev.findIndex((r) => r.soundId === recording.soundId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = recording;
        return updated;
      }
      return [...prev, recording];
    });
  }, []);

  const handleGameComplete = useCallback(() => {
    setStep("summary");
  }, []);

  const handleReplay = useCallback(() => {
    initializeGame();
  }, [initializeGame]);

  const handleExitGame = useCallback(() => {
    setStep("welcome");
  }, []);

  if (step === "welcome") {
    return <WelcomeScreen onStart={initializeGame} onBack={onBack} />;
  }

  if (step === "game") {
    return (
      <SoundGameScreen
        sounds={sounds}
        recordings={recordings}
        onRecordingComplete={handleRecordingComplete}
        onComplete={handleGameComplete}
        onBack={handleExitGame}
      />
    );
  }

  if (step === "summary") {
    return (
      <SummaryScreen
        sounds={sounds}
        recordings={recordings}
        onReplay={handleReplay}
        onHome={onBack}
      />
    );
  }

  return null;
};

export default MacchinaSuoniPage;
