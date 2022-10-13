
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import FormService from "./Pages/FormService";
import Login from './Pages/Login'
import Teste from './Pages/Teste'
import SignUp from './Pages/SignUp'

import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<>
			<ChakraProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/Dashboard" element={<Dashboard />} />
						<Route path="/FormService" element={<FormService />} />
						<Route path="/Table" element={<FormService />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/SignUp" element={<SignUp />} />
						<Route path="/Teste" element={<Teste />} />
					</Routes>
				</Router>
			</ChakraProvider>
		</>
	);
}

export default App;
