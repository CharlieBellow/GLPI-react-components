import ServicesHome from "../ServicesComponent/ServicesHome";
import { CardLine } from "./CardLine";

const CardServices = () => {
  return (
		<>
			<div className="box-border h-auto w-full rounded-lg bg-white-ice px-6 py-4 shadow-card">
			<div />
				{/* <h4 className="text-2xl mb-4 font-bold">Chamados</h4> */}
				<div className="mx-9 mb-10 mt-4">
					<CardLine />
				</div>
				<div className="pt-2">
					<ServicesHome
						url={"https://www.github.com/charliebellow.png"}
						nome={"Felipe Padilha"}
						area={"Administração"}
						data={"15/08"}
					/>
					<ServicesHome
						url={"https://www.github.com/charliebellow.png"}
						nome={"Carlos Eduardo"}
						area={"GTI"}
						data={"15/08"}
					/>
					<ServicesHome
						url={"https://www.github.com/charliebellow.png"}
						nome={"Patrick Passos"}
						area={"Redes"}
						data={"15/08"}
					/>
					<ServicesHome
						url={"https://www.github.com/charliebellow.png"}
						nome={"Nome Completo"}
						area={"Redes"}
						data={"15/08"}
					/>
				</div>
			</div>
		</>
	);
}
 
export default CardServices;