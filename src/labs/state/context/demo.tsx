/**
 * Context API Demo
 * Interactive demonstration of Context state management
 */
import { View } from "react-native";
import { Button, Text, Caption } from "@components/common";
import { SectionLayout, DemoContainer, CodeBlock } from "@components/layouts";
import { InfoCard } from "@components/cards";
import { CounterProvider, useCounter, counterActions } from "./store";
import { explanation } from "./explanation";

// Inner component that uses the context
function CounterDisplay() {
  const { state, dispatch } = useCounter();

  return (
    <DemoContainer
      title="Counter Example"
      description="Demonstrates useContext and useReducer pattern"
    >
      {/* Counter Display */}
      <View className="items-center py-8 mb-4 bg-surface rounded-lg border border-border-subtle">
        <Caption className="mb-2">Current Count</Caption>
        <Text className="text-5xl font-bold text-categoryState">
          {state.count}
        </Text>
      </View>

      {/* Control Buttons */}
      <View className="flex-row justify-center gap-3 mb-4">
        <Button
          title="-1"
          onPress={() => dispatch(counterActions.decrement())}
          variant="secondary"
        />
        <Button
          title="+1"
          onPress={() => dispatch(counterActions.increment())}
          variant="primary"
        />
        <Button
          title="+5"
          onPress={() => dispatch(counterActions.incrementBy(5))}
          variant="secondary"
        />
      </View>

      {/* Reset */}
      <Button
        title="Reset"
        onPress={() => dispatch(counterActions.reset())}
        variant="ghost"
        fullWidth
      />

      {/* History */}
      {state.history.length > 0 && (
        <View className="mt-4 pt-4 border-t border-border">
          <Caption className="mb-2">
            History ({state.history.length} changes)
          </Caption>
          <View className="flex-row flex-wrap gap-2">
            {state.history.slice(-10).map((val, i) => (
              <View key={i} className="px-2 py-1 bg-surface-accent rounded">
                <Caption>{val}</Caption>
              </View>
            ))}
          </View>
        </View>
      )}
    </DemoContainer>
  );
}

// Main demo component wrapped with provider
export function ContextDemo() {
  return (
    <CounterProvider>
      <View>
        {/* Interactive Demo */}
        <SectionLayout title="Interactive Demo" icon="play">
          <CounterDisplay />
        </SectionLayout>

        {/* Code Examples */}
        <SectionLayout title="Code" icon="code">
          <CodeBlock
            code={explanation.codeExamples.createContext}
            title="Create Context"
          />
          <CodeBlock
            code={explanation.codeExamples.provider}
            title="Provider Component"
          />
          <CodeBlock
            code={explanation.codeExamples.useContext}
            title="Using Context"
          />
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
                  <Text>📦</Text>
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

        {/* When to Use */}
        <SectionLayout title="When to Use" icon="check-circle">
          <View className="bg-surface-elevated border border-border rounded-lg p-4">
            {explanation.whenToUse.map((item, i) => (
              <View key={i} className="flex-row items-center mb-2 last:mb-0">
                <Text className="text-status-success mr-2">✓</Text>
                <Text color="secondary">{item}</Text>
              </View>
            ))}
          </View>
        </SectionLayout>

        {/* Limitations */}
        <SectionLayout title="Limitations" icon="alert-circle">
          <InfoCard
            variant="warning"
            title="Re-render Behavior"
            message="All consumers re-render when context value changes, even if they only use part of the state."
          />
        </SectionLayout>
      </View>
    </CounterProvider>
  );
}

