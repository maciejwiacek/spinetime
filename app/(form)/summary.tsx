import { useFormStore } from '@/store/formStore'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Summary = () => {
  const generateResult = useFormStore((state) => state.generateResult)

  const handleSubmit = () => {
    const result = generateResult()
    console.log(result)
  }

  return (
    <View>
      <Text>Summary</Text>
      <Text>{JSON.stringify(generateResult())}</Text>
      <Button title='Submit' onPress={handleSubmit} />
    </View>
  )
}

export default Summary
