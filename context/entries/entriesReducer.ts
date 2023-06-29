import { Entry } from '@/interfaces'
import { EntriesState } from './'

type EntriesActionType=
          {type:'[Entry] - Add-Entry',payload:Entry}
        | {type:'[Entry] - IsAdding-Entry',payload:boolean}
        
export const entriesReducer = (state:EntriesState,action:EntriesActionType):EntriesState => {
  
  switch (action.type) {
    case '[Entry] - Add-Entry':
      return {
        ...state,
        entries:[...state.entries,action.payload]
      }

    case '[Entry] - IsAdding-Entry':
      return {
        ...state,
        isAddingEntry:action.payload
      }
      
    default:
      return state
  }
}