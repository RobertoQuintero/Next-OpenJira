import { createContext } from 'react'

interface ContextProps{
  siMenuOpen: boolean
}

export const UIContex = createContext({} as ContextProps)