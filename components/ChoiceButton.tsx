import { COLORS } from '@/constants/COLORS'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ChoiceButtonProps {
  choice: number | string
  isActive?: boolean
  onPress: () => void
  variant: 'square' | 'rectangle'
}

const ChoiceButton = ({
  choice,
  isActive = false,
  onPress,
  variant,
}: ChoiceButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isActive && styles.active,
        variant === 'rectangle' && styles.rectangle,
      ]}
      onPress={onPress}
    >
      <Text style={{ color: isActive ? COLORS.secondary : COLORS.primary }}>
        {choice}
      </Text>
    </TouchableOpacity>
  )
}

export default ChoiceButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  active: {
    backgroundColor: COLORS.primary,
  },
  rectangle: {
    width: '100%',
  },
})
