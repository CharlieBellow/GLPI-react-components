import { useAuth }  from '../Contexts/AuthContext';
import { useRouter } from "next/router";

export default function CheckPermitions(route: string) {
  const router = useRouter();

  const { auth } = useAuth();
  if ( !auth ) {
    router.push( "/login" );
  } else {
    router.push( route );
  }

  
}