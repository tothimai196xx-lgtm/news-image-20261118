// news-image-20261118 — entry program.
//
// Copies the pre-rendered front-page image (entry.png, built in this
// session from a freshly generated illustration plus PIL text overlays)
// into the output directory as entry.png.
//
// The image sums up Wednesday 18 November 2026 in four panels:
//   1. Ukraine strikes the Crimean (Kerch) Bridge; Russia hits Kyiv bridges.
//   2. Iran drones target a US base in Bahrain; the US strikes back.
//   3. Trump arrives in Manila for Quad talks ahead of a China visit.
//   4. Cyclone Akvan builds over the Bay of Bengal; India's coast on alert.
//
// Deterministic by construction: the same bytes are copied on every run.
// Standard library only, no network, no writes outside the output dir.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");

// Fail loudly instead of shipping a missing or empty image: the gate
// rejects an entry whose output is not a whole PNG under 1 MiB.
const srcStat = statSync(src);
if (!srcStat.isFile() || srcStat.size === 0 || srcStat.size > 1048576) {
  throw new Error(`entry.png is missing, empty, or over 1 MiB (${srcStat.size} bytes)`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Sanity-check the copy we just wrote.
if (statSync(dst).size !== srcStat.size) {
  throw new Error("copied entry.png does not match the bundled image");
}
