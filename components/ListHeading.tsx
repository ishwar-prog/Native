import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ListHeading = ({ title , onViewAllPress }: ListHeadingProps) => {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>

      <TouchableOpacity className="list-action" onPress={onViewAllPress} accessibilityRole='button' accessibilityLabel={`View All ${title}`}>
        <Text className="list-action-text">View All</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListHeading