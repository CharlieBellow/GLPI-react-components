
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/main.css'
import Dashboard from "./Pages/Dashboard";
import FormService from "./Pages/FormService";

import Login from './Pages/Login'
import Teste from './Pages/Teste'
import SignUp from './Pages/SignUp'
import FormNewUser from "./Pages/FormNewUser";
import FormAddUser from "./Pages/FormAddUser";
import HomeMobile from "./Pages/HomeMobile";

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
						<Route path="/Table" element={<Dashboard />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/SignUp" element={<SignUp />} />
						<Route path="/FormService" element={<FormService />} />
						<Route path="/FormNewUser" element={<FormNewUser />} />
						<Route path="/FormAddUser" element={<FormAddUser />} />
						<Route path="/Teste" element={<Teste />} />
						<Route path="/HomeMobile" element={<HomeMobile />} />
					</Routes>
				</Router>
			</ChakraProvider>
		</>
	);
}

export default App;
