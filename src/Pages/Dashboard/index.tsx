
import React from "react";
import { Page } from "../../components/Page";
import ScreenHomeMobile from "../../components/ScreenHomeMobile";



function Dashboard() {
	return <Page pageTitle={"Dashboard"} contentPage={<ScreenHomeMobile />} />;
}

export default Dashboard;

