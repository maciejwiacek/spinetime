type Choice = {
  text: string
  goal: number
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
