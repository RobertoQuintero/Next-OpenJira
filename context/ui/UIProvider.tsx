import React, { useReducer } from 'react'
import { UIContex, uiReducer } from './'

interface Props{
  children:JSX.Element|JSX.Element[]
}

export interface UIState{
  sideMenuOpen:boolean,
  isAddingEntry:boolean
  isDragging:boolean
}

const UI_INITIAL_STATE:UIState={
  sideMenuOpen:false,
  isAddingEntry:false,
  isDragging:false
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
  const startDragging=()=>{
    dispatch({type:'UI - Start Dragging'})
  }
  const endDragging=()=>{
    dispatch({type:'UI - End Dragging'})
  }

  return (
    <UIContex.Provider value={{
      ...state,
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry,

      startDragging,
      endDragging,
    }}>
      {children}
    </UIContex.Provider>
  )
}