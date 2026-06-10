/**
 * Central image registry.
 * ------------------------------------------------------------------
 * Every photo on the site is referenced from here so you can swap the
 * stock placeholders for your AI-generated campaign images in ONE place.
 *
 * To replace an image:
 *   1. Drop your file into /public (e.g. /public/hero-green.jpg), and
 *      change the value below to "/hero-green.jpg", OR
 *   2. Paste a new remote URL (and add its host to next.config.js).
 *
 * Current placeholders are free-to-use photos from the Unsplash CDN,
 * capped at 1200px wide per the spec.
 */

const ux = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // ── Division chooser (/) ───────────────────────────────
  rootGreen: ux("photo-1610970881699-44a5587cabec"), // green smoothie in a glass
  rootTexture: ux("photo-1627308594171-ebd99b564ff6"), // plated salmon + egg

  // ── Simplii Green (/simplii-green) ─────────────────────
  greenHero: "/hero-bg-compressed.jpg", // hero background
  whatProtein: ux("photo-1627308594190-a057cd4bfac8"), // smoothie / granola bowl
  whatIron: ux("photo-1610622930110-3c076902312a"), // hand holding green glass
  whatAntioxidant: ux("photo-1590301157284-ab2f8707bdc1"), // berry bowl
  step1Freezer: "/step1-freezer-compressed.jpg", // frozen berries
  step2Blender: ux("photo-1585237672814-8f85a8118bf6"), // blender pitcher with fruit
  step3Drink: ux("photo-1591089398845-0dbbbdba1f75"), // person drinking green smoothie
  recipeMorning: ux("photo-1610970881699-44a5587cabec", 800), // green smoothie
  recipeJuice: ux("photo-1610622930110-3c076902312a", 800), // green juice
  recipeBowl: ux("photo-1627308594190-a057cd4bfac8", 800), // smoothie bowl
  recipeCoconut: ux("photo-1514262591492-0e23c8375962", 800), // pale refreshing drink
  productShot: "/product-shot-compressed.jpg", // product shot
  productPouch: "/pouch-compressed.jpg", // product pouch

  // ── Simplii Texture (/simplii-texture) ─────────────────
  textureHero: "/texture-hero-compressed.jpg", // plated salmon dish
  kamuSlices: ux("photo-1498604819470-d34ff92b1341", 1000), // salmon fillet / slices
  kamuFlakes: ux("photo-1627308595216-439c00ade0fe", 1000), // salmon on toast / spread
};

export type ImageKey = keyof typeof images;
