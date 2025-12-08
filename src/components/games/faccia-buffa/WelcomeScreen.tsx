import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowLeft, Play, ChevronDown, Info, Users } from "lucide-react";
import { useState } from "react";

interface WelcomeScreenProps {
  onStart: () => void;
  onBack: () => void;
}

const WelcomeScreen = ({ onStart, onBack }: WelcomeScreenProps) => {
  const [tipsOpen, setTipsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-pink-100 to-purple-100 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-yellow-200/50 to-orange-200/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-200/50 to-pink-200/50 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 py-6 max-w-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="rounded-full bg-white/70 hover:bg-white shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <span className="text-muted-foreground font-medium">Torna ai giochi</span>
        </div>

        {/* Main card */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 md:p-8 shadow-xl border-2 border-orange-100">
          {/* Emojis decoration */}
          <div className="flex justify-center gap-3 mb-4">
            {["🥔", "👀", "👃", "👄", "🎩"].map((emoji, i) => (
              <span
                key={i}
                className="text-3xl md:text-4xl animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-2">
            Faccia{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Buffa
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-muted-foreground text-lg mb-4">
            Costruisci il tuo personaggio con occhi, naso, bocca e tanti accessori!
          </p>

          {/* Parent-child badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <Users className="w-4 h-4" />
              Gioco genitore–bambino
            </div>
          </div>

          {/* What we'll train */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <span className="text-xl">🧠</span>
              <span className="text-sm font-medium text-foreground">Attenzione visiva</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <span className="text-xl">💬</span>
              <span className="text-sm font-medium text-foreground">Lessico del corpo</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
              <span className="text-xl">🎯</span>
              <span className="text-sm font-medium text-foreground">Seguire istruzioni</span>
            </div>
          </div>

          {/* Start button */}
          <Button
            onClick={onStart}
            size="lg"
            className="w-full gap-3 text-xl py-7 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
          >
            <Play className="w-6 h-6 fill-current" />
            Inizia a giocare
          </Button>
        </div>

        {/* Parent tips accordion */}
        <Collapsible open={tipsOpen} onOpenChange={setTipsOpen} className="mt-6">
          <CollapsibleTrigger className="w-full flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-md hover:bg-white transition-colors">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-foreground">Consigli per il genitore</span>
            </div>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${tipsOpen ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-md">
              <ul className="space-y-3 text-foreground/80 text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span>
                  Nomina sempre ad alta voce i pezzi: "occhi", "naso", "bocca"…
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span>
                  Chiedi al bambino: "Cosa manca?" invece di dirglielo subito.
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span>
                  Fai parlare il bambino: "Voglio gli occhi", "Dammi il cappello".
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span>
                  Se sbaglia, usa frasi positive: "Proviamo di nuovo insieme".
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span>
                  Nella modalità a turni, aspetta che sia il momento giusto prima di intervenire.
                </li>
              </ul>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default WelcomeScreen;
