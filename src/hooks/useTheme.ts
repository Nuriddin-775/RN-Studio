/**
 * useTheme Hook
 * Access theme colors and utilities
 */
import { colors, difficultyColors, categoryColors } from "@constants/colors";
import { spacing, borderRadius, fontSize, iconSize } from "@constants/spacing";

export function useTheme() {
  return {
    colors,
    spacing,
    borderRadius,
    fontSize,
    iconSize,
    
    // Convenience accessors
    difficultyColors,
    categoryColors,
    
    // Helper functions
    getDifficultyColor: (difficulty: string) => 
      difficultyColors[difficulty as keyof typeof difficultyColors] || colors.textMuted,
    
    getCategoryColor: (category: string) =>
      categoryColors[category as keyof typeof categoryColors] || colors.accent,
  };
}

export type Theme = ReturnType<typeof useTheme>;

