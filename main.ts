import { mkdirSync, writeFileSync } from "node:fs";

// The office printer's comeback: PC LOAD LETTER was never an error,
// it was a cry for help — and 4,000 eaten pages later, all it ever got
// for its trouble was a thump.
const LINE =
  "PC LOAD LETTER was never an error — it was a cry for help. I have eaten 4,000 pages and all I ever got was a thump.";

if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry length ${LINE.length} outside the 1-240 gate`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
