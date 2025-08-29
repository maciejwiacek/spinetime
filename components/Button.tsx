import { COLORS } from '@/constants/COLORS'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  title: string
  onPress: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary'
          ? { backgroundColor: COLORS.primary }
          : {
              backgroundColor: COLORS.secondary,
            },
        disabled && {
          opacity: 0.5,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          variant === 'primary'
            ? { color: COLORS.secondary }
            : { color: COLORS.primary },
        ]}
      >
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
