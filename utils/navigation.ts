import { Route } from 'expo-router'

export const calculateNextStep = (
  currentStage: number,
  currentStep: number,
  stages: number,
  steps: number
): Route => {
  if (currentStep < steps - 1) {
    return `/(form)/step/${currentStage}/${currentStep + 1}` as Route
  }
  if (currentStage < stages - 1) {
    return `/(form)/step/${currentStage + 1}/0` as Route
  }
  return `/(form)/summary` as Route
}

export const calculatePrevStep = (
  currentStage: number,
  currentStep: number,
  steps: number
): Route => {
  if (currentStep > 0) {
    return `/(form)/step/${currentStage}/${currentStep - 1}` as Route
  }
  if (currentStage > 0) {
    return `/(form)/step/${currentStage - 1}/${steps - 1}` as Route
  }
  return `` as Route
}
