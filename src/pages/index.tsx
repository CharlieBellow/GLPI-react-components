
import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react"
import { useAuth } from '../Contexts/AuthContext';
import LoadingPage from "../components/LoadingPage";


export default function Home() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const { auth, user, verifyCookies } = useAuth()

    useEffect(() => {
      if(loaded){
        if(auth){
          if(user && user.isAdmin)
            router.push("/Dashboard")
        }else{
          router.push("/login")
        }
      }

    }, [loaded])
    
    useEffect(() => {
      setTimeout(() => {
        verifyCookies()
        setLoaded(true)
      }, 200);
    }, [])

  return (<LoadingPage/>);
}
