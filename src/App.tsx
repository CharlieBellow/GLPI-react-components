
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import FormService from "./Pages/FormService";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />}/>
        
          <Route path="/FormService" element={<FormService />}/>
				</Routes>
			</Router>
			<FormService />;
		</>
	);
}

export default App;
