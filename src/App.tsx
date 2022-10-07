
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import FormService from "./Pages/FormService";
import Login from './Pages/Login'
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<>
			<ChakraProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/FormService" element={<FormService />} />
					<Route path="/Table" element={<FormService />} />
					<Route path='/Login' element={<Login />} />
				</Routes>
			</Router>
			
			</ChakraProvider>
		</>
	);
}

export default App;
