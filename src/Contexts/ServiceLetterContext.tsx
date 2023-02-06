 import { createContext, useContext, useState } from "react";
import { serviceLetterModel, serviceModel } from "../Utils/ServiceModels";

interface ServiceLetterProps {

  id: string,
  category: object,
  subcategory: object,
  title: string,
  patrimonio: string,
  description: string,
  applicantsName: string,
  publicoAlvo: string,
  tempoDeEspera: string,


}

interface ServiceLetterContextProps {
  infoServiceLetter: object;
  addInfoServiceLetter: ( infoServiceLetter: Array<object> ) => void;
}

interface ServiceLetterProviderProps {
  children: React.ReactNode;
}

export const ServiceLetterContext = createContext( {} as ServiceLetterContextProps );

export const ServiceLetterProvider = ( { children }: ServiceLetterProviderProps ) => {

  const [ infoServicesLetter, setInfoServicesLetter ] = useState<object>(  [{}] );


  function addInfoServiceLetter ( infoServiceLetter: Array<object> ) {
    setInfoServicesLetter( [  infoServiceLetter ] );
  }

  return (
    <ServiceLetterContext.Provider value={ { addInfoServiceLetter: addInfoServiceLetter, infoServiceLetter: infoServicesLetter } }>
      { children }
    </ServiceLetterContext.Provider>
  );
};


export function useServiceLetterContext () {
  const serviceLetterContext = useContext( ServiceLetterContext );
  return serviceLetterContext;
}

