import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/main.css";

import Login from "../Pages/Login";
import Teste from "../Pages/Teste";

import { CardTest } from "../components/Cards/CardTest";

import "react-toastify/dist/ReactToastify.min.css";
import SignUp from "../Pages/SignUp";


function PublicRoutes() {
	return (
		<>
		
				<Router>
					<Routes>
						
					<Route path="/login" element={ <Login /> } />
					<Route path="/signup" element={ <SignUp /> } />

								<Route path="/test/card" element={ <CardTest /> } />
						<Route path="/test" element={ <Teste /> } />
					</Routes>
				</Router>
			

			
		</>
	);
}

export default PublicRoutes;
