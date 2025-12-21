/**
 * CategoryCard Component
 * Displays a category on the home screen
 */
import { View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, Caption } from "@components/common";
import { categoryColors, colors } from "@constants/colors";
import type { LabCategory } from "@utils/labRegistry";

interface CategoryCardProps {
  id: LabCategory;
  title: string;
  description: string;
  icon: keyof typeof Feather.glyphMap;
  labCount: number;
}

export function CategoryCard({
  id,
  title,
  description,
  icon,
  labCount,
}: CategoryCardProps) {
  const categoryColor = categoryColors[id] || colors.accent;

  const handlePress = () => {
    router.push(`/category/${id}`);
  };

  return (
    <Pressable
      onPress={handlePress}
      className="bg-surface-elevated border border-border rounded-xl p-4 mb-3 active:opacity-80"
    >
      <View className="flex-row items-center">
        {/* Icon */}
        <View
          className="w-12 h-12 rounded-lg items-center justify-center mr-4"
          style={{ backgroundColor: `${categoryColor}20` }}
        >
          <Feather name={icon} size={24} color={categoryColor} />
        </View>

        {/* Content */}
        <View className="flex-1">
          <View className="flex-row items-center justify-between mb-1">
            <Text variant="heading">{title}</Text>
            <View className="bg-surface-accent px-2 py-0.5 rounded">
              <Caption>{labCount} Labs</Caption>
            </View>
          </View>
          <Text variant="caption" color="secondary" numberOfLines={1}>
            {description}
          </Text>
        </View>

        {/* Chevron */}
        <Feather
          name="chevron-right"
          size={20}
          color={colors.textMuted}
          style={{ marginLeft: 8 }}
        />
      </View>
    </Pressable>
  );
}

