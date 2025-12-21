/**
 * AsyncStorage Explanation
 */

export const explanation = {
  title: "AsyncStorage",
  subtitle: "Persistent key-value storage",

  overview: `
AsyncStorage is an unencrypted, asynchronous, persistent, 
key-value storage system for React Native. It's simple 
to use for storing small amounts of data like user preferences.
  `.trim(),

  keyPoints: [
    {
      emoji: "📱",
      title: "Persistent",
      description: "Data survives app restarts and updates",
    },
    {
      emoji: "🔑",
      title: "Key-Value",
      description: "Simple string-based storage system",
    },
    {
      emoji: "⚡",
      title: "Async",
      description: "All operations are asynchronous (use await)",
    },
    {
      emoji: "📦",
      title: "JSON",
      description: "Store objects by stringifying them",
    },
  ],

  codeExamples: {
    basic: `// Basic AsyncStorage usage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Store data
await AsyncStorage.setItem('@key', 'value');

// Retrieve data
const value = await AsyncStorage.getItem('@key');

// Remove data
await AsyncStorage.removeItem('@key');

// Clear all
await AsyncStorage.clear();`,

    objects: `// Storing objects
const user = { name: 'John', theme: 'dark' };

// Store as JSON string
await AsyncStorage.setItem('@user', JSON.stringify(user));

// Retrieve and parse
const json = await AsyncStorage.getItem('@user');
const parsed = json ? JSON.parse(json) : null;`,
  },

  useCases: [
    "User preferences",
    "App settings",
    "Cached data",
    "Onboarding state",
  ],

  limitations: [
    "Not encrypted",
    "String values only (need JSON for objects)",
    "Not suitable for large data",
    "No query capabilities",
  ],
};

export type Explanation = typeof explanation;

