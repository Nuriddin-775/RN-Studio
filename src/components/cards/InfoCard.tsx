/**
 * InfoCard Component
 * Displays informational content with icon
 */
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Text, Caption } from "@components/common";
import { colors } from "@constants/colors";

type InfoCardVariant = "info" | "success" | "warning" | "error" | "tip";

interface InfoCardProps {
  title?: string;
  message: string;
  variant?: InfoCardVariant;
}

const variantConfig: Record<
  InfoCardVariant,
  { icon: keyof typeof Feather.glyphMap; color: string; bg: string }
> = {
  info: {
    icon: "info",
    color: colors.info,
    bg: colors.infoMuted,
  },
  success: {
    icon: "check-circle",
    color: colors.success,
    bg: colors.successMuted,
  },
  warning: {
    icon: "alert-triangle",
    color: colors.warning,
    bg: colors.warningMuted,
  },
  error: {
    icon: "alert-circle",
    color: colors.error,
    bg: colors.errorMuted,
  },
  tip: {
    icon: "zap",
    color: colors.accent,
    bg: colors.accentMuted,
  },
};

export function InfoCard({
  title,
  message,
  variant = "info",
}: InfoCardProps) {
  const config = variantConfig[variant];

  return (
    <View
      className="rounded-lg p-4 mb-3"
      style={{ backgroundColor: config.bg }}
    >
      <View className="flex-row">
        <Feather
          name={config.icon}
          size={18}
          color={config.color}
          style={{ marginTop: 2 }}
        />
        <View className="flex-1 ml-3">
          {title && (
            <Text
              variant="label"
              style={{ color: config.color }}
              className="mb-1"
            >
              {title}
            </Text>
          )}
          <Text variant="body" color="secondary">
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
}

