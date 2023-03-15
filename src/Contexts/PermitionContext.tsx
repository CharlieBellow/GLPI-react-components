





import axios from "axios";

import React, {createContext, useContext, useState, useEffect} from 'react';

interface PermitionContextProps {
  auth: boolean;
  changePermition: ( permition: boolean ) => void;
  token: string;
  changeToken: (token: string) => void;
}

interface PermitionProviderProps {
  children: React.ReactNode;
}




export const PermitionContext = createContext( {} as PermitionContextProps );

export function PermitionProvider ( { children }: PermitionProviderProps ) {
 
  // Depois mudar o valor inicial para false
  const [ permition, setPermition] = useState<boolean>(false)
  const [ token, setToken ] = useState<string>("")

  function changePermition(permition: boolean) {
    setPermition(!permition)
  }

  function changeToken ( token: string ) {
    setToken(token)
  }


   const baseURL = "http://172.27.12.171:3333"

  async function getToken (values: any ) {
    const token = axios( {
      method: 'post',
      baseURL: baseURL, 
      url: "/sessions",
      data: values,
    } )
    .then(response => {
     
    const token = response.data.token

    if ( token !== undefined ) {
      
      changeToken(  token );
      setPermition(true)
    // salvar o token nos cookies: usar ferramenta própria do nextJs
  
    }
  
    return token
  })

      
  }


  return (
    <PermitionContext.Provider value={ { permition: permition, changePermition: changePermition, changeToken: changeToken, token: token }}>
      {children}
    </PermitionContext.Provider>
  )
}

export function useAuth () {
  const PermitionContext = useContext( PermitionContext )

  return PermitionContext;
}


