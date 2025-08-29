import { COLORS } from '@/constants/COLORS'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface TitleProps {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: COLORS.dark,
    textAlign: 'center',
  },
})
