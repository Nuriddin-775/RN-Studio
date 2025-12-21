/**
 * LabCard Component
 * Displays a lab item in category/list views
 */
import { View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, Caption } from "@components/common";
import { colors, difficultyColors } from "@constants/colors";
import type { Lab } from "@utils/labRegistry";

interface LabCardProps {
  lab: Lab;
  showCategory?: boolean;
}

export function LabCard({ lab, showCategory = false }: LabCardProps) {
  const handlePress = () => {
    router.push(`/lab/overview?id=${lab.id}`);
  };

  return (
    <Pressable
      onPress={handlePress}
      className="bg-surface-elevated border border-border rounded-lg p-4 mb-3 active:opacity-80"
    >
      <View className="flex-row items-center">
        {/* Icon */}
        <View className="w-10 h-10 rounded-lg bg-surface-accent items-center justify-center mr-3">
          <Feather
            name={lab.icon as keyof typeof Feather.glyphMap}
            size={20}
            color={colors.accent}
          />
        </View>

        {/* Content */}
        <View className="flex-1">
          <View className="flex-row items-center mb-1">
            <Text variant="label" className="mr-2">
              {lab.title}
            </Text>
            {/* Difficulty badge */}
            <View
              className="px-2 py-0.5 rounded"
              style={{
                backgroundColor: `${difficultyColors[lab.difficulty]}20`,
              }}
            >
              <Text
                variant="caption"
                style={{ color: difficultyColors[lab.difficulty] }}
                className="capitalize"
              >
                {lab.difficulty}
              </Text>
            </View>
          </View>
          <Caption numberOfLines={1}>{lab.description}</Caption>
        </View>

        {/* Chevron */}
        <Feather name="chevron-right" size={18} color={colors.textMuted} />
      </View>

      {/* Tags */}
      {lab.tags.length > 0 && (
        <View className="flex-row flex-wrap mt-3 gap-1">
          {lab.tags.slice(0, 3).map((tag) => (
            <View key={tag} className="bg-surface-accent px-2 py-0.5 rounded">
              <Caption>{tag}</Caption>
            </View>
          ))}
        </View>
      )}
    </Pressable>
  );
}

