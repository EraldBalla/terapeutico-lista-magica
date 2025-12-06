export interface ShoppingItem {
  id: string;
  nome: string;
  immagine: string;
  descrizione?: string;
}

export interface ShoppingListScene {
  id: string;
  scene_type: "shopping_list_scene";
  difficulty_tier: 1 | 2 | 3;
  target_phonemes: string[];
  title: string;
  modalita: "semplice" | "indovinello" | "memoria";
  instructions: string;
  lista_della_spesa: ShoppingItem[];
  oggetti_disponibili: ShoppingItem[];
  success_message: string;
  error_message: string;
}

// Tier 1 - Facile: 2-4 oggetti, richieste dirette, pochi distrattori
const tier1Scenes: ShoppingListScene[] = [
  {
    id: "t1-frutta-base",
    scene_type: "shopping_list_scene",
    difficulty_tier: 1,
    target_phonemes: ["lessico"],
    title: "Frutta per merenda",
    modalita: "semplice",
    instructions: "Trova la frutta nella lista per fare una buona merenda!",
    lista_della_spesa: [
      { id: "mela", nome: "mela", immagine: "🍎" },
      { id: "banana", nome: "banana", immagine: "🍌" },
    ],
    oggetti_disponibili: [
      { id: "mela", nome: "mela", immagine: "🍎" },
      { id: "banana", nome: "banana", immagine: "🍌" },
      { id: "biscotti", nome: "biscotti", immagine: "🍪" },
      { id: "latte", nome: "latte", immagine: "🥛" },
    ],
    success_message: "Bravissimo! Hai trovato tutta la frutta! 🎉",
    error_message: "Questo non serve, cerca nella lista!",
  },
  {
    id: "t1-colazione",
    scene_type: "shopping_list_scene",
    difficulty_tier: 1,
    target_phonemes: ["lessico"],
    title: "Colazione del campione",
    modalita: "semplice",
    instructions: "Prendi gli ingredienti per una super colazione!",
    lista_della_spesa: [
      { id: "latte", nome: "latte", immagine: "🥛" },
      { id: "pane", nome: "pane", immagine: "🍞" },
      { id: "marmellata", nome: "marmellata", immagine: "🍯" },
    ],
    oggetti_disponibili: [
      { id: "latte", nome: "latte", immagine: "🥛" },
      { id: "pane", nome: "pane", immagine: "🍞" },
      { id: "marmellata", nome: "marmellata", immagine: "🍯" },
      { id: "pizza", nome: "pizza", immagine: "🍕" },
      { id: "gelato", nome: "gelato", immagine: "🍦" },
    ],
    success_message: "Ottimo! Colazione pronta! ☀️",
    error_message: "Questo non va bene per colazione!",
  },
  {
    id: "t1-verdure",
    scene_type: "shopping_list_scene",
    difficulty_tier: 1,
    target_phonemes: ["lessico"],
    title: "Verdure dell'orto",
    modalita: "semplice",
    instructions: "Raccogli le verdure fresche per la cena!",
    lista_della_spesa: [
      { id: "carota", nome: "carota", immagine: "🥕" },
      { id: "pomodoro", nome: "pomodoro", immagine: "🍅" },
    ],
    oggetti_disponibili: [
      { id: "carota", nome: "carota", immagine: "🥕" },
      { id: "pomodoro", nome: "pomodoro", immagine: "🍅" },
      { id: "torta", nome: "torta", immagine: "🎂" },
      { id: "caramella", nome: "caramella", immagine: "🍬" },
    ],
    success_message: "Che belle verdure fresche! 🥗",
    error_message: "Questo non è una verdura!",
  },
];

// Tier 2 - Medio: 4-6 oggetti, mix richieste e descrizioni, più distrattori
const tier2Scenes: ShoppingListScene[] = [
  {
    id: "t2-picnic",
    scene_type: "shopping_list_scene",
    difficulty_tier: 2,
    target_phonemes: ["lessico", "comprensione"],
    title: "Picnic al parco",
    modalita: "semplice",
    instructions: "Prepara il cestino per un fantastico picnic!",
    lista_della_spesa: [
      { id: "panino", nome: "panino", immagine: "🥪" },
      { id: "mela", nome: "mela", immagine: "🍎" },
      { id: "succo", nome: "succo", immagine: "🧃" },
      { id: "biscotti", nome: "biscotti", immagine: "🍪" },
    ],
    oggetti_disponibili: [
      { id: "panino", nome: "panino", immagine: "🥪" },
      { id: "mela", nome: "mela", immagine: "🍎" },
      { id: "succo", nome: "succo", immagine: "🧃" },
      { id: "biscotti", nome: "biscotti", immagine: "🍪" },
      { id: "zuppa", nome: "zuppa", immagine: "🍲" },
      { id: "pesce", nome: "pesce", immagine: "🐟" },
      { id: "banana", nome: "banana", immagine: "🍌" },
      { id: "formaggio", nome: "formaggio", immagine: "🧀" },
    ],
    success_message: "Cestino pronto! Andiamo al parco! 🌳",
    error_message: "Questo non serve per il picnic!",
  },
  {
    id: "t2-indovinello-cibo",
    scene_type: "shopping_list_scene",
    difficulty_tier: 2,
    target_phonemes: ["comprensione"],
    title: "Indovina cosa cerco!",
    modalita: "indovinello",
    instructions: "Leggi gli indovinelli e trova il cibo giusto!",
    lista_della_spesa: [
      { id: "formaggio", nome: "formaggio", immagine: "🧀", descrizione: "Sono giallo e bucherellato, i topolini mi adorano!" },
      { id: "gelato", nome: "gelato", immagine: "🍦", descrizione: "Sono freddo e dolce, mi mangi d'estate nel cono!" },
      { id: "carota", nome: "carota", immagine: "🥕", descrizione: "Sono arancione e croccante, piaccio molto ai coniglietti!" },
      { id: "uovo", nome: "uovo", immagine: "🥚", descrizione: "Sono ovale e dentro sono giallo, la gallina mi fa!" },
    ],
    oggetti_disponibili: [
      { id: "formaggio", nome: "formaggio", immagine: "🧀" },
      { id: "gelato", nome: "gelato", immagine: "🍦" },
      { id: "carota", nome: "carota", immagine: "🥕" },
      { id: "uovo", nome: "uovo", immagine: "🥚" },
      { id: "latte", nome: "latte", immagine: "🥛" },
      { id: "pane", nome: "pane", immagine: "🍞" },
      { id: "mela", nome: "mela", immagine: "🍎" },
      { id: "pomodoro", nome: "pomodoro", immagine: "🍅" },
    ],
    success_message: "Sei un campione degli indovinelli! 🧩",
    error_message: "Mmm, non è quello... rileggi l'indovinello!",
  },
  {
    id: "t2-pranzo-famiglia",
    scene_type: "shopping_list_scene",
    difficulty_tier: 2,
    target_phonemes: ["lessico"],
    title: "Pranzo in famiglia",
    modalita: "semplice",
    instructions: "Compra tutto per preparare un bel pranzo!",
    lista_della_spesa: [
      { id: "pasta", nome: "pasta", immagine: "🍝" },
      { id: "pomodoro", nome: "pomodoro", immagine: "🍅" },
      { id: "formaggio", nome: "formaggio", immagine: "🧀" },
      { id: "insalata", nome: "insalata", immagine: "🥬" },
      { id: "acqua", nome: "acqua", immagine: "💧" },
    ],
    oggetti_disponibili: [
      { id: "pasta", nome: "pasta", immagine: "🍝" },
      { id: "pomodoro", nome: "pomodoro", immagine: "🍅" },
      { id: "formaggio", nome: "formaggio", immagine: "🧀" },
      { id: "insalata", nome: "insalata", immagine: "🥬" },
      { id: "acqua", nome: "acqua", immagine: "💧" },
      { id: "cioccolato", nome: "cioccolato", immagine: "🍫" },
      { id: "caramella", nome: "caramella", immagine: "🍬" },
      { id: "pizza", nome: "pizza", immagine: "🍕" },
      { id: "patatine", nome: "patatine", immagine: "🍟" },
    ],
    success_message: "A tavola! Il pranzo è servito! 🍽️",
    error_message: "Questo non ci serve per il pranzo!",
  },
];

// Tier 3 - Difficile: 6-8 oggetti, indovinelli, memoria, regole
const tier3Scenes: ShoppingListScene[] = [
  {
    id: "t3-memoria-spesa",
    scene_type: "shopping_list_scene",
    difficulty_tier: 3,
    target_phonemes: ["memoria", "lessico"],
    title: "Ricorda la lista!",
    modalita: "memoria",
    instructions: "Guarda bene la lista, poi scomparirà! Ricorda cosa devi prendere!",
    lista_della_spesa: [
      { id: "pane", nome: "pane", immagine: "🍞" },
      { id: "latte", nome: "latte", immagine: "🥛" },
      { id: "mela", nome: "mela", immagine: "🍎" },
      { id: "uovo", nome: "uovo", immagine: "🥚" },
      { id: "formaggio", nome: "formaggio", immagine: "🧀" },
      { id: "yogurt", nome: "yogurt", immagine: "🥛" },
    ],
    oggetti_disponibili: [
      { id: "pane", nome: "pane", immagine: "🍞" },
      { id: "latte", nome: "latte", immagine: "🥛" },
      { id: "mela", nome: "mela", immagine: "🍎" },
      { id: "uovo", nome: "uovo", immagine: "🥚" },
      { id: "formaggio", nome: "formaggio", immagine: "🧀" },
      { id: "yogurt", nome: "yogurt", immagine: "🥛" },
      { id: "pizza", nome: "pizza", immagine: "🍕" },
      { id: "gelato", nome: "gelato", immagine: "🍦" },
      { id: "torta", nome: "torta", immagine: "🎂" },
      { id: "cioccolato", nome: "cioccolato", immagine: "🍫" },
      { id: "banana", nome: "banana", immagine: "🍌" },
      { id: "arancia", nome: "arancia", immagine: "🍊" },
    ],
    success_message: "Memoria da elefante! Hai ricordato tutto! 🐘",
    error_message: "Mmm, non ricordo questo nella lista...",
  },
  {
    id: "t3-indovinelli-avanzati",
    scene_type: "shopping_list_scene",
    difficulty_tier: 3,
    target_phonemes: ["comprensione", "lessico"],
    title: "Super indovinelli!",
    modalita: "indovinello",
    instructions: "Indovinelli difficili! Pensa bene prima di rispondere!",
    lista_della_spesa: [
      { id: "anguria", nome: "anguria", immagine: "🍉", descrizione: "Sono grande e verde fuori, rossa e dolce dentro, piena di semini neri!" },
      { id: "mais", nome: "mais", immagine: "🌽", descrizione: "Cresco in pannocchia, sono giallo e scoppiando divento pop-corn!" },
      { id: "cipolla", nome: "cipolla", immagine: "🧅", descrizione: "Ho tanti strati come un vestito, e quando mi tagli faccio piangere!" },
      { id: "fungo", nome: "fungo", immagine: "🍄", descrizione: "Cresco nel bosco, ho un cappello ma non sono un berretto!" },
      { id: "avocado", nome: "avocado", immagine: "🥑", descrizione: "Sono verde e morbido, ho un grande seme dentro e vengo dal Messico!" },
      { id: "cocco", nome: "cocco", immagine: "🥥", descrizione: "Sono duro e peloso fuori, bianco e dolce dentro, cresco sulle palme!" },
    ],
    oggetti_disponibili: [
      { id: "anguria", nome: "anguria", immagine: "🍉" },
      { id: "mais", nome: "mais", immagine: "🌽" },
      { id: "cipolla", nome: "cipolla", immagine: "🧅" },
      { id: "fungo", nome: "fungo", immagine: "🍄" },
      { id: "avocado", nome: "avocado", immagine: "🥑" },
      { id: "cocco", nome: "cocco", immagine: "🥥" },
      { id: "limone", nome: "limone", immagine: "🍋" },
      { id: "fragola", nome: "fragola", immagine: "🍓" },
      { id: "pesca", nome: "pesca", immagine: "🍑" },
      { id: "ciliegia", nome: "ciliegia", immagine: "🍒" },
      { id: "uva", nome: "uva", immagine: "🍇" },
      { id: "kiwi", nome: "kiwi", immagine: "🥝" },
    ],
    success_message: "Sei un genio degli indovinelli! 🌟",
    error_message: "Non è quello... rifletti sull'indovinello!",
  },
  {
    id: "t3-festa-compleanno",
    scene_type: "shopping_list_scene",
    difficulty_tier: 3,
    target_phonemes: ["lessico", "comprensione", "memoria"],
    title: "Festa di compleanno!",
    modalita: "semplice",
    instructions: "Compra tutto per una super festa! Attenzione: sono tante cose!",
    lista_della_spesa: [
      { id: "torta", nome: "torta", immagine: "🎂" },
      { id: "palloncini", nome: "palloncini", immagine: "🎈" },
      { id: "regalo", nome: "regalo", immagine: "🎁" },
      { id: "succo", nome: "succo", immagine: "🧃" },
      { id: "patatine", nome: "patatine", immagine: "🍟" },
      { id: "pizza", nome: "pizza", immagine: "🍕" },
      { id: "gelato", nome: "gelato", immagine: "🍦" },
      { id: "caramelle", nome: "caramelle", immagine: "🍬" },
    ],
    oggetti_disponibili: [
      { id: "torta", nome: "torta", immagine: "🎂" },
      { id: "palloncini", nome: "palloncini", immagine: "🎈" },
      { id: "regalo", nome: "regalo", immagine: "🎁" },
      { id: "succo", nome: "succo", immagine: "🧃" },
      { id: "patatine", nome: "patatine", immagine: "🍟" },
      { id: "pizza", nome: "pizza", immagine: "🍕" },
      { id: "gelato", nome: "gelato", immagine: "🍦" },
      { id: "caramelle", nome: "caramelle", immagine: "🍬" },
      { id: "broccoli", nome: "broccoli", immagine: "🥦" },
      { id: "insalata", nome: "insalata", immagine: "🥬" },
      { id: "carota", nome: "carota", immagine: "🥕" },
      { id: "zuppa", nome: "zuppa", immagine: "🍲" },
      { id: "pesce", nome: "pesce", immagine: "🐟" },
      { id: "uovo", nome: "uovo", immagine: "🥚" },
    ],
    success_message: "Che festa fantastica! Buon compleanno! 🥳",
    error_message: "Questo non serve per la festa!",
  },
];

export const allShoppingScenes: ShoppingListScene[] = [
  ...tier1Scenes,
  ...tier2Scenes,
  ...tier3Scenes,
];

/**
 * Filtra le scene per livello di difficoltà.
 */
export const getScenesByDifficulty = (tier: 1 | 2 | 3): ShoppingListScene[] => {
  return allShoppingScenes.filter((scene) => scene.difficulty_tier === tier);
};

export const getSceneById = (id: string): ShoppingListScene | undefined => {
  return allShoppingScenes.find((scene) => scene.id === id);
};
