import React, { useEffect, useReducer } from 'react'
import { EntriesContex, entriesReducer } from './'
import { Entry } from '@/interfaces'
import { entriesApi } from '@/apis'

interface Props{
  children:JSX.Element|JSX.Element[]
}

export interface EntriesState{
  entries:Entry[],
}

const Entries_INITIAL_STATE:EntriesState={
  entries:[],
  
}

export const EntriesProvider = ({children}:Props) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

  const addNewEntry=async(description:string)=>{
    const{data}= await entriesApi.post<Entry>('/entries',{description})

    dispatch({type:'[Entry] - Add-Entry',payload:data})
  }

  const updateEntry=async(entry:Entry)=>{
    const {_id,description,status}=entry
    try {
      const {data}=await entriesApi.put<Entry>(`/entries/${_id}`,{description,status})

      dispatch({type:'[Entry] - Entry-Updated',payload:data})
    } catch (error) {
      console.log({error})
    }
  }

  const refreshEntries=async()=>{
    const {data} = await entriesApi.get<Entry[]>('/entries')
    dispatch({type:'[Entry] - Refresh-Data',payload:data})
  }

  useEffect(() => {
    refreshEntries()
  }, [])

  return (
    <EntriesContex.Provider value={{
      ...state,
      //métodos
      addNewEntry,
      updateEntry
     
    }}>
      {children}
    </EntriesContex.Provider>
  )
}