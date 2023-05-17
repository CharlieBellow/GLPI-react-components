"use client"

import CardServiceDescription from "../../components/Cards/CardServiceDescription";
import { useEffect, useState } from "react";
import {userModel} from "../../Utils/UserModel"
import Head from "next/head";
import { Layout } from "../../components/Layout";
import DataTable from "../../components/Table/DataTable";
import {Teste} from "./teste"

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
		<Layout>
			<Head>
				<title>Tabela</title>
			</Head>
			<Teste />
			
		</Layout>
	);
}


