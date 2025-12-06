/**
 * Configurazioni e costanti per i giochi terapeutici.
 * 
 * TEMPO DI MEMORIZZAZIONE:
 * Per la modalità "memoria" del gioco "La lista della spesa",
 * il tempo di visualizzazione della lista prima che scompaia
 * dipende SOLO da difficulty_tier (1, 2, 3).
 * 
 * - Tier 1 (facile): tempo più lungo
 * - Tier 2 (medio): tempo medio
 * - Tier 3 (difficile): tempo più corto
 */

/**
 * Mappa dei tempi di memorizzazione in millisecondi.
 * Chiave: difficulty_tier (1, 2, 3)
 * 
 * Tempi generosi per permettere ai bambini di memorizzare bene.
 */
export const MEMORY_DISPLAY_TIME_MS: Record<1 | 2 | 3, number> = {
  1: 12000, // 12 secondi per tier 1 (facile) - tempo più lungo
  2: 10000, // 10 secondi per tier 2 (medio)
  3: 8000,  // 8 secondi per tier 3 (difficile) - tempo più corto
};

/**
 * Calcola il tempo di memorizzazione per una scena.
 * 
 * @param difficultyTier - Livello di difficoltà della scena (1, 2 o 3)
 * @returns Tempo in millisecondi per la visualizzazione della lista
 */
export const getMemoryDisplayTime = (difficultyTier: 1 | 2 | 3): number => {
  return MEMORY_DISPLAY_TIME_MS[difficultyTier];
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
