
import { CardTitleImage } from "./CardTitleImage";
import { CardLine } from "./CardLine";
import { ReactNode } from "react";


interface CardFloatProps {
	children: React.ReactNode;
}

function CardFloat({children}: CardFloatProps) {

	return (
		<div className="mx-4">
			<div
				className="mx-auto mb-80 mt-18 flex h-auto max-w-2xl
				flex-col rounded-lg bg-white-ice pb-9 shadow-card lg:block
				lg:w-202 lg:max-w-card"
			>
				<div className="pl-9">
					<CardTitleImage title="Informações do Usuário" srcimage={"https://www.github.com/arthwrvl.png"} alt={"Imagem de perfil"} />
				</div>
				<div className="mx-9 mb-10 mt-4">
					<CardLine />
				</div>
					<>{children}</>
			</div>
		</div>
	);
}

export default CardFloat;
