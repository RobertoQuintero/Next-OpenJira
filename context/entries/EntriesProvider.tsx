import React, { useReducer } from 'react'
import { EntriesContex, entriesReducer } from './'
import { Entry } from '@/interfaces'
import {v4 as uuidv4} from 'uuid'

interface Props{
  children:JSX.Element|JSX.Element[]
}

export interface EntriesState{
  entries:Entry[],
}

const Entries_INITIAL_STATE:EntriesState={
  entries:[
    {
      _id: uuidv4(),
      description:'Pendiente: Nulla Lorem reprehenderit voluptate eu anim nisi ex ipsum laboris',
      status:'pending',
      createdAt:Date.now()
    },
    {
      _id: uuidv4(),
      description:'En Progreso: Nulla Lorem reprehenderit voluptate eu anim nisi ex ipsum laboris',
      status:'in-progress',
      createdAt:Date.now()-1000000
    },
    {
      _id: uuidv4(),
      description:'Terminada: Nulla Lorem reprehenderit voluptate eu anim nisi ex ipsum laboris',
      status:'finished',
      createdAt:Date.now()-2000000
    },
  ],
  
}

export const EntriesProvider = ({children}:Props) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

  const addNewEntry=(description:string)=>{
    const newEntry:Entry={
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending'
    }
    dispatch({type:'[Entry] - Add-Entry',payload:newEntry})
  }

  const setIsAddingEntry=(isAdding:boolean)=>{
    dispatch({
      type:'[Entry] - IsAdding-Entry',payload:isAdding
    })
  }

  const updateEntry=(entry:Entry)=>{
    dispatch({type:'[Entry] - Entry-Updated',payload:entry})
  }

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