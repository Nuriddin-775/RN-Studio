/**
 * Docs Screen
 * Documentation placeholder
 */
import { Caption, Text } from "@components/common";
import { ScreenLayout } from "@components/layouts";
import { colors } from "@constants/colors";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

export default function DocsScreen() {
  return (
    <ScreenLayout>
      {/* Header */}
      <View className="bg-surface-elevated border border-border rounded-lg p-6 mb-4">
        <View className="items-center mb-4">
          <View className="w-16 h-16 rounded-full bg-surface-accent items-center justify-center mb-3">
            <Feather name="book-open" size={28} color={colors.accent} />
          </View>
          <Text variant="heading" className="mb-2">
            Documentation
          </Text>
          <Caption center>
            Detailed guides and API references for each lab.
          </Caption>
        </View>
      </View>

      {/* Quick links */}
      <View className="bg-surface-elevated border border-border rounded-lg p-4">
        <Text variant="label" className="mb-4">
          Quick References
        </Text>

        {[
          { title: "Expo Documentation", icon: "external-link" },
          { title: "React Native Docs", icon: "external-link" },
          { title: "Redux Toolkit Guide", icon: "external-link" },
          { title: "Zustand Documentation", icon: "external-link" },
        ].map((item, index) => (
          <View
            key={index}
            className={`flex-row items-center py-3 ${
              index < 3 ? "border-b border-border" : ""
            }`}
          >
            <Feather name="file-text" size={18} color={colors.textMuted} />
            <Text color="secondary" className="flex-1 ml-3">
              {item.title}
            </Text>
            <Feather name="external-link" size={16} color={colors.textMuted} />
          </View>
        ))}
      </View>

      {/* Coming soon */}
      <View className="items-center mt-8">
        <Caption>Full documentation coming in V2</Caption>
      </View>
    </ScreenLayout>
  );
}
