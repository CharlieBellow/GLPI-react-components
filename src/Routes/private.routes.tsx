import { Routes, Route } from "react-router-dom";

import "../styles/main.css";

import Teste from "../pages/Teste";

import ListPage from "../pages/List";

import UserInfo from "../pages/UserInfo";

import AddUser from "../pages/AddUser";

import { CardTest } from "../components/Cards/CardTest";

import Dashboard from "../pages/privateroutes/dashboard";

import { ServiceRoutes } from "./service.routes";


function PrivateRoutes () {
  return (
    <>
      <Routes>

        <Route path="/" element={ <Dashboard /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />

        <Route path="/user/info" element={ <UserInfo /> } />
        <Route path="/user/create" element={ <AddUser /> } />

        <Route path="/users/list" element={ <ListPage /> } />
        <Route path="/test/card" element={ <CardTest /> } />
        <Route path="/test" element={ <Teste /> } />

      </Routes>

      <ServiceRoutes />
    </>
  );
}

export default PrivateRoutes;
