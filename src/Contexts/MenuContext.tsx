import { createContext, useContext, useState } from "react";


interface MenuContextProps {
  isMenuOpen: boolean;
  changeIsMenuOpen: (isMenuOpen: boolean) => void
}

interface MenuProviderProps {
  children: React.ReactNode
}

export const MenuContext = createContext( {} as MenuContextProps );


export const MenuProvider = ({children}: MenuProviderProps) => {
  
  const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>( true )
  
  function changeIsMenuOpen ( isMenuOpen: boolean) {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <MenuContext.Provider value={{isMenuOpen: isMenuOpen, changeIsMenuOpen: changeIsMenuOpen}}>
      {children}
    </MenuContext.Provider>
  )
};

export function useMenu () {
  const isMenuOpenContext = useContext( MenuContext )
  
  return isMenuOpenContext
}