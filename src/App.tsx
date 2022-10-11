
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/main.css'
import Dashboard from "./Pages/Dashboard";
import FormService from "./Pages/FormService";
import FormNewUser from "./Pages/FormNewUser";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<>
			<ChakraProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/FormService" element={<FormService />} />
					<Route path="/FormNewUser" element={<FormNewUser />} />
					<Route path="/Table" element={<FormService />} />
				</Routes>
			</Router>
			
			</ChakraProvider>
		</>
	);
}

export default App;
