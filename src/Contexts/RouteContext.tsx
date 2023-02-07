import * as React from 'react';
import { createContext, useState } from 'react';

interface RoutesContextProps {
  category: string;
  setCategory: ( category: string ) => void;
  subcategory: string;
  setSubcategory: ( subcategory: string ) => void;
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
  const [ category, setCategory ] = useState( "" )
  const [ subcategory, setSubcategory ] = useState( "" )
  const [ service, setService ] = useState( "" )
  const [ serviceOrder, setServiceOrder ] = useState( "" )
  

  return (
    <RoutesContext.Provider value={ { category, setCategory, subcategory, setSubcategory, service, setService, serviceOrder, setServiceOrder } }>
      {children}
    </RoutesContext.Provider>
  )
}

