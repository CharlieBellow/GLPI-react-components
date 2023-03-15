import axios from "axios";

import React, {createContext, useContext, useState, useEffect} from 'react';
import { getUser } from "../Utils/server/getInfo";

interface UserProps {
  id: string,
  name: string,
  password: string,
  email: string,
  avatar: null,
  isAdmin: boolean,
  created_at: string
}
interface AuthContextProps {
  auth: boolean;
  changeAuth: ( auth: boolean ) => void;
  token: string;
  changeToken: (token: string) => void;
  user: UserProps;
  verifyCookies: () => boolean
}

interface AuthProviderProps {
  children: React.ReactNode;
}


export const AuthContext = createContext( {} as AuthContextProps );

export function AuthProvider ( { children }: AuthProviderProps ) {
 
  // Depois mudar o valor inicial para false
  const [ auth, setAuth ] = useState<boolean>(false)
  const [ token, setToken ] = useState<string>("")
  const [user, setUser] = useState<UserProps>()
  function changeAuth (auth: boolean) {
    setAuth(!auth)
  }

  function changeToken ( token: string ) {
    setToken(token)
    localStorage.setItem( "token",  token );
    getUser(token).then( response => {
      console.log(response[0])
      localStorage.setItem("user", JSON.stringify(response[0]))
    })
  }
  function changeUser(user: UserProps){
    console.log("tem usuario")
    setUser(user)
    console.log(user)
  }
  function verifyCookies(){
      if(localStorage.getItem("token") !== undefined){
        //verificar validade
        console.log("trueeeeeeee")
        setAuth(true)
        const cookieUser = localStorage.getItem("user")
        if(cookieUser){
          changeUser(JSON.parse(cookieUser))
        }

        return true
      }else{
        //sem token
        console.log("true")
        setAuth(false)
      }
      return false
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
      setAuth(true)
    // salvar o token nos cookies: usar ferramenta própria do nextJs
  
    }
  
    return token
  })

      
  }


  return (
    <AuthContext.Provider value={ { auth: auth, changeAuth: changeAuth, changeToken: changeToken, token: token, verifyCookies: verifyCookies, user: user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  const authContext = useContext( AuthContext )

  return authContext;
}


