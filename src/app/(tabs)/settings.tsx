/**
 * Settings Screen
 * App settings and info
 */
import {Caption, Text} from "@components/common"
import {ScreenLayout} from "@components/layouts"
import {colors} from "@constants/colors"
import {APP_NAME, APP_VERSION} from "@constants/index"
import {Feather} from "@expo/vector-icons"
import {Pressable, View} from "react-native"

interface SettingsRowProps {
  icon: keyof typeof Feather.glyphMap
  title: string
  value?: string
  onPress?: () => void
  showChevron?: boolean
}

function SettingsRow({icon, title, value, onPress, showChevron = true}: SettingsRowProps) {
  return (
    <Pressable onPress={onPress} className="flex-row items-center py-4 border-b border-border active:opacity-70">
      <View className="w-8 h-8 rounded-lg bg-surface-accent items-center justify-center mr-3">
        <Feather name={icon} size={16} color={colors.accent} />
      </View>
      <Text className="flex-1">{title}</Text>
      {value && <Caption className="mr-2">{value}</Caption>}
      {showChevron && <Feather name="chevron-right" size={18} color={colors.textMuted} />}
    </Pressable>
  )
}

export default function SettingsScreen() {
  return (
    <ScreenLayout>
      {/* About */}
      <View className="bg-surface-elevated border border-border rounded-lg p-4 mb-6">
        <Caption className="uppercase tracking-wider mb-3">About</Caption>
        <SettingsRow icon="info" title="App Version" value={APP_VERSION} showChevron={false} />
        <SettingsRow icon="github" title="Source Code" />
        <SettingsRow icon="star" title="Rate App" />
      </View>

      {/* Preferences */}
      <View className="bg-surface-elevated border border-border rounded-lg p-4 mb-6">
        <Caption className="uppercase tracking-wider mb-3">Preferences</Caption>
        <SettingsRow icon="moon" title="Theme" value="Dark" />
        <SettingsRow icon="bell" title="Notifications" value="Off" />
      </View>

      {/* Data */}
      <View className="bg-surface-elevated border border-border rounded-lg p-4 mb-6">
        <Caption className="uppercase tracking-wider mb-3">Data</Caption>
        <SettingsRow icon="trash-2" title="Clear Cache" />
        <SettingsRow icon="refresh-cw" title="Reset All Data" />
      </View>

      {/* Footer */}
      <View className="items-center mt-8">
        <Text variant="label" className="mb-1">
          {APP_NAME}
        </Text>
        <Caption>A developer playground for React Native & Expo</Caption>
        <Caption className="mt-4">Built with ❤️ using Expo</Caption>
      </View>
    </ScreenLayout>
  )
}
