import { Entry } from '@/interfaces'
import { createContext } from 'react'

interface ContextProps{
  entries: Entry[],
  addNewEntry: (description: string) => void
  updateEntry: (entry: Entry,showSnackbar?:boolean) => void
}

export const EntriesContex = createContext({} as ContextProps)