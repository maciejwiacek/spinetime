import PainChoiceStep from '@/components/PainChoiceStep'
import VideoStep from '@/components/VideoStep'
import WheelStep from '@/components/WheelStep'
import { globalStyles } from '@/constants/globalStyles'
import { useFormSpec } from '@/contexts/FormSpecContext'
import { TPainChoiceStep, TVideoStep, TWheelStep } from '@/types/StepTypes'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const Step = () => {
  const { stage, step } = useLocalSearchParams()
  const formData = useFormSpec()
  const currentStage = formData.stages[parseInt(stage[0])]
  const currentStep = currentStage.steps[parseInt(step[0])]

  return (
    <View style={globalStyles.container}>
      {currentStep.selectedOption === 'video_step' && (
        <VideoStep
          videoStep={currentStep as TVideoStep}
          stage={parseInt(stage[0])}
          step={parseInt(step[0])}
        />
      )}
      {currentStep.selectedOption === 'wheel_step' && (
        <WheelStep
          wheelStep={currentStep as TWheelStep}
          stage={parseInt(stage[0])}
          step={parseInt(step[0])}
        />
      )}
      {currentStep.selectedOption === 'pain_choice_step' && (
        <PainChoiceStep
          painStep={currentStep as TPainChoiceStep}
          stage={parseInt(stage[0])}
          step={parseInt(step[0])}
        />
      )}
    </View>
  )
}

export default Step
