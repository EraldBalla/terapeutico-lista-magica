import { Button } from "@/components/ui/button";
import { Sparkles, Mic, Volume2, Eye, MessageCircle, Archive, Users, Target } from "lucide-react";
import { GameCard, FeaturePill } from "@/components/games/shared";
import { ObjectsIllustration, SoundMachineIllustration, FacciaBuffaIllustration } from "@/components/games/shared/GameIllustrations";

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
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] via-[#FFEBD2] to-[#FFEAF5]">
      <div className="container mx-auto px-4 py-10 md:py-14">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm border border-primary/10">
            <Sparkles className="w-4 h-4" />
            Giochi Terapeutici
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 leading-tight">
            Benvenuto ai{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              giochi!
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground">
            Scegli il gioco con cui vuoi iniziare
          </p>
        </div>

        {/* Game cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto mb-10">
          {/* Card: Viaggio nel mondo degli oggetti */}
          <GameCard
            title="Viaggio nel mondo"
            titleHighlight="degli oggetti"
            description="Giochi per allenare lessico, comprensione e attenzione con gli oggetti di tutti i giorni."
            illustration={<ObjectsIllustration />}
            features={[
              <FeaturePill key="lessico" icon={MessageCircle} label="Lessico" variant="orange" />,
              <FeaturePill key="attenzione" icon={Eye} label="Attenzione" variant="green" />,
            ]}
            onPlay={onSelectMondoOggetti}
            variant="orange"
          />

          {/* Card: La macchina dei suoni */}
          <GameCard
            title="La macchina"
            titleHighlight="dei suoni"
            description="Gioca con i versi degli animali, i rumori dei mezzi e i suoni della bocca. Ascolta, imita e registra la tua voce."
            illustration={<SoundMachineIllustration />}
            features={[
              <FeaturePill key="ascolto" icon={Volume2} label="Ascolto" variant="purple" />,
              <FeaturePill key="produzione" icon={Mic} label="Produzione" variant="pink" />,
            ]}
            onPlay={onSelectMacchinaSuoni}
            variant="purple"
            extraActions={
              <Button
                onClick={onOpenSoundArchive}
                variant="ghost"
                size="sm"
                className="w-full text-purple-600 hover:text-purple-700 hover:bg-purple-50 text-sm"
              >
                <Archive className="w-4 h-4 mr-1.5" />
                Archivio registrazioni
              </Button>
            }
          />

          {/* Card: Faccia Buffa */}
          <GameCard
            title="Faccia"
            titleHighlight="Buffa"
            description="Costruisci il tuo personaggio con occhi, naso, bocca e tanti accessori. Trascina i pezzi e crea facce divertenti."
            illustration={<FacciaBuffaIllustration />}
            features={[
              <FeaturePill key="parent" icon={Users} label="Genitore–bambino" variant="amber" />,
              <FeaturePill key="target" icon={Target} label="Istruzioni" variant="teal" />,
            ]}
            onPlay={onSelectFacciaBuffa}
            variant="amber"
            className="md:col-span-2 lg:col-span-1"
          />
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
