import { TWheelStep } from '@/types/StepTypes'
import { saveAnswer } from '@/utils/answers'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ChoiceButton from './ChoiceButton'
import Header from './Header'
import NextStepNavigator from './NextStepNavigator'
import Title from './Title'

interface WheelStepProps {
  wheelStep: TWheelStep
  stage: number
  step: number
}

const WheelStep = ({ wheelStep, stage, step }: WheelStepProps) => {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null)

  const handleAddAnswer = () => {
    if (selectedChoice === null) return
    saveAnswer({
      selectedOption: 'wheel_step',
      stage,
      step,
      wheelValue: selectedChoice,
      wheelName: wheelStep.wheelName ?? '',
    } as const)
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title={`Stage ${stage + 1} - Step ${step + 1}`} />
      <View style={styles.container}>
        <Title>{wheelStep.buttonText}</Title>
        <View style={styles.buttonsContainer}>
          {Array.from({ length: 10 }).map((_, i) => (
            <View key={i} style={styles.buttonWrapper}>
              <ChoiceButton
                choice={i}
                onPress={() => setSelectedChoice(i)}
                isActive={selectedChoice === i}
                variant='square'
              />
            </View>
          ))}
        </View>
        <NextStepNavigator
          currentStage={stage}
          currentStep={step}
          disabled={selectedChoice === null}
          onNext={handleAddAnswer}
        />
      </View>
    </View>
  )
}

export default WheelStep

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    width: '20%',
    aspectRatio: 1,
    marginBottom: 12,
  },
})
