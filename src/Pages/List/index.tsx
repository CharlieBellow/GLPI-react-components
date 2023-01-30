import { Page } from "../../components/Page";
import TableList from "../../components/TableList";
import { useEffect, useState } from "react";


const ItemSelect = [
	"Tudo",
	"Nome",
	"Email",
	"Data de Criação",
	"Matrícula",
	"Descrição",
];


export default function List() {
	const usersStorage = localStorage.getItem("users");
	const [lista, setLista] = useState([]);

	useEffect(() => {
		if (usersStorage) {
			const listas = JSON.parse(usersStorage)!;
			console.log("lista:", lista);
			setLista(listas);
			console.log(listas);
		}
	}, []);

	console.log(lista);
	return (
		<>
			<Page
				pagetitle={"Tabela"}
				contentpage={
					<TableList itemlist={lista} listselecbutton={ItemSelect} />
				}
			/>
		</>
	);
}


