import { useState, useCallback } from "react";
import { SOUND_ITEMS, SoundItem } from "@/data/sounds";
import WelcomeScreen from "@/components/games/sound-machine/WelcomeScreen";
import SoundGameScreen, { Recording } from "@/components/games/sound-machine/SoundGameScreen";
import SummaryScreen from "@/components/games/sound-machine/SummaryScreen";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Step = "welcome" | "game" | "summary";

interface MacchinaSuoniPageProps {
  onBack: () => void;
  onOpenArchive: () => void;
}

const MacchinaSuoniPage = ({ onBack, onOpenArchive }: MacchinaSuoniPageProps) => {
  const [step, setStep] = useState<Step>("welcome");
  const [sounds, setSounds] = useState<SoundItem[]>([]);
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);

  // Create a new session in the database
  const createSession = async (childName: string): Promise<string | null> => {
    try {
      const { data, error } = await supabase
        .from("sound_machine_sessions")
        .insert({
          child_name: childName || null,
        })
        .select()
        .single();

      if (error) {
        console.error("Error creating session:", error);
        toast.error("Archivio non disponibile, giochiamo senza salvare");
        return null;
      }

      return data.id;
    } catch (error) {
      console.error("Error creating session:", error);
      toast.error("Archivio non disponibile, giochiamo senza salvare");
      return null;
    }
  };

  // Shuffle and pick sounds for the game
  const initializeGame = useCallback(async (childName: string) => {
    // Create session first
    const newSessionId = await createSession(childName);
    setSessionId(newSessionId);

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
    // Reset and start new game without going through welcome
    setSessionId(null);
    setRecordings([]);
    setStep("welcome");
  }, []);

  const handleExitGame = useCallback(() => {
    setStep("welcome");
    setSessionId(null);
    setRecordings([]);
  }, []);

  if (step === "welcome") {
    return (
      <WelcomeScreen
        onStart={initializeGame}
        onBack={onBack}
        onOpenArchive={onOpenArchive}
      />
    );
  }

  if (step === "game") {
    return (
      <SoundGameScreen
        sounds={sounds}
        recordings={recordings}
        sessionId={sessionId}
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
        sessionId={sessionId}
        onReplay={handleReplay}
        onHome={onBack}
        onOpenArchive={onOpenArchive}
      />
    );
  }

  return null;
};

export default MacchinaSuoniPage;
