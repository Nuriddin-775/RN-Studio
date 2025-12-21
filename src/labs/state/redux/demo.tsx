/**
 * Redux Toolkit Demo
 * Interactive demonstration of Redux state management
 */
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, Text, Caption } from "@components/common";
import { SectionLayout, DemoContainer, CodeBlock } from "@components/layouts";
import { InfoCard } from "@components/cards";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  selectCount,
  selectHistory,
} from "./slice";
import { explanation } from "./explanation";

export function ReduxDemo() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const history = useSelector(selectHistory);

  return (
    <View>
      {/* Interactive Demo */}
      <SectionLayout title="Interactive Demo" icon="play">
        <DemoContainer
          title="Counter Example"
          description="Classic Redux pattern with actions and reducers"
        >
          {/* Counter Display */}
          <View className="items-center py-8 mb-4 bg-surface rounded-lg border border-border-subtle">
            <Caption className="mb-2">Current Count</Caption>
            <Text className="text-5xl font-bold text-accent">{count}</Text>
          </View>

          {/* Control Buttons */}
          <View className="flex-row justify-center gap-3 mb-4">
            <Button
              title="-1"
              onPress={() => dispatch(decrement())}
              variant="secondary"
            />
            <Button
              title="+1"
              onPress={() => dispatch(increment())}
              variant="primary"
            />
            <Button
              title="+5"
              onPress={() => dispatch(incrementByAmount(5))}
              variant="secondary"
            />
          </View>

          {/* Reset */}
          <Button
            title="Reset"
            onPress={() => dispatch(reset())}
            variant="ghost"
            fullWidth
          />

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
        <CodeBlock code={explanation.codeExamples.slice} title="counterSlice.ts" />
        <CodeBlock code={explanation.codeExamples.usage} title="Component Usage" />
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
                  {point.icon === "layers" && "📦"}
                  {point.icon === "zap" && "⚡"}
                  {point.icon === "tool" && "🔧"}
                  {point.icon === "code" && "💻"}
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

      {/* Pros & Cons */}
      <SectionLayout title="Pros" icon="check-circle">
        <View className="bg-surface-elevated border border-border rounded-lg p-4">
          {explanation.pros.map((item, i) => (
            <View key={i} className="flex-row items-center mb-2 last:mb-0">
              <Text className="text-status-success mr-2">✓</Text>
              <Text color="secondary">{item}</Text>
            </View>
          ))}
        </View>
      </SectionLayout>

      <SectionLayout title="Cons" icon="alert-circle">
        <View className="bg-surface-elevated border border-border rounded-lg p-4">
          {explanation.cons.map((item, i) => (
            <View key={i} className="flex-row items-center mb-2 last:mb-0">
              <Text className="text-status-warning mr-2">!</Text>
              <Text color="secondary">{item}</Text>
            </View>
          ))}
        </View>
      </SectionLayout>

      {/* Bundle Size Note */}
      <InfoCard
        variant="info"
        title="Bundle Size"
        message={`Redux Toolkit adds approximately ${explanation.bundleSize} to your bundle.`}
      />
    </View>
  );
}

