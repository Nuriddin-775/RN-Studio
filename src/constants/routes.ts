/**
 * Route Constants
 * Centralized route definitions for type-safe navigation
 */

// Tab routes
export const TAB_ROUTES = {
  HOME: "/(tabs)/home",
  DOCS: "/(tabs)/docs",
  SETTINGS: "/(tabs)/settings",
} as const;

// Category routes
export const CATEGORY_ROUTES = {
  STATE: "/category/state",
  EXPO: "/category/expo",
  STORAGE: "/category/storage",
  UI: "/category/ui",
} as const;

// Lab routes (dynamic)
export const LAB_ROUTES = {
  OVERVIEW: "/lab/overview",
  DEMO: "/lab/demo",
  CODE: "/lab/code",
  NOTES: "/lab/notes",
} as const;

// Helper to create lab route with params
export const createLabRoute = (
  screen: keyof typeof LAB_ROUTES,
  labId: string
) => {
  return `${LAB_ROUTES[screen]}?id=${labId}`;
};

// Helper to create category route with params
export const createCategoryRoute = (categoryId: string) => {
  return `/category/${categoryId}`;
};

