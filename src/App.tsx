import "./styles/main.css";

import React, {useContext} from 'react'

import {AuthContext} from './Contexts/AuthContext'
import { ChakraProvider } from "@chakra-ui/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import PublicRoutes from "./Routes/public.routes";
import PrivateRoutes from "./Routes/private.routes";

function App () {
	
	const {auth}: any = useContext( AuthContext )
	console.log(auth)
	return (
		<>
			<ChakraProvider>
				{auth ? <PrivateRoutes/> : <PublicRoutes/>}
			</ChakraProvider>

			<ToastContainer />
		</>
	);
}

export default App;
