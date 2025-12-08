// Types for Faccia Buffa game
export type SlotType =
  | "occhio_sx"
  | "occhio_dx"
  | "naso"
  | "bocca"
  | "orecchio_sx"
  | "orecchio_dx"
  | "cappello"
  | "braccio_sx"
  | "braccio_dx";

export type PieceCategory = "faccia" | "corpo" | "extra";

export type PieceType =
  | "occhi"
  | "naso"
  | "bocca"
  | "orecchio"
  | "cappello"
  | "braccio"
  | "baffi"
  | "occhiali"
  | "extra";

export type Piece = {
  id: string;
  label: string;
  category: PieceCategory;
  type: PieceType;
  image: string;
};

export type SlotState = {
  slot: SlotType;
  pieceId: string | null;
};

export type GameMode = "libero" | "turni" | "istruzioni";

export type Turn = "genitore" | "bambino";

export type Mission = {
  id: string;
  level: number;
  description: string;
  conditions: { type: PieceType; pieceId?: string }[];
};

// Slot configuration with accepted piece types
export const SLOT_CONFIG: Record<SlotType, { acceptedTypes: PieceType[]; label: string; position: string }> = {
  occhio_sx: { acceptedTypes: ["occhi"], label: "Occhio sinistro", position: "top-[22%] left-[25%]" },
  occhio_dx: { acceptedTypes: ["occhi"], label: "Occhio destro", position: "top-[22%] right-[25%]" },
  naso: { acceptedTypes: ["naso"], label: "Naso", position: "top-[40%] left-1/2 -translate-x-1/2" },
  bocca: { acceptedTypes: ["bocca"], label: "Bocca", position: "top-[58%] left-1/2 -translate-x-1/2" },
  orecchio_sx: { acceptedTypes: ["orecchio"], label: "Orecchio sinistro", position: "top-[35%] -left-[8%]" },
  orecchio_dx: { acceptedTypes: ["orecchio"], label: "Orecchio destro", position: "top-[35%] -right-[8%]" },
  cappello: { acceptedTypes: ["cappello"], label: "Cappello", position: "-top-[15%] left-1/2 -translate-x-1/2" },
  braccio_sx: { acceptedTypes: ["braccio"], label: "Braccio sinistro", position: "top-[70%] -left-[20%]" },
  braccio_dx: { acceptedTypes: ["braccio"], label: "Braccio destro", position: "top-[70%] -right-[20%]" },
};

// Pieces catalog
export const PIECES: Piece[] = [
  // Occhi (eyes)
  { id: "occhi_grandi", label: "Occhi grandi", category: "faccia", type: "occhi", image: "👀" },
  { id: "occhi_arrabbiati", label: "Occhi arrabbiati", category: "faccia", type: "occhi", image: "😠" },
  { id: "occhi_sorpresi", label: "Occhi sorpresi", category: "faccia", type: "occhi", image: "😲" },
  { id: "occhi_innamorati", label: "Occhi innamorati", category: "faccia", type: "occhi", image: "😍" },
  { id: "occhi_addormentati", label: "Occhi addormentati", category: "faccia", type: "occhi", image: "😴" },
  { id: "occhi_stelle", label: "Occhi a stella", category: "faccia", type: "occhi", image: "🤩" },
  
  // Nasi (noses)
  { id: "naso_rosso", label: "Naso rosso", category: "faccia", type: "naso", image: "🔴" },
  { id: "naso_pagliaccio", label: "Naso da pagliaccio", category: "faccia", type: "naso", image: "🤡" },
  { id: "naso_maiale", label: "Naso da maialino", category: "faccia", type: "naso", image: "🐽" },
  { id: "naso_carota", label: "Naso carota", category: "faccia", type: "naso", image: "🥕" },
  
  // Bocche (mouths)
  { id: "bocca_sorriso", label: "Bocca sorridente", category: "faccia", type: "bocca", image: "😊" },
  { id: "bocca_triste", label: "Bocca triste", category: "faccia", type: "bocca", image: "😢" },
  { id: "bocca_lingua", label: "Bocca con lingua", category: "faccia", type: "bocca", image: "😛" },
  { id: "bocca_bacio", label: "Bocca bacio", category: "faccia", type: "bocca", image: "😘" },
  { id: "bocca_sorpresa", label: "Bocca sorpresa", category: "faccia", type: "bocca", image: "😮" },
  { id: "bocca_arrabbiata", label: "Bocca arrabbiata", category: "faccia", type: "bocca", image: "😤" },
  
  // Orecchie (ears)
  { id: "orecchie_normali", label: "Orecchie normali", category: "corpo", type: "orecchio", image: "👂" },
  { id: "orecchie_elfo", label: "Orecchie da elfo", category: "corpo", type: "orecchio", image: "🧝" },
  { id: "orecchie_coniglio", label: "Orecchie da coniglio", category: "corpo", type: "orecchio", image: "🐰" },
  
  // Cappelli (hats)
  { id: "cappello_mago", label: "Cappello da mago", category: "corpo", type: "cappello", image: "🎩" },
  { id: "cappello_festa", label: "Cappello da festa", category: "corpo", type: "cappello", image: "🥳" },
  { id: "cappello_corona", label: "Corona", category: "corpo", type: "cappello", image: "👑" },
  { id: "cappello_baseball", label: "Cappello baseball", category: "corpo", type: "cappello", image: "🧢" },
  { id: "cappello_cowboy", label: "Cappello cowboy", category: "corpo", type: "cappello", image: "🤠" },
  { id: "cappello_fiocco", label: "Fiocco", category: "corpo", type: "cappello", image: "🎀" },
  
  // Braccia (arms)
  { id: "braccio_saluto", label: "Braccio che saluta", category: "corpo", type: "braccio", image: "👋" },
  { id: "braccio_forza", label: "Braccio forte", category: "corpo", type: "braccio", image: "💪" },
  { id: "braccio_mano", label: "Mano aperta", category: "corpo", type: "braccio", image: "✋" },
  { id: "braccio_pollice", label: "Pollice in su", category: "corpo", type: "braccio", image: "👍" },
  { id: "braccio_vittoria", label: "Segno di vittoria", category: "corpo", type: "braccio", image: "✌️" },
  
  // Extra/Accessori
  { id: "baffi_classici", label: "Baffi classici", category: "extra", type: "baffi", image: "🥸" },
  { id: "occhiali_sole", label: "Occhiali da sole", category: "extra", type: "occhiali", image: "🕶️" },
  { id: "occhiali_nerd", label: "Occhiali da nerd", category: "extra", type: "occhiali", image: "🤓" },
  { id: "extra_fiore", label: "Fiore", category: "extra", type: "extra", image: "🌸" },
  { id: "extra_farfalla", label: "Farfalla", category: "extra", type: "extra", image: "🦋" },
  { id: "extra_stella", label: "Stella", category: "extra", type: "extra", image: "⭐" },
];

// Initial empty slots
export const INITIAL_SLOTS: SlotState[] = [
  { slot: "occhio_sx", pieceId: null },
  { slot: "occhio_dx", pieceId: null },
  { slot: "naso", pieceId: null },
  { slot: "bocca", pieceId: null },
  { slot: "orecchio_sx", pieceId: null },
  { slot: "orecchio_dx", pieceId: null },
  { slot: "cappello", pieceId: null },
  { slot: "braccio_sx", pieceId: null },
  { slot: "braccio_dx", pieceId: null },
];

// Missions for "Segui le istruzioni" mode
export const MISSIONS: Mission[] = [
  {
    id: "missione_1",
    level: 1,
    description: "Metti gli occhi grandi e il naso rosso.",
    conditions: [
      { type: "occhi", pieceId: "occhi_grandi" },
      { type: "naso", pieceId: "naso_rosso" },
    ],
  },
  {
    id: "missione_2",
    level: 1,
    description: "Metti la bocca sorridente e le orecchie normali.",
    conditions: [
      { type: "bocca", pieceId: "bocca_sorriso" },
      { type: "orecchio" },
    ],
  },
  {
    id: "missione_3",
    level: 1,
    description: "Metti il cappello da festa e gli occhi sorpresi.",
    conditions: [
      { type: "cappello", pieceId: "cappello_festa" },
      { type: "occhi", pieceId: "occhi_sorpresi" },
    ],
  },
  {
    id: "missione_4",
    level: 2,
    description: "Crea una faccia triste: metti la bocca triste, gli occhi addormentati e il naso da pagliaccio.",
    conditions: [
      { type: "bocca", pieceId: "bocca_triste" },
      { type: "occhi", pieceId: "occhi_addormentati" },
      { type: "naso", pieceId: "naso_pagliaccio" },
    ],
  },
  {
    id: "missione_5",
    level: 2,
    description: "Crea un re buffo: corona, naso da maialino e bocca con la lingua.",
    conditions: [
      { type: "cappello", pieceId: "cappello_corona" },
      { type: "naso", pieceId: "naso_maiale" },
      { type: "bocca", pieceId: "bocca_lingua" },
    ],
  },
  {
    id: "missione_6",
    level: 3,
    description: "Crea un cowboy felice: cappello cowboy, occhi innamorati, naso rosso, bocca sorridente e braccia che salutano.",
    conditions: [
      { type: "cappello", pieceId: "cappello_cowboy" },
      { type: "occhi", pieceId: "occhi_innamorati" },
      { type: "naso", pieceId: "naso_rosso" },
      { type: "bocca", pieceId: "bocca_sorriso" },
      { type: "braccio" },
    ],
  },
];

// Reinforcement messages
export const SUCCESS_MESSAGES = [
  "Ben fatto! Hai creato una faccia buffissima! 🎉",
  "Fantastico! La tua faccia è davvero speciale! ⭐",
  "Bravissimo! Che faccia divertente! 🌟",
  "Ottimo lavoro! Sei un vero artista! 🎨",
  "Perfetto! La faccia è pronta! 🥳",
];

export const MISSION_COMPLETE_MESSAGES = [
  "Ottimo lavoro! Hai seguito tutte le indicazioni! 🎯",
  "Perfetto! Hai completato la missione! ⭐",
  "Bravissimo! Hai fatto tutto giusto! 🏆",
];

export const getRandomSuccessMessage = () => 
  SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)];

export const getRandomMissionMessage = () => 
  MISSION_COMPLETE_MESSAGES[Math.floor(Math.random() * MISSION_COMPLETE_MESSAGES.length)];

// Helper to get piece by ID
export const getPieceById = (id: string): Piece | undefined => 
  PIECES.find(p => p.id === id);

// Helper to get pieces by category
export const getPiecesByCategory = (category: PieceCategory): Piece[] => 
  PIECES.filter(p => p.category === category);

// Get random mission by level
export const getRandomMission = (level?: number): Mission => {
  const filtered = level ? MISSIONS.filter(m => m.level === level) : MISSIONS;
  return filtered[Math.floor(Math.random() * filtered.length)];
};
