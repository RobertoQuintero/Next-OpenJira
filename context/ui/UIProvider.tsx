import React, { useReducer } from 'react'
import { UIContex, uiReducer } from './'

interface Props{
  children:JSX.Element|JSX.Element[]
}

export interface UIState{
  sideMenuOpen:boolean
}

const UI_INITIAL_STATE:UIState={
  sideMenuOpen:false
}

export const UIProvider = ({children}:Props) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  return (
    <UIContex.Provider value={{
      sideMenuOpen:false
    }}>
      {children}
    </UIContex.Provider>
  )
}