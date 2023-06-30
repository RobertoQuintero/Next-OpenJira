import { createContext } from 'react'

interface ContextProps{
  sideMenuOpen: boolean;
  isAddingEntry:boolean
  isDragging:boolean
  openSideMenu:()=>void;
  closeSideMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void
  startDragging:()=>void
  endDragging:()=>void
}

export const UIContex = createContext({} as ContextProps)