/**
 * Catalogo suoni per "La macchina dei suoni"
 * Ogni suono ha: id, label, categoria, immagine (emoji), modelText (testo mostrato), modelAudioUrl (audio pre-registrato)
 * 
 * NOTA: Gli audio pre-registrati devono essere file con voce dolce e amichevole o suoni reali.
 * Attualmente i modelAudioUrl puntano a placeholder - vanno sostituiti con file reali.
 */

export type SoundCategory = "animali" | "mezzi" | "oggetti";

export interface SoundItem {
  id: string;
  label: string;
  category: SoundCategory;
  image: string;
  modelText: string;       // Testo onomatopeico mostrato all'utente
  modelAudioUrl: string;   // URL del file audio pre-registrato (voce dolce o suono reale)
}

// Base URL per i file audio modello (da configurare con il bucket Supabase o CDN)
// Per ora usiamo placeholder - questi andranno sostituiti con file audio reali
const AUDIO_BASE_URL = "";

export const SOUND_ITEMS: SoundItem[] = [
  // ============ ANIMALI ============
  { 
    id: "mucca", 
    label: "Mucca", 
    category: "animali", 
    image: "🐄", 
    modelText: "muuuuu",
    modelAudioUrl: `${AUDIO_BASE_URL}/animali/mucca.mp3`
  },
  { 
    id: "cane", 
    label: "Cane", 
    category: "animali", 
    image: "🐶", 
    modelText: "bau bau",
    modelAudioUrl: `${AUDIO_BASE_URL}/animali/cane.mp3`
  },
  { 
    id: "gatto", 
    label: "Gatto", 
    category: "animali", 
    image: "🐱", 
    modelText: "miao miao",
    modelAudioUrl: `${AUDIO_BASE_URL}/animali/gatto.mp3`
  },
  { 
    id: "papera", 
    label: "Papera", 
    category: "animali", 
    image: "🦆", 
    modelText: "qua qua",
    modelAudioUrl: `${AUDIO_BASE_URL}/animali/papera.mp3`
  },
  { 
    id: "cavallo", 
    label: "Cavallo", 
    category: "animali", 
    image: "🐴", 
    modelText: "iihaaa",
    modelAudioUrl: `${AUDIO_BASE_URL}/animali/cavallo.mp3`
  },
  { 
    id: "pecora", 
    label: "Pecora", 
    category: "animali", 
    image: "🐑", 
    modelText: "beeee",
    modelAudioUrl: `${AUDIO_BASE_URL}/animali/pecora.mp3`
  },
  { 
    id: "maiale", 
    label: "Maiale", 
    category: "animali", 
    image: "🐷", 
    modelText: "oink oink",
    modelAudioUrl: `${AUDIO_BASE_URL}/animali/maiale.mp3`
  },
  { 
    id: "gallo", 
    label: "Gallo", 
    category: "animali", 
    image: "🐓", 
    modelText: "chicchirichì",
    modelAudioUrl: `${AUDIO_BASE_URL}/animali/gallo.mp3`
  },
  { 
    id: "leone", 
    label: "Leone", 
    category: "animali", 
    image: "🦁", 
    modelText: "roar",
    modelAudioUrl: `${AUDIO_BASE_URL}/animali/leone.mp3`
  },
  { 
    id: "uccellino", 
    label: "Uccellino", 
    category: "animali", 
    image: "🐦", 
    modelText: "cip cip",
    modelAudioUrl: `${AUDIO_BASE_URL}/animali/uccellino.mp3`
  },
  { 
    id: "rana", 
    label: "Rana", 
    category: "animali", 
    image: "🐸", 
    modelText: "cra cra",
    modelAudioUrl: `${AUDIO_BASE_URL}/animali/rana.mp3`
  },
  { 
    id: "ape", 
    label: "Ape", 
    category: "animali", 
    image: "🐝", 
    modelText: "bzzz bzzz",
    modelAudioUrl: `${AUDIO_BASE_URL}/animali/ape.mp3`
  },

  // ============ MEZZI ============
  { 
    id: "treno", 
    label: "Treno", 
    category: "mezzi", 
    image: "🚂", 
    modelText: "ciuf ciuf",
    modelAudioUrl: `${AUDIO_BASE_URL}/mezzi/treno.mp3`
  },
  { 
    id: "auto", 
    label: "Auto", 
    category: "mezzi", 
    image: "🚗", 
    modelText: "vroom vroom",
    modelAudioUrl: `${AUDIO_BASE_URL}/mezzi/auto.mp3`
  },
  { 
    id: "ambulanza", 
    label: "Ambulanza", 
    category: "mezzi", 
    image: "🚑", 
    modelText: "nino nino",
    modelAudioUrl: `${AUDIO_BASE_URL}/mezzi/ambulanza.mp3`
  },
  { 
    id: "clacson", 
    label: "Clacson", 
    category: "mezzi", 
    image: "📯", 
    modelText: "biip biip",
    modelAudioUrl: `${AUDIO_BASE_URL}/mezzi/clacson.mp3`
  },
  { 
    id: "aereo", 
    label: "Aereo", 
    category: "mezzi", 
    image: "✈️", 
    modelText: "vroooom",
    modelAudioUrl: `${AUDIO_BASE_URL}/mezzi/aereo.mp3`
  },
  { 
    id: "moto", 
    label: "Moto", 
    category: "mezzi", 
    image: "🏍️", 
    modelText: "brum brum",
    modelAudioUrl: `${AUDIO_BASE_URL}/mezzi/moto.mp3`
  },

  // ============ OGGETTI ============
  { 
    id: "campanello", 
    label: "Campanello", 
    category: "oggetti", 
    image: "🔔", 
    modelText: "din don",
    modelAudioUrl: `${AUDIO_BASE_URL}/oggetti/campanello.mp3`
  },
  { 
    id: "orologio", 
    label: "Orologio", 
    category: "oggetti", 
    image: "⏰", 
    modelText: "tic tac",
    modelAudioUrl: `${AUDIO_BASE_URL}/oggetti/orologio.mp3`
  },
  { 
    id: "acqua", 
    label: "Acqua", 
    category: "oggetti", 
    image: "💧", 
    modelText: "splash",
    modelAudioUrl: `${AUDIO_BASE_URL}/oggetti/acqua.mp3`
  },
  { 
    id: "telefono", 
    label: "Telefono", 
    category: "oggetti", 
    image: "📱", 
    modelText: "drin drin",
    modelAudioUrl: `${AUDIO_BASE_URL}/oggetti/telefono.mp3`
  },
  { 
    id: "fischietto", 
    label: "Fischietto", 
    category: "oggetti", 
    image: "🎵", 
    modelText: "fiiiii",
    modelAudioUrl: `${AUDIO_BASE_URL}/oggetti/fischietto.mp3`
  },
  { 
    id: "tamburo", 
    label: "Tamburo", 
    category: "oggetti", 
    image: "🥁", 
    modelText: "tum tum",
    modelAudioUrl: `${AUDIO_BASE_URL}/oggetti/tamburo.mp3`
  },
];

// Frasi di feedback positivo dopo la registrazione
export const POSITIVE_FEEDBACK = [
  "Bravo, abbiamo salvato il tuo suono!",
  "Che bello sentire la tua voce!",
  "Ottimo, sei pronto per il prossimo suono!",
  "Fantastico, che suono buffo!",
  "Bravissimo, continua così!",
  "Che bella voce che hai!",
  "Perfetto, andiamo avanti!",
];

// Suggerimenti per i genitori
export const PARENT_HINTS = [
  "Lascia che sia il bambino a fare il suono per primo.",
  "Se si blocca, rifate insieme il suono con calma.",
  "Non dire 'parla più piano', pensa solo a divertirti!",
  "Sorridi e divertiti insieme al bambino.",
];

export const getRandomPositiveFeedback = (): string => {
  return POSITIVE_FEEDBACK[Math.floor(Math.random() * POSITIVE_FEEDBACK.length)];
};

export const getRandomParentHint = (): string => {
  return PARENT_HINTS[Math.floor(Math.random() * PARENT_HINTS.length)];
};
