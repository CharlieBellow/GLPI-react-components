import { createContext, useContext, useState } from "react";
import {categoryModel} from "../Utils/ServiceModels"

interface CategoryContextProps {
  category: Array<object>;
  addCategory: ( category: Array<object> ) => void;
}

interface CategoryProviderProps {
  children: React.ReactNode
}

export const CategoryContext = createContext({} as CategoryContextProps)

export const CategoryProvider = ( { children }: CategoryProviderProps ) => {
  const [ categories, setCategories ] = useState<Array<object>>( categoryModel ) 


  function addCategory ( category: Array<object> ) {
    setCategories([...categories, category])
  }

  return (
    <CategoryContext.Provider value={ { addCategory: addCategory, category: categories } }>
      {children}
    </CategoryContext.Provider>
  )
}


export function useCategoryContext () {
  const categoryContext = useContext( CategoryContext )
  return categoryContext;
} 

