import { create } from 'zustand'

export type VideoAnswer = {
  selectedOption: 'video_step'
  stage: number
  step: number
  videoWatched: boolean
  videoLang?: string
  videoUrl?: string
}

export type WheelAnswer = {
  selectedOption: 'wheel_step'
  stage: number
  step: number
  wheelValue: number
  wheelName: string
}

export type ChoiceAnswer = {
  selectedOption: 'choice_step' | 'pain_choice_step'
  stage: number
  step: number
  choiceValue: {
    text: string
    goal: number | null
    possibleChoice: string
  }
  choiceName: string
}

export type FormAnswer = VideoAnswer | WheelAnswer | ChoiceAnswer

type AnswersMap = Record<number, Record<number, FormAnswer>>

type FormStore = {
  answers: AnswersMap
  addAnswer: (answer: FormAnswer) => void // upsert
  clearAnswers: () => void
  generateResult: () => AnswersMap
  getAnswer: (stage: number, step: number) => FormAnswer | undefined
}

export const useFormStore = create<FormStore>((set, get) => ({
  answers: {},

  addAnswer: (answer) =>
    set((state) => {
      const { stage, step } = answer
      const stageMap = state.answers[stage] ?? {}
      return {
        answers: {
          ...state.answers,
          [stage]: { ...stageMap, [step]: answer },
        },
      }
    }),

  clearAnswers: () => set({ answers: {} }),

  generateResult: () => {
    const { answers } = get()
    return answers
  },

  getAnswer: (stage, step) => get().answers[stage]?.[step],
}))
