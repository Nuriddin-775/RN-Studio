/**
 * Button Component
 * Reusable button with multiple variants and sizes
 */
import {colors} from "@constants/colors"
import {Feather} from "@expo/vector-icons"
import {ActivityIndicator, Pressable, Text, View} from "react-native"

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps {
  title: string
  onPress: () => void
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  icon?: keyof typeof Feather.glyphMap
  iconPosition?: "left" | "right"
}

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = "left",
}: ButtonProps) {
  const isDisabled = disabled || loading

  // Size configurations
  const sizeConfig = {
    sm: {px: "px-3", py: "py-1.5", text: "text-xs", icon: 14},
    md: {px: "px-4", py: "py-2.5", text: "text-sm", icon: 16},
    lg: {px: "px-6", py: "py-3", text: "text-base", icon: 18},
  }

  // Variant configurations
  const variantConfig = {
    primary: {
      bg: "bg-accent",
      text: "text-surface font-semibold",
      border: "",
    },
    secondary: {
      bg: "bg-surface-accent",
      text: "text-text-primary font-medium",
      border: "",
    },
    outline: {
      bg: "bg-transparent",
      text: "text-text-primary font-medium",
      border: "border border-border",
    },
    ghost: {
      bg: "bg-transparent",
      text: "text-accent font-medium",
      border: "",
    },
    danger: {
      bg: "bg-status-error",
      text: "text-white font-semibold",
      border: "",
    },
  }

  const config = sizeConfig[size]
  const variantStyle = variantConfig[variant]

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      className={`
        rounded-lg items-center justify-center flex-row
        ${config.px} ${config.py}
        ${variantStyle.bg} ${variantStyle.border}
        ${fullWidth ? "w-full" : ""}
        ${isDisabled ? "opacity-50" : "active:opacity-80"}
      `}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "primary" ? colors.background : colors.accent}
          style={{marginRight: title ? 8 : 0}}
        />
      ) : icon && iconPosition === "left" ? (
        <Feather
          name={icon}
          size={config.icon}
          color={variant === "primary" ? colors.background : colors.accent}
          style={{marginRight: 6}}
        />
      ) : null}

      <Text className={`${config.text} ${variantStyle.text}`}>{title}</Text>

      {icon && iconPosition === "right" && !loading && (
        <Feather
          name={icon}
          size={config.icon}
          color={variant === "primary" ? colors.background : colors.accent}
          style={{marginLeft: 6}}
        />
      )}
    </Pressable>
  )
}
