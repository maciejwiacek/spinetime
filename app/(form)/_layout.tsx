import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  )
}

export default Layout
