import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { SoundItem, getRandomPositiveFeedback } from "@/data/sounds";
import { Volume2, Mic, Play, ArrowRight, Square, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

export interface Recording {
  soundId: string;
  blob: Blob;
  url: string;
  durationMs?: number;
  saved?: boolean;
}

interface SoundGameScreenProps {
  sounds: SoundItem[];
  recordings: Recording[];
  sessionId: string | null;
  onRecordingComplete: (recording: Recording) => void;
  onComplete: () => void;
  onBack: () => void;
}

const SoundGameScreen = ({
  sounds,
  recordings,
  sessionId,
  onRecordingComplete,
  onComplete,
  onBack,
}: SoundGameScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlayingModel, setIsPlayingModel] = useState(false);
  const [isPlayingRecording, setIsPlayingRecording] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [micError, setMicError] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [audioError, setAudioError] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const modelAudioRef = useRef<HTMLAudioElement | null>(null);
  const recordingAudioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const currentSound = sounds[currentIndex];
  const hasRecording = recordings.some((r) => r.soundId === currentSound.id);
  const currentRecording = recordings.find((r) => r.soundId === currentSound.id);
  const progress = ((currentIndex + 1) / sounds.length) * 100;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (mediaRecorderRef.current && isRecording) {
        mediaRecorderRef.current.stop();
      }
      if (modelAudioRef.current) {
        modelAudioRef.current.pause();
      }
      if (recordingAudioRef.current) {
        recordingAudioRef.current.pause();
      }
    };
  }, [isRecording]);

  // Play model sound using pre-recorded audio file
  const handlePlayModel = useCallback(() => {
    if (isPlayingModel) return;
    
    setAudioError(null);
    
    // Stop any currently playing model audio
    if (modelAudioRef.current) {
      modelAudioRef.current.pause();
      modelAudioRef.current = null;
    }

    // Check if audio URL is valid
    if (!currentSound.modelAudioUrl || currentSound.modelAudioUrl === "/animali/" + currentSound.id + ".mp3") {
      setAudioError("Audio modello non ancora disponibile per questo suono.");
      setTimeout(() => setAudioError(null), 3000);
      return;
    }

    const audio = new Audio(currentSound.modelAudioUrl);
    modelAudioRef.current = audio;
    
    audio.onplay = () => setIsPlayingModel(true);
    audio.onended = () => {
      setIsPlayingModel(false);
      modelAudioRef.current = null;
    };
    audio.onerror = () => {
      setIsPlayingModel(false);
      setAudioError("Audio modello non disponibile. Riprova più tardi.");
      setTimeout(() => setAudioError(null), 3000);
      modelAudioRef.current = null;
    };
    
    audio.play().catch(() => {
      setIsPlayingModel(false);
      setAudioError("Impossibile riprodurre l'audio modello.");
      setTimeout(() => setAudioError(null), 3000);
    });
  }, [currentSound.modelAudioUrl, currentSound.id, isPlayingModel]);

  // Upload recording to Supabase storage
  const uploadRecording = async (blob: Blob, soundId: string, durationMs: number): Promise<string | null> => {
    if (!sessionId) return null;

    try {
      const fileName = `${sessionId}/${soundId}/${Date.now()}.webm`;
      
      const { data: storageData, error: storageError } = await supabase.storage
        .from("sound_machine_recordings")
        .upload(fileName, blob, {
          contentType: "audio/webm",
        });

      if (storageError) {
        console.error("Storage upload error:", storageError);
        return null;
      }

      const { data: publicUrlData } = supabase.storage
        .from("sound_machine_recordings")
        .getPublicUrl(fileName);

      const audioUrl = publicUrlData?.publicUrl;

      if (!audioUrl) return null;

      // Insert record in database
      const { error: insertError } = await supabase
        .from("sound_machine_recordings")
        .insert({
          session_id: sessionId,
          sound_id: soundId,
          audio_url: audioUrl,
          duration_ms: durationMs,
        });

      if (insertError) {
        console.error("Database insert error:", insertError);
        return null;
      }

      return audioUrl;
    } catch (error) {
      console.error("Upload error:", error);
      return null;
    }
  };

  // Start recording
  const handleStartRecording = async () => {
    setMicError(null);
    setSaveError(null);
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "audio/mp4",
      });
      
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];
      startTimeRef.current = Date.now();
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };
      
      mediaRecorder.onstop = async () => {
        const durationMs = Date.now() - startTimeRef.current;
        const blob = new Blob(chunksRef.current, { type: mediaRecorder.mimeType });
        const url = URL.createObjectURL(blob);
        
        // Create local recording first
        const recording: Recording = {
          soundId: currentSound.id,
          blob,
          url,
          durationMs,
          saved: false,
        };
        
        onRecordingComplete(recording);
        
        // Show positive feedback
        setFeedback(getRandomPositiveFeedback());
        setTimeout(() => setFeedback(null), 3000);
        
        // Stop all tracks
        stream.getTracks().forEach((track) => track.stop());
        
        setIsRecording(false);
        setRecordingTime(0);
        if (timerRef.current) clearInterval(timerRef.current);

        // Try to upload to Supabase (async, don't block UI)
        if (sessionId) {
          setIsSaving(true);
          const uploadedUrl = await uploadRecording(blob, currentSound.id, durationMs);
          setIsSaving(false);
          
          if (uploadedUrl) {
            // Update recording as saved
            onRecordingComplete({ ...recording, saved: true });
          } else {
            setSaveError("Registrazione non salvata nell'archivio, ma puoi comunque riascoltarla ora.");
            setTimeout(() => setSaveError(null), 4000);
          }
        }
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      
      // Timer for recording duration
      let time = 0;
      timerRef.current = setInterval(() => {
        time++;
        setRecordingTime(time);
        
        // Auto-stop after 10 seconds
        if (time >= 10) {
          handleStopRecording();
        }
      }, 1000);
      
    } catch (error) {
      console.error("Errore accesso microfono:", error);
      setMicError("Non possiamo usare il microfono. Controlla le impostazioni del browser.");
    }
  };

  // Stop recording
  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
    }
  };

  // Play recording
  const handlePlayRecording = () => {
    if (!currentRecording || isPlayingRecording) return;
    
    if (recordingAudioRef.current) {
      recordingAudioRef.current.pause();
    }
    
    const audio = new Audio(currentRecording.url);
    recordingAudioRef.current = audio;
    
    audio.onplay = () => setIsPlayingRecording(true);
    audio.onended = () => {
      setIsPlayingRecording(false);
      recordingAudioRef.current = null;
    };
    audio.onerror = () => {
      setIsPlayingRecording(false);
      recordingAudioRef.current = null;
    };
    
    audio.play();
  };

  // Go to next sound
  const handleNext = () => {
    if (!hasRecording) return;
    
    // Stop any playing audio
    if (modelAudioRef.current) {
      modelAudioRef.current.pause();
      modelAudioRef.current = null;
      setIsPlayingModel(false);
    }
    if (recordingAudioRef.current) {
      recordingAudioRef.current.pause();
      recordingAudioRef.current = null;
      setIsPlayingRecording(false);
    }
    
    if (currentIndex < sounds.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  // Get category-specific background color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "animali":
        return "from-green-100 to-emerald-50";
      case "mezzi":
        return "from-blue-100 to-cyan-50";
      case "oggetti":
        return "from-amber-100 to-yellow-50";
      default:
        return "from-purple-100 to-pink-50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 p-4 md:p-6">
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" onClick={onBack} className="text-muted-foreground">
            ← Esci
          </Button>
          <span className="text-sm font-semibold text-muted-foreground bg-white/80 px-4 py-2 rounded-full">
            Suono {currentIndex + 1} di {sounds.length}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="h-3 bg-white/60 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-lg mx-auto">
        {/* Sound card */}
        <div
          className={cn(
            "bg-gradient-to-br rounded-3xl p-8 md:p-12 shadow-xl mb-6 text-center",
            getCategoryColor(currentSound.category)
          )}
        >
          <div className="text-8xl md:text-9xl mb-4 animate-float">
            {currentSound.image}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            {currentSound.label}
          </h2>
          <p className="text-lg text-muted-foreground italic">"{currentSound.modelText}"</p>
        </div>

        {/* Action buttons */}
        <div className="grid gap-4 mb-6">
          {/* Listen button */}
          <Button
            onClick={handlePlayModel}
            disabled={isPlayingModel}
            size="lg"
            variant="outline"
            className="w-full py-6 text-lg font-bold rounded-2xl bg-white/80 hover:bg-white border-2 border-blue-200 hover:border-blue-300 transition-all"
          >
            <Volume2 className={cn("w-6 h-6 mr-3", isPlayingModel && "animate-pulse text-blue-500")} />
            {isPlayingModel ? "Sto riproducendo..." : "Ascolta il suono"}
          </Button>

          {/* Audio error message */}
          {audioError && (
            <div className="bg-orange-100 border-2 border-orange-200 rounded-xl p-4 text-center">
              <p className="text-orange-700 text-sm">{audioError}</p>
            </div>
          )}

          {/* Record button */}
          <Button
            onClick={isRecording ? handleStopRecording : handleStartRecording}
            disabled={isSaving}
            size="lg"
            className={cn(
              "w-full py-8 text-xl font-bold rounded-2xl transition-all",
              isRecording
                ? "bg-red-500 hover:bg-red-600 animate-pulse"
                : "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
            )}
          >
            {isRecording ? (
              <>
                <Square className="w-7 h-7 mr-3 fill-current" />
                Ferma ({10 - recordingTime}s)
              </>
            ) : isSaving ? (
              <>
                <Loader2 className="w-7 h-7 mr-3 animate-spin" />
                Salvo...
              </>
            ) : (
              <>
                <Mic className="w-7 h-7 mr-3" />
                Registra
              </>
            )}
          </Button>

          {/* Mic error message */}
          {micError && (
            <div className="bg-orange-100 border-2 border-orange-200 rounded-xl p-4 text-center">
              <p className="text-orange-700 text-sm">{micError}</p>
            </div>
          )}

          {/* Save error message */}
          {saveError && (
            <div className="bg-yellow-100 border-2 border-yellow-200 rounded-xl p-4 text-center">
              <p className="text-yellow-700 text-sm">{saveError}</p>
            </div>
          )}

          {/* Play recording button */}
          <Button
            onClick={handlePlayRecording}
            disabled={!hasRecording || isPlayingRecording}
            size="lg"
            variant="outline"
            className={cn(
              "w-full py-6 text-lg font-bold rounded-2xl transition-all",
              hasRecording
                ? "bg-white/80 hover:bg-white border-2 border-green-200 hover:border-green-300"
                : "opacity-50 cursor-not-allowed"
            )}
          >
            <Play className={cn("w-6 h-6 mr-3", isPlayingRecording && "animate-pulse text-green-500")} />
            {isPlayingRecording ? "Sto riproducendo..." : hasRecording ? "Riascolta" : "Registra prima!"}
          </Button>
        </div>

        {/* Feedback bar */}
        {feedback && (
          <div className="bg-green-100 border-2 border-green-200 rounded-2xl p-4 mb-6 text-center animate-bounce-in">
            <p className="text-green-700 font-semibold text-lg flex items-center justify-center gap-2">
              <span className="text-2xl">✨</span>
              {feedback}
              <span className="text-2xl">✨</span>
            </p>
          </div>
        )}

        {/* Next button */}
        <Button
          onClick={handleNext}
          disabled={!hasRecording}
          size="lg"
          className={cn(
            "w-full py-8 text-xl font-bold rounded-2xl transition-all",
            hasRecording
              ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              : "bg-gray-300 cursor-not-allowed"
          )}
        >
          {currentIndex < sounds.length - 1 ? (
            <>
              Prossimo suono
              <ArrowRight className="w-7 h-7 ml-3" />
            </>
          ) : (
            <>
              Finito!
              <span className="text-2xl ml-3">🎉</span>
            </>
          )}
        </Button>

        {!hasRecording && (
          <p className="text-center text-sm text-muted-foreground mt-3">
            Devi registrare almeno una volta per andare avanti!
          </p>
        )}
      </div>
    </div>
  );
};

export default SoundGameScreen;
