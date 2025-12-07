import { Button } from "@/components/ui/button";
import { Play, Mic, Volume2, Eye, Users, Heart } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
  onBack: () => void;
}

const WelcomeScreen = ({ onStart, onBack }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-orange-200/40 to-yellow-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-8 md:py-12">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          ← Torna alla scelta giochi
        </Button>

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          {/* Icon decoration */}
          <div className="flex justify-center gap-3 mb-6">
            {["🎵", "🎤", "🔊", "🎶", "🗣️"].map((emoji, i) => (
              <span
                key={i}
                className="text-3xl md:text-4xl animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight">
            La macchina{" "}
            <span className="text-purple-500 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              dei suoni
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 font-medium">
            Facciamo insieme i versi più buffi del mondo!
          </p>
        </div>

        {/* Two info boxes */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {/* Box per l'adulto */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-purple-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Per l'adulto</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Parla lentamente e con calma.</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Non dire al bambino "parla meglio" o "parla più piano".</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Se si blocca, rifate insieme il suono con calma.</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>Sorridi e divertiti insieme!</span>
              </li>
            </ul>
          </div>

          {/* Box per il bambino */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-orange-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <span className="text-2xl">🧒</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">Per te!</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-base font-medium text-foreground">Guarda l'immagine</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-base font-medium text-foreground">Ascolta il suono</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-pink-500" />
                </div>
                <span className="text-base font-medium text-foreground">Prova anche tu!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Start button */}
        <div className="text-center">
          <Button
            onClick={onStart}
            size="lg"
            className="gap-3 text-xl px-12 py-8 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-gradient-to-r from-purple-500 to-pink-500"
          >
            <Play className="w-7 h-7 fill-current" />
            Inizia il gioco
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            Consigliato: un adulto accompagna il bambino durante il gioco.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
