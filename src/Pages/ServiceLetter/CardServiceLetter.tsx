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

		if (window.scrollY >= 80 && window.screen.width < 1024) {

			setFloatingButton(true);
		} else {
			setFloatingButton(false);
		}
	}

	const changeButtonName = () => {
		if (window.screen.width < 1024) {
			return "Abrir chamado";
		} else {
			return "Solicitar serviço";
		}
	}

	window.addEventListener('scroll', changeFloatingButton);

	return (
		<div className="lg:bg-white-100 bg-white-strong-ice lg:mx-10 lg:rounded-lg lg:px-8 lg:py-8 lg:my-8 md:mx-16 text-justify">

			<div className="lg:flex lg:justify-between lg:items-baseline">
				<h3 className="pt-4 font-medium ml-4 text-3xl lg:text-4xl lg:flex lg:visible hidden">
					{props.serviceTitle}
				</h3>
				<div className="mr-4 fixed bottom-9 right-0 lg:right-0 lg:top-0 lg:relative lg:flex lg:justify-end">

					<Button
							title={floatingButton ? "" : changeButtonName()}
							theme="withIcon"
							icon={<Icon.PhoneOutgoing size={24} />}
					/>
				</div>
			</div>
			<InfoServiceItem
				infos={ServicesList}
			/>
			<div className="ml-4 mt-9 gap-3.5 lg:flex hidden">
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