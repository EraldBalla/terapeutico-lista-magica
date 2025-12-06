/**
 * Configurazioni e costanti per i giochi terapeutici.
 * 
 * FASCIA D'ETÀ (ageBand):
 * - "4-5": bambini di 4-5 anni → tempi più lunghi, esercizi più semplici
 * - "6-8": bambini di 6-8 anni → tempi più corti, esercizi più complessi
 * 
 * TEMPO DI MEMORIZZAZIONE:
 * Per la modalità "memoria" del gioco "La lista della spesa",
 * il tempo di visualizzazione della lista prima che scompaia
 * dipende da difficulty_tier e fascia d'età.
 * 
 * Per i bambini 4-5 anni il tempo è più lungo (più facile da memorizzare).
 * Per i bambini 6-8 anni il tempo è più corto (sfida maggiore).
 */

export type AgeBand = "4-5" | "6-8";

/**
 * Mappa dei tempi di memorizzazione in millisecondi.
 * Chiave esterna: fascia d'età
 * Chiave interna: difficulty_tier (1, 2, 3)
 * 
 * Valori calibrati per essere generosi e risolvere il problema
 * del "tempo troppo corto".
 */
export const MEMORY_DISPLAY_TIME_MS: Record<AgeBand, Record<1 | 2 | 3, number>> = {
  // Fascia 4-5 anni: tempi più lunghi per facilitare la memorizzazione
  "4-5": {
    1: 10000, // 10 secondi per tier 1 (facile)
    2: 12000, // 12 secondi per tier 2 (medio)
    3: 14000, // 14 secondi per tier 3 (difficile)
  },
  // Fascia 6-8 anni: tempi più corti, esercizi più sfidanti
  "6-8": {
    1: 8000,  // 8 secondi per tier 1 (facile)
    2: 10000, // 10 secondi per tier 2 (medio)
    3: 12000, // 12 secondi per tier 3 (difficile)
  },
};

/**
 * Fascia d'età di default se non specificata.
 */
export const DEFAULT_AGE_BAND: AgeBand = "4-5";

/**
 * Calcola il tempo di memorizzazione per una scena.
 * 
 * @param difficultyTier - Livello di difficoltà della scena (1, 2 o 3)
 * @param ageBand - Fascia d'età del paziente (opzionale, default "4-5")
 * @returns Tempo in millisecondi per la visualizzazione della lista
 */
export const getMemoryDisplayTime = (
  difficultyTier: 1 | 2 | 3,
  ageBand?: AgeBand
): number => {
  const band = ageBand || DEFAULT_AGE_BAND;
  return MEMORY_DISPLAY_TIME_MS[band][difficultyTier];
};

/**
 * Configurazione audio/TTS del gioco.
 * Può essere estesa in futuro per impostazioni globali.
 */
export interface GameAudioSettings {
  ttsEnabled: boolean;
  soundEffectsEnabled: boolean;
}

export const DEFAULT_AUDIO_SETTINGS: GameAudioSettings = {
  ttsEnabled: true,        // Pulsanti audio sui nomi oggetti abilitati di default
  soundEffectsEnabled: true,
};
