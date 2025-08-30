import { TPainChoiceStep } from '@/types/StepTypes'
import { getInitialChoiceIndex, saveAnswer } from '@/utils/answers'
import React, { useMemo, useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import ChoiceButton from './ChoiceButton'
import Header from './Header'
import NextStepNavigator from './NextStepNavigator'
import Title from './Title'

interface PainChoiceStepProps {
  painStep: TPainChoiceStep
  stage: number
  step: number
}

const PainChoiceStep = ({ painStep, stage, step }: PainChoiceStepProps) => {
  const initialIndex = useMemo(
    () => getInitialChoiceIndex(stage, step, painStep.choices as any),
    [stage, step, painStep.choices]
  )
  const [selectedOption, setSelectedOption] = useState<number | null>(
    initialIndex >= 0 ? initialIndex : null
  )

  const handleAddAnswer = () => {
    if (selectedOption === null) return
    const choice = painStep.choices[selectedOption]
    saveAnswer({
      selectedOption: 'pain_choice_step',
      stage,
      step,
      choiceValue: {
        text: choice.text,
        goal: choice.goal,
        possibleChoice: choice.possibleChoice,
      },
      choiceName: painStep.fieldName ?? '',
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title={`Stage ${stage + 1} - Step ${step + 1}`} />
      <View style={styles.container}>
        <Title>{painStep.description}</Title>
        <Image source={{ uri: painStep.imageUrl }} style={styles.image} />
        <View style={{ gap: 8 }}>
          {painStep.choices.map((choice, index) => (
            <ChoiceButton
              key={index}
              choice={choice.text}
              variant='rectangle'
              onPress={() => setSelectedOption(index)}
              isActive={selectedOption === index}
            />
          ))}
        </View>
        <NextStepNavigator
          currentStage={stage}
          currentStep={step}
          disabled={selectedOption === null}
          onNext={handleAddAnswer}
        />
      </View>
    </View>
  )
}

export default PainChoiceStep

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
})
