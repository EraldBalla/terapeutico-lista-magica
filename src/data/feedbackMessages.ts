/**
 * Frasi di feedback per il gioco "Viaggio nel mondo degli oggetti".
 * 
 * Tono: positivo, non giudicante, giocoso, adatto a bambini 4-9 anni.
 * NO frasi tipo "hai fatto centro", "colpo perfetto", metafore da tiro/guerra.
 */

/**
 * Frasi di incoraggiamento per gli errori.
 * Vengono scelte casualmente ad ogni errore.
 */
export const ERROR_ENCOURAGEMENT_MESSAGES: string[] = [
  "Quasi! Riproviamo insieme.",
  "Non fa niente, prova a guardare ancora.",
  "Bravo che ci provi! Scegli un altro oggetto.",
  "Ops, questo non è nella lista, ma ci stiamo avvicinando!",
  "Gli errori ci aiutano a imparare, riproviamo!",
  "Sei sulla strada giusta, guardiamo meglio.",
  "Capita a tutti di sbagliare, ci riproviamo!",
  "Hmm, non quello... ma sei bravissimo! Riprova.",
  "Oops! Niente paura, riprova con calma.",
  "Ci sei quasi! Guarda bene la lista.",
];

/**
 * Frasi positive per i successi (singolo oggetto corretto).
 * Vengono scelte casualmente ad ogni risposta corretta.
 */
export const SUCCESS_FUN_MESSAGES: string[] = [
  "Bravo, hai scelto proprio bene!",
  "Ottimo lavoro!",
  "Fantastico, stai diventando un esperto!",
  "Super, che attenzione!",
  "Che occhi attenti!",
  "Bravissimo, continua così!",
  "Giusto! Sei proprio bravo!",
  "Perfetto, vai avanti così!",
  "Benissimo!",
  "Esatto, proprio quello!",
];

/**
 * Frasi per il completamento di una scena.
 */
export const COMPLETION_MESSAGES: string[] = [
  "Fantastico! Hai trovato tutto!",
  "Evviva! Missione completata!",
  "Sei un vero esperto!",
  "Bravo! Hai fatto un ottimo lavoro!",
  "Complimenti! Tutto giusto!",
  "Benissimo, siamo pronti per il prossimo gioco!",
  "Che bel lavoro hai fatto!",
  "Super! Hai completato tutto!",
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
