import React from "react";
import { Page } from "../../components/Page";
import HomeScreen from "../../components/HomeScreen";

export default function Dashboard () {
  return (
    <Page
      pagetitle={ "Dashboard" }
      contentpage={ <HomeScreen /> }
    />
  );
}


