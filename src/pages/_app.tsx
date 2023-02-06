import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import  {AuthProvider} from '../Contexts/AuthContext';
import { UserProvider } from '../Contexts/UserContext';
import { MenuProvider } from '../Contexts/MenuContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (

    <AuthProvider>
      <UserProvider>
        <MenuProvider>
          <ChakraProvider>
            <>
              <Component {...pageProps} />
              <ToastContainer />
            </>
          </ChakraProvider>
        </MenuProvider>
      </UserProvider>
    </AuthProvider>
    
  ) 
}
