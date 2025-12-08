import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Play, Headphones, AlertTriangle, ChevronDown, Archive, Brain, Ear, Volume2 } from "lucide-react";

interface WelcomeScreenProps {
  onStart: (childName: string) => void;
  onBack: () => void;
  onOpenArchive: () => void;
}

const WelcomeScreen = ({ onStart, onBack, onOpenArchive }: WelcomeScreenProps) => {
  const [childName, setChildName] = useState("");
  const [parentTipsOpen, setParentTipsOpen] = useState(false);

  const handleStart = () => {
    onStart(childName.trim());
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-purple-50 to-pink-100">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-cyan-200/50 to-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-pink-200/50 to-orange-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-yellow-100/30 to-teal-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-6 md:py-10">
        {/* 1. Top bar */}
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground font-medium"
          >
            ← Torna indietro
          </Button>
          <Button
            variant="outline"
            onClick={onOpenArchive}
            className="text-purple-600 border-purple-200 hover:bg-purple-50"
          >
            <Archive className="w-4 h-4 mr-2" />
            Archivio
          </Button>
        </div>

        {/* 2. Volume Warning - very visible */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 md:p-5 shadow-md">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 flex items-center gap-1">
                <Headphones className="w-6 h-6 text-amber-600" />
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-amber-800 font-semibold text-base md:text-lg leading-snug">
                  Attenzione: se il bambino usa le cuffie, abbassa il volume.
                </p>
                <p className="text-amber-700 text-sm md:text-base mt-1">
                  Suoni troppo forti possono dare fastidio o spaventare.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 & 4. Main card with title, subtitle and illustration */}
        <div className="max-w-xl mx-auto mb-6">
          <div className="bg-gradient-to-br from-teal-100 to-cyan-50 rounded-[2rem] p-6 md:p-8 shadow-xl border-2 border-teal-200/50">
            {/* Illustration - emoji group */}
            <div className="flex justify-center gap-3 mb-5">
              {["🎙️", "🐄", "🚗", "🔔", "🎵"].map((emoji, i) => (
                <span
                  key={i}
                  className="text-4xl md:text-5xl animate-float"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-3 leading-tight">
              <span className="text-slate-800">La Macchina </span>
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                dei Suoni
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-center text-slate-600 text-lg md:text-xl font-medium">
              Un gioco per ascoltare, imitare e registrare suoni divertenti.
            </p>
          </div>
        </div>

        {/* 5. "Cosa alleneremo" pills */}
        <div className="max-w-xl mx-auto mb-6">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 shadow-sm">
              <Brain className="w-5 h-5 text-purple-500" />
              <span className="text-sm md:text-base font-medium text-slate-700">Attenzione e ascolto</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full px-4 py-2 shadow-sm">
              <span className="text-lg">👄</span>
              <span className="text-sm md:text-base font-medium text-slate-700">Produzione dei suoni</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-200 rounded-full px-4 py-2 shadow-sm">
              <Ear className="w-5 h-5 text-teal-500" />
              <span className="text-sm md:text-base font-medium text-slate-700">Consapevolezza uditiva</span>
            </div>
          </div>
        </div>

        {/* Child name input (optional) */}
        <div className="max-w-sm mx-auto mb-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-purple-100">
            <label htmlFor="childName" className="block text-sm font-medium text-slate-600 mb-2">
              Nome del bambino (opzionale)
            </label>
            <Input
              id="childName"
              type="text"
              placeholder="Es: Marco"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              className="text-lg py-5 rounded-xl border-2 border-purple-100 focus:border-purple-300 bg-white"
            />
            <p className="text-xs text-slate-500 mt-2">
              Serve per identificare le sessioni nell'archivio
            </p>
          </div>
        </div>

        {/* 6. Main CTA button */}
        <div className="text-center mb-8">
          <Button
            onClick={handleStart}
            size="lg"
            className="gap-3 text-xl md:text-2xl px-10 md:px-14 py-7 md:py-8 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
          >
            <Play className="w-7 h-7 fill-current" />
            Inizia a giocare
          </Button>
        </div>

        {/* 7. Parent tips accordion */}
        <div className="max-w-2xl mx-auto">
          <Collapsible open={parentTipsOpen} onOpenChange={setParentTipsOpen}>
            <CollapsibleTrigger asChild>
              <button className="w-full flex items-center justify-between bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors rounded-2xl px-5 py-4 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="text-xl">👨‍👩‍👧‍👦</span>
                  <span className="font-semibold text-slate-700 text-base md:text-lg">
                    Consigli per il genitore
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                    parentTipsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-3 bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-slate-200 shadow-sm">
                <ul className="space-y-3 text-slate-600 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">💡</span>
                    <span>Giocate in un momento tranquillo, senza fretta.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">🎧</span>
                    <span>Lascia che il bambino ascolti il suono e poi provi a imitarlo: non correggerlo in modo rigido.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">😄</span>
                    <span>Se si vergogna, puoi fare il gioco anche tu: imita prima tu il suono in modo esagerato e buffo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">💬</span>
                    <span>Evita di dire "sbagliato": puoi dire invece "proviamo di nuovo insieme".</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">🔊</span>
                    <span>Se usa le cuffie, controlla sempre che il volume sia basso e confortevole.</span>
                  </li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Footer note */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Consigliato: un adulto accompagna il bambino durante il gioco.
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
