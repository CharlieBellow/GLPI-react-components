import * as React from 'react';
import { createContext, useState } from 'react';

// * contexto de rotas

interface RoutesContextProps {
  group: string;
  setGroup: ( group: string ) => void;
  subgroup: string;
  setSubgroup: ( subgroup: string ) => void;
  service: string;
  setService: ( service: string ) => void;
  serviceOrder: string;
  setServiceOrder: ( serviceOrder: string ) => void;
}

interface RoutesProviderProps {
  children: React.ReactNode;
}

export const RoutesContext = createContext( {} as RoutesContextProps );

export default function RoutesProvider ( { children }: RoutesProviderProps ) {
  const [ group, setGroup ] = useState( "" )
  const [ subgroup, setSubgroup ] = useState( "" )
  const [ service, setService ] = useState( "" )
  const [ serviceOrder, setServiceOrder ] = useState( "" )
  

  return (
    <RoutesContext.Provider value={ { group, setGroup, subgroup, setSubgroup, service, setService, serviceOrder, setServiceOrder } }>
      {children}
    </RoutesContext.Provider>
  )
}

