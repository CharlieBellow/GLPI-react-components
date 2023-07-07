"use client"

import CardServiceDescription from "../../components/Cards/CardServiceDescription";
import { useEffect, useState } from "react";
import {userModel} from "../../Utils/UserModel"
import Head from "next/head";
import { Layout } from "../../components/Layout";
import DataTable from "../../components/Table/DataTable";

const ItemSelect = [
	"Tudo",
	"Nome",
	"Email",
	"Data de Criação",
	"Matrícula",
	"Descrição",
];



export default function List() {
  const [lista, setLista] = useState([]);
  

	
  
  useEffect( () => {
    
    if (localStorage.getItem("users") !== null) {
      const usersStorage = localStorage.getItem("users");
      const listas = JSON.parse(usersStorage as string)!;
      console.log("lista:", lista);
      setLista(listas);
      console.log(listas);
		}
  }, [ lista ]);

	console.log(lista);
	return (
		<Layout>
			<Head>
				<title>Tabela</title>
			</Head>
			<CardServiceDescription />
			{/* <DataTable data={lista} columns={["Nome", "data", "açoes"]} currentPage={0}/> */}
		</Layout>
	);
}


