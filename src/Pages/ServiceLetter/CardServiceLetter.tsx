import { InfoServiceItem } from "./InfoService";
import * as Icon from "phosphor-react";
import { Button } from "../../components/Buttons/Button";
//import { ServicesList } from "./ServicesList";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

interface CardServiceLetterProps {
	service: Array<any>;
	index: number;
}

export function CardServiceLetter(props: CardServiceLetterProps) {
	const [floatingButton, setFloatingButton] = useState(false);

	const changeFloatingButton = () => {
		if (window.scrollY >= 80 && window.screen.width < 1024) {
			setFloatingButton(true);
		} else {
			setFloatingButton(false);
		}
	};

	const changeButtonName = () => {
		if (window.screen.width < 1024) {
			return "Abrir chamado";
		} else {
			return "Solicitar serviço";
		}
	};

	console.log(props.service[props.index]);

	window.addEventListener("scroll", changeFloatingButton);


	const { titleCategory, titleSubcategory, serviceLetter, idServiceLetter } = useParams()
	return (
		<div className="lg:bg-white-100 bg-white-strong-ice lg:mx-10 lg:rounded-lg lg:px-8 lg:py-8 lg:my-8 md:mx-16 text-justify">
			<div className="lg:flex lg:justify-between lg:items-baseline">
				<h3 className="pt-4 font-medium ml-4 text-3xl lg:text-4xl lg:flex lg:visible hidden">
					{props.service[props.index].title}
				</h3>
				<div className="mr-4 fixed bottom-9 right-0 lg:right-0 lg:top-0 lg:relative lg:flex lg:justify-end">
					<Link to={`/servicebook/${titleCategory}/${titleSubcategory}/${serviceLetter}/${idServiceLetter}`}>
						<Button
							title={floatingButton ? "" : changeButtonName()}
							theme="withIcon"
							icon={<Icon.PhoneOutgoing size={24} />}
						/>
					</Link>
				</div>
			</div>
			<InfoServiceItem infos={props.service[props.index].serviceLetter} />
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
