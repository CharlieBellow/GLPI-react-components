import "../../styles/main.css";
import Button from '../../components/Button';
import CardTitle from '../../components/CardTitle';
import CardLine from '../../components/CardLine';
import CardLabelInput from '../../components/CardLabelInput';
import CardLabelTextarea from "../../components/CardLabelTextarea";
import CardFloatingLabelInput from "../../components/CardFloatingLabelInput";
import CardFloatingLabelTextarea from "../../components/CardFloatingLabelTextarea";

function FormService() {
  return (
		<>
		
			
			<div className="font-roboto mt-44 mb-[5.25rem] container w-[50.5rem] h-[35.75rem] mx-auto bg-branco-gelo rounded-lg shadow-sombra-card">
				<div className="pl-9 pt-[2.040625rem]">
					<CardTitle title="Solicitar Serviço" />
				</div>
				<div className="mt-[1.149375rem] mb-6">
					<CardLine />
				</div>
				<form action="">
					<div>
						<CardFloatingLabelInput label="Título" inputId="title" />
						{/* <CardLabelInput
							label="Título"
							inputId="titulo"
							width="long-input"
						/> */}
					</div>
					<div className="mt-6">
						<CardFloatingLabelTextarea label="Descrição" textareaId="description" />
						{/* <CardLabelTextarea label="Descrição" textareaId="descricao" /> */}
					</div>
				</form>
				<div className="flex justify-end gap-x-3.5 mr-14 mt-[3.4375rem]">
					<Button
						title="Solicitar"
						classname="card-action-btn-primary"
					/>
					<Button title="Cancelar" classname="card-action-btn-secondary" />
				</div>
			</div>
		</>
	);
}

export default FormService;
