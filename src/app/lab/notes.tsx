/**
 * Lab Notes Screen
 * Shows key concepts and notes for a lab
 */
import {InfoCard} from "@components/cards"
import {Caption, Text} from "@components/common"
import {ScreenLayout, SectionLayout} from "@components/layouts"
import {colors} from "@constants/colors"
import {Feather} from "@expo/vector-icons"
import {useLab} from "@hooks/useLab"
// Import explanations
import {explanation as contextExplanation} from "@labs/state/context/explanation"
import {explanation as reduxExplanation} from "@labs/state/redux/explanation"
import {explanation as zustandExplanation} from "@labs/state/zustand/explanation"
import {explanation as asyncStorageExplanation} from "@labs/storage/asyncStorage/explanation"
import {explanation as secureStoreExplanation} from "@labs/storage/secureStore/explanation"
import {Stack} from "expo-router"
import {View} from "react-native"

const EXPLANATIONS: Record<string, any> = {
  context: contextExplanation,
  redux: reduxExplanation,
  zustand: zustandExplanation,
  "async-storage": asyncStorageExplanation,
  "secure-store": secureStoreExplanation,
}

export default function LabNotesScreen() {
  const {currentLab, labId} = useLab()

  if (!currentLab || !labId) {
    return (
      <ScreenLayout>
        <Stack.Screen options={{title: "Notes"}} />
        <View className="flex-1 items-center justify-center">
          <Feather name="alert-circle" size={48} color={colors.error} />
          <Text className="mt-4">Lab not found</Text>
        </View>
      </ScreenLayout>
    )
  }

  const explanation = EXPLANATIONS[labId]

  if (!explanation) {
    return (
      <ScreenLayout>
        <Stack.Screen options={{title: `${currentLab.title} Notes`}} />
        <View className="items-center py-12">
          <Feather name="book" size={32} color={colors.textMuted} />
          <Text variant="heading" className="mt-4 mb-2">
            Coming Soon
          </Text>
          <Caption center>Notes for this lab are being prepared.</Caption>
        </View>
      </ScreenLayout>
    )
  }

  return (
    <ScreenLayout>
      <Stack.Screen options={{title: `${currentLab.title} Notes`}} />

      {/* Overview */}
      <SectionLayout title="Overview" icon="info">
        <View className="bg-surface-elevated border border-border rounded-lg p-4">
          <Text color="secondary" className="leading-6">
            {explanation.overview}
          </Text>
        </View>
      </SectionLayout>

      {/* Key Points */}
      {explanation.keyPoints && (
        <SectionLayout title="Key Concepts" icon="key">
          <View className="bg-surface-elevated border border-border rounded-lg p-4">
            {explanation.keyPoints.map((point: any, i: number) => (
              <View
                key={i}
                className={`flex-row items-start py-3 ${
                  i < explanation.keyPoints.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <View className="w-8 h-8 rounded bg-surface-accent items-center justify-center mr-3">
                  <Text>{point.emoji || "📌"}</Text>
                </View>
                <View className="flex-1">
                  <Text variant="label" className="mb-1">
                    {point.title}
                  </Text>
                  <Caption>{point.description}</Caption>
                </View>
              </View>
            ))}
          </View>
        </SectionLayout>
      )}

      {/* When to Use */}
      {explanation.whenToUse && (
        <SectionLayout title="When to Use" icon="check-circle">
          <View className="bg-surface-elevated border border-border rounded-lg p-4">
            {explanation.whenToUse.map((item: string, i: number) => (
              <View key={i} className="flex-row items-center mb-2 last:mb-0">
                <Text className="text-status-success mr-2">✓</Text>
                <Text color="secondary">{item}</Text>
              </View>
            ))}
          </View>
        </SectionLayout>
      )}

      {/* When NOT to Use */}
      {explanation.whenNotToUse && (
        <SectionLayout title="When NOT to Use" icon="x-circle">
          <View className="bg-surface-elevated border border-border rounded-lg p-4">
            {explanation.whenNotToUse.map((item: string, i: number) => (
              <View key={i} className="flex-row items-center mb-2 last:mb-0">
                <Text className="text-status-warning mr-2">!</Text>
                <Text color="secondary">{item}</Text>
              </View>
            ))}
          </View>
        </SectionLayout>
      )}

      {/* Pros */}
      {explanation.pros && (
        <SectionLayout title="Pros" icon="thumbs-up">
          <View className="bg-surface-elevated border border-border rounded-lg p-4">
            {explanation.pros.map((item: string, i: number) => (
              <View key={i} className="flex-row items-center mb-2 last:mb-0">
                <Feather name="plus" size={14} color={colors.success} />
                <Text color="secondary" className="ml-2">
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </SectionLayout>
      )}

      {/* Cons */}
      {explanation.cons && (
        <SectionLayout title="Cons" icon="thumbs-down">
          <View className="bg-surface-elevated border border-border rounded-lg p-4">
            {explanation.cons.map((item: string, i: number) => (
              <View key={i} className="flex-row items-center mb-2 last:mb-0">
                <Feather name="minus" size={14} color={colors.warning} />
                <Text color="secondary" className="ml-2">
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </SectionLayout>
      )}

      {/* Bundle Size */}
      {explanation.bundleSize && (
        <InfoCard variant="info" title="Bundle Size" message={`Approximately ${explanation.bundleSize}`} />
      )}
    </ScreenLayout>
  )
}
