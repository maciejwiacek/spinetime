import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Stage = () => {
  const { stage } = useLocalSearchParams()

  return (
    <View>
      <Text>Stage {stage}</Text>
    </View>
  )
}

export default Stage
