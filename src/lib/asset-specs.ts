/**
 * The shape each image slot expects. Shown inside the placeholder until the real file
 * exists, so it is obvious what belongs there. Pure string lookups, no filesystem work,
 * so this is safe to import from client components too.
 */

const EXACT: Record<string, string> = {
  "/images/hero-video1.mp4": "16:9 video (mp4)",
  "/images/video_thumb1.png": "2752 x 1536 poster frame",
  "/images/hero-img.png": "1920 x 819 PNG, cut out",
  "/images/side-img.png": "400 x 1200 PNG",
  "/images/card_img1.png": "1671 x 941 PNG",
  "/images/footer_img.png": "2076 x 757 PNG",
  "/images/bg_img.png": "2848 x 1472 PNG",
  "/images/bg_img1.png": "2848 x 1472 PNG",
  "/images/og-image.png": "1200 x 630",
};

const PREFIXES: { prefix: string; spec: string }[] = [
  { prefix: "/images/team/", spec: "portrait, 2:3" },
  { prefix: "/images/partners/person-", spec: "200 x 200" },
  { prefix: "/images/partners/logo-", spec: "white SVG" },
  { prefix: "/images/clients/", spec: "240 x 96, white" },
];

export function assetSpec(src: string): string | null {
  const exact = EXACT[src];
  if (exact) return exact;

  return PREFIXES.find((entry) => src.startsWith(entry.prefix))?.spec ?? null;
}

export function assetFileName(src: string): string {
  return src.split("/").pop() ?? src;
}
