import {colors} from "@constants/colors"
import {Feather} from "@expo/vector-icons"
import {Tabs} from "expo-router"
import {Badge, Icon, Label, NativeTabs, VectorIcon} from "expo-router/unstable-native-tabs"

export default function TabLayout() {
  return (
    <NativeTabs
    // screenOptions={{
    //   tabBarStyle: {
    //     backgroundColor: colors.surface,
    //     borderTopColor: colors.border,
    //     borderTopWidth: 1,
    //     height: 85,
    //     paddingTop: 8,
    //   },
    //   tabBarActiveTintColor: colors.accent,
    //   tabBarInactiveTintColor: colors.textMuted,
    //   tabBarLabelStyle: {
    //     fontSize: 11,
    //     fontWeight: "500",
    //   },
    //   headerStyle: {
    //     backgroundColor: colors.background,
    //     borderBottomWidth: 0,
    //     elevation: 0,
    //     shadowOpacity: 0,
    //   },
    //   headerTitleStyle: {
    //     color: colors.textPrimary,
    //     fontWeight: "600",
    //     fontSize: 18,
    //   },
    //   headerTintColor: colors.textPrimary,
    // }}
    >
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf={"house.fill"} drawable="ic_menu_gallery" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="docs">
        <Label>Docs</Label>
        <Icon sf={"book.fill"} drawable="ic_menu_gallery" />
        <Badge>2</Badge>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Label>Settings</Label>
        <Icon sf={"gear"} drawable="ic_menu_gallery" />
      </NativeTabs.Trigger>
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "RN Playground",
          tabBarIcon: ({color, size}) => <Feather name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="docs"
        options={{
          title: "Docs",
          headerTitle: "Documentation",
          tabBarIcon: ({color, size}) => <Feather name="book-open" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerTitle: "Settings",
          tabBarIcon: ({color, size}) => <Feather name="settings" size={size} color={color} />,
        }}
      /> */}
    </NativeTabs>
  )
}
