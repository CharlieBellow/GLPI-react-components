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
						<Route path="/dashboard" element={<Dashboard />} />
						
						<Route path="/service/letter" element={ <ServiceLetter /> } />
						<Route path="/service/create" element={<CreateService />} />
						<Route path="/service/list" element={<ServicesPage />} />
						
						<Route path="/user/info" element={<UserInfo />} />
						<Route path="/user/create" element={<AddUser />} />
						
						<Route path="/users/list" element={ <ListPage /> } />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						
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
					
						<Route path="/test/card" element={ <CardTest /> } />
						<Route path="/test" element={ <Teste /> } />
						

					</Routes>
				</Router>
			</ChakraProvider>

			<ToastContainer />
		</>
	);
}

export default App;
