import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

interface AuthProviderProps {
  children: React.ReactNode;
}
export function AuthProvider ( { children }: AuthProviderProps ) {
  // Depois mudar o valor inicial para false
  const [auth, setAuth] = useState(false)

// aqui posso passar outras variáveis e passar como valor do provider pra usar em outro lugar. Isso pode ser aproveitado para criar os objetos iniciais aqui e não poluir os componentes com as criações de objetos de teste. Ou, uma opção mais enxuta seria declarar esses objetos em uma pasta Utils e importá-los aqui para passar como valor do provider.

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}