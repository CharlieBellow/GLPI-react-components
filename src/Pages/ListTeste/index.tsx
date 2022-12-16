import { Page } from "../../components/Page";
//import TableTeste from "../Teste/TableTeste";
//import TableList from "../../components/TableList";
import TableList from "../../components/Carduser/tableList";

//import { User, usersList } from "../../components/Carduser/User";
import { useEffect, useState } from "react";

//import users from '../../components/Carduser/index'

//import TableList from '../../components/TableList/index';
//const usersarray = [
//	{ id: 1, name: "Charlie", email: "email@email.com", date: "01/02/2022" },
//	{ id: 2, name: "Humberto", email: "humberto@email.com", date: "01/02/2022" },
//	{ id: 3, name: "Ítalo", email: "italo@email.com", date: "01/02/2022" },
//	{ id: 4, name: "Evellyn", email: "evellyn@email.com", date: "01/02/2022" },
//	{ id: 5, name: "Josue", email: "zue@email.com", date: "01/02/2022" },
//	{ id: 6, name: "Luan", email: "luan@email.com", date: "01/02/2022" },
//	{ id: 7, name: "Marcos", email: "marcos@email.com", date: "01/02/2022" },
//	{ id: 8, name: "Marcelo", email: "marcelo@email.com", date: "01/02/2022" },
//	{ id: 9, name: "Pedro", email: "pedro@email.com", date: "01/02/2022" },
//	{ id: 10, name: "Felipe", email: "lipe@email.com", date: "01/02/2022" },
//	{ id: 12, name: "Roberta", email: "roberta@email.com", date: "01/02/2022" },
//	{ id: 13, name: "Caio", email: "caio@email.com", date: "01/02/2022" },
//	{ id: 14, name: "Rodrigo", email: "rodrigo@email.com", date: "01/02/2022" },
//	{ id: 15, name: "Charlie2", email: "email@email.com", date: "01/02/2022" },
//	{
//		id: 16,
//		name: "Humberto2",
//		email: "humberto@email.com",
//		date: "01/02/2022",
//	},
//	{ id: 17, name: "Ítalo2", email: "italo@email.com", date: "01/02/2022" },
//	{ id: 18, name: "Evellyn2", email: "evellyn@email.com", date: "01/02/2022" },
//	{ id: 19, name: "Josue", email: "zue@email.com", date: "01/02/2022" },
//	{
//		id: 11,
//		name: "Giancarlo2",
//		email: "giancarlo@email.com",
//		date: "01/02/2022",
//	},
//	{ id: 20, name: "Luan2", email: "luan@email.com", date: "01/02/2022" },
//	{ id: 21, name: "Marcos2", email: "marcos@email.com", date: "01/02/2022" },
//	{
//		id: 25,
//		name: "Giancarlo",
//		email: "giancarlo@email.com",
//		date: "01/02/2022",
//	},
//	{ id: 22, name: "Marcelo2", email: "marcelo@email.com", date: "01/02/2022" },
//	{ id: 28, name: "Rodrigo2", email: "rodrigo@email.com", date: "01/02/2022" },
//	{ id: 23, name: "Pedro2", email: "pedro@email.com", date: "01/02/2022" },
//	{ id: 26, name: "Roberta2", email: "roberta@email.com", date: "01/02/2022" },
//	{ id: 24, name: "Felipe2", email: "lipe@email.com", date: "01/02/2022" },
//	{ id: 27, name: "Caio2", email: "caio@email.com", date: "01/02/2022" },
//];

const ItemSelect = [
	"Tudo",
	"Nome",
	"Email",
	"Data de Criação",
	"Matrícula",
	"Descrição",
];
//const editTableOptions = ["Editar", "Excluir", "desativar"];

function ListTestePage() {
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
				pagetitle={"Dashboard"}
				contentpage={
					//<TableTeste />
					<TableList itemlist={lista} listselecbutton={ItemSelect} />
				}
			/>
			{/*<TableTeste />*/}
			{/*<TableList itemlist={users} listselecbutton={ItemSelect} />*/}
		</>
	);
}

export default ListTestePage;
