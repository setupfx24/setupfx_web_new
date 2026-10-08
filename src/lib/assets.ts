import fs from "node:fs";
import path from "node:path";

/**
 * Image slots are referenced in code before the real files exist. These helpers run on
 * the server at build time, so a section can render a dark placeholder of the right
 * shape instead of requesting a file that is not there yet. Drop the file into
 * `public/` with the expected name and the next build picks it up.
 */

const publicDir = path.join(process.cwd(), "public");

export function hasAsset(src: string): boolean {
  if (!src.startsWith("/")) return false;

  try {
    return fs.existsSync(path.join(publicDir, src.slice(1)));
  } catch {
    return false;
  }
}
