import Menu from '../../components//organisms/Menu';
import Header from '../../components/organisms/Header';
import TableList from '../../components/TableList'

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

						<div className="content  ">
							<TableList />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;