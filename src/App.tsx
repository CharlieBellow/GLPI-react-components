
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import FormService from "./Pages/FormService";

function App() {
	return (
		<>
			<Router>
				<Routes>
					{/* <Route path="/" element={<Dashboard />} /> */}
					<Route path="/FormService" element={<FormService />} />
					{/* <Route path="/Table" element={<FormService />} /> */}
				</Routes>
				<FormService />
			</Router>
		</>
	);
}

export default App;
