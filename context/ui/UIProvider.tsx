import React, { useReducer } from 'react'
import { UIContex, uiReducer } from './'

interface Props{
  children:JSX.Element|JSX.Element[]
}

export interface UIState{
  sideMenuOpen:boolean,
  isAddingEntry:boolean
}

const UI_INITIAL_STATE:UIState={
  sideMenuOpen:false,
  isAddingEntry:false
}

export const UIProvider = ({children}:Props) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu=()=>{
    dispatch({type:'UI - Open Sidebar'})
  }
  const closeSideMenu=()=>{
    dispatch({type:'UI - Close Sidebar'})
  }

  const setIsAddingEntry=(isAdding:boolean)=>{
    dispatch({
      type:'UI - IsAdding-Entry',payload:isAdding
    })
  }

  return (
    <UIContex.Provider value={{
      ...state,
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry
    }}>
      {children}
    </UIContex.Provider>
  )
}