import {Menu} from '../../components//organisms/Menu';
import {Header} from '../../components/organisms/Header';
import CardAddUser from '../../components/CardAddUser';

function FormNewUser() {
	document.title = "Cadastro de Usuários - GLPI";
  return (
		<>
			<div className="layout__menu-header">
				<div className="flex bg-branco-gelo-forte lg:max-w-[1900px] mx-auto">
					<div className="flex">
						<Menu />
					</div>

					<div className="pageContent w-screen flex flex-col">
						<div>
							<Header page="Cadastro de Usuários" />
						</div>

						<div className="content">
							<CardAddUser />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FormNewUser;