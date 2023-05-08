import ServicesHome from "../ServicesComponent/ServicesHome";
import { CardLine } from "./CardLine";
import { CardTitleColor } from "./CardTitleColor";
import * as Icon from "phosphor-react"

const CardServices = () => {
  return (
		<>
			<div className="bg-white-ice w-full h-auto py-4 px-6 rounded-lg shadow-card box-border">
			<div>
					<CardTitleColor title="Chamados" colorcard={"bg-green-500"} alt={"Imagem de perfil"}  coloricon={<Icon.Clock size={28} weight={"bold"} className="text-white-100" />}  />
				</div>
				{/* <h4 className="text-2xl mb-4 font-bold">Chamados</h4> */}
				<div className="mx-9 mt-4 mb-10">
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