import { Routes, Route } from "react-router-dom";

import "../styles/main.css";

import Teste from "../Pages/Teste";

import ListPage from "../Pages/ListPage";

import UserInfo from "../Pages/UserInfo";

import AddUser from "../Pages/AddUser";

import { CardTest } from "../components/Cards/CardTest";

import Dashboard from "../Pages/Dashboard";

import { ServiceRoutes } from "./service.routes";


function PrivateRoutes () {
	return (
		<>
			<Routes>

				<Route path="/" element={ <Dashboard /> } />
				<Route path="/dashboard" element={ <Dashboard /> } />

				<Route path="/user/info" element={ <UserInfo /> } />
				<Route path="/user/create" element={ <AddUser /> } />

				<Route path="/users/list" element={ <ListPage /> } />
				<Route path="/test/card" element={ <CardTest /> } />
				<Route path="/test" element={ <Teste /> } />

			</Routes>

			<ServiceRoutes />
		</>
	);
}

export default PrivateRoutes;
