import { Button } from './Button';
import { CardTitle } from './CardTitle';
import { CardLine } from './CardLine';
import { CardLabelInput } from "./CardLabelInput";
import { CardLabelTextarea } from "./CardLabelTextarea";

function CardFormService() {
  return (
		<div className='mx-4'>
			<div
				className="font-roboto mt-[4.5rem] mx-auto mb-80 flex flex-col lg:block
				bg-branco-gelo pb-9 rounded-lg max-w-2xl lg:max-w-[50.5rem] lg:w-[50.5rem] h-auto shadow-sombra-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="Solicitar Serviço" />
				</div>
				<div className="mx-9 mt-4 mb-10">
		 			<CardLine />	
		 		</div>
				<form action="" className="">
		 			<div className='flex flex-col gap-9'>
			 			<div className='mx-14'>
			 				<CardLabelInput
			 					label="Título"
			 					type="text"
			 					inputId="title"
			 					width="w-full"	
			 				/>
			 			</div>
			 			<div className='mx-14'>
			 				<CardLabelInput
			 					label="Local do serviço"
			 					type="text"
			 					inputId="title"
			 					width="w-full"
			 				/>
			 			</div>
			 			<CardLabelTextarea
			 				label="Descrição"
			 				textareaId="description"
			 			/>
			 		</div>
			 	</form>
			 	<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
			 		<Button
			 			title="Solicitar"
			 			style={`btn-primary-action`}
			 		/>
			 		<Button
			 			title="Cancelar"
			 			style={`btn-secondary-action`}
			 		/>
			 	</div>
			</div>
		</div>
	);
}

export default CardFormService;

// mandar p/ back-end um objeto com titulo, descrição, local onde será realizado o serviço e categoria do serviço e subcategoria do serviço. adicionar input de local do serviço (select)
//resolver o problema dos botões