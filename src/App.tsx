import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/main.css";

import CreateService from "./Pages/CreateService";

import Login from "./Pages/Login";
import Teste from "./Pages/Teste";
import SignUp from "./Pages/SignUp";
import ListPage from "./Pages/ListPage";

import UserInfo from "./Pages/UserInfo";
import { ServiceLetter } from "./Pages/ServiceLetter";
import AddUser from "./Pages/AddUser";

import { CardTest } from "./components/CardTest";

import { ChakraProvider } from "@chakra-ui/react";
import PageCategoriaHome from "./Pages/PageCategoriaHome";
import Dashboard from "./Pages/Dashboard";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ServicesPage from "./Pages/ServicesPage";
import PageSubcategory from "./Pages/PageSubcategory";
import ServicesByCategory from "./Pages/ServicesByCategory";
import AddCategory from "./Pages/AddCategory";
import AddSubcategory from "./Pages/AddSubcategory";

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
						<Route path="/List" element={<ListPage />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/SignUp" element={<SignUp />} />
						<Route path="/Services" element={<ServicesPage />} />
						<Route path="/UserInfo" element={<UserInfo />} />
						<Route path="/AddUser" element={<AddUser />} />
						<Route path="/CardTest" element={<CardTest />} />
						<Route path="/Teste" element={<Teste />} />
						<Route
							path="/servicebook/category"
							element={<PageCategoriaHome />}
						/>
						<Route
							path="/servicebook/subcategory"
							element={<PageSubcategory />}
						/>
						<Route
							path="/servicebook/service"
							element={<ServicesByCategory />}
						/>
						<Route
							path="/servicebook/category/create"
							element={<AddCategory />}
						/>
						<Route
							path="/servicebook/subcategory/create"
							element={<AddSubcategory />}
						/>						
					</Routes>
				</Router>
			</ChakraProvider>

			<ToastContainer />
		</>
	);
}

export default App;
