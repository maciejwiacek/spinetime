import Button from '@/components/Button'
import Title from '@/components/Title'
import { COLORS } from '@/constants/COLORS'
import { useFormSpec } from '@/contexts/FormSpecContext'
import { router } from 'expo-router'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Index() {
  const formSpec = useFormSpec()
  const title =
    formSpec.formData.formTitle[0].toUpperCase() +
      formSpec.formData.formTitle.slice(1) || 'Formularz'

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Title>Welcome to the {title} form!</Title>
          <Text style={styles.subtitle}>
            To start the {formSpec.formData.selectedOption} program, press START
          </Text>
        </View>
        <Button title='START' onPress={() => router.push('/(form)/step/0/0')} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  header: {
    alignItems: 'center',
  },
  subtitle: {
    color: COLORS.dark,
  },
})
