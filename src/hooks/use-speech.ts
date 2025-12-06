/**
 * Hook per la sintesi vocale (Text-to-Speech)
 * 
 * Utilizza la Web Speech API del browser per pronunciare parole in italiano.
 * Funziona con il volume del dispositivo dell'utente.
 */

import { useState, useCallback, useRef } from "react";

export interface UseSpeechOptions {
  lang?: string;
  rate?: number;
  pitch?: number;
}

export const useSpeech = (options: UseSpeechOptions = {}) => {
  const { lang = "it-IT", rate = 1, pitch = 1 } = options;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  /**
   * Pronuncia una parola/frase usando la sintesi vocale del browser.
   * Se già in riproduzione, interrompe e riavvia.
   * 
   * @param text - Il testo da pronunciare
   */
  const speakWord = useCallback((text: string) => {
    // Verifica se speechSynthesis è disponibile
    if (!("speechSynthesis" in window)) {
      console.warn("[useSpeech] Web Speech API non supportata in questo browser");
      return;
    }

    try {
      // Se già in riproduzione, interrompi prima
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;
      utterance.pitch = pitch;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = (event) => {
        console.warn("[useSpeech] Errore durante la sintesi vocale:", event.error);
        setIsSpeaking(false);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.warn("[useSpeech] Errore nell'avvio della sintesi vocale:", error);
      setIsSpeaking(false);
    }
  }, [lang, rate, pitch]);

  /**
   * Interrompe la sintesi vocale in corso.
   */
  const stopSpeaking = useCallback(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  return {
    speakWord,
    stopSpeaking,
    isSpeaking,
  };
};
