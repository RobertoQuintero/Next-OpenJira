import { createContext } from 'react'

interface ContextProps{
  sideMenuOpen: boolean;
  openSideMenu:()=>void;
  closeSideMenu: () => void;
}

export const UIContex = createContext({} as ContextProps)