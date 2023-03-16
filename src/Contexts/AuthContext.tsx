import axios from "axios";

import React, { createContext, useContext, useState, useEffect } from 'react';
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
  changeAuth: (auth: boolean) => void;
  token: string;
  changeToken: (token: string) => void;
  user: UserProps;
  verifyCookies: () => boolean;
  // declarei aqui em cima
  getToken: (values: any) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}


export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

  const [auth, setAuth] = useState<boolean>(false)
  const [token, setToken] = useState<string>("")
  // coloquei um objeto vazio para iniciar o useState
  const [user, setUser] = useState<UserProps>({} as UserProps)
  function changeAuth(auth: boolean) {
    setAuth(!auth)
  }

  function changeToken(token: string) {
    setToken(token)
    localStorage.setItem("token", token);
    const response = getUser(token)
    // parece que não está entrando aqui
    localStorage.setItem("user", JSON.stringify(response))
    console.log("aqui", response);

  }

  function changeUser(user: UserProps) {
    console.log("tem usuario")
    setUser(user)
    console.log(user)
  }
  function verifyCookies() {
    if (localStorage.getItem("token") !== undefined) {
      //verificar validade
      console.log("trueeeeeeee")
      setAuth(true)
      const cookieUser = localStorage.getItem("user")
      if (cookieUser) {
        changeUser(JSON.parse(cookieUser))
        console.log(JSON.parse(cookieUser))
      }

      return true
    } else {
      //sem token
      console.log("false")
      setAuth(false)
    }
    return false
  }

  const baseURL = "http://172.27.12.171:3333"

  //  essa função é declarada e não é chamada em lugar nanhum e também não é exportada no useContext, assim também não dá pra chamar ela fora daqui
  async function getToken(values: any) {
    // era uma função assíncrona mas não tinha await
    const token = await axios({
      method: 'post',
      baseURL: baseURL,
      url: "/sessions",
      data: values,
    })
      .then(response => {

        const token = response.data.token

        if (token !== undefined) {
          changeToken(token);
          setAuth(true)
          // também não entra aqui
          console.log("aqui");
          // salvar o token nos cookies: usar ferramenta própria do nextJs

        }

        return token
      })

  }

  // getToken() : precisa saber onde vai executar essa função, e pq o context funciona sem ela ter sido chamada?



  return (
    <AuthContext.Provider value={{ auth: auth, changeAuth: changeAuth, changeToken: changeToken, token: token, getToken, verifyCookies: verifyCookies, user: user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const authContext = useContext(AuthContext)

  return authContext;
}


