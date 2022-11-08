import {Menu} from '../../components//organisms/Menu';
import {Header} from '../../components/organisms/Header';
import CardNewUser from '../../components/CardNewUser';

function FormNewUser() {
	document.title = "Criação de Usuários - GLPI";
  return (
		<>
			<div className="layout__menu-header">
				<div className="flex bg-white-strong-ice">
					<div className="flex">
						<Menu />
					</div>

					<div className="pageContent w-screen flex flex-col">
						<div>
							<Header page="Criação de Usuários" />
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