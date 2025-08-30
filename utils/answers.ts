import type { ChoiceAnswer, FormAnswer } from '@/store/formStore'
import { useFormStore } from '@/store/formStore'

export function saveAnswer(answer: FormAnswer) {
  useFormStore.getState().addAnswer(answer)
}

export function getInitialChoiceIndex(
  stage: number,
  step: number,
  choices: ChoiceAnswer['choiceValue'][]
) {
  const prev = useFormStore.getState().getAnswer(stage, step)
  if (
    !prev ||
    (prev.selectedOption !== 'choice_step' &&
      prev.selectedOption !== 'pain_choice_step')
  ) {
    return -1
  }
  return choices.findIndex(
    (c) => c.possibleChoice === prev.choiceValue.possibleChoice
  )
}
