/**
 * Home Screen
 * Displays categories and labs
 */
import {CategoryCard, LabCard} from "@components/cards"
import {Caption} from "@components/common"
import {ScreenLayout, SectionLayout} from "@components/layouts"
import {colors} from "@constants/colors"
import {APP_VERSION} from "@constants/index"
import {Feather} from "@expo/vector-icons"
import {getAllLabs, getCategories, getLabCount} from "@utils/labRegistry"
import {TextInput, View} from "react-native"
import {useMemo, useState} from "react"

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("")
  const categories = getCategories()
  const allLabs = getAllLabs()

  // Filter labs based on search
  const filteredLabs = useMemo(() => {
    if (!searchQuery.trim()) return null
    const query = searchQuery.toLowerCase()
    return allLabs.filter(
      lab =>
        lab.title.toLowerCase().includes(query) ||
        lab.description.toLowerCase().includes(query) ||
        lab.tags.some(tag => tag.toLowerCase().includes(query)),
    )
  }, [searchQuery, allLabs])

  return (
    <ScreenLayout>
      {/* Search Bar */}
      <View className="flex-row items-center bg-surface-elevated border border-border rounded-lg px-4 py-3 mb-6">
        <Feather name="search" size={18} color={colors.textMuted} />
        <TextInput
          className="flex-1 ml-3 text-text-primary text-base"
          placeholder="Search labs..."
          placeholderTextColor={colors.textMuted}
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {searchQuery.length > 0 && (
          <Feather name="x" size={18} color={colors.textMuted} onPress={() => setSearchQuery("")} />
        )}
      </View>

      {/* Search Results or Categories */}
      {filteredLabs !== null ? (
        <SectionLayout title={`Results (${filteredLabs.length})`} icon="search">
          {filteredLabs.length > 0 ? (
            filteredLabs.map(lab => <LabCard key={lab.id} lab={lab} />)
          ) : (
            <View className="py-8 items-center">
              <Feather name="inbox" size={32} color={colors.textMuted} />
              <Caption className="mt-3">No labs found for "{searchQuery}"</Caption>
            </View>
          )}
        </SectionLayout>
      ) : (
        <SectionLayout title="Categories" icon="grid">
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              id={category.id}
              title={category.title}
              description={category.description}
              icon={category.icon}
              labCount={getLabCount(category.id)}
            />
          ))}
        </SectionLayout>
      )}

      {/* Version footer */}
      <View className="items-center mt-6 pb-4">
        <Caption>RN Playground v{APP_VERSION}</Caption>
      </View>
    </ScreenLayout>
  )
}
