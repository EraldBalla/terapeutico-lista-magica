import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { SOUND_ITEMS } from "@/data/sounds";
import { ArrowLeft, Play, Pause, Calendar, User, Music, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { it } from "date-fns/locale";

interface Session {
  id: string;
  created_at: string;
  child_name: string | null;
  total_sounds: number | null;
}

interface RecordingItem {
  id: string;
  sound_id: string;
  audio_url: string;
  duration_ms: number | null;
  created_at: string;
}

interface SoundMachineArchivePageProps {
  onBack: () => void;
}

const SoundMachineArchivePage = ({ onBack }: SoundMachineArchivePageProps) => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [recordings, setRecordings] = useState<RecordingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingRecordings, setLoadingRecordings] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load sessions on mount
  useEffect(() => {
    const fetchSessions = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("sound_machine_sessions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching sessions:", error);
      } else {
        setSessions(data || []);
      }
      setLoading(false);
    };

    fetchSessions();
  }, []);

  // Load recordings when a session is selected
  useEffect(() => {
    if (!selectedSession) {
      setRecordings([]);
      return;
    }

    const fetchRecordings = async () => {
      setLoadingRecordings(true);
      const { data, error } = await supabase
        .from("sound_machine_recordings")
        .select("*")
        .eq("session_id", selectedSession.id)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching recordings:", error);
      } else {
        setRecordings(data || []);
      }
      setLoadingRecordings(false);
    };

    fetchRecordings();
  }, [selectedSession]);

  const handlePlay = (recording: RecordingItem) => {
    if (playingId === recording.id) {
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

    const audio = new Audio(recording.audio_url);
    audioRef.current = audio;

    audio.onplay = () => setPlayingId(recording.id);
    audio.onended = () => setPlayingId(null);
    audio.onerror = () => setPlayingId(null);

    audio.play();
  };

  const getSoundInfo = (soundId: string) => {
    return SOUND_ITEMS.find((s) => s.id === soundId);
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "d MMMM yyyy, HH:mm", { locale: it });
  };

  // Session detail view
  if (selectedSession) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 p-4 md:p-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <Button
            variant="ghost"
            onClick={() => setSelectedSession(null)}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna all'archivio
          </Button>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl mb-6">
            <h1 className="text-2xl font-extrabold text-foreground mb-2">
              Sessione del {formatDate(selectedSession.created_at)}
            </h1>
            {selectedSession.child_name && (
              <p className="text-muted-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                {selectedSession.child_name}
              </p>
            )}
            {selectedSession.total_sounds && (
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Music className="w-4 h-4" />
                {selectedSession.total_sounds} suoni
              </p>
            )}
          </div>

          {/* Recordings list */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-2xl">🎧</span>
              Registrazioni
            </h2>

            {loadingRecordings ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
              </div>
            ) : recordings.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                Nessuna registrazione trovata per questa sessione.
              </p>
            ) : (
              <div className="space-y-3">
                {recordings.map((recording) => {
                  const sound = getSoundInfo(recording.sound_id);
                  const isPlaying = playingId === recording.id;

                  return (
                    <div
                      key={recording.id}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 border-2 border-green-100"
                    >
                      <span className="text-3xl">{sound?.image || "🔊"}</span>
                      <div className="flex-1">
                        <p className="font-bold text-foreground">
                          {sound?.label || recording.sound_id}
                        </p>
                        {sound && (
                          <p className="text-sm text-muted-foreground italic">
                            "{sound.modelText}"
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">
                          {format(new Date(recording.created_at), "HH:mm:ss")}
                        </p>
                      </div>

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
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Sessions list view
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Torna indietro
        </Button>

        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            Archivio registrazioni
          </h1>
          <p className="text-muted-foreground">
            Riascolta le sessioni passate della Macchina dei suoni
          </p>
        </div>

        {/* Sessions list */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
            </div>
          ) : sessions.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎤</div>
              <p className="text-muted-foreground">
                Non ci sono ancora sessioni salvate della Macchina dei suoni.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Gioca una partita e le registrazioni appariranno qui!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  onClick={() => setSelectedSession(session)}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-purple-50 border-2 border-purple-100 cursor-pointer hover:bg-purple-100 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-200 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-foreground">
                      {formatDate(session.created_at)}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {session.child_name && (
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {session.child_name}
                        </span>
                      )}
                      {session.total_sounds && (
                        <span className="flex items-center gap-1">
                          <Music className="w-3 h-3" />
                          {session.total_sounds} suoni
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-purple-400">→</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SoundMachineArchivePage;
