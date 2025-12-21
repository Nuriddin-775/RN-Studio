/**
 * Zustand Demo
 * Interactive demonstration of Zustand state management
 */
import { View } from "react-native";
import { Button, Text, Caption } from "@components/common";
import { SectionLayout, DemoContainer, CodeBlock } from "@components/layouts";
import { InfoCard } from "@components/cards";
import { useCounterStore } from "./store";
import { explanation } from "./explanation";

export function ZustandDemo() {
  // Direct hook usage - no Provider needed!
  const { count, increment, decrement, incrementBy, reset, history } =
    useCounterStore();

  return (
    <View>
      {/* Interactive Demo */}
      <SectionLayout title="Interactive Demo" icon="play">
        <DemoContainer
          title="Counter Example"
          description="Same counter, simpler implementation"
        >
          {/* Counter Display */}
          <View className="items-center py-8 mb-4 bg-surface rounded-lg border border-border-subtle">
            <Caption className="mb-2">Current Count</Caption>
            <Text className="text-5xl font-bold text-status-success">
              {count}
            </Text>
          </View>

          {/* Control Buttons */}
          <View className="flex-row justify-center gap-3 mb-4">
            <Button title="-1" onPress={decrement} variant="secondary" />
            <Button title="+1" onPress={increment} variant="primary" />
            <Button
              title="+5"
              onPress={() => incrementBy(5)}
              variant="secondary"
            />
          </View>

          {/* Reset */}
          <Button title="Reset" onPress={reset} variant="ghost" fullWidth />

          {/* History */}
          {history.length > 0 && (
            <View className="mt-4 pt-4 border-t border-border">
              <Caption className="mb-2">
                History ({history.length} changes)
              </Caption>
              <View className="flex-row flex-wrap gap-2">
                {history.slice(-10).map((val, i) => (
                  <View key={i} className="px-2 py-1 bg-surface-accent rounded">
                    <Caption>{val}</Caption>
                  </View>
                ))}
              </View>
            </View>
          )}
        </DemoContainer>
      </SectionLayout>

      {/* Code Examples */}
      <SectionLayout title="Code" icon="code">
        <CodeBlock code={explanation.codeExamples.store} title="store.ts" />
        <CodeBlock code={explanation.codeExamples.usage} title="Component Usage" />
      </SectionLayout>

      {/* Comparison Table */}
      <SectionLayout title="Zustand vs Redux" icon="git-merge">
        <View className="bg-surface-elevated border border-border rounded-lg overflow-hidden">
          {/* Header */}
          <View className="flex-row bg-surface-accent">
            <View className="flex-1 p-3 border-r border-border">
              <Caption className="text-center font-medium">Metric</Caption>
            </View>
            <View className="flex-1 p-3 border-r border-border">
              <Caption className="text-center font-medium">Zustand</Caption>
            </View>
            <View className="flex-1 p-3">
              <Caption className="text-center font-medium">Redux TK</Caption>
            </View>
          </View>
          {/* Rows */}
          {explanation.comparisonTable.map((row, i) => (
            <View key={i} className="flex-row border-t border-border">
              <View className="flex-1 p-3 border-r border-border">
                <Caption className="text-center">{row.metric}</Caption>
              </View>
              <View className="flex-1 p-3 border-r border-border">
                <Text
                  variant="caption"
                  color="success"
                  className="text-center"
                >
                  {row.zustand}
                </Text>
              </View>
              <View className="flex-1 p-3">
                <Text variant="caption" color="accent" className="text-center">
                  {row.redux}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </SectionLayout>

      {/* Key Concepts */}
      <SectionLayout title="Key Concepts" icon="book">
        <View className="bg-surface-elevated border border-border rounded-lg p-4">
          {explanation.keyPoints.map((point, i) => (
            <View
              key={i}
              className={`flex-row items-start py-3 ${
                i < explanation.keyPoints.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <View className="w-8 h-8 rounded bg-surface-accent items-center justify-center mr-3">
                <Text>
                  {point.icon === "feather" && "🪶"}
                  {point.icon === "box" && "📦"}
                  {point.icon === "anchor" && "🎣"}
                  {point.icon === "zap" && "⚡"}
                </Text>
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

      {/* Bundle Size Note */}
      <InfoCard
        variant="tip"
        title="Tiny Bundle"
        message={`Zustand is only ${explanation.bundleSize} - about 20x smaller than Redux Toolkit!`}
      />
    </View>
  );
}

