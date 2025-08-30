type Choice = {
  text: string
  goal: number | null
  possibleChoice: string
}

export type TVideoStep = {
  selectedOption: 'video_step'
  description: string
  imageUrl: string
  buttonText: string
  popupText: string
  choices: Choice[]
  videoUrls: { 'pl-PL': string; 'fr-FR': string; 'en-EN': string }
}

export type TWheelStep = {
  selectedOption: 'wheel_step'
  description: string
  imageUrl: string
  buttonText: string
  popupText: string
  choices: Choice[]
  videoUrls: { 'pl-PL'?: string; 'fr-FR'?: string; 'en-EN'?: string }
  buttonGoal?: number | null
  upToTwoGoal: number | null
  atLeastThreeGoal: number | null
  wheelName: string
}

export type TPainChoiceStep = {
  selectedOption: 'pain_choice_step'
  description: string
  imageUrl: string
  buttonText: string
  popupText: string
  choices: Choice[]
  videoUrls: { 'pl-PL'?: string; 'fr-FR'?: string; 'en-EN'?: string }
  fieldName: string
}
