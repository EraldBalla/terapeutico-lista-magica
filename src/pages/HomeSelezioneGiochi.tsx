import { Button } from "@/components/ui/button";
import { Play, Sparkles, Mic, Volume2, Eye, MessageCircle, Archive, Users, Target } from "lucide-react";
import { GameCard, FeaturePill, AppleIcon, CowIcon, TrainIcon, BellIcon } from "@/components/games/shared";
import PieceIcon from "@/components/games/faccia-buffa/PieceIcon";

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
          <GameCard
            title="Viaggio nel mondo"
            titleHighlight="degli oggetti"
            description="Giochi per allenare lessico, comprensione e attenzione con gli oggetti di tutti i giorni."
            icons={[
              <AppleIcon key="apple" />,
              <div key="pencil" className="w-full h-full flex items-center justify-center text-3xl">✏️</div>,
              <div key="milk" className="w-full h-full flex items-center justify-center text-3xl">🥛</div>,
              <div key="soap" className="w-full h-full flex items-center justify-center text-3xl">🧼</div>,
              <div key="tshirt" className="w-full h-full flex items-center justify-center text-3xl">👕</div>,
            ]}
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
            icons={[
              <div key="music" className="w-full h-full flex items-center justify-center text-3xl">🎵</div>,
              <div key="mic" className="w-full h-full flex items-center justify-center text-3xl">🎤</div>,
              <CowIcon key="cow" />,
              <TrainIcon key="train" />,
              <BellIcon key="bell" />,
            ]}
            features={[
              <FeaturePill key="registra" icon={Mic} label="Registra" variant="purple" />,
              <FeaturePill key="ascolta" icon={Volume2} label="Ascolta" variant="pink" />,
            ]}
            onPlay={onSelectMacchinaSuoni}
            variant="purple"
            extraActions={
              <Button
                onClick={onOpenSoundArchive}
                variant="ghost"
                className="w-full text-purple-600 hover:text-purple-700 hover:bg-purple-50"
              >
                <Archive className="w-4 h-4 mr-2" />
                Archivio registrazioni
              </Button>
            }
          />

          {/* Card: Faccia Buffa */}
          <GameCard
            title="Faccia"
            titleHighlight="Buffa"
            description="Costruisci il tuo personaggio con occhi, naso, bocca e tanti accessori! Trascina i pezzi e crea facce divertenti."
            icons={[
              <PieceIcon key="eyes" pieceId="occhi_grandi" size="md" />,
              <PieceIcon key="nose" pieceId="naso_rosso" size="md" />,
              <PieceIcon key="mouth" pieceId="bocca_sorriso" size="md" />,
              <PieceIcon key="hat" pieceId="cappello_festa" size="md" />,
            ]}
            features={[
              <FeaturePill key="parent" icon={Users} label="Genitore-bambino" variant="amber" />,
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
