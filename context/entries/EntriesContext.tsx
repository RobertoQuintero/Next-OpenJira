import { Entry } from '@/interfaces'
import { createContext } from 'react'

interface ContextProps{
  entries: Entry[]
}

export const EntriesContex = createContext({} as ContextProps)