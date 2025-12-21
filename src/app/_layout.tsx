/**
 * Root Layout
 * Sets up global providers and navigation
 */
import {colors} from "@constants/colors"
import {store} from "@store/index"
import {Stack} from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import {StatusBar} from "expo-status-bar"
import {Provider} from "react-redux"
import {useEffect} from "react"
import "../../global.css"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: colors.background},
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="category/[id]"
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: colors.surface},
            headerTintColor: colors.textPrimary,
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="lab/overview"
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: colors.surface},
            headerTintColor: colors.textPrimary,
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="lab/demo"
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: colors.surface},
            headerTintColor: colors.textPrimary,
            headerBackTitle: "Back",
            title: "Demo",
          }}
        />
        <Stack.Screen
          name="lab/code"
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: colors.surface},
            headerTintColor: colors.textPrimary,
            headerBackTitle: "Back",
            title: "Code",
          }}
        />
        <Stack.Screen
          name="lab/notes"
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: colors.surface},
            headerTintColor: colors.textPrimary,
            headerBackTitle: "Back",
            title: "Notes",
          }}
        />
      </Stack>
    </Provider>
  )
}
