import { COLORS } from '@/constants/Colors'
import { FontAwesome6 } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <View
      style={[styles.container, Platform.OS === 'ios' && { marginTop: 15 }]}
    >
      <TouchableOpacity onPress={() => router.canGoBack() && router.back()}>
        <FontAwesome6 name='arrow-left' size={24} color={COLORS.dark} />
      </TouchableOpacity>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      <TouchableOpacity onPress={() => router.dismissTo('/')}>
        <FontAwesome6 name='x' size={24} color={COLORS.dark} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  title: {
    color: COLORS.dark,
    fontSize: 18,
  },
})
