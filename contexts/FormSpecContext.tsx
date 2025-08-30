import formSpec from '@/data/lumbar_painTest.json'
import { createContext, useContext } from 'react'

export type FormSpec = typeof formSpec

const FormSpecContext = createContext<FormSpec | null>(null)

export const FormSpecProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <FormSpecContext.Provider value={formSpec}>
      {children}
    </FormSpecContext.Provider>
  )
}

export const useFormSpec = (): FormSpec => {
  const context = useContext(FormSpecContext)
  if (!context) {
    throw new Error('useFormSpec must be used within a FormSpecProvider')
  }
  return context
}
