
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/main.css'
import TableList from "./Pages/TableList";
import CreateService from "./Pages/CreateService";

import Login from './Pages/Login'
import Teste from './Pages/Teste'
import SignUp from './Pages/SignUp'


import UserInfo from "./Pages/UserInfo";
import {ServiceLetter} from "./Pages/ServiceLetter";
import AddUser from "./Pages/AddUser";

import { CardTest } from "./components/CardTest";

import { ChakraProvider } from "@chakra-ui/react";
import PageCategoriaHome from "./Pages/PageCategoriaHome";
import Dashboard from "./Pages/Dashboard";

function App() {
	return (
		<>
			<ChakraProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/Dashboard" element={<Dashboard />} />
						<Route path="/ServiceLetter" element={<ServiceLetter />} />
						<Route path="/CreateService" element={<CreateService />} />
						<Route path="/Table" element={<TableList />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/SignUp" element={<SignUp />} />
						<Route path="/CreateService" element={<CreateService />} />
						<Route path="/UserInfo" element={<UserInfo />} />
						<Route path="/AddUser" element={<AddUser />} />
						<Route path="/CardTest" element={<CardTest />} />
						<Route path="/Teste" element={<Teste />} />
						<Route path="/PageCategoriaHome" element={<PageCategoriaHome />} />
					</Routes>
				</Router>
			</ChakraProvider>
		</>
	);
}

export default App;
