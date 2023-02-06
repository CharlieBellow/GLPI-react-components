//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/main.css";

import Teste from "../pages/Teste";
import SignUp from "../pages/SignUp";
import ListPage from "../pages/List";

import UserInfo from "../pages/UserInfo";

import AddUser from "../pages/AddUser";

import { CardTest } from "../components/Cards/CardTest";


import Dashboard from "../pages/privateroutes/dashboard";

export function AppRoutes () {
  return (

    //<Router>
    //  <Routes>


        {/*   <Route path="/Dashboard" element={ <Dashboard /> } />
        <Route path="/" element={ <Dashboard /> } />


        <Route path="/user/info" element={ <UserInfo /> } />
        <Route path="/user/create" element={ <AddUser /> } />

        <Route path="/users/list" element={ <ListPage /> } />



        <Route path="/signup" element={ <SignUp /> } />

        <Route path="/test/card" element={ <CardTest /> } />
        <Route path="/test" element={ <Teste /> } />
*/}


      {/*</Routes>
    </Router>*/}
  );
}