import { Menu } from "../../components/organisms/Menu";
import { Header } from "../../components/organisms/Header";
import TableTeste from "../Teste/TableTeste";
//import TableList from "../../components/TableList";

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
	{ id: 11, name: "Giancarlo", email: "giancarlo@email.com", date: "01/02/2022",},
	{ id: 12, name: "Roberta", email: "roberta@email.com", date: "01/02/2022" },
	{ id: 13, name: "Caio", email: "caio@email.com", date: "01/02/2022" },
	{ id: 14, name: "Rodrigo", email: "rodrigo@email.com", date: "01/02/2022" },
];

const ItemSelect = ["Nome", "Email", "Data de Criação", "Matrícula"];

function Dashboard() {
	document.title = "Dashboard - GLPI";
	return (
		<>
			<div className="w-full  bg-white-strong-ice">
				<div className="flex bg-white-strong-ice w-screen lg:max-w-[1900px] mx-auto">
					<div className="flex  relative">
						<Menu />
					</div>

					<div className="w-screen flex flex-col lg:block">
						<div>
							<Header page="Dashboard" />
						</div>

						<div className="w-screen h-full lg:h-auto lg:w-auto">
							<TableTeste />
							{/*<TableList itemList={users} listSelectButton={ItemSelect} />*/}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
