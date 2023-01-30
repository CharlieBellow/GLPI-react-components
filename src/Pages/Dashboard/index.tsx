import React from "react";
import { Page } from "../../components/Page";
import HomeScreen from "../../components/HomeScreen";

function Dashboard() {
	return (
		<Page
			pagetitle={"Dashboard"}
			contentpage={ <HomeScreen />}
		/>
	);
}

export default Dashboard;
