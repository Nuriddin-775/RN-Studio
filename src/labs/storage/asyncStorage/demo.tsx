/**
 * AsyncStorage Demo
 * Interactive demonstration of AsyncStorage
 */
import { View, TextInput, Alert } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import { Button, Text, Caption } from "@components/common";
import { SectionLayout, DemoContainer, CodeBlock } from "@components/layouts";
import { InfoCard } from "@components/cards";
import { colors } from "@constants/colors";
import { explanation } from "./explanation";

const STORAGE_KEY = "@rn_playground_async_demo";

export function AsyncStorageDemo() {
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadStoredValue();
  }, []);

  const loadStoredValue = async () => {
    try {
      setLoading(true);
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      setStoredValue(value);
    } catch (error) {
      Alert.alert("Error", "Failed to load stored value");
    } finally {
      setLoading(false);
    }
  };

  const saveValue = async () => {
    if (!inputValue.trim()) {
      Alert.alert("Error", "Please enter a value to save");
      return;
    }
    try {
      setLoading(true);
      await AsyncStorage.setItem(STORAGE_KEY, inputValue);
      setStoredValue(inputValue);
      setInputValue("");
      Alert.alert("Success", "Value saved!");
    } catch (error) {
      Alert.alert("Error", "Failed to save value");
    } finally {
      setLoading(false);
    }
  };

  const clearValue = async () => {
    try {
      setLoading(true);
      await AsyncStorage.removeItem(STORAGE_KEY);
      setStoredValue(null);
      Alert.alert("Success", "Value cleared!");
    } catch (error) {
      Alert.alert("Error", "Failed to clear value");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      {/* Interactive Demo */}
      <SectionLayout title="Interactive Demo" icon="play">
        <DemoContainer
          title="Persistent Storage"
          description="Values persist even after app restart"
        >
          {/* Current stored value */}
          <View className="bg-surface rounded-lg border border-border-subtle p-4 mb-4">
            <Caption className="mb-2">Currently Stored:</Caption>
            {storedValue ? (
              <View className="flex-row items-center">
                <Feather name="database" size={16} color={colors.success} />
                <Text className="ml-2 flex-1">{storedValue}</Text>
              </View>
            ) : (
              <View className="flex-row items-center">
                <Feather name="inbox" size={16} color={colors.textMuted} />
                <Caption className="ml-2">No value stored</Caption>
              </View>
            )}
          </View>

          {/* Input */}
          <TextInput
            className="bg-surface-elevated border border-border rounded-lg px-4 py-3 text-text-primary mb-4"
            placeholder="Enter a value to store..."
            placeholderTextColor={colors.textMuted}
            value={inputValue}
            onChangeText={setInputValue}
          />

          {/* Actions */}
          <View className="flex-row gap-3">
            <View className="flex-1">
              <Button
                title="Save"
                onPress={saveValue}
                variant="primary"
                fullWidth
                loading={loading}
              />
            </View>
            <View className="flex-1">
              <Button
                title="Clear"
                onPress={clearValue}
                variant="secondary"
                fullWidth
                disabled={!storedValue}
              />
            </View>
          </View>

          <View className="mt-3">
            <Button
              title="Reload from Storage"
              onPress={loadStoredValue}
              variant="ghost"
              size="sm"
              fullWidth
            />
          </View>
        </DemoContainer>
      </SectionLayout>

      {/* Code Examples */}
      <SectionLayout title="Code" icon="code">
        <CodeBlock code={explanation.codeExamples.basic} title="Basic Usage" />
        <CodeBlock code={explanation.codeExamples.objects} title="Storing Objects" />
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
                <Text>{point.emoji}</Text>
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

      {/* Warning */}
      <InfoCard
        variant="warning"
        title="Not for Sensitive Data"
        message="AsyncStorage is unencrypted. Use SecureStore for passwords, tokens, and sensitive information."
      />
    </View>
  );
}

