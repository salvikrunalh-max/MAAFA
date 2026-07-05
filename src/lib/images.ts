/** Shared Next/Image defaults for consistent optimization. */
export const IMAGE_QUALITY = {
  hero: 82,
  section: 72,
  portrait: 78,
} as const;

export const IMAGE_SIZES = {
  fullWidth: "100vw",
  hero: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1280px",
  section: "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px",
  portrait: "(max-width: 1024px) 90vw, 480px",
  card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px",
} as const;
