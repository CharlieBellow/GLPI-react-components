
import React, { useEffect, useState } from "react";
import { useAuth } from "../Contexts/AuthContext"
import { useRouter } from "next/router";
import LoadingPage from "../components/LoadingPage";
import { usePreviousPage } from "../Contexts/PreviousPageContext";
import Sidebar from "./Sidebar/Sidebar";
import { SidebarProvider } from "./Sidebar/SidebarContext";
import CardMenu from "./Cards/CardMenu";
interface PageProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

// * layout padrão das páginas
export default function Layout({ children, ...rest }: PageProps) {
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


  }, [auth, changeLogged, changePage, justLogged, loaded, page, router])

  useEffect(() => {
    setTimeout(() => {
      verifyCookies()
      setLoaded(true)
    }, 300);
  }, [])
  if (loaded && (router.asPath.includes("login"))) {
    return(
      <main>
        {children}
      </main>
    )
  }else if (loaded && (!router.asPath.includes("login") && auth)){
    return (
      <SidebarProvider>
        <Sidebar>
          <>
            <div className="bg-slate-200 flex flex-col ">
                <CardMenu pagetitle="Dashboard"/>
                <div {...rest} className="content ">
							    {children}
						    </div>
            </div>
            </>
        </Sidebar>
      </SidebarProvider>
    )
  } else {
    return (<LoadingPage />)
  }
}


