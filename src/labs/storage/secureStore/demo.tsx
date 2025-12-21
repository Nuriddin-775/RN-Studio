/**
 * SecureStore Demo
 * Interactive demonstration of SecureStore
 */
import { View, TextInput, Alert, Platform, Pressable } from "react-native";
import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { Feather } from "@expo/vector-icons";
import { Button, Text, Caption } from "@components/common";
import { SectionLayout, DemoContainer, CodeBlock } from "@components/layouts";
import { InfoCard } from "@components/cards";
import { colors } from "@constants/colors";
import { explanation } from "./explanation";

const SECURE_KEY = "rn_playground_secure_demo";

export function SecureStoreDemo() {
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isAvailable = Platform.OS !== "web";

  useEffect(() => {
    if (isAvailable) loadStoredValue();
  }, [isAvailable]);

  const loadStoredValue = async () => {
    try {
      setLoading(true);
      const value = await SecureStore.getItemAsync(SECURE_KEY);
      setStoredValue(value);
    } catch (error) {
      console.error("Failed to load secure value:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveValue = async () => {
    if (!inputValue.trim()) {
      Alert.alert("Error", "Please enter a value");
      return;
    }
    try {
      setLoading(true);
      await SecureStore.setItemAsync(SECURE_KEY, inputValue);
      setStoredValue(inputValue);
      setInputValue("");
      Alert.alert("Success", "Value encrypted and stored securely!");
    } catch (error) {
      Alert.alert("Error", "Failed to store securely");
    } finally {
      setLoading(false);
    }
  };

  const clearValue = async () => {
    try {
      setLoading(true);
      await SecureStore.deleteItemAsync(SECURE_KEY);
      setStoredValue(null);
      setIsVisible(false);
      Alert.alert("Success", "Secure value deleted!");
    } catch (error) {
      Alert.alert("Error", "Failed to delete");
    } finally {
      setLoading(false);
    }
  };

  if (!isAvailable) {
    return (
      <View>
        <DemoContainer title="Platform Not Supported">
          <View className="items-center py-8">
            <Feather name="smartphone" size={48} color={colors.textMuted} />
            <Text className="mt-4 text-center font-semibold">
              SecureStore requires a native device
            </Text>
            <Caption className="mt-2 text-center">
              Run on iOS or Android to test SecureStore
            </Caption>
          </View>
        </DemoContainer>
      </View>
    );
  }

  return (
    <View>
      {/* Interactive Demo */}
      <SectionLayout title="Interactive Demo" icon="play">
        <DemoContainer
          title="Encrypted Storage"
          description="Values are encrypted using device-level security"
        >
          {/* Current stored value */}
          <View className="bg-surface rounded-lg border border-border-subtle p-4 mb-4">
            <View className="flex-row items-center justify-between mb-2">
              <Caption>Stored Securely:</Caption>
              {storedValue && (
                <Pressable onPress={() => setIsVisible(!isVisible)}>
                  <Feather
                    name={isVisible ? "eye-off" : "eye"}
                    size={16}
                    color={colors.textMuted}
                  />
                </Pressable>
              )}
            </View>
            {storedValue ? (
              <View className="flex-row items-center">
                <Feather name="lock" size={16} color={colors.success} />
                <Text className="ml-2 flex-1">
                  {isVisible ? storedValue : "••••••••••••"}
                </Text>
              </View>
            ) : (
              <View className="flex-row items-center">
                <Feather name="inbox" size={16} color={colors.textMuted} />
                <Caption className="ml-2">No secure value stored</Caption>
              </View>
            )}
          </View>

          {/* Input */}
          <TextInput
            className="bg-surface-elevated border border-border rounded-lg px-4 py-3 text-text-primary mb-4"
            placeholder="Enter sensitive data..."
            placeholderTextColor={colors.textMuted}
            value={inputValue}
            onChangeText={setInputValue}
            secureTextEntry
          />

          {/* Actions */}
          <View className="flex-row gap-3">
            <View className="flex-1">
              <Button
                title="Store Securely"
                onPress={saveValue}
                variant="primary"
                fullWidth
                loading={loading}
              />
            </View>
            <View className="flex-1">
              <Button
                title="Delete"
                onPress={clearValue}
                variant="secondary"
                fullWidth
                disabled={!storedValue}
              />
            </View>
          </View>
        </DemoContainer>
      </SectionLayout>

      {/* Code Examples */}
      <SectionLayout title="Code" icon="code">
        <CodeBlock code={explanation.codeExamples.basic} title="Basic Usage" />
      </SectionLayout>

      {/* How it works */}
      <SectionLayout title="How It Works" icon="shield">
        <View className="bg-surface-elevated border border-border rounded-lg p-4">
          <View className="flex-row items-center justify-center mb-4">
            <View className="w-10 h-10 rounded-full bg-accent/20 items-center justify-center">
              <Feather name="smartphone" size={20} color={colors.accent} />
            </View>
            <Feather
              name="arrow-right"
              size={16}
              color={colors.textMuted}
              style={{ marginHorizontal: 12 }}
            />
            <View className="w-10 h-10 rounded-full bg-status-success/20 items-center justify-center">
              <Feather name="lock" size={20} color={colors.success} />
            </View>
            <Feather
              name="arrow-right"
              size={16}
              color={colors.textMuted}
              style={{ marginHorizontal: 12 }}
            />
            <View className="w-10 h-10 rounded-full bg-status-warning/20 items-center justify-center">
              <Feather name="hard-drive" size={20} color={colors.warning} />
            </View>
          </View>
          <Caption className="text-center">
            iOS: Keychain Services | Android: Keystore + SharedPreferences
          </Caption>
        </View>
      </SectionLayout>

      {/* Use Cases */}
      <SectionLayout title="Use Cases" icon="check-circle">
        <View className="bg-surface-elevated border border-border rounded-lg p-4">
          {explanation.useCases.map((item, i) => (
            <View
              key={i}
              className={`flex-row items-center py-3 ${
                i < explanation.useCases.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <Feather name="key" size={16} color={colors.accent} />
              <Text color="secondary" className="ml-3">
                {item}
              </Text>
            </View>
          ))}
        </View>
      </SectionLayout>

      <InfoCard
        variant="success"
        title="Secure by Default"
        message="Data is encrypted using the device's secure hardware when available."
      />
    </View>
  );
}

