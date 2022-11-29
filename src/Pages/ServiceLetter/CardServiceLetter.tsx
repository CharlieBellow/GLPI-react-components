import { InfoServiceItem } from "./InfoService";
import * as Icon from 'phosphor-react'
import { Button } from "../../components/Button";
import { ServicesList } from "./ServicesList";
import { useState } from "react";

interface CardServiceLetterProps {
	serviceTitle: string;
}

export function CardServiceLetter(props: CardServiceLetterProps) {

	const [floatingButton, setFloatingButton] = useState(false);

	const changeFloatingButton = () => {
		if (window.scrollY >= 80) {
			setFloatingButton(true);
		} else {
			setFloatingButton(false);
		}
	}

	window.addEventListener('scroll', changeFloatingButton);

	return (
		<div className="lg:bg-white-100 lg:mx-10 lg:rounded-lg lg:px-8 lg:py-8 lg:my-8 md:mx-16 text-justify">
			<div className="lg:flex lg:justify-between lg:items-baseline">
				<h3 className="pt-4 font-medium ml-4 text-3xl lg:text-4xl lg:flex">
					{props.serviceTitle}
				</h3>
				<div className="mr-4 flex justify-end">
					<Button
							// ver alguma forma de nao usar margin, pois nao é a maneira ideal
							className="mt-128 lg:mt-0" 
							title={floatingButton ? "" : "Solicitar serviço"}
							theme="withIcon"
							icon={<Icon.PhoneOutgoing size={24} />}
					/>
				</div>
			</div>
			<InfoServiceItem
				infos={ServicesList}
			/>
			<div className="ml-4 mt-9 flex gap-3.5 lg:visible invisible">
				<Button
					title="Solicitar Serviço"
					theme="primaryActionWithIcon"
					icon={<Icon.PhoneOutgoing size={24} />}
				/>
				<Button
					title="Esclarecer Dúvidas"
					theme="secondaryActionWithIcon"
					icon={<Icon.Question size={24} />}
				/>
				<Button
					title="Relatar Problema"
					theme="tertiaryActionWithIcon"
					icon={<Icon.Warning size={24} />}
				/>
			</div>
		</div>
	);
}