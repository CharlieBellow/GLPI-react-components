import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

interface AuthProviderProps {
  children: React.ReactNode;
}
export function AuthProvider ( { children }: AuthProviderProps ) {
  // Depois mudar o valor inicial para false
  const [ auth, setAuth ] = useState( true)



  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}