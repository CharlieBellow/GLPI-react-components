import ServicesHome from "../ServicesComponent/ServicesHome";

const CardServices = () => {
  return (
		<>
			<div className="bg-white-ice w-full h-auto py-4 px-6 rounded-lg shadow-card box-border">
				<h4 className="text-2xl mb-4 font-bold">Chamados</h4>
				<div className="">
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