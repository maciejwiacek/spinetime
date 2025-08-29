export const calculateNextStep = (
  currentStage: number,
  currentStep: number,
  stages: number,
  steps: number
): { nextStage: number; nextStep: number } => {
  if (currentStep < steps) {
    return { nextStage: currentStage, nextStep: currentStep + 1 }
  }
  if (currentStage < stages) {
    return { nextStage: currentStage + 1, nextStep: 1 }
  }
  return { nextStage: -1, nextStep: -1 }
}
