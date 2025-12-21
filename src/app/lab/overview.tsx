/**
 * Lab Overview Screen
 * Shows lab description and navigation to demo/code/notes
 */
import { View, Pressable } from "react-native";
import { Stack, router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { ScreenLayout, SectionLayout } from "@components/layouts";
import { InfoCard } from "@components/cards";
import { Button, Text, Caption } from "@components/common";
import { useLab } from "@hooks/useLab";
import { colors, difficultyColors } from "@constants/colors";

export default function LabOverviewScreen() {
  const { currentLab, labId, navigateToLab } = useLab();

  if (!currentLab) {
    return (
      <ScreenLayout>
        <Stack.Screen options={{ title: "Not Found" }} />
        <View className="flex-1 items-center justify-center">
          <Feather name="alert-circle" size={48} color={colors.error} />
          <Text className="mt-4">Lab not found</Text>
          <Button
            title="Go Back"
            onPress={() => router.back()}
            variant="primary"
          />
        </View>
      </ScreenLayout>
    );
  }

  const navigationItems = [
    {
      id: "demo",
      title: "Interactive Demo",
      description: "Try out the feature hands-on",
      icon: "play-circle" as const,
      available: currentLab.available,
    },
    {
      id: "code",
      title: "View Code",
      description: "See the implementation details",
      icon: "code" as const,
      available: currentLab.available,
    },
    {
      id: "notes",
      title: "Key Notes",
      description: "Important concepts and tips",
      icon: "book" as const,
      available: currentLab.available,
    },
  ];

  return (
    <ScreenLayout>
      <Stack.Screen options={{ title: currentLab.title }} />

      {/* Header */}
      <View className="mb-6">
        <View className="flex-row items-center mb-2">
          <View
            className="px-2 py-1 rounded mr-2"
            style={{
              backgroundColor: `${difficultyColors[currentLab.difficulty]}20`,
            }}
          >
            <Caption style={{ color: difficultyColors[currentLab.difficulty] }}>
              {currentLab.difficulty}
            </Caption>
          </View>
          {currentLab.tags.map((tag) => (
            <View key={tag} className="px-2 py-1 rounded bg-surface-accent mr-1">
              <Caption>{tag}</Caption>
            </View>
          ))}
        </View>
        <Text variant="title" className="mb-2">
          {currentLab.title}
        </Text>
        <Text color="secondary" className="leading-6">
          {currentLab.description}
        </Text>
      </View>

      {/* Status */}
      {!currentLab.available && (
        <InfoCard
          variant="info"
          title="Coming Soon"
          message="This lab is under development and will be available in a future update."
        />
      )}

      {/* Navigation */}
      <SectionLayout title="Explore" icon="compass">
        {navigationItems.map((item) => (
          <Pressable
            key={item.id}
            onPress={() =>
              item.available && navigateToLab(labId!, item.id as any)
            }
            disabled={!item.available}
            className={`bg-surface-elevated border border-border rounded-lg p-4 mb-3 flex-row items-center ${
              item.available ? "active:opacity-80" : "opacity-50"
            }`}
          >
            <View className="w-10 h-10 rounded-lg bg-surface-accent items-center justify-center mr-3">
              <Feather name={item.icon} size={20} color={colors.accent} />
            </View>
            <View className="flex-1">
              <Text variant="label">{item.title}</Text>
              <Caption>{item.description}</Caption>
            </View>
            <Feather name="chevron-right" size={18} color={colors.textMuted} />
          </Pressable>
        ))}
      </SectionLayout>
    </ScreenLayout>
  );
}

