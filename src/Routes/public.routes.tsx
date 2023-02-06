import { Routes, Route } from "react-router-dom";

import "../styles/main.css";

import Login from "../pages/Login";
import Teste from "../pages/Teste";

import { CardTest } from "../components/Cards/CardTest";

import "react-toastify/dist/ReactToastify.min.css";
import SignUp from "../pages/SignUp";


function PublicRoutes () {
	return (
		<>
			<Routes>
				<Route path="/login" element={ <Login /> } />
				<Route path="/signup" element={ <SignUp /> } />

				<Route path="/test/card" element={ <CardTest /> } />
				<Route path="/test" element={ <Teste /> } />
			</Routes>

		</>
	);
}

export default PublicRoutes;
