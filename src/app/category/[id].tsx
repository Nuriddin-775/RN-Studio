/**
 * Category Screen
 * Displays labs within a category
 */
import {LabCard} from "@components/cards"
import {Caption, Text} from "@components/common"
import {ScreenLayout, SectionLayout} from "@components/layouts"
import {categoryColors, colors} from "@constants/colors"
import {Feather} from "@expo/vector-icons"
import {useCategory} from "@hooks/useLab"
import {Stack} from "expo-router"
import {View} from "react-native"

export default function CategoryScreen() {
  const {category, labs, categoryId} = useCategory()

  if (!category) {
    return (
      <ScreenLayout>
        <Stack.Screen options={{title: "Not Found"}} />
        <View className="flex-1 items-center justify-center">
          <Feather name="alert-circle" size={48} color={colors.error} />
          <Text className="mt-4">Category not found</Text>
        </View>
      </ScreenLayout>
    )
  }

  const categoryColor = categoryColors[categoryId] || colors.accent

  return (
    <ScreenLayout>
      <Stack.Screen options={{title: category.title}} />

      {/* Header */}
      <View className="mb-6">
        <View className="flex-row items-center mb-3">
          <View
            className="w-12 h-12 rounded-lg items-center justify-center mr-4"
            style={{backgroundColor: `${categoryColor}20`}}
          >
            <Feather name={category.icon} size={24} color={categoryColor} />
          </View>
          <View className="flex-1">
            <Text variant="title">{category.title}</Text>
            <Caption>{labs.length} Labs available</Caption>
          </View>
        </View>
        <Text color="secondary">{category.description}</Text>
      </View>

      {/* Labs List */}
      <SectionLayout title="Labs" icon="layers">
        {labs.map(lab => (
          <LabCard key={lab.id} lab={lab} />
        ))}
      </SectionLayout>
    </ScreenLayout>
  )
}
