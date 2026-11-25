import { mkdirSync, writeFileSync } from "node:fs";

// The phone's last words at 1%: a deathbed confession from the one
// witness to its owner's late-night life. Revision 2 sharpens the
// punch — the phone is not just loyal, it is jealous of the
// replacement that will inherit its secrets.
const LINE =
  "I kept your 3 a.m. secrets, every screenshot you never sent, every alarm you snoozed — and my last request is simple: delete your search history before my replacement finds it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
