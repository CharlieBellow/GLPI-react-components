import Menu from '../../components//organisms/Menu';
import Header from '../../components/organisms/Header';
import TableList from '../../components/TableList'


const users = [
	{ id: '1', name: "Charlie", email: "email@email.com", date: "01/02/2022" },
	{ id: '2', name: "Humberto", email: "humberto@email.com", date: "01/02/2022" },
	{ id: '3', name: "Ítalo", email: "italo@email.com", date: "01/02/2022" },
	{ id: '4', name: "Evellyn", email: "evellyn@email.com", date: "01/02/2022" },
	{ id: '5', name: "Josue", email: "zue@email.com", date: "01/02/2022" },
	{ id: '6', name: "Luan", email: "luan@email.com", date: "01/02/2022" },
	{ id: '7', name: "Marcos", email: "marcos@email.com", date: "01/02/2022" },
	{ id: '8', name: "Marcelo", email: "marcelo@email.com", date: "01/02/2022" },
	{ id: '9', name: "Pedro", email: "pedro@email.com", date: "01/02/2022" },
	{ id: '10', name: "Felipe", email: "lipe@email.com", date: "01/02/2022" },
];


function Dashboard() {
  return (
		<>
			<div className="layout__menu-header">
				<div className="flex bg-branco-gelo-forte">
					<div className="flex">
						<Menu />
					</div>

					<div className="pageContent w-screen flex flex-col">
						<div>
							<Header />
						</div>

						<div className="content">
							<TableList itemList={users}/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;