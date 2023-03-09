 import { createContext, useContext, useState } from "react";


const ServiceLetterProps = {

  id: "",
  category: "",
  subcategory: "",
  title: "",
  patrimonio: "",
  description: "",
  applicantsName: "",
  publicoAlvo: "",
  tempoDeEspera: "",
  serviceDescription: [{}],

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

  const [ infoServicesLetter, setInfoServicesLetter ] = useState<object>( ServiceLetterProps );


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

