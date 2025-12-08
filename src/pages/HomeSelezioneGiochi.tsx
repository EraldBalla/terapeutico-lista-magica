import { Button } from "@/components/ui/button";
import { Play, Sparkles, Mic, Volume2, Eye, MessageCircle, Archive, Users, Target } from "lucide-react";

interface HomeSelezioneGiochiProps {
  onSelectMondoOggetti: () => void;
  onSelectMacchinaSuoni: () => void;
  onOpenSoundArchive: () => void;
  onSelectFacciaBuffa: () => void;
}

const HomeSelezioneGiochi = ({
  onSelectMondoOggetti,
  onSelectMacchinaSuoni,
  onOpenSoundArchive,
  onSelectFacciaBuffa,
}: HomeSelezioneGiochiProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-100/30 to-green-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-md border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Giochi Terapeutici
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight">
            Benvenuto ai{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              giochi!
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-medium">
            Scegli il gioco con cui vuoi iniziare
          </p>
        </div>

        {/* Game cards - 3 columns on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {/* Card: Viaggio nel mondo degli oggetti */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border-2 border-orange-100 hover:shadow-2xl hover:scale-[1.02] transition-all">
            {/* Icons decoration */}
            <div className="flex justify-center gap-2 mb-4">
              {["🍎", "✏️", "🥛", "🧼", "👕"].map((emoji, i) => (
                <span
                  key={i}
                  className="text-2xl md:text-3xl animate-float"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-3">
              Viaggio nel mondo{" "}
              <span className="text-primary">degli oggetti</span>
            </h2>

            <p className="text-muted-foreground text-center mb-6 leading-relaxed">
              Giochi per allenare lessico, comprensione e attenzione con gli oggetti di tutti i giorni.
            </p>

            {/* Features mini */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm font-medium">
                <MessageCircle className="w-4 h-4" /> Lessico
              </span>
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium">
                <Eye className="w-4 h-4" /> Attenzione
              </span>
            </div>

            <Button
              onClick={onSelectMondoOggetti}
              size="lg"
              className="w-full gap-3 text-lg py-7 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary to-orange-500"
            >
              <Play className="w-6 h-6 fill-current" />
              Gioca
            </Button>
          </div>

          {/* Card: La macchina dei suoni */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border-2 border-purple-100 hover:shadow-2xl hover:scale-[1.02] transition-all">
            {/* Icons decoration */}
            <div className="flex justify-center gap-2 mb-4">
              {["🎵", "🎤", "🔊", "🐄", "🚂"].map((emoji, i) => (
                <span
                  key={i}
                  className="text-2xl md:text-3xl animate-float"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-3">
              La macchina{" "}
              <span className="text-purple-500">dei suoni</span>
            </h2>

            <p className="text-muted-foreground text-center mb-6 leading-relaxed">
              Gioca con i versi degli animali, i rumori dei mezzi e i suoni della bocca. Ascolta, imita e registra la tua voce.
            </p>

            {/* Features mini */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-sm font-medium">
                <Mic className="w-4 h-4" /> Registra
              </span>
              <span className="inline-flex items-center gap-1 bg-pink-100 text-pink-700 px-3 py-1.5 rounded-full text-sm font-medium">
                <Volume2 className="w-4 h-4" /> Ascolta
              </span>
            </div>

            <Button
              onClick={onSelectMacchinaSuoni}
              size="lg"
              className="w-full gap-3 text-lg py-7 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-purple-500 to-pink-500"
            >
              <Play className="w-6 h-6 fill-current" />
              Gioca
            </Button>

            {/* Archive link */}
            <Button
              onClick={onOpenSoundArchive}
              variant="ghost"
              className="w-full mt-3 text-purple-600 hover:text-purple-700 hover:bg-purple-50"
            >
              <Archive className="w-4 h-4 mr-2" />
              Archivio registrazioni
            </Button>
          </div>

          {/* Card: Faccia Buffa */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border-2 border-amber-100 hover:shadow-2xl hover:scale-[1.02] transition-all md:col-span-2 lg:col-span-1">
            {/* Icons decoration */}
            <div className="flex justify-center gap-2 mb-4">
              {["🥔", "👀", "👃", "👄", "🎩"].map((emoji, i) => (
                <span
                  key={i}
                  className="text-2xl md:text-3xl animate-float"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-3">
              Faccia{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Buffa</span>
            </h2>

            <p className="text-muted-foreground text-center mb-6 leading-relaxed">
              Costruisci il tuo personaggio con occhi, naso, bocca e tanti accessori! Trascina i pezzi e crea facce divertenti.
            </p>

            {/* Features mini */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-sm font-medium">
                <Users className="w-4 h-4" /> Genitore-bambino
              </span>
              <span className="inline-flex items-center gap-1 bg-teal-100 text-teal-700 px-3 py-1.5 rounded-full text-sm font-medium">
                <Target className="w-4 h-4" /> Istruzioni
              </span>
            </div>

            <Button
              onClick={onSelectFacciaBuffa}
              size="lg"
              className="w-full gap-3 text-lg py-7 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-orange-500 to-pink-500"
            >
              <Play className="w-6 h-6 fill-current" />
              Gioca
            </Button>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-muted-foreground text-sm">
          Consigliato: un adulto accompagna il bambino durante i giochi.
        </p>
      </div>
    </div>
  );
};

export default HomeSelezioneGiochi;
