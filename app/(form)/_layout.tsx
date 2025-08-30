import { Stack } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout = () => {
  return (
    <SafeAreaView
      style={[
        { flex: 1, backgroundColor: 'white' },
        Platform.OS === 'android' && { paddingBottom: 25 },
      ]}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  )
}

export default Layout
