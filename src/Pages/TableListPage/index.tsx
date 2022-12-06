import { Page } from "../../components/Page";
//import TableTeste from "../Teste/TableTeste";
//import TableList from "../../components/TableList";
import TableList from "../../components/TableList";

const users = [
	{ id: 1, name: "Charlie", email: "email@email.com", date: "01/02/2022" },
	{ id: 2, name: "Humberto", email: "humberto@email.com", date: "01/02/2022" },
	{ id: 3, name: "Ítalo", email: "italo@email.com", date: "01/02/2022" },
	{ id: 4, name: "Evellyn", email: "evellyn@email.com", date: "01/02/2022" },
	{ id: 5, name: "Josue", email: "zue@email.com", date: "01/02/2022" },
	{ id: 6, name: "Luan", email: "luan@email.com", date: "01/02/2022" },
	{ id: 7, name: "Marcos", email: "marcos@email.com", date: "01/02/2022" },
	{ id: 8, name: "Marcelo", email: "marcelo@email.com", date: "01/02/2022" },
	{ id: 9, name: "Pedro", email: "pedro@email.com", date: "01/02/2022" },
	{ id: 10, name: "Felipe", email: "lipe@email.com", date: "01/02/2022" },
	{ id: 12, name: "Roberta", email: "roberta@email.com", date: "01/02/2022" },
	{ id: 13, name: "Caio", email: "caio@email.com", date: "01/02/2022" },
	{ id: 14, name: "Rodrigo", email: "rodrigo@email.com", date: "01/02/2022" },
	{ id: 15, name: "Charlie", email: "email@email.com", date: "01/02/2022" },
	{ id: 16, name: "Humberto", email: "humberto@email.com", date: "01/02/2022" },
	{ id: 17, name: "Ítalo", email: "italo@email.com", date: "01/02/2022" },
	{ id: 18, name: "Evellyn", email: "evellyn@email.com", date: "01/02/2022" },
	{ id: 19, name: "Josue", email: "zue@email.com", date: "01/02/2022" },
	{
		id: 11,
		name: "Giancarlo",
		email: "giancarlo@email.com",
		date: "01/02/2022",
	},
	{ id: 20, name: "Luan", email: "luan@email.com", date: "01/02/2022" },
	{ id: 21, name: "Marcos", email: "marcos@email.com", date: "01/02/2022" },
	{
		id: 25,
		name: "Giancarlo",
		email: "giancarlo@email.com",
		date: "01/02/2022",
	},
	{ id: 22, name: "Marcelo", email: "marcelo@email.com", date: "01/02/2022" },
	{ id: 28, name: "Rodrigo", email: "rodrigo@email.com", date: "01/02/2022" },
	{ id: 23, name: "Pedro", email: "pedro@email.com", date: "01/02/2022" },
	{ id: 26, name: "Roberta", email: "roberta@email.com", date: "01/02/2022" },
	{ id: 24, name: "Felipe", email: "lipe@email.com", date: "01/02/2022" },
	{ id: 27, name: "Caio", email: "caio@email.com", date: "01/02/2022" },
];

const ItemSelect = [
	"Tudo",
	"Nome",
	"Email",
	"Data de Criação",
	"Matrícula",
	"Descrição",
];
//const editTableOptions = ["Editar", "Excluir", "desativar"];


function TableListPage() {
	return (
		<>
			<Page pageTitle={ "Dashboard" } contentPage={
				//<TableTeste />
			<TableList itemList={users} listSelectButton={ItemSelect} />
			} />
			{/*<TableTeste />*/}
			{/*<TableList itemList={users} listSelectButton={ItemSelect} />*/}
		</>
	);
}

export default TableListPage;
