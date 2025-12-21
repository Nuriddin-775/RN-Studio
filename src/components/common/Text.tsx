/**
 * Text Components
 * Consistent typography across the app
 */
import { Text as RNText, TextProps as RNTextProps } from "react-native";

type TextVariant = "title" | "heading" | "body" | "label" | "caption" | "code";
type TextColor = "primary" | "secondary" | "muted" | "accent" | "success" | "warning" | "error";

interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: TextColor;
  bold?: boolean;
  center?: boolean;
}

// Variant styles
const variantStyles: Record<TextVariant, string> = {
  title: "text-2xl font-bold",
  heading: "text-lg font-semibold",
  body: "text-base",
  label: "text-sm font-medium",
  caption: "text-xs",
  code: "text-sm font-mono",
};

// Color styles
const colorStyles: Record<TextColor, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
  accent: "text-accent",
  success: "text-status-success",
  warning: "text-status-warning",
  error: "text-status-error",
};

export function Text({
  variant = "body",
  color = "primary",
  bold = false,
  center = false,
  className = "",
  ...props
}: TextProps) {
  return (
    <RNText
      className={`
        ${variantStyles[variant]}
        ${colorStyles[color]}
        ${bold ? "font-bold" : ""}
        ${center ? "text-center" : ""}
        ${className}
      `}
      {...props}
    />
  );
}

// Convenience components
export function Title(props: Omit<TextProps, "variant">) {
  return <Text variant="title" {...props} />;
}

export function Heading(props: Omit<TextProps, "variant">) {
  return <Text variant="heading" {...props} />;
}

export function Body(props: Omit<TextProps, "variant">) {
  return <Text variant="body" {...props} />;
}

export function Label(props: Omit<TextProps, "variant">) {
  return <Text variant="label" {...props} />;
}

export function Caption(props: Omit<TextProps, "variant">) {
  return <Text variant="caption" color="muted" {...props} />;
}

export function Code(props: Omit<TextProps, "variant">) {
  return <Text variant="code" {...props} />;
}

