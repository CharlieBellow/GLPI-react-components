"use client"

import CardServiceDescription from "../../components/Cards/CardServiceDescription";
import { useEffect, useState } from "react";
import {userModel} from "../../Utils/UserModel"
import Head from "next/head";
import { Layout } from "../../components/Layout";
import DataTable from "../../components/Table/DataTable";
// import {Teste} from "./teste"
import {data, columns} from "./../../Utils/tableDataExample"

const ItemSelect = [
	"Tudo",
	"Nome",
	"Email",
	"Data de Criação",
	"Matrícula",
	"Descrição",
];



export default function TestePage() {


	return (
		<div>
			<Head>
				<title>Tabela</title>
			</Head>
			{/* <Teste /> */}
			<DataTable data={ data}  />
			
		</div>
	);
}


