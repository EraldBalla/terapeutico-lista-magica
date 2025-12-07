/**
 * Catalogo suoni per "La macchina dei suoni"
 * Ogni suono ha: id, label, categoria, immagine (emoji), modelText (testo mostrato), speechText (testo per TTS)
 */

export type SoundCategory = "animali" | "mezzi" | "suoni_bocca" | "oggetti";

export interface SoundItem {
  id: string;
  label: string;
  category: SoundCategory;
  image: string;
  modelText: string;    // Testo mostrato all'utente
  speechText: string;   // Testo pronunciato dal TTS (più naturale)
}

export const SOUND_ITEMS: SoundItem[] = [
  // Animali
  { id: "mucca", label: "Mucca", category: "animali", image: "🐄", modelText: "muuuuu", speechText: "Muuuu, come fa la mucca!" },
  { id: "cane", label: "Cane", category: "animali", image: "🐶", modelText: "bau bau", speechText: "Bau bau, come fa il cane!" },
  { id: "gatto", label: "Gatto", category: "animali", image: "🐱", modelText: "miao miao", speechText: "Miao miao, come fa il gatto!" },
  { id: "papera", label: "Papera", category: "animali", image: "🦆", modelText: "qua qua", speechText: "Qua qua, come fa la papera!" },
  { id: "cavallo", label: "Cavallo", category: "animali", image: "🐴", modelText: "iihaaa", speechText: "Iiihaaaa, come fa il cavallo!" },
  { id: "pecora", label: "Pecora", category: "animali", image: "🐑", modelText: "beeee", speechText: "Beeee, come fa la pecora!" },
  { id: "maiale", label: "Maiale", category: "animali", image: "🐷", modelText: "oink oink", speechText: "Oink oink, come fa il maiale!" },
  { id: "gallo", label: "Gallo", category: "animali", image: "🐓", modelText: "chicchirichì", speechText: "Chicchirichì, come fa il gallo!" },
  
  // Mezzi
  { id: "treno", label: "Treno", category: "mezzi", image: "🚂", modelText: "ciuf ciuf", speechText: "Ciuf ciuf, come fa il treno!" },
  { id: "auto", label: "Auto", category: "mezzi", image: "🚗", modelText: "vrrrrr", speechText: "Vruum vruum, come fa l'auto!" },
  { id: "ambulanza", label: "Ambulanza", category: "mezzi", image: "🚑", modelText: "nino nino nino", speechText: "Nino nino nino, come fa l'ambulanza!" },
  { id: "clacson", label: "Clacson", category: "mezzi", image: "📯", modelText: "biip biip", speechText: "Biip biip, come fa il clacson!" },
  { id: "aereo", label: "Aereo", category: "mezzi", image: "✈️", modelText: "vroooom", speechText: "Vroooom, come fa l'aereo che vola!" },
  { id: "moto", label: "Moto", category: "mezzi", image: "🏍️", modelText: "brum brum", speechText: "Brum brum, come fa la moto!" },
  
  // Suoni della bocca
  { id: "suono_a", label: "Suono A", category: "suoni_bocca", image: "😮", modelText: "aaaaaa", speechText: "Aaaaaa, un bel suono lungo con la bocca aperta!" },
  { id: "suono_o", label: "Suono O", category: "suoni_bocca", image: "😯", modelText: "oooooo", speechText: "Oooooo, un suono rotondo con le labbra a cerchio!" },
  { id: "suono_s", label: "Suono S", category: "suoni_bocca", image: "🤫", modelText: "ssssss", speechText: "Sssss, un sibilo lungo come un serpente!" },
  { id: "suono_sh", label: "Suono SH", category: "suoni_bocca", image: "🫢", modelText: "shhhhhh", speechText: "Shhhhh, silenzio come quando dormiamo!" },
  { id: "suono_m", label: "Suono M", category: "suoni_bocca", image: "😊", modelText: "mmmmmm", speechText: "Mmmm, come quando qualcosa è buono!" },
  { id: "suono_r", label: "Suono R", category: "suoni_bocca", image: "😝", modelText: "rrrrr", speechText: "Rrrrr, come il ruggito di un leone!" },
  
  // Oggetti
  { id: "campanello", label: "Campanello", category: "oggetti", image: "🔔", modelText: "din don", speechText: "Din don, come fa il campanello!" },
  { id: "orologio", label: "Orologio", category: "oggetti", image: "⏰", modelText: "tic tac tic tac", speechText: "Tic tac tic tac, come fa l'orologio!" },
  { id: "acqua", label: "Acqua", category: "oggetti", image: "💧", modelText: "splash splash", speechText: "Splash splash, come fa l'acqua!" },
  { id: "telefono", label: "Telefono", category: "oggetti", image: "📱", modelText: "drin drin", speechText: "Drin drin, come fa il telefono!" },
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
