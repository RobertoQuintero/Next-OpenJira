import React, { useReducer } from 'react'
import { EntriesContex, entriesReducer } from './'
import { Entry } from '@/interfaces'
import {v4 as uuidv4} from 'uuid'

interface Props{
  children:JSX.Element|JSX.Element[]
}

export interface EntriesState{
  entries:Entry[]
}

const Entries_INITIAL_STATE:EntriesState={
  entries:[
    {
      _id: uuidv4(),
      description:'Nulla Lorem reprehenderit voluptate eu anim nisi ex ipsum laboris',
      status:'pending',
      createdAt:Date.now()
    },
    {
      _id: uuidv4(),
      description:'Nulla Lorem reprehenderit voluptate eu anim nisi ex ipsum laboris',
      status:'in-progress',
      createdAt:Date.now()-1000000
    },
    {
      _id: uuidv4(),
      description:'Nulla Lorem reprehenderit voluptate eu anim nisi ex ipsum laboris',
      status:'finished',
      createdAt:Date.now()-2000000
    },
  ]
}

export const EntriesProvider = ({children}:Props) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

  return (
    <EntriesContex.Provider value={{
      ...state
    }}>
      {children}
    </EntriesContex.Provider>
  )
}