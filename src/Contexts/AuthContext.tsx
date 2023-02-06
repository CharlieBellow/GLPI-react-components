import React, {createContext, useContext, useState} from 'react';

interface AuthContextProps {
  auth: boolean;
  changeAuth: (auth: boolean) => void
}


interface AuthProviderProps {
  children: React.ReactNode;
}


export const AuthContext = createContext( {} as AuthContextProps );

export function AuthProvider ( { children }: AuthProviderProps ) {
  // Depois mudar o valor inicial para false
  const [ auth, setAuth ] = useState<boolean>(true)

  function changeAuth (auth: boolean) {
    setAuth(!auth)
  }

  return (
    <AuthContext.Provider value={ { auth: auth, changeAuth: changeAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  const authContext = useContext( AuthContext )

  return authContext;
}