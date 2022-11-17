
//import { Icon, Target } from "phosphor-react";
import { ReactNode } from "react";

interface InfoServiceProps {
	title: string;
	icon: ReactNode;
	description: string;



}


// depois fazer um map nesse componente e sair colocando todas as informações como props (titulo da informação e descrição) aí cada chamado vai ter seu objeto com as informações necessárias.a´i já atribui um ícone padrão pra cada tipo de informação

// estilizar o acordeon
export function InfoService(props: InfoServiceProps) {
	return (
		<>
			<div className="  mt-3 mx-4">
				<div className="flex gap-2 items-center">
					{/*<Target weight="bold" />*/}
					{ props.icon}
					<h3 className="text-lg font-bold">{props.title}</h3>
				</div>
				<input
					type="checkbox"
					name="moreText"
					id="moreText"
					className="hidden"
				/>
				<div className="toggleCheck ">
					<p className="check">
						{ props.description}
					</p>

					<label htmlFor="moreText" className="label ">
						<p className="text-end">
							<strong className="show">...Mostrar mais</strong>
							<strong className="noShow">Mostrar menos</strong>
							<div className="border-b-2 border-gray-text"></div>
						</p>
					</label>
				</div>
			</div>
		</>
	);
}

