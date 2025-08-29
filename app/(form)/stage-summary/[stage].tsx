import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const StageSummary = () => {
  const { stage } = useLocalSearchParams()

  return (
    <View>
      <Text>Stage Summary for {stage}</Text>
    </View>
  )
}

export default StageSummary
