/**
 * Helper Utilities
 * Common utility functions
 */

// Format helpers
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "...";
}

// Array helpers
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

// Delay helper for demos
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Safe JSON parse
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

// Platform helpers
export function isIOS(): boolean {
  const { Platform } = require("react-native");
  return Platform.OS === "ios";
}

export function isAndroid(): boolean {
  const { Platform } = require("react-native");
  return Platform.OS === "android";
}

export function isWeb(): boolean {
  const { Platform } = require("react-native");
  return Platform.OS === "web";
}

// Debug helpers
export function log(message: string, data?: unknown): void {
  if (__DEV__) {
    console.log(`[RN Playground] ${message}`, data || "");
  }
}

