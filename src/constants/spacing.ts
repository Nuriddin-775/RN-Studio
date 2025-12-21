/**
 * Spacing & Layout Constants
 * Consistent spacing system across the app
 */

export const spacing = {
  // Base spacing units
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,

  // Screen padding
  screenHorizontal: 16,
  screenVertical: 24,

  // Component spacing
  cardPadding: 16,
  sectionGap: 24,
  itemGap: 12,
} as const;

export const borderRadius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

export const iconSize = {
  xs: 14,
  sm: 18,
  md: 24,
  lg: 32,
  xl: 48,
} as const;

export const fontSize = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 24,
  title: 28,
} as const;

export const lineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
} as const;

export type SpacingKey = keyof typeof spacing;

