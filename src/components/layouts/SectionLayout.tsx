/**
 * SectionLayout Component
 * Groups related content with title and optional actions
 */
import { View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Text, Caption } from "@components/common";
import { colors } from "@constants/colors";

interface SectionLayoutProps {
  title: string;
  subtitle?: string;
  icon?: keyof typeof Feather.glyphMap;
  action?: {
    label: string;
    onPress: () => void;
  };
  children: React.ReactNode;
  noPadding?: boolean;
}

export function SectionLayout({
  title,
  subtitle,
  icon,
  action,
  children,
  noPadding = false,
}: SectionLayoutProps) {
  return (
    <View className="mb-6">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-3 px-1">
        <View className="flex-row items-center flex-1">
          {icon && (
            <Feather
              name={icon}
              size={14}
              color={colors.textMuted}
              style={{ marginRight: 8 }}
            />
          )}
          <View className="flex-1">
            <Text
              variant="caption"
              color="muted"
              className="uppercase tracking-wider"
            >
              {title}
            </Text>
            {subtitle && (
              <Caption className="mt-0.5">{subtitle}</Caption>
            )}
          </View>
        </View>

        {action && (
          <Pressable
            onPress={action.onPress}
            className="flex-row items-center active:opacity-70"
          >
            <Text variant="caption" color="accent">
              {action.label}
            </Text>
            <Feather
              name="chevron-right"
              size={14}
              color={colors.accent}
              style={{ marginLeft: 2 }}
            />
          </Pressable>
        )}
      </View>

      {/* Content */}
      <View className={noPadding ? "" : ""}>{children}</View>
    </View>
  );
}

// Demo container for lab interactive sections
interface DemoContainerProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function DemoContainer({
  title,
  description,
  children,
}: DemoContainerProps) {
  return (
    <View className="bg-surface-elevated border border-border rounded-lg p-4 mb-4">
      {title && (
        <Text variant="label" className="mb-1">
          {title}
        </Text>
      )}
      {description && (
        <Caption className="mb-4">{description}</Caption>
      )}
      {children}
    </View>
  );
}

// Code block for displaying code snippets
interface CodeBlockProps {
  code: string;
  title?: string;
  language?: string;
}

export function CodeBlock({
  code,
  title,
  language = "typescript",
}: CodeBlockProps) {
  return (
    <View className="bg-surface border border-border rounded-lg overflow-hidden mb-4">
      {title && (
        <View className="flex-row items-center justify-between px-3 py-2 border-b border-border bg-surface-accent">
          <Text variant="caption" color="secondary" className="font-mono">
            {title}
          </Text>
          <Caption>{language}</Caption>
        </View>
      )}
      <View className="p-3">
        <Text
          variant="code"
          color="primary"
          className="leading-5"
          style={{ fontFamily: "Menlo" }}
        >
          {code}
        </Text>
      </View>
    </View>
  );
}

