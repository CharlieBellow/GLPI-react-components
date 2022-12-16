import React from "react";
import { Page } from "../../components/Page";
import ScreenHomeMobile from "../../components/ScreenHomeMobile";

function Dashboard() {
	return (
		<Page
			pagetitle={"Dashboard"}
			contentpage={<ScreenHomeMobile />}
		/>
	);
}

export default Dashboard;
