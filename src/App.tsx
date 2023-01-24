import "./styles/main.css";

import React, { useContext } from 'react';

import { AuthContext } from './Contexts/AuthContext';
import { ChakraProvider } from "@chakra-ui/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import PublicRoutes from "./Routes/public.routes";
import PrivateRoutes from "./Routes/private.routes";
import { BrowserRouter } from "react-router-dom";

function App () {

	const { auth }: any = useContext( AuthContext );
	console.log( "auth", auth );
	
	return (
		<>
			<ChakraProvider>
				<BrowserRouter>
					{ auth ? <PrivateRoutes /> : <PublicRoutes /> }
				</BrowserRouter>
			</ChakraProvider>

			<ToastContainer />
		</>
	);
}

export default App;
