import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { SoundItem } from "@/data/sounds";
import { Recording } from "./SoundGameScreen";
import { Play, Download, RotateCcw, Home, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface SummaryScreenProps {
  sounds: SoundItem[];
  recordings: Recording[];
  onReplay: () => void;
  onHome: () => void;
}

const SummaryScreen = ({ sounds, recordings, onReplay, onHome }: SummaryScreenProps) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (recording: Recording) => {
    if (playingId === recording.soundId) {
      // Stop current
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPlayingId(null);
      return;
    }

    // Stop previous
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(recording.url);
    audioRef.current = audio;

    audio.onplay = () => setPlayingId(recording.soundId);
    audio.onended = () => setPlayingId(null);
    audio.onerror = () => setPlayingId(null);

    audio.play();
  };

  const handleDownload = (recording: Recording, soundLabel: string) => {
    const link = document.createElement("a");
    link.href = recording.url;
    link.download = `${soundLabel.toLowerCase().replace(/\s/g, "_")}.webm`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getRecordingForSound = (soundId: string) => {
    return recordings.find((r) => r.soundId === soundId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 p-4 md:p-6">
      {/* Confetti effect */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.5}s`,
              animationDuration: `${1.5 + Math.random() * 0.5}s`,
            }}
          >
            {["🎵", "🎶", "🎤", "✨", "🌟"][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-7xl mb-4 animate-float">🎉</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            Bravissimo!
          </h1>
          <p className="text-lg text-muted-foreground">
            Hai giocato con <span className="font-bold text-primary">{sounds.length}</span> suoni!
          </p>
        </div>

        {/* Recordings list */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="text-2xl">🎧</span>
            Le tue registrazioni
          </h2>

          <div className="space-y-3">
            {sounds.map((sound) => {
              const recording = getRecordingForSound(sound.id);
              const isPlaying = playingId === sound.id;

              return (
                <div
                  key={sound.id}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl transition-all",
                    recording ? "bg-green-50 border-2 border-green-100" : "bg-gray-50 border-2 border-gray-100"
                  )}
                >
                  <span className="text-3xl">{sound.image}</span>
                  <div className="flex-1">
                    <p className="font-bold text-foreground">{sound.label}</p>
                    <p className="text-sm text-muted-foreground italic">"{sound.modelText}"</p>
                  </div>

                  {recording ? (
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handlePlay(recording)}
                        className={cn(
                          "rounded-xl",
                          isPlaying && "bg-green-100 border-green-300"
                        )}
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDownload(recording, sound.label)}
                        className="rounded-xl"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <span className="text-xs text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                      Nessuna registrazione
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action buttons */}
        <div className="grid gap-4">
          <Button
            onClick={onReplay}
            size="lg"
            className="w-full py-7 text-lg font-bold rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <RotateCcw className="w-6 h-6 mr-3" />
            Rigioca con nuovi suoni
          </Button>

          <Button
            onClick={onHome}
            size="lg"
            variant="outline"
            className="w-full py-7 text-lg font-bold rounded-2xl bg-white/80 hover:bg-white border-2"
          >
            <Home className="w-6 h-6 mr-3" />
            Torna alla scelta giochi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SummaryScreen;
