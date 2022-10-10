
import Menu from "../../components//organisms/Menu/MenuTest";
import Header from "../../components/organisms/Header";

function Teste() {
	return (
		<>
			<div className="layout__menu-header">
				<div className="flex bg-branco-gelo-forte">
					<div className="flex h-full">
						<Menu/>
					</div>

					<div className="pageContent w-screen flex flex-col">
						<div>
							<Header/>
						</div>

						<div className="content">
							
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Teste;