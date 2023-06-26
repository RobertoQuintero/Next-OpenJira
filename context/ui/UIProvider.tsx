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

  const openSideMenu=()=>{
    dispatch({type:'UI - Open Sidebar'})
  }
  const closeSideMenu=()=>{
    dispatch({type:'UI - Close Sidebar'})
  }

  return (
    <UIContex.Provider value={{
      ...state,
      openSideMenu,
      closeSideMenu
    }}>
      {children}
    </UIContex.Provider>
  )
}