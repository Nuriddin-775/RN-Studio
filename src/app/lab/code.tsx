/**
 * Lab Code Screen
 * Shows code examples for a lab
 */
import {Caption, Text} from "@components/common"
import {CodeBlock, ScreenLayout, SectionLayout} from "@components/layouts"
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
import {ScrollView, View} from "react-native"

// Map lab IDs to explanations
const EXPLANATIONS: Record<string, any> = {
  context: contextExplanation,
  redux: reduxExplanation,
  zustand: zustandExplanation,
  "async-storage": asyncStorageExplanation,
  "secure-store": secureStoreExplanation,
}

export default function LabCodeScreen() {
  const {currentLab, labId} = useLab()

  if (!currentLab || !labId) {
    return (
      <ScreenLayout>
        <Stack.Screen options={{title: "Code"}} />
        <View className="flex-1 items-center justify-center">
          <Feather name="alert-circle" size={48} color={colors.error} />
          <Text className="mt-4">Lab not found</Text>
        </View>
      </ScreenLayout>
    )
  }

  const explanation = EXPLANATIONS[labId]

  if (!explanation?.codeExamples) {
    return (
      <ScreenLayout>
        <Stack.Screen options={{title: `${currentLab.title} Code`}} />
        <View className="items-center py-12">
          <View className="w-16 h-16 rounded-full bg-surface-accent items-center justify-center mb-4">
            <Feather name="code" size={32} color={colors.textMuted} />
          </View>
          <Text variant="heading" className="mb-2">
            Coming Soon
          </Text>
          <Caption center>Code examples for this lab are being prepared.</Caption>
        </View>
      </ScreenLayout>
    )
  }

  const codeExamples = Object.entries(explanation.codeExamples)

  return (
    <ScreenLayout>
      <Stack.Screen options={{title: `${currentLab.title} Code`}} />

      <SectionLayout title="Code Examples" icon="code">
        {codeExamples.map(([key, code]) => (
          <CodeBlock
            key={key}
            code={code as string}
            title={key.replace(/([A-Z])/g, " $1").trim()}
            language="typescript"
          />
        ))}
      </SectionLayout>
    </ScreenLayout>
  )
}
