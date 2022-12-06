import { Button } from "./Button";

function CardHomeMobile() {
	return (
		<>
			<div className="bg-white-ice h-[9.75rem] w-[19.5rem] pt-2 px-2 rounded-lg -mt-16 shadow-card box-border lg:w-[37.5rem] lg:h-[18.75rem] lg:mt-0 lg:px-6">
				<h4 className="text-base font-bold lg:text-4xl">Resumo</h4>
				<div className="flex flex-col lg:mt-4">
					<div className="flex justify-between w-full items-center">
						<p className="flex text-xs gap-1 my-2 w-40 lg:w-80 lg:text-2xl">
							<h5 className="font-bold">Chamado atual:</h5>
							141526
						</p>

						<p className="flex flex-wrap font-bold text-xs gap-1 text-[#FFC107] my-2 w-26 lg:w-52 lg:text-2xl">
							<h5 className="text-black">Status:</h5>
							Pendente
						</p>
					</div>

					<div className="flex justify-between w-full items-center lg:mt-5">
						<p className="flex font text-xs gap-1 w-40 lg:w-80 lg:text-2xl">
							<h5 className="font-bold">Chamado anterior:</h5>
							131524
						</p>

						<p className="flex font-bold text-xs gap-1 text-[#DC3545] w-26 lg:w-52 lg:text-2xl">
							<h5 className="text-black">Status:</h5>
							Finalizado
						</p>
					</div>
				</div>
				<div className="flex justify-between mt-5 lg:hidden">
					<Button title={"Botão principal"} theme={"tertiaryMobile"} />
					<Button title={"Botão principal"} theme={"primaryMobile"} />
				</div>

				<div className="justify-between hidden lg:flex mt-10">
					<Button title={"Meus Chamados"} theme={"tertiary"} />
					<Button title={"Abrir Chamados"} theme={"primary"} />
				</div>
			</div>
		</>
	);
}

export default CardHomeMobile;

// tirar o título
