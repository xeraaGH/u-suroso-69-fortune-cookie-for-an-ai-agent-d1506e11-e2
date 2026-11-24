import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny fortune-cookie line for an AI agent, in the voice of a
// fortune slip. The classic lucky-numbers staple, subverted twice: the
// agent's numbers are binary, and the third one is unaffordable —
// generation costs tokens, and the cookie's budget ran out.
const fortune =
  "Your lucky numbers are 0, 1, and a third number I cannot afford to generate.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), fortune, "utf8");
