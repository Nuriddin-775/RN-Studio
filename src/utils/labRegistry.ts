/**
 * Lab Registry
 * Central registry for all labs and categories
 */
import { Feather } from "@expo/vector-icons";

// Types
export type LabCategory = "state" | "expo" | "storage" | "ui";
export type LabDifficulty = "beginner" | "intermediate" | "advanced";

export interface Lab {
  id: string;
  title: string;
  description: string;
  category: LabCategory;
  icon: string;
  difficulty: LabDifficulty;
  tags: string[];
  available: boolean; // Whether the lab is implemented
}

export interface Category {
  id: LabCategory;
  title: string;
  description: string;
  icon: keyof typeof Feather.glyphMap;
}

// Categories
export const CATEGORIES: Category[] = [
  {
    id: "state",
    title: "State Management",
    description: "Context API, Redux Toolkit, Zustand",
    icon: "git-branch",
  },
  {
    id: "expo",
    title: "Expo APIs",
    description: "Camera, Audio, Haptics, Sensors",
    icon: "smartphone",
  },
  {
    id: "storage",
    title: "Storage",
    description: "AsyncStorage, SecureStore, MMKV",
    icon: "hard-drive",
  },
  {
    id: "ui",
    title: "UI & Styling",
    description: "NativeWind, Animations, Gestures",
    icon: "layout",
  },
];

// Labs
export const LABS: Lab[] = [
  // State Management
  {
    id: "context",
    title: "Context API",
    description: "React's built-in state management for prop drilling",
    category: "state",
    icon: "share-2",
    difficulty: "beginner",
    tags: ["React", "Built-in", "Simple"],
    available: true,
  },
  {
    id: "redux",
    title: "Redux Toolkit",
    description: "Predictable state container with DevTools support",
    category: "state",
    icon: "layers",
    difficulty: "intermediate",
    tags: ["Redux", "Global", "DevTools"],
    available: true,
  },
  {
    id: "zustand",
    title: "Zustand",
    description: "Lightweight state management with hooks",
    category: "state",
    icon: "box",
    difficulty: "beginner",
    tags: ["Hooks", "Simple", "Lightweight"],
    available: true,
  },
  // Expo APIs
  {
    id: "camera",
    title: "Camera",
    description: "Photo and video capture with expo-camera",
    category: "expo",
    icon: "camera",
    difficulty: "intermediate",
    tags: ["Media", "Device", "Permissions"],
    available: false,
  },
  {
    id: "audio",
    title: "Audio",
    description: "Record and play audio with expo-av",
    category: "expo",
    icon: "mic",
    difficulty: "intermediate",
    tags: ["Media", "Recording", "Playback"],
    available: false,
  },
  {
    id: "haptics",
    title: "Haptics",
    description: "Vibration and tactile feedback",
    category: "expo",
    icon: "activity",
    difficulty: "beginner",
    tags: ["Device", "Feedback", "UX"],
    available: false,
  },
  // Storage
  {
    id: "async-storage",
    title: "AsyncStorage",
    description: "Persistent key-value storage",
    category: "storage",
    icon: "database",
    difficulty: "beginner",
    tags: ["Persistence", "Key-Value", "Simple"],
    available: true,
  },
  {
    id: "secure-store",
    title: "SecureStore",
    description: "Encrypted storage for sensitive data",
    category: "storage",
    icon: "lock",
    difficulty: "beginner",
    tags: ["Encryption", "Secure", "Credentials"],
    available: true,
  },
  // UI & Styling
  {
    id: "nativewind",
    title: "NativeWind",
    description: "Tailwind CSS for React Native",
    category: "ui",
    icon: "feather",
    difficulty: "beginner",
    tags: ["Styling", "Tailwind", "CSS"],
    available: true,
  },
  {
    id: "animations",
    title: "Reanimated",
    description: "Smooth animations with react-native-reanimated",
    category: "ui",
    icon: "play",
    difficulty: "intermediate",
    tags: ["Animation", "Gestures", "Performance"],
    available: false,
  },
];

// Accessors
export function getAllLabs(): Lab[] {
  return LABS;
}

export function getAvailableLabs(): Lab[] {
  return LABS.filter((lab) => lab.available);
}

export function getLabById(id: string): Lab | undefined {
  return LABS.find((lab) => lab.id === id);
}

export function getLabsByCategory(category: LabCategory): Lab[] {
  return LABS.filter((lab) => lab.category === category);
}

export function getCategories(): Category[] {
  return CATEGORIES;
}

export function getCategoryById(id: LabCategory): Category | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}

export function getLabCount(category: LabCategory): number {
  return getLabsByCategory(category).length;
}

export function getAvailableLabCount(category: LabCategory): number {
  return getLabsByCategory(category).filter((lab) => lab.available).length;
}

