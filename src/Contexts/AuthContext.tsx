import React, {createContext, useContext, useState, useEffect} from 'react';

interface AuthContextProps {
  auth: boolean;
  changeAuth: ( auth: boolean ) => void;
  token: string;
  changeToken: (token: string) => void;
}


interface AuthProviderProps {
  children: React.ReactNode;
}


export const AuthContext = createContext( {} as AuthContextProps );

export function AuthProvider ( { children }: AuthProviderProps ) {
  // Depois mudar o valor inicial para false
  const [ auth, setAuth ] = useState<boolean>(false)
  const [ token, setToken ] = useState<string>("")

  function changeAuth (auth: boolean) {
    setAuth(!auth)
  }

  function changeToken(token: string) {
    setToken(token)
  }

  useEffect( () => {
    const tokenAuth = localStorage.getItem( "token" );

    if ( tokenAuth !== "undefined" ) {
      changeToken(  tokenAuth );
      setAuth(true)

      console.log( "tokenAuth: ", tokenAuth );
    }
  }, [] );


  return (
    <AuthContext.Provider value={ { auth: auth, changeAuth: changeAuth, changeToken: changeToken, token: token }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  const authContext = useContext( AuthContext )

  return authContext;
}