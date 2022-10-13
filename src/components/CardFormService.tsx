import { Button } from './Button';
import { CardTitle } from './CardTitle';
import { CardLine } from './CardLine';
import { CardLabelInput } from "./CardLabelInput";
import { CardLabelTextarea } from "./CardLabelTextarea";

function CardFormService() {
  return (
		<div className="font-roboto mt-[4.5rem] mb-56 container w-[50.5rem] h-[31rem] mx-auto bg-branco-gelo rounded-lg shadow-sombra-card">
			<div className="pl-9 pt-8">
				<CardTitle title="Solicitar Serviço" />
			</div>
			<div className="mx-9 mt-4 mb-10">
				<CardLine />	
			</div>
			<form action="">
				<div className="mx-14">
					<CardLabelInput
						label="Título"
						type="text"
						inputId="title"
						width="w-full"
					/>
				</div>
				<div className="mt-9">
					<CardLabelTextarea
						label="Descrição"
						textareaId="description"
					/>
				</div>
			</form>
			<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
				<Button
					title="Solicitar"
					style="btn-primary-action"
				/>
				<Button
					title="Cancelar"
					style="btn-secondary-action"
				/>
			</div>
		</div>
	);
}

export default CardFormService;
