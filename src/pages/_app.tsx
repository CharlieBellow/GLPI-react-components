import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import  {AuthProvider} from '../Contexts/AuthContext';
import { UserProvider } from '../Contexts/UserContext';
import { MenuProvider } from '../Contexts/MenuContext';
import Layout from '../components/layout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { MessageProvider } from '../Contexts/MessageContext';
import { PreviousPageProvider } from '../Contexts/PreviousPageContext';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <MessageProvider>
      <AuthProvider>
        <UserProvider>
          <MenuProvider>
            <ChakraProvider>
              <PreviousPageProvider>       
                <Layout>
                  <>
                    <Component {...pageProps} />
                    <ToastContainer />
                  </>
              </Layout>
              </PreviousPageProvider> 
            </ChakraProvider>
          </MenuProvider>
        </UserProvider>
      </AuthProvider>
    </MessageProvider>
  ) 
}
