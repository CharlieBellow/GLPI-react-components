
import React from "react";
import CardHomeMobile from "../../components/CardHomeMobile";
import CategoriaHomeMobile from "../../components/CategoriaHomeMobile";
import { Page } from "../../components/Page";
import ScreenHomeMobile from "../../components/ScreenHomeMobile";
import Search from "../../components/Search";


function Dashboard() {
	return <Page pageTitle={"Dashboard"} contentPage={<ScreenHomeMobile />} />;
}

export default Dashboard;