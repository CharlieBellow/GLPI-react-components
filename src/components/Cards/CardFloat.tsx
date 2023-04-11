
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
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9">
					<CardTitleImage title="Informações do Usuário" srcimage={"https://www.github.com/arthwrvl.png"} alt={"Imagem de perfil"} />
				</div>
				<div className="mx-9 mt-4 mb-10">
					<CardLine />
				</div>
					<>{children}</>
			</div>
		</div>
	);
}

export default CardFloat;
