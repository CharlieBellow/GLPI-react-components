import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});


export function AuthProvider ( { children }: boolean ) {
  
  const [auth, setAuth] = useState(true)
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}