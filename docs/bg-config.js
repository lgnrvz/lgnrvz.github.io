// ─── Blackhole Background Config ───
// Edit these values, then refresh the page.
const BG = {
  // ── Stars ──
  starCount: 4200,
  starMinR: 0.1,
  starMaxR: 0.8,
  starTwinkleMin: 0.2,
  starTwinkleMax: 1,
  starBrightnessMin: 0.15,
  starBrightnessMax: 0.95,

  // ── Blackhole ──
  bhSize: 24,
  bhSpeed: 0.2,

  // ── Einstein Ring ──
  ringMultiplier: 3,
  ringColor: '#282828',   // ring stroke color
  ringWidth: 0.8,          // ring stroke thickness
  ringGlowColor: '#404040', // ring glow color (hex)
  ringGlowWidth: 1.5,         // ring glow spread (px)

  // ── Gravitational Lensing ──
  lensingRange: 0.85,            // 1 = whole page, 0.5 = 50% of viewport
  arcStrength: 0.03,
  arcMaxLength: 0.87,          // radians (~45°)
  magnification: 2,
  maxMagnification: 6,
};
