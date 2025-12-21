/**
 * Loader Component
 * Loading states and indicators
 */
import {colors} from "@constants/colors"
import {ActivityIndicator, View} from "react-native"
import {Text} from "./Text"

interface LoaderProps {
  size?: "small" | "large"
  message?: string
  fullScreen?: boolean
}

export function Loader({size = "large", message, fullScreen = false}: LoaderProps) {
  const content = (
    <>
      <ActivityIndicator size={size} color={colors.accent} />
      {message && (
        <Text variant="caption" color="secondary" className="mt-3">
          {message}
        </Text>
      )}
    </>
  )

  if (fullScreen) {
    return <View className="flex-1 bg-surface items-center justify-center">{content}</View>
  }

  return <View className="py-8 items-center justify-center">{content}</View>
}

// Skeleton loader for content placeholders
interface SkeletonProps {
  width?: number | string
  height?: number
  rounded?: boolean
}

export function Skeleton({width = "100%", height = 16, rounded = false}: SkeletonProps) {
  return (
    <View
      className={`bg-surface-accent animate-pulse ${rounded ? "rounded-full" : "rounded"}`}
      style={{width: width as number, height}}
    />
  )
}
