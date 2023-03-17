
import React, { useEffect, useState } from "react";
import { useAuth } from "../Contexts/AuthContext"
import { useRouter } from "next/router";
import LoadingPage from "../components/LoadingPage";
import { usePreviousPage } from "../Contexts/PreviousPageContext";


export default function Layout({ children }: any) {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const { auth, user, verifyCookies } = useAuth()
  const { page, changePage, justLogged, changeLogged } = usePreviousPage()

  useEffect(() => {
    if (loaded) {
      if (!auth) {
        //*salvar a página anterior pra quando o usuário fizer login, redirecionar para ela
        changePage(router.asPath)
        router.push('/login')
      } else {
        if (justLogged || router.asPath.includes("login")) {
          changeLogged(false)
          if (page !== "") {
            console.log("redirecting by context")
            changePage("")
            router.push(page)
          } else {
            router.push('/Dashboard')
          }
        }
      }
    }


  }, [loaded])

  useEffect(() => {
    setTimeout(() => {
      verifyCookies()
      setLoaded(true)
    }, 300);
  }, [])

  if (loaded && ((router.asPath.includes("login") && !auth) || (!router.asPath.includes("login") && auth))) {
    console.log(router.asPath.includes("login"))
    return (
      <main>
        {children}
      </main>


    )
  } else {
    return (<LoadingPage />)
  }
}


