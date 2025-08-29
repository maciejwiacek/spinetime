import { useFormSpec } from '@/contexts/FormSpecContext'
import { calculateNextStep } from '@/utils/navigation'
import { router } from 'expo-router'
import React from 'react'
import Button from './Button'

interface NextStepNavigatorProps {
  currentStage: number
  currentStep: number
  disabled?: boolean
  onNext?: () => void
}

const NextStepNavigator = ({
  currentStage,
  currentStep,
  disabled = false,
  onNext,
}: NextStepNavigatorProps) => {
  const formData = useFormSpec()
  const stagesCount = formData.stages.length
  const stepsCount = formData.stages[currentStage].steps.length
  const handleNext = () => {
    if (onNext) {
      onNext()
    }
    const { nextStage, nextStep } = calculateNextStep(
      currentStage,
      currentStep,
      stagesCount,
      stepsCount
    )

    if (nextStage < 0 && nextStep < 0) {
      router.push('/(form)/summary')
    } else {
      router.push(`/(form)/step/${nextStage}/${nextStep}`)
    }
  }
  return <Button title='Next Step' onPress={handleNext} disabled={disabled} />
}

export default NextStepNavigator
