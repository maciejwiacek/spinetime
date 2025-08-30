import Button from '@/components/Button'
import Title from '@/components/Title'
import { globalStyles } from '@/constants/globalStyles'
import { useFormStore } from '@/store/formStore'
import { router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const Summary = () => {
  const generateResult = useFormStore((state) => state.generateResult)
  const clearAnswers = useFormStore((state) => state.clearAnswers)

  const handleSubmit = () => {
    const result = generateResult()
    console.log(result)
  }

  const handleClear = () => {
    clearAnswers()
    router.replace('/')
  }

  return (
    <View style={globalStyles.container}>
      <Title>Do you want to submit your answers?</Title>
      <View style={{ gap: 8 }}>
        <Button title='Submit' onPress={handleSubmit} />
        <Button title='Cancel' onPress={handleClear} variant='secondary' />
      </View>
    </View>
  )
}

export default Summary
