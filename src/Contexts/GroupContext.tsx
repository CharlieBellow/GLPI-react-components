import { createContext, useContext, useState } from "react";
import {groupModel} from "../Utils/ServiceModels"
import { Group } from "../Utils/server/types";


// * contexto de grupos
interface GroupContextProps {
  group: Array<Group>;
  addGroup: ( group: Group ) => void;
}

interface GroupProviderProps {
  children: React.ReactNode
}

export const GroupContext = createContext({} as GroupContextProps)

export const groupProvider = ( { children }: GroupProviderProps ) => {
  const [ groups, setGroups ] = useState<Group[]>([]) 


  function addGroup ( group: Group ) {
    setGroups([...groups, group])
  }

  return (
    <GroupContext.Provider value={ { addGroup: addGroup, group: groups } }>
      {children}
    </GroupContext.Provider>
  )
}


export function useGroupContext () {
  const groupContext = useContext( GroupContext )
  return groupContext;
} 

