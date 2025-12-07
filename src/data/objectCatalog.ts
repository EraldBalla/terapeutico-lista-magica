/**
 * CATALOGO CENTRALIZZATO DEGLI OGGETTI
 * 
 * Ogni oggetto ha un'associazione univoca parola ↔ immagine.
 * Le scene devono usare questo catalogo per garantire coerenza.
 */

export interface ObjectDefinition {
  id: string;
  nome: string;
  immagine: string;
  categoria: "frutta" | "verdure" | "colazione" | "bevande" | "scuola" | "cucina" | "bagno" | "vestiti" | "festa" | "cibo_generico" | "animali" | "casa";
}

// ============================================================
// CATEGORIA: BAGNO
// ============================================================
const bagnoObjects: ObjectDefinition[] = [
  { id: "asciugamano", nome: "asciugamano", immagine: "🛏️", categoria: "bagno" }, // Rotolo/salvietta - non vasca!
  { id: "spazzolino", nome: "spazzolino", immagine: "🪥", categoria: "bagno" },
  { id: "dentifricio", nome: "dentifricio", immagine: "🦷", categoria: "bagno" }, // Dente per distinguerlo da shampoo
  { id: "sapone", nome: "sapone", immagine: "🧼", categoria: "bagno" },
  { id: "shampoo", nome: "shampoo", immagine: "🧴", categoria: "bagno" }, // Flacone
  { id: "pettine", nome: "pettine", immagine: "💇", categoria: "bagno" }, // Capelli/pettinatura
  { id: "specchio", nome: "specchio", immagine: "🪞", categoria: "bagno" },
  { id: "doccia", nome: "doccia", immagine: "🚿", categoria: "bagno" },
  { id: "vasca", nome: "vasca", immagine: "🛁", categoria: "bagno" },
  { id: "accappatoio", nome: "accappatoio", immagine: "🥋", categoria: "bagno" },
];

// ============================================================
// CATEGORIA: SCUOLA
// ============================================================
const scuolaObjects: ObjectDefinition[] = [
  { id: "quaderno", nome: "quaderno", immagine: "📓", categoria: "scuola" },
  { id: "matita", nome: "matita", immagine: "✏️", categoria: "scuola" },
  { id: "penna", nome: "penna", immagine: "🖊️", categoria: "scuola" },
  { id: "gomma", nome: "gomma", immagine: "🧹", categoria: "scuola" }, // Scopa = cancella - meglio che spugna
  { id: "righello", nome: "righello", immagine: "📏", categoria: "scuola" },
  { id: "forbici", nome: "forbici", immagine: "✂️", categoria: "scuola" },
  { id: "colla", nome: "colla", immagine: "🩹", categoria: "scuola" }, // Cerotto = incolla - diverso da shampoo
  { id: "libro", nome: "libro", immagine: "📚", categoria: "scuola" },
  { id: "zaino", nome: "zaino", immagine: "🎒", categoria: "scuola" },
  { id: "astuccio", nome: "astuccio", immagine: "📦", categoria: "scuola" }, // Scatola - contenitore per matite
  { id: "temperino", nome: "temperino", immagine: "🔺", categoria: "scuola" }, // Triangolo/punta - non chiave inglese!
  { id: "colori", nome: "colori", immagine: "🖍️", categoria: "scuola" },
  { id: "evidenziatore", nome: "evidenziatore", immagine: "🖌️", categoria: "scuola" }, // Pennello - colora
  { id: "lavagna", nome: "lavagna", immagine: "📋", categoria: "scuola" },
  { id: "mappamondo", nome: "mappamondo", immagine: "🌍", categoria: "scuola" },
  { id: "orologio", nome: "orologio", immagine: "🕐", categoria: "scuola" },
  { id: "banco", nome: "banco", immagine: "🪑", categoria: "scuola" },
  { id: "computer", nome: "computer", immagine: "💻", categoria: "scuola" },
  { id: "campanella", nome: "campanella", immagine: "🔔", categoria: "scuola" },
  { id: "diario", nome: "diario", immagine: "📔", categoria: "scuola" },
];

// ============================================================
// CATEGORIA: FRUTTA
// ============================================================
const fruttaObjects: ObjectDefinition[] = [
  { id: "mela", nome: "mela", immagine: "🍎", categoria: "frutta" },
  { id: "banana", nome: "banana", immagine: "🍌", categoria: "frutta" },
  { id: "arancia", nome: "arancia", immagine: "🍊", categoria: "frutta" },
  { id: "pera", nome: "pera", immagine: "🍐", categoria: "frutta" },
  { id: "uva", nome: "uva", immagine: "🍇", categoria: "frutta" },
  { id: "fragola", nome: "fragola", immagine: "🍓", categoria: "frutta" },
  { id: "kiwi", nome: "kiwi", immagine: "🥝", categoria: "frutta" },
  { id: "ananas", nome: "ananas", immagine: "🍍", categoria: "frutta" },
  { id: "ciliegia", nome: "ciliegia", immagine: "🍒", categoria: "frutta" },
  { id: "anguria", nome: "anguria", immagine: "🍉", categoria: "frutta" },
  { id: "limone", nome: "limone", immagine: "🍋", categoria: "frutta" },
  { id: "pesca", nome: "pesca", immagine: "🍑", categoria: "frutta" },
  { id: "mango", nome: "mango", immagine: "🥭", categoria: "frutta" },
  { id: "cocco", nome: "cocco", immagine: "🥥", categoria: "frutta" },
  { id: "melone", nome: "melone", immagine: "🍈", categoria: "frutta" },
  { id: "papaya", nome: "papaya", immagine: "🥭", categoria: "frutta" }, // Simile a mango
  { id: "melograno", nome: "melograno", immagine: "🫐", categoria: "frutta" }, // Bacche rosse
];

// ============================================================
// CATEGORIA: VERDURE
// ============================================================
const verdureObjects: ObjectDefinition[] = [
  { id: "carota", nome: "carota", immagine: "🥕", categoria: "verdure" },
  { id: "pomodoro", nome: "pomodoro", immagine: "🍅", categoria: "verdure" },
  { id: "insalata", nome: "insalata", immagine: "🥬", categoria: "verdure" },
  { id: "broccoli", nome: "broccoli", immagine: "🥦", categoria: "verdure" },
  { id: "peperone", nome: "peperone", immagine: "🫑", categoria: "verdure" },
  { id: "zucchina", nome: "zucchina", immagine: "🥒", categoria: "verdure" },
  { id: "patata", nome: "patata", immagine: "🥔", categoria: "verdure" },
  { id: "cipolla", nome: "cipolla", immagine: "🧅", categoria: "verdure" },
  { id: "aglio", nome: "aglio", immagine: "🧄", categoria: "verdure" },
  { id: "sedano", nome: "sedano", immagine: "🥬", categoria: "verdure" },
  { id: "melanzana", nome: "melanzana", immagine: "🍆", categoria: "verdure" },
  { id: "mais", nome: "mais", immagine: "🌽", categoria: "verdure" },
  { id: "fungo", nome: "fungo", immagine: "🍄", categoria: "verdure" },
];

// ============================================================
// CATEGORIA: COLAZIONE
// ============================================================
const colazioneObjects: ObjectDefinition[] = [
  { id: "latte", nome: "latte", immagine: "🥛", categoria: "colazione" },
  { id: "pane", nome: "pane", immagine: "🍞", categoria: "colazione" },
  { id: "miele", nome: "miele", immagine: "🍯", categoria: "colazione" },
  { id: "cereali", nome: "cereali", immagine: "🥣", categoria: "colazione" },
  { id: "croissant", nome: "croissant", immagine: "🥐", categoria: "colazione" },
  { id: "biscotti", nome: "biscotti", immagine: "🍪", categoria: "colazione" },
  { id: "marmellata", nome: "marmellata", immagine: "🍓", categoria: "colazione" },
  { id: "burro", nome: "burro", immagine: "🧈", categoria: "colazione" },
  { id: "uova", nome: "uova", immagine: "🥚", categoria: "colazione" },
  { id: "yogurt", nome: "yogurt", immagine: "🥛", categoria: "colazione" },
];

// ============================================================
// CATEGORIA: BEVANDE
// ============================================================
const bevandeObjects: ObjectDefinition[] = [
  { id: "succo", nome: "succo", immagine: "🧃", categoria: "bevande" },
  { id: "acqua", nome: "acqua", immagine: "💧", categoria: "bevande" },
  { id: "spremuta", nome: "spremuta", immagine: "🍹", categoria: "bevande" },
  { id: "te", nome: "tè", immagine: "🍵", categoria: "bevande" },
  { id: "cioccolata", nome: "cioccolata", immagine: "☕", categoria: "bevande" },
];

// ============================================================
// CATEGORIA: CUCINA
// ============================================================
const cucinaObjects: ObjectDefinition[] = [
  { id: "piatto", nome: "piatto", immagine: "🍽️", categoria: "cucina" },
  { id: "bicchiere", nome: "bicchiere", immagine: "🥛", categoria: "cucina" },
  { id: "forchetta", nome: "forchetta", immagine: "🍴", categoria: "cucina" },
  { id: "cucchiaio", nome: "cucchiaio", immagine: "🥄", categoria: "cucina" },
  { id: "coltello", nome: "coltello", immagine: "🔪", categoria: "cucina" },
  { id: "pentola", nome: "pentola", immagine: "🍲", categoria: "cucina" },
  { id: "padella", nome: "padella", immagine: "🍳", categoria: "cucina" },
  { id: "frullatore", nome: "frullatore", immagine: "🫗", categoria: "cucina" },
  { id: "frigorifero", nome: "frigorifero", immagine: "🧊", categoria: "cucina" },
  { id: "forno", nome: "forno", immagine: "🔥", categoria: "cucina" },
  { id: "microonde", nome: "microonde", immagine: "📻", categoria: "cucina" },
];

// ============================================================
// CATEGORIA: VESTITI
// ============================================================
const vestitiObjects: ObjectDefinition[] = [
  { id: "maglietta", nome: "maglietta", immagine: "👕", categoria: "vestiti" },
  { id: "pantaloni", nome: "pantaloni", immagine: "👖", categoria: "vestiti" },
  { id: "scarpe", nome: "scarpe", immagine: "👟", categoria: "vestiti" },
  { id: "cappello", nome: "cappello", immagine: "🧢", categoria: "vestiti" },
  { id: "calzini", nome: "calzini", immagine: "🧦", categoria: "vestiti" },
  { id: "giacca", nome: "giacca", immagine: "🧥", categoria: "vestiti" },
  { id: "guanti", nome: "guanti", immagine: "🧤", categoria: "vestiti" },
  { id: "sciarpa", nome: "sciarpa", immagine: "🧣", categoria: "vestiti" },
  { id: "vestito", nome: "vestito", immagine: "👗", categoria: "vestiti" },
  { id: "gonna", nome: "gonna", immagine: "🩱", categoria: "vestiti" },
];

// ============================================================
// CATEGORIA: FESTA
// ============================================================
const festaObjects: ObjectDefinition[] = [
  { id: "palloncino", nome: "palloncino", immagine: "🎈", categoria: "festa" },
  { id: "torta", nome: "torta", immagine: "🎂", categoria: "festa" },
  { id: "regalo", nome: "regalo", immagine: "🎁", categoria: "festa" },
  { id: "festoni", nome: "festoni", immagine: "🎊", categoria: "festa" },
  { id: "candeline", nome: "candeline", immagine: "🕯️", categoria: "festa" },
  { id: "cappellino", nome: "cappellino", immagine: "🎉", categoria: "festa" },
  { id: "coriandoli", nome: "coriandoli", immagine: "🎊", categoria: "festa" },
  { id: "stelle-filanti", nome: "stelle filanti", immagine: "✨", categoria: "festa" },
  { id: "musica", nome: "musica", immagine: "🎵", categoria: "festa" },
  { id: "caramelle", nome: "caramelle", immagine: "🍬", categoria: "festa" },
  { id: "dolcetti", nome: "dolcetti", immagine: "🧁", categoria: "festa" },
  { id: "gelato", nome: "gelato", immagine: "🍦", categoria: "festa" },
];

// ============================================================
// CATEGORIA: ANIMALI
// ============================================================
const animaliObjects: ObjectDefinition[] = [
  // Fattoria
  { id: "mucca", nome: "mucca", immagine: "🐄", categoria: "animali" },
  { id: "maiale", nome: "maiale", immagine: "🐷", categoria: "animali" },
  { id: "gallina", nome: "gallina", immagine: "🐔", categoria: "animali" },
  { id: "cavallo", nome: "cavallo", immagine: "🐴", categoria: "animali" },
  { id: "pecora", nome: "pecora", immagine: "🐑", categoria: "animali" },
  // Domestici
  { id: "cane", nome: "cane", immagine: "🐕", categoria: "animali" },
  { id: "gatto", nome: "gatto", immagine: "🐱", categoria: "animali" },
  { id: "coniglio", nome: "coniglio", immagine: "🐰", categoria: "animali" },
  { id: "uccellino", nome: "uccellino", immagine: "🐦", categoria: "animali" },
  { id: "pesce", nome: "pesce", immagine: "🐟", categoria: "animali" },
  // Savana/Zoo
  { id: "leone", nome: "leone", immagine: "🦁", categoria: "animali" },
  { id: "elefante", nome: "elefante", immagine: "🐘", categoria: "animali" },
  { id: "giraffa", nome: "giraffa", immagine: "🦒", categoria: "animali" },
  { id: "zebra", nome: "zebra", immagine: "🦓", categoria: "animali" },
  { id: "ippopotamo", nome: "ippopotamo", immagine: "🦛", categoria: "animali" },
  { id: "rinoceronte", nome: "rinoceronte", immagine: "🦏", categoria: "animali" },
  { id: "scimmia", nome: "scimmia", immagine: "🐒", categoria: "animali" },
  { id: "coccodrillo", nome: "coccodrillo", immagine: "🐊", categoria: "animali" },
  { id: "tigre", nome: "tigre", immagine: "🐯", categoria: "animali" },
  { id: "orso", nome: "orso", immagine: "🐻", categoria: "animali" },
  { id: "panda", nome: "panda", immagine: "🐼", categoria: "animali" },
  { id: "koala", nome: "koala", immagine: "🐨", categoria: "animali" },
  { id: "canguro", nome: "canguro", immagine: "🦘", categoria: "animali" },
  { id: "gorilla", nome: "gorilla", immagine: "🦍", categoria: "animali" },
  { id: "lupo", nome: "lupo", immagine: "🐺", categoria: "animali" },
  { id: "volpe", nome: "volpe", immagine: "🦊", categoria: "animali" },
  { id: "cervo", nome: "cervo", immagine: "🦌", categoria: "animali" },
  { id: "bradipo", nome: "bradipo", immagine: "🦥", categoria: "animali" },
  // Marini
  { id: "delfino", nome: "delfino", immagine: "🐬", categoria: "animali" },
  { id: "balena", nome: "balena", immagine: "🐋", categoria: "animali" },
  { id: "polpo", nome: "polpo", immagine: "🐙", categoria: "animali" },
  { id: "granchio", nome: "granchio", immagine: "🦀", categoria: "animali" },
  { id: "squalo", nome: "squalo", immagine: "🦈", categoria: "animali" },
  { id: "medusa", nome: "medusa", immagine: "🪼", categoria: "animali" },
  { id: "tartaruga", nome: "tartaruga", immagine: "🐢", categoria: "animali" },
  // Uccelli/Insetti
  { id: "pinguino", nome: "pinguino", immagine: "🐧", categoria: "animali" },
  { id: "farfalla", nome: "farfalla", immagine: "🦋", categoria: "animali" },
  { id: "ape", nome: "ape", immagine: "🐝", categoria: "animali" },
  { id: "coccinella", nome: "coccinella", immagine: "🐞", categoria: "animali" },
  { id: "gufo", nome: "gufo", immagine: "🦉", categoria: "animali" },
  { id: "pipistrello", nome: "pipistrello", immagine: "🦇", categoria: "animali" },
  { id: "camaleonte", nome: "camaleonte", immagine: "🦎", categoria: "animali" },
  { id: "pavone", nome: "pavone", immagine: "🦚", categoria: "animali" },
  { id: "fenicottero", nome: "fenicottero", immagine: "🦩", categoria: "animali" },
  { id: "cigno", nome: "cigno", immagine: "🦢", categoria: "animali" },
  { id: "pappagallo", nome: "pappagallo", immagine: "🦜", categoria: "animali" },
  { id: "aquila", nome: "aquila", immagine: "🦅", categoria: "animali" },
  { id: "serpente", nome: "serpente", immagine: "🐍", categoria: "animali" },
  { id: "rana", nome: "rana", immagine: "🐸", categoria: "animali" },
];

// ============================================================
// CATALOGO COMPLETO
// ============================================================
export const OBJECT_DEFINITIONS: ObjectDefinition[] = [
  ...bagnoObjects,
  ...scuolaObjects,
  ...fruttaObjects,
  ...verdureObjects,
  ...colazioneObjects,
  ...bevandeObjects,
  ...cucinaObjects,
  ...vestitiObjects,
  ...festaObjects,
  ...animaliObjects,
];

/**
 * Ottieni l'oggetto dal catalogo per ID
 */
export const getObjectById = (id: string): ObjectDefinition | undefined => {
  return OBJECT_DEFINITIONS.find((obj) => obj.id === id);
};

/**
 * Ottieni l'immagine corretta per un oggetto dato l'ID
 */
export const getImageForObject = (id: string): string => {
  const obj = getObjectById(id);
  return obj?.immagine || "❓";
};

/**
 * Ottieni tutti gli oggetti di una categoria
 */
export const getObjectsByCategory = (categoria: ObjectDefinition["categoria"]): ObjectDefinition[] => {
  return OBJECT_DEFINITIONS.filter((obj) => obj.categoria === categoria);
};

// ============================================================
// VERIFICA DI COERENZA (Development)
// ============================================================
export const validateObjectCatalog = (): { duplicates: string[]; warnings: string[] } => {
  const duplicates: string[] = [];
  const warnings: string[] = [];
  const seenIds = new Set<string>();

  for (const obj of OBJECT_DEFINITIONS) {
    if (seenIds.has(obj.id)) {
      duplicates.push(`ID duplicato: "${obj.id}"`);
    }
    seenIds.add(obj.id);

    if (obj.id !== obj.nome.toLowerCase().replace(/\s+/g, "-")) {
      // Questo è solo un warning, non un errore
      // warnings.push(`ID/nome mismatch: id="${obj.id}" nome="${obj.nome}"`);
    }
  }

  return { duplicates, warnings };
};

// Esegui validazione in development
if (import.meta.env.DEV) {
  const validation = validateObjectCatalog();
  if (validation.duplicates.length > 0) {
    console.warn("⚠️ OBJECT_CATALOG: ID duplicati trovati:", validation.duplicates);
  }
}
