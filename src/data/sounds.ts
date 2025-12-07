/**
 * Catalogo suoni per "La macchina dei suoni"
 * Ogni suono ha: id, label, categoria, immagine (emoji), modelText (testo da pronunciare)
 */

export type SoundCategory = "animali" | "mezzi" | "suoni_bocca" | "oggetti";

export interface SoundItem {
  id: string;
  label: string;
  category: SoundCategory;
  image: string;
  modelText: string;
}

export const SOUND_ITEMS: SoundItem[] = [
  // Animali
  { id: "mucca", label: "Mucca", category: "animali", image: "🐄", modelText: "muuuuu" },
  { id: "cane", label: "Cane", category: "animali", image: "🐶", modelText: "bau bau" },
  { id: "gatto", label: "Gatto", category: "animali", image: "🐱", modelText: "miao miao" },
  { id: "papera", label: "Papera", category: "animali", image: "🦆", modelText: "qua qua" },
  { id: "cavallo", label: "Cavallo", category: "animali", image: "🐴", modelText: "iihaaa" },
  { id: "pecora", label: "Pecora", category: "animali", image: "🐑", modelText: "beeee" },
  { id: "maiale", label: "Maiale", category: "animali", image: "🐷", modelText: "oink oink" },
  { id: "gallo", label: "Gallo", category: "animali", image: "🐓", modelText: "chicchirichì" },
  
  // Mezzi
  { id: "treno", label: "Treno", category: "mezzi", image: "🚂", modelText: "ciuf ciuf" },
  { id: "auto", label: "Auto", category: "mezzi", image: "🚗", modelText: "vrrrrr" },
  { id: "ambulanza", label: "Ambulanza", category: "mezzi", image: "🚑", modelText: "nino nino nino" },
  { id: "clacson", label: "Clacson", category: "mezzi", image: "📯", modelText: "biip biip" },
  { id: "aereo", label: "Aereo", category: "mezzi", image: "✈️", modelText: "vroooom" },
  { id: "moto", label: "Moto", category: "mezzi", image: "🏍️", modelText: "brum brum" },
  
  // Suoni della bocca
  { id: "suono_a", label: "Suono A", category: "suoni_bocca", image: "😮", modelText: "aaaaaa" },
  { id: "suono_o", label: "Suono O", category: "suoni_bocca", image: "😯", modelText: "oooooo" },
  { id: "suono_s", label: "Suono S", category: "suoni_bocca", image: "🤫", modelText: "ssssss" },
  { id: "suono_sh", label: "Suono SH", category: "suoni_bocca", image: "🫢", modelText: "shhhhhh" },
  { id: "suono_m", label: "Suono M", category: "suoni_bocca", image: "😊", modelText: "mmmmmm" },
  { id: "suono_r", label: "Suono R", category: "suoni_bocca", image: "😝", modelText: "rrrrr" },
  
  // Oggetti
  { id: "campanello", label: "Campanello", category: "oggetti", image: "🔔", modelText: "din don" },
  { id: "orologio", label: "Orologio", category: "oggetti", image: "⏰", modelText: "tic tac tic tac" },
  { id: "acqua", label: "Acqua", category: "oggetti", image: "💧", modelText: "splash splash" },
  { id: "telefono", label: "Telefono", category: "oggetti", image: "📱", modelText: "drin drin" },
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
