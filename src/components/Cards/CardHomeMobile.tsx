import { Button } from "../Buttons/Button";

function CardHomeMobile() {
	return (
		<>
			<div className="-mt-16 box-border h-[9.75rem] w-[19.5rem] rounded-lg bg-white-ice px-2 pt-2 shadow-card lg:mt-0 lg:h-auto lg:w-auto lg:p-4">
				<h4 className="text-base font-bold lg:text-4xl">Resumo</h4>
				<div className="flex flex-col gap-4">
					<div className="flex w-full justify-between">
						<div className="flex w-40 gap-2 text-xs lg:w-full lg:text-base">
							<h5 className="font-bold">Chamado atual:</h5>
							141526
						</div>

						<div className="flex w-26 flex-row gap-2  text-xs font-bold text-[#FFC107] lg:w-52 lg:text-base">
							<h5 className="text-black">Status:</h5>
							Pendente
						</div>
					</div>

					<div className="flex w-full items-center justify-between">
						<div className="font flex w-40  gap-2 text-xs lg:w-full lg:text-base">
							<h5 className="font-bold">Chamado anterior:</h5>
							131524
						</div>

						<div className="flex w-26 gap-2 text-xs font-bold text-[#DC3545] lg:w-52 lg:text-base">
							<h5 className="text-black">Status:</h5>
							Finalizado
						</div>
					</div>
				</div>
				<div className="mt-5 flex justify-between lg:hidden">
					<Button title={"Botão principal"} theme={"tertiaryMobile"} />
					<Button title={"Botão principal"} theme={"primaryMobile"} />
				</div>

				<div className="mt-10 hidden justify-between gap-4 text-base lg:flex">
					<Button title={"Meus Chamados"} theme={"tertiary"} />
					<Button title={"Abrir Chamados"} theme={"primary"} />
				</div>
			</div>
		</>
	);
}

export default CardHomeMobile;

// tirar o título
