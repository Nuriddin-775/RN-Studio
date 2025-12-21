/**
 * UI Store
 * App-level UI state (not lab demos)
 */
import { create } from "zustand";

interface UIStore {
  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  clearSearch: () => void;

  // Favorites (future feature)
  favorites: string[];
  toggleFavorite: (labId: string) => void;
  isFavorite: (labId: string) => boolean;

  // Recently viewed
  recentLabs: string[];
  addRecentLab: (labId: string) => void;
}

export const useUIStore = create<UIStore>((set, get) => ({
  // Search
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  clearSearch: () => set({ searchQuery: "" }),

  // Favorites
  favorites: [],
  toggleFavorite: (labId) =>
    set((state) => ({
      favorites: state.favorites.includes(labId)
        ? state.favorites.filter((id) => id !== labId)
        : [...state.favorites, labId],
    })),
  isFavorite: (labId) => get().favorites.includes(labId),

  // Recent
  recentLabs: [],
  addRecentLab: (labId) =>
    set((state) => ({
      recentLabs: [labId, ...state.recentLabs.filter((id) => id !== labId)].slice(
        0,
        5
      ),
    })),
}));

