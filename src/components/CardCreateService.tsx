import React from 'react';
import ButtonSelect from "./ButtonSelect";
import { Button } from './Button';
import { CardTitle } from './CardTitle';
import { CardLine } from './CardLine';
import { CardLabelInput } from "./CardLabelInput";
import { CardLabelTextarea } from "./CardLabelTextarea";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
//import { phoneNumber } from "../Utils/validations";



import { useForm } from "react-hook-form";
//import { useState } from 'react';






export const CardCreateService = () => {

	//const [selectValue, setSelectValue] = useState('')
	//const serviceLocation = [{ id: 1, values: 'Bloco A' }, { id: 2, values: 'Bloco B' }, { id: 2, values: 'Bloco C' }, { id: 2, values: 'Bloco Med' }, { id: 2, values: 'Bloco em L' }, { id: 2, values: 'Casa Velha' }, { id: 2, values: 'NCEX' }, { id: 2, values: 'RU' }, { id: 2, values: 'Administrativo' }, { id: 2, values: 'Bloco Co}ordenações' }, { id: 2, values: 'Transporte' }];
	//
	const validationSchema = yup.object().shape({
		title: yup.string().min(5, 'No mínimo 5 caracteres').required('É obrigatório colocar um título'),
		description: yup.string().min(5, 'No mínimo 5 caracteres').required('É obrigatório descrever o motivo'),
		//LocalService: yup.string(),
		
	
	})
	
	const { register, handleSubmit, formState: {errors }} = useForm(
		{ resolver: yupResolver(validationSchema) }
	)
	

	const newService = (service: any) => {
		console.log(service);
		
	}
  return (
		<div className='mx-4'>
			<div
				className="mt-18 mx-auto mb-80 flex flex-col lg:block
				bg-white-ice pb-9 rounded-lg max-w-2xl lg:max-w-card lg:w-202
				h-auto shadow-card"
			>
				<div className="pl-9 pt-8">
					<CardTitle title="Solicitar Serviço" />
				</div>
				<div className="mx-9 mt-4 mb-10">
		 			<CardLine />	
		 		</div>
				<form action="submit" className="" onSubmit={handleSubmit(newService)}>
		 			<div className='flex flex-col gap-9'>
			 			<div className='mx-14'>
			 				<CardLabelInput
			 					label="Título"
			 					type="text"
			 					inputId="title"
								width="w-full"
								{...register('title') }
							/>
							{/*{errors.title?.message}*/}
							{/*{ errors.title?.type }*/}
			 			</div>
						<CardLabelTextarea
							label="Descrição"
							textareaId="description"
							{...register('description')}
						/>
						{/*{errors.description?.message}*/}
						{/*{ errors.description?.type}*/}
			 			{/*<div className='mx-14'>
						 	<ButtonSelect
								title="LOCAL DO SERVIÇO:"
								placeholder="Local do serviço"
								listSelectButton={serviceLocation}
								className="block px-2.5 pb-2.5 pt-2.5 text-base text-light-bg bg-gray-medium focus:bg-transparent
								max-h-11 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-blue-ufal peer"
								triggerWidth="w-full"
								//selectValue={selectValue}
								//value={selectValue}
								
								//onChange={ e => {setSelectValue(e.target.value)}}
								//{...register('')}
								
							/>
			 			</div>*/}
			 		</div>
			 	</form>
			 	<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
			 		<Button
			 			title="Solicitar"
						theme="primaryAction"
						type="submit"
			 		/>
			 		<Button
			 			title="Cancelar"
			 			theme="secondaryAction"
			 		/>
			 	</div>
			</div>
		</div>
	);
}

export default CardCreateService;

// mandar p/ back-end um objeto com titulo, descrição, local onde será realizado o serviço e categoria do serviço e subcategoria do serviço. adicionar input de local do serviço (select)
//resolver o problema dos botões