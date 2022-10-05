import "../../styles/main.css";
import Button from '../../components/ButtonCardAction';
import CardTitle from '../../components/CardTitle';
import CardLine from '../../components/CardLine';
import CardFloatingLabelInput from "../../components/CardFloatingLabelInput";
import CardFloatingLabelTextarea from "../../components/CardFloatingLabelTextarea";

function FormService() {
  return (
		<>
			<div className="font-roboto mt-44 mb-[5.25rem] container w-[50.5rem] h-[32rem] mx-auto bg-branco-gelo rounded-lg shadow-sombra-card">
				<div className="pl-9 pt-[2.040625rem]">
					<CardTitle title="Solicitar Serviço" />
				</div>
				<div className="mt-[1.149375rem] mb-8">
					<CardLine />
				</div>
				<form action="">
					<div>
						<CardFloatingLabelInput label="Título" inputId="title" width="w-full" />
					</div>
					<div className="mt-6">
						<CardFloatingLabelTextarea label="Descrição" textareaId="description" />
					</div>
				</form>
				<div className="flex justify-end gap-x-3.5 mr-14 mt-[3.4375rem]">
					<Button
						title="Solicitar"
						bg="bg-cinza-texto"
						textColor="text-branco-100"
						textSize="text-base"
						lineHeight="leading-[1.625rem]"
						paddingHorizontal="px-[0.625rem]"
						height="h-[2.625rem]"
					/>
					<Button
						title="Cancelar"
						bg="bg-cinza-medio"
						textColor="text-cinza-texto"
						textSize="text-base"
						lineHeight="leading-[1.625rem]"
						paddingHorizontal="px-[0.625rem]"
						height="h-[2.625rem]"
					/>
				</div>
			</div>
		</>
	);
}

export default FormService;
