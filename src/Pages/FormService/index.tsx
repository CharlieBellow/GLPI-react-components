import {Menu} from '../../components/organisms/Menu';
import {Header} from '../../components/organisms/Header';
import CardFormService from '../../components/CardFormService';

function FormService() {
  return (
		<>
			<div className="layout__menu-header">
				<div className="flex bg-branco-gelo-forte lg:max-w-[1900px] mx-auto">
					<div className="flex">
						<Menu />
					</div>

					<div className="pageContent w-screen flex flex-col">
						<div>
							<Header />
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