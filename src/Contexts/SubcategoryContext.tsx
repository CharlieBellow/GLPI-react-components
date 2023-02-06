import { createContext, useContext, useState } from "react";
import {subcategoryModel} from "../Utils/ServiceModels"

interface SubcategoryContextProps {
  subcategory: Array<object>;
  addSubcategory: ( subcategory: Array<object> ) => void;
}

interface SubcategoryProviderProps {
  children: React.ReactNode
}

export const SubcategoryContext = createContext({} as SubcategoryContextProps)

export const SubcategoryProvider = ( { children }: SubcategoryProviderProps ) => {
  const [ subcategories, setCategories ] = useState<Array<object>>( subcategoryModel ) 


  function addSubcategory ( subcategory: Array<object> ) {
    setCategories([...subcategories, subcategory])
  }

  return (
    <SubcategoryContext.Provider value={ { addSubcategory: addSubcategory, subcategory: subcategories } }>
      {children}
    </SubcategoryContext.Provider>
  )
}


export function useSubcategoryContext () {
  const subcategoryContext = useContext( SubcategoryContext )
  return subcategoryContext;
} 

