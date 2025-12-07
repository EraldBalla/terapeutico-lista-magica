/**
 * Hook per la sintesi vocale con voce italiana amichevole
 * Usa la Web Speech API con parametri ottimizzati per bambini
 */
import { useState, useEffect, useCallback, useRef } from "react";

let cachedFriendlyVoice: SpeechSynthesisVoice | null = null;

function getFriendlyItalianVoice(): SpeechSynthesisVoice | null {
  if (cachedFriendlyVoice) return cachedFriendlyVoice;

  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) {
    return null;
  }

  // 1. Prova a prendere una voce italiana "amichevole" (child, kids, bambino, nomi femminili comuni)
  const friendly = voices.find(v =>
    v.lang.toLowerCase().startsWith("it") &&
    /child|kids|bambin|giulia|chiara|sofia|lucia|alice|federica|elsa/i.test(v.name)
  );

  // 2. Altrimenti qualsiasi voce italiana
  const italian = friendly ?? voices.find(v =>
    v.lang.toLowerCase().startsWith("it")
  );

  cachedFriendlyVoice = italian ?? null;
  return cachedFriendlyVoice;
}

export interface UseFriendlySpeechOptions {
  rate?: number;  // Default 0.4 (molto lento)
  pitch?: number; // Default 1.0
}

export function useFriendlySpeech(options: UseFriendlySpeechOptions = {}) {
  const { rate = 0.4, pitch = 1.0 } = options;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceReady, setVoiceReady] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Inizializza le voci quando disponibili
  useEffect(() => {
    if (!("speechSynthesis" in window)) return;

    const handleVoicesChanged = () => {
      const voice = getFriendlyItalianVoice();
      if (voice) {
        setVoiceReady(true);
      }
    };

    // Chrome richiede questo evento
    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
    
    // Prova subito (funziona in Firefox/Safari)
    handleVoicesChanged();

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const speak = useCallback((text: string) => {
    if (!("speechSynthesis" in window)) {
      console.warn("Web Speech API non supportata");
      return;
    }

    // Ferma qualsiasi sintesi in corso
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "it-IT";
    utterance.rate = rate;
    utterance.pitch = pitch;

    const voice = getFriendlyItalianVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [rate, pitch]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  return {
    speak,
    stop,
    isSpeaking,
    voiceReady,
  };
}
