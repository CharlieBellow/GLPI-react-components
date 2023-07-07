import { createContext, useContext, useState } from "react";

// * contexto de menu, se está aberto ou fechado -> salvar nos cookies em breve para ser uma preferência de usuário
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