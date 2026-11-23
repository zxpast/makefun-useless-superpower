// The useless superpower.
//
// One line naming a hilariously useless superpower. The line is a fixed
// string — the program is deterministic: same bytes every run, no clock,
// no randomness, no network, no external files.
//
// The joke, for anyone who has wished for a cool power: animal telepathy,
// the classic dream — but the only animals that answer are moths, and
// they have exactly one request. The payoff lands in the last words.
import * as fs from "node:fs";
import * as path from "node:path";

// The line. Nothing here varies between runs.
const LINE =
  "I can talk to animals, but only moths \u2014 and all they ever ask is for me to turn the porch light back on.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// counted as Unicode code points, and not only white space.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${codePoints} code points, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");

console.log(LINE);
console.log(`(${codePoints} code points, ${Buffer.byteLength(LINE, "utf8")} bytes)`);
