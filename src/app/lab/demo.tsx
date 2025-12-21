/**
 * Lab Demo Screen
 * Renders the interactive demo for a lab
 */
import {Caption, Text} from "@components/common"
import {ScreenLayout} from "@components/layouts"
import {colors} from "@constants/colors"
import {Feather} from "@expo/vector-icons"
import {useLab} from "@hooks/useLab"
// Import demos
import {ContextDemo} from "@labs/state/context"
import {ReduxDemo} from "@labs/state/redux"
import {ZustandDemo} from "@labs/state/zustand"
import {AsyncStorageDemo} from "@labs/storage/asyncStorage"
import {SecureStoreDemo} from "@labs/storage/secureStore"
import {Stack} from "expo-router"
import {View} from "react-native"

// Map lab IDs to demo components
const DEMO_COMPONENTS: Record<string, React.ComponentType> = {
  context: ContextDemo,
  redux: ReduxDemo,
  zustand: ZustandDemo,
  "async-storage": AsyncStorageDemo,
  "secure-store": SecureStoreDemo,
}

export default function LabDemoScreen() {
  const {currentLab, labId} = useLab()

  if (!currentLab || !labId) {
    return (
      <ScreenLayout>
        <Stack.Screen options={{title: "Demo"}} />
        <View className="flex-1 items-center justify-center">
          <Feather name="alert-circle" size={48} color={colors.error} />
          <Text className="mt-4">Lab not found</Text>
        </View>
      </ScreenLayout>
    )
  }

  const DemoComponent = DEMO_COMPONENTS[labId]

  return (
    <ScreenLayout>
      <Stack.Screen options={{title: `${currentLab.title} Demo`}} />

      {DemoComponent ? (
        <DemoComponent />
      ) : (
        <View className="items-center py-12">
          <View className="w-16 h-16 rounded-full bg-surface-accent items-center justify-center mb-4">
            <Feather name="tool" size={32} color={colors.textMuted} />
          </View>
          <Text variant="heading" className="mb-2">
            Coming Soon
          </Text>
          <Caption center>The demo for this lab is under development.</Caption>
        </View>
      )}
    </ScreenLayout>
  )
}
