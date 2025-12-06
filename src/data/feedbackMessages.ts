/**
 * Frasi di feedback per il gioco "La lista della spesa".
 * 
 * Tono: positivo, non giudicante, giocoso, adatto a bambini 4-9 anni.
 */

/**
 * Frasi di incoraggiamento per gli errori.
 * Vengono scelte casualmente ad ogni errore.
 */
export const ERROR_ENCOURAGEMENT_MESSAGES: string[] = [
  "Quasi! Riproviamo insieme! 💪",
  "Non fa niente, guarda meglio e ritenta!",
  "Bravo che ci provi! Prova un'altra volta!",
  "Ops, questo non era nella lista… ma ci stiamo avvicinando!",
  "Gli errori ci aiutano a imparare, riproviamo!",
  "Sei sulla strada giusta, guarda ancora!",
  "Capita a tutti di sbagliare, ci riproviamo!",
  "Hmm, non quello… ma sei bravissimo! Riprova!",
  "Oops! Niente paura, riprova con calma!",
  "Ci sei quasi! Guarda bene la lista!",
];

/**
 * Frasi divertenti per i successi.
 * Vengono scelte casualmente ad ogni risposta corretta.
 */
export const SUCCESS_FUN_MESSAGES: string[] = [
  "Fantastico, colpo da vero chef! 🎉",
  "Carrello perfetto, missione compiuta!",
  "Wow, che spesa ordinata!",
  "Hai una memoria da supereroe! 🦸",
  "La cassiera è super felice di te!",
  "Bravissimo! Hai fatto centro! 🎯",
  "Ottimo lavoro, continua così!",
  "Sei un campione della spesa! 🏆",
  "Giusto! Che occhio di falco! 👀",
  "Perfetto! Il carrello ti ringrazia!",
];

/**
 * Frasi per il completamento di una scena.
 */
export const COMPLETION_MESSAGES: string[] = [
  "Fantastico! Hai completato la spesa! 🛒",
  "Evviva! Missione spesa completata! 🎊",
  "Sei un vero esperto della spesa! 🌟",
  "Bravo! Il carrello è pieno! 🛍️",
  "Complimenti! Spesa perfetta! ✨",
];

/**
 * Seleziona casualmente un messaggio da un array.
 */
export const getRandomMessage = (messages: string[]): string => {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
};

/**
 * Ottieni un messaggio di incoraggiamento casuale per un errore.
 */
export const getRandomErrorMessage = (): string => {
  return getRandomMessage(ERROR_ENCOURAGEMENT_MESSAGES);
};

/**
 * Ottieni un messaggio di successo casuale.
 */
export const getRandomSuccessMessage = (): string => {
  return getRandomMessage(SUCCESS_FUN_MESSAGES);
};

/**
 * Ottieni un messaggio di completamento casuale.
 */
export const getRandomCompletionMessage = (): string => {
  return getRandomMessage(COMPLETION_MESSAGES);
};
