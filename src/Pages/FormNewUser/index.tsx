import Menu from '../../components//organisms/Menu';
import Header from '../../components/organisms/Header';
import CardNewUser from '../../components/CardNewUser';

function FormNewUser() {
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
							<CardNewUser />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FormNewUser;