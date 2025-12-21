/**
 * ScreenLayout Component
 * Base layout wrapper for screens
 */
import { View, ScrollView, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@constants/colors";

interface ScreenLayoutProps {
  children: React.ReactNode;
  scrollable?: boolean;
  padded?: boolean;
  safeArea?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
}

export function ScreenLayout({
  children,
  scrollable = true,
  padded = true,
  safeArea = true,
  refreshing = false,
  onRefresh,
}: ScreenLayoutProps) {
  const Wrapper = safeArea ? SafeAreaView : View;
  const content = padded ? (
    <View className="px-4 py-6">{children}</View>
  ) : (
    children
  );

  if (scrollable) {
    return (
      <Wrapper className="flex-1 bg-surface" edges={["bottom"]}>
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            onRefresh ? (
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={colors.accent}
              />
            ) : undefined
          }
        >
          {content}
        </ScrollView>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="flex-1 bg-surface" edges={["bottom"]}>
      {content}
    </Wrapper>
  );
}

