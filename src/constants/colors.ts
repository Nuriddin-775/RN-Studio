/**
 * Color Palette
 * Dark theme optimized for developer tools aesthetic
 */

export const colors = {
  // Core surfaces
  background: "#0D1117",
  surface: "#161B22",
  surfaceElevated: "#1C2128",
  surfaceAccent: "#21262D",

  // Borders
  border: "#30363D",
  borderSubtle: "#21262D",
  borderFocus: "#58A6FF",

  // Text
  textPrimary: "#E6EDF3",
  textSecondary: "#8B949E",
  textMuted: "#6E7681",
  textInverse: "#0D1117",

  // Accent (primary blue)
  accent: "#58A6FF",
  accentHover: "#79C0FF",
  accentMuted: "#388BFD26",
  accentSubtle: "#58A6FF15",

  // Status colors
  success: "#3FB950",
  successMuted: "#3FB95020",
  warning: "#D29922",
  warningMuted: "#D2992220",
  error: "#F85149",
  errorMuted: "#F8514920",
  info: "#58A6FF",
  infoMuted: "#58A6FF20",

  // Category colors
  categoryState: "#A371F7",
  categoryExpo: "#F778BA",
  categoryStorage: "#3FB950",
  categoryUI: "#58A6FF",

  // Misc
  transparent: "transparent",
  white: "#FFFFFF",
  black: "#000000",
} as const;

// Difficulty badge colors
export const difficultyColors = {
  beginner: colors.success,
  intermediate: colors.warning,
  advanced: colors.error,
} as const;

// Category colors map
export const categoryColors = {
  state: colors.categoryState,
  expo: colors.categoryExpo,
  storage: colors.categoryStorage,
  ui: colors.categoryUI,
} as const;

export type ColorKey = keyof typeof colors;

