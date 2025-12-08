import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Info } from "lucide-react";

const ParentTipsAccordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <CollapsibleTrigger className="w-full flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm hover:bg-white transition-colors">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-purple-600" />
          <span className="font-medium text-sm text-foreground">Consigli per il genitore</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm">
          <ul className="space-y-2 text-foreground/80 text-sm">
            <li className="flex gap-2">
              <span className="text-purple-500">•</span>
              Nomina sempre ad alta voce i pezzi: occhi, naso, bocca…
            </li>
            <li className="flex gap-2">
              <span className="text-purple-500">•</span>
              Chiedi al bambino: "Cosa manca?" invece di dirglielo subito.
            </li>
            <li className="flex gap-2">
              <span className="text-purple-500">•</span>
              Fai parlare il bambino: fallo chiedere "Voglio gli occhi", "Dammi il cappello".
            </li>
            <li className="flex gap-2">
              <span className="text-purple-500">•</span>
              Se sbaglia, usa frasi positive: "Proviamo di nuovo insieme".
            </li>
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default ParentTipsAccordion;
