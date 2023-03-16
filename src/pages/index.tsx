
import { useRouter } from "next/router";
import { useEffect } from "react"
import { useAuth } from '../Contexts/AuthContext';


export default function Home() {
  const router = useRouter();
  const { auth, user, verifyCookies } = useAuth();

  console.log(user)

  useEffect(() => {
    
    if (!router.isReady) return;
    if (verifyCookies()) {
      //erro pq so atualiza na proxima chamada
      if (user && user.isAdmin)
        router.push("/Dashboard");
    } else {
      router.push("/login");
    }
    return
  }, [router.isReady, user])


  return (<></>);
}
