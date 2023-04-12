import { createContext, useContext, useState } from "react";
import {subgroupModel} from "../Utils/ServiceModels"

// * contexto de subgrupos

interface SubgroupContextProps {
  subgroup: Array<object>;
  addSubgroup: ( subgroup: Array<object> ) => void;
}

interface SubgroupProviderProps {
  children: React.ReactNode
}

export const SubgroupContext = createContext({} as SubgroupContextProps)

export const SubgroupProvider = ( { children }: SubgroupProviderProps ) => {
  const [ subgroups, setSubgroups ] = useState<Array<object>>( subgroupModel ) 


  function addSubgroup ( subgroup: Array<object> ) {
    setSubgroups([...subgroups, subgroup])
  }

  return (
    <SubgroupContext.Provider value={ { addSubgroup: addSubgroup, subgroup: subgroups } }>
      {children}
    </SubgroupContext.Provider>
  )
}


export function useSubgroupsContext () {
  const subgroupContext = useContext( SubgroupContext )
  return subgroupContext;
} 

