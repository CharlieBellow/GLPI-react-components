import React from "react";
import ButtonSelect from "./ButtonSelect";
import { Button } from "./Button";
import { CardTitle } from "./CardTitle";
import { CardLine } from "./CardLine";
import { CardLabelInput } from "./CardLabelInput";
import { CardLabelTextarea } from "./CardLabelTextarea";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//import { phoneNumber } from "../Utils/validations";
import { Formik, FormikHelpers, Field, Form, setNestedObjectValues } from "formik";

import { useForm } from "react-hook-form";
//import { useState } from 'react';

export const CardCreateService = () => {
	const serviceLocation = [
		{ id: 1, values: "Bloco A" },
		{ id: 2, values: "Bloco B" },
		{ id: 2, values: "Bloco C" },
		{ id: 2, values: "Bloco Med" },
		{ id: 2, values: "Bloco em L" },
		{ id: 2, values: "Casa Velha" },
		{ id: 2, values: "NCEX" },
		{ id: 2, values: "RU" },
		{ id: 2, values: "Administrativo" },
		{ id: 2, values: "Bloco Co}ordenações" },
		{ id: 2, values: "Transporte" },
	];
	//
	const validationSchema = yup.object().shape({
		title: yup
			.string()
			.min(5, "No mínimo 5 caracteres")
			.required("É obrigatório colocar um título"),
		description: yup
			.string()
			.min(10, "No mínimo 10 caracteres")
			.required("É obrigatório descrever o motivo"),
		//LocalService: yup.string(),
	});

//	function validate (values:any) {
//		const errors = {};
//
//		if ( !values.title ) {
//			errors.title = "O título é obrigatório"
//		}
//
//		return errors
//	}
	function onSubmit(values: any, ) {
		console.log("sumit", values);
	}

	return (
		<div className="mx-4">
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
				<Formik
					validationSchema={validationSchema}
					onSubmit={onSubmit}
					initialValues={{
						title: "",
						description: "",
						serviceLocal: "",
					}}
					render={({ values, handleSubmit, errors, touched }) => (
						<Form onSubmit={handleSubmit}>
							<div className="flex flex-col gap-9">
								<div className="mx-14">
									<CardLabelInput
										label="Título"
										name="title"
										type="text"
										width="w-full"
										inputId="title"
									/>
									{errors.title && (
										<span className="text-red-ufal text-sm">
											{errors.title}
										</span>
									)}
									{/*{ errors.title?.type }*/}
								</div>

								<div className="">
								<CardLabelTextarea
									label="Descrição"
									type="textarea"
									name="description"
									textareaId="description"
								/>
									{errors.description && (
										<span className="mx-14 text-red-ufal text-sm">
											{errors.description}
										</span>
									)}
								</div>
								{/*{errors.description?.message}*/}
								{/*{ errors.description?.type}*/}
								<div className="mx-14">
									{/*<Field as="select"> -- não aceita um componente select, não pega o estado -- */}
									<ButtonSelect
										type="select"
										name="serviceLocal"
										title="LOCAL DO SERVIÇO:"
										placeholder="LOCAL DO SERVIÇO:"
										listSelectButton={serviceLocation}
										className="block px-2.5 pb-2.5 pt-2.5 text-base text-light-bg bg-gray-medium focus:bg-transparent
													max-h-11 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-blue-ufal peer"
										triggerWidth="w-full"
										itemId={32}
										//selectValue={selectValue}
										//value={selectValue}

										//onChange={ e => {setSelectValue(e.target.value)}}
										//{...register('')}
									/>

									{/*</Field>*/}
								</div>
							</div>
							<div className="flex justify-end gap-x-3.5 mr-14 mt-10">
								<Button title="Solicitar" theme="primaryAction" type="submit" />
								<Button title="Cancelar" theme="secondaryAction" />
							</div>
						</Form>
					)}
				/>
			</div>
		</div>
	);
};

export default CardCreateService;

// mandar p/ back-end um objeto com titulo, descrição, local onde será realizado o serviço e categoria do serviço e subcategoria do serviço. adicionar input de local do serviço (select)
//resolver o problema dos botões
