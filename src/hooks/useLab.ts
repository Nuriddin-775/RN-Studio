/**
 * useLab Hook
 * Access lab data and navigation helpers
 */
import { useLocalSearchParams, router } from "expo-router";
import { useMemo } from "react";
import {
  getLabById,
  getLabsByCategory,
  getAllLabs,
  getCategories,
  type Lab,
  type LabCategory,
} from "@utils/labRegistry";

export function useLab() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const currentLab = useMemo(() => {
    return id ? getLabById(id) : undefined;
  }, [id]);

  return {
    // Current lab from route params
    currentLab,
    labId: id,
    
    // Data accessors
    getLabById,
    getLabsByCategory,
    getAllLabs,
    getCategories,
    
    // Navigation helpers
    navigateToLab: (labId: string, screen: "overview" | "demo" | "code" | "notes" = "overview") => {
      router.push(`/lab/${screen}?id=${labId}`);
    },
    
    navigateToCategory: (categoryId: LabCategory) => {
      router.push(`/category/${categoryId}`);
    },
    
    goBack: () => {
      router.back();
    },
  };
}

// Hook for category screen
export function useCategory() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const labs = useMemo(() => {
    return id ? getLabsByCategory(id as LabCategory) : [];
  }, [id]);

  const category = useMemo(() => {
    const categories = getCategories();
    return categories.find((c) => c.id === id);
  }, [id]);

  return {
    categoryId: id as LabCategory,
    category,
    labs,
  };
}

