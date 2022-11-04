import {Menu} from '../../components/organisms/Menu';
import {Header} from '../../components/organisms/Header';
import CardFormService from '../../components/CardFormService';

function FormService() {
	document.title = "Abertura de Chamados - GLPI";
  return (
		<>
			<div className="layout__menu-header">
				<div className="flex bg-branco-gelo-forte lg:max-w-[1900px] mx-auto">
					<div className="flex">
						<Menu />
					</div>

					<div className="pageContent w-screen flex flex-col">
						<div>
							<Header page="Abertura de Chamados" />
						</div>

						<div className="content">
							<CardFormService />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FormService;