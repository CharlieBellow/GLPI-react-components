import React from "react";
import axios from "axios";
import { Page } from "../../components/Page";
import HomeScreen from "../../components/HomeScreen";
import { useAuth } from "../../Contexts/AuthContext"
export default function Dashboard () {
  
  return (
    <Page
      pagetitle={ "Dashboard" }
      contentpage={ <HomeScreen /> }
    />
  );
}


