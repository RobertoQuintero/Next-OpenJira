import { createContext } from 'react'

interface ContextProps{
  sideMenuOpen: boolean
}

export const UIContex = createContext({} as ContextProps)