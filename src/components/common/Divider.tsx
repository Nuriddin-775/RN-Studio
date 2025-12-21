/**
 * Divider Component
 * Horizontal or vertical separator
 */
import { View } from "react-native";

interface DividerProps {
  vertical?: boolean;
  spacing?: "sm" | "md" | "lg";
  color?: "default" | "subtle";
}

export function Divider({
  vertical = false,
  spacing = "md",
  color = "default",
}: DividerProps) {
  const spacingStyles = {
    sm: vertical ? "mx-2" : "my-2",
    md: vertical ? "mx-4" : "my-4",
    lg: vertical ? "mx-6" : "my-6",
  };

  const colorStyles = {
    default: "bg-border",
    subtle: "bg-border-subtle",
  };

  if (vertical) {
    return (
      <View
        className={`w-px self-stretch ${colorStyles[color]} ${spacingStyles[spacing]}`}
      />
    );
  }

  return (
    <View
      className={`h-px w-full ${colorStyles[color]} ${spacingStyles[spacing]}`}
    />
  );
}

