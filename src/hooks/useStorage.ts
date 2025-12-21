/**
 * useStorage Hook
 * Unified interface for AsyncStorage and SecureStore
 */
import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

// Generic storage hook for AsyncStorage
export function useAsyncStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Load value on mount
  useEffect(() => {
    loadValue();
  }, [key]);

  const loadValue = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const stored = await AsyncStorage.getItem(key);
      if (stored !== null) {
        setValue(JSON.parse(stored));
      }
    } catch (e) {
      setError(e instanceof Error ? e : new Error("Failed to load"));
    } finally {
      setLoading(false);
    }
  }, [key]);

  const saveValue = useCallback(
    async (newValue: T) => {
      try {
        setError(null);
        await AsyncStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
        return true;
      } catch (e) {
        setError(e instanceof Error ? e : new Error("Failed to save"));
        return false;
      }
    },
    [key]
  );

  const removeValue = useCallback(async () => {
    try {
      setError(null);
      await AsyncStorage.removeItem(key);
      setValue(initialValue);
      return true;
    } catch (e) {
      setError(e instanceof Error ? e : new Error("Failed to remove"));
      return false;
    }
  }, [key, initialValue]);

  return {
    value,
    loading,
    error,
    saveValue,
    removeValue,
    refresh: loadValue,
  };
}

// SecureStore hook for sensitive data
export function useSecureStorage(key: string) {
  const [value, setValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Check platform support
  const isAvailable = Platform.OS !== "web";

  useEffect(() => {
    if (isAvailable) {
      loadValue();
    } else {
      setLoading(false);
    }
  }, [key, isAvailable]);

  const loadValue = useCallback(async () => {
    if (!isAvailable) return;
    try {
      setLoading(true);
      setError(null);
      const stored = await SecureStore.getItemAsync(key);
      setValue(stored);
    } catch (e) {
      setError(e instanceof Error ? e : new Error("Failed to load"));
    } finally {
      setLoading(false);
    }
  }, [key, isAvailable]);

  const saveValue = useCallback(
    async (newValue: string) => {
      if (!isAvailable) {
        setError(new Error("SecureStore not available on web"));
        return false;
      }
      try {
        setError(null);
        await SecureStore.setItemAsync(key, newValue);
        setValue(newValue);
        return true;
      } catch (e) {
        setError(e instanceof Error ? e : new Error("Failed to save"));
        return false;
      }
    },
    [key, isAvailable]
  );

  const removeValue = useCallback(async () => {
    if (!isAvailable) return false;
    try {
      setError(null);
      await SecureStore.deleteItemAsync(key);
      setValue(null);
      return true;
    } catch (e) {
      setError(e instanceof Error ? e : new Error("Failed to remove"));
      return false;
    }
  }, [key, isAvailable]);

  return {
    value,
    loading,
    error,
    isAvailable,
    saveValue,
    removeValue,
    refresh: loadValue,
  };
}

