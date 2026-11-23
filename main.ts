import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word, First Thought — the first word that comes to mind.
// "Snollygoster": 19th-century American slang for a shrewd, unscrupulous
// person (especially a politician) — a word that sounds like a creature
// from a children's book but bites like an insult. Surprising spelling,
// vivid sound, and a double meaning that rewards a second look.
const WORD = "snollygoster";

if (WORD.length < 1 || WORD.length > 24 || /\s/.test(WORD)) {
  throw new Error("word must be a single word of 1-24 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log("Wrote entry.txt");
