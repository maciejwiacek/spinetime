import { FormSpecProvider } from '@/contexts/FormSpecContext'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <FormSpecProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </FormSpecProvider>
  )
}
